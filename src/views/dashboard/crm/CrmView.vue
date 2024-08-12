<template>
  <div class="main">
    <navbarImobiliaria />
    <main class="">
      <div class="" style="display: flex; flex-direction: row">
        <!-- Sidebar com opções e ícones -->
        <sidebarCrm tab="Visão geral" />
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
              Visão geral
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
          <div class="p-3 mt-3">
            <div class="row justify-content-center">
              <!-- Card 1 -->
              <div class="col-10 mb-3">
                <div
                  class="card"
                  style="
                    position: relative;
                    border: 1px solid rgb(211, 220, 235);
                  "
                >
                  <div
                    style="
                      position: absolute;
                      bottom: 95%;
                      left: 98.5%;
                      width: 30px;
                      height: 30px;
                      background-color: rgb(255, 255, 255);
                      border: 1px solid rgb(211, 220, 235);
                      border-radius: 100%;
                      display: grid;
                      place-items: center;
                      cursor: pointer;
                    "
                  >
                    <i class="align-middle" data-feather="x"></i>
                  </div>
                  <div class="d-flex">
                    <!-- Barra lateral dentro do card -->
                    <div
                      class="bg-primary"
                      style="
                        background-color: rgb(23, 110, 200);
                        width: 15%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        color: #fff;
                        border-top-left-radius: 5px;
                        border-bottom-left-radius: 5px;
                      "
                    >
                      <i
                        class="align-middle"
                        style="width: 60%; height: 60%"
                        data-feather="help-circle"
                      ></i>
                      <span class="mt-1" style="font-weight: 800">Ajuda</span>
                    </div>
                    <!-- Conteúdo do card -->
                    <div class="card-body flex-fill ms-3">
                      <h5
                        class="card-title"
                        style="color: #000; font-size: 16px; font-weight: 500"
                      >
                        Precisa de ajuda?
                      </h5>
                      <p
                        class="card-text"
                        style="color: #000; font-size: 13.5px; font-weight: 400"
                      >
                        Separamos alguns tópicos desta área
                      </p>
                      <div style="display: flex; flex-direction: column">
                        <div style="display: flex">
                          <img
                            :src="youtubeLogo"
                            style="width: 20px; height: 20px"
                          />

                          <a
                            href="#"
                            style="
                              text-decoration: none;
                              color: rgb(23, 110, 200);
                              font-size: 13.5px;
                              font-weight: 500;
                            "
                            class="ms-2"
                            >Adicionar negócio ao CRM</a
                          >
                        </div>
                      </div>
                      <div
                        style="display: flex; flex-direction: column"
                        class="mt-1"
                      >
                        <div style="display: flex">
                          <img
                            :src="youtubeLogo"
                            style="width: 20px; height: 20px"
                          />

                          <a
                            href="#"
                            style="
                              text-decoration: none;
                              color: rgb(23, 110, 200);
                              font-size: 13.5px;
                              font-weight: 500;
                            "
                            class="ms-2"
                            >Criar Funil</a
                          >
                        </div>
                      </div>
                      <div
                        style="display: flex; flex-direction: column"
                        class="mt-1"
                      >
                        <div style="display: flex">
                          <img
                            :src="youtubeLogo"
                            style="width: 20px; height: 20px"
                          />

                          <a
                            href="#"
                            style="
                              text-decoration: none;
                              color: rgb(23, 110, 200);
                              font-size: 13.5px;
                              font-weight: 500;
                            "
                            class="ms-2"
                            >Editar Funil</a
                          >
                        </div>
                      </div>
                      <div
                        style="display: flex; flex-direction: column"
                        class="mt-1"
                      >
                        <div style="display: flex">
                          <img
                            :src="youtubeLogo"
                            style="width: 20px; height: 20px"
                          />

                          <a
                            href="#"
                            style="
                              text-decoration: none;
                              color: rgb(23, 110, 200);
                              font-size: 13.5px;
                              font-weight: 500;
                            "
                            class="ms-2"
                            >Radar de oportunidades</a
                          >
                        </div>
                      </div>
                      <div
                        style="display: flex; flex-direction: column"
                        class="mt-1"
                      >
                        <div style="display: flex">
                          <img
                            :src="youtubeLogo"
                            style="width: 20px; height: 20px"
                          />

                          <a
                            href="#"
                            style="
                              text-decoration: none;
                              color: rgb(23, 110, 200);
                              font-size: 13.5px;
                              font-weight: 500;
                            "
                            class="ms-2"
                            >Distribuição padrão de funil por negócio</a
                          >
                        </div>
                      </div>
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          margin-left: -6px;
                        "
                        class="mt-3"
                      >
                        <a
                          href="#"
                          style="
                            text-decoration: none;
                            color: rgb(23, 110, 200);
                            font-size: 13px;
                            font-weight: 500;
                            display: flex;
                          "
                          class="ms-2"
                          ><span style="color: #000">Acessar</span> &nbsp;
                          Central de ajuda</a
                        >
                      </div>
                    </div>
                    <div class="me-3 mt-3">
                      <h5
                        class="card-title"
                        style="color: #000; font-size: 16px; font-weight: 500"
                      >
                        Vídeo demonstrativo
                      </h5>
                      <div
                        style="
                          position: relative;
                          width: 240px;
                          height: 135px;
                          cursor: pointer;
                        "
                      >
                        <img
                          src="https://img.youtube.com/vi/8DX7mudPCNs/0.jpg"
                          style="
                            width: inherit;
                            height: inherit;
                            object-fit: cover;
                            border-radius: 4px;
                          "
                        />
                        <img
                          :src="youtubeLogo"
                          style="
                            position: absolute;
                            top: 49%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            height: 50px;
                            width: 50px;
                          "
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="card pe-4 ps-4 pt-4"
                  style="border: 1px solid rgb(211, 220, 235)"
                >
                  <h2 class="card-title">Etapas do Funil</h2>
                  <h4 class="card-title">
                    Quantidade de negócios e VGV por etapa
                  </h4>
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

export default {
  name: "CrmView",
  components: {
    navbarImobiliaria,
    footer,
    sidebarCrm,
  },
  data() {
    return {
      graphType: "",
      youtubeLogo,
    };
  },
};
</script>
<style>
/* Custom styles for reducing font size */
.custom-nav-link {
  font-size: 0.79rem; /* Smaller font size */
  font-weight: 400; /* Increased font-weight */
}
.custom-select {
  font-size: 0.75rem; /* Smaller font size */
}

.btn-oranges {
  color: #fff; /* Texto branco */
  border: none; /* Remove a borda padrão */
  background-color: #ff9702;
  box-shadow: 0 0 5px rgba(255, 151, 2, 0.6), inset 0 0 1px rgba(0, 0, 0, 0.6); /* Sombra laranja */
  transition: background-color 0.3s, box-shadow 0.3s; /* Transições suaves */
}

.btn-white {
  color: #000; /* Texto branco */
  border: none; /* Remove a borda padrão */
  background-color: #fff;
  box-shadow: 0 0 5px rgba(41, 41, 40, 0.6), inset 0 0 1px rgba(0, 0, 0, 0.6); /* Sombra laranja */
  transition: background-color 0.3s, box-shadow 0.3s; /* Transições suaves */
}

.btn-oranges:hover {
  background-color: #af6901; /* Laranja mais escuro ao passar o mouse */
  color: #fff; /* Garantir que o texto permaneça branco */
}
.btn-white:hover {
  background-color: #efeeee; /* Laranja mais escuro ao passar o mouse */
  color: #000; /* Garantir que o texto permaneça branco */
}
</style>
