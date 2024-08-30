<template>
  <div class="main">
    <navbarImobiliaria />
    <main class="">
      <div class="" style="display: flex; flex-direction: row">
        <!-- Sidebar com opções e ícones -->
        <sidebarCrm tab="Imóveis compativeis" />
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
            <div class="skeleton-title" v-if="!mostrarSkeleton"></div>
            <h4 class="fw-semibold mt-2" style="font-size: 13px" v-if="mostrarSkeleton">
              Radar de oportunidades | Imóveis compatíveis | {{ imoveisUnicos }} {{ imoveisUnicos == 1 ? "imóvel" :
                "imóveis"
              }} | {{ qtdClientesUnicos }} {{ qtdClientesUnicos == 1 ? "pessoa" : "pessoas" }}
            </h4>
            <div style="display: flex; align-items: center">
              <button class="btn btn-reds">Descartar todos</button>
            </div>
          </header>

          <div class="mt-4">
            <div class="row justify-content-center">
              <div class="col-10 mb-3">
                <div class="skeleton-big-card" v-if="!mostrarSkeleton"></div>
                <div class="card" v-if="mostrarSkeleton">
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
                          <th>Imóvel</th>
                          <th class="text-center">Detalhes</th>
                          <th class="text-center">No Radar</th>
                          <th class="text-center">Compartilhar</th>
                          <th class="text-center"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in usuariosOnCurrentPage" :key="item.id" style="cursor: pointer">
                          <td>
                            <input class="form-check-input" type="checkbox" :id="'flexCheck' + item.id_imovel" />
                          </td>
                          <td style="display: flex">
                            <img :src="`https://zonu.com.br/api${item.fotos[0].foto}`" style="
                                width: 60px;
                                height: 60px;
                                border-radius: 10px;
                                margin-right: 10px;
                              " />
                            <div style="
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                font-size: 14px;
                                color: #000;
                              ">
                              <span style="font-weight: 900">{{
                                item.descricao.titulo
                              }}</span>
                              <span>{{ item.localizacao.bairro }} - {{ item.localizacao.cidade }}/{{
                                item.localizacao.estado
                              }}</span>
                            </div>
                          </td>
                          <td class="text-center">
                            <div style="
                                display: flex;
                                align-items: center;
                                justify-content: center;
                              ">
                              <img :src="bedIcon" style="
                                  width: 20px;
                                  height: 20px;
                                  margin-right: 5px;
                                " /><span style="margin-right: 5px; font-weight: 500">{{ item.comodos.dormitorio
                                }} | {{ item.comodos.suite }}</span>
                              <img v-if="item.comodos.garagem != '' || item.comodos.garagem != '0'" :src="carIcon"
                                style="
                                  width: 20px;
                                  height: 20px;
                                  margin-right: 5px;
                                " /><span style="font-weight: 500">{{ item.comodos.garagem }}</span>
                            </div>
                            <span :style="{
                              color:
                                item.detalhes > '2.000' ? 'orange' : 'green',
                            }" style="font-weight: 700">
                              R${{ aplicaMascaraDinheiroPrecoImovel(item.preco.preco_imovel) }}
                            </span>
                          </td>
                          <td class="text-center" style="color: #000">
                            30
                          </td>
                          <td class="text-center">
                            <a style="text-decoration: underline; color: blue">compartilhar</a>
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
import carIcon from "../../../../assets/images/icons/carIcon.svg";
import bedIcon from "../../../../assets/images/icons/bedIcon.svg";
import { jwtDecode } from "jwt-decode";
import api from '../../../../service/api/index'
import apiImovel from '../../../../service/api/imoveis/index'

