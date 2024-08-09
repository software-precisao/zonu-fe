<script>
import SideBar from "../../../components/sidebar/index.vue";
import NavBar from "../../../components/navbar/index.vue";
import Footer from "../../../components/footer/index.vue";
import { jwtDecode } from "jwt-decode";
import _ from "lodash";
import $ from "jquery";

import api from "../../../../service/api/index.js";
import TableRow from "@/components/clienteListView/TableRow.vue";

export default {
  name: "ClientesView",

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
    };
  },

  components: {
    SideBar,
    NavBar,
    TableRow,
    Footer,
  },

  mounted() {
    let token = localStorage.getItem("token");
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
      api.listusuarios().then((res) => {
        let usuarios = res.data.response;
        // Filtrar os usuários com id_nivel igual a 1
        console.log(res.data.response);
        const idsAdicionados = new Set();

        let usuariosFiltrados = usuarios.filter((user) => {
          if (
            (user.id_nivel === 3 ||
              user.id_nivel === 4 ||
              user.id_nivel === 5 ||
              user.id_nivel === 7) &&
            !idsAdicionados.has(user.id_user)
          ) {
            idsAdicionados.add(user.id_user);
            return true;
          }
          return false;
        });
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
                  <h5 class="card-title mb-0">
                    <i class="fa fa-building"></i> Lista de clientes
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
                      <input
                        type="text"
                        placeholder="Pesquise aqui"
                        class="form-control mb-3"
                        aria-describedby="passwordHelpBlock"
                        v-model="searchCliente"
                      />
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
                          <TableRow
                            v-for="item in clientesOnCurrentPage"
                            :key="item.id_user"
                            :item="item"
                          />
                        </tbody>
                      </table>

                      <div
                        class="d-grid mt-3 mb-3 gap-2 d-md-flex justify-content-md-end"
                      >
                        <button
                          class="btn btn-dark btn-sm"
                          @click="previousPageCliente()"
                          :disabled="currentPageCliente <= 1"
                        >
                          Anterior
                        </button>
                        <button
                          class="btn btn-dark btn-sm"
                          style="margin-right: 3% !important"
                          @click="nextPageCliente()"
                          :disabled="currentPageCliente >= totalPagesClientes"
                        >
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
