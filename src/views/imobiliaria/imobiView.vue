<template>
    <div class="wrapper">
        <div class="main">
            <Navbar />
            <main class="content">
                <div class="card" style="margin-top: -80px;">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-3">
                                <select style="height: 55px;" id="disabledSelect" class="form-select">
                                    <option>Disabled select</option>
                                </select>
                            </div>
                            <div class="col-5">
                                <select style="height: 55px;" id="disabledSelect" class="form-select">
                                    <option>Disabled select</option>
                                </select>
                            </div>
                            <div class="col-3">
                                <select style="height: 55px;" id="disabledSelect" class="form-select">
                                    <option>Disabled select</option>
                                </select>
                            </div>
                            <div class="col-1">
                                <button style="height: 55px;" type="button"
                                    class="btn btn-primary btn-lg">Buscar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid p-0 mt-5">
                    <h1 class="h3 text-dark">
                        <strong>Encontre o melhor imóvel</strong>
                    </h1>
                </div>

                <div class="container-fluid mt-5">
                    <div class="row">
                        <div class="col-3">
                            <div class="card" style="width: 18rem;">
                                <img src="../../../assets/images/venda.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class="card-text">Imóveis para alugar</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-3">
                            <div class="card" style="width: 18rem;">
                                <img src="../../../assets/images/apartamento.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class="card-text">Imóveis a venda</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-3">
                            <div class="card" style="width: 18rem;">
                                <img src="../../../assets/images/casaPraia.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class="card-text">Vista para o mar</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-3">
                            <div class="card" style="width: 18rem;">
                                <img src="../../../assets/images/garagem.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class="card-text">Com garagem</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid p-0 mt-5">
                    <h1 class="h3 text-dark">
                        <strong>Último imóveis cadastrados</strong>
                    </h1>
                </div>

                <div class="container-fluid mt-3">
                    <div class="row">
                        <div class="col-2 m-3">
                            <div class="card" style="width: 15rem;">
                                <img src="../../../assets/images/venda.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class="card-text">Imóveis para alugar</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-2 m-3">
                            <div class="card" style="width: 15rem;">
                                <img src="../../../assets/images/venda.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class="card-text">Imóveis para alugar</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-2 m-3">
                            <div class="card" style="width: 15rem;">
                                <img src="../../../assets/images/apartamento.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class="card-text">Imóveis a venda</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-2 m-3">
                            <div class="card" style="width: 15rem;">
                                <img src="../../../assets/images/casaPraia.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class="card-text">Vista para o mar</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-2 m-3">
                            <div class="card" style="width: 15rem;">
                                <img src="../../../assets/images/casaPraia.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class="card-text">Vista para o mar</p>
                                </div>
                            </div>
                        </div>





                    </div>
                </div>

                <div class="container-fluid p-0 mt-3">
                    <h1 class="h3 text-dark">
                        <strong>Perto de você</strong>
                    </h1>
                </div>

                <div class="col-xl-12 col-xxl-12 mt-3">
                    <div class="card flex-fill w-100">
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




            </main>
            <Footer />
        </div>
    </div>
</template>
<script>
import Navbar from "../../components/navbar/navbar-imobiliaria.vue";
import Footer from "../../components/footer/index.vue";

import api from "../../../service/api/index";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import L from "leaflet";
import _ from "lodash";
import "leaflet/dist/leaflet.css";



export default {
    name: "ImobilView",

    components: {
        Navbar,
        Footer,
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
            latitude: '-15.7934',
            longitude: '-47.8823',
        }
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
            this.map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: this.latitude, lng: this.longitude },
                zoom: 10
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
                    url: 'https://zonu.com.br/emailmkt/IconLocationMaps.png', // Caminho para o ícone personalizado
                    scaledSize: new google.maps.Size(30, 38), // Ajuste o tamanho do ícone conforme necessário
                    anchor: new google.maps.Point(19, 38) // Ajuste a âncora do ícone conforme necessário
                };

                const marker = new google.maps.Marker({
                    position: { lat: lat, lng: lng },
                    map: this.map,
                    icon: customIcon
                });

                const infowindow = new google.maps.InfoWindow({
                    content: `Latitude: ${lat}, Longitude: ${lng}`
                });

                marker.addListener('click', () => {
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

                let latitude
                let longitude

                this.map = new google.maps.Map(this.$refs.mapElement, {
                    center: { lat: this.latitude, lng: this.longitude },
                    zoom: 10
                });

                // this.mapImoveis = L.map(this.$refs.mapElement).setView([this.latitudeImoveis, this.longitudeImoveis], 10);
                // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                //   maxZoom: 19,
                //   attribution: '© OpenStreetMap contributors'
                // }).addTo(this.mapImoveis);

                res.data.map(async (imovel) => {
                    // console.log(imovel.localizacao.rua)
                    await this.buscarCoordenadas(imovel.localizacao.cep, imovel.localizacao.logradouro).then((res) => {
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
                    url: 'https://zonu.com.br/emailmkt/IconLocationMaps.png', // Caminho para o ícone personalizado
                    scaledSize: new google.maps.Size(38, 38), // Ajuste o tamanho do ícone conforme necessário
                    anchor: new google.maps.Point(19, 38) // Ajuste a âncora do ícone conforme necessário
                };

                const marker = new google.maps.Marker({
                    position: { lat: lat, lng: lng },
                    map: this.map,
                    icon: customIcon
                });

                const infowindow = new google.maps.InfoWindow({
                    content: `Latitude: ${lat}, Longitude: ${lng}`
                });

                marker.addListener('click', () => {
                    infowindow.open(this.map, marker);
                });

                this.markes.push(marker); // Armazena o marker no array
            } else {
                console.error('Coordenadas inválidas');
            }
        },

        updateMapImoveis() {
            this.mapImoveis.setCenter({ lat: this.latitudeImoveis, lng: this.longitudeImoveis });
            this.mapImoveis.setZoom(4);
            this.addMarkerImoveis();
        },
        addMarkerImoveis() {
            const lat = this.latitudeImoveis;
            const lng = this.longitudeImoveis;
            console.log(this.latitudeImoveis)
            if (!isNaN(lat) && !isNaN(lng)) {
                const customIcon = {
                    url: 'https://zonu.com.br/emailmkt/IconLocationMaps.png', // Caminho para o ícone personalizado
                    scaledSize: new google.maps.Size(28, 18), // Ajuste o tamanho do ícone conforme necessário
                    anchor: new google.maps.Point(29, 38) // Ajuste a âncora do ícone conforme necessário
                };

                const marker = new google.maps.Marker({
                    position: { lat: lat, lng: lng },
                    map: this.mapImoveis,
                    icon: customIcon
                });

                const infowindow = new google.maps.InfoWindow({
                    content: `Latitude: ${lat}, Longitude: ${lng}`
                });

                marker.addListener('click', () => {
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