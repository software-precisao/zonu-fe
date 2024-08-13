<template>
  <div class="main">
    <navbarImobiliaria />
    <main class="">
      <div class="" style="display: flex; flex-direction: row">
        <!-- Sidebar com opções e ícones -->
        <sidebarCrm tab="Imóveis compativeis" />
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
              Radar de oportunidades | Imóveis compatíveis | 4 imóveis | 272
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
                    <table
                      class="table"
                      style="
                        font-size: 14px;
                        border: 1px solid rgb(216, 216, 216);
                        border-radius: 5px;
                      "
                    >
                      <thead>
                        <tr style="background-color: rgb(244, 244, 244)">
                          <th>
                            <i class="align-middle" data-feather="square"></i>
                          </th>
                          <th>Imóvel</th>
                          <th class="text-center">Detalhes</th>
                          <th class="text-center">No Radar</th>
                          <th class="text-center">Compartilhar</th>
                          <th class="text-center"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="item in usuariosOnCurrentPage"
                          :key="item.id"
                          style="cursor: pointer"
                        >
                          <td>
                            <i class="align-middle" data-feather="square"></i>
                          </td>
                          <td style="display: flex">
                            <img
                              :src="item.img"
                              style="
                                width: 60px;
                                height: 60px;
                                border-radius: 10px;
                                margin-right: 10px;
                              "
                            />
                            <div
                              style="
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                font-size: 14px;
                                color: #000;
                              "
                            >
                              <span style="font-weight: 900">{{
                                item.imovel
                              }}</span>
                              <span>{{ item.subImovel }}</span>
                            </div>
                          </td>
                          <td class="text-center">
                            <div
                              style="
                                display: flex;
                                align-items: center;
                                justify-content: center;
                              "
                            >
                              <img
                                :src="bedIcon"
                                style="
                                  width: 20px;
                                  height: 20px;
                                  margin-right: 5px;
                                "
                              /><span
                                style="margin-right: 5px; font-weight: 500"
                                >2| 1</span
                              >
                              <img
                                v-if="item.car"
                                :src="carIcon"
                                style="
                                  width: 20px;
                                  height: 20px;
                                  margin-right: 5px;
                                "
                              /><span v-if="item.car" style="font-weight: 500"
                                >1</span
                              >
                            </div>
                            <span
                              :style="{
                                color:
                                  item.detalhes > '2.000' ? 'orange' : 'green',
                              }"
                              style="font-weight: 700"
                            >
                              R${{ item.detalhes }}
                            </span>
                          </td>
                          <td class="text-center" style="color: #000">
                            {{ item.noRadar }}
                          </td>
                          <td class="text-center">
                            <a
                              style="text-decoration: underline; color: blue"
                              >{{ item.compartilhar }}</a
                            >
                          </td>
                          <td>
                            <i class="align-middle" data-feather="trash-2"></i>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div
                  style="
                    display: flex;
                    width: 100%;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <button
                    class="btnHoverPag"
                    style="
                      border: none;
                      color: #0084f4;
                      font-weight: 700;
                      line-height: 22px;
                      margin-right: 50px;
                      padding: 0 0.25em;
                      border-radius: 4px;
                    "
                    @click="previousPageUser()"
                    :disabled="currentPageUser <= 1"
                  >
                    <i class="align-middle" data-feather="chevron-left"></i
                    >Anterior
                  </button>
                  <button
                    class="btnHoverPag"
                    style="
                      border: none;
                      color: #0084f4;
                      font-weight: 700;
                      line-height: 22px;
                      padding: 0 0.25em;
                      border-radius: 8px;
                    "
                    @click="nextPageUser()"
                    :disabled="currentPageUser >= totalPagesUsuarios"
                  >
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
import carIcon from "../../../../assets/images/icons/carIcon.svg";
import bedIcon from "../../../../assets/images/icons/bedIcon.svg";

export default {
  name: "CrmImovCompatView",
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
      carIcon,
      bedIcon,

      canais: "",
      contatos: "",
      dataInicio: "",
      dataFinal: "",

      items: [
        {
          id: 1,
          detalhes: "2.000,00",
          img: "../../../../assets/images/casaFrente.jpeg",
          imovel: "144 - Apartamento Padrão",
          subImovel: "Manaíra - João Pessoa/PB",
          compartilhar: "compartilhar",
          noRadar: "57",
          car: true,
        },
        {
          id: 2,
          detalhes: "184.100,00",
          img: "../../../../assets/images/casaFrente.jpeg",
          imovel: "128 - Apartamento Flat",
          subImovel: "Intermares Cabedelo/PB",
          compartilhar: "compartilhar",
          noRadar: "30",
          car: false,
        },
        {
          id: 3,
          detalhes: "173.800,00",
          img: "../../../../assets/images/casaFrente.jpeg",
          imovel: "126 - Apartamento Flat",
          subImovel: "Intermares Cabedelo/PB",
          compartilhar: "compartilhar",
          noRadar: "21",
          car: false,
        },
        {
          id: 4,
          detalhes: "195.000,00",
          img: "../../../../assets/images/casaFrente.jpeg",
          imovel: "120 - Apartamento Flat",
          subImovel: "Intermares Cabedelo/PB",
          compartilhar: "compartilhar",
          noRadar: "214",
          car: false,
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
          return usuario.imovel
            .toLowerCase()
            .includes(this.searchUsuario.toLowerCase());
        })
        .slice(startIndex, endIndex);
    },
    totalPagesUsuarios() {
      return Math.ceil(
        this.items.filter((usuario) => {
          this.currentPageConcept = 1;
          return usuario.imovel
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
  transition: background-color 0.3s, box-shadow 0.3s; /* Transições suaves */
  box-shadow: 0 0 5px rgba(248, 67, 67, 0.6), inset 0 0 1px rgba(0, 0, 0, 0.6);
  padding: 10px 15px;
}
.btn-reds:hover {
  background-color: #f61212; /* Laranja mais escuro ao passar o mouse */
  color: #fff; /* Garantir que o texto permaneça branco */
}
</style>
