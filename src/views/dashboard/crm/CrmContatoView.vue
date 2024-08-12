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

export default {
  name: "CrmContatoView",
  components: {
    navbarImobiliaria,
    footer,
    sidebarCrm,
  },
  data() {
    return {
      graphType: "",
      youtubeLogo,

      canais: "",
      contatos: "",
      dataInicio: "",
      dataFinal: "",
    };
  },
};
</script>
