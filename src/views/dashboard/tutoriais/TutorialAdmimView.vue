<template>
  <div class="wrapper">
    <SideBar />
    <div class="main">
      <NavBar />
      <main class="content">
        <div class="container-fluid p-0">
          <h1 class="h3 mb-3"><strong>Seu perfil |</strong> dados</h1>
          <div class="row">
            <div
              class="alert alert-primary d-flex align-items-center"
              role="alert"
              v-if="errorMessage"
            >
              <i
                class="fa fa-exclamation-circle"
                style="margin-right: 10px"
              ></i>
              <div>
                {{ textoError }}
              </div>
            </div>
            <div class="col-md-12 col-xl-5">
              <div class="card mb-3">
                <div class="card-header">
                  <h5 class="card-title mb-0">
                    <i class="fa fa-play" style="margin-right: 10px"></i> Vídeo
                    de Tutorial
                  </h5>
                </div>
                <hr class="my-0" />
                <div class="card-body">
                  <label for="url"
                    ><small><strong>Url do vídeo</strong></small></label
                  >
                  <input
                    type="text"
                    name="url"
                    id="video"
                    class="form-control mb-4"
                    v-model="url"
                  />
                  <div
                    class="w100"
                    style="display: flex; justify-content: right"
                  >
                    <button
                      type="button"
                      class="btn btn-success"
                      @click="mandarVideo"
                    >
                      {{ textoBotao }}
                    </button>
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
import api from "../../../../service/api/index";
import apiTutorial from "../../../../service/api/tutorial/index";

export default {
  name: "TutorialView",
  data() {
    return {
      textoBotao: "Enviar",
      autenticando: false,
      image: "",
      nome: "",
      sobrenome: "",
      email: "",
      nivel: "",
      iniciais: "",
      plano: "",
      senha: "",
      confimSenha: "",
      razaoSocial: "",
      cnpj: "",
      endereco: "",
      myToken: "",
      qrcode: "",
      idUser: "",
      card: true,

      url: "",
      errorMessage: false,
      textoError: "",
    };
  },
  components: {
    SideBar,
    NavBar,
    Footer,
  },
  computed: {
    passwordsMatch() {
      return this.senha === this.confimSenha;
    },
  },
  mounted() {
    let token = localStorage.getItem("token");
    this.token = token;
    let decode = jwtDecode(token);

    if (decode.perfil == null) {
      this.card = false;
    } else if (decode.perfil !== null) {
      this.card = true;
      this.razaoSocial = decode.perfil.razao_social;
      this.cnpj = decode.perfil.cnpj;
      this.endereco = decode.perfil.endereco;
      this.qrcode = decode.qrcode.qrcode;
      this.myToken = decode.token.token;
    }

    this.image = decode.avatar;
    this.idUser = decode.id_user;
    this.nome = decode.nome;
    this.sobrenome = decode.sobrenome;
    this.email = decode.email;
    this.nivel = decode.id_nivel;
    this.plano = decode.id_plano;

    const iniciais = this.nome.charAt(0) + this.sobrenome.charAt(0);
    this.iniciais = iniciais;
  },

  methods: {
    mandarVideo() {
      if (this.url !== "") {
        this.errorMessage = false;
        this.textoError = "";
        this.textoBotao = "Enviando...";
        console.log("mandar esse link ===>", this.url);
        apiTutorial.mandarTutorial(this.url).then((res) => {
          console.log(this.url)  
          console.log(res);
        });
        setTimeout(() => {
          this.textoBotao = "Enviar";
        }, 3000);
      } else {
        this.textoError = "Url vazia...";
        this.errorMessage = true;
      }
    },
  },
};
</script>
