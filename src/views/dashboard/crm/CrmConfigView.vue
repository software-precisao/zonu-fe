<template>
  <div class="main">
    <NavbarImobiliaria />
    <main class="">
      <div class="" style="display: flex; flex-direction: row">
        <SidebarCrm tab="config" />

        <div class="" style="width: 100%">
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
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: 3rem;
                  "
                >
                  <div>
                    <h2 style="font-size: 1.1rem; font-weight: 500">
                      Edição de funil
                    </h2>
                    <p>
                      Deixe as etapas simples, baseadas nas atividades do dia a
                      dia de trabalho.
                    </p>
                  </div>
                  <button
                    class="btn btn-orange"
                    style="display: flex; align-items: center; height: 30px"
                  >
                    <i class="align-middle" data-feather="plus"></i>
                    <span style="margin-left: 3px">Criar Funil</span>
                  </button>
                </div>

                <div
                  class="card mt-4"
                  style="border: 1px solid rgb(211, 220, 235)"
                >
                  <div class="card-body">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Nome do funil</th>
                          <th>
                            Limpeza em
                            <img
                              :src="InterrSvg"
                              class="ms-2"
                              style="width: 12px; height: 12px"
                            />
                          </th>
                          <th class="text-center">Opções</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="tr-hover">
                          <td>
                            <div
                              class="d-flex flex-column"
                              style="font-size: 14px; font-weight: 500"
                            >
                              Aluguel
                              <span
                                class="text-muted"
                                style="
                                  font-size: 12px;
                                  color: rgb(117, 117, 117);
                                "
                                >Funil Aluguel</span
                              >
                            </div>
                          </td>
                          <td style="font-size: 14px; font-weight: 500">
                            120 Dias
                          </td>
                          <td class="text-end">
                            <div class="d-flex justify-content-end">
                              <button class="btn btn-white me-2">Editar</button>
                              <button class="btn btn-red">Remover</button>
                            </div>
                          </td>
                        </tr>
                        <tr class="tr-hover">
                          <td style="font-size: 14px; font-weight: 500">
                            Farol das Antilhas
                          </td>
                          <td style="font-size: 14px; font-weight: 500">
                            120 Dias
                          </td>
                          <td class="text-end">
                            <div class="d-flex justify-content-end">
                              <button class="btn btn-white me-2">Editar</button>
                              <button class="btn btn-red">Remover</button>
                            </div>
                          </td>
                        </tr>
                        <tr class="tr-hover">
                          <td style="font-size: 14px; font-weight: 500">
                            Padrao
                          </td>
                          <td style="font-size: 14px; font-weight: 500">
                            120 Dias
                          </td>
                          <td class="text-end">
                            <div class="d-flex justify-content-end">
                              <button class="btn btn-white me-2">Editar</button>
                              <button class="btn btn-red">Remover</button>
                            </div>
                          </td>
                        </tr>
                        <tr class="tr-hover">
                          <td style="font-size: 14px; font-weight: 500">
                            Teste
                          </td>
                          <td style="font-size: 14px; font-weight: 500">
                            120 Dias
                          </td>
                          <td class="text-end">
                            <div class="d-flex justify-content-end">
                              <button class="btn btn-white me-2">Editar</button>
                              <button class="btn btn-red">Remover</button>
                            </div>
                          </td>
                        </tr>
                        <tr class="tr-hover">
                          <td>
                            <div
                              class="d-flex flex-column"
                              style="font-size: 14px; font-weight: 500"
                            >
                              Venda
                              <span
                                class="text-muted"
                                style="
                                  font-size: 12px;
                                  color: rgb(117, 117, 117);
                                "
                                >Funil de atendimento padrão</span
                              >
                            </div>
                          </td>
                          <td style="font-size: 14px; font-weight: 500">
                            365 Dias
                          </td>
                          <td class="text-end">
                            <div class="d-flex justify-content-end">
                              <button class="btn btn-white me-2">Editar</button>
                              <button class="btn btn-red">Remover</button>
                            </div>
                          </td>
                        </tr>
                        <tr class="tr-hover">
                          <td style="font-size: 14px; font-weight: 500">
                            Vita Studios Manaíra
                          </td>
                          <td style="font-size: 14px; font-weight: 500">
                            365 Dias
                          </td>
                          <td class="text-end">
                            <div class="d-flex justify-content-end">
                              <button class="btn btn-white me-2">Editar</button>
                              <button class="btn btn-red">Remover</button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: 3rem;
                  "
                >
                  <div>
                    <h2 style="font-size: 1.1rem; font-weight: 500">
                      Distribuição padrão de funil por negócio
                    </h2>
                    <p>
                      Defina o funil padrão para as transações. No cadastro do
                      imóvel é possível definir um funil personalizado para o
                      imóvel.
                    </p>
                  </div>
                </div>

                <div
                  class="card mt-4"
                  style="border: 1px solid rgb(211, 220, 235)"
                >
                  <div class="card-body">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Transação</th>
                          <th>Descrição</th>
                          <th>Funil associado</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="tr-hover">
                          <td>
                            <div
                              class="d-flex flex-column"
                              style="font-size: 14px"
                            >
                              <strong>Venda</strong>
                            </div>
                          </td>
                          <td style="font-size: 14px; font-weight: 500">
                            Imóveis à venda devem ser encaminhados para o funil
                          </td>
                          <td>
                            <div style="display: flex; align-items: center">
                              <select
                                class="form-select"
                                v-model="selectedValue"
                                @change="updateSelectedValue"
                                style="height: 30px; font-size: 13px"
                              >
                                <option disabled value="">
                                  Selecione uma opção
                                </option>
                                <optgroup
                                  v-for="group in options"
                                  :key="group.label"
                                  :label="group.label"
                                  class="optgroup-label"
                                >
                                  <option
                                    v-for="option in group.options"
                                    :key="option.value"
                                    :value="option.label"
                                    class="backOption"
                                  >
                                    {{ option.label }}
                                  </option>
                                </optgroup>
                              </select>
                            </div>
                          </td>
                        </tr>
                        <tr class="tr-hover">
                          <td style="font-size: 14px; font-weight: 600">
                            <strong>Locação</strong>
                          </td>
                          <td style="font-size: 14px; font-weight: 500">
                            Imóveis à locação devem ser encaminhados para o
                            funil
                          </td>
                          <td>
                            <div style="display: flex; align-items: center">
                              <select
                                class="form-select"
                                v-model="selectedValue2"
                                @change="updateSelectedValue2"
                                style="height: 30px; font-size: 13px"
                              >
                                <option disabled value="">
                                  Selecione uma opção
                                </option>
                                <optgroup
                                  v-for="group in options"
                                  :key="group.label"
                                  :label="group.label"
                                  class="optgroup-label"
                                >
                                  <option
                                    v-for="option in group.options"
                                    :key="option.value"
                                    :value="option.label"
                                    class="backOption"
                                  >
                                    {{ option.label }}
                                  </option>
                                </optgroup>
                              </select>
                            </div>
                          </td>
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
    <!-- <Footer /> -->
  </div>
