<template>
    <div class="wrapper">
        <div class="main">
            <Navbar />
            <main class="content">
                <!-- <div class="card" style="margin-top: -80px;">
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
                </div> -->

                <div class="container-fluid">
                    <div class="row">
                        <div class="card col-3 m-2">
                            <div class="card-body">
                                <div class="row">
                                    <div class="container-fluid p-0 mt-3 mb-3">
                                        <h1 class="h3 text-dark">
                                            <strong>Aplique aqui o seu filtro</strong>
                                        </h1>
                                        <h6 class="h3 text-dark" style="font-size: 13px; font-weight: 100;">
                                            <span>Aluguel - casas e apartamentos</span>
                                        </h6>

                                        <div class="form-group col-md-12 mt-5">
                                            <label  for="tipoNegocio"><small><strong>Tipo de negócio</strong></small></label>
                                            <!-- continuar a fazer os filtros se inspirando na olx -->
                                            <select class="form-select" v-model="tipoNegocio" @change="atualizarFiltros" style="height: 55px;">
                                                <option value="all">Todos os tipos</option>
                                                <option value="Aluguel">Aluguel</option>
                                                <option value="Venda">Venda</option>                                         
                                            </select>
                                        </div>

                                        <div class="form-group col-md-12 mt-3">
                                            <label for="condominio"><small><strong>Condomínio</strong></small></label>
                                            <select class="form-select" v-model="condominio" @change="atualizarFiltros" style="height: 55px;">
                                                <option value="all">Todos</option>
                                                <option value="Sim">Sim</option>
                                                <option value="Não">Não</option>
                                            </select>
                                        </div>

                                        <div class="form-group col-md-12 mt-3">
                                            <label for="valor"><small><strong>Intervalo de Valor (R$)</strong></small></label>
                                            <div>
                                                <div class="d-flex justify-content-evenly mt-2">
                                                <span>R$ {{ valorMin.toLocaleString() }}</span>
                                                <span>Até</span>
                                                <span>R$ {{ valorMax.toLocaleString() }}</span>
                                                </div>
                                                <div class="d-flex justify-content-around mt-2">
                                                <input 
                                                    type="number" 
                                                    v-model.number="valorMin" 
                                                    @input="atualizarFiltros" 
                                                    class="form-control" 
                                                    placeholder="Valor Mínimo"
                                                    min="0"
                                                />
                                                <input 
                                                    type="number" 
                                                    v-model.number="valorMax" 
                                                    @input="atualizarFiltros" 
                                                    class="form-control" 
                                                    placeholder="Valor Máximo"
                                                    min="0"
                                                />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="form-group col-md-12 mt-3">
                                            <label for="proximoMar"><small><strong>Proximidade ao Mar</strong></small></label>
                                            <select class="form-select" v-model="proximoMar" @change="atualizarFiltros" style="height: 55px;">
                                                <option value="all">Todos</option>
                                                <option value="Vista para o mar">Vista para o mar</option>
                                                <option value="Frente para o mar">Frente para o mar</option>
                                                <option value="Quadra do mar">Quadra do mar</option>
                                                <option value="Proximo ao mar">Próximo ao mar</option>
                                                <option value="all">Não</option>
                                            </select>
                                        </div>

                                        <div class="form-group col-md-12 mt-3">
                                            <label for="tipoImovel"><small><strong>Tipo de Imóvel</strong></small></label>
                                            <select class="form-select" v-model="tipoImovel" @change="atualizarFiltros" style="height: 55px;">
                                                <option value="all">Todos</option>
                                                <option value="Casa">Casa</option>
                                                <option value="Apartamento">Apartamento</option>
                                                <option value="Flat">Flat</option>
                                                <option value="Terreno">Terreno</option>
                                                <option value="Sítio">Sítio</option>
                                                <option value="Haras">Haras</option>
                                                <option value="Kitnet">Kitnet</option>
                                                <option value="Fazenda">Fazenda</option>
                                                <option value="Galpão">Galpão</option>
                                                <option value="Sala Comercial">Sala Comercial</option>
                                            </select>
                                        </div>

                                        <div class="form-group col-md-12 mt-3">
                                            <label for="perfilImovel"><small><strong>Perfil de Imóvel</strong></small></label>
                                            <select class="form-select" v-model="perfilImovel" @change="atualizarFiltros" style="height: 55px;">
                                                <option value="all">Todos</option>
                                                <option value="Residêncial">Residêncial</option>
                                                <option value="Comercial">Comercial</option>
                                                <option value="Industrial">Industrial</option>
                                                <option value="Rural">Rural</option>
                                                <option value="Temporada">Temporada</option>
                                            </select>
                                        </div>

                                        <div class="form-group col-md-12 mt-3">
                                            <label for="posicaoSolar"><small><strong>Posição Solar</strong></small></label>
                                            <select class="form-select" v-model="posicaoSolar" @change="atualizarFiltros" style="height: 55px;">
                                                <option value="all">Todos</option>
                                                <option value="Norte">Norte</option>
                                                <option value="Sul">Sul</option>
                                                <option value="Leste">Leste</option>
                                                <option value="Oeste">Oeste</option>
                                                <option value="Nordeste">Nordeste</option>
                                                <option value="Noroeste">Noroeste</option>
                                                <option value="Sudeste">Sudeste</option>
                                                <option value="Sudoeste">Sudoeste</option>
                                            </select>
                                        </div>

                                        <div class="form-group col-md-12 mt-3">
                                            <label for="situacaoImovel"><small><strong>Situação do Imóvel</strong></small></label>
                                            <select class="form-select" v-model="situacaoImovel" @change="atualizarFiltros" style="height: 55px;">
                                                <option value="all">Todos</option>
                                                <option value="Pronto pra morar">Pronto pra morar</option>
                                                <option value="Em construção">Em construção</option>
                                                <option value="Lançamento">Lançamento</option>
                                                <option value="Novo">Novo</option>
                                                <option value="Usado">Usado</option>
                                            </select>
                                        </div>

                                        <div class="form-group col-md-12 mt-3">
                                            <label for="temGaragem"><small><strong>Tem Garagem</strong></small></label>
                                            <select class="form-select" v-model="temGaragem" @change="atualizarFiltros" style="height: 55px;">
                                                <option value="all">Todos</option>
                                                <option value="Sim">Sim</option>
                                                <option value="Não">Não</option>
                                            </select>
                                        </div>

                                        <div class="form-group col-md-12 mt-3">
                                            <label for="estado"><small><strong>Estado</strong></small></label>
                                            <select class="form-select" v-model="estadoSelecionado" @change="atualizarFiltros" style="height: 55px;">
                                                <option value="all">Todos os estados</option>
                                                <option v-for="estado in estados" :key="estado.sigla" :value="estado.sigla">
                                                    {{ estado.nome }}
                                                </option>
                                            </select>
                                        </div>

                                        <div class="form-group col-md-12 mt-3">
                                            <label for="cidade"><small><strong>Cidade</strong></small></label>
                                            <select class="form-select" v-model="cidadeSelecionada" @change="atualizarFiltros" style="height: 55px;">
                                                <option value="all">Todas as cidades</option>
                                                <option v-for="cidade in cidadesFiltradas" :key="cidade" :value="cidade">
                                                    {{ cidade }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>

                        <div class="card col-8 m-2" style="width: 72.5%;">
    <div class="card-body">
        <div class="row">
            <div class="container-fluid p-0 mt-3 mb-3">
                <h1 class="h3 text-dark">
                    <strong>Seu resultado da pesquisa é...</strong>
                </h1>
                <h6 class="h3 text-dark" style="font-size: 13px; font-weight: 100;">
                    <span>1 - 12 de {{ quantidadeImoveis }} resultados</span>
                    
                </h6>
            </div>
            <div class="row">
                <div class="col-md-4 mb-3" v-for="imovel in imoveisOnCurrentPage">
                    <div class="mb-2" style="width: 80%; display: flex ;justify-content: flex-end;">
                        <button class="btn btn-light rounded-circle icon-button" @click="handleCompartilhar(imovel.id_imovel)">
                            <i class="fas fa-home"></i>
                        </button>
                    </div>
                    <a href="#" @click="storeImovelId(imovel.id_imovel)" style="color: inherit; text-decoration: none;">
                        {{console.log(imovel)}}
                        <div class="card shadow-lg" style="width: 15rem">
                            <img :src="`https://zonu.com.br/api${imovel.fotos[0].foto}`" class="card-img-top" alt="..." style="width: 240px; height: 180px;">
                            <div class="card-body">
                                <h5>
                                    <i class="fa fa-building"></i>
                                    <a href="#" style="text-decoration: none; color: #000;">
                                        <strong>{{ " " }} {{ imovel.descricao.titulo }} </strong>
                                    </a>
                                    <span class="badge text-bg-success">{{ imovel.preco.tipo_negocio }}</span>
                                </h5>
                                <h5 class="text-info">
                                    <strong>{{ formatCurrency(imovel.preco.preco_imovel) }}</strong>
                                </h5>
                                <h5 class="text-dark">
                                    <i class="fa fa-user"></i>
                                    <small>{{ " " }} {{ imovel.usuario.nome }} {{ imovel.usuario.sobrenome }}</small>
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

            <div class="d-grid mt-3 mb-3 gap-2 d-md-flex justify-content-md-end">
                <button class="btn btn-dark btn-sm" @click="previousPageImovel()"
                :disabled="currentPageImovel <= 1">
                    Anterior
                </button>
                <button class="btn btn-dark btn-sm" style="margin-right: 3% !important"
                    @click="nextPageImovel()"
                    :disabled="currentPageImovel >= totalPagesImoveis">
                    Proximo
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
            todosImoveis: [],
            quantidadeImoveis: 0,

            qualidadeProgress: '',
            qualidade: {},
            estrelaImovel: {},

            currentPageImovel: 1,
            perPageImovel: 12,
            searchImovel: '',

            // filtros
            tipoNegocio: 'all',
            condominio: 'all',
            valorMin: 0,
            valorMax: 0,
            proximoMar: 'all',  
            tipoImovel: 'all',
            perfilImovel: 'all',
            posicaoSolar: 'all',
            situacaoImovel: 'all',
            temGaragem: 'all',
            estadoSelecionado: "all",
            cidadeSelecionada: "all",
            estadoAnterior: "all",

            cidades: [],
            estados: [],

            estadosMap: [
                { sigla: "AC", nome: "Acre" },
                { sigla: "AL", nome: "Alagoas" },
                { sigla: "AP", nome: "Amapá" },
                { sigla: "AM", nome: "Amazonas" },
                { sigla: "BA", nome: "Bahia" },
                { sigla: "CE", nome: "Ceará" },
                { sigla: "DF", nome: "Distrito Federal" },
                { sigla: "ES", nome: "Espírito Santo" },
                { sigla: "GO", nome: "Goiás" },
                { sigla: "MA", nome: "Maranhão" },
                { sigla: "MT", nome: "Mato Grosso" },
                { sigla: "MS", nome: "Mato Grosso do Sul" },
                { sigla: "MG", nome: "Minas Gerais" },
                { sigla: "PA", nome: "Pará" },
                { sigla: "PB", nome: "Paraíba" },
                { sigla: "PR", nome: "Paraná" },
                { sigla: "PE", nome: "Pernambuco" },
                { sigla: "PI", nome: "Piauí" },
                { sigla: "RJ", nome: "Rio de Janeiro" },
                { sigla: "RN", nome: "Rio Grande do Norte" },
                { sigla: "RS", nome: "Rio Grande do Sul" },
                { sigla: "RO", nome: "Rondônia" },
                { sigla: "RR", nome: "Roraima" },
                { sigla: "SC", nome: "Santa Catarina" },
                { sigla: "SP", nome: "São Paulo" },
                { sigla: "SE", nome: "Sergipe" },
                { sigla: "TO", nome: "Tocantins" }
            ],
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

        const storedTipoNegocio = sessionStorage.getItem('TipoNegocio');
        if (storedTipoNegocio) {
            this.tipoNegocio = storedTipoNegocio;
            sessionStorage.removeItem('TipoNegocio');
        }
        const storedVistaMar = sessionStorage.getItem('VistaProMar');
        if (storedVistaMar) {
            this.proximoMar = storedVistaMar;
            sessionStorage.removeItem('VistaProMar');
        }
        const storedGaragem = sessionStorage.getItem('Garagem');
        if (storedGaragem) {
            this.temGaragem = storedGaragem;
            sessionStorage.removeItem('Garagem');
        }

        this.fetchImoveis()
        this.fetchCidades()
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
        // searchImovel(val) {
        //     if (!val) {
        //         this.fetchImoveis();
        //     }
        // },
    },

    computed: {
        // imoveisFiltrados() {
        //     return this.imoveis.filter(imovel => {
        //         const matchTipo = this.filtros.tipoImovel ? imovel.descricao.tipo_imovel === this.filtros.tipoImovel : true;
        //         const matchPrecoMinimo = this.filtros.precoMinimo ? imovel.preco.preco_imovel >= this.filtros.precoMinimo : true;
        //         const matchPrecoMaximo = this.filtros.precoMaximo ? imovel.preco.preco_imovel <= this.filtros.precoMaximo : true;
        //         const matchQuartos = this.filtros.quartos ? imovel.detalhes.quartos === this.filtros.quartos : true;
        //         return matchTipo && matchPrecoMinimo && matchPrecoMaximo && matchQuartos;
        //     });
        // },
        imoveisOnCurrentPage() {
            const startIndex = (this.currentPageImovel - 1) * this.perPageImovel
            const endIndex = startIndex + this.perPageImovel
            return this.imoveis
                .filter((imovel) => {
                    return imovel.descricao.titulo
                        .toLowerCase()
                        .includes(this.searchImovel.toLowerCase())
                })
                .slice(startIndex, endIndex)
        },
        totalPagesImoveis() {
            return Math.ceil(
                this.imoveis.filter((imovel) => {
                    this.currentPageConcept = 1
                    return imovel.descricao.titulo
                        .toLowerCase()
                        .includes(this.searchImovel.toLowerCase())
                }).length / this.perPageImovel,
            )
        },
        cidadesFiltradas() {
            if (this.estadoSelecionado === 'all') {
                return this.cidades;
            }
            return this.cidades.filter(cidade => {
                const imovel = this.todosImoveis.find(imovel => imovel.localizacao.cidade === cidade);
                return imovel && imovel.localizacao.estado === this.estadoSelecionado;
            });
        },
    },

    methods: {
        async handleCompartilhar(idImovel) {
            const userId = 123; // Substitua pelo ID do usuário real
            const currentDate = new Date().toISOString().split('T')[0]; // Obtém a data no formato YYYY-MM-DD
            const routeName = `http://localhost:5173/seu-imovel/?id=${idImovel}`; // Nome da rota onde o ID do usuário será usado

            // Gerar a URL com base no ID do usuário e na data atual
            const route = { name: routeName, params: { id: userId, date: currentDate } };
            const url = new URL(this.$router.resolve(route).href, window.location.origin);

            try {
        // Copiar o link para a área de transferência
                await navigator.clipboard.writeText(url.toString());
                sessionStorage.setItem('url', url.toString());
                sessionStorage.setItem('id', userId);
                sessionStorage.setItem('data', currentDate);
                this.copyStatus = 'Link copiado para a área de transferência!';
            } catch (err) {
                console.error('Falha ao copiar o link: ', err);
                this.copyStatus = 'Falha ao copiar o link.';
            }
        },
        async fetchCidades() {
            try {
                const response = await api.listallImoveis();
                const imoveis = response.data;
                const cidades = [...new Set(imoveis.map(imovel => imovel.localizacao.cidade))];
                const estadosSiglas = [...new Set(imoveis.map(imovel => imovel.localizacao.estado))];
                
                // Mapear as siglas para os nomes completos dos estados
                const estados = estadosSiglas.map(sigla => {
                    const estado = this.estadosMap.find(e => e.sigla === sigla);
                    return estado ? estado : { sigla: sigla, nome: sigla };
                });

                this.cidades = cidades;
                this.estados = estados;
            } catch (error) {
                console.error('Erro ao buscar cidades:', error);
            }
        },

        atualizarFiltros() {
            if (this.estadoSelecionado !== this.estadoAnterior) {
                this.cidadeSelecionada = 'all';
                this.estadoAnterior = this.estadoSelecionado;
            }

            console.log('Filtros atualizados:', {
                tipoNegocio: this.tipoNegocio,
                condominio: this.condominio,
                valorMin: this.valorMin,
                valorMax: this.valorMax,
                proximoMar: this.proximoMar,
                tipoImovel: this.tipoImovel,
                perfilImovel: this.perfilImovel,
                posicaoSolar: this.posicaoSolar,
                situacaoImovel: this.situacaoImovel,
                temGaragem: this.temGaragem,
                estado: this.estadoSelecionado,
                cidade: this.cidadeSelecionada,
                estadoAnterior: this.estadoAnterior
            });

            this.filtrarImoveis();
        },
        async fetchImoveis() {
            try {
                const res = await api.listallImoveis();
                this.todosImoveis = res.data;
                this.filtrarImoveis();
                this.quantidadeImoveis = res.data.length;
                // this.imoveis = this.ultimosImoveis(res.data);
                this.avaliarQualidadeCadastro(this.imoveis);
            } catch (error) {
                console.error('Erro ao buscar imóveis:', error);
            }
        },
        filtrarImoveis() {
            this.imoveis = this.todosImoveis.filter(imovel => {
                const filtroTipoNegocio = this.tipoNegocio === 'all' || imovel.preco.tipo_negocio === this.tipoNegocio;
                const filtroCondominio = this.condominio === 'all' || (this.condominio === 'Sim' && imovel.tem_condominio === "Sim") || (this.condominio === 'Não' && imovel.tem_condominio === "Não");
                
                // Verifica se os valores são 0 e, se sim, não aplica filtro de valor
                const valorImovel = imovel.preco.preco_imovel;
                const filtroValor = (this.valorMin === 0 && this.valorMax === 0) ||
                        (this.valorMin === 0 && valorImovel <= this.valorMax) ||
                        (this.valorMax === 0 && valorImovel >= this.valorMin) ||
                        (valorImovel >= this.valorMin && valorImovel <= this.valorMax);

                const filtroProximoMar = this.proximoMar === 'all' || imovel.info.proximo_mar === this.proximoMar;
                const filtroTipoImovel = this.tipoImovel === 'all' || imovel.info.tipo === this.tipoImovel;
                const filtroPerfilImovel = this.perfilImovel === 'all' || imovel.info.perfil_imovel === this.perfilImovel;
                const filtroPosicaoSolar = this.posicaoSolar === 'all' || imovel.info.posicao_solar === this.posicaoSolar;
                const filtroSituacaoImovel = this.situacaoImovel === 'all' || imovel.info.situacao_imovel === this.situacaoImovel;
                const filtroGaragem = this.temGaragem === 'all' ||
                              (this.temGaragem === 'Sim' && imovel.comodos.garagem > 0) ||
                              (this.temGaragem === 'Não' && (imovel.comodos.garagem === null || imovel.comodos.garagem === '0'));
                const filtroEstado = this.estadoSelecionado === 'all' || imovel.localizacao.estado === this.estadoSelecionado;
                const filtroCidade = this.cidadeSelecionada === 'all' || imovel.localizacao.cidade === this.cidadeSelecionada;

                return filtroTipoNegocio && filtroCondominio && filtroValor && filtroProximoMar && filtroTipoImovel && filtroPerfilImovel && filtroPosicaoSolar && filtroSituacaoImovel && filtroGaragem && filtroEstado && filtroCidade;
            });
        },

        // ultimosImoveis(imoveis) {
        //     return imoveis
        //         .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        //         .slice(0, 5);
        // },

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

        previousPageImovel() {
            if (this.currentPageImovel > 1) {
                this.currentPageImovel -= 1
            }
        },
        nextPageImovel() {
            if (this.currentPageImovel < this.totalPagesImoveis) {
                this.currentPageImovel += 1
            }
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

        storeImovelId(id) {
            sessionStorage.setItem('imovelId', id);
            this.$router.push({ name: 'imovel' });
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