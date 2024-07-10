<template>
  <div class="wrapper">

    <Sidebar />
    <div class="main">
      <Navbar />

      <main class="content">
        <div class="container-fluid p-0">

          <div v-if="mostrarSkeleton" class="skeleton-title-dashboard"></div>
          <h1 v-if="!mostrarSkeleton" class="h3 mb-3"><strong>Dashboard |</strong> Construtora</h1>

          <div class="col-xl-12 mt-2" v-if="progressView">
            <div class="w-100">
              <div class="row">
                <div class="row" style="margin-left: 2%; margin-top: 2%; margin-bottom: 3%;">
                  <div class="col-xl-2">
                    <div v-if="mostrarSkeleton" class="skeleton-card"></div>
                    <div class="card" v-if="!mostrarSkeleton">
                      <div class="card-body">
                        <div class="row">
                          <h6 class="text-center"><small>Perfil</small></h6>
                          <img class="iconProgress" src="../../../assets/images/icons/iconPerfil.png" alt="">
                          <div v-if="perfil === 0">
                            <img class="mt-3 iconCheck img-fluid"
                              src="../../../assets/images/icons/iconCheckInActive.png" alt="">
                          </div>
                          <div v-if="perfil === 1">
                            <img class="mt-3 iconCheck img-fluid" src="../../../assets/images/icons/iconCheckActive.png"
                              alt="">
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-1 mt-5">
                    <hr class="linhacomplete">
                  </div>

                  <div class="col-xl-2">
                    <div v-if="mostrarSkeleton" class="skeleton-card"></div>
                    <div class="card" v-if="!mostrarSkeleton">
                      <div class="card-body">
                        <div class="row">
                          <h6 class="text-center"><small>Qualidade 9/10</small></h6>
                          <img class="iconProgress" src="../../../assets/images/icons/iconStar.png" alt="">
                          <div v-if="capa === 0">
                            <img class="mt-3 iconCheck img-fluid"
                              src="../../../assets/images/icons/iconCheckInActive.png" alt="">
                          </div>
                          <div v-if="capa === 1">
                            <img class="mt-3 iconCheck img-fluid" src="../../../assets/images/icons/iconCheckActive.png"
                              alt="">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-1 mt-5">
                    <hr class="linhacomplete">
                  </div>
                  <div class="col-xl-2">
                    <div v-if="mostrarSkeleton" class="skeleton-card"></div>
                    <div class="card" v-if="!mostrarSkeleton">
                      <div class="card-body">
                        <div class="row">
                          <h6 class="text-center"><small>Imóvel</small> </h6>
                          <img class="iconProgress" src="../../../assets/images/icons/iconImovel.png" alt="">

                          <div v-if="imovel === 0">
                            <img class="mt-3 iconCheck img-fluid"
                              src="../../../assets/images/icons/iconCheckInActive.png" alt="">
                          </div>
                          <div v-if="imovel === 1">
                            <img class="mt-3 iconCheck img-fluid" src="../../../assets/images/icons/iconCheckActive.png"
                              alt="">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-1 mt-5">
                    <hr class="linhacomplete">
                  </div>
                  <div class="col-xl-2">
                    <div v-if="mostrarSkeleton" class="skeleton-card"></div>
                    <div class="card" v-if="!mostrarSkeleton">
                      <div class="card-body">
                        <div class="row">
                          <h6 class="text-center"><small>Publicação</small> </h6>
                          <img class="iconProgress" src="../../../assets/images/icons/iconPublish.png" alt="">
                          <div v-if="publicacao === 0">
                            <img class="mt-3 iconCheck img-fluid"
                              src="../../../assets/images/icons/iconCheckInActive.png" alt="">
                          </div>
                          <div v-if="publicacao === 1">
                            <img class="mt-3 iconCheck img-fluid" src="../../../assets/images/icons/iconCheckActive.png"
                              alt="">
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
          <div class="row">
          </div>
          <div class="col-xl-12 mt-5">
            <div class="w-100">
              <div class="row">
                <div class="col-xl-5 col-xxl-5">
                  <ListImoveis />
                </div>

                <div class="col-xl-7 col-xxl-7">
                  <div class="card flex-fill w-100">
                    <div class="card-header">
                      <h5 class="card-title mb-0"><i class="fa fa-map-marker"></i> Localize seus imóveis</h5>
                    </div>
                    <div class="card-body py-3">
                      <div id="mapImoveis" ref="mapElement"
                        style="height: 438px; width:100%; border: 0; position: sticky; bottom: 0;"></div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-4 col-xxl-4">
                  <GraphAluguelVenda />
                </div>

                <div class="col-xl-4 col-xxl-4">
                  <GraphPublicados />
                </div>
                <div class="col-xl-4 col-xxl-4">
                  <GraphTipo />
                </div>


                <div class="col-xl-12 col-xxl-12">
                  <FilterGraph />
                </div>

                <div class="col-xl-12 col-xxl-12">
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
import Sidebar from '../../components/sidebar/index.vue'
import Navbar from '../../components/navbar/index.vue'
import Footer from '../../components/footer/index.vue'
import FilterGraph from '../../components/graph/index.vue'
import CardsInfo from '../../components/client/cards/cardComp.vue'
import api from '../../../service/api/index'
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import L from 'leaflet';
import _ from 'lodash';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import GraphAluguelVenda from '../../components/client/graph/graphAluguelVendaComp.vue'
import GraphPublicados from '../../components/client/graph/graphPubliComp.vue'
import GraphTipo from '../../components/client/graph/graphTipoComp.vue'
import GraphMercado from '../../components/client/graph/graphMercadpComp.vue'
import ListImoveis from '../../components/client/imoveis/cardImoveisComp.vue'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});