</template>
<script>
import NavbarImobiliaria from "@/components/navbar/navbar-imobiliaria.vue";
import Footer from "@/components/footer/index.vue";
import SidebarCrm from "@/components/sidebar/sidebarCrm.vue";
import youtubeLogo from "../../../../assets/images/icons/youtubeLogo.svg";
import InterrSvg from "../../../../assets/images/icons/interrogationIcon.svg";

export default {
  name: "CrmConfig",
  components: {
    NavbarImobiliaria,
    Footer,
    SidebarCrm,
  },
  data() {
    return {
      youtubeLogo,
      InterrSvg,

      funilType1: "",
      funilType2: "",

      selectedValue: "",
      selectedValue2: "",
      options: [
        {
          label: "Vita Studios Manaíra",
          options: [
            { value: "1", label: "Vita Studios Manaíra" },
            { value: "2", label: "Vita Studios Manaíra" },
            { value: "3", label: "Vita Studios Manaíra" },
          ],
        },
        {
          label: "Aluguel",
          options: [
            { value: "4", label: "Aluguel" },
            { value: "5", label: "Aluguel" },
            { value: "6", label: "Aluguel" },
          ],
        },
        {
          label: "Farol das Antilhas",
          options: [
            { value: "7", label: "Farol das Antilhas" },
            { value: "8", label: "Farol das Antilhas" },
            { value: "9", label: "Farol das Antilhas" },
          ],
        },
        {
          label: "Padrão",
          options: [
            { value: "10", label: "Padrão" },
            { value: "11", label: "Padrão" },
            { value: "12", label: "Padrão" },
          ],
        },
        {
          label: "Teste",
          options: [
            { value: "13", label: "Teste" },
            { value: "14", label: "Teste" },
            { value: "15", label: "Teste" },
          ],
        },
        {
          label: "Venda",
          options: [
            { value: "16", label: "Venda" },
            { value: "17", label: "Venda" },
            { value: "18", label: "Venda" },
          ],
        },
      ],
    };
  },
  methods: {
    updateSelectedValue(event) {
      const selectedValue = event.target.value;
      this.selectedValue = selectedValue;
    },
    updateSelectedValue2(event) {
      const selectedValue = event.target.value;
      this.selectedValue2 = selectedValue;
    },
  },
};
</script>
<style>
.optgroup-label {
  background-color: #f0f2f5;
  font-size: 13px; /* Ajuste o tamanho da fonte */
  font-weight: 500; /* Ajuste o peso da fonte */
  color: #000;
}
/* Não é possível aplicar estilos diretamente em <option>, então a estilização será para o <select> */
.backOption {
  background-color: #fff;
}

.btn-orange {
  color: #fff; /* Texto branco */
  border: none; /* Remove a borda padrão */
  background-color: #ff9702;
  box-shadow: 0 0 5px rgba(255, 151, 2, 0.6), inset 0 0 1px rgba(0, 0, 0, 0.6); /* Sombra laranja */
  transition: background-color 0.3s, box-shadow 0.3s; /* Transições suaves */
  padding: 23px 15px;
}
.btn-red {
  color: #fff;
  border: none;
  background-color: #f61212;
  transition: background-color 0.3s, box-shadow 0.3s; /* Transições suaves */
  box-shadow: 0 0 5px rgba(248, 67, 67, 0.6), inset 0 0 1px rgba(0, 0, 0, 0.6);
}
.btn-red:hover {
  background-color: #f61212; /* Laranja mais escuro ao passar o mouse */
  color: #fff; /* Garantir que o texto permaneça branco */
}
.btn-white {
  color: #000; /* Texto branco */
  border: none; /* Remove a borda padrão */
  background-color: #fff;
  box-shadow: 0 0 5px rgba(41, 41, 40, 0.6), inset 0 0 1px rgba(0, 0, 0, 0.6); /* Sombra laranja */
  transition: background-color 0.3s, box-shadow 0.3s; /* Transições suaves */
  margin-left: -30px;
}
.tr-hover:hover {
  background-color: #f0f2f5;
}
</style>
