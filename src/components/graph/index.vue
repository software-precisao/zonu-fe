<template>
  <div class="card flex-fill w-100">
    <div class="card-header">
      <h5 class="card-title mb-0">
        <i class="fa fa-ruler"></i> Média do m2
        <button
          style="float: inline-end"
          type="button"
          @click="resetFilters"
          class="btn btn-warning btn-sm"
        >
          <i class="fa fa-filter"></i> Reiniciar filtros
        </button>
      </h5>
    </div>
    <div class="card-body py-3">
      <div class="chart chart-sm">
        <div class="row">
          <div class="col-md-4 col-lg-4 col-xl-2">
            <label for="tipoNegocio" class="form-label"
              >Tipo de negócio <small><i class="fa fa-filter"></i></small
            ></label>
            <select
              class="form-select"
              v-model="selectedTipoNegocio"
              @change="filtrarImoveis"
            >
              <option value="">Escolha</option>
              <option v-for="tipo in tiposNegocio" :key="tipo" :value="tipo">
                {{ tipo }}
              </option>
            </select>
          </div>
          <div class="col-md-4 col-lg-4 col-xl-2 mb-3">
            <label for="tipoNegocio" class="form-label"
              >UF <small><i class="fa fa-filter"></i></small
            ></label>
            <select
              class="form-select"
              v-model="selectedUf"
              @change="filtrarImoveis"
            >
              <option value="">Escolha</option>
              <option v-for="uf in ufs" :key="uf" :value="uf">{{ uf }}</option>
            </select>
          </div>
          <div class="col-md-4 col-lg-4 col-xl-2">
            <label for="cidade" class="form-label"
              >Cidade <small><i class="fa fa-filter"></i></small
            ></label>
            <select
              class="form-select"
              v-model="selectedCidade"
              @change="filtrarImoveis"
            >
              <option value="">Escolha</option>
              <option v-for="cidade in cidades" :key="cidade" :value="cidade">
                {{ cidade }}
              </option>
            </select>
          </div>
          <div class="col-md-4 col-lg-4 col-xl-2">
            <label for="bairro" class="form-label"
              >Bairro <small><i class="fa fa-filter"></i></small
            ></label>
            <select
              class="form-select"
              v-model="selectedBairro"
              @change="filtrarImoveis"
            >
              <option value="">Selecione</option>
              <option v-for="bairro in bairros" :key="bairro" :value="bairro">
                {{ bairro }}
              </option>
            </select>
          </div>
          <!-- 
                    <div class="col-2">
                        <label for="status" class="form-label">Status <small><i
                                    class="fa fa-filter"></i></small></label>
                        <select class="form-select" v-model="selectedStatus" @change="filtrarImoveis">
                            <option value="">Escolha</option>
                            <option value="Sim">Publicado</option>
                            <option value="Não">Não publicado</option>
                        </select>
                    </div> -->
          <div class="col-md-4 col-lg-4 col-xl-2">
            <label for="tipoImovel" class="form-label"
              >Tipo do imóvel <small><i class="fa fa-filter"></i></small
            ></label>
            <select
              class="form-select"
              v-model="selectedTipoImovel"
              @change="filtrarImoveis"
            >
              <option value="">Selecione</option>
              <option v-for="tipo in tiposImovel" :key="tipo" :value="tipo">
                {{ tipo }}
              </option>
            </select>
          </div>
          <div class="col-md-4 col-lg-4 col-xl-2">
            <label for="proximoMar" class="form-label"
              >Proximo do Mar? <small><i class="fa fa-filter"></i></small
            ></label>
            <select
              class="form-select"
              v-model="selectedProximoMar"
              @change="filtrarImoveis"
            >
              <option value="">Selecione</option>
              <option
                v-for="proximidade in proximidadesMar"
                :key="proximidade"
                :value="proximidade"
              >
                {{ proximidade }}
              </option>
            </select>
          </div>
          <div class="col-md-4 col-lg-4 col-xl-2">
            <label for="quartos" class="form-label"
              >Quartos <small><i class="fa fa-filter"></i></small
            ></label>
            <input
              style="height: 34px"
              type="number"
              class="form-control"
              v-model="selectedQuartos"
              @input="filtrarImoveis"
              placeholder="00"
            />
          </div>

          <canvas id="myMetroQuadrado" v-if="filteredImoveis.length"></canvas>
          <div v-if="!filteredImoveis.length">
            <div class="alert alert-primary mt-3" role="alert">
              😔 Desculpe, não achamos nenhum imóvel com essas características.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../../../service/api/index";
