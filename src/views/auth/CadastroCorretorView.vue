<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6 d-flex flex-column justify-content-center align-items-center p-5">
        <div v-if="mostrarSkeleton" class="mb-5 skeleton-logo"></div>
        <img v-if="!mostrarSkeleton" src="../../../assets/images/logo.svg" class="mb-2" alt="" />

        <div class="area-login px-4">
          <div v-if="mostrarSkeleton" class="skeleton-card"></div>
          <div v-if="!mostrarSkeleton" class="card mt-3" href="/cadastro" style="
              height: 150px;
              width: 150px;
              margin-left: auto;
              margin-right: auto;
              display: block;
            ">
            <div class="card-body">
              <img src="../../../assets/images/iconCorretor.svg"
                style="margin-left: auto; margin-right: auto; display: block" alt="" />
              <p class="text-center mt-3">Corretor</p>
            </div>
          </div>
          <h1 v-if="!mostrarSkeleton" class="title-login mt-5">Vamos lá...</h1>

          <div v-if="mostrarSkeleton" class="skeleton-title-subtitle"></div>
          <p v-if="!mostrarSkeleton">
            Antes de tudo, vamos precisar validar alguns dados.
          </p>

          <div class="alert alert-danger mt-2" v-if="campoNullError">Campos inválidos ou preenchidos incorretamente!
          </div>

          <div class="area-dados-corretor px-2">
            <div class="mt-2">
              <div class="mb-3">
                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">CPF
                </label>
                <input type="text" placeholder="000.000.000-00" v-if="!mostrarSkeleton" class="form-control"
                  v-model="cpf" :class="{
                    'is-invalid': msgCpfInvalido
                  }" @input="aplicaMascaraCPF" />

                <p class="text-danger mt-2" v-if="msgCpfInvalido">
                  <small>
                    <i class="fa fa-bell"></i> CPF inválido
                  </small>
                </p>

                <p class="text-success mt-2" v-if="msgCpfvalido">
                  <small>
                    <i class="fa fa-bell"></i> CPF válido
                  </small>
                </p>
              </div>
            </div>

            <div class="row">
              <div class="col-6">
                <div class="mb-3">
                  <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                  <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                  <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Seu nome
                  </label>
                  <input type="text" required v-if="!mostrarSkeleton" class="form-control" v-model="nome"
                    placeholder="Digite seu nome" />
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3">
                  <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                  <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                  <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Sobrenome
                  </label>
                  <input type="text" required v-if="!mostrarSkeleton" class="form-control" v-model="sobrenome"
                    placeholder="Digite seu sobrenome" />
                </div>
              </div>
              <div class="col-12">
                <div class="mb-3">
                  <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                  <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                  <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">E-mail
                  </label>

                  <input type="email" required v-if="!mostrarSkeleton" class="form-control" v-model="email"
                    placeholder="Digite um e-mail válido" />

                  <p v-if="emailValid" class="text-danger mt-2">
                    <i class="fa fa-circle-exclamation"></i>
                    Por favor, forneça um e-mail válido.
                  </p>
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3">
                  <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                  <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                  <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Crie uma senha
                  </label>
                  <div class="input-group">
                    <input type="password" required v-if="!mostrarSkeleton" class="form-control" v-model="senha" :class="{
                      'is-invalid': !senhaValida && senha.length > 0,
                    }" @input="validarSenha" placeholder="Digite sua senha" />
                  </div>

                  <p class="text-warning mt-2" v-if="!senhaValida && senha.length > 0">
                    <small>
                      <i class="fa fa-bell"></i> Sua senha deve ter no mínimo 8
                      caracteres, número e uma letra MAIÚSCULA.
                    </small>
                  </p>
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3">
                  <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                  <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                  <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Confirme a senha
                  </label>
                  <input type="password" required v-if="!mostrarSkeleton" class="form-control" v-model="confimSenha"
                    placeholder="Digite a senha novamente" />

                  <p class="text-danger mt-2" v-if="confimSenha && !passwordsMatch">
                    <i class="fa fa-ban"></i> As senhas não conferem!
                  </p>
                  <p class="text-success mt-2" v-if="confimSenha && passwordsMatch">
                    <i class="fa fa-check"></i> As senhas conferem
                  </p>
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3">
                  <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                  <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                  <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Telefone
                  </label>
                  <input type="text" @input="aplicaMascaraTelefone" required v-if="!mostrarSkeleton"
                    class="form-control" v-model="telefone" placeholder="(00) 0000-0000" />
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3">
                  <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                  <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                  <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Cep
                  </label>
                  <input type="text" required v-if="!mostrarSkeleton" @input="aplicaMascaraCEP" class="form-control"
                    v-model="buscarCEP" placeholder="000000-000" />
                  <p v-if="msgErrorCep" class="text-danger mt-2">
                    <small><i class="fa fa-check"></i> Cep inválido</small>
                  </p>
                </div>
              </div>

              <div class="col-9">
                <div class="mb-3">
                  <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                  <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                  <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Endereço
                  </label>
                  <input disabled type="text" required v-if="!mostrarSkeleton" class="form-control" v-model="logradouro"
                    placeholder="Digite o endereço completo" />
                </div>
              </div>
              <div class="col-3">
                <div class="mb-3">
                  <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                  <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                  <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Número
                  </label>
                  <input type="number" required v-if="!mostrarSkeleton" class="form-control" v-model="numero"
                    placeholder="00" />
                </div>
              </div>
              <div class="col-8">
                <div class="mb-3">
                  <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                  <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                  <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Complemento
                  </label>
                  <input type="text" required v-if="!mostrarSkeleton" class="form-control" v-model="complemento"
                    placeholder="Digite um complemento" />
                </div>
              </div>
              <div class="col-4">
                <div class="mb-3">
                  <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                  <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                  <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Bairro
                  </label>
                  <input disabled type="text" required v-if="!mostrarSkeleton" class="form-control" v-model="bairro"
                    placeholder="Digite um complemento" />
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3">
                  <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                  <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                  <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Cidade
                  </label>
                  <input disabled type="text" required v-if="!mostrarSkeleton" class="form-control" v-model="cidade"
                    placeholder="Aguarde..." />
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3">
                  <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                  <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                  <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Estado
                  </label>
                  <input disabled type="text" required v-if="!mostrarSkeleton" class="form-control" v-model="estado"
                    placeholder="Aguarde..." />
                </div>
              </div>
            </div>
          </div>

          <p v-if="msgEstado" class="text-warning mt-2">
            <i class="fa fa-circle-exclamation"></i> Desculpe, ainda não estamos
            no seu estado, preencha com outro CEP.
          </p>

          <div v-if="mostrarSkeleton" class="skeleton-button mt-5"></div>
          <button v-if="!mostrarSkeleton" @click="handleValidar()" type="submit" class="btn btn-dark bot mt-4">
            {{ textoBotao }}
            <span v-if="autenticando" class="spinner-border spinner-border-sm" aria-hidden="true"></span>
          </button>

          <a href="/select">
            <button v-if="!mostrarSkeleton" href="/" class="btn btn-outline-dark bot mt-4">
              Voltar
            </button>
          </a>
        </div>
        <div v-if="validationTab" class="px-4">
          <div v-if="mostrarSkeleton" class="skeleton-title"></div>
          <h1 v-if="!mostrarSkeleton" class="title-login mt-5">Sucesso...</h1>

          <div v-if="mostrarSkeleton" class="skeleton-title-subtitle"></div>
          <p v-if="!mostrarSkeleton">
            Estamos validando tudo. Fique de olho no seu email.
          </p>

          <div v-if="loading" class="d-flex justify-content-center">
            <div class="spinner-border" role="status"></div>
          </div>

          <div v-if="msgSuccess" class="alert alert-success mt-3" role="alert">
            <i class="fa fa-check"></i> Dados gravados com sucesso! Aguarde até
            que sua conta seja liberada.
          </div>

          <div v-if="iconLoading" style="margin-left: auto; margin-right: auto; display: block"
            class="spinner-border text-center" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>

          <button v-if="!mostrarSkeleton" :disabled="autenticando" type="submit" class="btn btn-dark bot mt-4">
            {{ textoBotao }}
            <span v-if="autenticando" class="spinner-border spinner-border-sm" aria-hidden="true"></span>
            <span v-if="autenticando" class="visually-hidden">Aguarde...</span>
          </button>
        </div>
      </div>

      <div class="col-lg-6 p-0 d-none d-lg-block">
        <div v-if="mostrarSkeleton" class="skeleton-imagem"></div>
        <img v-if="!mostrarSkeleton" src="../../../assets/images/bg-login.svg" class="bg-login" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import _ from "lodash";
