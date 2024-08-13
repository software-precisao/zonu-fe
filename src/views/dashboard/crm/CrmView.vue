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
                <span style="margin-left: 3px">Exportar</span>
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
          <div class="mt-4">
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
                  <h2
                    class="mb-0"
                    style="
                      font-size: 14px;
                      color: rgb(33, 35, 44);
                      font-weight: 900;
                    "
                  >
                    Etapas do Funil
                  </h2>
                  <p
                    class="mb-4"
                    style="
                      font-size: 14px;
                      line-height: 21px;
                      color: rgb(33, 35, 44);
                      font-weight: 400;
                    "
                  >
                    Quantidade de negócios e VGV por etapa
                  </p>

                  <div class="container">
                    <div class="row">
                      <div class="col-lg-6 mb-4">
                        <div
                          class="mb-2"
                          v-for="(etapa, index) in etapas"
                          :key="etapa.nome"
                        >
                          <div
                            class="card-body d-flex justify-content-between align-items-center"
                            :style="{
                              width: `${etapa.vgv}%`,
                              backgroundColor: calculateBarColor(index),
                              color: '#fff',
                              borderRadius: '10px',
                              height: '62px',
                            }"
                          >
                            <div>
                              <h6 class="mb-0" style="color: #fff">
                                {{ etapa.nome }}
                              </h6>
                            </div>
                            <div class="text-end">
                              <h5 style="color: #fff">{{ etapa.qtd }}</h5>
                              <p class="mb-0">
                                R$
                                {{
                                  etapa.valor.toLocaleString("pt-BR", {
                                    minimumFractionDigits: 2,
                                  })
                                }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Coluna para o gráfico de clientes, estagnados e imóveis -->
                      <div class="col-lg-5" style="margin-left: 60px">
                        <!-- Adicione aqui o gráfico de pizza e os dados dos clientes, estagnados e imóveis -->
                        <div class="row mb-4">
                          <div
                            class=""
                            style="
                              width: 28%;
                              padding: 10px;
                              border-left: 4px solid rgb(0, 99, 192);
                              box-shadow: rgba(0, 0, 0, 0.05) 1px 2px 5px;
                              height: 70px;
                              margin-right: 10px;
                            "
                          >
                            <h2 style="font-size: 14px; color: rgb(92, 82, 96)">
                              Clientes
                            </h2>
                            <p
                              style="
                                font-size: 24px;
                                font-weight: bold;
                                text-align: right;
                              "
                            >
                              54
                            </p>
                          </div>
                          <div
                            class="col-4"
                            style="
                              width: 28%;
                              padding: 10px;
                              border-left: 4px solid rgb(248, 67, 67);
                              box-shadow: rgba(0, 0, 0, 0.05) 1px 2px 5px;
                              height: 70px;
                              margin-right: 10px;
                            "
                          >
                            <h2 style="font-size: 14px; color: rgb(92, 82, 96)">
                              Estagnados
                            </h2>
                            <p
                              style="
                                font-size: 24px;
                                font-weight: bold;
                                text-align: right;
                              "
                            >
                              52
                            </p>
                          </div>
                          <div
                            class="col-4"
                            style="
                              width: 28%;
                              padding: 10px;
                              border-left: 4px solid rgb(0, 99, 192);
                              box-shadow: rgba(0, 0, 0, 0.05) 1px 2px 5px;
                              height: 70px;
                            "
                          >
                            <h2 style="font-size: 14px; color: rgb(92, 82, 96)">
                              Imóveis
                            </h2>
                            <p
                              style="
                                font-size: 24px;
                                font-weight: bold;
                                text-align: right;
                              "
                            >
                              1
                            </p>
                          </div>
                        </div>
                        <div>
                          <h2
                            class="mb-0"
                            style="
                              font-size: 14px;
                              color: rgb(33, 35, 44);
                              font-weight: 900;
                            "
                          >
                            Canal de origem dos clientes
                          </h2>
                          <p
                            class="mb-4"
                            style="
                              font-size: 14px;
                              line-height: 21px;
                              color: rgb(33, 35, 44);
                              font-weight: 400;
                            "
                          >
                            Distribuição por canal
                          </p>
                          <div class="w-52">
                            <graphAtivCrmComp />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="card mb-2"
                  style="
                    background: rgb(237, 238, 242);
                    padding: 5px 15px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                  "
                >
                  <h2 style="font-size: 14px; font-weight: 600">
                    Análise de resultado por período
                  </h2>
                  <div
                    class=""
                    style="
                      display: flex;
                      flex-direction: row;
                      align-items: center;
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
                          height: 45px;
                          width: 120px;
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
                      style="
                        width: 15px;
                        background-color: #d3dceb;
                        height: 1px;
                      "
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
                          height: 45px;
                          width: 120px;
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

                <div
                  class=""
                  style="
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                  "
                >
                  <div
                    class="card"
                    style="
                      width: 49%;
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: space-around;
                      padding: 20px 10px;
                      border-left: 3px solid rgb(0, 99, 192);
                    "
                  >
                    <h2 style="font-size: 24px; color: rgb(92, 82, 96)">
                      Negócios
                    </h2>
                    <div
                      style="
                        display: flex;
                        flex-direction: column;
                        align-items: left;
                      "
                    >
                      <h3
                        style="
                          margin: 0;
                          padding: 0;
                          font-size: 16px;
                          color: rgb(92, 82, 96);
                          font-weight: 600;
                        "
                      >
                        Iniciados
                      </h3>
                      <p
                        style="
                          margin: 0;
                          padding: 0;
                          font-size: 22px;
                          font-weight: 600;
                        "
                      >
                        54
                      </p>
                    </div>
                    <div>
                      <h3
                        style="
                          margin: 0;
                          padding: 0;
                          font-size: 16px;
                          color: rgb(92, 82, 96);
                          font-weight: 600;
                        "
                      >
                        Ganhos
                      </h3>
                      <p
                        style="
                          margin: 0;
                          padding: 0;
                          font-size: 22px;
                          font-weight: 600;
                        "
                      >
                        0
                      </p>
                    </div>
                    <div>
                      <h3
                        style="
                          margin: 0;
                          padding: 0;
                          font-size: 16px;
                          color: rgb(92, 82, 96);
                          font-weight: 600;
                        "
                      >
                        Perdidos
                      </h3>
                      <p
                        style="
                          margin: 0;
                          padding: 0;
                          font-size: 20px;
                          font-weight: 600;
                        "
                      >
                        0
                      </p>
                    </div>
                  </div>
                  <div
                    class="card"
                    style="
                      width: 49%;
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: space-around;
                      padding: 10px;
                      border-left: 3px solid rgb(0, 99, 192);
                    "
                  >
                    <h2 style="font-size: 24px; color: rgb(92, 82, 96)">
                      Clientes
                    </h2>
                    <div
                      style="
                        display: flex;
                        flex-direction: column;
                        align-items: left;
                      "
                    >
                      <h3
                        style="
                          margin: 0;
                          padding: 0;
                          font-size: 16px;
                          color: rgb(92, 82, 96);
                          font-weight: 600;
                        "
                      >
                        Iniciados
                      </h3>
                      <p
                        style="
                          margin: 0;
                          padding: 0;
                          font-size: 22px;
                          font-weight: 600;
                        "
                      >
                        54
                      </p>
                    </div>
                    <div>
                      <h3
                        style="
                          margin: 0;
                          padding: 0;
                          font-size: 16px;
                          color: rgb(92, 82, 96);
                          font-weight: 600;
                        "
                      >
                        Ganhos
                      </h3>
                      <p
                        style="
                          margin: 0;
                          padding: 0;
                          font-size: 22px;
                          font-weight: 600;
                        "
                      >
                        0
                      </p>
                    </div>
                    <div>
                      <h3
                        style="
                          margin: 0;
                          padding: 0;
                          font-size: 16px;
                          color: rgb(92, 82, 96);
                          font-weight: 600;
                        "
                      >
                        Perdidos
                      </h3>
                      <p
                        style="
                          margin: 0;
                          padding: 0;
                          font-size: 20px;
                          font-weight: 600;
                        "
                      >
                        0
                      </p>
                    </div>
                  </div>
                </div>

                <div class="card pe-4 ps-4 pt-4">
                  <h2
                    class="mb-0"
                    style="
                      font-size: 14px;
                      color: rgb(33, 35, 44);
                      font-weight: 900;
                    "
                  >
                    Negócios Perdidos por Etapa
                  </h2>
                  <p
                    class="mb-6"
                    style="
                      font-size: 14px;
                      line-height: 21px;
                      color: rgb(33, 35, 44);
                      font-weight: 400;
                    "
                  >
                    Análise de percentual de perdas em cada etapa
                  </p>

                  <graphBarAtivCrmComp />
                </div>
                <div class="card pe-4 ps-4 pt-4">
                  <h2
                    class="mb-0"
                    style="
                      font-size: 14px;
                      color: rgb(33, 35, 44);
                      font-weight: 900;
                    "
                  >
                    Principais motivos de perda
                  </h2>
                  <p
                    class="mb-2"
                    style="
                      font-size: 14px;
                      line-height: 21px;
                      color: rgb(33, 35, 44);
                      font-weight: 400;
                    "
                  >
                    Contabilizado por motivo
                  </p>

                  <graphBarLaterCrmComp />
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
import graphAtivCrmComp from "@/components/admin/graph/graphAtivCrmComp.vue";
import graphBarAtivCrmComp from "@/components/graph/graphBarAtivCrmComp.vue";
import graphBarLaterCrmComp from "@/components/graph/graphBarLaterCrmComp.vue";

export default {
  name: "CrmView",
  components: {
    navbarImobiliaria,
    footer,
    sidebarCrm,
    graphAtivCrmComp,
    graphBarAtivCrmComp,
    graphBarLaterCrmComp,
  },
  data() {
    return {
      graphType: "",
      youtubeLogo,

      etapas: [
        { nome: "Contato", qtd: 3, vgv: 100, valor: "748.356,00" },
        { nome: "Atendimento", qtd: 5, vgv: 98, valor: "1.247.260,00" },
        { nome: "Procurando Imóvel", qtd: 3, vgv: 96, valor: "748.356,00" },
        { nome: "Efetuar ligação", qtd: 6, vgv: 94, valor: "1.496.712,00" },
        { nome: "WhatsApp (Dia 1)", qtd: 0, vgv: 92, valor: "0,00" },
        { nome: "WhatsApp (Dia 2)", qtd: 0, vgv: 90, valor: "0,00" },
        { nome: "WhatsApp (Dia 3)", qtd: 0, vgv: 88, valor: "0,00" },
        { nome: "Aquecimento 01", qtd: 2, vgv: 87, valor: "498.904,00" },
        { nome: "Aquecimento 02", qtd: 0, vgv: 86, valor: " 0,00" },
        { nome: "Aquecimento 02", qtd: 0, vgv: 85, valor: "0,00" },
        { nome: "Aquecimento 02", qtd: 0, vgv: 84, valor: "0,00" },
        { nome: "Aquecimento 02", qtd: 21, vgv: 83, valor: "5.238.492,00" },
        { nome: "Agendado Compromisso", qtd: 2, vgv: 82, valor: "498.904,00" },
        { nome: "Agendamento Longo", qtd: 2, vgv: 81, valor: "498.904,00" },
        { nome: "Agendado Visita", qtd: 0, vgv: 80, valor: "0,00" },
        { nome: "Visita Realizada", qtd: 1, vgv: 79, valor: "249.452,00" },
        { nome: "Proposta", qtd: 0, vgv: 78, valor: "0,00" },
        { nome: "Documentação", qtd: 0, vgv: 77, valor: "0,00" },
        { nome: "Assinatura", qtd: 0, vgv: 76, valor: "0,00" },
        { nome: "Sem Interação", qtd: 0, vgv: 75, valor: "0,00" },
        { nome: "Descartado", qtd: 9, vgv: 74, valor: "2.245.068,00" },
      ],
    };
  },
  methods: {
    calculateBarWidth(vgv) {
      const maxVGV = Math.max(...this.etapas.map((etapa) => etapa.vgv));
      return (vgv / maxVGV) * 100; // Proporção em relação ao maior VGV
    },
    calculateBarColor(index) {
      // Cor base para a primeira barra
      const baseColor = { r: 25, g: 114, b: 198 };

      // Fator de escurecimento
      const darkenFactor = 0.1 * (index / 3.5);

      // Calcula a nova cor escurecendo a base
      const newColor = {
        r: Math.floor(baseColor.r * (1 - darkenFactor)),
        g: Math.floor(baseColor.g * (1 - darkenFactor)),
        b: Math.floor(baseColor.b * (1 - darkenFactor)),
      };

      // Retorna a cor em formato RGB
      return `rgb(${newColor.r}, ${newColor.g}, ${newColor.b})`;
    },
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
