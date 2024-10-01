<template>
  <div class="main">
    <NavbarImobiliaria />
    <main class="">
      <div class="" style="display: flex; flex-direction: row">
        <SidebarCrm tab="config" />

        <div class="" style="width: 81%">
          <div class="mt-4">
            <div class="row justify-content-center">
              <!-- Card 1 -->
              <div class="col-10 mb-3">
                <div class="card" v-if="disableAjuda" style="
                    position: relative;
                    border: 1px solid rgb(211, 220, 235);
                  ">
                  <div style="
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
                    ">
                    <i class="align-middle" data-feather="x"></i>
                  </div>
                  <div class="d-flex">
                    <!-- Barra lateral dentro do card -->
                    <div class="" style="
                        background-color: rgb(130, 90, 220);
                        width: 15%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        color: #fff;
                        border-top-left-radius: 5px;
                        border-bottom-left-radius: 5px;
                      ">
                      <i class="align-middle" style="width: 60%; height: 60%" data-feather="help-circle"></i>
                      <span class="mt-1" style="font-weight: 800">Ajuda</span>
                    </div>
                    <!-- Conteúdo do card -->
                    <div class="card-body flex-fill ms-3">
                      <h5 class="card-title" style="color: #000; font-size: 16px; font-weight: 500">
                        Precisa de ajuda?
                      </h5>
                      <p class="card-text" style="color: #000; font-size: 13.5px; font-weight: 400">
                        Separamos alguns tópicos desta área
                      </p>
                      <div style="display: flex; flex-direction: column">
                        <div style="display: flex">
                          <img :src="youtubeLogo" style="width: 20px; height: 20px" />

                          <a href="#" style="
                              text-decoration: none;
                              color: rgb(23, 110, 200);
                              font-size: 13.5px;
                              font-weight: 500;
                            " class="ms-2">Adicionar negócio ao CRM</a>
                        </div>
                      </div>
                      <div style="display: flex; flex-direction: column" class="mt-1">
                        <div style="display: flex">
                          <img :src="youtubeLogo" style="width: 20px; height: 20px" />

                          <a href="#" style="
                              text-decoration: none;
                              color: rgb(23, 110, 200);
                              font-size: 13.5px;
                              font-weight: 500;
                            " class="ms-2">Criar Funil</a>
                        </div>
                      </div>
                      <div style="display: flex; flex-direction: column" class="mt-1">
                        <div style="display: flex">
                          <img :src="youtubeLogo" style="width: 20px; height: 20px" />

                          <a href="#" style="
                              text-decoration: none;
                              color: rgb(23, 110, 200);
                              font-size: 13.5px;
                              font-weight: 500;
                            " class="ms-2">Editar Funil</a>
                        </div>
                      </div>
                      <div style="display: flex; flex-direction: column" class="mt-1">
                        <div style="display: flex">
                          <img :src="youtubeLogo" style="width: 20px; height: 20px" />

                          <a href="#" style="
                              text-decoration: none;
                              color: rgb(23, 110, 200);
                              font-size: 13.5px;
                              font-weight: 500;
                            " class="ms-2">Radar de oportunidades</a>
                        </div>
                      </div>
                      <div style="display: flex; flex-direction: column" class="mt-1">
                        <div style="display: flex">
                          <img :src="youtubeLogo" style="width: 20px; height: 20px" />

                          <a href="#" style="
                              text-decoration: none;
                              color: rgb(23, 110, 200);
                              font-size: 13.5px;
                              font-weight: 500;
                            " class="ms-2">Distribuição padrão de funil por negócio</a>
                        </div>
                      </div>
                      <div style="
                          display: flex;
                          flex-direction: column;
                          margin-left: -6px;
                        " class="mt-3">
                        <a href="#" style="
                            text-decoration: none;
                            color: rgb(23, 110, 200);
                            font-size: 13px;
                            font-weight: 500;
                            display: flex;
                          " class="ms-2"><span style="color: #000">Acessar</span> &nbsp;
                          Central de ajuda</a>
                      </div>
                    </div>
                    <div class="me-3 mt-3">
                      <h5 class="card-title" style="color: #000; font-size: 16px; font-weight: 500">
                        Vídeo demonstrativo
                      </h5>
                      <div style="
                          position: relative;
                          width: 240px;
                          height: 135px;
                          cursor: pointer;
                        ">
                        <img src="https://img.youtube.com/vi/8DX7mudPCNs/0.jpg" style="
                            width: inherit;
                            height: inherit;
                            object-fit: cover;
                            border-radius: 4px;
                          " />
                        <img :src="youtubeLogo" style="
                            position: absolute;
                            top: 49%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            height: 50px;
                            width: 50px;
                          " />
                      </div>
                    </div>
                  </div>
                </div>

                <div style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: 3rem;
                  ">
                  <div>
                    <h2 style="font-size: 1.1rem; font-weight: 500">
                      Edição de funil
                    </h2>
                    <p>
                      Deixe as etapas simples, baseadas nas atividades do dia a
                      dia de trabalho.
                    </p>
                  </div>
                  <button class="btn btn-orange" style="display: flex; align-items: center; height: 30px"
                    @click="openCriarFunil">
                    <i class="align-middle" data-feather="plus"></i>
                    <span style="margin-left: 3px">Criar Funil</span>
                  </button>
                </div>

                <!-- modal de criar funil -->
                <div class="modal fade" id="myModalClient" tabindex="-1" role="dialog"
                  aria-labelledby="exampleModalLabel" aria-hidden="true" ref="myModalCriarFunil">
                  <div class="modal-dialog" style="max-width: 600px !important; padding-top: 40px" role="document">
                    <div class="modal-content">
                      <div class="modal-header" style="
                          display: flex;
                          flex-direction: column;
                          width: 100%;
                          align-items: flex-start;
                        ">
                        <div v-if="msgFunilSuccess" class="alert alert-success" role="alert" style="width: 100%">
                          Funil Criado com sucesso
                        </div>
                        <div v-if="msgFunilError" class="alert alert-danger" role="alert" style="width: 100%">
                          Falha ao criar o funil
                        </div>
                        <div v-if="msgFunilErrorSemCampos" class="alert alert-danger" role="alert" style="width: 100%">
                          Preencha os campos obrigatórios!
                        </div>
                        <div v-if="msgFunilEtapaCampos" class="alert alert-danger" role="alert" style="width: 100%">
                          Preencha os campos das Etapas!
                        </div>
                        <h5 class="modal-title" id="exampleModalLabel">
                          Criar Funil
                        </h5>
                        <button type="button" class="close custom-close" data-bs-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>

                      <div class="modal-body">
                        <div class="row">
                          <div class="row" style="">
                            <div class="form-group col-7">
                              <label for="nome" style="font-size: 14px; font-weight: 600">Nome</label><strong
                                class="text-danger">*</strong>
                              <input type="text" class="form-control" id="nome" v-model="nome" placeholder="Digite..."
                                style="height: 40px" />
                            </div>

                            <div class="form-group col-5">
                              <label for="limpezaEm" style="font-size: 14px; font-weight: 600">Limpeza em</label>
                              <img :src="InterrSvg" class="ms-2" style="width: 12px; height: 12px" />
                              <div style="
                                  display: flex;
                                  justify-content: center;
                                  align-items: center;
                                ">
                                <input type="text" class="form-control" id="limpezaEm" v-model="limpezaEm"
                                  placeholder="120" style="height: 40px; width: 80%" />
                                <span style="
                                    font-weight: 600;
                                    height: 40px;
                                    width: 20%;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    border: 1px solid #d3dceb;
                                    border-top-right-radius: 5px;
                                    border-bottom-right-radius: 5px;
                                  ">Dias</span>
                              </div>
                            </div>

                            <div class="form-group mt-3">
                              <label for="descricao" style="font-size: 14px; font-weight: 600">Descricao</label>
                              <input type="text" class="form-control" id="descricao" v-model="descricao"
                                placeholder="Digite a descrição do funil" style="height: 40px" />
                            </div>

                            <div class="form-group mt-3">
                              <label for="etapas" style="font-size: 14px; font-weight: 600">Quais etapas irão compor
                                este funil?</label>

                              <div v-for="(etapa, index) in etapas" :key="index" class="row">
                                <div class="form-group mt-3 col-4">
                                  <label :for="'nomeEtapa' + index" style="font-size: 13px; font-weight: 600">Nome da
                                    etapa</label>
                                  <input type="text" class="form-control" :id="'nomeEtapa' + index"
                                    v-model="etapa.nome_etapa" placeholder="Digite..." style="height: 40px" />
                                </div>
                                <div class="form-group mt-3 col-4">
                                  <label :for="'estagnarEm' + index" style="font-size: 13px; font-weight: 600">Estagnar
                                    em</label>
                                  <img :src="InterrSvg" class="ms-2" style="width: 12px; height: 12px" />
                                  <div style="
                                      display: flex;
                                      justify-content: center;
                                      align-items: center;
                                    ">
                                    <input type="text" class="form-control" :id="'estagnarEm' + index"
                                      v-model="etapa.dias_limpeza" placeholder="3" style="height: 40px; width: 70%" />
                                    <span style="
                                        font-weight: 600;
                                        height: 40px;
                                        width: 30%;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        border: 1px solid #d3dceb;
                                        border-top-right-radius: 5px;
                                        border-bottom-right-radius: 5px;
                                      ">Dias</span>
                                  </div>
                                </div>
                                <div class="form-group mt-3" style="display: flex"
                                  :class="index == 0 ? 'col-4' : 'col-4'">
                                  <div>
                                    <label :for="'descricaoEtapa' + index"
                                      style="font-size: 13px; font-weight: 600">Descrição da etapa</label>
                                    <input type="text" class="form-control" :id="'descricaoEtapa' + index"
                                      v-model="etapa.descricao" placeholder="Digite..." style="height: 40px" :style="index == 0
                                        ? 'width: 100%'
                                        : 'width: 90%'
                                        " />
                                  </div>
                                  <div class="form-group mt-3" style="
                                      display: flex;
                                      align-items: center;
                                      justify-content: center;
                                    " v-if="index >= etapasIniciais">
                                    <img :src="trashIcon" style="
                                        width: 14px;
                                        height: 14px;
                                        cursor: pointer;
                                      " @click="removerEtapa(index)" />
                                  </div>
                                </div>
                                <!-- Ícone de lixeira para remover a etapa -->
                              </div>
                              <div class="mt-3" style="text-align: left">
                                <button type="button" class="btn" style="
                                    background-color: #595bd3;
                                    color: #fff;
                                    padding: 10px 20px;
                                  " @click="adicionarEtapa">
                                  Adicionar etapa
                                </button>
                              </div>
                            </div>
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
                          " @click="cadastraFunil">
                          {{ textAddFunil }}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- modal de remover Funil -->
                <div class="modal fade modalTelefone" id="modalRemoverFunil" tabindex="-1" role="dialog"
                  aria-labelledby="modalRemoverFunil" aria-hidden="true" ref="modalRemoverFunil">
                  <div class="modal-dialog" style="padding-top: 80px" role="document">
                    <div class="modal-content">
                      <div class="modal-header" style="
                          display: flex;
                          flex-direction: column;
                          width: 100%;
                          align-items: flex-start;
                        ">
                        <div v-if="msgFunilRemoveSuccess" class="alert alert-success" role="alert" style="width: 100%">
                          Funil Removido com sucesso
                        </div>
                        <div v-if="msgFunilRemoveError" class="alert alert-danger" role="alert" style="width: 100%">
                          Falha ao remover o funil
                        </div>
                        <h5 class="modal-title" id="exampleModalLabel">
                          Remover funil
                        </h5>
                        <button type="button" class="close custom-close" data-bs-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <h2 style="
                            font-size: 16px;
                            font-weight: 600;
                            text-align: center;
                            padding: 20px 0;
                          ">
                          Tem certeza que deseja remover esse funil?
                        </h2>
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
                        <button type="button" class="btn btn-danger" style="padding: 10px 15px"
                          @click="removerFunilYes">
                          {{ textRemoverFunil }}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card mt-4" style="border: 1px solid rgb(211, 220, 235)">
                  <div class="card-body">
                    <table class="table">
                      <thead>
                        <tr>
                          <th class="text-start">Nome do funil</th>
                          <th class="text-center">
                            Limpeza em
                            <img :src="InterrSvg" class="ms-2" style="width: 12px; height: 12px" />
                          </th>
                          <th class="text-center">Opções</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="tr-hover" v-for="funil in funis" v-if="funis.length > 0">
                          <td class="text-start">
                            <div class="d-flex flex-column" style="font-size: 14px; font-weight: 500">
                              {{ funil.nome_funil }}
                              <span v-if="
                                funil.descricao != '' &&
                                funil.descricao != null
                              " class="text-muted" style="
                                  font-size: 12px;
                                  color: rgb(117, 117, 117);
                                ">{{ funil.descricao }}</span>
                            </div>
                          </td>
                          <td class="text-center" style="font-size: 14px; font-weight: 500">
                            {{ funil.dias_limpeza }} Dias
                          </td>
                          <td class="text-end">
                            <div class="">
                              <a @click="handleSalvarIdFunil(funil.id_funil)" class="btn btn-white me-2">Editar</a>
                              <button class="btn btn-red" @click="handleRemoverFunil(funil.id_funil)">
                                Remover
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: 3rem;
                  ">
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

                <div class="card mt-4" style="border: 1px solid rgb(211, 220, 235)">
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
                            <div class="d-flex flex-column" style="font-size: 14px">
                              <strong>Venda</strong>
                            </div>
                          </td>
                          <td style="font-size: 14px; font-weight: 500">
                            Imóveis à venda devem ser encaminhados para o funil
                          </td>
                          <td>
                            <div style="display: flex; align-items: center">
                              <select class="form-select" v-model="selectedValue" @change="updateSelectedValue"
                                style="height: 30px; font-size: 13px">
                                <option disabled value="">
                                  Selecione uma opção
                                </option>
                                <optgroup v-for="group in funis" :key="group.nome_funil" :label="group.nome_funil"
                                  class="optgroup-label">
                                  <option v-for="option in group.etapas" :key="option.id_etapa" :value="option.id_etapa"
                                    class="backOption">
                                    {{ option.nome_etapa }}
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
                              <select class="form-select" v-model="selectedValue2" @change="updateSelectedValue2"
                                style="height: 30px; font-size: 13px">
                                <option disabled value="">
                                  Selecione uma opção
                                </option>
                                <optgroup v-for="group in funis" :key="group.nome_funil" :label="group.nome_funil"
                                  class="optgroup-label">
                                  <option v-for="option in group.etapas" :key="option.id_etapa" :value="option.id_etapa"
                                    class="backOption">
                                    {{ option.nome_etapa }}
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
import trashIcon from "../../../../assets/images/icons/trash-2.svg";
import api from "../../../../service/api/index";
import apiCrm from "../../../../service/api/crm/index";
import { jwtDecode } from "jwt-decode";

