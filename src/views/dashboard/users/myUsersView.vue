<script>
import Navbar from "../../../components/navbar/navbar-imobiliaria.vue";
import Footer from "../../../components/footer/index.vue";
import { jwtDecode } from "jwt-decode";
import _ from "lodash";
import $ from "jquery";

import api from "../../../../service/api/index.js";
import apiUser from "../../../../service/api/usuarios/index";
import apiAuth from "../../../../service/api/auth/index";
import axios from "axios";
import EditSubImobiModal from "@/views/imobiliaria/EditSubImobiModal.vue";

export default {
  name: "MyUsersView",

  data() {
    return {
      tabCliente: false,
      tabZonu: false,
      selectTab: false,
      msgErrorNull: false,
      listUsers: [],
      msgSuccess: "",
      currentPageCliente: 1,
      perPageCliente: 5,
      searchCliente: "",

      msgErrorCnpj: false,
      msgSuccessCnpj: false,
      msgSuccessSenha: false,
      msgErrorSenha: false,
      campoNullError: false,
      msgErrorCep: false,
      msgCnpjActive: false,

      msgSuccess: false,
      senhaValid: false,
      emailValid: false,

      links: [],
      nome: "",
      sobrenome: "",
      email: "",
      senha: "",
      confimSenha: "",
      textoBotao: "Criar novo usuário",

      msgSuccessEdit: false,
      msgSuccessDelete: false,

      msgMaxUsers: false,


      searchCliente: "",

      senhaValida: true,

      telefone: "",
      buscarCEP: "",
      cnpj: "",
      razao_social: "",
      logradouro: "",
      complemento: "",
      numero: "",
      cidade: "",
      estado: "",
      bairro: "",

      perfil: "",

      msgErrorEmail: false,
    };
  },

  components: {
    Navbar,
    Footer,
  },

  mounted() {
    let token = localStorage.getItem("token");
    this.token = token;
    let decode = jwtDecode(token);
    this.perfil = decode;
    this.tabZonu = true;
    this.selectTab = true;

    // this.fetcUsuarios();
    this.fetchMyUsers();
    this.fetchMyUsersImobiliaria();
    this.fetcUsuarios();
  },

  created() {
    this.debouncedCheckCNPJ = _.debounce(this.consultarCNPJ, 100);
    this.debouncedCheckCEP = _.debounce(this.consultarCEP, 100);
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

  methods: {
    fetchMyUsersImobiliaria() {
      console.log("id do perfil imobi ===> ", this.perfil.id_user);
      api.listusuarios().then((res) => {
        console.log(res);
      });
    },
    fetchMyUsers() {
      const decoded = jwtDecode(this.token);

      api.listusuarios().then((res) => {
        // console.log(res);
      });
    },

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

    fetcUsuarios() {
      console.log(this.perfil.id_user);
      apiAuth.getMyImobiliaria(this.perfil.id_user).then((res) => {
        let usuarios = res.data.subUsuarios
        console.log("aqui que esta o res ===> ", res);
        // Filtrar os usuários com id_nivel igual a 1
        const idsAdicionados = new Set();
        // let usuariosFiltrados = usuarios.filter(
        //   (user, index, self) =>
        //     user.id_nivel === 6 &&
        //     index === self.findIndex((u) => u.id_user === user.id_user)
        // );
        console.log(usuarios)
        let usuariosFiltrados = usuarios.filter((user) => {
          if (user.id_nivel === 6 && !idsAdicionados.has(user.id_perfil_user)) {
            idsAdicionados.add(user.id_perfil_user);
            return true;
          }
          return false;
        });
        // Atribuir os usuários filtrados ao estado listUsers
        this.listUsers = usuariosFiltrados;
        // Atualizar o total de usuários filtrados
        this.totalUsers = usuariosFiltrados.length;
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

    // funções trazidas da pagina de usuarios do dashboard admim
    validarSenha() {
      const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{6,}$/;
      this.senhaValida = regex.test(this.senha);
    },
    toggleMostrarSenha() {
      this.mostrarSenha = !this.mostrarSenha;
    },
    canRegisterUser(user, currentUserCount) {
      // console.log(user);
      switch (user.id_nivel) {
        case 1:
          // Administrador pode cadastrar quantos quiser
          return { allowed: true };

        case 2:
          // Construtora não pode cadastrar ninguém
          return {
            allowed: false,
            message: "Suportes não podem cadastrar novos usuários.",
          };

        case 3:
          // Construtora não pode cadastrar ninguém
          return {
            allowed: false,
            message: "Construtoras não podem cadastrar novos usuários.",
          };

        case 4:
          // Corretor tem acesso único e não pode cadastrar ninguém
          return {
            allowed: false,
            message: "Corretores não podem cadastrar novos usuários.",
          };

        case 6:
          // Corretor tem acesso único e não pode cadastrar ninguém
          return {
            allowed: false,
            message:
              "Usuários de imobiliárias não podem cadastrar novos usuários.",
          };

        case 5:
          // Imobiliaria pode cadastrar de acordo com o plano
          // console.log("plano ====> ", this.perfil.id_plano, currentUserCount);
          if (this.perfil.id_plano === 1 && currentUserCount >= 4) {
            return {
              allowed: false,
              message: "Plano imobiliária 1 permite cadastrar até 5 usuários.",
            }; //plano 1 da imobiliaria que permite cadastrar apenas 5 usuarios
          } else if (this.perfil.id_plano === 2 && currentUserCount >= 9) {
            return {
              allowed: false,
              message: "Plano imobiliária 2 permite cadastrar até 10 usuários.",
            }; //plano 2 da imobiliaria que permite cadastrar apenas 5 usuarios
          }
          return { allowed: true };

        default:
          // Caso padrão para outros tipos de usuário
          return {
            allowed: false,
            message:
              "Permissão desconhecida. Não é possível cadastrar novos usuários.",
          };
      }
    },
    handleSalvarUserZonu() {
      this.textoBotao = "Salvando...";
      this.autenticando = true;

      let nome = this.nome;
      let sobrenome = this.sobrenome;
      let email = this.email;
      let senha = this.senha;
      let idUser = this.perfil.id_user;
      let razaoSocial = this.razao_social;
      let cnpj = this.cnpj;
      let idPlano = null;
      let telefone = this.telefone;
      let cep = this.buscarCEP;
      let endereco = this.logradouro;
      let complemento = this.complemento;
      let numero = this.numero;
      let cidade = this.cidade;
      let estado = this.estado;
      let bairro = this.bairro;
      let selectNivel = 5;
      // console.log(this.perfil);
      // let selectPlano = this.selectPlano;

      // Verificar a quantidade máxima de usuários permitidos
      const currentUserCount = this.listUsers.length;
      console.log(currentUserCount);
      const permissionCheck = this.canRegisterUser(
        { id_nivel: selectNivel },
        currentUserCount
      );

      // console.log(permissionCheck);
      console.log(nome, sobrenome, email, senha)
      if (!permissionCheck.allowed) {
        this.msgMaxUsers = permissionCheck.message;
        this.textoBotao = "Criar novo usuário";
        this.autenticando = false;

        setTimeout(() => {
          this.msgMaxUsers = false
        }, 3000);
        return;
      } else if (
        nome !== "" &&
        sobrenome !== "" &&
        email !== "" &&
        senha !== "" &&
        selectNivel
      ) {
        apiAuth
          .cadastroSubImobiliaria(
            nome,
            sobrenome,
            email,
            senha,
            idUser
          )
          .then((res) => {
            console.log(res);
            if (res.status === 202) {
              console.log(res.data);
              this.textoBotao = "Criar novo usuário";
              this.autenticando = false;
              this.fetcUsuarios();
            } else if (res.status === 409) {
              this.textoBotao = "Houve um erro..."
              this.msgErrorEmail = true;
              this.autenticando = false;

              setTimeout(() => {
                this.textoBotao = "Criar novo usuário";
                this.msgErrorEmail = false;
              }, 3000);
            } else {
              this.textoBotao = "Houve um erro...";
              this.msgErrorNull = true;
              this.autenticando = false;

              setTimeout(() => {
                this.textoBotao = "Criar novo usuário";
                this.msgErrorNull = false;
              }, 3000);
            }
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

    aplicaMascaraCEP() {
      let v = this.buscarCEP;

      v = v.replace(/\D/g, "");
      if (v.length > 8) {
        v = v.substring(0, 8);
      }

      v = v.replace(/^(\d{5})(\d)/, "$1-$2");

      this.buscarCEP = v;
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

    handleDeleteUser(id) {
      let id_user = id;

      api.deleteSubImobiUser(id_user).then((res) => {
        if (res.status == 200) {
          this.$emit("updateUsers");
          this.msgSuccess = "Usuário Excluído com sucesso!";
          setTimeout(() => {
            this.msgSuccess = "";
            window.location.href = "/meus-usuarios"
          }, 1000);
        }
      });
    },
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
};
</script>

<template>
  <div class="wrapper">
    <div class="main">
      <Navbar />

      <main class="content">
        <div class="container-fluid p-0">
          <h1 class="h3 mb-3"><strong>Cadastro de usuários |</strong> Zonu</h1>
          <div class="row">
            <div class="col-md-12 col-xl-12">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="container-fluid">
                    <div class="row">
                      <!-- {{ console.log(listUsers) }} -->
                      <div v-if="msgSuccess" class="alert alert-success mt-3" role="alert">
                        <i class="fa fa-check"></i> Conta criada com sucesso!
                        <span style="float: inline-end"><i class="fa fa-qrcode"></i></span>
                      </div>
                      <div v-if="msgErrorNull" class="alert alert-danger mt-3" role="alert">
                        <i class="fa fa-ban"></i> Por favor, não deixe nenhum
                        campo vazio!
                      </div>
                      <div v-if="msgMaxUsers" class="alert alert-danger mt-3" role="alert">
                        <i class="fa fa-ban"></i> Máximo de usuários já cadastrados
                      </div>
                      <div v-if="msgErrorEmail" class="alert alert-danger mt-3" role="alert">
                        <i class="fa fa-ban"></i> Email de usuário já cadastrado
                      </div>
                      <div>
                        <div class="tab-content" id="myTabContent">
                          <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                            aria-labelledby="home-tab" tabindex="0">
                            <div class="row mt-4">
                              <div v-if="iniciais" class="col-md-7">
                                <div class="avatar-null rounded me-1 mb-4" style="
                                    width: 128px;
                                    height: 128px;
                                    font-size: 40px;
                                    margin-left: auto;
                                    margin-right: auto;
                                    display: block;
                                    justify-content: center;
                                    text-align: center;
                                    padding-top: 30px;
                                  ">
                                  {{ iniciais }}
                                </div>
                              </div>

                              <label for="nome" class="mb-4"><small><strong><i class="fa fa-user"></i> Dados sobre o
                                    colaborador Zonu</strong></small></label>

                              <div class="form-group col-md-6">
                                <label for="nome"><small><strong>Nome</strong></small></label>
                                <input type="text" v-model="nome" class="form-control mt-2" id="nome"
                                  placeholder="Digite o nome" />
                              </div>
                              <div class="form-group col-md-6">
                                <label for="nome"><small><strong>Sobrenome</strong></small></label>
                                <input type="text" v-model="sobrenome" class="form-control mt-2" id="nome"
                                  placeholder="Digite o sobrenome" />
                              </div>
                              <div class="form-group col-md-12 mt-3">
                                <label for="nome"><small><strong>E-mail</strong></small></label>
                                <input type="email" v-model="email" class="form-control mt-2" id="nome"
                                  placeholder="Insira um e-mail válido" />
                              </div>
                              <div class="form-group col-md-6 mt-3">
                                <label for="nome"><small><strong>Senha</strong></small></label>
                                <input type="password" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="senha" :class="{
                                    'is-invalid':
                                      !senhaValida && senha.length > 0,
                                  }" @input="validarSenha" placeholder="Digite sua senha" />

                                <p class="text-warning mt-2" v-if="!senhaValida && senha.length > 0">
                                  <small>
                                    <i class="fa fa-bell"></i> Sua senha deve
                                    ter no mínimo 8 caracteres, número e uma
                                    letra MAIÚSCULA.
                                  </small>
                                </p>
                              </div>
                              <div class="form-group col-md-6 mt-3">
                                <label for="nome"><small><strong>Confirme a senha</strong></small></label>

                                <input type="password" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="confimSenha" placeholder="Digite a senha novamente" />

                                <p class="text-danger mt-2" v-if="confimSenha && !passwordsMatch">
                                  <i class="fa fa-ban"></i> As senhas não
                                  conferem!
                                </p>
                                <p class="text-success mt-2" v-if="confimSenha && passwordsMatch">
                                  <i class="fa fa-check"></i> As senhas conferem
                                </p>
                              </div>

                              <!-- <div class="form-group col-md-6 mt-3">
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
                              </div> -->

                              <!-- <label for="nome"
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
                              </div> -->

                              <div class="mt-4 d-grid gap-2 d-md-flex justify-content-md-end">
                                <button :disabled="autenticando" @click="handleSalvarUserZonu()" class="btn btn-success"
                                  type="button">
                                  {{ textoBotao }}
                                  <span v-if="autenticando" class="spinner-border spinner-border-sm"
                                    aria-hidden="true"></span>
                                  <span v-if="autenticando" class="visually-hidden">Aguarde...</span>
                                </button>
                              </div>
                              <hr class="mt-4" />
                              <div class="card-header">
                                <h5 class="card-title mb-0">
                                  <i class="fa fa-building"></i> Lista dos meus
                                  usuários
                                </h5>
                              </div>
                              <div class="card-body">

                                <div class="container">
                                  <div class="row">
                                    <table class="table">
                                      <thead>
                                        <tr>
                                          <th scope="col">Nome</th>
                                          <th scope="col">E-mail</th>
                                          <th scope="col">Status</th>
                                          <th scope="col">Ações</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr v-for="user in listUsers" :key="user.id_perfil_user">
                                          {{ console.log(user) }}
                                          <td>{{ user.nome }} {{ user.sobrenome }}</td>
                                          <td>{{ user.email }}</td>
                                          <td v-if="user.id_status == 1"><span
                                              class="badge text-bg-success">Ativo</span></td>
                                          <td v-if="user.id_status == 2"><span
                                              class="badge text-bg-danger">Invativo</span></td>
                                          <td class="row">
                                            <!-- <div class="col-4">
                                              <button @click="openEditModal(item)" type="button" class="btn btn-warning"
                                                style="
                                                  --bs-btn-padding-y: 0.25rem;
                                                  --bs-btn-padding-x: 0.5rem;
                                                  --bs-btn-font-size: 0.75rem;
                                                ">
                                                <i class="fa fa-edit"></i>
                                              </button>
                                            </div> -->
                                            <div class="col-4">
                                              <button @click="handleDeleteUser(user.id_perfil_user)" type="button"
                                                class="btn btn-danger" style="
                                                --bs-btn-padding-y: 0.25rem;
                                                --bs-btn-padding-x: 0.5rem;
                                                --bs-btn-font-size: 0.75rem;
                                                margin-left: -20px !important;
                                              ">
                                                <i class="fa fa-trash"></i>
                                              </button>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- <EditSubImobiModal :item="item" @save="handleEditUsuario" /> -->
        </div>
      </main>

      <Footer />
    </div>
  </div>
</template>