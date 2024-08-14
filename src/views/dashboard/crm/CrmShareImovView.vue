<template>
  <div class="main">
    <navbarImobiliaria />
    <main class="">
      <div class="" style="display: flex; flex-direction: row">
        <!-- Sidebar com opções e ícones -->
        <sidebarCrm tab="Imóveis compartilhados" />
        <!-- Dashboard -->
        <div class="" style="width: 100%">
          <header
            class="pe-3 ps-3"
            style="
              background-color: #fff;
              height: 60px;
              width: 100%;
              border-bottom: 1px solid #d3d3d3;
              display: flex;
              align-items: center;
              justify-content: space-between;
            "
          >
            <h4 class="fw-semibold mt-2" style="font-size: 13px">
              Imóveis compartilhados
            </h4>
            <div style="display: flex; align-items: center">
              <select
                class="form-select"
                v-model="contatos"
                style="
                  height: 30px;
                  font-size: 13px;
                  font-weight: 600;
                  margin-left: 10px;
                  width: 200px;
                "
              >
                <option value="" style="font-weight: 600">
                  Todos os contatos
                </option>
              </select>
              <select
                class="form-select"
                v-model="dataInicio"
                style="
                  height: 30px;
                  font-size: 13px;
                  font-weight: 600;
                  margin-left: 10px;
                  width: 150px;
                "
              >
                <option value="" style="font-weight: 600">15/05/2024</option>
              </select>
              <select
                class="form-select"
                v-model="dataFinal"
                style="
                  height: 30px;
                  font-size: 13px;
                  font-weight: 600;
                  margin-left: 10px;
                  width: 150px;
                "
              >
                <option value="" style="font-weight: 600">13/08/2024</option>
              </select>
            </div>
          </header>

          <div class="" style="margin-top: 8rem" v-if="semImovel">
            <div class="row justify-content-center">
              <div class="col-10 mb-3">
                <div
                  style="
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    :src="homeIcon"
                    style="width: 80px; height: 80px; margin-bottom: 1rem"
                  />
                  <h2 style="font-size: 1.14286em; font-weight: 600">
                    Nenhuma informação disponível para o filtro selecionado.
                  </h2>
                  <p style="font-size: 1em; font-weight: 400">
                    Tente alterar o filtro acima.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="card mb-3" style="margin: 2rem" v-if="semImovel == false">
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
                          <span v-if="link.ativo" class="badge text-bg-success"
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
    </main>
    <!-- <footer /> -->
  </div>
</template>

<script>
import navbarImobiliaria from "@/components/navbar/navbar-imobiliaria.vue";
import footer from "@/components/footer/index.vue";
import sidebarCrm from "@/components/sidebar/sidebarCrm.vue";
import youtubeLogo from "../../../../assets/images/icons/youtubeLogo.svg";
import barCodeIcon from "../../../../assets/images/icons/barCodeIcon.svg";
import homeIcon from "../../../../assets/images/icons/documentIcon.svg";

import { jwtDecode } from "jwt-decode";
import _ from "lodash";
import $ from "jquery";

import api from "../../../../service/api/index.js";
import apiUser from "../../../../service/api/usuarios/index";

export default {
  name: "CrmShareImovView",
  components: {
    navbarImobiliaria,
    footer,
    sidebarCrm,
  },
  data() {
    return {
      graphType: "",
      youtubeLogo,
      barCodeIcon,
      homeIcon,

      canais: "",
      contatos: "",
      dataInicio: "",
      dataFinal: "",

      semImovel: false,

      // copiado dos links
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
