<template>
  <div class="wrapper">
    <SideBar />
    <div class="main">
      <NavBar />
      <main class="content">
        <
        <div class="container-fluid p-0">
          <h1 class="h3 mb-3"><strong>Cadastro de usuários |</strong> Zonu</h1>
          <div class="row">
            <div class="col-md-12 col-xl-12">
              <div class="card mb-3">
                <div class="card-header">
                  <h5 class="card-title mb-0">
                    <i class="fa fa-user"></i> Crie um novo usuário
                  </h5>
                </div>
                <div class="card-body">
                  <div class="container-fluid">
                    <div class="row">
                      <div
                        v-if="msgSuccess"
                        class="alert alert-success mt-3"
                        role="alert"
                      >
                        <i class="fa fa-check"></i> Conta criada com sucesso!
                        <span style="float: inline-end"
                          ><i class="fa fa-qrcode"></i
                        ></span>
                      </div>
                      <div
                        v-if="msgErrorNull"
                        class="alert alert-danger mt-3"
                        role="alert"
                      >
                        <i class="fa fa-ban"></i> Por favor, não deixe nenhum
                        campo vazio!
                      </div>
                      <div>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                          <li class="nav-item" role="presentation">
                            <button
                              class="nav-link active"
                              id="home-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#home-tab-pane"
                              type="button"
                              role="tab"
                              aria-controls="home-tab-pane"
                              aria-selected="true"
                            >
                              Team Zonu
                            </button>
                          </li>
                          <li class="nav-item" role="presentation">
                            <button
                              class="nav-link"
                              id="profile-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#profile-tab-pane"
                              type="button"
                              role="tab"
                              aria-controls="profile-tab-pane"
                              aria-selected="false"
                            >
                              Cliente Zonu
                            </button>
                          </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                          <div
                            class="tab-pane fade show active"
                            id="home-tab-pane"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                            tabindex="0"
                          >
                            <div class="row mt-4">
                              <div v-if="iniciais" class="col-md-7">
                                <div
                                  class="avatar-null rounded me-1 mb-4"
                                  style="
                                    width: 128px;
                                    height: 128px;
                                    font-size: 40px;
                                    margin-left: auto;
                                    margin-right: auto;
                                    display: block;
                                    justify-content: center;
                                    text-align: center;
                                    padding-top: 30px;
                                  "
                                >
                                  {{ iniciais }}
                                </div>
                              </div>

                              <label for="nome" class="mb-4"
                                ><small
                                  ><strong
                                    ><i class="fa fa-user"></i> Dados sobre o
                                    colaborador Zonu</strong
                                  ></small
                                ></label
                              >

                              <div class="form-group col-md-6">
                                <label for="nome"
                                  ><small><strong>Nome</strong></small></label
                                >
                                <input
                                  type="text"
                                  v-model="nome"
                                  class="form-control mt-2"
                                  id="nome"
                                  placeholder="Digite o nome"
                                />
                              </div>
                              <div class="form-group col-md-6">
                                <label for="nome"
                                  ><small
                                    ><strong>Sobrenome</strong></small
                                  ></label
                                >
                                <input
                                  type="text"
                                  v-model="sobrenome"
                                  class="form-control mt-2"
                                  id="nome"
                                  placeholder="Digite o sobrenome"
                                />
                              </div>
                              <div class="form-group col-md-12 mt-3">
                                <label for="nome"
                                  ><small><strong>E-mail</strong></small></label
                                >
                                <input
                                  type="email"
                                  v-model="email"
                                  class="form-control mt-2"
                                  id="nome"
                                  placeholder="Insira um e-mail válido"
                                />
                              </div>
                              <div class="form-group col-md-6 mt-3">
                                <label for="nome"
                                  ><small><strong>Senha</strong></small></label
                                >
                                <input
                                  type="password"
                                  required
                                  v-if="!mostrarSkeleton"
                                  class="form-control"
                                  v-model="senha"
                                  :class="{
                                    'is-invalid':
                                      !senhaValida && senha.length > 0,
                                  }"
                                  @input="validarSenha"
                                  placeholder="Digite sua senha"
                                />

                                <p
                                  class="text-warning mt-2"
                                  v-if="!senhaValida && senha.length > 0"
                                >
                                  <small>
                                    <i class="fa fa-bell"></i> Sua senha deve
                                    ter no mínimo 8 caracteres, número e uma
                                    letra MAIÚSCULA.
                                  </small>
                                </p>
                              </div>
                              <div class="form-group col-md-6 mt-3">
                                <label for="nome"
                                  ><small
                                    ><strong>Confirme a senha</strong></small
                                  ></label
                                >

                                <input
                                  type="password"
                                  required
                                  v-if="!mostrarSkeleton"
                                  class="form-control"
                                  v-model="confimSenha"
                                  placeholder="Digite a senha novamente"
                                />

                                <p
                                  class="text-danger mt-2"
                                  v-if="confimSenha && !passwordsMatch"
                                >
                                  <i class="fa fa-ban"></i> As senhas não
                                  conferem!
                                </p>
                                <p
                                  class="text-success mt-2"
                                  v-if="confimSenha && passwordsMatch"
                                >
                                  <i class="fa fa-check"></i> As senhas conferem
                                </p>
                              </div>

                              <div class="form-group col-md-6 mt-3">
                                <label for="nome"
                                  ><small
                                    ><strong>Nivel de acesso</strong></small
                                  ></label
                                >
                                <select
                                  v-model="selectNivel"
                                  type="text"
                                  class="form-control mt-2"
                                  id="nome"
                                  placeholder="Digite seu nome"
                                >
                                  <option disabled selected>Escolha</option>
                                  <option
                                    v-for="item in niveis"
                                    :value="item.id_nivel"
                                  >
                                    {{ item.label }}
                                  </option>
                                </select>
                              </div>

                              <div
                                class="mt-4 d-grid gap-2 d-md-flex justify-content-md-end"
                              >
                                <button
                                  :disabled="autenticando"
                                  @click="handleSalvarUserZonu()"
                                  class="btn btn-success"
                                  type="button"
                                >
                                  {{ textoBotao }}
                                  <span
                                    v-if="autenticando"
                                    class="spinner-border spinner-border-sm"
                                    aria-hidden="true"
                                  ></span>
                                  <span
                                    v-if="autenticando"
                                    class="visually-hidden"
                                    >Aguarde...</span
                                  >
                                </button>
                              </div>
                            </div>
                          </div>

                          <div
                            class="tab-pane fade"
                            id="profile-tab-pane"
                            role="tabpanel"
                            aria-labelledby="profile-tab"
                            tabindex="0"
                          >
                            <p v-if="msgCnpjActive" class="text-danger mt-2">
                              <i class="fa fa-circle-exclamation"></i> Desculpe,
                              mas já temos esse CNPJ em nossa base de dados.
                              Volte e insira outro.
                            </p>

                            <div
                              v-if="emailValid"
                              class="alert alert-warning alert-dismissible fade show"
                              role="alert"
                            >
                              <strong
                                ><i class="fa fa-bell"></i> Atenção!</strong
                              >
                              Já temos esse E-mail cadastrado.
                            </div>

                            <div
                              v-if="erro"
                              class="alert alert-danger alert-dismissible fade show"
                              role="alert"
                            >
                              <strong
                                ><i class="fa fa-ban"></i> Desculpe!</strong
                              >
                              Houve um problema ao cadastrar, tente novamente!
                            </div>

                            <div class="row mt-4">
                              <label for="nome" class="mb-4"
                                ><small
                                  ><strong
                                    ><i class="fa fa-user"></i> Dados sobre o
                                    operador da conta</strong
                                  ></small
                                ></label
                              >

                              <div class="form-group col-md-6">
                                <label for="nome"
                                  ><small><strong>Nome</strong></small></label
                                >
                                <input
                                  type="text"
                                  v-model="nome"
                                  class="form-control mt-2"
                                  id="nome"
                                  placeholder="Digite o nome"
                                />
                              </div>
                              <div class="form-group col-md-6">
                                <label for="nome"
                                  ><small
                                    ><strong>Sobrenome</strong></small
                                  ></label
                                >
                                <input
                                  type="text"
                                  v-model="sobrenome"
                                  class="form-control mt-2"
                                  id="nome"
                                  placeholder="Digite o sobrenome"
                                />
                              </div>
                              <div class="form-group col-md-12 mt-3">
                                <label for="nome"
                                  ><small><strong>E-mail</strong></small></label
                                >
                                <input
                                  type="email"
                                  required
                                  v-if="!mostrarSkeleton"
                                  class="form-control"
                                  v-model="email"
                                  placeholder="Digite um e-mail válido"
                                />

                                <p v-if="emailValid" class="text-danger mt-2">
                                  <i class="fa fa-circle-exclamation"></i>
                                  Por favor, forneça um e-mail válido.
                                </p>
                              </div>
                              <div class="form-group col-md-6 mt-3">
                                <label for="nome"
                                  ><small><strong>Senha</strong></small></label
                                >
                                <input
                                  type="password"
                                  required
                                  v-if="!mostrarSkeleton"
                                  class="form-control"
                                  v-model="senha"
                                  :class="{
                                    'is-invalid':
                                      !senhaValida && senha.length > 0,
                                  }"
                                  @input="validarSenha"
                                  placeholder="Digite sua senha"
                                />

                                <p
                                  class="text-warning mt-2"
                                  v-if="!senhaValida && senha.length > 0"
                                >
                                  <small>
                                    <i class="fa fa-bell"></i> Sua senha deve
                                    ter no mínimo 8 caracteres, número e uma
                                    letra MAIÚSCULA.
                                  </small>
                                </p>
                              </div>
                              <div class="form-group col-md-6 mt-3">
                                <label for="nome"
                                  ><small
                                    ><strong>Confirme a senha</strong></small
                                  ></label
                                >
                                <input
                                  type="password"
                                  required
                                  v-if="!mostrarSkeleton"
                                  class="form-control"
                                  v-model="confimSenha"
                                  placeholder="Digite a senha novamente"
                                />

                                <p
                                  class="text-danger mt-2"
                                  v-if="confimSenha && !passwordsMatch"
                                >
                                  <i class="fa fa-ban"></i> As senhas não
                                  conferem!
                                </p>
                                <p
                                  class="text-success mt-2"
                                  v-if="confimSenha && passwordsMatch"
                                >
                                  <i class="fa fa-check"></i> As senhas conferem
                                </p>
                              </div>

                              <hr class="mt-4" />
                              <label for="nome"
                                ><small
                                  ><strong
                                    ><i class="fa fa-building"></i> Dados sobre
                                    a empresa</strong
                                  ></small
                                ></label
                              >

                              <div class="form-group col-md-3 mt-3">
                                <label for="nome"
                                  ><small
                                    ><strong>Telefone</strong></small
                                  ></label
                                >
                                <input
                                  v-model="telefone"
                                  type="text"
                                  @input="aplicaMascaraTelefone"
                                  class="form-control mt-2"
                                  id="nome"
                                  placeholder="(00) 90000-0000"
                                />
                              </div>
                              <div class="form-group col-md-3 mt-3">
                                <label for="nome"
                                  ><small><strong>CEP</strong></small></label
                                >
                                <input
                                  type="text"
                                  required
                                  v-if="!mostrarSkeleton"
                                  @input="aplicaMascaraCEP"
                                  class="form-control mt-2"
                                  v-model="buscarCEP"
                                  placeholder="000000-000"
                                />
                                <p v-if="msgErrorCep" class="text-danger mt-2">
                                  <small
                                    ><i class="fa fa-check"></i> Cep
                                    inválido</small
                                  >
                                </p>
                              </div>
                              <div class="form-group col-md-6 mt-3">
                                <label for="nome"
                                  ><small
                                    ><strong>Endereço</strong></small
                                  ></label
                                >
                                <input
                                  type="text"
                                  disabled
                                  v-model="logradouro"
                                  class="form-control mt-2"
                                  id="nome"
                                  placeholder="Aguardando"
                                />
                              </div>

                              <div
                                v-if="msgErrorCnpj"
                                class="mt-2 alert alert-danger alert-dismissible fade show"
                                role="alert"
                              >
                                <strong
                                  ><i class="fa fa-ban"></i>
                                  Lamentamos...</strong
                                >
                                Seu CNPJ não é válido, tenho outro.
                              </div>

                              <div class="form-group col-md-6 mt-3">
                                <label for="nome"
                                  ><small><strong>CNPJ</strong></small></label
                                >
                                <input
                                  type="text"
                                  v-model="cnpj"
                                  class="form-control mt-2"
                                  id="nome"
                                  placeholder="00.000.000/0001-00"
                                  @input="aplicaMascaraCNPJ"
                                />
                              </div>
                              <div class="form-group col-md-6 mt-3">
                                <label for="nome"
                                  ><small
                                    ><strong>Razão Social</strong></small
                                  ></label
                                >
                                <input
                                  type="text"
                                  v-model="razao_social"
                                  disabled
                                  class="form-control mt-2"
                                  id="nome"
                                  placeholder="..."
                                />
                              </div>

                              <div
                                class="mt-4 d-grid gap-2 d-md-flex justify-content-md-end"
                              >
                                <button
                                  :disabled="autenticando"
                                  @click="handleSalvarUserConstrutora()"
                                  class="btn btn-success"
                                  type="button"
                                >
                                  {{ textoBotaoEmpresa }}
                                  <span
                                    v-if="autenticando"
                                    class="spinner-border spinner-border-sm"
                                    aria-hidden="true"
                                  ></span>
                                  <span
                                    v-if="autenticando"
                                    class="visually-hidden"
                                    >Aguarde...</span
                                  >
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
            </div>

            <div class="col-md-12 col-xl-12">
              <div class="card mb-3">
                <div class="card-header">
                  <h5 class="card-title mb-0">
                    <i class="fa fa-building"></i> Lista de usuários
                  </h5>
                </div>
                <div class="card-body">
                  <div
                    v-if="msgSuccessEdit"
                    class="alert alert-success mt-3"
                    role="alert"
                  >
                    <i class="fa fa-check"></i> Status atualizado com sucesso!
                  </div>

                  <div
                    v-if="msgSuccessDelete"
                    class="alert alert-success mt-3"
                    role="alert"
                  >
                    <i class="fa fa-check"></i> Usuário Excluído com sucesso!
                  </div>
                  <div class="container-fluid">
                    <div class="row">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">Nome</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Nivel</th>
                            <th scope="col">Status</th>
                            <th scope="col">Empresa</th>
                            <th scope="col">Ação</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="item in clientesOnCurrentPage"
                            :key="item.id_user"
                          >
                            <th scope="row">
                              <div class="col-3">
                                <div
                                  class="avatar-null rounded me-1"
                                  alt="Avatar"
                                  style="width: 50px; height: 50px"
                                >
                                  {{ item.iniciais }}
                                </div>
                              </div>
                            </th>
                            <td>{{ item.nome }} {{ item.sobrenome }}</td>
                            <td>{{ item.email }}</td>
                            <td v-if="item.perfil == null">N/A</td>
                            <td v-if="item.perfil !== null">
                              {{ item.perfil.telefone }}
                            </td>
                            <td v-if="item.id_nivel == 1">
                              <span class="badge text-bg-dark"
                                >Administrador</span
                              >
                            </td>
                            <td v-if="item.id_nivel == 2">
                              <span class="badge text-bg-warning">Suporte</span>
                            </td>

                            <td v-if="item.id_status == 1">
                              <span class="badge text-bg-success">Ativo</span>
                            </td>
                            <td v-if="item.id_status == 2">
                              <span class="badge text-bg-danger">Inativo</span>
                            </td>
                            <td v-if="item.perfil == null">Team Zonu</td>
                            <td v-if="item.perfil !== null">
                              {{ item.perfil.razao_social }}
                            </td>
                            <td>
                              {{ console.log(item) }}
                              <button
                                @click="handleEditModal(item.id_user)"
                                type="button"
                                class="btn btn-warning"
                                style="
                                  --bs-btn-padding-y: 0.25rem;
                                  --bs-btn-padding-x: 0.5rem;
                                  --bs-btn-font-size: 0.75rem;
                                  margin-right: 6px;
                                "
                              >
                                <i class="fa fa-edit"></i>
                              </button>
                              <button
                                v-if="item.id_status == 2"
                                @click="handleEditStatusAtivate(item.id_user)"
                                type="button"
                                class="btn btn-success"
                                style="
                                  --bs-btn-padding-y: 0.25rem;
                                  --bs-btn-padding-x: 0.5rem;
                                  --bs-btn-font-size: 0.75rem;
                                  margin-right: 6px !important;
                                "
                              >
                                <i class="fa fa-check"></i>
                              </button>
                              <button
                                v-if="item.id_status == 1"
                                @click="handleEditStatusBlock(item.id_user)"
                                type="button"
                                class="btn btn-info"
                                style="
                                  --bs-btn-padding-y: 0.25rem;
                                  --bs-btn-padding-x: 0.5rem;
                                  --bs-btn-font-size: 0.75rem;
                                  margin-right: 6px !important;
                                "
                              >
                                <i class="fa fa-ban"></i>
                              </button>
                              <button
                                @click="handleDeleteUser(item.id_user)"
                                type="button"
                                class="btn btn-danger"
                                style="
                                  --bs-btn-padding-y: 0.25rem;
                                  --bs-btn-padding-x: 0.5rem;
                                  --bs-btn-font-size: 0.75rem;
                                "
                              >
                                <i class="fa fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <div
                        class="d-grid mt-3 mb-3 gap-2 d-md-flex justify-content-md-end"
                      >
                        <button
                          class="btn btn-dark btn-sm"
                          @click="previousPageCliente()"
                          :disabled="currentPageCliente <= 1"
                        >
                          Anterior
                        </button>
                        <button
                          class="btn btn-dark btn-sm"
                          style="margin-right: 3% !important"
                          @click="nextPageCliente()"
                          :disabled="currentPageCliente >= totalPagesClientes"
                        >
                          Proximo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  </div>
