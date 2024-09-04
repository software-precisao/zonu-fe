<template>
  <div class="body" v-if="link && mostrarSkeleton">
    <nav class="navbar navbar-expand-lg py-3 navbar-custom" style="position: absolute; z-index: 100; top: 0; right: 0; left: 0; background: linear-gradient(to bottom, 
  rgba(0, 0, 80, 1) 0%,
  rgba(0, 0, 80, .7) 60%, 
  rgba(0, 0, 80, 0.5) 80%,
  rgba(0, 0, 80, .3) 90%,
  rgba(0, 0, 80, 0) 100%
);">
      <div class="container py-1">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="logo-area">
          <img v-if="userDono != null" class="logo-page" :src="`https://zonu.com.br/api${userDono.perfil.logo}`"
            style="width: 80px; height: 80px;" alt="" />
        </div>
        <!-- <img src="../../../../assets/images/icons/iconLogo.png" style="width: 60px; height: 60px;" alt=""> -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link text-uppercase" style="color: #fff; font-weight: 800;" href="#info">SOBRE O
                EMPREENDIMENTO</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-uppercase" style="color: #fff; font-weight: 800;" href="#fotos">FOTOS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-uppercase" style="color: #fff; font-weight: 800;" href="#precos">PREÇO</a>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link text-uppercase" style="color: #fff;" href="#contato">CONTATO</a>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>




    <!-- <div class="orange-range">
      <h2 class="text-title-h2-contact text-center text-light">
        <strong>EMPREENDIMENTO
          {{ imovel.publicacao.tarja_imovel_site_publi }}</strong>
      </h2>
    </div> -->

    <div class="capa"
      :style="{ backgroundImage: `url(https://zonu.com.br/api${imovel.fotos[0].foto})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
      <div class="">
        <!-- {{ console.log(imovel.fotos[0].foto) }} -->

      </div>
    </div>

    <!-- <div class="green-range">
      <h2 class="text-title-h2-contact text-center text-light">
        <strong>{{ imovel.preco.tipo_negocio }}</strong>
      </h2>
    </div> -->

    <!-- Conteúdo do site -->
    <div class="px-4 px-md-0">
      <div class="">
        <div class="row" style="padding-left: 10%; padding-right: 10%">
          <div class="col-12 mt-5">
            <h1 class="text-title text-left" style="padding: 0; margin: 0; font-size: 2.5rem">
              <strong>{{ imovel.descricao.titulo }}</strong>
            </h1>
            <h4 style="padding: 0; margin: 0; color: #D3D3D3;">{{ imovel.localizacao.bairro }} - {{
              imovel.localizacao.cidade }} - {{
                imovel.localizacao.estado }}</h4>
            <p class="text-title-subtitle text-left mt-4" style="color: #0A0A1D; font-weight: 500 !important">
              {{ imovel.descricao.apresentacao }}
            </p>
          </div>
        </div>

        <div class="row mt-5" id="info" style="padding-left: 10%; padding-right: 10%">
          <div class="col-12 container-box">

            <div class="row" style="display: flex; align-items: center; justify-content: space-around; width: 100%;">
              <div class=" col-sm-2 features-box">
                <div class="box-item" style="display: flex; flex-direction: column; align-items: center">
                  <h4 class="title-com">Suites</h4>
                  <h2 class="subTitle-com">
                    {{ imovel.comodos.suite == "" || imovel.comodos.suite == null ? "0" : imovel.comodos.suite }}
                  </h2>
                </div>
              </div>

              <div class="col-sm-2 features-box">
                <div class="box-item" style="display: flex; flex-direction: column; align-items: center">
                  <h4 class="title-com">Dormitório</h4>
                  <h2 class="subTitle-com">
                    {{ imovel.comodos.dormitorio == "" || imovel.comodos.dormitorio == null ? "0" :
                      imovel.comodos.dormitorio }}
                  </h2>
                </div>
              </div>

              <div class="col-sm-2 features-box">
                <div class="box-item" style="display: flex; flex-direction: column; align-items: center">
                  <h4 class="title-com">Banheiro</h4>
                  <h2 class="subTitle-com">
                    {{ imovel.comodos.banheiro == "" || imovel.comodos.banheiro == null ? "0" : imovel.comodos.banheiro
                    }}
                  </h2>
                </div>
              </div>

              <div class="col-sm-2 features-box">
                <div class="box-item" style="display: flex; flex-direction: column; align-items: center">
                  <h4 class="title-com">Vagas</h4>
                  <h2 class="subTitle-com">
                    {{ imovel.comodos.garagem == "" || imovel.comodos.garagem == null ? "0" : imovel.comodos.garagem }}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Característica -->
        <div class="" id="caracteristicas">
          <div class="" style="background-color: #f8f9fa; padding: 30px 10% ">
            <div class="features-container">
              <div class="feature-box" v-for="caracteristica in imovel.caracteristicas"
                :key="caracteristica.id_caracteristica">
                <div class="feature-item">
                  <h4 class="feature-text"
                    style="font-size: 16px; font-weight: 600; color: #003366; text-transform: uppercase;">
                    <div class="check-square">
                      <i class="fa fa-check"></i>
                    </div>
                    {{
                      caracteristica.detalhesCaracteristica
                        ? caracteristica.detalhesCaracteristica
                          .nome_caracteristica
                        : "Não disponível"
                    }}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Proximidades -->
        <div class="row mt-5" id="proximidades" style="padding-left: 10%; padding-right: 10%">
          <div class="col container-box" style="display: flex; flex-direction: column">
            <h2 class="title text-center" style="font-size: 40px; font-weight: 600; letter-spacing: 10px;">PROXIMIDADES
            </h2>

            <div class="features-container" style="display: flex; align-items: center; justify-content: center">
              <div class="feature-box" v-for="proximidade in imovel.proximidades" :key="proximidade.id_proximidade">
                <div class="feature-item">
                  <h4 class="feature-text"
                    style="font-size: 16px; font-weight: 600; color: #003366; text-transform: uppercase;">
                    <div class="check-square">
                      <i class="fa fa-check"></i>
                    </div>
                    {{
                      proximidade.detalhesProximidade
                        ? proximidade.detalhesProximidade.nome_proximidade
                        : null
                    }}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Localização -->
        <div class="row mt-4" id="localizacao" style="padding-left: 10%; padding-right: 10%">
          <div class="col container-box">

            <div class="col-12 relative"
              style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
              <!-- <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29392.21038117975!2d-43.17517506523439!3d-22.94925859999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9980409039f845%3A0x8075d7bcdfbcb48c!2zUMOjbyBkZSBBw6fDumNhcg!5e0!3m2!1spt-BR!2sbr!4v1712992417057!5m2!1spt-BR!2sbr"
                class="map"
                style="border: 0; padding: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe> -->
              <div id="map" ref="mapElement"
                style="width: 80%; height: 450px; position: sticky; border-top-left-radius: 25px;  border-top-right-radius: 25px;">
              </div>
              <h4 style="padding-top: 8px; margin: 0; color: #D3D3D3; background-color: #f8f9fa; width: 80%;">{{
                imovel.localizacao.logradouro }} -
                {{
                  imovel.localizacao.bairro }} - {{
                  imovel.localizacao.cidade }} - {{
                  imovel.localizacao.estado }}</h4>
            </div>

            <!-- <div class="col-12">
              <iframe :src="streetViewUrl" class="map" style="border: 0; padding: 0" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div> -->
          </div>
        </div>

        <div class="container" id="fotos" style="margin-top: 7rem;">
          <div class="row g-2">
            <h2 class="title text-center" style="font-size: 30px; font-weight: 600;">FOTOS DO
              EMPREEMDIMENTO
            </h2>
            <!-- Imagem Principal -->
            <!-- <div class="col-6">
              <div class="main-image-container" @click="openModal(0)">
                <img :src="`https://zonu.com.br/api${imovel.fotos[0].foto}`" :alt="`Foto Principal`"
                  class="img-fluid main-image" />
              </div>
            </div> -->

            <!-- Outras Imagens -->
            <div class="carousel-container">
              <button v-if="currentIndex != 0" class="carousel-button prev" @click="previousSlide">
                <img :src="arrowLeft" style="width: 20px; height: 20px;" /></button>
              <div class="carousel-track" ref="carouselTrack">
                <div v-for="(foto, index) in imovel.fotos" :key="foto.id_imagem" class="carousel-slide">
                  <div class="thumbnail-container" @click="openModal(index)">
                    <img :src="`https://zonu.com.br/api${foto.foto}`" :alt="`Foto${foto.id_imagem}`"
                      class="img-fluid thumbnail" />
                  </div>
                </div>
              </div>
              <button
                v-if="imovel.fotos.length <= 8 && currentIndex == 0 || imovel.fotos.length >= 9 && (currentIndex == 0 || currentIndex == 1)"
                class="carousel-button next" @click="nextSlide"><img :src="arrowRight"
                  style="width: 20px; height: 20px;" /></button>
            </div>

            <!-- Modal para Zoom -->
            <div class="modal" v-if="showModal">
              <div class="modal-content">
                <button class="modal-close" @click.stop="closeModal">
                  &times;
                </button>
                <div class="modal-image-container">
                  <img :src="currentImage" alt="Zoom" class="modal-image" />
                </div>
                <div class="modal-thumbnails">
                  <div v-for="(foto, index) in imovel.fotos" :key="foto.id_imagem" class="modal-thumbnail-container">
                    <img :src="`https://zonu.com.br/api${foto.foto}`" :alt="`Foto${foto.id_imagem}`"
                      class="img-fluid modal-thumbnail" @click="changeImage(index)" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Lightbox -->
        <!-- <div class="lightbox">
          <span class="close">&times;</span>
          <img src="" alt="" class="lightbox-img" />
        </div> -->

        <!-- Informações do Imóvel -->
        <div class="row mt-5" id="precos" style="padding-left: 25%; padding-right: 25%; padding-bottom: 5% ">
          <div class="col container-box" style="display: flex; flex-direction: column; background-color: #f8f9fa;">
            <!-- <p class=" text-title-subtitle mt-2">
            Abaixo, você encontrará uma visão geral detalhada deste imóvel.
            Essas informações são projetadas para fornecer uma compreensão
            completa das características e especificações do imóvel, ajudando
            você a avaliar se ele atende às suas necessidades e expectativas
            </p> -->

            <div class="" style="display: flex; padding: 10px 0; justify-content: space-between; flex-wrap: wrap">
              <div class=" features-box">
                <div class="box-item">
                  <h4 class="title-com" style="font-size: 1.3rem;">{{ imovel.preco.tipo_negocio }}</h4>
                  <h2 class="subTitle-com" style="font-size: 1.8rem; color: #003366">
                    {{ aplicaMascaraDinheiroPreco(imovel.preco.preco_imovel) }}
                  </h2>
                </div>
              </div>
              <div class="row" style="border-left: 2px solid #d3d3d3;">
                <div class=" features-box">
                  <div class="box-item">
                    <h4 class="title-com" style="font-size: 1.3rem;">IPTU</h4>
                    <h2 class="subTitle-com" style="font-size: 1.8rem; color: #003366">
                      {{ imovel.preco.preco_iptu == "NaN" || imovel.preco.preco_iptu == "" ? 'R$ 0,00' :
                        imovel.preco.preco_iptu }}
                    </h2>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class=" features-box">
                  <div class="box-item">
                    <h4 class="title-com" style="font-size: 1.3rem;">CONDOMÍNIO</h4>
                    <h2 class="subTitle-com" style="font-size: 1.8rem; color: #003366">
                      {{ imovel.preco.preco_condominio == "NaN" || imovel.preco.preco_condominio == "" ? 'R$ 0,00' :
                        imovel.preco.preco_condominio }}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- <div class="row" id="contato" style="padding-left: 20%; padding-right: 20%; margin-top: 5rem; padding-bottom: 3rem">
      <div class="col container-box" style="display: flex; flex-direction: column;">

        <div>
          <h1 style="font-size: 16px; font-weight: 600; color: #003366;">PROPRIETÁRIO</h1>
          <h4 style="font-size: 16px; font-weight: 800; color: #000; text-transform: uppercase;">{{ imovel.usuario.nome
            }} {{
              imovel.usuario.sobrenome }}</h4>
        </div>

        <div style="display: flex;">
          <div style="margin-right: 4rem;">
            <h1 style="font-size: 16px; font-weight: 600; color: #003366;">EMAIL</h1>
            <h4 style="font-size: 16px; font-weight: 800; color: #000; text-transform: uppercase;">{{
              imovel.usuario.email }}</h4>
          </div>

          <div>
            <h1 style="font-size: 16px; font-weight: 600; color: #003366;">TELEFONE</h1>
            <h4 style="font-size: 16px; font-weight: 800; color: #000; text-transform: uppercase;">{{
              imovel.usuario.telefone }}</h4>
          </div>
        </div>

      </div>
    </div> -->

  </div>
  <div class="body" style="height: 100vh" v-if="link == false">
    <div class="d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-6 col-lg-4 card shadow-md p-4 text-center rounded">
        <h2 class="text-title-h2 mb-4">
          <strong>Esse link já expirou</strong>
        </h2>
        <a href="/" class="btn btn-primary">Voltar para o site</a>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "../../../components/sidebar/index.vue";
