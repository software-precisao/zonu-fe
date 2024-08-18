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
                  v-if="msgSalvarAlteracoesSuccess"
                  class="alert alert-success"
                  role="alert"
                  style="width: 100%"
                >
                  Alterações salvas com sucesso
                </div>
                <div
                  v-if="msgSalvarAlteracoesError"
                  class="alert alert-danger"
                  role="alert"
                  style="width: 100%"
                >
                  Falha ao salvar as alterações
                </div>
                <div
                  v-if="msgSalvarAlteracoesErrorSemEtapa"
                  class="alert alert-danger"
                  role="alert"
                  style="width: 100%"
                >
                  Adicione pelo menos uma etapa
                </div>
                <div
                  v-if="msgSalvarAlteracoesErrorSemCampo"
                  class="alert alert-danger"
                  role="alert"
                  style="width: 100%"
                >
                  Preencha os campos corretamente
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
                      Configuração de funil
                    </h2>
                    <p>Lista de funis existentes</p>
                  </div>
                  <button
                    class="btn btn-orange"
                    style="display: flex; align-items: center; height: 30px"
                    @click="openNovaEtapa"
                  >
                    <i class="align-middle" data-feather="plus"></i>
                    <span style="margin-left: 3px">Nova etapa</span>
                  </button>
                </div>

                <div class="row">
                  <div class="form-group col-4">
                    <label
                      for="nomeFunil"
                      style="font-size: 14px; font-weight: 600"
                      >Nome do funil</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="nomeFunil"
                      v-model="nomeFunil"
                      placeholder="Digite..."
                      style="height: 40px"
                    />
                  </div>

                  <div class="form-group col-4">
                    <label
                      for="descricaoFunil"
                      style="font-size: 14px; font-weight: 600"
                      >Descrição do funil</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="descricaoFunil"
                      v-model="descricaoFunil"
                      placeholder="Digite a descrição do funil"
                      style="height: 40px"
                    />
                  </div>

                  <div class="form-group col-4">
                    <label
                      for="diasLimpezaFunil"
                      style="font-size: 14px; font-weight: 600"
                      >Limpeza em</label
                    >
                    <img
                      :src="InterrSvg"
                      class="ms-2"
                      style="width: 12px; height: 12px"
                    />
                    <input
                      type="text"
                      class="form-control"
                      id="diasLimpezaFunil"
                      v-model="diasLimpezaFunil"
                      placeholder="120"
                      style="height: 40px"
                    />
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
                          <th>Nome da etapa</th>
                          <th>
                            Estagnar em
                            <img
                              :src="InterrSvg"
                              class="ms-2"
                              style="width: 12px; height: 12px"
                            />
                          </th>
                          <th>
                            Qtd Negócios
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
                        <tr class="tr-hover" v-for="item in etapa">
                          <td>
                            <div
                              class="d-flex flex-column"
                              style="font-size: 14px; font-weight: 500"
                            >
                              {{ item.nome_etapa }}
                            </div>
                          </td>
                          <td style="font-size: 14px; font-weight: 500">
                            {{ item.dias_etapa }} Dias
                          </td>
                          <td style="font-size: 14px; font-weight: 500">
                            {{ 0 == "0" ? "-" : "0" }}
                          </td>
                          <td class="text-end">
                            <div class="d-flex justify-content-end">
                              <a
                                class="me-2"
                                @click="openEditarEtapa(item.nome_etapa)"
                                >Editar etapa</a
                              >
                              <a class="" @click="removerEtapa(item.nome_etapa)"
                                >Remover</a
                              >
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div
                  class="mt-6"
                  style="display: flex; justify-content: space-around"
                >
                  <a
                    type="button"
                    class="btn btn-white"
                    style="padding: 10px 20px"
                    href="/seu-crmconfig"
                  >
                    Voltar
                  </a>
                  <button
                    type="button"
                    class="btn btn-success"
                    style="padding: 10px 20px"
                    @click="handleSalvarAlteracoes"
                  >
                    {{ textSalvarAlteacoes }}
                  </button>
                </div>

                <!-- modal de adicionar etapa -->
                <div
                  class="modal fade modalTelefone"
                  id="modalNovaEtapa"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="modalNovaEtapa"
                  aria-hidden="true"
                  ref="modalNovaEtapa"
                >
                  <div
                    class="modal-dialog"
                    style="padding-top: 80px"
                    role="document"
                  >
                    <div class="modal-content">
                      <!-- <div class="modal-header"> -->
                      <div
                        class="modal-header"
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 100%;
                          align-items: flex-start;
                        "
                      >
                        <div
                          v-if="msgAddEtapaSuccess"
                          class="alert alert-success"
                          role="alert"
                          style="width: 100%"
                        >
                          Etapa adicionada com sucesso
                        </div>
                        <div
                          v-if="msgAddEtapaError"
                          class="alert alert-danger"
                          role="alert"
                          style="width: 100%"
                        >
                          Falha ao adicionar a etapa
                        </div>
                        <div
                          v-if="msgAddEtapaErrorSemCampos"
                          class="alert alert-danger"
                          role="alert"
                          style="width: 100%"
                        >
                          Preencha os campos obrigatórios!
                        </div>
                        <h5 class="modal-title" id="exampleModalLabel">
                          Nova etapa
                        </h5>
                        <button
                          type="button"
                          class="close custom-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <!-- </div> -->
                      <div class="modal-body">
                        <!-- Conteúdo do modal de adicionar telefones -->
                        <div class="row">
                          <div class="form-group col-7">
                            <label
                              for="nomeEtapa"
                              style="font-size: 14px; font-weight: 600"
                              >Nome da etapa</label
                            >
                            <div class="input-group">
                              <div class="input-group-prepend"></div>
                              <input
                                type="text"
                                class="form-control"
                                id="nomeEtapa"
                                v-model="nomeEtapa"
                                placeholder="Digite..."
                                style="height: 40px"
                              />
                            </div>
                          </div>
                          <div class="form-group col-5">
                            <label
                              for="estagnarEm"
                              style="font-size: 14px; font-weight: 600"
                              >Estagnar em</label
                            >
                            <img
                              :src="InterrSvg"
                              class="ms-2"
                              style="width: 12px; height: 12px"
                            />
                            <div
                              style="
                                display: flex;
                                justify-content: center;
                                align-items: center;
                              "
                            >
                              <input
                                type="text"
                                class="form-control"
                                id="estagnarEm"
                                v-model="estagnarEm"
                                placeholder="3"
                                style="height: 40px; width: 70%"
                              />
                              <span
                                style="
                                  font-weight: 600;
                                  height: 40px;
                                  width: 30%;
                                  display: flex;
                                  align-items: center;
                                  justify-content: center;
                                  border: 1px solid #d3dceb;
                                  border-top-right-radius: 5px;
                                  border-bottom-right-radius: 5px;
                                "
                                >Dias</span
                              >
                            </div>
                          </div>

                          <div class="form-group mt-3 col-12">
                            <label
                              for="descricao"
                              style="font-size: 13px; font-weight: 600"
                              >Descrição</label
                            >
                            <input
                              id="descricao"
                              type="text"
                              placeholder="Digite a descição da etapa"
                              class="form-control"
                              style="height: 40px"
                              v-model="descricao"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        class="modal-footer"
                        style="display: flex; justify-content: space-between"
                      >
                        <button
                          type="button"
                          class="btn btnModal"
                          style="
                            padding: 10px 15px;
                            border: 1px solid #d3dceb;
                            background-color: #fff;
                            color: #1c0c1e;
                            box-shadow: 0 0 5px rgba(211, 220, 235, 0.6);
                            font-size: 1em;
                            font-weight: 600;
                            cursor: pointer;
                          "
                          data-bs-dismiss="modal"
                        >
                          Cancelar
                        </button>
                        <button
                          type="button"
                          class="btn btnModal2"
                          style="
                            padding: 10px 15px;
                            border: 1px solid #d3dceb;
                            color: #fff;
                            background-color: #31d084;
                            box-shadow: 0 0 5px rgba(49, 208, 132, 0.6),
                              inset 0 0 1px rgba(0, 0, 0, 0.6);
                            font-size: 1em;
                            font-weight: 600;
                            cursor: pointer;
                          "
                          @click="addEtapa"
                        >
                          {{ textAddEtapa }}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- modal de editar etapa -->
                <div
                  class="modal fade modalTelefone"
                  id="modalEditarEtapa"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="modalEditarEtapa"
                  aria-hidden="true"
                  ref="modalEditarEtapa"
                >
                  <div
                    class="modal-dialog"
                    style="padding-top: 80px"
                    role="document"
                  >
                    <div class="modal-content">
                      <div
                        class="modal-header"
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 100%;
                          align-items: flex-start;
                        "
                      >
                        <div
                          v-if="msgeditEtapaSuccess"
                          class="alert alert-success"
                          role="alert"
                          style="width: 100%"
                        >
                          Etapa Editada com sucesso
                        </div>
                        <div
                          v-if="msgeditEtapaError"
                          class="alert alert-danger"
                          role="alert"
                          style="width: 100%"
                        >
                          Falha ao editar a etapa
                        </div>
                        <div
                          v-if="msgeditEtapaErrorSemCampos"
                          class="alert alert-danger"
                          role="alert"
                          style="width: 100%"
                        >
                          Preencha os campos obrigatórios!
                        </div>
                        <h5 class="modal-title" id="exampleModalLabel">
                          Editar etapa
                        </h5>
                        <button
                          type="button"
                          class="close custom-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <div class="row">
                          <div class="form-group col-7">
                            <label
                              for="editarNomeEtapa"
                              style="font-size: 14px; font-weight: 600"
                              >Nome da etapa</label
                            >
                            <div class="input-group">
                              <div class="input-group-prepend"></div>
                              <input
                                type="text"
                                class="form-control"
                                id="editarNomeEtapa"
                                v-model="editarNomeEtapa"
                                placeholder="Digite..."
                                style="height: 40px"
                              />
                            </div>
                          </div>
                          <div class="form-group col-5">
                            <label
                              for="editarEstagnarEm"
                              style="font-size: 14px; font-weight: 600"
                              >Estagnar em</label
                            >
                            <img
                              :src="InterrSvg"
                              class="ms-2"
                              style="width: 12px; height: 12px"
                            />
                            <div
                              style="
                                display: flex;
                                justify-content: center;
                                align-items: center;
                              "
                            >
                              <input
                                type="text"
                                class="form-control"
                                id="editarEstagnarEm"
                                v-model="editarEstagnarEm"
                                placeholder="3"
                                style="height: 40px; width: 70%"
                              />
                              <span
                                style="
                                  font-weight: 600;
                                  height: 40px;
                                  width: 30%;
                                  display: flex;
                                  align-items: center;
                                  justify-content: center;
                                  border: 1px solid #d3dceb;
                                  border-top-right-radius: 5px;
                                  border-bottom-right-radius: 5px;
                                "
                                >Dias</span
                              >
                            </div>
                          </div>

                          <div class="form-group mt-3 col-12">
                            <label
                              for="editarDescricao"
                              style="font-size: 13px; font-weight: 600"
                              >Descrição</label
                            >
                            <input
                              id="editarDescricao"
                              type="text"
                              placeholder="Digite a descição da etapa"
                              class="form-control"
                              style="height: 40px"
                              v-model="editarDescricao"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        class="modal-footer"
                        style="display: flex; justify-content: space-between"
                      >
                        <button
                          type="button"
                          class="btn btnModal"
                          style="
                            padding: 10px 15px;
                            border: 1px solid #d3dceb;
                            background-color: #fff;
                            color: #1c0c1e;
                            box-shadow: 0 0 5px rgba(211, 220, 235, 0.6);
                            font-size: 1em;
                            font-weight: 600;
                            cursor: pointer;
                          "
                          data-bs-dismiss="modal"
                        >
                          Cancelar
                        </button>
                        <button
                          type="button"
                          class="btn btnModal2"
                          style="
                            padding: 10px 15px;
                            border: 1px solid #d3dceb;
                            color: #fff;
                            background-color: #31d084;
                            box-shadow: 0 0 5px rgba(49, 208, 132, 0.6),
                              inset 0 0 1px rgba(0, 0, 0, 0.6);
                            font-size: 1em;
                            font-weight: 600;
                            cursor: pointer;
                          "
                          @click="editEtapa"
                        >
                          {{ textEditarEtapa }}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- modal de remover etapa -->
                <div
                  class="modal fade modalTelefone"
                  id="modalRemoverEtapa"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="modalRemoverEtapa"
                  aria-hidden="true"
                  ref="modalRemoverEtapa"
                >
                  <div
                    class="modal-dialog"
                    style="padding-top: 80px"
                    role="document"
                  >
                    <div class="modal-content">
                      <div
                        class="modal-header"
                        style="
                          display: flex;
                          flex-direction: column;
                          width: 100%;
                          align-items: flex-start;
                        "
                      >
                        <div
                          v-if="msgEtapaRemoveSuccess"
                          class="alert alert-success"
                          role="alert"
                          style="width: 100%"
                        >
                          Etapa Removida com sucesso
                        </div>
                        <div
                          v-if="msgEtapaRemoveError"
                          class="alert alert-danger"
                          role="alert"
                          style="width: 100%"
                        >
                          Falha ao remover a etapa
                        </div>
                        <h5 class="modal-title" id="exampleModalLabel">
                          Remover etapa
                        </h5>
                        <button
                          type="button"
                          class="close custom-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <h2
                          style="
                            font-size: 16px;
                            font-weight: 600;
                            text-align: center;
                            padding: 20px 0;
                          "
                        >
                          Tem certeza que deseja remover essa etapa?
                        </h2>
                      </div>
                      <div
                        class="modal-footer"
                        style="display: flex; justify-content: space-between"
                      >
                        <button
                          type="button"
                          class="btn btnModal"
                          style="
                            padding: 10px 15px;
                            border: 1px solid #d3dceb;
                            background-color: #fff;
                            color: #1c0c1e;
                            box-shadow: 0 0 5px rgba(211, 220, 235, 0.6);
                            font-size: 1em;
                            font-weight: 600;
                            cursor: pointer;
                          "
                          data-bs-dismiss="modal"
                        >
                          Cancelar
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger"
                          style="padding: 10px 15px"
                          @click="removerEtapaYes"
                        >
                          {{ textRemoverEtapa }}
                        </button>
                      </div>
                    </div>
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