export default {
  name: "CrmConfig",
  components: {
    NavbarImobiliaria,
    Footer,
    SidebarCrm,
  },
  data() {
    return {
      token: localStorage.getItem("token"),
      id_user: "",
      userName: "",
      userSobrenome: "",
      id_user: "",
      corretorResponsavel: "",

      youtubeLogo,
      InterrSvg,
      trashIcon,

      funilType1: "",
      funilType2: "",

      selectedValue: "",
      selectedValue2: "",
      options: [],

      textAddFunil: "Criar funil",

      etapas: [{ nome_etapa: "", dias_limpeza: "", descricao: "" }],
      etapasIniciais: 1,

      funis: [],

      // erros funil
      msgFunilSuccess: false,
      msgFunilError: false,
      msgFunilErrorSemCampos: false,
      msgFunilEtapaCampos: false,

      //criar funil
      nome: "",
      limpezaEm: "",
      descricao: "",

      //remover funil
      funilIdRemove: "",
      textRemoverFunil: "Remover",
      msgFunilRemoveSuccess: false,
      msgFunilRemoveError: false,

      disableAjuda: false,

      //funil venda e locacao
      transacaoVenda: '',
      transacaoLocacao: '',
    };
  },
  methods: {
    fetchVenda() {
      apiCrm.getFunilVenda().then((res) => {
        let id = this.id_user
        if (res.status === 200 && res.data.response.length > 0) {
          res.data.response.map((e) => {
            if (e.id_user == id) {
              this.transacaoVenda = e.id_venda
              this.selectedValue = e.id_etapa
            }
          })
        }
      })
    },

    fetchLocacao() {
      apiCrm.getFunilLocacao().then((res) => {
        if (res.status === 200 && res.data.response.length > 0) {
          console.log(res)
          res.data.response.map((e) => {
            if (e.id_user == id) {
              this.transacaoLocacao = e.id_locacao
              this.selectedValue2 = e.id_etapa
            }
          })
        }
      })
    },

    handleSalvarIdFunil(id) {
      localStorage.setItem("ff", id);

      window.location.href = "/seu-crmeditfunil";
    },

    handleRemoverFunil(id) {
      this.funilIdRemove = id;
      const modalRemove = new bootstrap.Modal(this.$refs.modalRemoverFunil);
      modalRemove.show();
    },

    removerFunilYes() {
      let idRemove = this.funilIdRemove;

      // const originalLength = this.funis.length;

      // this.funis = this.funis.filter((e) => e.id_funil !== idRemove);

      this.textRemoverFunil = "Removendo...";
      api.removeFunil(idRemove).then((res) => {
        if (res.status === 200) {
          this.msgFunilRemoveSuccess = true;

          const modalRemoveFunil = bootstrap.Modal.getInstance(
            this.$refs.modalRemoverFunil
          );

          setTimeout(() => {
            this.msgFunilRemoveSuccess = false;
            this.textRemoverFunil = "Remover";

            if (modalRemoveFunil) {
              this.funilIdRemove = "";
              this.fetchFunil();
              modalRemoveFunil.hide();
            }
          }, 2000);
        } else {
          this.msgFunilRemoveError = true;
          this.textRemoverFunil = "Remover";

          setTimeout(() => {
            this.msgFunilRemoveError = false;
          }, 2000);
        }
      });
    },

    updateSelectedValue() {
      let etapa = this.selectedValue
      let id_user = this.id_user

      let venda = this.transacaoVenda

      if (venda == null || venda == '') {
        apiCrm.cadastrarFunilVenda(etapa, id_user).then((res) => {
          console.log(res)
        })
      } else {
        apiCrm.editarFunilVenda(venda, etapa, id_user).then((res) => {
          console.log(res)
        })
      }
    },

    updateSelectedValue2() {
      let etapa = this.selectedValue2
      let id_user = this.id_user

      let locacao = this.transacaoVenda

      if (locacao == null || locacao == '') {
        apiCrm.cadastrarFunilLocacao(etapa, id_user).then((res) => {
          console.log(res)
        })
      } else {
        apiCrm.editarFunilLocacao(locacao, etapa, id_user).then((res) => {
          console.log(res)
        })
      }
    },

    openCriarFunil() {
      const modal = new bootstrap.Modal(this.$refs.myModalCriarFunil);
      modal.show();
    },

    adicionarEtapa() {
      this.etapas.push({ nome_etapa: "", dias_limpeza: "", descricao: "" });
    },
    removerEtapa(index) {
      this.etapas.splice(index, 1);
    },

    cadastraFunil() {
      let nome = this.nome;
      let limpezaEm = this.limpezaEm;
      let descricao = this.descricao;
      let etapas = this.etapas;
      let idUser = this.id_user

      this.textAddFunil = "Adicionando...";
      let todosPreenchidos = this.etapas.every((etapa) => {
        return etapa.nome_etapa && etapa.dias_limpeza && etapa.descricao;
      });
      if (nome != "" && limpezaEm != "") {
        if (todosPreenchidos) {
          api.postFunil(nome, limpezaEm, descricao, etapas, idUser).then((res) => {
            if (res.status == 201) {
              this.msgFunilSuccess = true;

              const modalFunil = bootstrap.Modal.getInstance(
                this.$refs.myModalCriarFunil
              );
              setTimeout(() => {
                if (modalFunil) {
                  this.nome = "";
                  this.limpezaEm = "";
                  this.descricao = "";
                  (this.etapas = [
                    { nome_etapa: "", dias_limpeza: "", descricao: "" },
                  ]),
                    this.fetchFunil();
                  modalFunil.hide();
                }

                this.msgFunilSuccess = false;
                this.textAddFunil = "Criar funil";
              }, 3000);
            } else {
              this.msgFunilError = true;
              this.textAddFunil = "Criar funil";
              setTimeout(() => {
                this.msgFunilError = false;
              }, 3000);
            }
          });
        } else {
          this.msgFunilEtapaCampos = true;
          this.textAddFunil = "Preencha os campos";
          setTimeout(() => {
            this.msgFunilEtapaCampos = false;
            this.textAddFunil = "Criar funil";
          }, 3000);
        }
      } else {
        this.msgFunilErrorSemCampos = true;
        this.textAddFunil = "Preencha os campos";

        setTimeout(() => {
          this.msgFunilErrorSemCampos = false;
          this.textAddFunil = "Criar funil";
        }, 3000);
      }
      // console.log("cadastrou!");
      // console.log(this.nome, this.limpezaEm, this.descricao, this.etapas);
    },

    fetchFunil() {
      api.getAllFunil().then((res) => {
        // console.log(res);
        if (res.status === 200) {
          this.funis = res.data.filter((funil) => funil.id_user === this.id_user);
        }
      });
    },
  },
  mounted() {
    let token = this.token;
    let decode = jwtDecode(token);
    let id_user = decode.id_user;
    this.userName = decode.nome;
    this.userSobrenome = decode.sobrenome;

    this.id_user = id_user;

    this.corretorResponsavel = `${this.userName} ${this.userSobrenome}`;

    this.fetchFunil();
    this.fetchVenda()
    this.fetchLocacao()
  },
};
</script>
<style>
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

