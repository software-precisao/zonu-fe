<template>
  <div class="main">
    <navbarImobiliaria />
    <main class="">
      <div class="" style="display: flex; flex-direction: row">
        <!-- Sidebar com opções e ícones -->
        <sidebarCrm tab="Lista clientes" />
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
              Negócios em andamento | Lista de clientes | {{ imoveisUnicos }} imóvel | {{ funilSelecionado ?
                funilSelecionado.qtdNegoicos : 0 }} clientes
            </h4>
            <div style="display: flex; align-items: center">
              <select class="form-select" @change="filtrarEtapasFunil" v-model="funilSelect"
                style="height: 30px; font-size: 13px; font-weight: 600">
                <option :value="`${funil.id_funil}`" style="font-weight: 600" v-for="funil in funis"
                  v-if="funis.length > 0">
                  {{ funil.nome_funil }} ({{ funil.qtdNegoicos || 0 }} negócios)
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
                          <th class="text-center">No radar</th>
                          <th class="text-center">Enviados</th>
                          <th class="text-center">Descartados</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in usuariosOnCurrentPage" :key="item.id" style="cursor: pointer">
                          <td>{{ item.cliente }}</td>
                          <td class="text-center">
                            {{ item.ultimaInteracao }}
                          </td>
                          <td class="text-center">
                            <a style="text-decoration: underline; color: blue">{{ item.imovelFunil }}</a>
                          </td>
                          <td class="text-center">
                            <a style="text-decoration: underline; color: blue">{{ item.noRadar }}</a>
                          </td>
                          <td class="text-center">
                            <a style="text-decoration: underline; color: blue">{{ item.Enviados }}</a>
                          </td>
                          <td class="text-center" xxx>
                            <a style="text-decoration: underline; color: blue">{{ item.Descartados }}</a>
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

      items: [
        {
          id: 1,
          ultimaInteracao: "01/08/24",
          cliente: "Marcello Agostini",
          imovelFunil: "1",
          noRadar: "0",
          Enviados: "0",
          Descartados: "0",
        },
        {
          id: 2,
          ultimaInteracao: "01/08/24",
          cliente: "Sil Souza",
          imovelFunil: "1",
          noRadar: "0",
          Enviados: "0",
          Descartados: "0",
        },
        {
          id: 3,
          ultimaInteracao: "30/07/24",
          cliente: "Violetta Cardoso",
          imovelFunil: "1",
          noRadar: "0",
          Enviados: "0",
          Descartados: "0",
        },
        {
          id: 4,
          ultimaInteracao: "29/07/24",
          cliente: "Bruno Sena",
          imovelFunil: "1",
          noRadar: "0",
          Enviados: "0",
          Descartados: "0",
        },
        {
          id: 5,
          ultimaInteracao: "29/07/24",
          cliente: "Josiene Nunes",
          imovelFunil: "1",
          noRadar: "0",
          Enviados: "0",
          Descartados: "0",
        },
      ],

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
    // this.fetchCliente();
    // this.fetchImoveis();
    this.fetchFunil()
    // this.fetchFirstEtapas()
    this.fetchNegocios()
    this.filtrarEtapasFunil(true)
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
          this.funis = res.data
        }
      })
    },

    filtrarEtapasFunil(mountedOn) {
      if (mountedOn === true || !this.funilSelect) {
        this.qtdNegoicos = 0;
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

        this.qtdNegoicos = 0;
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
      api.getNegocios().then((res) => {
        if (res.status === 200) {
          const negocios = res.data;

          // Limpa a contagem e arrays de negócios atuais
          this.funis.forEach((funil) => {
            funil.qtdNegoicos = 0;
            funil.negocios = [];
            funil.etapas.forEach((etapa) => {
              etapa.qtdNegoicos = 0;
              etapa.negocios = [];
            });
          });

          // Função para buscar o preco_imovel por id_imovel
          const fetchPrecoImovel = async (id_imovel) => {
            return apiImovel.obterImovel(id_imovel)
              .then((res) => {
                if (res.status === 200) {
                  return res.data.preco.preco_imovel;
                }
                return null;
              })
              .catch((error) => {
                console.error(`Erro ao buscar preço do imóvel ${id_imovel}:`, error);
                return null;
              });
          };

          const imoveisUnicosSet = new Set();

          // Processa negócios
          const processNegocios = async () => {
            for (const negocio of negocios) {
              const idEtapa = negocio.Etapa.id_etapa;
              const idImovel = negocio.NovoImovel.id_imovel;

              const funilCorrespondente = this.funis.find((funil) =>
                funil.etapas.some((etapa) => etapa.id_etapa === idEtapa)
              );

              if (funilCorrespondente && funilCorrespondente.id_funil == Number(this.funilSelect)) {
                // Adiciona o id_imovel ao Set de imóveis únicos
                imoveisUnicosSet.add(idImovel);
              }


              // Busca o preço do imóvel
              const precoImovel = await fetchPrecoImovel(idImovel);
              negocio.NovoImovel.preco_imovel = precoImovel;

              // Encontra o funil e a etapa correspondentes e adiciona o negócio
              this.funis.forEach((funil) => {
                funil.etapas.forEach((etapa) => {
                  if (etapa.id_etapa === idEtapa) {
                    // Verifica se o negócio já foi adicionado usando o id_negocio
                    const negocioJaAdicionado = etapa.negocios.some(n => n.id_negocio === negocio.id_negocio);
                    if (!negocioJaAdicionado) {
                      etapa.negocios.push(negocio);
                      funil.negocios.push(negocio);
                      funil.qtdNegoicos += 1;
                      etapa.qtdNegoicos += 1;
                    }
                  }
                });
              });
            }

            this.imoveisUnicos = imoveisUnicosSet.size;
          };

          processNegocios().then(() => {
            const funilSelecionado = this.funis.find(f => f.id_funil === this.funilSelect);
            this.qtdNegoicos = funilSelecionado ? funilSelecionado.qtdNegoicos : 0;
          });
        }
      }).catch((error) => {
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

    // fetchClientes() {

    // },
  },
  computed: {
    usuariosOnCurrentPage() {
      const startIndex = (this.currentPageUser - 1) * this.perPageUser;
      const endIndex = startIndex + this.perPageUser;
      return this.items
        .filter((usuario) => {
          return usuario.cliente
            .toLowerCase()
            .includes(this.searchUsuario.toLowerCase());
        })
        .slice(startIndex, endIndex);
    },
    totalPagesUsuarios() {
      return Math.ceil(
        this.items.filter((usuario) => {
          this.currentPageConcept = 1;
          return usuario.cliente
            .toLowerCase()
            .includes(this.searchUsuario.toLowerCase());
        }).length / this.perPageUser
      );
    },
    funilSelecionado() {
      // console.log()
      return this.funis.find(funil => funil.id_funil == Number(this.funilSelect)) || {};
    }
  },
};
</script>
<style>
.btnHoverPag:hover {
  background-color: rgba(0, 132, 244, 0.1);
}
</style>
