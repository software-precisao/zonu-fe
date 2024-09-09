<template>
    <div class="wrapper">
        <SideBar />
        <div class="main">
            <NavBar />
            <main class="content">
                <div class="container-fluid p-0">
                    <h1 class="h3 mb-3"><strong>Análise de documentos |</strong> Zonu</h1>
                    <div class="row">
                        <div class="col-md-12 col-xl-12">
                            <div class="card mb-3">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">
                                        <i class="fa fa-user"></i> Análise os documentos dos usuários
                                    </h5>
                                </div>
                                <div class="card-body">
                                    <div class="container-fluid">
                                        <div class="row">
                                            <div v-if="msgSuccess" class="alert alert-success mt-3" role="alert">
                                                <i class="fa fa-check"></i> Conta criada com sucesso!
                                                <span style="float: inline-end"><i class="fa fa-qrcode"></i></span>
                                            </div>
                                            <div v-if="msgErrorNull" class="alert alert-danger mt-3" role="alert">
                                                <i class="fa fa-ban"></i> Por favor, não deixe nenhum
                                                campo vazio!
                                            </div>
                                            <div>
                                                <div class="tab-content" id="myTabContent">
                                                    <div class="tab-pane fade show active" id="home-tab-pane"
                                                        role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                                        <div class="row mt-4">
                                                            <div v-if="iniciais" class="col-md-7">
                                                                <div class="avatar-null rounded me-1 mb-4" style="
                                                                    width: 128px;
                                                                    height: 128px;
                                                                    font-size: 40px;
                                                                    margin-left: auto;
                                                                    margin-right: auto;
                                                                    display: block;
                                                                    justify-content: center;
                                                                    text-align: center;
                                                                    padding-top: 30px;
                                                                ">
                                                                    {{ iniciais }}
                                                                </div>
                                                            </div>

                                                            <h5 class="card-title mb-0">
                                                                <i class="fa fa-building"></i> Lista de usuários
                                                            </h5>
                                                        </div>
                                                        <div class="card-body">
                                                            <div v-if="msgSuccessEdit" class="alert alert-success mt-3"
                                                                role="alert">
                                                                <i class="fa fa-check"></i> Status atualizado
                                                                com sucesso!
                                                            </div>

                                                            <div v-if="msgSuccessDelete"
                                                                class="alert alert-success mt-3" role="alert">
                                                                <i class="fa fa-check"></i> Usuário Excluído com
                                                                sucesso!
                                                            </div>

                                                            <div v-if="msgMaxUsers" class="alert alert-danger mt-3"
                                                                role="alert">
                                                                <i class="fa fa-exclamation-triangle"></i>
                                                                {{ msgMaxUsers }}
                                                            </div>

                                                            <div class="container-fluid">
                                                                <div class="row">
                                                                    <table class="table">
                                                                        <thead>
                                                                            <tr>
                                                                                <th scope="col"></th>
                                                                                <th scope="col">Nome</th>
                                                                                <th scope="col">E-mail</th>
                                                                                <th scope="col">Telefone</th>
                                                                                <th scope="col">Nivel</th>
                                                                                <th scope="col">Status</th>
                                                                                <th scope="col">Empresa</th>
                                                                                <th scope="col">Ação</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <TableRowListDoc
                                                                                v-for="item in clientesOnCurrentPage"
                                                                                :key="item.id_user" :item="item" />
                                                                        </tbody>
                                                                    </table>

                                                                    <div
                                                                        class="d-grid mt-3 mb-3 gap-2 d-md-flex justify-content-md-end">
                                                                        <button class="btn btn-dark btn-sm"
                                                                            @click="previousPageCliente()"
                                                                            :disabled="currentPageCliente <= 1">
                                                                            Anterior
                                                                        </button>
                                                                        <button class="btn btn-dark btn-sm"
                                                                            style="margin-right: 3% !important"
                                                                            @click="nextPageCliente()" :disabled="currentPageCliente >= totalPagesClientes
                                                                                ">
                                                                            Proximo
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
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
import SideBar from "../../components/sidebar/index.vue";
import NavBar from "../../components/navbar/index.vue";
import Footer from "../../components/footer/index.vue";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import _ from "lodash";