import Navbar from "../../../components/navbar/index.vue";
import Footer from "../../../components/footer/index.vue";
import api from "../../../../service/api/imoveis/index";
import apiRaiz from "../../../../service/api/index";
import apiUser from "../../../../service/api/usuarios/index";
import axios from "axios";
import googleDrive from "../../../../assets/images/icons/googleDriveIconCerto.svg";
import youtube from "../../../../assets/images/icons/youtubeIconCerto.svg";
import presentation from "../../../../assets/images/icons/reelIcon.svg";
import arrowRight from "../../../../assets/images/icons/chevron-right.svg";
import arrowLeft from "../../../../assets/images/icons/chevron-left.svg";

export default {
  name: "ImovelView",
  components: {
    Sidebar,
    Navbar,
    Footer,
  },
  data() {
    return {
      imovelId: null,
      donoId: null,
      userDono: null,
      imovel: {},

      condominio: "Sem condomínio",

      latitude: -15.7942,
      longitude: -47.8822,
      map: null,
      marker: null,

      showModal: false,
      currentImageIndex: 0,
      currentImage: "",

      link: true,

      googleDrive,
      youtube,
      presentation,
      arrowRight,
      arrowLeft,

      mostrarSkeleton: false,

      currentIndex: 0,
    };
  },

  mounted() {
    //Cola as funçoes aqui
    function myFunction() { }
    // scripts.js
    const thumbnails = document.querySelectorAll(".thumbnail");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn = document.querySelector(".close");

    // thumbnails.forEach((thumbnail) => {
    //   thumbnail.addEventListener("click", () => {
    //     const imgSrc = thumbnail.getAttribute("data-img");
    //     lightboxImg.src = imgSrc;
    //     lightbox.style.display = "flex";
    //   });
    // });

    // closeBtn.addEventListener("click", () => {
    //   lightbox.style.display = "none";
    // });

    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
          const targetPosition = target.getBoundingClientRect().top;
          const startPosition = window.pageYOffset;
          const distance = targetPosition - startPosition;
          const duration = 500; // Tempo em milissegundos, então 0.5 segundos é 500 milissegundos
          let start = null;

          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            window.scrollTo(
              0,
              easeInOutQuad(progress, startPosition, distance, duration)
            );
            if (progress < duration) {
              window.requestAnimationFrame(step);
            }
          };

          window.requestAnimationFrame(step);
        }
      });
    });

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    this.fetchCondominio();
    this.fetchUser();
    setTimeout(() => {
      this.initMap();
    }, 3000);

    setTimeout(() => {
      this.mostrarSkeleton = true
    }, 3000);
  },

  watch: {
    currentIndex() {
      const track = this.$refs.carouselTrack;
      track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    },
  },

  created() {
    // Atribuição dos valores das queries
    this.imovelId = this.$route.query.id;
    this.donoId = this.$route.query.idUser;

    const url = window.location.href;

    apiUser.meusLinks(this.donoId).then((res) => {
      const links = res.data.response;

      if (links.length === 0) {
        this.link = false;
        return;
      }

      // Verificar se algum link corresponde ao URL atual
      const linkAtivo = links.find((link) => link.url === url && link.ativo);

      if (linkAtivo) {
        console.log("link ativo");
        this.link = true;
        this.fetchImovel();
      } else {
        console.log("link inativo");
        this.link = false;
      }
    });
    console.log(this.link);
  },

  computed: {
    streetViewUrl() {
      const apiKey = "AIzaSyC59bw9mWYet8FeTX0tZZdQ_FzBQUxaRjE";
      return `https://www.google.com/maps/embed/v1/streetview?key=${apiKey}&location=${this.latitude},${this.longitude}&heading=210&pitch=10&fov=100`;
    },

    totalSlides() {
      return Math.ceil(this.imovel.fotos.length / 4);
    },

    // currentImage() {
    //   // console.log(this.imovel.fotos[this.currentImageIndex].foto);
    //   return `https://zonu.com.br/api${
    //     this.imovel.fotos[this.currentImageIndex].foto
    //   }`;
    // },
  },

  methods: {
    // openModal(index) {
    //   this.currentImageIndex = index; // Resetar para a primeira imagem ao abrir o modal
    //   this.showModal = true;
    // },

    fetchUser() {
      apiUser.listusuarios().then((res) => {
        if (res.status === 200) {
          console.log(res.data)
          res.data.response.map((user) => {
            if (user.id_user == this.donoId) {
              console.log(user)
              this.userDono = user
            }
          })
        }
      })
    },

    nextSlide() {
      if (this.currentIndex < this.totalSlides - 1) {
        this.currentIndex++;
      }
    },
    previousSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },

    aplicaMascaraDinheiroPreco(preco) {
      let v = preco;

      // Remove tudo o que não é dígito
      v = v.replace(/\D/g, "");

      // Divide o número para preparar a adição de vírgula e ponto
      let valorDecimal = parseInt(v) / 100;

      // Formata o número como valor monetário
      return preco = valorDecimal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },

    openModal(index) {
      this.currentImage = `https://zonu.com.br/api${this.imovel.fotos[index].foto}`;
      this.showModal = true;
    },

    // Método para mudar a imagem no modal
    changeImage(index) {
      this.currentImage = `https://zonu.com.br/api${this.imovel.fotos[index].foto}`;
    },
    closeModal() {
      this.showModal = false;
    },
    // changeImage(index) {
    //   this.currentImageIndex = index;
    // },

    fetchImovel() {
      api.obterImovel(this.imovelId).then((res) => {
        this.imovel = res.data;
      });
    },

    fetchCondominio() {
      apiRaiz.listAllcondominio().then((res) => {
        res.data.response.map((cond) => {
          if (cond.id_condominio !== 1) {
            if (cond.id_condominio === this.imovel.id_condominio) {
              this.condominio = cond.nome_condominio;
            } else {
              return;
            }
          }
        });
      });
    },

    initMap() {
      this.buscarCoordenadas(
        this.imovel.localizacao.cep,
        this.imovel.localizacao.logradouro,
        this.imovel.localizacao.cidade,
        this.imovel.localizacao.estado,
        this.imovel.localizacao.bairro,
        this.imovel.localizacao.numero
      ).then(() => {
        this.map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: this.latitude, lng: this.longitude },
          zoom: 19,
        });

        this.addMarker();
      });
    },

    addMarker() {
      const lat = this.latitude;
      const lng = this.longitude;

      if (!isNaN(lat) && !isNaN(lng)) {
        const customIcon = {
          url: "https://zonu.com.br/emailmkt/IconLocationMaps.png", // Caminho para o ícone personalizado
          scaledSize: new google.maps.Size(38, 38), // Ajuste o tamanho do ícone conforme necessário
          anchor: new google.maps.Point(19, 38), // Ajuste a âncora do ícone conforme necessário
        };

        const markers = new google.maps.Marker({
          position: { lat: lat, lng: lng },
          map: this.map,
          icon: customIcon,
        });

        const infowindow = new google.maps.InfoWindow({
          content: `Latitude: ${lat}, Longitude: ${lng}`,
        });

        markers.addListener("click", () => {
          infowindow.open(this.map, markers);
        });

        this.marker = markers;
      } else {
        console.error("Coordenadas inválidas");
      }
    },

    async buscarCoordenadas(cep, rua, cidade, estado, bairro, numero) {
      const apiKey = "AIzaSyC59bw9mWYet8FeTX0tZZdQ_FzBQUxaRjE";
      // console.log(cep, rua, cidade, estado, bairro, numero)

      try {
        const res = await axios.get(
          "https://maps.googleapis.com/maps/api/geocode/json",
          {
            params: {
              address: `${rua}, ${numero}, ${cidade}, ${estado}, ${cep}`,
              key: apiKey,
            },
          }
        );

        if (res.data && res.data.results && res.data.results.length > 0) {
          const location = res.data.results[0].geometry.location;
          const latitude = location.lat;
          const longitude = location.lng;

          this.latitude = latitude;
          this.longitude = longitude;

          return { latitude, longitude };
        } else {
          console.error("Coordenadas não encontradas para o CEP informado.");
          return null;
        }
      } catch (error) {
        console.error("Erro ao buscar coordenadas:", error);
        return null;
      }
    },
    formatarDecimal(valor) {
      let valorNumerico = valor.replace(/\D/g, "");
      valorNumerico = (valorNumerico / 100).toFixed(2).replace(".", ",");
      return valorNumerico.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>
<style scoped>
/* Estilo das imagens principais */
.check-square {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: #28a745;
  /* Cor de fundo verde */
  border-radius: 4px;
  /* Arredondar os cantos */
  padding: 4px;
  margin-right: 4px
}

.check-square i {
  color: white;
  /* Cor do ícone */
  width: 16px;
  height: 16px;
}

.carousel-container {
  position: relative;
  width: 800px;
  /* Ajuste conforme necessário */
  overflow: hidden;
  margin: auto;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-slide {
  flex: 0 0 25%;
  /* Exibe 4 imagens de cada vez */
  max-width: 200px;
  /* Ajuste conforme necessário */
  padding: 5px;
}

.thumbnail-container {
  width: 100%;
  height: 200px;
}

.carousel-button.next {
  height: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(to left,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.9) 40%,
      rgba(255, 255, 255, 0.6) 70%,
      rgba(255, 255, 255, 0) 100%);
  color: #000;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
}

.carousel-button.prev {
  height: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.9) 40%,
      rgba(255, 255, 255, 0.6) 70%,
      rgba(255, 255, 255, 0) 100%);
  color: #000;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
}

