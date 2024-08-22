<template>
  <div class="main">
    <navbarImobiliaria />
    <main class="">
      <div class="" style="display: flex; flex-direction: row">
        <!-- Sidebar com opções e ícones -->
        <sidebarCrm tab="Contato recebidos" />
        <!-- Dashboard -->
        <div class="" style="width: 100%">
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
              Contatos recebidos (Leads)
            </h4>
            <div style="display: flex; align-items: center">
              <select class="form-select" v-model="canais" style="
                  height: 30px;
                  font-size: 13px;
                  font-weight: 600;
                  width: 200px;
                ">
                <option value="" style="font-weight: 600">
                  Todos os canais
                </option>
                <option v-for="item in allOrigensCapitacao" :value="item.origem_captacao" style="font-weight: 600">
                  {{ item.origem_captacao }}
                </option>
              </select>
              <select class="form-select" v-model="contatos" style="
                  height: 30px;
                  font-size: 13px;
                  font-weight: 600;
                  margin-left: 10px;
                  width: 200px;
                ">
                <option value="" style="font-weight: 600">
                  Todos os contatos
                </option>
                <option value="On" style="font-weight: 600">
                  Com posição no CRM
                </option>
                <option value="Off" style="font-weight: 600">
                  Sem posição no CRM
                </option>
              </select>
              <input id="start_date" type="text" class="formControl" placeholder="DD/MM/AAAA" name="start_date"
                v-model="formattedStartDate" @input="onInput" maxlength="10" style="
                  height: 30px;
                  width: 130px;
                  padding-left: 8px;
                  border: solid #d3d3d3 1px;
                  border-radius: 5px;
                  font-size: 1em;
                  font-weight: 500;
                  margin-left: 10px;
                " />
              <input id="end_date" type="tex" class="formControl" v-model="formattedEndDate" @input="onEndDateInput"
                maxlength="10" placeholder="DD/MM/AAAA" name="end_date" style="
                height: 30px;
                width: 130px;
                padding-left: 8px;
                border: solid #d3d3d3 1px;
                border-radius: 5px;
                font-size: 1em;
                font-weight: 500;
                margin-left: 10px;
              " />
            </div>
          </header>

          <div class="mt-4">
            <div class="row justify-content-center">
              <div class="col-10 mb-3">
                <div style="
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                    height: 300px;
                  ">
                  <div class="card p-3" style="
                      width: 30%;
                      border-left: 5px solid rgb(0, 99, 192);
                      justify-content: space-between;
                    ">
                    <h3 style="
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 17px;
                        color: rgb(0, 99, 192);
                      ">
                      Leads gerados no período
                    </h3>
                    <p style="
                        align-self: flex-end;
                        font-size: 122px;
                        color: rgb(0, 86, 179);
                        margin-bottom: -40px;
                        padding: 0;
                      ">
                      {{ formatNumberWithLeadingZero(filteredClientes.length) }}
                    </p>
                  </div>
                  <div class="card p-3" style="width: 67%; border-left: 5px solid rgb(0, 99, 192)">
                    <h3 style="
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 17px;
                        color: rgb(0, 99, 192);
                      ">
                      Origens por canal
                    </h3>
                    <div style="display: flex; align-items: center">
                      <graphAtivLaterComp :clientes="filteredClientes" />
                      <p class="mb-5" style="margin-right: 40px">{{ filteredClientes.length }}</p>
                    </div>
                  </div>
                </div>

                <div class="card p-3">
                  <div class="table-responsive">
                    <table class="table" style="font-size: 14px">
                      <thead>
                        <tr v-if="filteredClientes.length > 0">
                          <th>Data</th>
                          <th>Cliente</th>
                          <th>Origem</th>
                          <th>Corretor responsável</th>
                          <th>Posição do CRM</th>
                          <th>Última interação</th>
                        </tr>

                        <div v-if="filteredClientes.length == 0"
                          style="display: flex; justify-content: space-between; border-bottom: 1px solid #d3d3d3">
                          <span style=" font-size: 14px; font-weight: 500; color: #000;">Data</span>
                          <span style="font-size: 14px; font-weight: 500; color: #000;">Cliente</span>
                          <span style="font-size: 14px; font-weight: 500; color: #000;">Origem</span>
                          <span style="font-size: 14px; font-weight: 500; color: #000;">Corretor responsável</span>
                          <span style="font-size: 14px; font-weight: 500; color: #000;">Posição do CRM</span>
                          <span style="font-size: 14px; font-weight: 500; color: #000;">Última interação</span>
                        </div>

                      </thead>
                      <tbody>
                        <tr v-if="filteredClientes.length > 0" v-for="item in filteredClientes" :key="item.id"
                          class="tdHover" style="cursor: pointer">
                          <td>{{ formatUpdatedDate(item.createdAt) }}</td>
                          <td>{{ item.nome }}</td>
                          <td>{{ item.Captacao.origem_captacao }}</td>
                          <td>{{ corretorResponsavel }}</td>
                          <td>{{ item.etapas == undefined || item.etapas == null ? "-" : item.etapas.length > 1 ?
                            "2 posições" :
                            item.etapas[0].nome_etapa }}</td>
                          <td>{{ formatUpdatedDate(item.updatedAt) }}</td>
                        </tr>

                        <div v-if="filteredClientes.length == 0" class="tdHover"
                          style="cursor: pointer; display: flex; align-items: center; justify-content: space-between; width: 100%; padding-top: 50px;padding-bottom: 40px;">
                          <div style="width: 50%; display: flex; align-items: flex-end; justify-content: flex-end;">
                            <img :src="tripleUser" alt="Imagem de um logo de usuario"
                              style="width: 100px; height: 100px" />
                          </div>
                          <div>
                            <h2 style="font-size: 14px; font-weight: 600;">Tabela de Leads </h2>
                            <p style="font-size: 13px; font-weight: 500; width: 80%;">Aqui são apresentados todos os
                              seus leads recebidos, através de
                              todos os canais
                              Não há registro de nenhum lead no período selecionado</p>
                          </div>
                        </div>
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
import tripleUser from "../../../../assets/images/icons/tripleUser.svg";
import graphAtivLaterComp from "@/components/graph/graphAtivLaterComp.vue";
import api from "../../../../service/api/index"
import { jwtDecode } from "jwt-decode";

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
      token: localStorage.getItem("token"),
      id_user: "",
      userName: "",
      userSobrenome: "",
      corretorResponsavel: "",

      graphType: "",
      youtubeLogo,
      tripleUser,

      canais: "",
      contatos: "",
      formattedStartDate: "",
      formattedEndDate: "",

      allOrigensCapitacao: [],
      allClientes: [],
      negocios: [],
    };
  },
  mounted() {
    let token = this.token;
    let decode = jwtDecode(token);
    let id_user = decode.id_user;
    this.userName = decode.nome;
    this.userSobrenome = decode.sobrenome;

    this.id_user = id_user;

    this.corretorResponsavel = `${this.userName} ${this.userSobrenome}`;

    this.fetchOrigemCaptacao();
    // this.fetchNegocios();
    this.fetchCliente();
  },
  computed: {
    filteredClientes() {
      let clientesFiltrados = this.allClientes;

      // Filtrar por origem de captação
      if (this.canais !== '') {
        clientesFiltrados = clientesFiltrados.filter(cliente =>
          cliente.Captacao.origem_captacao === this.canais
        );
      }

      // Filtrar por etapas
      if (this.contatos === 'On') {
        clientesFiltrados = clientesFiltrados.filter(cliente =>
          cliente.etapas !== undefined && cliente.etapas !== null && cliente.etapas.length > 0
        );
      } else if (this.contatos === 'Off') {
        clientesFiltrados = clientesFiltrados.filter(cliente =>
          cliente.etapas === undefined || cliente.etapas === null || cliente.etapas.length === 0
        );
      }

      // Filtrar por datas
      if (this.formattedStartDate || this.formattedEndDate) {
        clientesFiltrados = clientesFiltrados.filter(cliente =>
          this.isDateInRange(cliente.createdAt, this.formattedStartDate, this.formattedEndDate)
        );
      }

      return clientesFiltrados;
    }
  },

  methods: {
    formatNumberWithLeadingZero(number) {
      return number < 10 ? `0${number}` : number.toString();
    },
    formatUpdatedDate(dateString) {
      const date = new Date(dateString);

      // Extrair partes da data
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Mês começa do zero
      const year = date.getFullYear();

      // Formatar a data
      return `${day}/${month}/${year}`;
    },
    fetchOrigemCaptacao() {
      api.getOrigemCaptacao().then((res) => {
        // console.log("Aqui estão as origens de capitação ====> ", res);
        if (res.status === 200) {
          this.allOrigensCapitacao = res.data;
        }
      });
    },
    formatDate(date) {
      if (!date) return '';
      // Remove caracteres não numéricos
      const cleanDate = date.replace(/\D/g, '');
      if (cleanDate.length <= 2) {
        return cleanDate;
      } else if (cleanDate.length <= 4) {
        return `${cleanDate.slice(0, 2)}/${cleanDate.slice(2)}`;
      } else if (cleanDate.length <= 8) {
        return `${cleanDate.slice(0, 2)}/${cleanDate.slice(2, 4)}/${cleanDate.slice(4)}`;
      } else {
        return `${cleanDate.slice(0, 2)}/${cleanDate.slice(2, 4)}/${cleanDate.slice(4, 8)}`;
      }
    },
    parseDate(date) {
      // Remove caracteres não numéricos
      const cleanDate = date.replace(/\D/g, '');
      if (cleanDate.length === 8) {
        return `${cleanDate.slice(0, 2)}/${cleanDate.slice(2, 4)}/${cleanDate.slice(4)}`;
      } else {
        return date;
      }
    },
    onInput(event) {
      // Atualiza o valor da data no formato correto
      this.formattedStartDate = this.formatDate(event.target.value);
    },
    onEndDateInput(event) {
      // Obtém o valor de entrada e limita a quantidade de caracteres
      let value = event.target.value.replace(/\D/g, '');
      if (value.length > 8) {
        value = value.slice(0, 8);
      }
      // Atualiza o valor da data no formato correto
      this.formattedEndDate = this.formatDate(value);
    },
    isDateInRange(dateStr, start, end) {
      const date = new Date(dateStr.split('/').reverse().join('-')); // Converte para o formato ISO
      const startDate = start ? new Date(start.split('/').reverse().join('-')) : null;
      const endDate = end ? new Date(end.split('/').reverse().join('-')) : null;

      if (startDate && endDate) {
        return date >= startDate && date <= endDate;
      } else if (startDate) {
        return date >= startDate;
      } else if (endDate) {
        return date <= endDate;
      }
      return true;
    },
    fetchCliente() {
      api.getCliente()
        .then((res) => {
          if (res.status === 200) {
            this.allClientes = res.data;
          }
        });
      this.fetchNegocios()
    },

    fetchNegocios() {
      api.getNegocios()
        .then((res) => {
          if (res.status === 200) {
            this.negocios = res.data;
            // console.log("aqui estao os negocios ===>", res.data)
            this.processarNegocios(); // Processar negócios após buscar os dados
          }
        });
      // this.fetchCliente(); // Buscar clientes
    },

    processarNegocios() {
      if (this.allClientes.length === 0 || this.negocios.length === 0) {
        console.error("Dados dos clientes ou negócios não estão disponíveis.");
        return;
      }

      // Cria um mapa para armazenar os dados dos clientes
      const clienteEtapasMap = new Map();

      // Inicializa o mapa com todos os clientes e um array vazio de etapas
      this.allClientes.forEach(cliente => {
        clienteEtapasMap.set(cliente.id_cliente, {
          ...cliente,
          etapas: [] // Inicia com um array vazio de etapas
        });
      });

      // Itera sobre todos os negócios e adiciona as etapas aos clientes correspondentes
      this.negocios.forEach(negocio => {
        const clienteId = negocio.Cliente?.id_cliente;
        const nomeEtapa = negocio.Etapa?.nome_etapa;
        const idEtapa = negocio.Etapa?.id_etapa;

        if (clienteEtapasMap.has(clienteId) && nomeEtapa) {
          clienteEtapasMap.get(clienteId).etapas.push({
            nome_etapa: nomeEtapa,
            id_etapa: idEtapa
          });
        }
      });

      // Converte o mapa de volta para um array de clientes
      const resultados = Array.from(clienteEtapasMap.values());
      this.allClientes = resultados
      // Agora você pode usar `resultados` conforme necessário
      console.log("Clientes com etapas:", resultados);
    }
  },
};
</script>
<style>
.tdHover:hover {
  background-color: #f1f4f9;
}
</style>