.optgroup-label {
  background-color: #f0f2f5;
  font-size: 13px;
  /* Ajuste o tamanho da fonte */
  font-weight: 500;
  /* Ajuste o peso da fonte */
  color: #000;
}

/* Não é possível aplicar estilos diretamente em <option>, então a estilização será para o <select> */
.backOption {
  background-color: #fff;
}

.btn-orange {
  color: #fff;
  /* Texto branco */
  border: none;
  /* Remove a borda padrão */
  background-color: #ff9702;
  box-shadow: 0 0 5px rgba(255, 151, 2, 0.6), inset 0 0 1px rgba(0, 0, 0, 0.6);
  /* Sombra laranja */
  transition: background-color 0.3s, box-shadow 0.3s;
  /* Transições suaves */
  padding: 23px 15px;
}

.btn-red {
  color: #fff;
  border: none;
  background-color: #f61212;
  transition: background-color 0.3s, box-shadow 0.3s;
  /* Transições suaves */
  box-shadow: 0 0 5px rgba(248, 67, 67, 0.6), inset 0 0 1px rgba(0, 0, 0, 0.6);
}

.btn-red:hover {
  background-color: #f61212;
  /* Laranja mais escuro ao passar o mouse */
  color: #fff;
  /* Garantir que o texto permaneça branco */
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
  margin-left: -30px;
}

.tr-hover:hover {
  background-color: #f0f2f5;
}
</style>
