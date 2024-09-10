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
                                                            <button class="btn btn-primary btn-lg btn-block"
                                                                @click="loginWithFacebook">
                                                                <i class="fa fa-facebook"></i> Conectar via Facebook
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

export default {
    name: "IntegrateView",
    data() {
        return {
            myToken: "",
        };
    },
    components: {
        //   SideBar,
        NavBar,
        Footer,
    },

    mounted() {
        // Inicializa o Facebook SDK
        window.fbAsyncInit = function () {
            FB.init({
                appId: '1506040373608351',  // Substitui com o ID do teu app
                cookie: true,
                xfbml: true,
                version: 'v20.0'
            });
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
            FB.login(response => {
                if (response.authResponse) {
                    // Usuário autenticado, obtenha o token de acesso
                    console.log(response)
                    this.myToken = response.authResponse.accessToken;
                    console.log('User logged in, Access Token:', this.myToken);

                    // A partir daqui, você pode usar o token para acessar os formulários do usuário
                    // Exemplo de chamada para obter os formulários
                    // this.fetchLeadForms(this.myToken);
                } else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            }, { scope: 'leads_retrieval,ads_management,pages_read_engagement' });
        },

        fetchLeadForms(accessToken) {
            const pageId = 'ID_DA_PAGINA_DO_USUARIO'; // Substitua pelo ID da página que você deseja acessar

            axios.get(`https://graph.facebook.com/v17.0/${pageId}/leadgen_forms`, {
                params: {
                    access_token: accessToken,
                }
            })
                .then(response => {
                    console.log('Formulários de Lead:', response.data);
                    // Aqui você pode manipular os dados dos formulários conforme necessário
                })
                .catch(error => {
                    console.error('Erro ao buscar formulários:', error);
                });
        }
    },
};
</script>