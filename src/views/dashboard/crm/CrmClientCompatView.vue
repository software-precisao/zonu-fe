<template>
  <div class="main">
    <navbarImobiliaria />
    <main class="">
      <div class="" style="display: flex; flex-direction: row">
        <!-- Sidebar com opções e ícones -->
        <sidebarCrm tab="Clientes compativeis" />
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
              Radar de oportunidades | Clientes compatíveis | {{ imoveisUnicos }} imóveis | {{ qtdClientesUnicos }}
              pessoas
            </h4>
            <div style="display: flex; align-items: center">
              <button class="btn btn-reds">Descartar todos</button>
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
                            <input class="form-check-input" type="checkbox" :id="'flexCheck'" />
                          </th>
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
                          <th class="text-center"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in usuariosOnCurrentPage" :key="item.id" style="cursor: pointer">
                          <td>
                            <input class="form-check-input" type="checkbox" :id="'flexCheck' + item.id" />
                          </td>
                          <td>{{ item.nome }}</td>
                          <td class="text-center">
                            {{ formatUpdatedDate(item.updatedAt) }}
                          </td>
                          <td class="text-center">
                            <a style="text-decoration: underline; color: blue">{{ item.quantidadeImoveis == null |
                              item.quantidadeImoveis == undefined ? 0 : item.quantidadeImoveis }}</a>
                          </td>
                          <!-- <td class="text-center">
                            <a style="text-decoration: underline; color: blue">{{ item.noRadar }}</a>
                          </td> -->
                          <td class="text-center">
                            <a style="text-decoration: underline; color: blue">0</a>
                          </td>
                          <td class="text-center" xxx>
                            <a style="text-decoration: underline; color: blue">0</a>
                          </td>
                          <td>
                            <i class="align-middle" data-feather="trash-2"></i>
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
import api from "../../../../service/api/index"
import apiImovel from "../../../../service/api/imoveis/index"

export default {
  name: "CrmClientCompatView",
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
      corretorResponsavel: "",

      graphType: "",
      youtubeLogo,
      barCodeIcon,

      canais: "",
      contatos: "",
      dataInicio: "",
      dataFinal: "",

      currentPageUser: 1,
      perPageUser: 10,
      searchUsuario: "",

      allClientes: [],
      funis: [],
      qtdClientesUnicos: "",
      imoveisUnicos: "",
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

    // this.fetchCliente()
    this.fetchFunil()
    // this.fetchNegocios()
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

    fetchFunil() {
      api.getAllFunil().then((res) => {
        // console.log(res.data)
        if (res.status === 200) {
          this.funis = res.data.filter(funil => funil.id_user === this.id_user)
        }

        this.fetchNegocios()
      })
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

              // Mapeia o negócio para a etapa correspondente
              if (!etapaMap.has(idEtapa)) {
                etapaMap.set(idEtapa, []);
              }
              etapaMap.get(idEtapa).push(negocio);
            });

            // Busca o preço do imóvel e atualiza os negócios em paralelo
            const promises = Array.from(etapaMap.entries()).map(async ([idEtapa, negocios]) => {
              return Promise.all(negocios.map(async (negocio) => {
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
                // const clientesUnicos = new Set(funil.negocios.map(negocio => negocio.Cliente.id_cliente));
                // funil.qtdClientesUnicos = clientesUnicos.size;
              });

              // const todosClientesUnicos = new Set(
              //   this.funis.flatMap(funil => funil.negocios.map(negocio => negocio.Cliente.id_cliente))
              // );

              // this.qtdClientesUnicos = todosClientesUnicos.size;
              this.imoveisUnicos = this.funis.reduce((total, funil) => total + (funil.imoveisUnicos || 0), 0);

              this.$nextTick(() => {
                // Atualize a interface se necessário
                this.fetchCliente();
              });
            });
          }
        })
        .catch((error) => {
          console.error('Erro ao buscar negócios:', error);
        });
    },


    fetchCliente() {
      api.getCliente()
        .then((res) => {
          console.log("Aqui está o cliente ====> ", res);
          console.log("Aqui estão os funis ====> ", this.funis);

          if (res.status === 200) {
            // Inicializa um Set para armazenar os IDs únicos dos clientes de todos os funis
            const idsClientesFunis = new Set();
            const quantidadeImoveisPorCliente = {};

            // Percorre todos os funis
            this.funis.forEach((funil) => {
              if (Array.isArray(funil.negocios)) {
                // Extrai os IDs dos clientes de todos os negócios dos funis
                funil.negocios.forEach((negocio) => {
                  const clienteId = negocio.Cliente?.id_cliente;
                  const imovelId = negocio.NovoImovel?.id_imovel;

                  if (clienteId) {
                    idsClientesFunis.add(clienteId);

                    // Conta a quantidade de imóveis para cada cliente
                    if (imovelId) {
                      if (!quantidadeImoveisPorCliente[clienteId]) {
                        quantidadeImoveisPorCliente[clienteId] = 0;
                      }
                      quantidadeImoveisPorCliente[clienteId] += 1;
                    }
                  }
                });
              } else {
                console.warn("O funil não possui negócios ou o campo não é um array.");
              }
            });

            // Filtra todos os clientes retornados pela API com id_user correspondente
            const clientesFiltrados = res.data.filter((cliente) =>
              cliente.id_user === this.id_user
            );

            // Adiciona a quantidade de imóveis aos clientes filtrados
            this.allClientes = clientesFiltrados.map((cliente) => {
              return {
                ...cliente,
                quantidadeImoveis: quantidadeImoveisPorCliente[cliente.id_cliente] || 0,
              };
            });

            this.qtdClientesUnicos = new Set(clientesFiltrados.map(cliente => cliente.id_cliente)).size;

            console.log("Clientes filtrados com quantidade de imóveis ====> ", this.allClientes);
          }
        })
        .catch((error) => {
          console.error('Erro ao buscar clientes:', error);
        });
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
  },
};
</script>
<style>
.btn-reds {
  color: #fff;
  border: none;
  font-size: 1em;
  font-weight: 600;
  background-color: #f61212;
  transition: background-color 0.3s, box-shadow 0.3s;
  /* Transições suaves */
  box-shadow: 0 0 5px rgba(248, 67, 67, 0.6), inset 0 0 1px rgba(0, 0, 0, 0.6);
  padding: 10px 15px;
}

.btn-reds:hover {
  background-color: #f61212;
  /* Laranja mais escuro ao passar o mouse */
  color: #fff;
  /* Garantir que o texto permaneça branco */
}
</style>