export default {
  name: "CrmEditFunil",
  components: {
    NavbarImobiliaria,
    Footer,
    SidebarCrm,
  },
  data() {
    return {
      idFunil: "",
      funil: null,
      nomeFunil: "",
      descricaoFunil: "",
      diasLimpezaFunil: "",
      youtubeLogo,
      InterrSvg,
      trashIcon,

      funilType1: "",
      funilType2: "",

      selectedValue: "",
      selectedValue2: "",

      etapas: [],
      etapasIniciais: 1,

      etapa: [],

      // erros adicionar etapas
      msgAddEtapaSuccess: false,
      msgAddEtapaError: false,
      msgAddEtapaErrorSemCampos: false,

      //adicionar nova etapa
      nomeEtapa: "",
      estagnarEm: "",
      descricao: "",
      textAddEtapa: "Adicionar etapa",

      // editar etapas
      etapaIdEdit: "",
      editarNomeEtapa: "",
      editarEstagnarEm: "",
      editarDescricao: "",
      textEditarEtapa: "Editar Etapa",

      // error editar etapas
      msgeditEtapaSuccess: false,
      msgeditEtapaError: false,
      msgeditEtapaErrorSemCampos: false,

      // remover etapa
      textRemoverEtapa: "Remover",
      etapaIdRemove: "",
      msgEtapaRemoveSuccess: false,
      msgEtapaRemoveError: false,

      // salvar alterações
      msgSalvarAlteracoesSuccess: false,
      msgSalvarAlteracoesError: false,
      msgSalvarAlteracoesErrorSemEtapa: false,
      msgSalvarAlteracoesErrorSemCampo: false,
      textSalvarAlteacoes: "Salvar",
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

    openNovaEtapa() {
      const modal = new bootstrap.Modal(this.$refs.modalNovaEtapa);
      modal.show();
    },

    openEditarEtapa(nome) {
      this.etapaIdEdit = nome;
      this.etapa.map((e) => {
        if (e.nome_etapa == this.etapaIdEdit) {
          this.editarNomeEtapa = e.nome_etapa;
          this.editarEstagnarEm = e.dias_etapa;
          this.editarDescricao = e.descricao_etapa;
        }
      });
      const modal = new bootstrap.Modal(this.$refs.modalEditarEtapa);
      modal.show();
    },

    addEtapa() {
      let nome = this.nomeEtapa;
      let estagnar = this.estagnarEm;
      let descricao = this.descricao;

      this.textAddEtapa = "Adicionando...";
      if (nome != "" && estagnar != "" && descricao != "") {
        this.msgAddEtapaSuccess = true;

        const modalEtapa = bootstrap.Modal.getInstance(
          this.$refs.modalNovaEtapa
        );
        this.etapa.push({
          nome_etapa: nome,
          dias_etapa: estagnar,
          descricao_etapa: descricao,
        });
        setTimeout(() => {
          if (modalEtapa) {
            this.nome = "";
            this.estagnarEm = "";
            this.descricao = "";
            modalEtapa.hide();
          }

          this.msgAddEtapaSuccess = false;
          this.textAddEtapa = "Adicionar etapa";
        }, 3000);
      } else {
        this.msgAddEtapaErrorSemCampos = true;
        this.textAddEtapa = "Preencha os campos";

        setTimeout(() => {
          this.msgAddEtapaErrorSemCampos = false;
          this.textAddEtapa = "Adicionar etapa";
        }, 3000);
      }
    },

    editEtapa() {
      let nome = this.editarNomeEtapa;
      let estagnar = this.editarEstagnarEm;
      let descricao = this.editarDescricao;

      this.textEditarEtapa = "Editando...";
      if (nome != "" && estagnar != "" && descricao != "") {
        this.msgeditEtapaSuccess = true;

        this.etapa.map((e) => {
          if (e.nome_etapa == this.etapaIdEdit) {
            e.nome_etapa = nome;
            e.dias_etapa = estagnar;
            e.descricao_etapa = descricao;
          }
        });

        const modalEtapa = bootstrap.Modal.getInstance(
          this.$refs.modalEditarEtapa
        );
        setTimeout(() => {
          if (modalEtapa) {
            this.editarNomeEtapa = "";
            this.editarEstagnarEm = "";
            this.editarDescricao = "";
            this.etapaIdEdit = "";
            modalEtapa.hide();
          }

          this.msgeditEtapaSuccess = false;
          this.textEditarEtapa = "Editar etapa";
        }, 3000);
      } else {
        this.msgeditEtapaErrorSemCampos = true;
        this.textEditarEtapa = "Preencha os campos";

        setTimeout(() => {
          this.msgeditEtapaErrorSemCampos = false;
          this.textEditarEtapa = "Editar etapa";
        }, 3000);
      }
    },

    removerEtapa(nome) {
      this.etapaIdRemove = nome;
      const modalRemove = new bootstrap.Modal(this.$refs.modalRemoverEtapa);
      modalRemove.show();
    },

    removerEtapaYes() {
      let idRemove = this.etapaIdRemove;

      const originalLength = this.etapa.length;

      this.etapa = this.etapa.filter((e) => e.nome_etapa !== idRemove);

      this.textRemoverEtapa = "Removendo...";
      if (this.etapa.length < originalLength) {
        this.msgEtapaRemoveSuccess = true;

        const modalEtapa = bootstrap.Modal.getInstance(
          this.$refs.modalRemoverEtapa
        );

        setTimeout(() => {
          this.msgEtapaRemoveSuccess = false;
          this.textRemoverEtapa = "Remover";

          if (modalEtapa) {
            this.etapaIdRemove = "";
            modalEtapa.hide();
          }
        }, 2000);
      } else {
        this.msgEtapaRemoveError = true;
        this.textRemoverEtapa = "Remover";

        setTimeout(() => {
          this.msgEtapaRemoveError = false;
        }, 2000);
      }
    },

    handleSalvarAlteracoes() {
      // area das variaveis
      let nome = this.nomeFunil;
      let limpeza = this.diasLimpezaFunil;
      let descricao = this.descricaoFunil;
      let idFunil = this.idFunil;
      let etapa = this.etapa;
      console.log(idFunil);
      this.textSalvarAlteacoes = "Salvando...";
      if (nome != "" && limpeza != "" && descricao != "" && etapa.length > 0) {
        api.putFunil(idFunil, nome, limpeza, descricao, etapa).then((res) => {
          if (res.status === 200) {
            this.msgSalvarAlteracoesSuccess = true;

            setTimeout(() => {
              this.textSalvarAlteacoes = "Salvar";
              this.msgSalvarAlteracoesSuccess = false;
              localStorage.removeItem("ff");
              window.location.href = "/seu-crmconfig";
            }, 3000);
          } else {
            this.msgSalvarAlteracoesError = true;
            this.textSalvarAlteacoes = "Salvar";
            setTimeout(() => {
              this.msgSalvarAlteracoesError = false;
            }, 3000);
          }
        });
      } else {
        if (etapa.length == 0) {
          this.msgSalvarAlteracoesErrorSemEtapa = true;
          this.textSalvarAlteacoes = "Salvar";
          setTimeout(() => {
            this.msgSalvarAlteracoesErrorSemEtapa = false;
          }, 3000);
        } else {
          this.msgSalvarAlteracoesErrorSemCampo = true;
          this.textSalvarAlteacoes = "Salvar";
          setTimeout(() => {
            this.msgSalvarAlteracoesErrorSemCampo = false;
          }, 3000);
        }
        console.log("etapas lenght ===> ", etapa.length);
      }
    },

    fetchFunil() {
      api.getAllFunil().then((res) => {
        if (res.status === 200) {
          this.funis = res.data;
          res.data.map((funil) => {
            if (funil.id_funil == this.idFunil) {
              this.funil = funil;
              console.log(funil);
              this.nomeFunil = funil.nome_funil;
              this.descricaoFunil = funil.descricao;
              this.diasLimpezaFunil = funil.dias_limpeza;
              this.etapa = funil.etapas;
            }
          });
        }
      });
    },
  },

  mounted() {
    this.idFunil = localStorage.getItem("ff");

    this.fetchFunil();
  },
};
</script>
<style>
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
