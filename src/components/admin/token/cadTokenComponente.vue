<template>
    <div class="row">

        <div class="card col-4" style=" height: 320px;">
            <div class="card-header">
                <h5 class="card-title mb-0"><i class="fa fa-key"></i> Cadastro de Token Asaas</h5>
            </div>
            <div class="card-body py-3">
                <div class="container">
                    <div v-if="msgSuccess" class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong><i class="fa fa-check"></i> Sucesso!</strong>
                        Nova chave cadastrada.
                    </div>
                    <div class="row">
                        <div class="form-group col-md-12">
                            <label for="nome"><small><strong>Chave Secreta Asaas</strong></small></label>
                            <input type="text" v-model="tokenKey" class="form-control mt-2" id="nome"
                                placeholder="Digite o Token aqui" />
                        </div>

                        <div class="form-group col-md-12 mt-3">
                            <label for="nome"><small><strong>URL Base</strong></small></label>
                            <input type="text" v-model="urlPadrao" class="form-control mt-2" id="nome"
                                placeholder="https://api.asaas.com/" />
                        </div>

                        <div class="mt-4 d-grid gap-2 d-md-flex justify-content-md-end">
                            <button :disabled="autenticando" @click="handleSalvarTokenZonu()" class="btn btn-success"
                                type="button">
                                {{ textoBotao }}
                                <span v-if="autenticando" class="spinner-border spinner-border-sm"
                                    aria-hidden="true"></span>
                                <span v-if="autenticando" class="visually-hidden">Aguarde...</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>



        <div class="card col-7" style="margin-left: 2%;">
            <div class="card-header">
                <h5 class="card-title mb-0"><i class="fa fa-list"></i> Chaves ativas</h5>
            </div>
            <div class="card-body">
                <div class="container">
                    <div class="row">
                        <div class="col-12 gap-2 d-md-flex justify-content-md-end">
                            <img src="../../../../assets/images/logo_asaas.png" style="margin-top: -100px;"
                                class="img-fluid" alt="">
                        </div>

                        <div class="col-12">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Key</th>

                                        <th scope="col">Ação</th>
                                    </tr>
                                </thead>
                                <tbody v-for="itens in tokensLists">
                                    <tr>
                                        <th scope="row">{{ itens.id_token_pay }}</th>
                                        <td>{{ truncate(itens.api_key, 10) }}</td>
                                        <td>{{ itens.url_base }}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>



</template>
<script>
import api from '../../../../service/api/token/index.js'
export default {
    name: 'CadTokenComponent',
    data() {
        return {
            nome: '',
            autenticando: false,
            textoBotao: 'Salvar',
            urlPadrao: '',
            tokenKey: '',
            msgSuccess: false,
            tokensLists: []

        };
    },

    mounted() {

        this.getList();

    },

    methods: {
        handleSalvarTokenZonu() {
            this.autenticando = true;
            this.textoBotao = 'Salvando...';

            let urlPadrao = this.urlPadrao
            let tokenKey = this.tokenKey

            api.novoToken(tokenKey, urlPadrao).then((res) => {

                if (res.status === 201) {

                    this.msgSuccess = true;
                    this.urlPadrao = ''
                    this.tokenKey = ''
                    this.autenticando = false

                    this.getList();

                    setTimeout(() => {
                        this.msgSuccess = false;
                    }, 3000);
                }
            });

            setTimeout(() => {
                this.autenticando = false;
                this.textoBotao = 'Salvar';
            }, 3000);
        },

        truncate(text, length) {
            if (text.length <= length) {
                return text;
            }
            return text.substring(0, length) + '...';
        },

        getList() {
            api.listTokens().then((res) => {
                this.tokensLists = res.data;


            });
        }


    }
}
</script>