export default {
  name: 'MainView',
  props: {
    cep: String,
  },
  data() {
    return {
      token: localStorage.getItem('token'),
      perfil: 0,
      capa: 0,
      imovel: 0,
      publicacao: 0,
      progressView: false,
      id_user: '',
      latitudeImoveis: '-15.7934',
      longitudeImoveis: '-47.8823',
      mapImoveis: null,
      markerIMoveis: null,
      mostrarResumo: false,
    }
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
    ListImoveis
  },

  created() {
    this.debouncedCheckCEP = _.debounce(this.consultarCEP, 100);
  },

  mounted() {
    let token = this.token;
    let decode = jwtDecode(token);
    let id_user = decode.id_user;
    this.nome = decode.nome
    this.sobrenome = decode.sobrenome
    this.id_user = id_user
    const iniciais = this.nome.charAt(0) + this.sobrenome.charAt(0);
    this.iniciais = iniciais

    this.ferchProgress();
    this.fetchMyImoveis();
    this.fetchMyCondominios();
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
            this.initMap();
            this.updateMap();
          } else {
            this.initMap();
          }
        });
      } else {
        this.mostrarMapa = false;
      }
    },
  },


  methods: {
    initMap() {
      this.map = L.map("map").setView([this.latitude, this.longitude], 15);

      // Adiciona os tiles do OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
      }).addTo(this.map);

      this.addMarker();
    },

    updateMap() {
      this.map.setView([this.latitude, this.longitude], 15);
      this.addMarker();
    },
    addMarker() {
      const lat = this.latitude;
      const lng = this.longitude;

      if (!isNaN(lat) && !isNaN(lng)) {
        L.marker([lat, lng]).addTo(this.map)
          .bindPopup(`Latitude: ${lat}, Longitude: ${lng}`).openPopup();
      } else {
        console.error('Coordenadas inválidas');
      }
    },
    async consultarCEPLoc() {
      if (this.buscarCEP.length === 9) {
        const cep = this.buscarCEP.replace(/\D/g, '');

        try {
          const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

          // Correção nas propriedades de acordo com a resposta da API
          let rua = res.data.logradouro;
          let bairro = res.data.bairro;
          let cidade = res.data.localidade;
          let estado = res.data.uf;

          this.selectPais = "Brasil"
          this.selectEstado = estado
          this.selectCidade = cidade
          this.selectBairro = bairro
          this.logradouro = rua

          // await this.buscarCoordenadas(cep, cidade, estado);
          await this.buscarCoordenadasLoc(cep, rua);

        } catch (error) {
          console.error("Erro ao consultar CEP: ", error);
        }
      }
    },

    async buscarCoordenadasLoc(cep, rua) {
      // trocar pela apiKey do cliente
      const apiKey = 'AIzaSyC59bw9mWYet8FeTX0tZZdQ_FzBQUxaRjE';

      try {
        const res = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
          params: {
            address: `${cep}, ${rua}`,
            key: apiKey
          }
        });

        console.log(res.data)

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

      api.listmyImoveis(id_user).then(res => {
        this.myImoveis = res.data;


        let latitude
        let longitude

        this.mapImoveis = L.map(this.$refs.mapElement).setView([this.latitudeImoveis, this.longitudeImoveis], 10);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© OpenStreetMap contributors'
        }).addTo(this.mapImoveis);

        res.data.map(async (imovel) => {
          await this.buscarCoordenadas(imovel.localizacao.cep, imovel.localizacao.rua).then((res) => {
            if (res) {
              this.updateMap()
            }
          })

        })


        res.data.forEach(imovel => {
          let cep = imovel.localizacao.cep;
          const apiKey = '1f64d822c44341f38692b2b37ec70e64';

          axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${cep}+Brazil&key=${apiKey}`)
            .then(response => {

              const data = response.data;
              if (data && data.results && data.results.length > 0) {
                const location = data.results[0].geometry;

                latitude = location.lat;
                longitude = location.lng;


                L.marker([latitude, longitude]).addTo(map)
                  .bindPopup(`Latitude: ${location.lat} Longitude: ${location.lng}`).openPopup();

              }
            })
            .catch(error => console.error('Erro ao buscar coordenadas do CEP:', error));
        });

      })
    },


    async consultarCEP() {
      if (this.buscarCEP.length === 9) {
        const cep = this.buscarCEP.replace(/\D/g, '');

        try {
          const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

          // Correção nas propriedades de acordo com a resposta da API
          let rua = res.data.logradouro;
          let bairro = res.data.bairro;
          let cidade = res.data.localidade;
          let estado = res.data.uf;

          this.selectPais = "Brasil"
          this.selectEstado = estado
          this.selectCidade = cidade
          this.selectBairro = bairro
          this.logradouro = rua

          // await this.buscarCoordenadas(cep, cidade, estado);
          await this.buscarCoordenadas(cep, rua);

        } catch (error) {
          console.error("Erro ao consultar CEP: ", error);
        }
      }
    },
    async buscarCoordenadas(cep, rua) {
      // trocar pela apiKey do cliente
      const apiKey = 'AIzaSyC59bw9mWYet8FeTX0tZZdQ_FzBQUxaRjE';

      try {
        const res = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
          params: {
            address: `${cep}, ${rua}`,
            key: apiKey
          }
        });

        if (res.data && res.data.results && res.data.results.length > 0) {
          const location = res.data.results[0].geometry.location;
          const latitude = location.lat;
          const longitude = location.lng;

          this.latitudeImoveis = latitude;
          this.longitudeImoveis = longitude;

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
    updateMapImoveis() {
      this.mapImoveis.setView([this.latitudeImoveis, this.longitudeImoveis], 4);
      this.addMarkerImoveis();
    },
    addMarkerImoveis() {
      const lat = this.latitudeImoveis;
      const lng = this.longitudeImoveis;

      if (!isNaN(lat) && !isNaN(lng)) {
        L.marker([lat, lng]).addTo(this.mapImoveis)
        // .bindPopup(`Latitude: ${lat}, Longitude: ${lng}`).openPopup();
      } else {
        console.error('Coordenadas inválidas');
      }
    },
    ferchProgress() {
      let id_user = this.id_user;

      api.progress(id_user).then(res => {

        this.perfil = res.data.perfil;
        this.capa = res.data.logo_capa;
        this.imovel = res.data.imovel;
        this.publicacao = res.data.publicacao;

        if (this.perfil == 1 && this.capa == 1 && this.imovel == 1 && this.publicacao == 1) {
          this.progressView = false;
        } else {
          this.progressView = true;
        }

      })
    },

    fetchMyCondominios() {
      let id_user = this.id_user
      api.listcondominio(id_user).then((res) => {
        this.totalCondominios = res.data.response.length;
      })
    },










  },



}
</script>