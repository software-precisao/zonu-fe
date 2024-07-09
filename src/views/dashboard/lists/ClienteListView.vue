<template>
    <div class="wrapper">
        <SideBar />
        <div class="main">
            <NavBar />
            <main class="content">
                <div class="container-fluid p-0">

                    <h1 class="h3 mb-3"><strong>Lista de clientes |</strong> Zonu</h1>
                    <div class="row">

                        <div class="col-md-12 col-xl-12">
                            <div class="card mb-3">
                                <div class="card-header">
                                    <h5 class="card-title mb-0"><i class="fa fa-building"></i> Lista de clientes </h5>
                                </div>
                                <div class="card-body">
                                    <div v-if="msgSuccessEdit" class="alert alert-success mt-3" role="alert">
                                        <i class="fa fa-check"></i> Status atualizado com sucesso!
                                    </div>

                                    <div v-if="msgSuccessDelete" class="alert alert-success mt-3" role="alert">
                                        <i class="fa fa-check"></i> Usuário Excluído com sucesso!
                                    </div>
                                    <div class="container">
                                        <div class="row">
                                            <input type="text" placeholder="Pesquise aqui" class="form-control mb-3"
                                                aria-describedby="passwordHelpBlock" v-model="searchCliente" />
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
                                                    <tr v-for="item in clientesOnCurrentPage">
                                                        <th scope="row"></th>
                                                        <td>{{ item.nome }} {{ item.sobrenome }}</td>
                                                        <td>{{ item.email }}</td>
                                                        <td v-if="item.perfil == null">N/A</td>
                                                        <td v-if="item.perfil !== null">{{ item.perfil.telefone }}</td>
                                                        <td v-if="item.id_nivel == 1"><span
                                                                class="badge text-bg-dark">Administrador</span></td>
                                                        <td v-if="item.id_nivel == 2"><span
                                                                class="badge text-bg-warning">Cliente</span></td>
                                                        <td v-if="item.id_nivel == 3"><span
                                                                class="badge text-bg-success">Suporte</span></td>
                                                        <td v-if="item.id_status == 1"><span
                                                                class="badge text-bg-success">Ativo</span></td>
                                                        <td v-if="item.id_status == 2"><span
                                                                class="badge text-bg-danger">Inativo</span></td>
                                                        <td v-if="item.perfil == null">Team Zonu</td>
                                                        <td v-if="item.perfil !== null">{{ item.perfil.razao_social }}
                                                        </td>
                                                        <td class="row mt-3">

                                                            <div class="col-4">
                                                                <button v-if="item.id_status == 2"
                                                                    @click="handleEditStatusAtivate(item.id_user)"
                                                                    type="button" class="btn btn-success"
                                                                    style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; margin-right: 6px !important;">
                                                                    <i class="fa fa-check"></i>
                                                                </button>
                                                                <button v-if="item.id_status == 1"
                                                                    @click="handleEditStatusBlock(item.id_user)"
                                                                    type="button" class="btn btn-info"
                                                                    style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; margin-right: 6px !important;">
                                                                    <i class="fa fa-ban"></i>
                                                                </button>

                                                            </div>
                                                            <div class="col-4">
                                                                <button @click="openEditModal(item)" type="button"
                                                                    class="btn btn-warning"
                                                                    style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; margin-right: 6px !important;">
                                                                    <i class="fa fa-edit"></i>
                                                                </button>
                                                            </div>
                                                            <div class="col-4">
                                                                <button @click="handleDeleteUser(item.id_user)"
                                                                    type="button" class="btn btn-danger"
                                                                    style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; margin-right: 6px">
                                                                    <i class="fa fa-trash"></i>
                                                                </button>
                                                            </div>




                                                        </td>


                                                        <div class="modal fade" :id="`modalEdit${item.id_user}`"
                                                            tabindex="-1" aria-labelledby="exampleModalLabel"
                                                            aria-hidden="true">
                                                            <div class="modal-dialog modal-lg">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h1 class="modal-title fs-5"
                                                                            id="exampleModalLabel"><i
                                                                                class="fa fa-users"></i> Edite os dados
                                                                        </h1>
                                                                        <button type="button" class="btn-close"
                                                                            data-bs-dismiss="modal"
                                                                            aria-label="Close"></button>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <div class="row mt-4">
                                                                            <div class="form-group col-md-6">
                                                                                <label
                                                                                    for="nome"><small><strong>Nome</strong></small></label>
                                                                                <input type="text" v-model="nome"
                                                                                    class="form-control mt-2" id="nome"
                                                                                    placeholder="Digite o nome">
                                                                            </div>
                                                                            <div class="form-group col-md-6">
                                                                                <label
                                                                                    for="sobrenome"><small><strong>Sobrenome</strong></small></label>
                                                                                <input type="text" v-model="sobrenome"
                                                                                    class="form-control mt-2"
                                                                                    id="sobrenome"
                                                                                    placeholder="Digite o sobrenome">
                                                                            </div>
                                                                            <div class="form-group col-md-6 mt-3">
                                                                                <label
                                                                                    for="email"><small><strong>Email</strong></small></label>
                                                                                <input type="email" v-model="email"
                                                                                    class="form-control mt-2" id="email"
                                                                                    placeholder="Digite o email">
                                                                            </div>
                                                                            <div class="form-group col-md-6 mt-3">
                                                                                <label
                                                                                    for="telefone"><small><strong>Telefone</strong></small></label>
                                                                                <input type="text" v-model="telefone"
                                                                                    class="form-control mt-2"
                                                                                    id="telefone"
                                                                                    placeholder="Digite o telefone">
                                                                            </div>
                                                                            <div class="form-group col-md-3 mt-3">
                                                                                <label
                                                                                    for="cep"><small><strong>CEP</strong></small></label>
                                                                                <input type="text" v-model="cep"
                                                                                    class="form-control mt-2" id="cep"
                                                                                    placeholder="Digite o CEP">
                                                                            </div>
                                                                            <div class="form-group col-md-7 mt-3">
                                                                                <label
                                                                                    for="endereco"><small><strong>Endereço</strong></small></label>
                                                                                <input type="text" v-model="endereco"
                                                                                    class="form-control mt-2"
                                                                                    id="endereco"
                                                                                    placeholder="Digite o endereço">
                                                                            </div>
                                                                            <div class="form-group col-md-2 mt-3">
                                                                                <label
                                                                                    for="numero"><small><strong>Número</strong></small></label>
                                                                                <input type="number" v-model="numero"
                                                                                    class="form-control mt-2"
                                                                                    id="numero" placeholder="00">
                                                                            </div>
                                                                            <div class="form-group col-md-3 mt-3">
                                                                                <label
                                                                                    for="cnpj"><small><strong>CNPJ</strong></small></label>
                                                                                <input type="text" v-model="cnpj"
                                                                                    class="form-control mt-2" id="cnpj"
                                                                                    placeholder="Digite o CNPJ">
                                                                            </div>
                                                                            <div class="form-group col-md-9 mt-3">
                                                                                <label for="razao_social"><small><strong>Razão
                                                                                            Social</strong></small></label>
                                                                                <input type="text"
                                                                                    v-model="razao_social"
                                                                                    class="form-control mt-2"
                                                                                    id="razao_social"
                                                                                    placeholder="Digite a razão social">
                                                                            </div>
                                                                            <div class="form-group col-md-12 mt-3">
                                                                                <label
                                                                                    for="complemento"><small><strong>Complemento</strong></small></label>
                                                                                <input type="text" v-model="complemento"
                                                                                    class="form-control mt-2"
                                                                                    id="complemento"
                                                                                    placeholder="Digite o complemento">
                                                                            </div>
                                                                            <div class="form-group col-md-6 mt-3">
                                                                                <label
                                                                                    for="cidade"><small><strong>Cidade</strong></small></label>
                                                                                <input type="text" v-model="cidade"
                                                                                    class="form-control mt-2"
                                                                                    id="cidade"
                                                                                    placeholder="Digite a cidade">
                                                                            </div>
                                                                            <div class="form-group col-md-3 mt-3">
                                                                                <label
                                                                                    for="estado"><small><strong>Estado</strong></small></label>
                                                                                <input type="text" v-model="estado"
                                                                                    class="form-control mt-2"
                                                                                    id="estado"
                                                                                    placeholder="Digite o estado">
                                                                            </div>
                                                                            <div class="form-group col-md-3 mt-3">
                                                                                <label
                                                                                    for="bairro"><small><strong>Bairro</strong></small></label>
                                                                                <input type="text" v-model="bairro"
                                                                                    class="form-control mt-2"
                                                                                    id="bairro"
                                                                                    placeholder="Digite o bairro">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-secondary"
                                                                            data-bs-dismiss="modal">Fechar</button>
                                                                        <button type="button" @click="handleEditUsuario"
                                                                            class="btn btn-warning">Salvar
                                                                            mudanças</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </tr>

                                                </tbody>

                                            </table>

                                            <div class="d-grid mt-3 mb-3 gap-2 d-md-flex justify-content-md-end">
                                                <button class="btn btn-dark btn-sm" @click="previousPageCliente()"
                                                    :disabled="currentPageCliente <= 1"> Anterior
                                                </button>
                                                <button class=" btn btn-dark btn-sm"
                                                    style="margin-right: 3% !important;" @click="nextPageCliente()"
                                                    :disabled="currentPageCliente >= totalPagesClientes">
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
import axios from 'axios'
import _ from 'lodash';
import $ from 'jquery';

