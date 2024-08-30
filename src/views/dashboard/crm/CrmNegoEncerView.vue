<template>
  <div class="main">
    <navbarImobiliaria />
    <main class="">
      <div class="" style="display: flex; flex-direction: row">
        <!-- Sidebar com opções e ícones -->
        <sidebarCrm tab="Negócios encerrados" />
        <!-- Dashboard -->
        <div class="" style="width: 81%">
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
              Negócios encerrados | Lista de clientes | 2 imóveis | 32 pessoas
            </h4>
            <div style="display: flex; align-items: center">
              <button class="btn btn-white ms-2" style="
                  display: flex;
                  align-items: center;
                  height: 30px;
                  font-size: 1em;
                  font-weight: 600;
                ">
                <i class="align-middle" data-feather="file-plus"></i>
                <span style="margin-left: 3px">Exportar</span>
              </button>

              <div style="
                  border: 1px solid #d3dceb;
                  border-radius: 5px;
                  margin-left: 6px;
                ">
                <button style="
                    border: none;
                    border-top-left-radius: 5px;
                    border-bottom-left-radius: 5px;
                    border-right: 1px solid #d3dceb;
                    padding: 0 10px;
                    height: 30px;
                    font-size: 12px;
                    font-weight: 700;
                  " :style="{
                    backgroundColor: btnActive === 'all' ? '#31d084' : '#fff',
                    color: btnActive === 'all' ? '#fff' : '#1c0c1e',
                  }" @click="handleType('all')">
                  Todos
                </button>
                <button style="
                    border: none;
                    padding: 0 10px;
                    height: 30px;
                    font-size: 12px;
                    font-weight: 700;
                  " :style="{
                    backgroundColor: btnActive === 'ganho' ? '#31d084' : '#fff',
                    color: btnActive === 'ganho' ? '#fff' : '#1c0c1e',
                  }" @click="handleType('ganho')">
                  Ganhos
                </button>
                <button style="
                    border: none;
                    padding: 0 10px;
                    height: 30px;
                    border-left: 1px solid #d3dceb;
                    font-size: 12px;
                    font-weight: 700;
                  " :style="{
                    backgroundColor:
                      btnActive === 'perdido' ? '#31d084' : '#fff',
                    color: btnActive === 'perdido' ? '#fff' : '#1c0c1e',
                  }" @click="handleType('perdido')">
                  Perdidos
                </button>
                <button style="
                    border: none;
                    padding: 0 10px;
                    height: 30px;
                    border: none;
                    border-top-right-radius: 5px;
                    border-bottom-right-radius: 5px;
                    border-left: 1px solid #d3dceb;
                    font-size: 12px;
                    font-weight: 700;
                  " :style="{
                    backgroundColor:
                      btnActive === 'removido' ? '#31d084' : '#fff',
                    color: btnActive === 'removido' ? '#fff' : '#1c0c1e',
                  }" @click="handleType('removido')">
                  Removidos
                </button>
              </div>

              <div class="" style="
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  margin-left: 10px;
                ">
                <div class="">
                  <input id="start_date" type="text" class="formControl" placeholder="DD/MM/AAAA" name="start_date"
                    value="01/01/2024" style="
                      height: 31px;
                      width: 100px;
                      padding-left: 8px;
                      border: solid #d3d3d3 1px;
                      border-radius: 5px;
                      font-size: 1em;
                      font-weight: 500;
                    " />
                </div>
                <div class="" style="width: 15px; background-color: #d3dceb; height: 1px"></div>
                <div class="">
                  <input id="end_date" type="text" class="formControl" placeholder="DD/MM/AAAA" name="end_date"
                    value="13/08/2024" style="
                      height: 31px;
                      width: 100px;
                      padding-left: 8px;
                      border: solid #d3d3d3 1px;
                      border-radius: 5px;
                      font-size: 1em;
                      font-weight: 500;
                    " />
                </div>
              </div>
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
                            Cliente<i class="align-middle" data-feather="arrow-up"></i>
                            <i class="align-middle" data-feather="arrow-down"></i>
                          </th>
                          <th class="text-center">
                            Ultima interação<i class="align-middle" data-feather="arrow-up"></i>
                            <i class="align-middle" data-feather="arrow-down"></i>
                          </th>
                          <th class="text-center">
                            Data Encerrado<i class="align-middle" data-feather="arrow-up"></i>
                            <i class="align-middle" data-feather="arrow-down"></i>
                          </th>
                          <th class="text-center">Etapa</th>
                          <th class="text-center">Imóvel</th>
                          <th class="text-center">
                            Motivo<i class="align-middle" data-feather="arrow-up"></i>
                            <i class="align-middle" data-feather="arrow-down"></i>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in usuariosOnCurrentPage" :key="item.id" style="cursor: pointer">
                          <td>{{ item.cliente }}</td>
                          <td class="text-center">
                            {{ item.ultimaInteracao }}
                          </td>
                          <td class="text-center">{{ item.dataEncerrado }}</td>
                          <td class="text-center">
                            {{ item.etapa }}
                          </td>
                          <td class="text-center">
                            <a style="text-decoration: underline; color: blue">{{ item.imovel }}</a>
                          </td>
                          <td class="text-center">
                            {{ item.motivo }}
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
  name: "CrmNegociosEncerradosView",
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

      btnActive: "all",

      items: [
        {
          id: 1,
          ultimaInteracao: "10/04/24",
          dataEncerrado: "12/08/24",
          cliente: "Bergh Souza",
          etapa: "Contato",
          imovel: "138",
          motivo: "Removido - imóvel indisponível",
        },
        {
          id: 2,
          ultimaInteracao: "27/03/24",
          dataEncerrado: "29/07/24",
          cliente: "Josilda Guimarães",
          etapa: "Descartado",
          imovel: "102",
          motivo: "Removido - imóvel indisponível",
        },
        {
          id: 3,
          ultimaInteracao: "26/03/24",
          dataEncerrado: "28/07/24",
          cliente: "Genilson Soares",
          etapa: "Descartado",
          imovel: "102",
          motivo: "Removido - imóvel indisponível",
        },
        {
          id: 4,
          ultimaInteracao: "26/03/24",
          dataEncerrado: "28/07/24",
          cliente: "AJN CONSULTORIA",
          etapa: "Descartado",
          imovel: "102",
          motivo: "Removido - imóvel indisponível",
        },
        {
          id: 5,
          ultimaInteracao: "26/03/24",
          dataEncerrado: "28/07/24",
          cliente: "Socorro Silva",
          etapa: "Descartado",
          imovel: "102",
          motivo: "Removido - imóvel indisponível",
        },
        {
          id: 6,
          ultimaInteracao: "26/03/24",
          dataEncerrado: "28/07/24",
          cliente: "Mara Dalila",
          etapa: "Descartado",
          imovel: "102",
          motivo: "Removido - imóvel indisponível",
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
    handleType(btn) {
      this.btnActive = btn;
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
