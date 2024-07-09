<template>
    <div class="wrapper">
        <Sidebar :defaultCollapsed="true" />
        <div class="main">
            <Navbar />
            <main class="content">
                <div class="container-fluid p-0">
                    <h1 class="h3 mb-3"><strong>Cadastro |</strong> Proximidades</h1>

                    <div class="row d-flex flex-row justify-content-between">
                        <div style="width: 49%; margin-right: 1%">
                            <div class="col-xl-12 col-xxl-12 d-flex">
                                <div class="w-100">
                                    <div class="row">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="col mt-0">
                                                    <h1 class="title-login mt-2">Cadastro de Proximidades</h1>

                                                    <div v-if="msgSuccess"
                                                        class="alert alert-success alert-dismissible fade show"
                                                        role="alert">
                                                        <strong><i class="fa fa-check"></i> Sucesso!</strong> Nova
                                                        proximidade cadastrada.
                                                    </div>
                                                </div>

                                                <div>
                                                    <div class="row mt-4">
                                                        <div class="col-12">
                                                            <div class="mb-3">
                                                                <div v-if="mostrarSkeleton" class="skeleton-label">
                                                                </div>
                                                                <div v-if="mostrarSkeleton" class="skeleton-input">
                                                                </div>
                                                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                                    class="form-label">
                                                                    Nova Proximidade
                                                                </label>
                                                                <input type="text" required v-if="!mostrarSkeleton"
                                                                    class="form-control" v-model="proximidade"
                                                                    placeholder="Digite aqui..." />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-12">
                                                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                                            <button v-if="!mostrarSkeleton" class="btn btn-success"
                                                                @click="handleSalvar()" type="button">
                                                                Salvar
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

                        <div style="width: 49%; margin-left: 1%">
                            <div class="col-xl-12 col-xxl-12 d-flex">
                                <div class="w-100">
                                    <div class="row">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="col mt-0">
                                                    <h1 class="title-login mt-2">Lista de Proximidades</h1>
                                                </div>
                                                <div v-if="msgSuccessDelete"
                                                    class="alert alert-success alert-dismissible fade show"
                                                    role="alert">
                                                    <strong><i class="fa fa-check"></i> Sucesso!</strong> Proximidade
                                                    excluída com sucesso.
                                                </div>
                                                <div>
                                                    <div class="row mt-4">
                                                        <div class="col-12">
                                                            <div class="mb-3">
                                                                <input type="text" placeholder="Pesquise aqui"
                                                                    class="form-control mb-3"
                                                                    aria-describedby="passwordHelpBlock"
                                                                    v-model="searchProximidade" />
                                                                <table class="table">
                                                                    <div class="container">

                                                                    </div>
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col">Proximidades</th>
                                                                            <th scope="col">Ação</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr v-for="item in ProximidadeOnCurrentPage"
                                                                            :key="item.id_proximidade">
                                                                            <td>{{ item.nome_proximidade }}</td>
                                                                            <td>
                                                                                <button
                                                                                    @click="handleDelete(item.id_proximidade)"
                                                                                    type="button" class="btn btn-danger"
                                                                                    style="
                                                                                        --bs-btn-padding-y: 0.25rem;
                                                                                        --bs-btn-padding-x: 0.5rem;
                                                                                        --bs-btn-font-size: 0.75rem;">
                                                                                    <i class="fa fa-trash"></i>
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <div
                                                                    class="d-grid mt-3 mb-3 gap-2 d-md-flex justify-content-md-end">
                                                                    <button class="btn btn-dark btn-sm"
                                                                        @click="previousPageProximidade()"
                                                                        :disabled="currentPageFrase <= 1">
                                                                        Anterior
                                                                    </button>
                                                                    <button class=" btn btn-dark btn-sm"
                                                                        style="margin-right: 3% !important;"
                                                                        @click="nextPageProximidade()"
                                                                        :disabled="currentPageProximidade >= totalPagesProximidade">
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
            </main>
            <Footer />
        </div>
    </div>
</template>
<script>
import Sidebar from "../../components/sidebar/index.vue";
import Navbar from "../../components/navbar/index.vue";
import Footer from "../../components/footer/index.vue";
import api from "../../../service/api/index";
import { jwtDecode } from "jwt-decode";

export default {
    name: "ProximidadesView",
    components: {
        Sidebar,
        Navbar,
        Footer,
    },
    data() {
        return {
            mostrarSkeleton: true,
            proximidade: "",
            msgSuccess: false,
            lists: [],
            token: localStorage.getItem("token"),
            id_user: "",
            msgSuccessDelete: false,

            currentPageProximidade: 1,
            perPageProximidade: 5,
            searchProximidade: '',
        };
    },
    mounted() {
        this.fetchList();

        let token = this.token;
        let decode = jwtDecode(token);
        this.id_user = decode.id_user;

        setTimeout(() => {
            this.mostrarSkeleton = false;
        }, 2000);
    },
    methods: {
        handleSalvar() {
            let nome_proximidade = this.proximidade;

            api.proximidades(nome_proximidade).then((res) => {

                if (res.status == 201) {
                    this.msgSuccess = true;
                    this.proximidade = "";

                    this.fetchList();

                    setTimeout(() => {
                        this.msgSuccess = false;
                    }, 3000);
                }


            });
        },

        previousPageProximidade() {
            if (this.currentPageProximidade > 1) {
                this.currentPageProximidade -= 1
            }
        },
        nextPageProximidade() {
            if (this.currentPageProximidade < this.totalPagesProximidade) {
                this.currentPageProximidade += 1
            }
        },

        handleDelete(id) {
            let id_proximidade = id;

            api.deleteproximidade(id_proximidade).then((res) => {

                if (res.status == 200) {
                    this.msgSuccessDelete = true;
                    this.fetchList();

                    setTimeout(() => {
                        this.msgSuccessDelete = false;
                    }, 3000);
                }


            });
        },

        fetchList() {
            api.listproximidade().then((res) => {
                this.lists = res.data.response;
            });
        },
    },

    computed: {
        ProximidadeOnCurrentPage() {
            const startIndex = (this.currentPageProximidade - 1) * this.perPageProximidade
            const endIndex = startIndex + this.perPageProximidade
            return this.lists
                .filter((item) => {
                    return item.nome_proximidade
                        .toLowerCase()
                        .includes(this.searchProximidade.toLowerCase())
                })
                .slice(startIndex, endIndex)
        },
        totalPagesProximidade() {
            return Math.ceil(
                this.lists.filter((item) => {
                    this.currentPageProximidade = 1
                    return item.nome_proximidade
                        .toLowerCase()
                        .includes(this.searchProximidade.toLowerCase())
                }).length / this.perPageProximidade,
            )
        },
    }
};
</script>
