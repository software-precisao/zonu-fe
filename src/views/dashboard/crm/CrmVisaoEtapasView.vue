<template>
  <div class="main">
    <navbarImobiliaria />
    <main class="">
      <div class="" style="display: flex; flex-direction: row">
        <!-- Sidebar com opções e ícones -->
        <sidebarCrm tab="Visão etapas" />
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
              Negócios em andamento | Visão em etapas | 1 imóvel | 54 clientes
            </h4>
            <div style="display: flex; align-items: center">
              <select
                class="form-select"
                v-model="graphType"
                style="height: 30px; font-size: 13px; font-weight: 600"
              >
                <option value="" style="font-weight: 600">
                  Vita Studios Manaíra (54 negócios)
                </option>
                <option value="op2" style="font-weight: 600">
                  Aluguel (37 negócios)
                </option>
                <option value="op3" style="font-weight: 600">
                  Farol das Antilhas (1 negócio)
                </option>
                <option value="op4" style="font-weight: 600">
                  Padrão (0 negócios)
                </option>
                <option value="op5" style="font-weight: 600">
                  Teste (0 negócios)
                </option>
                <option value="op6" style="font-weight: 600">
                  Venda (247 negócios)
                </option>
              </select>

              <a
                class="btn btn-white ms-2"
                style="display: flex; align-items: center; height: 30px"
                href="#"
              >
                <img
                :src="barCodeIcon"
                  style="transform: rotate(90deg); width: 15px; height: 15px;"
                ></img>
              </a>

              <button
                class="btn btn-oranges ms-2"
                style="display: flex; align-items: center; height: 30px"
              >
                <i class="align-middle" data-feather="plus"></i>
                <span style="margin-left: 3px">Negócio</span>
              </button>
              <button
                class="btn btn-white ms-2"
                style="display: flex; align-items: center; height: 30px"
              >
                <i class="align-middle" data-feather="file-plus"></i>
                <span style="margin-left: 3px">Negócio</span>
              </button>
              <a
                class="btn btn-white ms-2"
                style="display: flex; align-items: center; height: 30px"
                href="/seu-crmconfig"
              >
                <i class="align-middle" data-feather="settings"></i>
              </a>
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
import barCodeIcon from "../../../../assets/images/icons/barCodeIcon.svg";

export default {
  name: "CrmVisaoEtapasView",
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
    };
  },
};
</script>