import api from "../../../service/api/auth/index.js";
import sendemail from "../../../service/api/email/index.js";
export default {
  name: "CadastroCorretorView",
  data() {
    return {
      loading: false,

      dadosTab: false,
      mostrarSkeleton: true,
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

      cpf: "",
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
      id_user: "",
      textoBotao: "Salvar",
      autenticando: false,

      validationTab: false,
      erro: false,
      iconLoading: false,
      msgEstado: false,

      senhaValida: true,

      msgCpfInvalido: false,
      msgCpfvalido: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.mostrarSkeleton = false;
    }, 2000);
  },
  watch: {
    buscarCEP(newVal, oldVal) {
      if (newVal.length === 9 && newVal !== oldVal) {
        this.debouncedCheckCEP();
      }
    },
  },
  created() {
    this.debouncedCheckCEP = _.debounce(this.consultarCEP, 100);
  },
  computed: {
    passwordsMatch() {
      return this.senha === this.confimSenha;
    },
  },
  methods: {
    validaCPF(cpf) {
      let Soma = 0;
      let Resto;

      // Remove caracteres não numéricos
      const strCPF = String(cpf).replace(/[^\d]/g, '');

      if (strCPF.length !== 11) return false;

      // Verifica se todos os dígitos são iguais
      if ([
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
      ].includes(strCPF)) return false;

      // Calcula o primeiro dígito verificador
      for (let i = 1; i <= 9; i++) {
        Soma += parseInt(strCPF.substring(i - 1, i)) * (11 - i);
      }

      Resto = (Soma * 10) % 11;

      if (Resto === 10 || Resto === 11) Resto = 0;
      if (Resto !== parseInt(strCPF.substring(9, 10))) return false;

      Soma = 0;

      // Calcula o segundo dígito verificador
      for (let i = 1; i <= 10; i++) {
        Soma += parseInt(strCPF.substring(i - 1, i)) * (12 - i);
      }

      Resto = (Soma * 10) % 11;

      if (Resto === 10 || Resto === 11) Resto = 0;
      if (Resto !== parseInt(strCPF.substring(10, 11))) return false;

      return true;
    },
    verificarCPF() {
      if (this.validaCPF(this.cpf)) {
        this.msgCpfvalido = true;
        this.msgCpfInvalido = false
      } else {
        this.msgCpfInvalido = true;
      }
    },
    aplicaMascaraCPF() {
      let v = this.cpf;

      // Remove todos os caracteres não numéricos
      v = v.replace(/\D/g, "");

      // Limita o tamanho a 11 dígitos
      if (v.length > 11) {
        v = v.substring(0, 11);
      }

      // Aplica a máscara de CPF
      v = v.replace(/(\d{3})(\d)/, "$1.$2");
      v = v.replace(/(\d{3})(\d)/, "$1.$2");
      v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

      // Atualiza o valor do input com a máscara aplicada
      this.cpf = v;

      // Verifica o CPF automaticamente após a máscara ser aplicada
      if (v.length === 14) { // 11 números + 3 caracteres de formatação
        this.verificarCPF();
      }
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

          // Correção nas propriedades de acordo com a resposta da API
          let rua = res.data.logradouro;
          let bairro = res.data.bairro;
          let cidade = res.data.localidade;
          let estado = res.data.uf;

          if (estado !== "PB") {
            this.autenticando = true;
            this.textoBotao = "Ainda não chegamos no seu estado 😔";
            this.msgEstado = true;
          } else {
            this.autenticando = false;
            this.msgEstado = false;
            this.textoBotao = "Salvar";
          }

          this.logradouro = rua;
          this.bairro = bairro;
          this.cidade = cidade;
          this.estado = estado;
        } catch (error) {
          console.error("Erro ao consultar CEP: ", error);
        }
      }
    },

    handleVoltar() {
      this.cnpjTab = true;
      this.dadosTab = false;
      this.validationTab = false;
    },
    handleValidar() {
      this.autenticando = true;
      this.textoBotao = "Aguarde...";

      let cpf = this.cpf;
      let nome = this.nome;
      let sobrenome = this.sobrenome;
      let email = this.email;
      let senha = this.senha;
      let telefone = this.telefone;
      let cep = this.buscarCEP;
      let endereco = this.logradouro;
      let complemento = this.complemento;
      let numero = this.numero;
      let cidade = this.cidade;
      let estado = this.estado;
      let bairro = this.bairro;
      let id_plano = localStorage.getItem("plano");

      if (id_plano === null) {
        id_plano = 3;
      }

      if (
        nome !== "" &&
        sobrenome !== "" &&
        email !== "" &&
        senha !== "" &&
        telefone &&
        cep &&
        endereco != "" &&
        this.msgCpfInvalido == false
      ) {
        api
          .cadastroCorretor(
            nome,
            sobrenome,
            email,
            senha,
            cpf,
            id_plano,
            telefone,
            cep,
            endereco,
            complemento,
            numero,
            cidade,
            estado,
            bairro
          )
          .then((response) => {
            console.log(response);
            if (response.status == 202) {
              this.autenticando = false;
              this.textoBotao = "Só mais um pouco...";

              sendemail.sendNewAccountAdmin(nome, email).then((res) => { });

              setTimeout(() => {
                this.dadosTab = false;
                this.validationTab = true;
                this.textoBotao = "Você será redirecionado...";
                this.msgSuccess = true;
                this.iconLoading = true;
              }, 2000);

              setTimeout(() => {
                window.location.href = "/login";
              }, 4000);
            } else if (response.status == 409) {
              this.msgCnpjActive = true;
              this.autenticando = false;
              this.textoBotao = "Houve um problema....";

              setTimeout(() => {
                this.emailValid = false;
                this.autenticando = false;
                this.textoBotao = "Tente novamente...";
              }, 5000);
            } else if (response.status == 401) {
              this.emailValid = true;
              this.autenticando = false;
              this.textoBotao = "Salvar";

              setTimeout(() => {
                this.msgCnpjActive = false;
                this.autenticando = false;
                this.textoBotao = "Salvar";
              }, 5000);
            } else {
              this.autenticando = false;
              this.textoBotao = "Houve um erro";
              this.erro = true;

              setTimeout(() => {
                this.erro = false;
                this.autenticando = false;
                this.textoBotao = "Tente novamente...";
              }, 5000);
            }
          })
          .catch(() => {
            this.autenticando = false;
            this.textoBotao = "Salvar";
          });
      } else {
        this.campoNullError = true;
        this.autenticando = false;
        this.textoBotao = "Salvar";

        setTimeout(() => {
          this.campoNullError = false;
          this.autenticando = false;
          this.textoBotao = "Salvar";
        }, 5000);
      }
    },
  },
};
</script>
