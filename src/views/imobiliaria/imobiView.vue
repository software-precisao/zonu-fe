<template>
    <div class="wrapper">
        <div class="main">
            <Navbar />
            <main class="content">
                <div class="card" style="margin-top: -80px;">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-3">
                                <select v-model="tipoNegocio" @change="onTipoNegocioChange" style="height: 55px;"
                                    class="form-select">
                                    <option value="">Venda ou Aluguel</option>
                                    <option value="Venda">Venda</option>
                                    <option value="Aluguel">Aluguel</option>
                                </select>
                            </div>
                            <div class="col-5">
                                <select v-model="cidadeSelecionada" @change="onCidadeChange" style="height: 55px;"
                                    class="form-select">
                                    <option value="">Cidade</option>
                                    <option v-for="cidade in cidades" :key="cidade" :value="cidade">{{ cidade }}
                                    </option>
                                </select>
                            </div>
                            <div class="col-3">
                                <select v-model="faixaPreco" style="height: 55px;" class="form-select">
                                    <option value="">Preço</option>
                                    <option value="500-1000">500R$ - 1.000R$</option>
                                    <option value="1000-2000">1.000R$ - 2.000R$</option>
                                    <option value="2000-3000">2.000R$ - 3.000R$</option>
                                    <option value="3000-4000">3.000R$ - 4.000R$</option>
                                    <option value="4000-20000">4.000R$ - 20.000R$</option>
                                    <option value="20000-50000">20.000R$ - 50.000R$</option>
                                    <option value="50000-100000">50.000R$ - 100.000R$</option>
                                    <option value="100000-1000000">100.000R$ - 1.000.000R$</option>
                                </select>
                            </div>
                            <div class="col-1">
                                <button style="height: 55px;" type="button"
                                    class="btn btn-primary btn-lg" @click="redirectFiltro">Buscar</button>
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
                    <!-- <div class="row">
                        <div class="col-3"> -->
                    <div class="d-flex flex-wrap justify-content-flex-start">
                        <div class="mx-3">
                            <a href="#" @click="storeFiltro('Aluguel')" style="color: inherit; text-decoration: none;">
                            <div class="card" style="width: 18rem;">
                                <img src="../../../assets/images/venda.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class="card-text">Imóveis para alugar</p>
                                </div>
                            </div>
                            </a>
                        </div>

                        <div class="mx-3">
                            <a href="#" @click="storeFiltro('Venda')" style="color: inherit; text-decoration: none;">
                            <div class="card" style="width: 18rem;">
                                <img src="../../../assets/images/apartamento.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class="card-text">Imóveis a venda</p>
                                </div>
                            </div>
                            </a> 
                        </div>

                        <div class="mx-3">
                            <a href="#" @click="storeFiltroVistaMar('Vista para o mar')" style="color: inherit; text-decoration: none;">
                            <div class="card" style="width: 18rem;">
                                <img src="../../../assets/images/casaPraia.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class="card-text">Vista para o mar</p>
                                </div>
                            </div>
                            </a>
                        </div>

                        <div class="mx-3">
                            <a href="#" @click="storeFiltroGaragem('Sim')" style="color: inherit; text-decoration: none;">
                                <div class="card" style="width: 18rem;">
                                    <img src="../../../assets/images/garagem.jpg" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <p class="card-text">Com garagem</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="container-fluid p-0 mt-5">
                    <h1 class="h3 text-dark">
                        <strong>Último imóveis cadastrados</strong>
                    </h1>
                </div>

                <div class="container-fluid mt-3">
                    <!-- <div class="row">
                        <div class="col-2 m-3" v-for="imovel in imoveis"> -->
                    <div class="d-flex flex-wrap justify-content-flex-start">
                        <div class=" mx-2" v-for="imovel in imoveis">
                            {{ console.log(imovel) }}
                            <a href="#" @click="storeImovelId(imovel.id_imovel)"
                                style="color: inherit; text-decoration: none;">
                                <div class="card" style="width: 15rem;">
                                    <img :src="`https://zonu.com.br/api${imovel.fotos[0].foto}`" class="card-img-top"
                                        alt="..." style="width: 240px; height: 180px;">
                                    <div class="card-body">
                                        <h5>
                                            <i class="fa fa-building"></i>
                                            <a href="#" style="text-decoration: none; color: #000;">
                                                <strong>{{ " " }} {{ imovel.descricao.titulo }} </strong>
                                            </a>
                                            <span class="badge text-bg-success">{{ imovel.preco.tipo_negocio }}</span>
                                        </h5>
                                        <h5 class="text-info">
                                            <strong>{{ formatCurrency(imovel.preco.preco_imovel) }}</strong><a
                                                style="float: inline-end" class="text-info"></a>
                                        </h5>
                                        <h5 class="text-dark">
                                            <i class="fa fa-user"></i>
                                            <small>
                                                {{ " " }} {{ imovel.usuario.nome }} {{ imovel.usuario.sobrenome
                                                }}</small>
                                        </h5>
                                        <h5 class="text-dark">
                                            <small><i class="fa fa-map-marker"></i>
                                                {{ imovel.localizacao.logradouro }},
                                                {{ imovel.localizacao.numero }} | {{ imovel.localizacao.bairro }},
                                                {{ imovel.localizacao.cidade }}</small>
                                        </h5>
                                        <h5 class="text-dark">
                                            <small><i class="fa fa-calendar"></i> Atualizado:
                                                {{ formatarData(imovel.updatedAt) }}</small>
                                        </h5>
                                        <i v-for="star in estrelas" :key="star" class="text-warning fa fa-star"></i>
                                        <span class="text-success" style="float: inline-end; font-weight: 900">
                                            {{ getQualidade(imovel.id_imovel) }}</span>
                                    </div>
                                </div>
                            </a>
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

            imoveis: [],
            tipoNegocio: '',
            cidades: [],
            cidadeSelecionada: '',
            faixaPreco: '',

            qualidadeProgress: '',
            qualidade: {},
            estrelaImovel: {},
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

        this.fetchImoveis();
        this.fetchCidades();
        // console.log("Aqui estão os imóveis => ", this.imoveis)
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
        faixaPreco(newVal) {
            this.fetchImoveisFiltrados();
        },
        cidadeSelecionada(newVal) {
            this.fetchImoveisFiltrados();
        },
        tipoNegocio(newVal) {
            this.fetchImoveisFiltrados();
        },
    },

    methods: {
        async fetchImoveis() {
            try {
                const response = await api.listallImoveis();
                this.imoveis = response.data;
                this.imoveis = this.ultimosImoveis(response.data);
                this.avaliarQualidadeCadastro(this.imoveis);
            } catch (error) {
                console.error('Erro ao buscar imóveis:', error);
            }
        },


        async fetchImoveisFiltrados() {
            try {
                const response = await api.listallImoveis();
                let imoveis = response.data;

                // Aplica todos os filtros de forma encadeada
                if (this.tipoNegocio) {
                    imoveis = imoveis.filter(imovel => imovel.preco.tipo_negocio === this.tipoNegocio);
                }

                if (this.cidadeSelecionada) {
                    imoveis = imoveis.filter(imovel => imovel.localizacao.cidade === this.cidadeSelecionada);
                }

                if (this.faixaPreco) {
                    const [minPreco, maxPreco] = this.faixaPreco.split('-').map(Number);
                    imoveis = imoveis.filter(imovel => {
                        const preco = parseFloat(imovel.preco.preco_imovel);
                        return preco >= minPreco && preco <= maxPreco;
                    });
                }

                this.imoveis = this.ultimosImoveis(imoveis);
                this.avaliarQualidadeCadastro(this.imoveis);
            } catch (error) {
                console.error('Erro ao buscar imóveis filtrados:', error);
            }
        },

        async fetchCidades() {
            try {
                const response = await api.listallImoveis(); // Ou o endpoint que retorna todas as cidades
                const imoveis = response.data;
                const cidades = [...new Set(imoveis.map(imovel => imovel.localizacao.cidade))];
                this.cidades = cidades;
            } catch (error) {
                console.error('Erro ao buscar cidades:', error);
            }
        },

        onCidadeChange() {
            this.fetchImoveisFiltrados();
        },

        onTipoNegocioChange() {
            this.fetchImoveisFiltrados();
        },

        onFaixaPrecoChange() {
            this.fetchImoveisFiltrados();
        },
        

        async fetchImoveisPorTipo(tipo) {
            try {
                let response = await api.listallImoveis();
                let imoveis = response.data;


                if (tipo) {
                    imoveis = imoveis.filter(imovel => imovel.preco.tipo_negocio === tipo);
                }

                this.imoveis = imoveis;
                this.imoveis = this.ultimosImoveis(imoveis);
                this.avaliarQualidadeCadastro(this.imoveis);
            } catch (error) {
                console.error('Erro ao buscar imóveis por tipo:', error);
            }
        },

        ultimosImoveis(imoveis) {
            return imoveis
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .slice(0, 5);
        },

        storeImovelId(id) {
            sessionStorage.setItem('imovelId', id);
            this.$router.push({ name: 'imovel' });
        },

        storeFiltro(filtro) {
            sessionStorage.setItem('TipoNegocio', filtro);
            this.$router.push({ name: 'filtro-imovel' });
        },

        storeFiltroVistaMar(filtro) {
            sessionStorage.setItem('VistaProMar', filtro);
            this.$router.push({ name: 'filtro-imovel' });
        },

        storeFiltroGaragem(filtro) {
            sessionStorage.setItem('Garagem', filtro);
            this.$router.push({ name: 'filtro-imovel' });
        },

        redirectFiltro() {
            this.$router.push({ name: 'filtro-imovel' });
        },

        avaliarQualidadeCadastro(imoveis) {
            imoveis.forEach(imovel => {
                let totalCampos = 0;
                let camposNulos = 0;

                const analisarObjeto = (obj) => {
                    Object.values(obj).forEach(val => {
                        if (val && typeof val === 'object' && !Array.isArray(val)) {
                            analisarObjeto(val);
                        } else {
                            totalCampos++;
                            if (val === null || val === '') {
                                camposNulos++;
                            }
                        }
                    });
                };

                analisarObjeto(imovel);

                const pontuacaoMaxima = 10;
                const pontuacao = Math.round((totalCampos - camposNulos) / totalCampos * pontuacaoMaxima);
                const porcentagem = Math.round((totalCampos - camposNulos) / totalCampos * 100); // Calcula a porcentagem

                imovel.pontuacaoQualidade = `${pontuacao}/10`;
                imovel.porcentagemQualidade = porcentagem;
                // console.log('qualidade: ', imovel.pontuacaoQualidade)
                // this.qualidade = imovel.pontuacaoQualidade;
                this.qualidade[imovel.id_imovel] = imovel.pontuacaoQualidade
                this.estrelaImovel[imovel.id_imovel] = imovel.pontuacaoQualidade


                if (porcentagem == 100) {
                    this.estrelas = 5;
                    this.msgQualidade = 'Excelente';
                } else if (porcentagem >= 80) {
                    this.estrelas = 4;
                    this.msgQualidade = 'Muito Bom';
                } else if (porcentagem >= 60) {
                    this.estrelas = 3;
                    this.msgQualidade = 'Bom';
                } else if (porcentagem >= 40) {
                    this.estrelas = 2;
                    this.msgQualidade = 'Regular';
                } else if (porcentagem >= 20) {
                    this.estrelas = 1;
                    this.msgQualidade = 'Ruim';
                } else {
                    this.estrelas = 0;
                    this.msgQualidade = 'Péssimo';
                }

                this.qualidadeProgress = porcentagem;
                // this.qualidade[imovel.id_imovel] = {
                //     pontuacaoQualidade: `${pontuacao}/10`,
                //     estrelas: estrelas,
                // };

            });

            return imoveis;
        },
        getQualidade(id) {
            // console.log("qualidades: ", this.qualidade)
            return this.qualidade[id] ? this.qualidade[id] : '';
        },
        getEstrelas(id) {
            return this.qualidade[id] ? this.qualidade[id] : 0;
        },

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

                    // Correção nas propriedades de acordo com a resposta da AP
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
                            address: `${rua}, ${cep}`,
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
                    // console.log("imovel aqui ====>", imovel)
                    await this.buscarCoordenadas(imovel.localizacao.cep, imovel.localizacao.logradouro, imovel.localizacao.cidade, imovel.localizacao.estado, imovel.localizacao.bairro, imovel.localizacao.numero).then((res) => {
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
        async buscarCoordenadas(cep, rua, cidade, estado, bairro, numero) {
            // trocar pela apiKey do cliente
            const apiKey = "AIzaSyC59bw9mWYet8FeTX0tZZdQ_FzBQUxaRjE";

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

        formatCurrency(value) {
            if (typeof value !== "number") {
                value = parseFloat(value);
            }
            return value.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
            });
        },
        formatarData(dataString) {
            if (!dataString) return "";
            const data = new Date(dataString);
            return data.toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
            });
        },
    },

};
</script>