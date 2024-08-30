<template>
  <div class="main">
    <navbarImobiliaria />
    <main class="">
      <div class="" style="display: flex; flex-direction: row">
        <!-- Sidebar com opções e ícones -->
        <sidebarCrm tab="Lista clientes" />
        <!-- Dashboard -->
        <div class="" style="width: 81%">
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
              Negócios em andamento | Lista de clientes | {{ imoveisUnicos || 0 }} {{ imoveisUnicos > 1 ? "imóveis" :
                "imóvel" }} | {{ contarClientesUnicos.length }}
              {{ contarClientesUnicos.length > 1 ? "clientes" : "cliente" }}
            </h4>
            <div style="display: flex; align-items: center">
              <select class="form-select" @change="filtrarEtapasFunil" v-model="funilSelect"
                style="height: 30px; font-size: 13px; font-weight: 600">
                <option :value="`${funil.id_funil}`" style="font-weight: 600" v-for="funil in funis"
                  v-if="funis.length > 0">
                  {{ funil.nome_funil }} ({{ funil.qtdNegoicos || 0 }} {{ funil.qtdNegoicos == 1 ? "negócio" :
                    "negócios" }})
                </option>
              </select>
            </div>
          </header>

          <div class="mt-4">
            <div class="row justify-content-center">
              <div class="col-10 mb-3">
                <div class="card">
                  <div class="table-responsive">
                    <table class="table" style="
                        font-size: 14px;
                        border: 1px solid rgb(216, 216, 216);
                        border-radius: 5px;
                      ">
                      <thead>
                        <tr style="background-color: rgb(244, 244, 244)">
                          <th>
                            Cliente<i class="align-middle" data-feather="arrow-up"></i>
                            <i class="align-middle" data-feather="arrow-down"></i>
                          </th>
                          <th class="text-center">
                            Ultima interação<i class="align-middle" data-feather="arrow-up"></i>
                            <i class="align-middle" data-feather="arrow-down"></i>
                          </th>
                          <th class="text-center">Imóveis no Funil</th>
                          <!-- <th class="text-center">No radar</th> -->
                          <th class="text-center">Enviados</th>
                          <th class="text-center">Descartados</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in usuariosOnCurrentPage" :key="item.id" style="cursor: pointer">
                          <td>{{ item.nome }}</td>
                          <td class="text-center">
                            {{ formatUpdatedDate(item.updatedAt) }}
                          </td>
                          <td class="text-center">
                            <a style="text-decoration: underline; color: blue">{{ item.quantidadeImoveis }}</a>
                          </td>
                          <!-- <td class="text-center">
                            <a style="text-decoration: underline; color: blue">{{ item.noRadar }}</a>
                          </td> -->
                          <td class="text-center">
                            <!-- <a style="text-decoration: underline; color: blue">{{ item.Enviados }}</a> -->
                            <a style="text-decoration: underline; color: blue">0</a>
                          </td>
                          <td class="text-center" xxx>
                            <!-- <a style="text-decoration: underline; color: blue">{{ item.Descartados }}</a> -->
                            <a style="text-decoration: underline; color: blue">0</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div style="
                    display: flex;
                    width: 100%;
                    align-items: center;
                    justify-content: center;
                  ">
                  <button class="btnHoverPag" style="
                      border: none;
                      color: #0084f4;
                      font-weight: 700;
                      line-height: 22px;
                      margin-right: 50px;
                      padding: 0 0.25em;
                      border-radius: 4px;
                    " @click="previousPageUser()" :disabled="currentPageUser <= 1">
                    <i class="align-middle" data-feather="chevron-left"></i>Anterior
                  </button>
                  <button class="btnHoverPag" style="
                      border: none;
                      color: #0084f4;
                      font-weight: 700;
                      line-height: 22px;
                      padding: 0 0.25em;
                      border-radius: 8px;
                    " @click="nextPageUser()" :disabled="currentPageUser >= totalPagesUsuarios">
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
import { jwtDecode } from "jwt-decode";
import api from '../../../../service/api/index'
import apiImovel from '../../../../service/api/imoveis/index'

