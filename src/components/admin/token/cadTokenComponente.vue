<template>
    <div class="row">

        <div class="card col-4" style=" height: 220px;">
            <div class="card-header">
                <h5 class="card-title mb-0"><i class="fa fa-key"></i> Cadastro de Token Asaas</h5>
            </div>
            <div class="card-body py-3">
                <div class="container">
                    <div class="row">
                        <div class="form-group col-md-12">
                            <label for="nome"><small><strong>Chave Secreta Asaas</strong></small></label>
                            <input type="text" v-model="nome" class="form-control mt-2" id="nome"
                                placeholder="Digite o Token aqui" />
                        </div>

                        <div class="mt-4 d-grid gap-2 d-md-flex justify-content-md-end">
                            <button :disabled="autenticando" @click="handleSalvarUserZonu()" class="btn btn-success"
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
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>@mdo</td>
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
export default {
    name: 'CadTokenComponent',
    data() {
        return {
            nome: '',
            autenticando: false,
            textoBotao: 'Salvar'
        };
    }
}
</script>