.carousel-button.prev {
  left: 5px;
}

.carousel-button.next {
  right: 5px;
}

.main-image-container {
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  /* Cantos arredondados */
  cursor: pointer;
}

.main-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0.5rem;
  /* Cantos arredondados */
}

/* Container das Miniaturas */
.thumbnail-container {
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  /* Cantos arredondados */
}

.thumbnail {
  width: 100%;
  object-fit: cover;
  /* Ajusta a imagem para cobrir o contêiner */
  border-radius: 0.5rem;
  /* Cantos arredondados */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  /* Transição suave */
}

/* Sobreposição da Quinta Imagem */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  /* Sobreposição preta com opacidade */
  z-index: 1;
}

/* Efeito ao Passar o Mouse nas Miniaturas */
.thumbnail:hover {
  transform: scale(1.1);
  /* Aumenta a imagem ao passar o mouse */
  z-index: 2;
  /* Garante que a imagem em zoom fique acima da sobreposição */
}

/* Modal para Zoom */
.modal {
  display: flex;
  position: fixed;
  top: -8px;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  /* Fundo preto com opacidade */
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  width: 90%;
  height: 90%;
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 0.5rem;
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #fff;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
}

.modal-image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-image {
  width: 100%;
  height: 300px;
  border-radius: 0.5rem;
}

.modal-thumbnails {
  display: flex;
  justify-content: center;
  /* overflow-x: auto; */
  padding: 10px;
}

.modal-thumbnail-container {
  margin: 0 5px;
}

.modal-thumbnail {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.modal-thumbnail:hover {
  transform: scale(1.1);
}

#caracteristicas {
  margin-top: 30px;
}

.features-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.feature-box {
  /* background: #f8f9fa; */
  border-radius: 15px;
  padding: 10px;
}

.features-box {
  border-radius: 15px;
  margin-right: 40px;
  padding: 10px;
}

.feature-item {
  display: flex;
  align-items: center;
}

.feature-icon {
  color: #28a745;
  /* Cor do ícone de verificação */
  font-size: 20px;
}

.feature-text {
  margin-left: 10px;
  font-size: 14px;
  margin-top: 8px;
}

.title {
  font-size: 22px;
  margin-bottom: 20px;
}

.title-com {
  font-size: 18px;
  color: #3c4453;
  font-weight: 800;
  line-height: 1px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.subTitle-com {
  font-size: 18px;
  font-weight: 900;
  text-transform: uppercase;
  margin-left: 2px;
}
</style>
