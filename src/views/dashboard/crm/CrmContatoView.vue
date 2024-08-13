<template>
  <div class="main">
    <navbarImobiliaria />
    <main class="">
      <div class="" style="display: flex; flex-direction: row">
        <!-- Sidebar com opções e ícones -->
        <sidebarCrm tab="Contato recebidos" />
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
              Contatos recebidos (Leads)
            </h4>
            <div style="display: flex; align-items: center">
              <select
                class="form-select"
                v-model="canais"
                style="
                  height: 30px;
                  font-size: 13px;
                  font-weight: 600;
                  width: 200px;
                "
              >
                <option value="" style="font-weight: 600">
                  Todos os canais
                </option>
              </select>
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
                <option value="" style="font-weight: 600">13/07/2024</option>
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
                <option value="" style="font-weight: 600">12/08/2024</option>
              </select>
            </div>
          </header>

          <div class="mt-4">
            <div class="row justify-content-center">
              <div class="col-10 mb-3">
                <div
                  style="
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                    height: 300px;
                  "
                >
                  <div
                    class="card p-3"
                    style="
                      width: 30%;
                      border-left: 5px solid rgb(0, 99, 192);
                      justify-content: space-between;
                    "
                  >
                    <h3
                      style="
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 17px;
                        color: rgb(0, 99, 192);
                      "
                    >
                      Leads gerados no período
                    </h3>
                    <p
                      style="
                        align-self: flex-end;
                        font-size: 122px;
                        color: rgb(0, 86, 179);
                        margin-bottom: -40px;
                        padding: 0;
                      "
                    >
                      05
                    </p>
                  </div>
                  <div
                    class="card p-3"
                    style="width: 67%; border-left: 5px solid rgb(0, 99, 192)"
                  >
                    <h3
                      style="
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 17px;
                        color: rgb(0, 99, 192);
                      "
                    >
                      Origens por canal
                    </h3>
                    <div style="display: flex; align-items: center">
                      <graphAtivLaterComp />
                      <p class="mb-5" style="margin-right: 40px">5</p>
                    </div>
                  </div>
                </div>

                <div class="card p-3">
                  <div class="table-responsive">
                    <table class="table" style="font-size: 14px">
                      <thead>
                        <tr>
                          <th>Data</th>
                          <th>Cliente</th>
                          <th>Origem</th>
                          <th>Corretor responsável</th>
                          <th>Posição do CRM</th>
                          <th>Última interação</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="item in items"
                          :key="item.id"
                          class="tdHover"
                          style="cursor: pointer"
                        >
                          <td>{{ item.data }}</td>
                          <td>{{ item.cliente }}</td>
                          <td>{{ item.origem }}</td>
                          <td>{{ item.corretor }}</td>
                          <td>{{ item.posicaoCRM }}</td>
                          <td>{{ item.ultimaInteracao }}</td>
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
    <!-- <footer /> -->
  </div>
</template>

<script>
import navbarImobiliaria from "@/components/navbar/navbar-imobiliaria.vue";
import footer from "@/components/footer/index.vue";
import sidebarCrm from "@/components/sidebar/sidebarCrm.vue";
import youtubeLogo from "../../../../assets/images/icons/youtubeLogo.svg";
import graphAtivLaterComp from "@/components/graph/graphAtivLaterComp.vue";

export default {
  name: "CrmContatoView",
  components: {
    navbarImobiliaria,
    footer,
    sidebarCrm,
    graphAtivLaterComp,
  },
  data() {
    return {
      graphType: "",
      youtubeLogo,

      canais: "",
      contatos: "",
      dataInicio: "",
      dataFinal: "",

      items: [
        {
          id: 1,
          data: "01/08/24 00:44",
          cliente: "Marcello Agostini",
          origem: "Facebook",
          corretor: "Rodrigo Castelo",
          posicaoCRM: "Contato",
          ultimaInteracao: "01/08/24 | 12 dias",
        },
        {
          id: 2,
          data: "01/08/24 00:18",
          cliente: "Sil Souza",
          origem: "Facebook",
          corretor: "Rodrigo Castelo",
          posicaoCRM: "Contato",
          ultimaInteracao: "01/08/24 | 12 dias",
        },
        {
          id: 3,
          data: "30/07/24 21:13",
          cliente: "Violetta Cardoso",
          origem: "Facebook",
          corretor: "Rodrigo Castelo",
          posicaoCRM: "Contato",
          ultimaInteracao: "30/07/24 | 13 dias",
        },
        {
          id: 4,
          data: "29/07/24 22:59",
          cliente: "Bruno Sena",
          origem: "Facebook",
          corretor: "Rodrigo Castelo",
          posicaoCRM: "Contato",
          ultimaInteracao: "29/07/24 | 14 dias",
        },
        {
          id: 5,
          data: "29/07/24 05:56",
          cliente: "Josiene Nunes",
          origem: "Facebook",
          corretor: "Rodrigo Castelo",
          posicaoCRM: "Contato",
          ultimaInteracao: "29/07/24 | 15 dias",
        },
      ],
    };
  },
};
</script>
<style>
.tdHover:hover {
  background-color: #f1f4f9;
}
</style>