export default {
  name: "CrmImovCompatView",
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
      carIcon,
      bedIcon,

      canais: "",
      contatos: "",
      dataInicio: "",
      dataFinal: "",

      currentPageUser: 1,
      perPageUser: 10,
      searchUsuario: "",

      imoveisUnicos: "",
      qtdClientesUnicos: "",
      funis: [],
      imoveis: [],

      mostrarSkeleton: false,
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

    this.fetchFunil()
    setTimeout(() => {
      this.fetchNegocios()
      this.fetchImoveis()
    }, 2000);

    setTimeout(() => {
      this.mostrarSkeleton = true
    }, 3000);
  },

  computed: {
    usuariosOnCurrentPage() {
      const startIndex = (this.currentPageUser - 1) * this.perPageUser;
      const endIndex = startIndex + this.perPageUser;
      return this.imoveis
        .filter((usuario) => {
          return usuario.descricao.titulo
            .toLowerCase()
            .includes(this.searchUsuario.toLowerCase());
        })
        .slice(startIndex, endIndex);
    },
    totalPagesUsuarios() {
      return Math.ceil(
        this.imoveis.filter((usuario) => {
          this.currentPageConcept = 1;
          return usuario.descricao.titulo
            .toLowerCase()
            .includes(this.searchUsuario.toLowerCase());
        }).length / this.perPageUser
      );
    },
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
      })
    },

    fetchImoveis() {
      api.listallImoveis().then((res) => {
        if (res.status === 200) {
          // console.log("Imoveis aqui ===>", res.data)
          // Inicializa o conjunto para armazenar os IDs dos imóveis
          const imovelIdsNosFunis = new Set();

          // Itera sobre cada funil e depois sobre cada negócio dentro dos funis
          this.funis.forEach((funil, funilIndex) => {
            // console.log(`Processando funil #${funilIndex} - ${funil.nome_funil}`); // Log para depuração

            if (funil.negocios && Array.isArray(funil.negocios)) {
              funil.negocios.forEach((negocio, negocioIndex) => {
                // console.log(`Processando negócio #${negocioIndex} no funil ${funilIndex}`, negocio); // Log para depuração

                // Verifica se o negócio tem um NovoImovel com um id_imovel válido
                if (negocio.NovoImovel && negocio.NovoImovel.id_imovel) {
                  imovelIdsNosFunis.add(negocio.NovoImovel.id_imovel);
                  // console.log(`Adicionado id_imovel: ${negocio.NovoImovel.id_imovel}`); // Log para confirmar a adição
                } else {
                  console.warn(`Negócio #${negocioIndex} no funil ${funilIndex} não tem um id_imovel válido`); // Log de aviso
                }
              });
            } else {
              console.warn(`O funil #${funilIndex} não possui negócios ou o campo não é um array`); // Log de aviso
            }
          });

          // Log para verificar os IDs coletados
          // console.log("IDs de imóveis nos funis:", [...imovelIdsNosFunis]);

          // Filtra os imóveis retornados pela API para incluir apenas aqueles com id_imovel nos funis
          this.imoveis = res.data.filter(imovel => imovelIdsNosFunis.has(imovel.id_imovel));
          // console.log("Imóveis filtrados:", this.imoveis); // Log para verificar os imóveis filtrados
        }
      });
    },

    fetchNegocios() {
      api.getNegocios()
        .then((res) => {
          if (res.status === 200) {
            // console.log("negocios aqui ===> ", res.data)
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

            // Atualiza os negócios utilizando os imóveis já buscados em this.imoveis
            const promises = Array.from(etapaMap.entries()).map(async ([idEtapa, negocios]) => {
              return Promise.all(negocios.map(async (negocio) => {
                const idImovel = negocio.NovoImovel.id_imovel;

                // Busca o imóvel correspondente em this.imoveis
                const imovelCorrespondente = this.imoveis.find(imovel => imovel.id_imovel === idImovel);

                // Se o imóvel correspondente for encontrado, atualiza o preço do negócio
                if (imovelCorrespondente && imovelCorrespondente.preco) {
                  negocio.NovoImovel.preco_imovel = imovelCorrespondente.preco.preco_imovel;
                } else {
                  console.warn(`Imóvel com id ${idImovel} não encontrado em this.imoveis`);
                }
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
                const clientesUnicos = new Set(funil.negocios.map(negocio => negocio.Cliente.id_cliente));
                funil.qtdClientesUnicos = clientesUnicos.size;
              });
              console.log(this.funis)
              // this.qtdNegoicos = this.funis.reduce((total, funil) => total + (funil.qtdNegoicos || 0), 0);

              // Calcula a quantidade total de clientes únicos em todos os funis
              const todosClientesUnicos = new Set(
                this.funis.flatMap(funil => funil.negocios.map(negocio => negocio.Cliente.id_cliente))
              );

              this.qtdClientesUnicos = todosClientesUnicos.size;
              this.imoveisUnicos = this.funis.reduce((total, funil) => total + (funil.imoveisUnicos || 0), 0);

              this.$nextTick(() => {
                // Atualize a interface se necessário
                this.funils = this.funis;
              });
            });
          }
        })
        .catch((error) => {
          console.error('Erro ao buscar negócios:', error);
        });
    },

    aplicaMascaraDinheiroPrecoImovel(preco) {
      let v = preco;

      // Remove tudo o que não é dígito
      v = v.replace(/\D/g, "");

      // Divide o número para preparar a adição de vírgula e ponto
      let valorDecimal = parseInt(v) / 100;

      // Formata o número como valor monetário
      return valorDecimal.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      // console.log(this.currentImovel)
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
