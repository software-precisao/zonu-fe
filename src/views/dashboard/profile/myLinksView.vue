<script>
import Navbar from "../../../components/navbar/navbar-imobiliaria.vue";
import Footer from "../../../components/footer/index.vue";
import { jwtDecode } from "jwt-decode";
import _ from "lodash";
import $ from "jquery";

import api from "../../../../service/api/index.js";
import apiUser from "../../../../service/api/usuarios/index";

export default {
  name: "LinkView",

  data() {
    return {
      tabCliente: false,
      tabZonu: false,
      selectTab: false,
      msgErrorNull: false,
      listUsers: [],
      msgSuccess: "",
      currentPageCliente: 1,
      perPageCliente: 5,
      searchCliente: "",

      links: [],
      nome: "",
      sobrenome: "",
    };
  },

  components: {
    Navbar,
    Footer,
  },

  mounted() {
    let token = localStorage.getItem("token");
    this.token = token;
    let decode = jwtDecode(token);

    this.tabZonu = true;
    this.selectTab = true;

    // this.fetcUsuarios();
    this.fetchLinks();
  },

  methods: {
    formatarData(dataISO) {
      const data = new Date(dataISO);
      const dia = data.getDate().toString().padStart(2, "0");
      const mes = (data.getMonth() + 1).toString().padStart(2, "0"); // Mês começa em 0
      const ano = data.getFullYear();
      return `${dia}/${mes}/${ano}`;
    },

    formatarHora(horaISO) {
      const date = new Date(horaISO);

      // Extrair a hora, minutos e segundos
      const hours = date.getUTCHours().toString().padStart(2, "0");
      const minutes = date.getUTCMinutes().toString().padStart(2, "0");
      const seconds = date.getUTCSeconds().toString().padStart(2, "0");

      // Formatar como "HH:mm:ss"
      return `${hours}:${minutes}:${seconds}`;
    },

    fetchLinks() {
      const decoded = jwtDecode(this.token);

      apiUser.meusLinks(decoded.id_user).then((res) => {
        // console.log(res);
        if (res.status === 200) {
          this.links = res.data.response;
          console.log(decoded);
          this.nome = decoded.nome;
          this.sobrenome = decoded.sobrenome;
        }
      });
    },

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
      api.listusuarios().then((res) => {
        let usuarios = res.data.response;
        // Filtrar os usuários com id_nivel igual a 1
        let usuariosFiltrados = usuarios.filter(
          (user, index, self) =>
            user.id_nivel === 3 &&
            index === self.findIndex((u) => u.id_user === user.id_user)
        );
        // Atribuir os usuários filtrados ao estado listUsers
        this.listUsers = usuariosFiltrados;
        // Atualizar o total de usuários filtrados
        this.totalUsers = usuariosFiltrados.length;
      });
    },

    previousPageCliente() {
      if (this.currentPageCliente > 1) {
        this.currentPageCliente -= 1;
      }
    },

    nextPageCliente() {
      if (this.currentPageCliente < this.totalPagesClientes) {
        this.currentPageCliente += 1;
      }
    },
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
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="main">
      <Navbar />

      <main class="content">
        <div class="container-fluid p-0">
          <h1 class="h3 mb-3"><strong>Lista de links |</strong> Zonu</h1>
          <div class="row">
            <div class="col-md-12 col-xl-12">
              <div class="card mb-3">
                <div class="card-header">
                  <h5 class="card-title mb-0">
                    <i class="fa fa-building"></i> Lista dos meus Links
                  </h5>
                </div>
                <div class="card-body">
                  <div
                    v-if="msgSuccess"
                    class="alert alert-success mt-3"
                    role="alert"
                  >
                    <i class="fa fa-check"></i> {{ msgSuccess }}
                  </div>

                  <div class="container">
                    <div class="row">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Link</th>
                            <th scope="col">Data</th>
                            <th scope="col">Hora da criação</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="link in links" :key="link.id">
                            {{
                              console.log(link)
                            }}
                            <th>{{ nome }} {{ sobrenome }}</th>
                            <th>
                              <a :href="link.url">{{ link.url }}</a>
                            </th>
                            <th>{{ formatarData(link.dataCriacao) }}</th>
                            <th>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              {{ formatarHora(link.dataExpiracao) }}
                            </th>
                            <th>
                              <span
                                v-if="link.ativo"
                                class="badge text-bg-success"
                                >Ativo</span
                              >
                              <span v-else class="badge text-bg-danger"
                                >Inativo</span
                              >
                            </th>
                          </tr>
                        </tbody>
                      </table>
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
