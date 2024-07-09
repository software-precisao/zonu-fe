<template>
  <div class="wrapper">
    <Sidebar :defaultCollapsed="true" />
    <div class="main">
      <Navbar />
      <main class="content">
        <div class="container-fluid p-0">
          <h1 class="h3 mb-3"><strong>Cadastro |</strong> Novo Condomínio</h1>

          <div class="row d-flex flex-row justify-content-between">
            <!-- Aqui começa as TABS. Copie e cole da INFOTAB -->
            <div style="width: 49%; margin-left: 1%">
              <div class="col-xl-12 col-xxl-12 d-flex">
                <div class="w-100">
                  <div class="row">
                    <div class="card">
                      <div class="card-body">
                        <div class="col mt-0">
                          <h1 class="title-login mt-2">
                            Cadastro de condomínio/empreendimento
                          </h1>
                          <p>
                            Ao cadastrar um imóvel, será possível selecionar um
                            condomínio/empreendimento para reaproveitamento de dados e
                            fotos
                          </p>
                        </div>

                        <div>
                          <div class="row mt-4">
                            <div class="col-12">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Nome do condomínio/empreendimento
                                </label>
                                <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="condNome" placeholder="Digite..." />
                              </div>
                            </div>

                            <div class="col-md-12">
                              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button v-if="!mostrarSkeleton" class="btn btn-success" @click="handleSalvar()"
                                  type="button">
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
            </div>

            <div style="width: 49%; margin-left: 1%">
              <div class="col-xl-12 col-xxl-12 d-flex">
                <div class="w-100">
                  <div class="row">
                    <div class="card">
                      <div class="card-body">
                        <div class="col mt-0">
                          <h1 class="title-login mt-2">Lista de Condomínios</h1>
                        </div>
                        <div v-if="msgSuccessDelete" class="alert alert-success alert-dismissible fade show"
                          role="alert">
                          <strong><i class="fa fa-check"></i> Sucesso!</strong>
                          Condomínio excluído com sucesso.
                        </div>
                        <div>
                          <div class="row mt-4">
                            <div class="col-12">
                              <div class="mb-3">
                                <input type="text" placeholder="Pesquise aqui" class="form-control mb-3"
                                  aria-describedby="passwordHelpBlock" v-model="searchCondominio" />
                                <table class="table">
                                  <div class="container"></div>
                                  <thead>
                                    <tr>
                                      <th scope="col">Condomínio</th>
                                      <th scope="col">Ação</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr v-for="item in CondominioOnCurrentPage">
                                      <td>{{ item.nome_condominio }}</td>
                                      <td>
                                        <button @click="handleDelete(item.id_condominio)" type="button"
                                          class="btn btn-danger" style="
                                            --bs-btn-padding-y: 0.25rem;
                                            --bs-btn-padding-x: 0.5rem;
                                            --bs-btn-font-size: 0.75rem;
                                          ">
                                          <i class="fa fa-trash"></i>
                                        </button>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <div class="d-grid mt-3 mb-3 gap-2 d-md-flex justify-content-md-end">
                                  <button class="btn btn-dark btn-sm" @click="previousPageCondominio()"
                                    :disabled="currentPageCondominio <= 1">
                                    Anterior
                                  </button>
                                  <button class="btn btn-dark btn-sm" style="margin-right: 3% !important"
                                    @click="nextPageCondominio()" :disabled="currentPageCondominio >= totalPagesCondominio
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
      </main>
      <Footer />
    </div>
  </div>
</template>
<script>
import Sidebar from "../../components/sidebar/index.vue";
import Navbar from "../../components/navbar/index.vue";
import Footer from "../../components/footer/index.vue";
import api from "../../../service/api/index.js";
import { jwtDecode } from "jwt-decode";


export default {
  name: "CadCondominioView",
  components: {
    Sidebar,
    Navbar,
    Footer,
  },
  data() {
    return {
      mostrarSkeleton: true,
      condNome: "",
      msgSuccess: false,
      listsCondominios: [],
      token: localStorage.getItem("token"),
      id_user: '',
      msgSuccessDelete: false,

      currentPageCondominio: 1,
      perPageCondominio: 5,
      searchCondominio: "",
      id_progress: ''

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
      let nome_condominio = this.condNome;
      let id_user = this.id_user;

      api.novoCondominio(nome_condominio, id_user).then((res) => {

        if (res.status == 201) {
          this.msgSuccess = true;
          this.condNome = "";
          this.fetchList();

          let id_progressao = this.id_progress

          api.editProgressCodominio(id_progressao).then((res) => {})

          setTimeout(() => {
            this.msgSuccess = false;
          }, 3000);
        }
      });

    },

    previousPageCondominio() {
      if (this.currentPageCondominio > 1) {
        this.currentPageCondominio -= 1;
      }
    },

    nextPageCondominio() {
      if (this.currentPageCondominio < this.totalPagesCondominio) {
        this.currentPageCondominio += 1;
      }
    },


    handleDelete(id) {
      let id_condominio = id;

      api.deletecondominio(id_condominio).then((res) => {
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
      let id_user = this.id_user;

      api.listcondominio(id_user).then((res) => {
        this.listsCondominios = res.data.response

      })

    }


  },

  computed: {

    CondominioOnCurrentPage() {
      const startIndex = (this.currentPageCondominio - 1) * this.perPageCondominio
      const endIndex = startIndex + this.perPageCondominio
      return this.listsCondominios
        .filter((item) => {
          return item.nome_condominio
            .toLowerCase()
            .includes(this.searchCondominio.toLowerCase())
        })
        .slice(startIndex, endIndex)
    },

    totalPagesCondominio() {
      return Math.ceil(
        this.listsCondominios.filter((item) => {
          this.currentPageCondominio = 1
          return item.nome_condominio
            .toLowerCase()
            .includes(this.searchCondominio.toLowerCase())
        }).length / this.perPageCondominio,
      )
    },
  }
};
</script>