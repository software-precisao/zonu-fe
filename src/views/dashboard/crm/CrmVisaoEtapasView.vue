<template>
  <div class="main">
    <navbarImobiliaria />
    <main class="">
      <div class="" style="display: flex; flex-direction: row">
        <!-- Sidebar com opções e ícones -->
        <sidebarCrm tab="Visão etapas" />
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
              Negócios em andamento | Visão em etapas | {{ imoveisUnicos }} imóvel | {{ funilSelecionado ?
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

              <!-- ver se realmente precisa desse botao -->
              <!-- <a class="btn btn-white ms-2" style="display: flex; align-items: center; height: 30px" href="#">
                <img :src="barCodeIcon" style="transform: rotate(90deg); width: 15px; height: 15px;"></img>
              </a> -->

              <button class="btn btn-oranges ms-2" style="display: flex; align-items: center; height: 30px"
                @click="openModal">
                <i class="align-middle" data-feather="plus"></i>
                <span style="margin-left: 3px">Negócio</span>
              </button>
              <button class="btn btn-white ms-2" style="display: flex; align-items: center; height: 30px">
                <i class="align-middle" data-feather="file-plus"></i>
                <span style="margin-left: 3px">Exportar</span>
              </button>
              <a class="btn btn-white ms-2" style="display: flex; align-items: center; height: 30px"
                href="/seu-crmconfig">
                <i class="align-middle" data-feather="settings"></i>
              </a>
            </div>
          </header>

          <!-- modal criar negocio -->
          <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true" ref="myModal">
            <div class="modal-dialog" style="padding-top: 80px" role="document">
              <div class="modal-content">
                <div class="modal-header" style="
                  display: flex;
                  flex-direction: column;
                  width: 100%;
                  align-items: flex-start;
                ">
                  <div v-if="msgNegocioSuccess" class="alert alert-success" role="alert" style="width: 100%">
                    Negócio Criado com sucesso
                  </div>
                  <div v-if="msgNegocioError" class="alert alert-danger" role="alert" style="width: 100%">
                    Falha ao criar o negócio
                  </div>
                  <div v-if="msgNegocioErrorSemCampos" class="alert alert-danger" role="alert" style="width: 100%">
                    Preencha todos os campos!
                  </div>
                  <h5 class="modal-title" id="exampleModalLabel">
                    Adicionar Negócio
                  </h5>
                  <button type="button" class="close custom-close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <!-- Conteúdo do modal -->
                  <h4 style="font-size: 13px; font-weight: 500">
                    Para adicionar um negócio manualmente ao CRM, preencha os
                    campos:
                  </h4>

                  <div class="row">
                    <div class="form-group mt-3 col-6">
                      <label for="selectContato" style="font-weight: 600">Posição</label>
                      <select class="form-control" v-model="posicao" id="selectContato" style="height: 40px !important">
                        <option value="" disabled selected hidden>
                          Selecione uma opção
                        </option>
                        <option v-for="item in posicoes" :value="item.nome_etapa">
                          {{ item.nome_etapa }}
                        </option>
                      </select>
                    </div>

                    <!-- Campo Nível de Interesse -->
                    <div class="form-group mt-3 col-6">
                      <label for="nivelInteresse" style="font-weight: 600">Nível de interesse</label>
                      <div class="nivel-interesse">
                        <button v-for="nivel in 5" :key="nivel" type="button" class="nivel-btn"
                          :class="{ active: nivelInteresse >= nivel }" @click="nivelInteresse = nivel">
                          {{ nivel }}
                        </button>
                        <div class="nivel-linha"></div>
                      </div>
                    </div>
                  </div>

                  <!-- campo de cliente -->
                  <div class="form-group mt-3 col-12">
                    <label for="client" style="font-weight: 600">Cliente</label>
                    <div class="custom-select" ref="selectContainer">
                      <div class="select-box" @click="toggleDropdown" :aria-expanded="isOpen.toString()" role="button"
                        tabindex="0">
                        <span v-if="selectedOption">{{
                          selectedOption.nome
                        }}</span>
                        <span v-else>Selecione um cliente</span>
                        <i class="align-middle" data-feather="chevron-down"></i>
                      </div>
                      <ul v-if="isOpen" class="options-list">
                        <li @click="openModalClient" style="background-color: #f1f4f9">
                          <button class="btn" style="
                            color: #026da6;
                            display: flex;
                            align-items: center;
                            font-weight: 600;
                          ">
                            <img :src="plusCircle" style="width: 12px; height: 12px; margin-right: 6px" />Adicionar
                          </button>
                        </li>
                        <li v-for="client in allClientes" :key="client.id_cliente" @click="selectOption(client)">
                          <div style="display: flex; flex-direction: column">
                            <span>{{ client.nome }}
                              <img :src="userIcon" style="
                                width: 12px;
                                height: 12px;
                                margin-bottom: 2px;
                                margin-left: 2px;
                              " />
                            </span>
                            <!-- <span class="">(99) 99999-9999</span> -->
                            <span class="">{{ client.telefone_1 }}</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <!-- campo de enconte um imovel -->
                  <div class="form-group mt-3 col-12">
                    <label for="client" style="font-weight: 600">Encontre o imóvel</label>
                    <div class="custom-select" ref="selectContainerImovel">
                      <div class="select-box" @click="toggleDropdownImovel" :aria-expanded="isOpenImovel.toString()"
                        role="button" tabindex="0">
                        <span v-if="selectedOptionImovel">{{
                          selectedOptionImovel.descricao.titulo
                        }}</span>
                        <span v-else>Procure por endereço ou nome do condomínio</span>
                        <i class="align-middle" data-feather="chevron-down"></i>
                      </div>
                      <ul v-if="isOpenImovel" class="options-list">
                        <li v-for="item in imovel" :key="item.id_imovel" @click="selectOptionImovel(item)">
                          <div style="display: flex">
                            <img :src="`https://zonu.com.br/api${item.fotos[0].foto}`" style="
                              width: 70px;
                              height: 70px;
                              border-radius: 10px;
                              margin-top: 3px;
                              margin-right: 8px;
                            " />
                            <div style="
                              display: flex;
                              flex-direction: column;
                              justify-content: center;
                            ">
                              <h2 style="
                                margin: 0;
                                padding: 0;
                                font-size: 14px;
                                font-weight: 600;
                              ">
                                {{ item.descricao.titulo }}
                              </h2>
                              <p style="
                                margin: 0;
                                padding: 0;
                                font-size: 14px;
                                font-weight: 500;
                                color: #31d084;
                              ">
                                R${{
                                  aplicaMascaraDinheiroPrecoImovel(
                                    item.preco.preco_imovel
                                  )
                                }}
                              </p>
                              <p style="
                                margin: 0;
                                padding: 0;
                                font-size: 14px;
                                font-weight: 400;
                              ">
                                {{ item.descricao.apresentacao }}
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="modal-footer" style="display: flex; justify-content: space-between">
                  <button type="button" class="btn btnModal" style="
                    padding: 10px 15px;
                    border: 1px solid #d3dceb;
                    background-color: #fff;
                    color: #1c0c1e;
                    box-shadow: 0 0 5px rgba(211, 220, 235, 0.6);
                    font-size: 1em;
                    font-weight: 600;
                    cursor: pointer;
                  " data-bs-dismiss="modal">
                    Cancelar
                  </button>
                  <button type="button" class="btn btnModal2" style="
                    padding: 10px 15px;
                    border: 1px solid #d3dceb;
                    color: #fff;
                    background-color: #31d084;
                    box-shadow: 0 0 5px rgba(49, 208, 132, 0.6),
                      inset 0 0 1px rgba(0, 0, 0, 0.6);
                    font-size: 1em;
                    font-weight: 600;
                    cursor: pointer;
                  " @click="cadastraNegocio">
                    {{ textAddNegocio }}
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
import userIcon from "../../../../assets/images/icons/userIconBlue.svg";
import plusCircle from "../../../../assets/images/icons/plusCircle.svg";
import InterrSvg from "../../../../assets/images/icons/interrogationIcon.svg";
import trashIcon from "../../../../assets/images/icons/trash-2.svg";

export default {
  name: "CrmVisaoEtapasView",
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
      userIcon,
      plusCircle,

      canais: "",
      contatos: "",
      dataInicio: "",
      dataFinal: "",

      funilSelect: localStorage.getItem("fs") ? localStorage.getItem("fs") : "1",
      funis: [],
      imoveisUnicos: "",

      // modal criar negocio
      isOpen: false,
      isOpenImovel: false,
      msgNegocioSuccess: false,
      msgNegocioErrorSemCampos: false,
      msgNegocioError: false,
      textAddNegocio: "Adicionar Negócio",
      posicao: "", // Variável para armazenar o contato selecionado
      posicoes: [], // Variável para armazenar o contato selecionado
      nivelInteresse: 1,
      selectCliente: "",
      selectedOption: null,
      selectedOptionImovel: null,
      allClientes: [],
      imovel: [],
      etapas: [],
      funilporId: [],
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
    this.fetchCliente();
    this.fetchImoveis();
    this.fetchFunil()
    // this.fetchFirstEtapas()
    this.fetchNegocios()
    this.filtrarEtapasFunil(true)
    this.fetchClientePorID()
  },

  methods: {
    openModal() {
      const modal = new bootstrap.Modal(this.$refs.myModal);
      modal.show();
    },

    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },

    openModalClient() {
      window.location.href = "/seu-crm"
    },
    selectOption(client) {
      this.selectedOption = client;
      this.isOpen = false;
    },

    toggleDropdownImovel() {
      this.isOpenImovel = !this.isOpenImovel;
    },

    selectOptionImovel(client) {
      this.selectedOptionImovel = client;
      this.isOpenImovel = false;
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

    cadastraNegocio() {
      // cadastraNegocio(idPosicao, idNivelInteresse, idCliente, idImovel) {
      let idPosicao = "";
      let idNivel = "";
      let idCliente = "";
      let idImovel = "";
      this.posicoes.map((posi) => {
        // console.log(posi, this.posicao)
        if (posi.nome_etapa == this.posicao) {
          idPosicao = posi.id_etapa;
        }
      });
      idNivel = this.nivelInteresse;
      idCliente =
        this.selectedOption == null ? "" : this.selectedOption.id_cliente;
      idImovel =
        this.selectedOptionImovel == null
          ? ""
          : this.selectedOptionImovel.id_imovel;
      if (
        idPosicao != "" &&
        idNivel != "" &&
        idCliente != "" &&
        idImovel != ""
      ) {
        api.postNegocio(idPosicao, idNivel, idCliente, idImovel).then((res) => {
          this.textAddNegocio = "Adicionando...";
          // console.log("Res do postNegocio ===>", res);
          if (res.status === 201) {
            this.msgNegocioSuccess = true;

            setTimeout(() => {
              const modalNegocio = bootstrap.Modal.getInstance(
                this.$refs.myModal
              );

              this.textAddNegocio = "Adicionar Negócio";
              if (modalNegocio) {
                // setTimeout(() => {
                this.filtrarEtapasFunil()
                this.posicao = ""
                this.nivelInteresse = 1
                this.selectedOption = null
                this.selectedOptionImovel = null
                modalNegocio.hide(); // Fecha o modal atual
                // }, 1000);
              }
              this.msgNegocioSuccess = false;
              this.textAddCliente = "Adicionar Negócio";
            }, 3000);
          } else {
            this.textAddNegocio = "Adicionar Negócio";
            this.msgNegocioError = true;

            setTimeout(() => {
              this.msgNegocioError = false;
            }, 3000);
          }
        });
      } else {
        this.msgNegocioErrorSemCampos = true;

        setTimeout(() => {
          this.msgNegocioErrorSemCampos = false;
          this.textAddNegocio = "Adicionar Negócio";
        }, 3000);
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

    fetchImoveis() {
      api.listallImoveis().then((res) => {
        // console.log("Aqui estao os imoveis ====> ", res);
        if (res.status === 200) {
          this.imovel = res.data;
        }
      });
    },

    fetchFirstEtapas() {
      api.getFunilporId(this.funilSelect).then((res) => {
        if (res.status === 200) {
          this.funilporId = res.data
          this.etapas = res.data.etapas
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

    fetchCliente() {
      api.getCliente().then((res) => {
        // console.log("Aqui esta o cliente ====> ", res);
        if (res.status === 200) {
          this.allClientes = res.data;
        }
      });
    },

    fetchClientePorID() {
      api.getClientPorId(30).then((res) => {
        // console.log("Aqui esta o cliente ====> ", res);
        if (res.status === 200) {
          console.log(res)
        }
      });
    },
  },

  computed: {
    funilSelecionado() {
      // console.log()
      return this.funis.find(funil => funil.id_funil == Number(this.funilSelect)) || {};
    }
  },
};
</script>
<style scoped>
.modal-backdrop {
  z-index: 100 !important;
}

.modal {
  z-index: 1050 !important;
}

.modalTelefone {
  z-index: 1060 !important;
}

/* Custom styles for reducing font size */
.custom-nav-link {
  font-size: 0.79rem;
  /* Smaller font size */
  font-weight: 400;
  /* Increased font-weight */
}

.custom-select {
  font-size: 0.75rem;
  /* Smaller font size */
}

.btn-oranges {
  color: #fff;
  /* Texto branco */
  border: none;
  /* Remove a borda padrão */
  background-color: #ff9702;
  box-shadow: 0 0 5px rgba(255, 151, 2, 0.6), inset 0 0 1px rgba(0, 0, 0, 0.6);
  /* Sombra laranja */
  transition: background-color 0.3s, box-shadow 0.3s;
  /* Transições suaves */
}

.btn-blues {
  color: #fff;
  /* Texto branco */
  border: none;
  /* Remove a borda padrão */
  background-color: #0084f4;
  box-shadow: 0 0 5px rgba(0, 132, 255, 0.6), inset 0 0 1px rgba(0, 0, 0, 0.6);
  /* Sombra laranja */
  transition: background-color 0.3s, box-shadow 0.3s;
  /* Transições suaves */
}

.btn-white {
  color: #000;
  /* Texto branco */
  border: none;
  /* Remove a borda padrão */
  background-color: #fff;
  box-shadow: 0 0 5px rgba(41, 41, 40, 0.6), inset 0 0 1px rgba(0, 0, 0, 0.6);
  /* Sombra laranja */
  transition: background-color 0.3s, box-shadow 0.3s;
  /* Transições suaves */
}

.btn-white-no-border {
  color: #000;
  /* Texto branco */
  border: 1px solid #d3dceb;
  /* Remove a borda padrão */
  background-color: #fff;
}

.btn-green {
  color: #fff;
  /* Texto branco */
  border: none;
  /* Remove a borda padrão */
  background-color: #31d084;
  box-shadow: 0 0 5px rgba(146, 255, 138, 0.6), inset 0 0 1px rgba(0, 0, 0, 0.6);
  /* Sombra laranja */
  transition: background-color 0.3s, box-shadow 0.3s;
  /* Transições suaves */
}

.btn-reds {
  color: #fff;
  /* Texto branco */
  border: none;
  /* Remove a borda padrão */
  background-color: #f84343;
  box-shadow: 0 0 5px rgba(248, 67, 67, 0.6), inset 0 0 1px rgba(0, 0, 0, 0.6);
  /* Sombra laranja */
  transition: background-color 0.3s, box-shadow 0.3s;
  /* Transições suaves */
}

.btn-greenHover {
  color: #fff;
  /* Texto branco */
  border: none;
  /* Remove a borda padrão */
  background-color: #31d084;
  box-shadow: 0 0 5px rgba(146, 255, 138, 0.6), inset 0 0 1px rgba(0, 0, 0, 0.6);
  /* Sombra laranja */
  transition: background-color 0.3s, box-shadow 0.3s;
  /* Transições suaves */
}

.btn-oranges:hover {
  background-color: #af6901;
  /* Laranja mais escuro ao passar o mouse */
  color: #fff;
  /* Garantir que o texto permaneça branco */
}

.btn-blues:hover {
  background-color: #0072e5;
  /* Laranja mais escuro ao passar o mouse */
  color: #fff;
  /* Garantir que o texto permaneça branco */
}

.btn-white:hover {
  background-color: #efeeee;
  /* Laranja mais escuro ao passar o mouse */
  color: #000;
  /* Garantir que o texto permaneça branco */
}

.btn-white-no-border:hover {
  border: 1px solid #d3dceb;
  background-color: #fff;
  /* Laranja mais escuro ao passar o mouse */
  color: #000;
  /* Garantir que o texto permaneça branco */
}

.btn-green:hover {
  background-color: #31d084;
  /* Laranja mais escuro ao passar o mouse */
  color: #fff;
  /* Garantir que o texto permaneça branco */
}

.btn-greenHover:hover {
  background-color: #33b476;
  /* Laranja mais escuro ao passar o mouse */
  color: #fff;
  /* Garantir que o texto permaneça branco */
}

.custom-close {
  position: absolute;
  top: -25px;
  /* Ajuste a posição vertical */
  right: -20px;
  /* Ajuste a posição horizontal */
  background-color: #fff;
  border-radius: 1.2rem;
  border: none;
  font-size: 1.3rem;
  width: 1.3rem;
  height: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
}

.nivel-interesse {
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
}

.nivel-linha {
  position: absolute;
  top: 50%;
  left: 20px;
  right: 20px;
  height: 2px;
  background-color: #ccc;
  z-index: 0;
}

.nivel-btn {
  background-color: #e0e0e0;
  border: none;
  border-radius: 100%;
  color: white;
  width: 25px;
  height: 25px;
  font-size: 16px;
  cursor: pointer;
  margin: 0 10px;
  position: relative;
  z-index: 1;
  transition: background-color 0.3s, color 0.3s;
}

.nivel-btn.active,
.nivel-btn:hover {
  background-color: #5a67d8;
  color: white;
}

.custom-select {
  position: relative;
  width: 100%;
}

.select-box {
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.options-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  border: 1px solid #ccc;
  background: white;
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 200px;
  /* Optional: limit the height of the dropdown */
  overflow-y: auto;
  /* Optional: enable scrolling if content is too long */
  z-index: 1000;
  /* Ensures the dropdown appears above other elements */
}

.options-list li {
  padding: 6px 15px;
  cursor: pointer;
}

.options-list li:hover {
  background-color: #f0f0f0;
}

.btnModal:hover {
  background-color: #e8e8e8 !important;
}

.btnModal2:hover {
  background-color: #28b472 !important;
}

.modal-header,
.modal-body,
.modal-footer {
  background-color: #fff;
  /* Garante que cada seção tenha fundo branco */
}
</style>