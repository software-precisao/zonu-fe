<template>
  <div class="main">
    <navbarImobiliaria />
    <main class="">
      <div class="" style="display: flex; flex-direction: row">
        <!-- Sidebar com opções e ícones -->
        <sidebarCrm tab="Clientes compativeis" />
        <!-- Dashboard -->
        <div class="" style="width: 100%">
          <header class="pe-3 ps-3" style="
              background-color: #fff;
              height: 60px;
              width: 100%;
              border-bottom: 1px solid #d3d3d3;
              display: flex;
              align-items: center;
              justify-content: space-between;
            ">
            <h4 class="fw-semibold mt-2" style="font-size: 13px">
              Radar de oportunidades | Clientes compatíveis | 4 imóveis | 272
              pessoas
            </h4>
            <div style="display: flex; align-items: center">
              <button class="btn btn-reds">Descartar todos</button>
            </div>
          </header>

          <div class="mt-4">
            <div class="row justify-content-center">
              <div class="col-10 mb-3">
                <div class="card">
                  <div class="table-responsive">
                    <table class="table" style="
                        font-size: 14px;
                        border: 1px solid rgb(216, 216, 216);
                        border-radius: 5px;
                      ">
                      <thead>
                        <tr style="background-color: rgb(244, 244, 244)">
                          <th>
                            <input class="form-check-input" type="checkbox" :id="'flexCheck'" />
                          </th>
                          <th>
                            Cliente<i class="align-middle" data-feather="arrow-up"></i>
                            <i class="align-middle" data-feather="arrow-down"></i>
                          </th>
                          <th class="text-center">
                            Ultima interação<i class="align-middle" data-feather="arrow-up"></i>
                            <i class="align-middle" data-feather="arrow-down"></i>
                          </th>
                          <th class="text-center">Imóveis no Funil</th>
                          <th class="text-center">No radar</th>
                          <th class="text-center">Enviados</th>
                          <th class="text-center">Descartados</th>
                          <th class="text-center"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in usuariosOnCurrentPage" :key="item.id" style="cursor: pointer">
                          <td>
                            <input class="form-check-input" type="checkbox" :id="'flexCheck' + item.id" />
                          </td>
                          <td>{{ item.cliente }}</td>
                          <td class="text-center">
                            {{ item.ultimaInteracao }}
                          </td>
                          <td class="text-center">
                            <a style="text-decoration: underline; color: blue">{{ item.imovelFunil }}</a>
                          </td>
                          <td class="text-center">
                            <a style="text-decoration: underline; color: blue">{{ item.noRadar }}</a>
                          </td>
                          <td class="text-center">
                            <a style="text-decoration: underline; color: blue">{{ item.Enviados }}</a>
                          </td>
                          <td class="text-center" xxx>
                            <a style="text-decoration: underline; color: blue">{{ item.Descartados }}</a>
                          </td>
                          <td>
                            <i class="align-middle" data-feather="trash-2"></i>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div style="
                    display: flex;
                    width: 100%;
                    align-items: center;
                    justify-content: center;
                  ">
                  <button class="btnHoverPag" style="
                      border: none;
                      color: #0084f4;
                      font-weight: 700;
                      line-height: 22px;
                      margin-right: 50px;
                      padding: 0 0.25em;
                      border-radius: 4px;
                    " @click="previousPageUser()" :disabled="currentPageUser <= 1">
                    <i class="align-middle" data-feather="chevron-left"></i>Anterior
                  </button>
                  <button class="btnHoverPag" style="
                      border: none;
                      color: #0084f4;
                      font-weight: 700;
                      line-height: 22px;
                      padding: 0 0.25em;
                      border-radius: 8px;
                    " @click="nextPageUser()" :disabled="currentPageUser >= totalPagesUsuarios">
                    Próximo
                    <i class="align-middle" data-feather="chevron-right"></i>
                  </button>
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

export default {
  name: "CrmClientCompatView",
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

      canais: "",
      contatos: "",
      dataInicio: "",
      dataFinal: "",

      items: [
        {
          id: 1,
          ultimaInteracao: "01/08/24",
          cliente: "Marcello Agostini",
          imovelFunil: "1",
          noRadar: "0",
          Enviados: "0",
          Descartados: "0",
        },
        {
          id: 2,
          ultimaInteracao: "01/08/24",
          cliente: "Sil Souza",
          imovelFunil: "1",
          noRadar: "0",
          Enviados: "0",
          Descartados: "0",
        },
        {
          id: 3,
          ultimaInteracao: "30/07/24",
          cliente: "Violetta Cardoso",
          imovelFunil: "1",
          noRadar: "0",
          Enviados: "0",
          Descartados: "0",
        },
        {
          id: 4,
          ultimaInteracao: "29/07/24",
          cliente: "Bruno Sena",
          imovelFunil: "1",
          noRadar: "0",
          Enviados: "0",
          Descartados: "0",
        },
        {
          id: 5,
          ultimaInteracao: "29/07/24",
          cliente: "Josiene Nunes",
          imovelFunil: "1",
          noRadar: "0",
          Enviados: "0",
          Descartados: "0",
        },
      ],

      currentPageUser: 1,
      perPageUser: 10,
      searchUsuario: "",
    };
  },
  methods: {
    previousPageUser() {
      if (this.currentPageUser > 1) {
        this.currentPageUser -= 1;
      }
    },
    nextPageUser() {
      if (this.currentPageUser < this.totalPagesUsuarios) {
        this.currentPageUser += 1;
      }
    },
  },
  computed: {
    usuariosOnCurrentPage() {
      const startIndex = (this.currentPageUser - 1) * this.perPageUser;
      const endIndex = startIndex + this.perPageUser;
      return this.items
        .filter((usuario) => {
          return usuario.cliente
            .toLowerCase()
            .includes(this.searchUsuario.toLowerCase());
        })
        .slice(startIndex, endIndex);
    },
    totalPagesUsuarios() {
      return Math.ceil(
        this.items.filter((usuario) => {
          this.currentPageConcept = 1;
          return usuario.cliente
            .toLowerCase()
            .includes(this.searchUsuario.toLowerCase());
        }).length / this.perPageUser
      );
    },
  },
};
</script>
<style>
.btn-reds {
  color: #fff;
  border: none;
  font-size: 1em;
  font-weight: 600;
  background-color: #f61212;
  transition: background-color 0.3s, box-shadow 0.3s;
  /* Transições suaves */
  box-shadow: 0 0 5px rgba(248, 67, 67, 0.6), inset 0 0 1px rgba(0, 0, 0, 0.6);
  padding: 10px 15px;
}

.btn-reds:hover {
  background-color: #f61212;
  /* Laranja mais escuro ao passar o mouse */
  color: #fff;
  /* Garantir que o texto permaneça branco */
}
</style>