export default {
  name: "CrmListClientView",
  components: {
    navbarImobiliaria,
    footer,
    sidebarCrm,
  },
  data() {
    return {
      token: localStorage.getItem("token"),
      id_user: "",
      userName: "",
      userSobrenome: "",
      id_user: "",

      graphType: "",
      youtubeLogo,
      barCodeIcon,

      canais: "",
      contatos: "",
      dataInicio: "",
      dataFinal: "",


      allClientes: [],
      currentPageUser: 1,
      perPageUser: 10,
      searchUsuario: "",

      funilSelect: localStorage.getItem("fs") ? localStorage.getItem("fs") : "1",
      funis: [],
      imoveisUnicos: ""
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

    // document.addEventListener("click", this.handleClickOutside);
    // // Initialize Feather icons
    // if (window.feather) window.feather.replace();

    // document.addEventListener("click", this.handleClickOutsideImovel);
    // // Initialize Feather icons
    // if (window.feather) window.feather.replace();

    this.fetchPosicao();
    // this.fetchCategorias();
    // this.fetchOrigemCaptacao();
    // this.fetchTipoCliente();
    // this.fetchImoveis();
    this.fetchFunil()
    // this.fetchFirstEtapas()
    // this.fetchNegocios()
    this.filtrarEtapasFunil(true)
    // this.fetchCliente();
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

    formatUpdatedDate(dateString) {
      const date = new Date(dateString);

      // Extrair partes da data
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Mês começa do zero
      const year = date.getFullYear();

      // Formatar a data
      return `${day}/${month}/${year}`;
    },

    fetchFunil() {
      api.getAllFunil().then((res) => {
        // console.log(res.data)
        if (res.status === 200) {
          this.funis = res.data.filter(funil => funil.id_user === this.id_user)
        }
      })
    },

    filtrarEtapasFunil(mountedOn) {
      if (mountedOn === true || !this.funilSelect) {
        // this.qtdNegoicos = 0;
        api.getFunilporId(this.funilSelect).then((res) => {
          if (res.status === 200) {
            this.funilporId = res.data;
            this.etapas = res.data.etapas;
            this.funilName = res.data;
            this.fetchPosicao();
            this.fetchNegocios(); // Atualiza a contagem de negócios
          }
        }).catch((error) => {
          console.error('Erro ao buscar funil:', error);
        });
      } else {
        console.log(this.funilSelect);
        localStorage.setItem("fs", this.funilSelect);

        // this.qtdNegoicos = 0;
        api.getFunilporId(this.funilSelect).then((res) => {
          if (res.status === 200) {
            this.funilporId = res.data;
            this.etapas = res.data.etapas;
            this.funilName = res.data;
            this.fetchPosicao();
            this.fetchNegocios(); // Atualiza a contagem de negócios
          }
        }).catch((error) => {
          console.error('Erro ao buscar funil:', error);
        });
      }
    },

    fetchNegocios() {
      api.getNegocios()
        .then((res) => {
          if (res.status === 200) {
            const negocios = res.data.filter(negocio => negocio.Usuario.id_user === this.id_user);

            // Limpa a contagem e arrays de negócios atuais
            this.funis.forEach((funil) => {
              funil.qtdNegoicos = 0;
              funil.negocios = [];
              funil.imoveisUnicos = new Set(); // Cria um Set para imóveis únicos
              funil.etapas.forEach((etapa) => {
                etapa.qtdNegoicos = 0;
                etapa.negocios = [];
              });
            });

            const etapaMap = new Map();

            // Agrupa os negócios por id_etapa
            negocios.forEach((negocio) => {
              const idEtapa = negocio.Etapa.id_etapa;
              const idImovel = negocio.NovoImovel.id_imovel;

              // Mapeia o negócio para a etapa correspondente
              if (!etapaMap.has(idEtapa)) {
                etapaMap.set(idEtapa, []);
              }
              etapaMap.get(idEtapa).push(negocio);
            });

            // Busca o preço do imóvel e atualiza os negócios em paralelo
            const promises = Array.from(etapaMap.entries()).map(([idEtapa, negocios]) => {
              return Promise.all(negocios.map((negocio) => {
                const idImovel = negocio.NovoImovel.id_imovel;

                return apiImovel.obterImovel(idImovel)
                  .then((res) => {
                    if (res.status === 200) {
                      negocio.NovoImovel.preco_imovel = res.data.preco.preco_imovel;
                    }
                  });
              })).then(() => {
                // Encontra a etapa e funil correspondentes e adiciona os negócios de uma vez
                this.funis.forEach((funil) => {
                  funil.etapas.forEach((etapa) => {
                    if (etapa.id_etapa === idEtapa) {
                      etapa.negocios.push(...negocios);
                      etapa.qtdNegoicos += negocios.length;
                      funil.negocios.push(...negocios);

                      // Adiciona imóveis únicos ao Set do funil
                      negocios.forEach((negocio) => {
                        funil.imoveisUnicos.add(negocio.NovoImovel.id_imovel);
                      });

                      funil.qtdNegoicos += negocios.length;
                    }
                  });
                });
              });
            });

            Promise.all(promises).then(() => {
              // Atualiza a quantidade de imóveis únicos para cada funil
              this.funis.forEach(funil => {
                funil.imoveisUnicos = funil.imoveisUnicos.size;
              });

              const funilSelecionado = this.funis.find(f => f.id_funil === Number(this.funilSelect));
              this.qtdNegoicos = funilSelecionado ? funilSelecionado.qtdNegoicos : 0;
              this.imoveisUnicos = funilSelecionado ? funilSelecionado.imoveisUnicos : 0;

              this.$nextTick(() => {
                // Atualize a interface se necessário
                this.fetchCliente()
              });
            });
          }
        })
        .catch((error) => {
          console.error('Erro ao buscar negócios:', error);
        });
    },

    fetchPosicao() {
      api.getFunilporId(this.funilSelect).then((res) => {
        // console.log("Aqui ta as posições ====> ", res);
        if (res.status === 200) {
          this.posicoes = res.data.etapas;
        }
      });
    },

    fetchCliente() {
      api.getCliente()
        .then((res) => {
          console.log("Aqui está o cliente ====> ", res);
          console.log("Aqui estão os negócios ====> ", this.funilSelecionado);

          if (res.status === 200) {
            // Verificar se this.funilSelecionado e this.funilSelecionado.negocios são definidos e se negócios é um array
            console.log(this.funilSelecionado.negocios);
            if (this.funilSelecionado && Array.isArray(this.funilSelecionado.negocios)) {
              // Extrair os IDs dos clientes de this.funilSelecionado
              const idsClientesFunil = new Set(
                this.funilSelecionado.negocios.map(negocio => negocio.Cliente.id_cliente)
              );

              // Filtrar os clientes retornados pela API com base nos IDs extraídos
              const clientesFiltrados = res.data.filter(cliente =>
                idsClientesFunil.has(cliente.id_cliente)
              );

              // Contabilizar a quantidade de imóveis para cada cliente
              const quantidadeImoveisPorCliente = {};

              // Iterar sobre os negócios para contar os imóveis de cada cliente
              this.funilSelecionado.negocios.forEach(negocio => {
                const clienteId = negocio.Cliente.id_cliente;
                const imovelId = negocio.NovoImovel.id_imovel;

                if (clienteId && imovelId) {
                  if (!quantidadeImoveisPorCliente[clienteId]) {
                    quantidadeImoveisPorCliente[clienteId] = 0;
                  }
                  quantidadeImoveisPorCliente[clienteId] += 1;
                }
              });

              // Adicionar a quantidade de imóveis aos clientes filtrados
              this.allClientes = clientesFiltrados.map(cliente => {
                return {
                  ...cliente,
                  quantidadeImoveis: quantidadeImoveisPorCliente[cliente.id_cliente] || 0
                };
              });

              console.log("Clientes filtrados com quantidade de imóveis ====> ", this.allClientes);
            } else {
              console.error("Funil selecionado ou negócios não estão disponíveis ou não são um array.");
              this.allClientes = []; // Definir this.allClientes como um array vazio ou algum valor padrão
            }
          }
        })
        .catch((error) => {
          console.error('Erro ao buscar clientes:', error);
        });
    }
    ,
  },
  computed: {
    usuariosOnCurrentPage() {
      const startIndex = (this.currentPageUser - 1) * this.perPageUser;
      const endIndex = startIndex + this.perPageUser;
      return this.allClientes
        .filter((usuario) => {
          return usuario.nome
            .toLowerCase()
            .includes(this.searchUsuario.toLowerCase());
        })
        .slice(startIndex, endIndex);
    },
    totalPagesUsuarios() {
      return Math.ceil(
        this.allClientes.filter((usuario) => {
          this.currentPageConcept = 1;
          return usuario.nome
            .toLowerCase()
            .includes(this.searchUsuario.toLowerCase());
        }).length / this.perPageUser
      );
    },
    funilSelecionado() {
      // console.log()
      return this.funis.find(funil => funil.id_funil == Number(this.funilSelect)) || {};
    },
    contarClientesUnicos() {
      const funil = this.funilSelecionado;

      // Cria um objeto para armazenar IDs de clientes únicos
      const clienteIdsUnicos = {};

      // Verifica se o funil e a lista de negócios existem
      if (funil && funil.negocios && Array.isArray(funil.negocios)) {
        // Itera sobre todos os negócios e adiciona os IDs de clientes ao objeto
        funil.negocios.forEach(negocio => {
          if (negocio.Cliente && negocio.Cliente.id_cliente) {
            // Usa o ID do cliente como chave no objeto
            clienteIdsUnicos[negocio.Cliente.id_cliente] = true;
          }
        });
      }

      // Retorna a quantidade de clientes únicos
      return Object.keys(clienteIdsUnicos);
    }
  },
};
</script>
<style>
.btnHoverPag:hover {
  background-color: rgba(0, 132, 244, 0.1);
}
</style>
