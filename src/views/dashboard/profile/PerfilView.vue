<template>
    <div class="wrapper">
        <SideBar />
        <div class="main">
            <NavBar />
            <main class="content">
                <div class="container-fluid p-0">

                    <h1 class="h3 mb-3"><strong>Seu perfil |</strong> dados</h1>
                    <div class="row">
                        <div class="col-md-12 col-xl-5">
                            <div class="card mb-3">
                                <div class="card-header">
                                    <h5 class="card-title mb-0"><i class="fa fa-user"></i> Detalhes do perfil <span
                                            style="float: inline-end;">
                                            <a data-bs-toggle="modal" data-bs-target="#exampleModal"
                                                class="btn btn-info btn-sm" style="margin-right: 3px;" href="#"><i
                                                    class="fa fa-refresh"></i> Trocar
                                                senha</a>
                                        </span></h5>
                                </div>
                                <div class="card-body">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div v-if="image == null || image == '/avatar/default-avatar.png'"
                                                    class="avatar-null rounded me-1 mb-4"
                                                    style="width: 128px; height: 128px; font-size: 40px; justify-content: center; align-items: center; display: flex;">
                                                    {{ iniciais }}</div>
                                            </div>

                                            <div class="col-md-8 text-left">
                                                <label for=""><small><strong>Nome de usuário</strong></small></label>
                                                <h5 class="text-muted mb-0">{{ nome }} {{ sobrenome }}</h5>

                                                <label for=""
                                                    class="mt-2"><small><strong>E-mail</strong></small></label>
                                                <h5 class="text-muted mb-0">{{ email }}</h5>

                                                <label for="" class="mt-2"><small><strong>Nivel</strong></small></label>
                                                <h5 v-if="nivel == 1" class="text-muted mb-0"><span
                                                        class="badge text-bg-primary">Administrador</span></h5>
                                                <h5 v-if="nivel == 2" class="text-muted mb-0"><span
                                                        class="badge text-bg-primary">Construtora</span></h5>


                                            </div>

                                        </div>
                                    </div>


                                    <h5 class="card-title mb-0"></h5>
                                    <div class="text-muted mb-0"></div>

                                    <div class="text-muted mb-2"></div>

                                    <div>


                                    </div>
                                </div>

                                <hr class="my-0" />
                                <div class="card-body">
                                    <h5 class="h6 card-title"><i class="fa fa-bar-chart" aria-hidden="true"></i>
                                        Financeiro</h5>
                                    <label for=""><small><strong>Seu plano:</strong></small></label>
                                    <h5 class="text-muted mb-0">Zonu PRO</h5>
                                </div>

                            </div>
                        </div>

                        <div class="col-md-12 col-xl-7" v-if="card">
                            <div class="card mb-3">
                                <div class="card-header">
                                    <h5 class="card-title mb-0"><i class="fa fa-building"></i> Detalhes da empresa <span
                                            style="float: inline-end;"></span></h5>
                                </div>
                                <div class="card-body">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div v-if="image == null || image == '/avatar/default-avatar.png'"
                                                    class="avatar-null rounded me-1 mb-4"
                                                    style="width: 128px; height: 128px; font-size: 40px; justify-content: center; align-items: center; display: flex;">
                                                    <i class="fa fa-building fa-2x"></i>
                                                </div>

                                            </div>

                                            <div class="col-md-8 text-left">
                                                <label for=""><small><strong>Razão Social</strong></small></label>
                                                <h5 class="text-muted mb-0">{{ razaoSocial }}</h5>

                                                <label for="" class="mt-2"><small><strong>CNPJ</strong></small></label>
                                                <h5 class="text-muted mb-0">{{ cnpj }}</h5>

                                                <label for=""
                                                    class="mt-2"><small><strong>Endereço</strong></small></label>
                                                <h5 class="text-muted mb-0">{{ endereco }}</h5>


                                            </div>

                                            <div class="col-md-12 text-left">
                                                <label for=""><small><strong><i class="fa fa-link"></i> Token
                                                            único</strong></small></label>
                                                <h5 class="text-muted mb-0">{{ myToken }}</h5>
                                            </div>
                                        </div>
                                    </div>





                                    <div class="text-muted mb-2"></div>


                                </div>

                                <hr class="my-0" />
                                <div class="card-body">
                                    <h5 class="h6 card-title"><i class="fa fa-qrcode"></i> Seu Qr-code</h5>
                                    <img :src="qrcode" width="200" alt="">
                                </div>

                            </div>
                        </div>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel"><i class="fa fa-edit"></i>
                                            Edite sua senha</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="mb-3">
                                                        <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                        <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                        <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                            class="form-label">Crie uma
                                                            senha
                                                        </label>
                                                        <input type="password" required v-if="!mostrarSkeleton"
                                                            class="form-control" v-model="senha"
                                                            :class="{ 'is-invalid': isEmailInvalid }"
                                                            placeholder="Digite sua senha" />
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="mb-3">
                                                        <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                        <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                        <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                            class="form-label">Confirme
                                                            a senha
                                                        </label>
                                                        <input type="password" required v-if="!mostrarSkeleton"
                                                            class="form-control" v-model="confimSenha"
                                                            placeholder="Digite a senha novamente" />

                                                        <p class="text-danger mt-2"
                                                            v-if="confimSenha && !passwordsMatch">
                                                            <i class="fa fa-ban"></i> As senhas não conferem!
                                                        </p>
                                                        <p class="text-success mt-2"
                                                            v-if="confimSenha && passwordsMatch">
                                                            <i class="fa fa-check"></i> As senhas conferem
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Cancelar</button>
                                        <button type="button" :disabled="autenticando" @click="handledEdit()"
                                            class="btn btn-success">{{ textoBotao }}
                                            <span v-if="autenticando" class="spinner-border spinner-border-sm"
                                                aria-hidden="true"></span>
                                            <span v-if="autenticando" class="visually-hidden">Aguarde...</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </main>

            <Footer />


        </div>
    </div>
