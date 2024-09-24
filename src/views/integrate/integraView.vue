<template>
    <div class="wrapper">
        <!-- <SideBar /> -->
        <div class="main">
            <NavBar />
            <main class="content">
                <div class="container-fluid p-0">
                    <h1 class="h3 mb-3"><strong>Zonu |</strong> Integração</h1>
                    <div class="row">
                        <div class="col-md-12 col-xl-2"></div>
                        <div class="col-md-12 col-xl-8">
                            <div class="card mb-3">
                                <div class="card-body">
                                    <div class="container">
                                        <div class="row">
                                            <table class="table">
                                                <thead>
                                                    <tr class="text-center">
                                                        <th scope="col">Ferramenta</th>
                                                        <th scope="col">Ação</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" class="text-center">
                                                            <img src="../../../assets/img/icons/logoMeta.png"
                                                                width="100" alt="">
                                                        </th>
                                                        <td class="text-center">
                                                            <button class="btn btn-primary btn-lg btn-block ms-4"
                                                                @click="loginWithFacebook">
                                                                <i class="fa fa-facebook"></i> Conectar via Facebook
                                                            </button>
                                                            <button class="btn btn-danger btn-lg btn-block ms-2">
                                                                <i class="fa fa-facebook"></i> Desconectar do Facebook
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-xl-2"></div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    </div>
</template>

<script>
//   import SideBar from "../../../components/sidebar/index.vue";
import NavBar from "../../components/navbar/navbar-imobiliaria.vue";
import Footer from "../../components/footer/index.vue";
import api from '../../../service/api/facebook'
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
export default {
    name: "IntegrateView",
    data() {
        return {
            myToken: "",
            pageId: '',
            app_ID: '831484942355084',
            REDIRECT_URI: 'https://zonu.com.br/api/facebook/callback',
            facebookSDKLoaded: false,
            token: localStorage.getItem("token"),
        };
    },
    components: {
        //   SideBar,
        NavBar,
        Footer,
    },

    mounted() {
        window.fbAsyncInit = () => {
            FB.init({
                appId: this.app_ID,
                cookie: true,
                xfbml: true,
                version: 'v20.0',
            });

            this.facebookSDKLoaded = true;
        };

        // Carrega o SDK do Facebook
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    },

    methods: {
        loginWithFacebook() {
            if (!this.facebookSDKLoaded) {
                console.log('O SDK do Facebook ainda não foi carregado.');
                return;
            }

            FB.login(response => {
                if (response.authResponse) {
                    // Usuário autenticado, obtenha o token de acesso
                    console.log(response);
                    this.myToken = response.authResponse.accessToken;
                    console.log('User logged in, Access Token:', this.myToken);



                    // A partir daqui, você pode usar o token para acessar as APIs do Facebook
                    // Exemplo de chamada para obter os formulários
                    this.postTokenFacebook(this.myToken);
                } else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            }, { scope: 'leads_retrieval,ads_management,pages_read_engagement,pages_manage_ads,pages_manage_ads' });
        },

        async postTokenFacebook() {
            try {

                let decode = await jwtDecode(this.token);

                console.log(decode)

                const response = await api.sendToken(this.myToken, decode.id_user)

                axios.get(`https://graph.facebook.com/v17.0/me/accounts`, {
                    params: {
                        access_token: this.myToken,
                    }
                })
                    .then(response => {
                        console.log('Páginas do usuário:', response.data.data);
                        response.data.data.map((page) => {
                            console.log(page.id)
                            this.pageId = page.id
                            this.fetchLeadForms(page.access_token)
                        })
                        // Aqui você pode manipular os dados das páginas conforme necessário
                    })
                    .catch(error => {
                        console.error('Erro ao buscar páginas:', error);
                    });

            } catch (error) {
                console.log(error)
            }
        },

        redirectToFacebookAuth() {
            const facebookAuthURL = `https://www.facebook.com/v12.0/dialog/oauth?client_id=${this.app_ID}&redirect_uri=${this.REDIRECT_URI}&scope=leads_retrieval`;
            window.open(facebookAuthURL, '_blank'); // Abre a URL em uma nova aba
        },

        fetchLeadForms(accessToken) {

            axios.get(`https://graph.facebook.com/v17.0/${this.pageId}/leadgen_forms`, {
                params: {
                    access_token: accessToken,
                }
            })
                .then(response => {
                    console.log('Formulários de Lead:', response.data);

                    response.data.data.map((form) => {
                        console.log(form.id)

                        this.fetchLeadFromForms(form.id)

                    });

                })
                .catch(error => {
                    console.error('Erro ao buscar formulários:', error);
                });
        },

        fetchLeadFromForms(formId) {

            const response = axios.get(`https://graph.facebook.com/v17.0/${formId}/leads`, {
                params: {
                    access_token: this.myToken,
                }
            }).then(response => {
                console.log('Leads do formulário:', response.data);
            })
                ;

        }
    },
};
</script>