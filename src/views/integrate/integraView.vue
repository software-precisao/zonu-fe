<template>
    <div class="wrapper">
        <!-- <SideBar /> -->
        <div class="main">
            <NavBar />
            <main class="content">
                <div class="container-fluid p-0">
                    <h1 class="h3 mb-3"><strong>Zonu |</strong> Integração</h1>
                    <div class="row">
                        <span class="alert alert-danger" v-if="msgErrorEtapas">Você não selecionou o funil! Deseja
                            selecionar > <a href="/seu-crmconfig" class="btn btn-warning">Configurações</a></span>
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
                                                            <button class="btn btn-danger btn-lg btn-block ms-2"
                                                                @click="logoutFacebook">
                                                                <i class="fa fa-facebook"></i> Desconectar do Facebook
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <!-- {{ console.log("Formularios ===>", formsLeads) }}
                                            {{ console.log("Leads ===>", leads) }} -->

                                            <div class="modal fade" id="manageFormsModal" tabindex="-1"
                                                aria-labelledby="manageFormsLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-xl">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="manageFormsLabel">Facebook -
                                                                Integração com Formulários (Leads)</h5>
                                                            <button type="button" class="btn-close"
                                                                data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body mt-4">
                                                            <!-- Exiba os formulários aqui -->
                                                            <div class="row">
                                                                <span class="alert alert-danger col-12"
                                                                    v-if="msgErroImovelNull">Selecione os
                                                                    imoveis do
                                                                    formulário</span>
                                                                <span class="alert alert-success col-12"
                                                                    v-if="msgSuccess">Leads salvos com sucesso!</span>
                                                                <ul class="col-12"
                                                                    style="display: flex; flex-direction: column;">
                                                                    <li v-for="(form, index) in formsLeads"
                                                                        :key="form.id" class="pb-4 pt-4"
                                                                        style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgb(211, 220, 235)">
                                                                        <span class="ms-4 col-3"><strong
                                                                                style="font-size: 18px;">Fomulário:
                                                                            </strong>
                                                                            {{ form.name
                                                                            }}</span>
                                                                        <div class="col-8" style="display: flex">
                                                                            <div
                                                                                style="display: flex; flex-direction: column; margin-right: 30px;">
                                                                                <span
                                                                                    style="margin-top: -8px; margin-bottom: 8px">Atribuir
                                                                                    contato
                                                                                    para</span>
                                                                                <div style="display: flex;">
                                                                                    <button class="btn me-2"
                                                                                        :class="form.leadOff == true ? 'btn-success' : 'btn-outline-secondary'"
                                                                                        @click="handleOption(form, 'semLeads')">Não
                                                                                        receber leads</button>
                                                                                    <button class="btn me-2"
                                                                                        :class="form.imovelOff == true ? 'btn-success' : 'btn-outline-secondary'"
                                                                                        v-if="nivel == 4"
                                                                                        @click="handleOption(form, 'imovelOff')">Corretor</button>

                                                                                    <button class="btn me-2"
                                                                                        :class="form.imovelOff == true ? 'btn-success' : 'btn-outline-secondary'"
                                                                                        v-if="nivel == 5 || nivel == 6"
                                                                                        @click="handleOption(form, 'imovelOff')">Imobiliária</button>

                                                                                    <button class="btn me-2"
                                                                                        :class="form.imovelOff == true ? 'btn-success' : 'btn-outline-secondary'"
                                                                                        v-if="nivel == 1"
                                                                                        @click="handleOption(form, 'imovelOff')">Admin</button>

                                                                                    <button class="btn me-2"
                                                                                        :class="form.imovel == true ? 'btn-success' : 'btn-outline-secondary'"
                                                                                        @click="handleOption(form, 'imovel')">Imóvel</button>
                                                                                </div>
                                                                            </div>


                                                                            <div class="form-group col-5"
                                                                                v-if="form.imovel"
                                                                                style="margin-top: -10px;">
                                                                                <label for="client"
                                                                                    style="font-weight: 600">Encontre o
                                                                                    imóvel</label>
                                                                                <div class="custom-select"
                                                                                    ref="selectContainerImovel">
                                                                                    <div class="select-box"
                                                                                        @click="toggleDropdownImovel(form)"
                                                                                        :aria-expanded="form.isOpenImovel ? form.isOpenImovel.toString() : 'false'"
                                                                                        role="button" tabindex="0">
                                                                                        <span
                                                                                            v-if="form.selectedOptionImovel">{{
                                                                                                form.selectedOptionImovel.descricao.titulo
                                                                                            }}</span>
                                                                                        <span v-else>Escolha uma opção
                                                                                            de imóvel</span>
                                                                                        <i class="align-middle"
                                                                                            data-feather="chevron-down"></i>
                                                                                    </div>

                                                                                    <ul v-if="form.isOpenImovel"
                                                                                        class="options-list">
                                                                                        <li v-for="item in imovel"
                                                                                            :key="item.id_imovel"
                                                                                            @click="selectOptionImovel(form, item)">
                                                                                            <div style="display: flex">
                                                                                                <img :src="`https://api.zonu.com.br${item.fotos[0].foto}`"
                                                                                                    style="width: 70px; height: 70px; border-radius: 10px; margin-top: 3px; margin-right: 8px;" />
                                                                                                <div
                                                                                                    style="display: flex; flex-direction: column; justify-content: center;">
                                                                                                    <h2
                                                                                                        style="margin: 0; padding: 0; font-size: 14px; font-weight: 600;">
                                                                                                        {{
                                                                                                            item.descricao.titulo
                                                                                                        }}</h2>
                                                                                                    <p
                                                                                                        style="margin: 0; padding: 0; font-size: 14px; font-weight: 500; color: #31d084;">
                                                                                                        R${{
                                                                                                            aplicaMascaraDinheiroPrecoImovel(item.preco.preco_imovel)
                                                                                                        }}</p>
                                                                                                    <p
                                                                                                        style="margin: 0; padding: 0; font-size: 14px; font-weight: 400;">
                                                                                                        {{
                                                                                                            item.localizacao.bairro
                                                                                                        }} - {{
                                                                                                            item.localizacao.cidade
                                                                                                        }}/{{
                                                                                                            item.localizacao.estado
                                                                                                        }}</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary"
                                                                data-bs-dismiss="modal">Fechar</button>
                                                            <button type="button" class="btn btn-success"
                                                                @click="handleSalvarLeads">{{ textbtnSalvar }}</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


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
import apiIndex from '../../../service/api/index'
import apiCrm from '../../../service/api/crm/index'
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
export default {
    name: "IntegrateView",
    data() {
        return {
            myToken: "",
            pageId: '',
            app_ID: '831484942355084',
            REDIRECT_URI: 'https://api.zonu.com.br/facebook/callback',
            facebookSDKLoaded: false,
            token: localStorage.getItem("token"),
            nivel: '',
            id_user: '',

            // formsLeads: [
            //     {
            //         name: 'testetestetestetestetestetestetestetestetestetestetesteteste', id: 1,
            //         imovel: false,
            //         leadOff: true,
            //         isOpenImovel: false,
            //         selectedOptionImovel: null,
            //         imovelOff: false,
            //         leads: [
            //             {
            //                 field_data: [
            //                     {
            //                         name: "first_name", values: [
            //                             "Ragner", "Julia"
            //                         ]
            //                     },
            //                     {
            //                         name: "phone_number", values: [
            //                             "+558343453434", "+5588888888"
            //                         ]
            //                     },
            //                     {
            //                         name: "email", values: [
            //                             "ragner@softwareprecisao.com", "julia@softwareprecisao.com"
            //                         ]
            //                     }
            //                 ]
            //             }
            //         ]
            //     },
            //     {
            //         name: 'teste2teste2teste2teste2teste2teste2teste2teste2teste2', id: 2,
            //         imovel: false,
            //         leadOff: true,
            //         isOpenImovel: false,
            //         selectedOptionImovel: null,
            //         imovelOff: false,
            //         leads: [
            //             {
            //                 field_data: [
            //                     {
            //                         name: "first_name", values: [
            //                             "Rodrigo", "Noiva"
            //                         ]
            //                     },
            //                     {
            //                         name: "phone_number", values: [
            //                             "+5583999907811", "+55999999999"
            //                         ]
            //                     },
            //                     {
            //                         name: "email", values: [
            //                             "delayproducoes@gmail.com", "noiva@gmail.com"
            //                         ]
            //                     }
            //                 ]
            //             }
            //         ]
            //     }
            // ],
            formsLeads: [],
            leads: [],

            imovel: [],
            // isOpen: false,
            // isOpenImovel: false,
            // selectedOption: null,
            // selectedOptionImovel: null,

            etapaLocacao: null,
            etapaVenda: null,

            textbtnSalvar: "Salvar",
            msgErroImovelNull: false,
            msgSuccess: false,
            msgErrorEtapas: false
        };
    },
    components: {
        //   SideBar,
        NavBar,
        Footer,
    },

    mounted() {
        let decode = jwtDecode(this.token)
        this.id_user = decode.id_user
        this.nivel = decode.id_nivel

        window.fbAsyncInit = () => {
            FB.init({
                appId: this.app_ID,
                cookie: true,
                xfbml: true,
                version: 'v20.0',
            });

            this.facebookSDKLoaded = true;
            FB.XFBML.parse()
        };

        // setTimeout(() => {
        //     console.log(this.etapaVenda.length > 0, this.etapaLocacao.length > 0)
        //     if (this.etapaVenda.length > 0 && this.etapaLocacao.length > 0) {
        //         const modal = new bootstrap.Modal(document.getElementById('manageFormsModal'));
        //         modal.show();

        //         const modalElement = document.getElementById('manageFormsModal');
        //         // Adiciona o listener ao evento de fechamento do modal
        //         modalElement.addEventListener('hidden.bs.modal', () => {
        //             document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
        //         });
        //     } else {
        //         this.msgErrorEtapas = true
        //     }
        // }, 2000);

        // Carrega o SDK do Facebook
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        this.fetchImoveis()
        this.fetchEtapas()
    },

    methods: {
        loginWithFacebook() {
            if (this.etapaVenda.length == 0 && this.etapaLocacao.length == 0) {
                this.msgErrorEtapas = true
            }
            if (!this.facebookSDKLoaded) {
                console.log('O SDK do Facebook ainda não foi carregado.');
                return;
            }

            FB.login(response => {
                console.log(response);
                if (response.authResponse) {
                    // Usuário autenticado, obtenha o token de acesso
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

                    if (response.data.data && response.data.data.length > 0) {
                        // Mapeia os formulários e inicializa o campo 'leads'
                        const formsWithLeads = response.data.data.map(form => ({
                            ...form,
                            leads: [], // Inicializa o array 'leads' para cada formulário
                            imovel: false,
                            leadOff: true,
                            isOpenImovel: false,
                            selectedOptionImovel: null
                        }));

                        // Adiciona os formulários ao formsLeads
                        this.formsLeads.push(...formsWithLeads);
                    }

                    // Para cada formulário, buscar os leads
                    response.data.data.forEach((form) => {
                        this.fetchLeadFromForms(form); // Puxa os leads do respectivo formulário
                    });

                })
                .catch(error => {
                    console.error('Erro ao buscar formulários:', error);
                });
        },

        logoutFacebook() {
            let id = this.id_user

            api.logoutFacebook(id).then((res) => {
                console.log(res)
            })
        },

        async fetchLeadFromForms(form) {
            let formId = form.id;

            try {
                const response = await axios.get(`https://graph.facebook.com/v17.0/${formId}/leads`, {
                    params: {
                        access_token: this.myToken,
                    }
                });

                console.log('Leads do formulário:', response);

                // Verifica se há leads no formulário
                if (response.data.data && response.data.data.length > 0) {
                    // Adiciona os leads ao campo 'leads' do formulário
                    const formIndex = this.formsLeads.findIndex(f => f.id === formId);
                    if (formIndex !== -1) {
                        this.formsLeads[formIndex].leads.push(...response.data.data);
                    }
                }

                // Abre o modal após salvar os leads
                const modal = new bootstrap.Modal(document.getElementById('manageFormsModal'));
                modal.show();

                const modalElement = document.getElementById('manageFormsModal');
                // Adiciona o listener ao evento de fechamento do modal
                modalElement.addEventListener('hidden.bs.modal', () => {
                    document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
                });
            } catch (error) {
                console.error('Erro ao buscar leads do formulário:', error);
            }
        },

        handleOption(form, event) {
            if (event == 'imovel') {
                form.imovel = true; // Altera o imovel do form específico
                form.leadOff = false
                form.imovelOff = false
            } else if (event == 'semLeads') {
                form.leadOff = true
                form.imovel = false
                form.imovelOff = false
                form.selectedOptionImovel = null
            } else if (event == 'imovelOff') {
                form.leadOff = false
                form.imovel = false; // Altera o imovel do form específico
                form.imovelOff = true
                form.selectedOptionImovel = null
            }
        },

        fetchImoveis() {
            apiIndex.listallImoveis().then((res) => {
                if (res.status === 200) {
                    this.imovel = res.data
                }
            })
        },

        toggleDropdownImovel(form) {
            form.isOpenImovel = !form.isOpenImovel; // Abre/fecha o dropdown do form específico
        },
        selectOptionImovel(form, item) {
            form.selectedOptionImovel = item; // Armazena a opção selecionada no form específico
            form.isOpenImovel = false; // Fecha o dropdown após a seleção
        },

        aplicaMascaraDinheiroPrecoImovel(preco) {
            let v = preco;

            // Remove tudo o que não é dígito
            v = v.replace(/\D/g, "");

            // Divide o número para preparar a adição de vírgula e ponto
            let valorDecimal = parseInt(v) / 100;

            // Formata o número como valor monetário
            return valorDecimal.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });
            // console.log(this.currentImovel)
        },

        handleSalvarLeads() {
            this.textbtnSalvar = "Salvando..."

            let forms = this.formsLeads
            let name = null
            let phone = null
            let email = null
            let idCaptacaoFacebook = 3
            let idUser = this.id_user

            console.log("Aqui estao os forms que serão salvos ===>", forms)

            forms.map((form) => {
                if (form.imovelOff == true && form.leads) {
                    console.log("Salvar apenas os clientes ====>", form)
                    if (form.leads.length > 0) {
                        form.leads.map((lead) => {
                            lead.field_data.map((campo) => {
                                if (campo.name == "first_name") {
                                    name = campo.values
                                } else if (campo.name == "phone_number") {
                                    phone = campo.values
                                } else if (campo.name == "email") {
                                    email = campo.values
                                }
                            })
                        })



                        const cliente = name.map((name, index) => ({
                            name: name,
                            phone: phone[index],
                            email: email[index]
                        }));

                        // console.log(cliente)
                        // Cria um array de promessas das requisições
                        const promises = cliente.map((e) => {
                            return apiIndex.postCliente(
                                idCaptacaoFacebook,
                                null,
                                e.name,
                                null,
                                null,
                                null,
                                e.email,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                null,
                                e.phone,
                                null,
                                idUser,
                                null
                            ).then((res) => {
                                console.log(res);
                            });
                        });

                        // Aguarda todas as promessas serem resolvidas
                        Promise.all(promises).then(() => {
                            this.textbtnSalvar = "Salvar";
                            this.msgSuccess = true

                            setTimeout(() => {
                                this.closeModal();
                                this.msgSuccess = false
                                this.formsLeads = [];
                                this.leads = []
                            }, 2000);
                        }).catch((error) => {
                            console.error("Erro ao processar os clientes:", error);
                        });


                    }
                } else if (form.imovel == true && form.leads) {
                    console.log("Salvar os clientes e os negócios ====>", form)
                    console.log("Etapa para ser salvo ====>", form.selectedOptionImovel.preco.tipo_negocio === "Venda" ? this.etapaVenda : this.etapaLocacao)

                    if (form.selectedOptionImovel != null) {
                        if (form.leads.length > 0) {
                            form.leads.map((lead) => {
                                lead.field_data.map((campo) => {
                                    if (campo.name == "first_name") {
                                        name = campo.values
                                    } else if (campo.name == "phone_number") {
                                        phone = campo.values
                                    } else if (campo.name == "email") {
                                        email = campo.values
                                    }
                                })
                            })



                            const cliente = name.map((name, index) => ({
                                name: name,
                                phone: phone[index],
                                email: email[index]
                            }));

                            // console.log(cliente)
                            // Cria um array de promessas das requisições
                            const promises = cliente.map((e) => {
                                return apiIndex.postCliente(
                                    idCaptacaoFacebook,
                                    null,
                                    e.name,
                                    null,
                                    null,
                                    null,
                                    e.email,
                                    null,
                                    null,
                                    null,
                                    null,
                                    null,
                                    null,
                                    null,
                                    null,
                                    null,
                                    null,
                                    null,
                                    e.phone,
                                    null,
                                    idUser,
                                    null
                                ).then((res) => {
                                    console.log("res do post do cliente ===> ", res)
                                    if (res.status === 201) {
                                        let idEtapa = form.selectedOptionImovel.preco.tipo_negocio === "Venda" ? this.etapaVenda[0].id_etapa : this.etapaLocacao[0].id_etapa
                                        let idNivelInteresse = 1
                                        let idCliente = res.data.id_cliente
                                        let idImovel = form.selectedOptionImovel.id_imovel

                                        apiIndex.postNegocio(idEtapa, idNivelInteresse, idCliente, idImovel, idUser).then((res) => {
                                            console.log("res do post do negocio ===> ", res)
                                        })
                                    }
                                });
                            });

                            // Aguarda todas as promessas serem resolvidas
                            Promise.all(promises).then(() => {
                                this.textbtnSalvar = "Salvar";
                                this.msgSuccess = true

                                setTimeout(() => {
                                    this.closeModal();
                                    this.msgSuccess = false
                                    this.formsLeads = [];
                                    this.leads = []
                                }, 2000);
                            }).catch((error) => {
                                console.error("Erro ao processar os clientes:", error);
                            });


                        }
                    } else {
                        this.textbtnSalvar = "Salvar"

                        this.msgErroImovelNull = true

                        setTimeout(() => {
                            this.msgErroImovelNull = false
                        }, 2000);
                    }
                } else {
                    console.log("Não salvar nada ====>", form)
                }
            })
        },

        fetchEtapas() {
            apiCrm.getFunilVenda().then((res) => {
                if (res.status === 200) {
                    this.etapaVenda = res.data.response.filter((venda) => venda.id_user == this.id_user)
                    console.log(res.data.response.filter((venda) => venda.id_user == this.id_user))
                }
            })

            apiCrm.getFunilLocacao().then((res) => {
                if (res.status === 200) {
                    this.etapaLocacao = res.data.response.filter((locacao) => locacao.id_user == this.id_user)
                    console.log(res.data.response.filter((locacao) => locacao.id_user == this.id_user))
                }
            })
        },

        closeModal() {
            const modalElement = document.getElementById('manageFormsModal');
            if (modalElement) {
                // Obtém a instância do modal existente
                const modalInstance = bootstrap.Modal.getInstance(modalElement);

                // Se a instância do modal já existe, use .hide()
                if (modalInstance) {
                    modalInstance.hide();
                } else {
                    // Se a instância não existir, crie uma nova e depois feche
                    const newModalInstance = new bootstrap.Modal(modalElement);
                    newModalInstance.hide();
                }

                // Remove o backdrop manualmente se necessário
                const backdropElement = document.querySelector('.modal-backdrop');
                if (backdropElement) {
                    backdropElement.remove();
                }
            }

        }
    },
};
</script>
<style scoped>
.custom-select {
    position: relative;
    width: 100%;
}

.select-box {
    padding: 10px;
    border: 1px solid #ccc;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
}

.options-list {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    border: 1px solid #ccc;
    background: white;
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 200px;
    /* Optional: limit the height of the dropdown */
    overflow-y: auto;
    /* Optional: enable scrolling if content is too long */
    z-index: 1000;
    /* Ensures the dropdown appears above other elements */
}

.options-list li {
    padding: 6px 15px;
    cursor: pointer;
}
</style>