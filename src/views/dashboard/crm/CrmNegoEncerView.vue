<template>
  <div class="main">
    <navbarImobiliaria />
    <main class="">
      <div class="" style="display: flex; flex-direction: row">
        <!-- Sidebar com opções e ícones -->
        <sidebarCrm tab="Negócios encerrados" />
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
              Negócios encerrados | Lista de clientes | 2 imóveis | 32 pessoas
            </h4>
            <div style="display: flex; align-items: center">
              <button
                class="btn btn-white ms-2"
                style="
                  display: flex;
                  align-items: center;
                  height: 30px;
                  font-size: 1em;
                  font-weight: 600;
                "
              >
                <i class="align-middle" data-feather="file-plus"></i>
                <span style="margin-left: 3px">Exportar</span>
              </button>

              <div
                style="
                  border: 1px solid #d3dceb;
                  border-radius: 5px;
                  margin-left: 6px;
                "
              >
                <button
                  style="
                    border: none;
                    border-top-left-radius: 5px;
                    border-bottom-left-radius: 5px;
                    border-right: 1px solid #d3dceb;
                    padding: 0 10px;
                    height: 30px;
                    font-size: 12px;
                    font-weight: 700;
                  "
                  :style="{
                    backgroundColor: btnActive === 'all' ? '#31d084' : '#fff',
                    color: btnActive === 'all' ? '#fff' : '#1c0c1e',
                  }"
                  @click="handleType('all')"
                >
                  Todos
                </button>
                <button
                  style="
                    border: none;
                    padding: 0 10px;
                    height: 30px;
                    font-size: 12px;
                    font-weight: 700;
                  "
                  :style="{
                    backgroundColor: btnActive === 'ganho' ? '#31d084' : '#fff',
                    color: btnActive === 'ganho' ? '#fff' : '#1c0c1e',
                  }"
                  @click="handleType('ganho')"
                >
                  Ganhos
                </button>
                <button
                  style="
                    border: none;
                    padding: 0 10px;
                    height: 30px;
                    border-left: 1px solid #d3dceb;
                    font-size: 12px;
                    font-weight: 700;
                  "
                  :style="{
                    backgroundColor:
                      btnActive === 'perdido' ? '#31d084' : '#fff',
                    color: btnActive === 'perdido' ? '#fff' : '#1c0c1e',
                  }"
                  @click="handleType('perdido')"
                >
                  Perdidos
                </button>
                <button
                  style="
                    border: none;
                    padding: 0 10px;
                    height: 30px;
                    border: none;
                    border-top-right-radius: 5px;
                    border-bottom-right-radius: 5px;
                    border-left: 1px solid #d3dceb;
                    font-size: 12px;
                    font-weight: 700;
                  "
                  :style="{
                    backgroundColor:
                      btnActive === 'removido' ? '#31d084' : '#fff',
                    color: btnActive === 'removido' ? '#fff' : '#1c0c1e',
                  }"
                  @click="handleType('removido')"
                >
                  Removidos
                </button>
              </div>

              <div
                class=""
                style="
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  margin-left: 10px;
                "
              >
                <div class="">
                  <input
                    id="start_date"
                    type="text"
                    class="formControl"
                    placeholder="DD/MM/AAAA"
                    name="start_date"
                    value="01/01/2024"
                    style="
                      height: 31px;
                      width: 100px;
                      padding-left: 8px;
                      border: solid #d3d3d3 1px;
                      border-radius: 5px;
                      font-size: 1em;
                      font-weight: 500;
                    "
                  />
                </div>
                <div
                  class=""
                  style="width: 15px; background-color: #d3dceb; height: 1px"
                ></div>
                <div class="">
                  <input
                    id="end_date"
                    type="text"
                    class="formControl"
                    placeholder="DD/MM/AAAA"
                    name="end_date"
                    value="13/08/2024"
                    style="
                      height: 31px;
                      width: 100px;
                      padding-left: 8px;
                      border: solid #d3d3d3 1px;
                      border-radius: 5px;
                      font-size: 1em;
                      font-weight: 500;
                    "
                  />
                </div>
              </div>
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
    };
  },
  methods: {
    handleType(btn) {
      this.btnActive = btn;
    },
  },
};
</script>
