<template>
  <div class="main">
    <navbarImobiliaria />
    <main class="">
      <div class="" style="display: flex; flex-direction: row">
        <!-- Sidebar com opções e ícones -->
        <sidebarCrm tab="Imóveis reservados" />
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
              Negócios em andamento | Imóveis reservados | 0 Imóvel | 0 Cliente
              | R$0,00
            </h4>
          </header>

          <div class="" style="margin-top: 8rem">
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
                    Nenhum imóvel reservado
                  </h2>
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
import homeIcon from "../../../../assets/images/icons/homeIcone.svg";

export default {
  name: "CrmImoReserView",
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
    };
  },
};
</script>