import "https://cdn.jsdelivr.net/npm/chart.js";

export default {
  name: "CompGraph",
  data() {
    return {
      allImoveis: [],
      filteredImoveis: [],
      ufs: [],
      cidades: [],
      bairros: [],
      tiposNegocio: [],
      tiposImovel: [],
      proximidadesMar: [],
      selectedTipoNegocio: "",
      selectedUf: "",
      selectedCidade: "",
      selectedBairro: "",
      selectedStatus: "",
      selectedTipoImovel: "",
      selectedProximoMar: "",
      selectedQuartos: "",
      chart: null,
    };
  },
  mounted() {
    this.fetchAllImoveis();
  },
  created() {
    this.fetchAllImoveis();
  },
  methods: {
    async fetchAllImoveis() {
      try {
        const res = await api.listallImoveis();
        this.allImoveis = res.data;

        this.ufs = [
          ...new Set(
            this.allImoveis.map((imovel) => imovel.localizacao.estado)
          ),
        ];
        this.cidades = [
          ...new Set(
            this.allImoveis.map((imovel) => imovel.localizacao.cidade)
          ),
        ];
        this.bairros = [
          ...new Set(
            this.allImoveis.map((imovel) => imovel.localizacao.bairro)
          ),
        ];
        this.tiposNegocio = [
          ...new Set(
            this.allImoveis
              .map((imovel) => imovel.preco.tipo_negocio)
              .filter((tipo) => tipo)
          ),
        ];
        this.filteredImoveis = this.allImoveis;
        this.atualizarOpcoesFiltro();
        this.atualizarGraficoPorUF();
      } catch (error) {
        console.error("Erro ao buscar imóveis: ", error);
      }
    },
    atualizarOpcoesFiltro() {
      let imoveisFiltrados = this.allImoveis;

      if (this.selectedUf) {
        imoveisFiltrados = imoveisFiltrados.filter(
          (imovel) => imovel.localizacao.estado === this.selectedUf
        );
      }
      if (this.selectedCidade) {
        imoveisFiltrados = imoveisFiltrados.filter(
          (imovel) => imovel.localizacao.cidade === this.selectedCidade
        );
      }
      if (this.selectedBairro) {
        imoveisFiltrados = imoveisFiltrados.filter(
          (imovel) => imovel.localizacao.bairro === this.selectedBairro
        );
      }
      if (this.selectedTipoNegocio) {
        imoveisFiltrados = imoveisFiltrados.filter(
          (imovel) => imovel.preco.tipo_negocio === this.selectedTipoNegocio
        );
      }
      if (this.selectedTipoImovel) {
        imoveisFiltrados = imoveisFiltrados.filter(
          (imovel) => imovel.info.tipo === this.selectedTipoImovel
        );
      }
      if (this.selectedProximoMar) {
        imoveisFiltrados = imoveisFiltrados.filter(
          (imovel) => imovel.info.proximo_mar === this.selectedProximoMar
        );
      }

      this.ufs = [
        ...new Set(imoveisFiltrados.map((imovel) => imovel.localizacao.estado)),
      ];
      this.cidades = [
        ...new Set(imoveisFiltrados.map((imovel) => imovel.localizacao.cidade)),
      ];
      this.bairros = [
        ...new Set(imoveisFiltrados.map((imovel) => imovel.localizacao.bairro)),
      ];
      this.tiposNegocio = [
        ...new Set(
          imoveisFiltrados
            .map((imovel) => imovel.preco.tipo_negocio)
            .filter((tipo) => tipo)
        ),
      ];
      this.tiposImovel = [
        ...new Set(imoveisFiltrados.map((imovel) => imovel.info.tipo)),
      ];
      this.proximidadesMar = [
        ...new Set(imoveisFiltrados.map((imovel) => imovel.info.proximo_mar)),
      ];
    },
    atualizarGraficoPorTipoNegocio() {
      const canvas = document.getElementById("myMetroQuadrado");
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          if (this.chart) {
            this.chart.destroy();
          }

          let labels = [];
          let datasets = [];

          if (this.selectedBairro) {
            // Filtrar por bairro
            const mediasPorBairro = this.bairros
              .map((bairro) => {
                const imoveisPorBairro = this.filteredImoveis.filter(
                  (imovel) => imovel.localizacao.bairro === bairro
                );
                const media = this.calcularMedia(
                  imoveisPorBairro,
                  this.selectedTipoNegocio
                );
                return { label: bairro, media };
              })
              .filter((item) => item.media > 0);

            labels = mediasPorBairro.map((item) => item.label);
            datasets = [
              {
                label: `Média do m² (${
                  this.selectedTipoNegocio || "Todos"
                }) - Bairro (R$)`,
                data: mediasPorBairro.map((item) => item.media),
                borderWidth: 1,
                backgroundColor:
                  this.selectedTipoNegocio === "Venda"
                    ? "rgba(81, 229, 255, 0.2)"
                    : "rgba(255, 99, 132, 0.2)",
              },
            ];
          } else if (this.selectedCidade) {
            // Filtrar por cidade
            const mediasPorCidade = this.cidades
              .map((cidade) => {
                const imoveisPorCidade = this.filteredImoveis.filter(
                  (imovel) => imovel.localizacao.cidade === cidade
                );
                const media = this.calcularMedia(
                  imoveisPorCidade,
                  this.selectedTipoNegocio
                );
                return { label: cidade, media };
              })
              .filter((item) => item.media > 0);

            labels = mediasPorCidade.map((item) => item.label);
            datasets = [
              {
                label: `Média do m² (${
                  this.selectedTipoNegocio || "Todos"
                }) - Cidade (R$)`,
                data: mediasPorCidade.map((item) => item.media),
                borderWidth: 1,
                backgroundColor:
                  this.selectedTipoNegocio === "Venda"
                    ? "rgba(81, 229, 255, 0.2)"
                    : "rgba(255, 99, 132, 0.2)",
              },
            ];
          } else {
            // Filtrar por UF
            const mediasPorUF = this.ufs
              .map((uf) => {
                const imoveisPorUF = this.filteredImoveis.filter(
                  (imovel) => imovel.localizacao.estado === uf
                );
                const venda = this.calcularMedia(imoveisPorUF, "Venda");
                const aluguel = this.calcularMedia(imoveisPorUF, "Aluguel");
                return { label: uf, venda, aluguel };
              })
              .filter((item) => item.venda > 0 || item.aluguel > 0);

            labels = mediasPorUF.map((item) => item.label);
            datasets = [
              {
                label: "Média do m² (Venda) - UF (R$)",
                data: mediasPorUF.map((item) => item.venda),
                borderWidth: 1,
                backgroundColor: "rgba(81, 229, 255, 0.2)",
              },
              {
                label: "Média do m² (Aluguel) - UF (R$)",
                data: mediasPorUF.map((item) => item.aluguel),
                borderWidth: 1,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
              },
            ];
          }

          this.chart = new Chart(ctx, {
            type: "bar",
            data: {
              labels: labels,
              datasets: datasets,
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    callback: (value) => this.formatarMoeda(value),
                  },
                },
              },
              plugins: {
                tooltip: {
                  callbacks: {
                    label: (context) =>
                      `Média: ${this.formatarMoeda(context.raw)}`,
                  },
                },
              },
            },
          });
        }
      }
    },
    filtrarImoveis() {
      this.filteredImoveis = this.allImoveis.filter((imovel) => {
        return (
          (!this.selectedUf || imovel.localizacao.estado === this.selectedUf) &&
          (!this.selectedCidade ||
            imovel.localizacao.cidade === this.selectedCidade) &&
          (!this.selectedBairro ||
            imovel.localizacao.bairro === this.selectedBairro) &&
          (!this.selectedTipoNegocio ||
            imovel.preco.tipo_negocio === this.selectedTipoNegocio) &&
          (!this.selectedStatus ||
            imovel.publicacao.mostrar_imovel_publi === this.selectedStatus) &&
          (!this.selectedTipoImovel ||
            imovel.info.tipo === this.selectedTipoImovel) &&
          (!this.selectedProximoMar ||
            imovel.info.proximo_mar === this.selectedProximoMar) &&
          (!this.selectedQuartos ||
            imovel.comodos.dormitorio == this.selectedQuartos)
        );
      });

      this.atualizarOpcoesFiltro();
      this.atualizarGraficoPorUF();
    },
    calcularMedia(imoveis, tipoNegocio) {
      const imoveisFiltrados = imoveis.filter(
        (imovel) => imovel.preco.tipo_negocio === tipoNegocio
      );
      const totalArea = imoveisFiltrados.reduce(
        (sum, imovel) => sum + parseFloat(imovel.medidas.area_total || 0),
        0
      );
      const totalValor = imoveisFiltrados.reduce(
        (sum, imovel) =>
          sum +
          parseFloat(imovel.medidas.media_metro_quadrado || 0) *
            parseFloat(imovel.medidas.area_total || 0),
        0
      );
      return totalArea ? totalValor / totalArea : 0;
    },
    formatarMoeda(valor) {
      return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
    atualizarGrafico() {
      const canvas = document.getElementById("myMetroQuadrado");
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          if (this.chart) {
            this.chart.destroy();
          }

          let medias;
          if (this.selectedUf && this.selectedCidade) {
            medias = this.bairros.map((bairro) => {
              const imoveisPorBairro = this.filteredImoveis.filter(
                (imovel) => imovel.localizacao.bairro === bairro
              );
              return {
                label: bairro,
                media: this.calcularMedia(imoveisPorBairro),
              };
            });
          } else if (this.selectedUf) {
            medias = this.cidades.map((cidade) => {
              const imoveisPorCidade = this.filteredImoveis.filter(
                (imovel) => imovel.localizacao.cidade === cidade
              );
              return {
                label: cidade,
                media: this.calcularMedia(imoveisPorCidade),
              };
            });
          } else {
            medias = this.ufs.map((uf) => {
              const imoveisPorUf = this.filteredImoveis.filter(
                (imovel) => imovel.localizacao.estado === uf
              );
              return {
                label: uf,
                media: this.calcularMedia(imoveisPorUf),
              };
            });
          }

          const labels = medias.map((item) => item.label);
          const data = medias.map((item) => item.media);

          this.chart = new Chart(ctx, {
            type: "bar",
            data: {
              labels: labels,
              datasets: [
                {
                  label: "Média do m² (R$)",
                  data: data,
                  borderWidth: 1,
                  backgroundColor: "rgba(81, 229, 255, 0.2)",
                },
              ],
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    callback: (value) => this.formatarMoeda(value),
                  },
                },
              },
              plugins: {
                tooltip: {
                  callbacks: {
                    label: (context) =>
                      `Média: ${this.formatarMoeda(context.raw)}`,
                  },
                },
              },
            },
          });
        }
      }
    },
    atualizarGraficoPorCidade() {
      const canvas = document.getElementById("myMetroQuadrado");
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          if (this.chart) {
            this.chart.destroy();
          }

          const mediasPorCidade = this.cidades.map((cidade) => {
            const imoveisPorCidade = this.filteredImoveis.filter(
              (imovel) => imovel.localizacao.cidade === cidade
            );
            return {
              cidade,
              media: this.calcularMedia(imoveisPorCidade),
            };
          });

          const labels = mediasPorCidade.map((item) => item.cidade);
          const data = mediasPorCidade.map((item) => item.media);

          console.log("Médias por Cidade:", mediasPorCidade);

          this.chart = new Chart(ctx, {
            type: "bar",
            data: {
              labels: labels,
              datasets: [
                {
                  label: "Média do m² (R$)",
                  data: data,
                  borderWidth: 1,
                  backgroundColor: "rgba(81, 229, 255, 0.2)",
                },
              ],
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    callback: (value) => this.formatarMoeda(value),
                  },
                },
              },
              plugins: {
                tooltip: {
                  callbacks: {
                    label: (context) =>
                      `Média: ${this.formatarMoeda(context.raw)}`,
                  },
                },
              },
            },
          });
        }
      }
    },
    atualizarGraficoPorUF() {
      const canvas = document.getElementById("myMetroQuadrado");
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          if (this.chart) {
            this.chart.destroy();
          }

          let medias;

          if (this.selectedUf && this.selectedCidade && this.selectedBairro) {
            // Mostrar a média por tipos de imóvel no bairro
            medias = this.tiposImovel.map((tipo) => {
              const imoveisPorTipo = this.filteredImoveis.filter(
                (imovel) =>
                  imovel.localizacao.bairro === this.selectedBairro &&
                  imovel.info.tipo === tipo
              );
              return {
                label: tipo,
                venda: this.calcularMedia(imoveisPorTipo, "Venda"),
                aluguel: this.calcularMedia(imoveisPorTipo, "Aluguel"),
              };
            });
          } else if (this.selectedUf && this.selectedCidade) {
            // Mostrar a média por bairros
            medias = this.bairros.map((bairro) => {
              const imoveisPorBairro = this.filteredImoveis.filter(
                (imovel) => imovel.localizacao.bairro === bairro
              );
              return {
                label: bairro,
                venda: this.calcularMedia(imoveisPorBairro, "Venda"),
                aluguel: this.calcularMedia(imoveisPorBairro, "Aluguel"),
              };
            });
          } else if (this.selectedUf) {
            // Mostrar a média por cidades
            medias = this.cidades.map((cidade) => {
              const imoveisPorCidade = this.filteredImoveis.filter(
                (imovel) => imovel.localizacao.cidade === cidade
              );
              return {
                label: cidade,
                venda: this.calcularMedia(imoveisPorCidade, "Venda"),
                aluguel: this.calcularMedia(imoveisPorCidade, "Aluguel"),
              };
            });
          } else {
            // Mostrar a média por estados
            medias = this.ufs.map((uf) => {
              const imoveisPorUf = this.filteredImoveis.filter(
                (imovel) => imovel.localizacao.estado === uf
              );
              return {
                label: uf,
                venda: this.calcularMedia(imoveisPorUf, "Venda"),
                aluguel: this.calcularMedia(imoveisPorUf, "Aluguel"),
              };
            });
          }

          const labels = medias.map((item) => item.label);
          const dataVenda = medias.map((item) => item.venda);
          const dataAluguel = medias.map((item) => item.aluguel);

          const datasets = [
            {
              label: "Média do m² (Venda) (R$)",
              data: dataVenda,
              borderWidth: 1,
              backgroundColor: "rgba(81, 229, 255, 0.2)",
            },
            {
              label: "Média do m² (Aluguel) (R$)",
              data: dataAluguel,
              borderWidth: 1,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
            },
          ];

          this.chart = new Chart(ctx, {
            type: "bar",
            data: {
              labels: labels,
              datasets: datasets,
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    callback: (value) => this.formatarMoeda(value),
                  },
                },
              },
              plugins: {
                tooltip: {
                  callbacks: {
                    label: (context) =>
                      `Média: ${this.formatarMoeda(context.raw)}`,
                  },
                },
              },
            },
          });
        }
      }
    },
    resetFilters() {
      this.selectedUf = "";
      this.selectedCidade = "";
      this.selectedBairro = "";
      this.selectedTipoNegocio = "";
      this.selectedStatus = "";
      this.selectedTipoImovel = "";
      this.selectedProximoMar = "";
      this.selectedQuartos = "";
      this.filteredImoveis = this.allImoveis;

      // Atualiza as opções de filtro para mostrar todas as opções disponíveis novamente
      this.ufs = [
        ...new Set(this.allImoveis.map((imovel) => imovel.localizacao.estado)),
      ];
      this.cidades = [
        ...new Set(this.allImoveis.map((imovel) => imovel.localizacao.cidade)),
      ];
      this.bairros = [
        ...new Set(this.allImoveis.map((imovel) => imovel.localizacao.bairro)),
      ];
      this.tiposNegocio = [
        ...new Set(
          this.allImoveis
            .map((imovel) => imovel.preco.tipo_negocio)
            .filter((tipo) => tipo)
        ),
      ];
      this.tiposImovel = [
        ...new Set(this.allImoveis.map((imovel) => imovel.info.tipo)),
      ];
      this.proximidadesMar = [
        ...new Set(this.allImoveis.map((imovel) => imovel.info.proximo_mar)),
      ];

      this.atualizarGraficoPorUF();
    },
  },
  watch: {
    selectedUf(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.selectedCidade = "";
        this.selectedBairro = "";
        this.atualizarOpcoesFiltro();
      }
    },
    selectedCidade(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.selectedBairro = "";
        this.atualizarOpcoesFiltro();
      }
    },
    selectedTipoNegocio(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.atualizarOpcoesFiltro();
      }
    },
    selectedTipoImovel(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.atualizarOpcoesFiltro();
      }
    },
    selectedProximoMar(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.atualizarOpcoesFiltro();
      }
    },
  },
};
</script>