</template>
<script>
import SideBar from '../../../components/sidebar/index.vue';
import NavBar from '../../../components/navbar/index.vue';
import Footer from '../../../components/footer/index.vue';
import { jwtDecode } from "jwt-decode";
import api from '../../../../service/api/index';

export default {
    name: 'PerfilView',
    data() {
        return {
            textoBotao: "Alterar senha",
            autenticando: false,
            image: '',
            nome: '',
            sobrenome: '',
            email: '',
            nivel: '',
            iniciais: '',
            plano: '',
            senha: '',
            confimSenha: '',
            razaoSocial: '',
            cnpj: '',
            endereco: '',
            myToken: '',
            qrcode: '',
            idUser: '',
            card: true,
        }
    },
    components: {
        SideBar,
        NavBar,
        Footer
    },
    computed: {
        passwordsMatch() {
            return this.senha === this.confimSenha;
        },
    },
    mounted() {
        let token = localStorage.getItem('token')
        this.token = token;
        let decode = jwtDecode(token);

        if (decode.perfil == null) {
            this.card = false
        }
        else if (decode.perfil !== null) {
            this.card = true
            this.razaoSocial = decode.perfil.razao_social
            this.cnpj = decode.perfil.cnpj
            this.endereco = decode.perfil.endereco
            this.qrcode = decode.qrcode.qrcode
            this.myToken = decode.token.token
        }

        this.image = decode.avatar
        this.idUser = decode.id_user
        this.nome = decode.nome
        this.sobrenome = decode.sobrenome
        this.email = decode.email
        this.nivel = decode.id_nivel
        this.plano = decode.id_plano


        const iniciais = this.nome.charAt(0) + this.sobrenome.charAt(0);
        this.iniciais = iniciais
    },

    methods: {

        async handledEdit() {
            let id_user = this.idUser
            let senha = this.senha
            this.autenticando = true

            await api.alteraSenha(senha, id_user).then((res) => {

                if (res.status == 200) {
                    this.textoBotao = 'Senha alterada com sucesso....'

                    setTimeout(() => {
                        window.location.reload()
                    }, 3000)


                }
            })

        }
    }
}
</script>