import api from "../../../service/api/index.js";
import apiAuth from "../../../service/api/auth/index";
import TableRowListDoc from "@/components/usersListView/TableRowListDoc.vue";
export default {
    name: "DocumentoView",
    data() {
        return {
            tabCliente: false,
            tabZonu: false,
            selectTab: false,

            niveis: [],

            msgErrorCnpj: false,
            msgSuccessCnpj: false,
            msgSuccessSenha: false,
            msgErrorSenha: false,
            campoNullError: false,
            msgErrorCep: false,
            msgCnpjActive: false,

            msgSuccess: true,
            senhaValid: false,
            emailValid: false,

            cnpj: "",
            razao_social: "",
            nome: "",
            sobrenome: "",
            email: "",
            senha: "",
            confimSenha: "",
            telefone: "",
            buscarCEP: "",
            logradouro: "",
            complemento: "",
            numero: "",
            cidade: "",
            estado: "",
            bairro: "",
            selectNivel: "",
            selectPlano: "",
            msgSuccess: false,
            msgErrorNull: false,

            textoBotao: "Criar novo usuário",
            textoBotaoEmpresa: "Criar uma nova construtora",
            autenticando: false,

            listUsers: [],
            perPageCliente: 5,
            currentPageCliente: 1,
            // totalPagesClientes: 0,

            msgSuccessEdit: false,
            msgSuccessDelete: false,

            searchCliente: "",

            senhaValida: true,

            cnpjCon: "",
            razao_socialCon: "",
            nomeCon: "",
            sobrenomeCon: "",
            emailCon: "",
            senhaCon: "",
            confimSenhaCon: "",
            telefoneCon: "",
            buscarCEPCon: "",
            logradouroCon: "",
            cpfCon: "",
            numeroCon: "",
            complementoCon: "",
            cidadeCon: "",
            estadoCon: "",
            bairroCon: "",
            textoBotaoCon: "Criar convidado",
            msgErrorCon: false,
            msgErrorSelectNull: false,

            emailValidCon: false,
            senhaValidaCon: true,

            selectNivelCon: "",
            selectNivelCliente: "",

            nomeCliente: "",
            sobrenomeCliente: "",
            emailCliente: "",
            senhaCliente: "",
            confimSenhaCliente: "",
            telefoneCliente: "",
            buscarCEPCliente: "",
            logradouroCliente: "",
            cnpjCliente: "",
            razao_socialCliente: "",
            cpfCliente: "",
            complementoCliente: "",
            numeroCliente: "",
            cidadeCliente: "",
            estadoCliente: "",
            bairroCliente: "",
            senhaValidaCli: true,
            emailValidCli: false,
            textoBotaoCliente: "Criar novo Cliente",
            msgErrorCliente: false
        };
    },
    components: {
        SideBar,
        NavBar,
        Footer,
        TableRowListDoc,
    },
    computed: {
        clientesOnCurrentPage() {
            const startIndex = (this.currentPageCliente - 1) * this.perPageCliente;
            const endIndex = startIndex + this.perPageCliente;
            return this.listUsers
                .filter((usuario) => {
                    return usuario.nome
                        .toLowerCase()
                        .includes(this.searchCliente.toLowerCase());
                })
                .slice(startIndex, endIndex);
        },

        totalPagesClientes() {
            return Math.ceil(
                this.listUsers.filter((usuario) => {
                    this.currentPageCliente = 1;
                    return usuario.nome
                        .toLowerCase()
                        .includes(this.searchCliente.toLowerCase());
                }).length / this.perPageCliente
            );
        },
        iniciais() {
            let inicialNome = this.nome.charAt(0);
            let inicialSobrenome = this.sobrenome.charAt(0);
            return `${inicialNome}${inicialSobrenome}`.toUpperCase().trim();
        },
    },
    mounted() {
        setTimeout(() => {
            this.mostrarSkeleton = false;
        }, 2000);

        let token = localStorage.getItem("token");
        this.token = token;
        let decode = jwtDecode(token);

        this.tabZonu = true;
        this.selectTab = true;

        this.fetchUsuarios();
        this.fetchNivel();
    },

    methods: {
        previousPageCliente() {
            if (this.currentPageCliente > 1) {
                this.currentPageCliente--;
            }
        },
        nextPageCliente() {
            if (this.currentPageCliente < this.totalPagesClientes) {
                this.currentPageCliente++;
            }
        },
        handleEditModal(user) {
            this.selectedUser = user;
            this.nome = user.nome;
            this.email = user.email;
            this.telefone = user.perfil.telefone;
            this.razao_social = user.perfil.razao_social;
            //Abrir o modal usando jQuery ou Bootstrap

            $("#modalEdit" + user.id_user).modal("show");
        },
        fetchUsuarios() {
            api.listusuarios().then((res) => {
                let usuarios = res.data.response;

                // Filtrar usuários com id_nivel 1, 2 ou 4
                let filteredUsuariosTime = usuarios.filter(
                    (usuario) => usuario.id_nivel === 4 || usuario.id_nivel === 5
                );

                // Remover duplicatas (caso necessário)
                let uniqueUsuarios = [];
                let ids = new Set();
                filteredUsuariosTime.forEach((usuario) => {
                    if (!ids.has(usuario.id_user)) {
                        ids.add(usuario.id_user);
                        uniqueUsuarios.push(usuario);
                    }
                });

                // Adicionar iniciais a cada usuário
                uniqueUsuarios = uniqueUsuarios.map((usuario) => {
                    usuario.iniciais =
                        usuario.nome.charAt(0) + usuario.sobrenome.charAt(0);
                    return usuario;
                });

                this.listUsers = uniqueUsuarios;
            });
        },
        handleEditStatusBlock(id) {
            let id_user = id;
            let status = 2;

            api.editStatusUser(id_user, status).then((res) => {
                if (res.status == 201) {
                    this.fetchUsuarios();
                    this.msgSuccessEdit = true;

                    setTimeout(() => {
                        this.msgSuccessEdit = false;
                    }, 3000);
                }
            });
        },
        handleEditStatusAtivate(id) {
            let id_user = id;
            let status = 1;

            api.editStatusUser(id_user, status).then((res) => {
                if (res.status == 201) {
                    this.fetchUsuarios();
                    this.msgSuccessEdit = true;

                    setTimeout(() => {
                        this.msgSuccessEdit = false;
                    }, 3000);
                }
            });
        },
        handleDeleteUser(id) {
            let id_user = id;

            api.deleteUser(id_user).then((res) => {
                if (res.status == 202) {
                    this.fetchUsuarios();
                    this.msgSuccessDelete = true;

                    setTimeout(() => {
                        this.msgSuccessDelete = false;
                    }, 3000);
                }
            });
        },
        fetchNivel() {
            api
                .listNivel()
                .then((res) => {
                    let niveis = res.data.response;

                    let niveisFiltrados = niveis.filter(
                        (nivel) => nivel.id_nivel === 4 || nivel.id_nivel === 5
                    );
                    this.niveis = niveisFiltrados;
                })
                .then();
        },
    },
};
</script>