</template>
<script>
import SideBar from "../../../components/sidebar/index.vue";
import NavBar from "../../../components/navbar/index.vue";
import Footer from "../../../components/footer/index.vue";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import _ from "lodash";

import api from "../../../../service/api/index.js";
export default {
  name: "UsuariosView",
  data() {
    return {
      tabCliente: false,
      tabZonu: false,
      selectTab: false,

      niveis: [],

      msgErrorCnpj: false,
      msgSuccessCnpj: false,
      msgSuccessSenha: false,
      msgErrorSenha: false,
      campoNullError: false,
      msgErrorCep: false,
      msgCnpjActive: false,

      msgSuccess: true,
      senhaValid: false,
      emailValid: false,

      cnpj: "",
      razao_social: "",
      nome: "",
      sobrenome: "",
      email: "",
      senha: "",
      confimSenha: "",
      telefone: "",
      buscarCEP: "",
      logradouro: "",
      complemento: "",
      numero: "",
      cidade: "",
      estado: "",
      bairro: "",
      selectNivel: "",
      msgSuccess: false,
      msgErrorNull: false,

      textoBotao: "Criar novo usuário",
      textoBotaoEmpresa: "Criar uma nova construtora",
      autenticando: false,

      listUsers: [],

      msgSuccessEdit: false,
      msgSuccessDelete: false,

      currentPageCliente: 1,
      perPageCliente: 5,
      searchCliente: "",

      senhaValida: true,
    };
  },
  components: {
    SideBar,
    NavBar,
    Footer,
  },
  watch: {
    cnpj(newVal) {
      this.debouncedCheckCNPJ();
    },
    buscarCEP(newVal, oldVal) {
      if (newVal.length === 9 && newVal !== oldVal) {
        this.debouncedCheckCEP();
      }
    },
  },
  created() {
    this.debouncedCheckCNPJ = _.debounce(this.consultarCNPJ, 100);
    this.debouncedCheckCEP = _.debounce(this.consultarCEP, 100);
  },
  computed: {
    clientesOnCurrentPage() {
      const startIndex = (this.currentPageCliente - 1) * this.perPageCliente;
      const endIndex = startIndex + this.perPageCliente;
      return this.listUsers
        .filter((usuario) => {
          return usuario.nome
            .toLowerCase()
            .includes(this.searchCliente.toLowerCase());
        })
        .slice(startIndex, endIndex);
    },
    totalPagesClientes() {
      return Math.ceil(
        this.listUsers.filter((usuario) => {
          this.currentPageCliente = 1;
          return usuario.nome
            .toLowerCase()
            .includes(this.searchCliente.toLowerCase());
        }).length / this.perPageCliente
      );
    },
    passwordsMatch() {
      return this.senha === this.confimSenha;
    },
    iniciais() {
      let inicialNome = this.nome.charAt(0);
      let inicialSobrenome = this.sobrenome.charAt(0);
      return `${inicialNome}${inicialSobrenome}`.toUpperCase().trim();
    },
  },
  mounted() {
    setTimeout(() => {
      this.mostrarSkeleton = false;
    }, 2000);

    let token = localStorage.getItem("token");
    this.token = token;
    let decode = jwtDecode(token);

    this.tabZonu = true;
    this.selectTab = true;

    this.fetchUsuarios();
    this.fetchNivel();
  },

  created() {
    this.fetchUsuarios();
  },

  methods: {
    handledSelect() {
      let escolha = this.selectTab;

      if (escolha == true) {
        this.tabZonu = true;
        this.tabCliente = false;
      } else {
        this.tabCliente = true;
        this.tabZonu = false;
      }
    },
    aplicaMascaraCNPJ() {
      let v = this.cnpj;

      v = v.replace(/\D/g, "");
      if (v.length > 14) {
        v = v.substring(0, 14);
      }

      v = v.replace(/^(\d{2})(\d)/, "$1.$2");
      v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
      v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
      v = v.replace(/(\d{4})(\d)/, "$1-$2");

      this.cnpj = v;
    },
    aplicaMascaraCEP() {
      let v = this.buscarCEP;

      v = v.replace(/\D/g, "");
      if (v.length > 8) {
        v = v.substring(0, 8);
      }

      v = v.replace(/^(\d{5})(\d)/, "$1-$2");

      this.buscarCEP = v;
    },
    aplicaMascaraTelefone() {
      let v = this.telefone;

      v = v.replace(/\D/g, "");
      if (v.length > 11) {
        v = v.substring(0, 11);
      }
      v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
      v = v.replace(/(\d{5})(\d)/, "$1-$2");

      this.telefone = v;
    },
    async consultarCNPJ() {
      if (this.cnpj.length === 18) {
        const cnpj = this.cnpj.replace(/\D/g, "");
        try {
          const response = await axios.get(
            `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`
          );

          if (response.data.descricao_situacao_cadastral == "ATIVA") {
            this.razao_social = response.data.razao_social;
            this.msgSuccessCnpj = true;
            this.msgErrorCnpj = false;
          } else {
            this.msgErrorCnpj = true;
            this.msgSuccessCnpj = false;
          }
        } catch (error) {
          this.msgErrorCnpj = true;
          this.msgSuccessCnpj = false;
        }
      }
    },
    validarSenha() {
      const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{6,}$/;
      this.senhaValida = regex.test(this.senha);
    },
    toggleMostrarSenha() {
      this.mostrarSenha = !this.mostrarSenha;
    },
    async consultarCEP() {
      if (this.buscarCEP.length === 9) {
        const cep = this.buscarCEP.replace(/\D/g, "");

        try {
          const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

          console.log("Aqui está a resposta do CEP ======>", res);

          // Correção nas propriedades de acordo com a resposta da API
          let rua = res.data.logradouro;
          let bairro = res.data.bairro;
          let cidade = res.data.localidade;
          let estado = res.data.uf;

          this.logradouro = rua;
          this.bairro = bairro;
          this.cidade = cidade;
          this.estado = estado;
        } catch (error) {
          console.error("Erro ao consultar CEP: ", error);
        }
      }
    },
    handleSalvarUserZonu() {
      this.textoBotao = "Salvando...";
      this.autenticando = true;

      let nome = this.nome;
      let sobrenome = this.sobrenome;
      let email = this.email;
      let senha = this.senha;
      let selectNivel = this.selectNivel;

      if (
        nome !== "" &&
        sobrenome !== "" &&
        email !== "" &&
        senha !== "" &&
        selectNivel
      ) {
        if (selectNivel === 1) {
          api.cadastroAdmin(nome, sobrenome, email, senha).then((res) => {
            if (res.status == 202) {
              this.nome = "";
              this.sobrenome = "";
              this.email = "";
              this.senha = "";
              this.confimSenha = "";
              this.selectNivel = "";
              this.msgSuccess = true;
              this.textoBotao = "Criar novo usuário";
              this.autenticando = false;

              this.fetchUsuarios();
            }
          });
        }

        if (selectNivel === 2) {
          api
            .cadastroEquipe(nome, sobrenome, email, senha, selectNivel)
            .then((res) => {
              if (res.status == 202) {
                this.nome = "";
                this.sobrenome = "";
                this.email = "";
                this.senha = "";
                this.confimSenha = "";
                this.selectNivel = "";
                this.msgSuccess = true;
                this.textoBotao = "Criar novo usuário";
                this.autenticando = false;

                this.fetchUsuarios();
              }
            });
        }
      } else {
        this.msgErrorNull = true;
        this.textoBotao = "Criar novo usuário";
        this.autenticando = false;

        setTimeout(() => {
          this.msgErrorNull = false;
        }, 3000);
      }
    },
    handleSalvarUserConstrutora() {
      this.textoBotao = "Salvando...";
      this.autenticando = true;

      let nome = this.nome;
      let sobrenome = this.sobrenome;
      let email = this.email;
      let senha = this.senha;
      let cnpj = this.cnpj;
      let razao_social = this.razao_social;
      let telefone = this.telefone;
      let cep = this.cep;
      let endereco = this.endereco;

      if (
        nome !== "" &&
        sobrenome !== "" &&
        email !== "" &&
        senha !== "" &&
        telefone &&
        cep &&
        endereco != ""
      ) {
        api
          .cadastro(
            nome,
            sobrenome,
            email,
            senha,
            razao_social,
            cnpj,
            telefone,
            cep,
            endereco
          )
          .then((res) => {
            if (res.status == 202) {
              this.nome = "";
              this.sobrenome = "";
              this.email = "";
              this.senha = "";
              this.cnpj = "";
              this.razao_social = "";
              this.cep = "";
              this.endereco = "";
              this.msgSuccess = true;
              this.textoBotao = "Criar novo usuário";
              this.autenticando = false;
            }

            setTimeout(() => {
              this.msgSuccess = false;
            }, 3000);
          });
      } else {
        this.msgErrorNull = true;
        this.textoBotao = "Criar novo usuário";
        this.autenticando = false;

        setTimeout(() => {
          this.msgErrorNull = false;
        }, 3000);
      }
    },
    handleEditModal(user) {
      this.selectedUser = user;
      this.nome = user.nome;
      this.email = user.email;
      this.telefone = user.perfil.telefone;
      this.razao_social = user.perfil.razao_social;
      // Abrir o modal usando jQuery ou Bootstrap
      $("#modalEdit" + user.id_user).modal("show");
    },
    fetchUsuarios() {
      api.listusuarios().then((res) => {
        let usuarios = res.data.response;

        // Filtrar usuários com id_nivel 1, 2 ou 4
        let filteredUsuariosTime = usuarios.filter(
          (usuario) =>
            usuario.id_nivel === 1 ||
            usuario.id_nivel === 2 ||
            usuario.id_nivel === 4
        );

        // Remover duplicatas (caso necessário)
        let uniqueUsuarios = [];
        let ids = new Set();
        filteredUsuariosTime.forEach((usuario) => {
          if (!ids.has(usuario.id_user)) {
            ids.add(usuario.id_user);
            uniqueUsuarios.push(usuario);
          }
        });

        // Adicionar iniciais a cada usuário
        uniqueUsuarios = uniqueUsuarios.map((usuario) => {
          usuario.iniciais =
            usuario.nome.charAt(0) + usuario.sobrenome.charAt(0);
          return usuario;
        });

        this.listUsers = uniqueUsuarios;
      });
    },
    handleEditStatusBlock(id) {
      let id_user = id;
      let status = 2;

      api.editStatusUser(id_user, status).then((res) => {
        if (res.status == 201) {
          this.fetchUsuarios();
          this.msgSuccessEdit = true;

          setTimeout(() => {
            this.msgSuccessEdit = false;
          }, 3000);
        }
      });
    },
    handleEditStatusAtivate(id) {
      let id_user = id;
      let status = 1;

      api.editStatusUser(id_user, status).then((res) => {
        if (res.status == 201) {
          this.fetchUsuarios();
          this.msgSuccessEdit = true;

          setTimeout(() => {
            this.msgSuccessEdit = false;
          }, 3000);
        }
      });
    },
    handleDeleteUser(id) {
      let id_user = id;

      api.deleteUser(id_user).then((res) => {
        if (res.status == 202) {
          this.fetchUsuarios();
          this.msgSuccessDelete = true;

          setTimeout(() => {
            this.msgSuccessDelete = false;
          }, 3000);
        }
      });
    },
    previousPageCliente() {
      if (this.currentPageCliente > 1) {
        this.currentPageCliente -= 1;
      }
    },
    nextPageCliente() {
      if (this.currentPageCliente < this.totalPagesClientes) {
        this.currentPageCliente += 1;
      }
    },
    validarSenha() {
      const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{6,}$/;
      this.senhaValida = regex.test(this.senha);
    },
    fetchNivel() {
      api
        .listNivel()
        .then((res) => {
          let niveis = res.data.response;

          let niveisFiltrados = niveis.filter(
            (nivel) => nivel.id_nivel === 1 || nivel.id_nivel === 2
          );
          this.niveis = niveisFiltrados;
        })
        .then();
    },
  },
};
</script>