import api from '../../../../service/api/index.js'
export default {
    name: 'ClientesView',
    data() {
        return {

            tabCliente: false,
            tabZonu: false,
            selectTab: false,

            selectedUser: null,
            cnpj: '',
            razao_social: '',
            nome: '',
            sobrenome: '',
            iniciais: '',
            email: '',
            senha: '',
            confirmSenha: '',
            telefone: '',
            cep: '',
            endereco: '',
            selectNivel: '',
            msgSuccess: false,
            msgErrorNull: false,

            textoBotao: "Criar novo usuário",
            autenticando: false,

            listUsers: [],

            msgSuccessEdit: false,
            msgSuccessDelete: false,

            currentPageCliente: 1,
            perPageCliente: 5,
            searchCliente: '',
        }
    },
    components: {
        SideBar,
        NavBar,
        Footer
    },
    mounted() {
        let token = localStorage.getItem('token')
        this.token = token;
        let decode = jwtDecode(token);

        this.tabZonu = true;
        this.selectTab = true;

        this.fetcUsuarios();
    },

    methods: {
        handledSelect() {
            let escolha = this.selectTab;


            if (escolha == true) {
                this.tabZonu = true;
                this.tabCliente = false;
            } else {
                this.tabCliente = true;
                this.tabZonu = false;
            }

        },
        fetcUsuarios() {
            api.listusuarios().then(res => {
                let usuarios = res.data.response;
                // Filtrar os usuários com id_nivel igual a 1
                let usuariosFiltrados = usuarios.filter((user, index, self) =>
                    user.id_nivel === 2 &&
                    index === self.findIndex((u) => u.id_user === user.id_user)
                );
                // Atribuir os usuários filtrados ao estado listUsers
                this.listUsers = usuariosFiltrados;
                // Atualizar o total de usuários filtrados
                this.totalUsers = usuariosFiltrados.length;
            });
        },
        openEditModal(user) {
            this.selectedUser = user;
            this.nome = user.nome;
            this.sobrenome = user.sobrenome;
            this.email = user.email;
            this.razao_social = user.perfil.razao_social;
            this.cnpj = user.perfil.cnpj;
            this.telefone = user.perfil.telefone;
            this.cep = user.perfil.cep;
            this.endereco = user.perfil.endereco;
            this.numero = user.perfil.numero;
            this.complemento = user.perfil.complemento;
            this.cidade = user.perfil.cidade;
            this.estado = user.perfil.estado;
            this.bairro = user.perfil.bairro;
            // Abrir o modal usando jQuery ou Bootstrap
            $('#modalEdit' + user.id_user).modal('show');
        },
        handleEditUsuario() {
            const updatedUser = {
                id_user: this.selectedUser.id_user,
                nome: this.nome,
                sobrenome: this.sobrenome,
                email: this.email,
                razao_social: this.razao_social,
                cnpj: this.cnpj,
                telefone: this.telefone,
                cep: this.cep,
                endereco: this.endereco,
                numero: this.numero,
                complemento: this.complemento,
                cidade: this.cidade,
                estado: this.estado,
                bairro: this.bairro
            };

            api.editUser(updatedUser).then(res => {
                if (res.status == 201) {
                    this.fetchUsuarios();
                    this.msgSuccessEdit = true;

                    setTimeout(() => {
                        this.msgSuccessEdit = false;
                    }, 3000);
                }

                $('#modalEdit' + this.selectedUser.id_user).modal('hide');
            });
        },

        handleEditUsuario(id) {
            let id_user = id;
            let status = 1

            api.editStatusUser(id_user, status).then(res => {

                if (res.status == 201) {
                    this.fetcUsuarios();
                    this.msgSuccessEdit = true;

                    setTimeout(() => {
                        this.msgSuccessEdit = false;

                    }, 3000);
                }
            })

        },

        handleEditStatusBlock(id) {
            let id_user = id;
            let status = 2

            api.editStatusUser(id_user, status).then(res => {

                if (res.status == 201) {
                    this.fetcUsuarios();
                    this.msgSuccessEdit = true;

                    setTimeout(() => {
                        this.msgSuccessEdit = false;

                    }, 3000);
                }
            })

        },

        handleEditStatusAtivate(id) {
            let id_user = id;
            let status = 1

            api.editStatusUser(id_user, status).then(res => {

                if (res.status == 201) {
                    this.fetcUsuarios();
                    this.msgSuccessEdit = true;

                    setTimeout(() => {
                        this.msgSuccessEdit = false;

                    }, 3000);
                }
            })

        },

        handleDeleteUser(id) {
            let id_user = id;

            api.deleteUser(id_user).then(res => {

                if (res.status == 202) {
                    this.fetcUsuarios();
                    this.msgSuccessDelete = true;

                    setTimeout(() => {
                        this.msgSuccessDelete = false;

                    }, 3000);
                }
            })

        },



        previousPageCliente() {
            if (this.currentPageCliente > 1) {
                this.currentPageCliente -= 1
            }
        },
        nextPageCliente() {
            if (this.currentPageCliente < this.totalPagesClientes) {
                this.currentPageCliente += 1
            }
        },
    },
    computed: {
        clientesOnCurrentPage() {
            const startIndex = (this.currentPageCliente - 1) * this.perPageCliente;
            const endIndex = startIndex + this.perPageCliente
            return this.listUsers
                .filter((usuario) => {
                    return usuario.nome
                        .toLowerCase()
                        .includes(this.searchCliente.toLowerCase())
                })
                .slice(startIndex, endIndex)
        },
        totalPagesClientes() {
            return Math.ceil(
                this.listUsers.filter((usuario) => {
                    this.currentPageCliente = 1
                    return usuario.nome
                        .toLowerCase()
                        .includes(this.searchCliente.toLowerCase())
                }).length / this.perPageCliente,
            )
        },
    }
}
</script>