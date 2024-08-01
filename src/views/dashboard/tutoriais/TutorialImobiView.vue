<template>
  <div class="wrapper">
    <!-- <SideBar /> -->
    <div class="main">
      <NavBar />
      <main class="content">
        <div class="container-fluid p-0">
          <h1 class="h3 mb-3"><strong>Seu perfil |</strong> dados</h1>
          <div class="row">
            <div class="col-md-12 col-xl-5">
              <div class="card mb-3">
                <div class="card-header">
                  <h5 class="card-title mb-0">
                    <i class="fa fa-user"></i> Video
                  </h5>
                </div>
                <div class="card-body" v-for="url in videoUrl">
                  {{ console.log(url.url) }}
                  <video
                    :src="url.url"
                    controls
                    width="100%"
                    height="auto"
                    style="max-width: 100%"
                  ></video>
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
//   import SideBar from "../../../components/sidebar/index.vue";
import NavBar from "../../../components/navbar/navbar-imobiliaria.vue";
import Footer from "../../../components/footer/index.vue";
import { jwtDecode } from "jwt-decode";
import api from "../../../../service/api/index";
import apiTutorial from "../../../../service/api/tutorial/index";

export default {
  name: "TutorialIMobiCorView",
  data() {
    return {
      textoBotao: "Alterar senha",
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

      videoUrl: [],
    };
  },
  components: {
    //   SideBar,
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

    this.fetchVideos();
  },

  methods: {
    fetchVideos() {
      apiTutorial.getTutorial().then((res) => {
        console.log(res);
        this.videoUrl = res.data;
      });
    },
  },
};
</script>
