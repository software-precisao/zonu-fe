<template>
  <div class="wrapper">
    <Sidebar />
    <div class="main">
      <Navbar />

      <main class="content">
        <div class="container-fluid p-0">
          <div v-if="mostrarSkeleton" class="skeleton-title-dashboard"></div>
          <h1 v-if="!mostrarSkeleton && decode && decode.id_nivel === 3" class="h3 mb-3">
            <strong>Dashboard |</strong> Construtora
          </h1>
          <h1 v-if="!mostrarSkeleton && decode && decode.id_nivel === 1" class="h3 mb-3">
            <strong>Dashboard |</strong> Administrador
          </h1>
          <h1 v-if="!mostrarSkeleton && decode && decode.id_nivel === 7" class="h3 mb-3">
            <strong>Dashboard |</strong> Pessoa Física
          </h1>
          <!-- {{ console.log(decode) }} -->
          <div class="col-xl-12 mt-2" v-if="progressView">
            <div class="w-100">
              <div class="row">
                <div class="row" style="margin-left: 2%; margin-top: 2%; margin-bottom: 3%">
                  <div class="col-xl-2">
                    <div v-if="mostrarSkeleton" class="skeleton-card"></div>
                    <div class="card" v-if="!mostrarSkeleton">
                      <div class="card-body">
                        <div class="row">
                          <h6 class="text-center"><small>Perfil</small></h6>
                          <img class="iconProgress" src="../../../assets/images/icons/iconPerfil.png" alt="" />
                          <div v-if="perfil === 0">
                            <img class="mt-3 iconCheck img-fluid"
                              src="../../../assets/images/icons/iconCheckInActive.png" alt="" />
                          </div>
                          <div v-if="perfil === 1">
                            <img class="mt-3 iconCheck img-fluid" src="../../../assets/images/icons/iconCheckActive.png"
                              alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-1 mt-5">
                    <hr class="linhacomplete" />
                  </div>

                  <div class="col-xl-2">
                    <div v-if="mostrarSkeleton" class="skeleton-card"></div>
                    <div class="card" v-if="!mostrarSkeleton">
                      <div class="card-body">
                        <div class="row">
                          <h6 class="text-center">
                            <small>Qualidade 9/10</small>
                          </h6>
                          <img class="iconProgress" src="../../../assets/images/icons/iconStar.png" alt="" />
                          <div v-if="capa === 0">
                            <img class="mt-3 iconCheck img-fluid"
                              src="../../../assets/images/icons/iconCheckInActive.png" alt="" />
                          </div>
                          <div v-if="capa === 1">
                            <img class="mt-3 iconCheck img-fluid" src="../../../assets/images/icons/iconCheckActive.png"
                              alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-1 mt-5">
                    <hr class="linhacomplete" />
                  </div>
                  <div class="col-xl-2">
                    <div v-if="mostrarSkeleton" class="skeleton-card"></div>
                    <div class="card" v-if="!mostrarSkeleton">
                      <div class="card-body">
                        <div class="row">
                          <h6 class="text-center"><small>Imóvel</small></h6>
                          <img class="iconProgress" src="../../../assets/images/icons/iconImovel.png" alt="" />

                          <div v-if="imovel === 0">
                            <img class="mt-3 iconCheck img-fluid"
                              src="../../../assets/images/icons/iconCheckInActive.png" alt="" />
                          </div>
                          <div v-if="imovel === 1">
                            <img class="mt-3 iconCheck img-fluid" src="../../../assets/images/icons/iconCheckActive.png"
                              alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-1 mt-5">
                    <hr class="linhacomplete" />
                  </div>
                  <div class="col-xl-2">
                    <div v-if="mostrarSkeleton" class="skeleton-card"></div>
                    <div class="card" v-if="!mostrarSkeleton">
                      <div class="card-body">
                        <div class="row">
                          <h6 class="text-center"><small>Publicação</small></h6>
                          <img class="iconProgress" src="../../../assets/images/icons/iconPublish.png" alt="" />
                          <div v-if="publicacao === 0">
                            <img class="mt-3 iconCheck img-fluid"
                              src="../../../assets/images/icons/iconCheckInActive.png" alt="" />
                          </div>
                          <div v-if="publicacao === 1">
                            <img class="mt-3 iconCheck img-fluid" src="../../../assets/images/icons/iconCheckActive.png"
                              alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-12 mt-5">
            <div class="w-100">
              <div class="row">
                <CardsInfo />
              </div>
            </div>
          </div>
          <div class="alert alert-primary d-flex align-items-center" role="alert" v-if="mensagemAtivo">
            <i class="fa fa-exclamation-circle" style="margin-right: 10px"></i>
            <div>
              {{ mensagem }}
            </div>
          </div>
          <!-- <div
            v-if="mensagemAtivo"
            class="card w-100 mt-3"
            style="display: flex; padding: 0 20px"
          >
            <p class="card-title" style="margin-top: 10px">
              {{ mensagem }}
            </p>
          </div> -->
          <div class="row"></div>
          <div class="col-xl-12 mt-5">
            <div class="w-100">
              <div class="row">
                <div class="col-xl-5 col-xxl-5">
                  <ListImoveis />
                </div>

                <div class="col-xl-7 col-xxl-7">
                  <div class="card flex-fill w-100">
                    <div class="card-header">
                      <h5 class="card-title mb-0">
                        <i class="fa fa-map-marker"></i> Localize seus imóveis
                      </h5>
                    </div>
                    <div class="card-body py-3">
                      <div id="mapImoveis" ref="mapElement" style="
                          height: 438px;
                          width: 100%;
                          border: 0;
                          position: sticky;
                          bottom: 0;
                        "></div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-4 col-xxl-4" v-if="decode && decode.id_nivel !== 7">
                  <GraphAluguelVenda />
                </div>

                <div class="col-xl-4 col-xxl-4" v-if="decode && decode.id_nivel !== 7">
                  <GraphPublicados />
                </div>
                <div class="col-xl-4 col-xxl-4" v-if="decode && decode.id_nivel !== 7">
                  <GraphTipo />
                </div>

                <div class="col-xl-12 col-xxl-12">
                  <FilterGraph />
                </div>

                <div class="col-xl-12 col-xxl-12" v-if="decode && decode.id_nivel !== 7">
                  <GraphMercado />
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
import Sidebar from "../../components/sidebar/index.vue";
import Navbar from "../../components/navbar/index.vue";
import Footer from "../../components/footer/index.vue";
import FilterGraph from "../../components/graph/index.vue";
import CardsInfo from "../../components/client/cards/cardComp.vue";
import api from "../../../service/api/index";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import L from "leaflet";
import _ from "lodash";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import GraphAluguelVenda from "../../components/client/graph/graphAluguelVendaComp.vue";
import GraphPublicados from "../../components/client/graph/graphPubliComp.vue";
import GraphTipo from "../../components/client/graph/graphTipoComp.vue";
import GraphMercado from "../../components/client/graph/graphMercadpComp.vue";
import ListImoveis from "../../components/client/imoveis/cardImoveisComp.vue";
import apiMessage from "../../../service/api/message/index";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default {
  name: "MainView",
  props: {
    cep: String,
  },
  data() {
    return {
      token: localStorage.getItem("token"),
      perfil: 0,
      capa: 0,
      imovel: 0,
      publicacao: 0,
      progressView: false,
      id_user: "",
      latitudeImoveis: "-15.7934",
      longitudeImoveis: "-47.8823",
      mapImoveis: null,
      markerIMoveis: null,
      mostrarResumo: false,
      markes: [],
      map: null,
      latitude: "-15.7934",
      longitude: "-47.8823",
      decode: null,
      mensagem: "",
      mensagemAtivo: false,
    };
  },
  components: {
    Sidebar,
    Navbar,
    Footer,
    FilterGraph,
    CardsInfo,
    GraphAluguelVenda,
    GraphPublicados,
    GraphTipo,
    GraphMercado,
    ListImoveis,
  },

  created() {
    this.debouncedCheckCEP = _.debounce(this.consultarCEP, 100);
  },

  mounted() {
    let token = this.token;
    let decode = jwtDecode(token);
    let id_user = decode.id_user;
    this.nome = decode.nome;
    this.sobrenome = decode.sobrenome;
    this.id_user = id_user;
    const iniciais = this.nome.charAt(0) + this.sobrenome.charAt(0);
    this.iniciais = iniciais;
    this.decode = decode;
    this.ferchProgress();
    this.fetchMyImoveis();
    this.fetchMyCondominios();

    this.getMessage();
  },

  watch: {
    buscarCEP(newVal, oldVal) {
      if (newVal.length === 9 && newVal !== oldVal) {
        this.debouncedCheckCEP();
      }
    },
    mapaCondo(newValue) {
      // console.log(newValue)
      if (newValue == "Sim") {
        this.mostrarMapa = true;
        this.$nextTick(() => {
          if (this.map) {
            setTimeout(() => {
              this.initMap();
              this.updateMap();
            }, 2000);
          } else {
            setTimeout(() => {
              this.initMap();
            }, 2000);
          }
        });
      } else {
        this.mostrarMapa = false;
      }
    },
  },

  methods: {
    getMessage() {
      apiMessage.getMensagem().then((res) => {
        if (res.data.length > 0) {
          const latestMessage = res.data[res.data.length - 1];
          const createdAt = new Date(latestMessage.createdAt);
          const tempo = latestMessage.tempo; // Tempo em minutos
          const now = new Date();

          // Calcula a diferença em minutos
          const diffInMinutes = (now - createdAt) / (1000 * 60);

          // console.log("Diferença em minutos:", diffInMinutes);

          if (diffInMinutes <= tempo) {
            // Mensagem ainda está ativa
            // console.log("Aqui está a mensagem ====>", latestMessage.mensagem);
            this.mensagemAtivo = true;
            this.mensagem = latestMessage.mensagem;
          } else {
            // Mensagem não está mais ativa
            // console.log("A mensagem não está mais ativa");
            this.mensagemAtivo = false;
            this.mensagem = "";
          }
        }
      });
    },

    initMap() {
      this.map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: this.latitude, lng: this.longitude },
        zoom: 10,
      });

      this.addMarker();
    },

    updateMap() {
      this.map.setCenter({ lat: this.latitude, lng: this.longitude });
      this.map.setZoom(4);
      this.addMarker();
    },
    addMarker() {
      // }
      const lat = this.latitude;
      const lng = this.longitude;

      if (!isNaN(lat) && !isNaN(lng)) {
        const customIcon = {
          url: "https://zonu.com.br/emailmkt/IconLocationMaps.png", // Caminho para o ícone personalizado
          scaledSize: new google.maps.Size(30, 38), // Ajuste o tamanho do ícone conforme necessário
          anchor: new google.maps.Point(19, 38), // Ajuste a âncora do ícone conforme necessário
        };

        const marker = new google.maps.Marker({
          position: { lat: lat, lng: lng },
          map: this.map,
          icon: customIcon,
        });

        const infowindow = new google.maps.InfoWindow({
          content: `Latitude: ${lat}, Longitude: ${lng}`,
        });

        marker.addListener("click", () => {
          infowindow.open(this.map, marker);
        });

        this.markes.push(marker); // Armazena o marker no array
      } else {
        console.error("Coordenadas inválidas");
      }
    },
    async consultarCEPLoc() {
      if (this.buscarCEP.length === 9) {
        const cep = this.buscarCEP.replace(/\D/g, "");

        try {
          const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

          // Correção nas propriedades de acordo com a resposta da API
          let rua = res.data.logradouro;
          let bairro = res.data.bairro;
          let cidade = res.data.localidade;
          let estado = res.data.uf;

          this.selectPais = "Brasil";
          this.selectEstado = estado;
          this.selectCidade = cidade;
          this.selectBairro = bairro;
          this.logradouro = rua;

          // await this.buscarCoordenadas(cep, cidade, estado);
          await this.buscarCoordenadasLoc(cep, rua);
        } catch (error) {
          console.error("Erro ao consultar CEP: ", error);
        }
      }
    },

    async buscarCoordenadasLoc(cep, rua) {
      // trocar pela apiKey do cliente
      const apiKey = "AIzaSyC59bw9mWYet8FeTX0tZZdQ_FzBQUxaRjE";

      try {
        const res = await axios.get(
          "https://maps.googleapis.com/maps/api/geocode/json",
          {
            params: {
              address: `${cep}, ${rua}`,
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

          // console.log("Latitude e Longitude encontradas:", latitude, longitude);
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

    mostrarTeste(event) {
      event.preventDefault(); // Previne o comportamento padrão do link
      this.mostrarResumo = true;
    },

    fetchMyImoveis() {
      let id_user = this.id_user;

      api.listmyImoveis(id_user).then((res) => {
        this.myImoveis = res.data;

        let latitude;
        let longitude;

        this.map = new google.maps.Map(this.$refs.mapElement, {
          center: { lat: this.latitude, lng: this.longitude },
          zoom: 10,
        });

        // this.mapImoveis = L.map(this.$refs.mapElement).setView([this.latitudeImoveis, this.longitudeImoveis], 10);
        // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //   maxZoom: 19,
        //   attribution: '© OpenStreetMap contributors'
        // }).addTo(this.mapImoveis);

        res.data.map(async (imovel) => {
          // console.log(imovel.localizacao.rua)
          await this.buscarCoordenadas(
            imovel.localizacao.cep,
            imovel.localizacao.logradouro
          ).then((res) => {
            if (res) {
              this.updateMap();
            }
          });
        });

        res.data.forEach((imovel) => {
          let cep = imovel.localizacao.cep;
          const apiKey = "1f64d822c44341f38692b2b37ec70e64";

          axios
            .get(
              `https://api.opencagedata.com/geocode/v1/json?q=${cep}+Brazil&key=${apiKey}`
            )
            .then((response) => {
              const data = response.data;
              if (data && data.results && data.results.length > 0) {
                const location = data.results[0].geometry;

                latitude = location.lat;
                longitude = location.lng;

                // L.marker([latitude, longitude]).addTo(this.map)
                //   .bindPopup(`Latitude: ${location.lat} Longitude: ${location.lng}`).openPopup();
              }
            })
            .catch((error) =>
              console.error("Erro ao buscar coordenadas do CEP:", error)
            );
        });
      });
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

          this.selectPais = "Brasil";
          this.selectEstado = estado;
          this.selectCidade = cidade;
          this.selectBairro = bairro;
          this.logradouro = rua;

          // await this.buscarCoordenadas(cep, cidade, estado);
          await this.buscarCoordenadas(cep, rua);
        } catch (error) {
          console.error("Erro ao consultar CEP: ", error);
        }
      }
    },
    async buscarCoordenadas(cep, rua) {
      // trocar pela apiKey do cliente
      const apiKey = "AIzaSyC59bw9mWYet8FeTX0tZZdQ_FzBQUxaRjE";

      try {
        const res = await axios.get(
          "https://maps.googleapis.com/maps/api/geocode/json",
          {
            params: {
              address: `${cep}, ${rua}`,
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

          // console.log("Latitude e Longitude encontradas:", latitude, longitude);
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
    updateMap() {
      this.map.setCenter({ lat: this.latitude, lng: this.longitude });
      this.map.setZoom(4);
      this.addMarker();
    },
    addMarker() {
      const lat = this.latitude;
      const lng = this.longitude;
      // console.log(this.latitudeImoveis)
      if (!isNaN(lat) && !isNaN(lng)) {
        const customIcon = {
          url: "https://zonu.com.br/emailmkt/IconLocationMaps.png", // Caminho para o ícone personalizado
          scaledSize: new google.maps.Size(38, 38), // Ajuste o tamanho do ícone conforme necessário
          anchor: new google.maps.Point(19, 38), // Ajuste a âncora do ícone conforme necessário
        };

        const marker = new google.maps.Marker({
          position: { lat: lat, lng: lng },
          map: this.map,
          icon: customIcon,
        });

        const infowindow = new google.maps.InfoWindow({
          content: `Latitude: ${lat}, Longitude: ${lng}`,
        });

        marker.addListener("click", () => {
          infowindow.open(this.map, marker);
        });

        this.markes.push(marker); // Armazena o marker no array
      } else {
        console.error("Coordenadas inválidas");
      }
    },

    updateMapImoveis() {
      this.mapImoveis.setCenter({
        lat: this.latitudeImoveis,
        lng: this.longitudeImoveis,
      });
      this.mapImoveis.setZoom(4);
      this.addMarkerImoveis();
    },
    addMarkerImoveis() {
      const lat = this.latitudeImoveis;
      const lng = this.longitudeImoveis;
      // console.log(this.latitudeImoveis);
      if (!isNaN(lat) && !isNaN(lng)) {
        const customIcon = {
          url: "https://zonu.com.br/emailmkt/IconLocationMaps.png", // Caminho para o ícone personalizado
          scaledSize: new google.maps.Size(38, 38), // Ajuste o tamanho do ícone conforme necessário
          anchor: new google.maps.Point(19, 38), // Ajuste a âncora do ícone conforme necessário
        };

        const marker = new google.maps.Marker({
          position: { lat: lat, lng: lng },
          map: this.mapImoveis,
          icon: customIcon,
        });

        const infowindow = new google.maps.InfoWindow({
          content: `Latitude: ${lat}, Longitude: ${lng}`,
        });

        marker.addListener("click", () => {
          infowindow.open(this.mapImoveis, marker);
        });

        this.markes.push(marker); // Armazena o marker no array
      } else {
        console.error("Coordenadas inválidas");
      }
    },
    ferchProgress() {
      let id_user = this.id_user;

      api.progress(id_user).then((res) => {
        this.perfil = res.data.perfil;
        this.capa = res.data.logo_capa;
        this.imovel = res.data.imovel;
        this.publicacao = res.data.publicacao;

        if (
          this.perfil == 1 &&
          this.capa == 1 &&
          this.imovel == 1 &&
          this.publicacao == 1
        ) {
          this.progressView = false;
        } else {
          this.progressView = true;
        }
      });
    },

    fetchMyCondominios() {
      let id_user = this.id_user;
      api.listcondominio(id_user).then((res) => {
        this.totalCondominios = res.data.response.length;
      });
    },
  },
};
</script>
