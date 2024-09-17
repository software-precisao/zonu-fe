<template>
    <div class="wrapper">
        <Sidebar />
        <div class="main">
            <Navbar />

            <main class="content">
                <div class="card">
                    <div class="card-body">
                        <!-- <div v-if="msgSuccessEdit" class="alert alert-success mt-3" role="alert">
                                <i class="fa fa-check"></i> Status atualizado
                                com sucesso!
                              </div>

                              <div v-if="msgSuccessDelete" class="alert alert-success mt-3" role="alert">
                                <i class="fa fa-check"></i> Usuário Excluído com
                                sucesso!
                              </div>

                              <div v-if="msgMaxUsers" class="alert alert-danger mt-3" role="alert">
                                <i class="fa fa-exclamation-triangle"></i>
                                {{ msgMaxUsers }}
                              </div> -->

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
                                        <TableRowImovel v-for="item in clientesOnCurrentPage" :key="item.id_user"
                                            :item="item" />
                                    </tbody>
                                </table>
                                {{ console.log(totalPagesClientes) }}

                                <div class="d-grid mt-3 mb-3 gap-2 d-md-flex justify-content-md-end">
                                    <button class="btn btn-dark btn-sm" @click="previousPageCliente()"
                                        :disabled="currentPageCliente <= 1">
                                        Anterior
                                    </button>
                                    <button class="btn btn-dark btn-sm" style="margin-right: 3% !important"
                                        @click="nextPageCliente()" :disabled="currentPageCliente >= totalPagesClientes
                                            ">
                                        Proximo
                                    </button>
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
import Navbar from "../../../components/navbar/index.vue"
import Footer from "../../../components/footer/index.vue"
import Sidebar from "../../../components/sidebar/index.vue"
import { jwtDecode } from "jwt-decode";
import api from "../../../../service/api/imoveis/index"
import TableRowImovel from "@/components/usersListView/TableRowImovel.vue";

export default {
    name: 'ImoveisListAdmim',
    components: {
        Navbar,
        Sidebar,
        Footer,
        TableRowImovel,
    },
    data() {
        return {
            token: localStorage.getItem("token"),
            id_user: '',
            nome: '',
            sobrenome: '',

            allImoveis: [],
            perPageCliente: 5,
            currentPageCliente: 1,
            totalPagesClientes: 0,
        }
    },

    mounted() {
        let token = this.token;
        let decode = jwtDecode(token);

        this.id_user = decode.id_user;
        this.nome = decode.nome;
        this.sobrenome = decode.sobrenome;

        this.fetchAllImoveis()
    },

    computed: {
        clientesOnCurrentPage() {
            const startIndex = (this.currentPageCliente - 1) * this.perPageCliente;
            const endIndex = startIndex + this.perPageCliente;
            return this.allImoveis
                .filter((usuario) => {
                    return usuario.id_imovel
                })
                .slice(startIndex, endIndex);
        },

        totalPagesClientes() {
            return Math.ceil(
                this.allImoveis.filter((usuario) => {
                    this.currentPageCliente = 1;
                    return usuario.id_imovel
                }).length / this.perPageCliente
            );
        },
    },

    methods: {
        fetchAllImoveis() {
            api.listallImoveis().then((res) => {
                if (res.status === 200) {
                    console.log(res.data)
                    this.allImoveis = res.data
                }
            })
        },

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
    },
}
</script>