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
            <div class="card col-3 m-2" style="width: 23.5%; max-height: 800px; overflow-y: auto">
              <div class="card-body">
                <div class="row">
                  <div class="container-fluid p-0 mt-3 mb-3">
                    <h1 class="h3 text-dark">
                      <strong>Aplique aqui o seu filtro</strong>
                    </h1>
                    <h6 class="h3 text-dark" style="font-size: 13px; font-weight: 100">
                      <span>Aluguel - casas e apartamentos</span>
                    </h6>

                    <div class="form-group col-md-12 mt-4">
                      <label for="nomImovel"><small><strong>Nome do Imóvel</strong></small></label>
                      <input type="text" v-model="nomeImovel" style="height: 55px" class="form-control"
                        placeholder="Nome do imóvel" @input="atualizarFiltros" />
                    </div>
                    <div class="form-group col-md-12 mt-3">
                      <label for="tipoNegocio"><small><strong>Tipo de negócio</strong></small></label>
                      <!-- continuar a fazer os filtros se inspirando na olx -->
                      <select class="form-select" v-model="tipoNegocio" @change="atualizarFiltros" style="height: 55px">
                        <option value="all">Todos os tipos</option>
                        <option value="Aluguel">Aluguel</option>
                        <option value="Venda">Venda</option>
                      </select>
                    </div>

                    <div class="form-group col-md-12 mt-3">
                      <label for="condominio"><small><strong>Condomínio</strong></small></label>
                      <select class="form-select" v-model="condominio" @change="atualizarFiltros" style="height: 55px">
                        <option value="all">Todos</option>
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                      </select>
                    </div>

                    <div class="form-group col-md-12 mt-3">
                      <label for="valor"><small><strong>Preço do ímovel (R$)</strong></small></label>
                      <!-- <div> -->
                      <!-- <div class="d-flex justify-content-evenly mt-2">
                          <span>R$ {{ valorMin.toLocaleString() }}</span>
                          <span>Até</span>
                          <span>R$ {{ valorMax.toLocaleString() }}</span>
                        </div> -->
                      <div class="d-flex justify-content-around mt-2">
                        <input type="number" v-model.number="valorMin" @input="atualizarFiltros" class="form-control"
                          placeholder="Valor Mínimo" min="0" />
                        <input type="number" v-model.number="valorMax" @input="atualizarFiltros" class="form-control"
                          placeholder="Valor Máximo" min="0" />
                      </div>
                      <!-- </div> -->
                    </div>

                    <div class="form-group col-md-12 mt-3">
                      <label for="valor"><small><strong>Preço do condomínio (R$)</strong></small></label>
                      <div class="d-flex justify-content-around mt-2">
                        <input type="number" v-model.number="condMin" @input="atualizarFiltros" class="form-control"
                          placeholder="Valor Mínimo" min="0" />
                        <input type="number" v-model.number="condMax" @input="atualizarFiltros" class="form-control"
                          placeholder="Valor Máximo" min="0" />
                      </div>
                    </div>

                    <div class="form-group col-md-12 mt-3">
                      <label for="valor"><small><strong>Preço do IPTU (R$)</strong></small></label>
                      <div class="d-flex justify-content-around mt-2">
                        <input type="number" v-model.number="iptuMin" @input="atualizarFiltros" class="form-control"
                          placeholder="Valor Mínimo" min="0" />
                        <input type="number" v-model.number="iptuMax" @input="atualizarFiltros" class="form-control"
                          placeholder="Valor Máximo" min="0" />
                      </div>
                    </div>

                    <div class="form-group col-md-12 mt-3">
                      <label for="area"><small><strong>Intervalo de Área (m²)</strong></small></label>
                      <div class="d-flex justify-content-around mt-2">
                        <input type="number" v-model.number="areaMin" @input="atualizarFiltros" class="form-control"
                          placeholder="Área Mínima" min="0" />
                        <input type="number" v-model.number="areaMax" @input="atualizarFiltros" class="form-control"
                          placeholder="Área Máxima" min="0" />
                      </div>
                    </div>

                    <!--  filtro de proximo ao mar -->
                    <!-- <div class="form-group col-md-12 mt-3">
                      <label for="proximoMar"
                        ><small
                          ><strong>Proximidade ao Mar</strong></small
                        ></label
                      >
                      <select
                        class="form-select"
                        v-model="proximoMar"
                        @change="atualizarFiltros"
                        style="height: 55px"
                      >
                        <option value="all">Todos</option>
                        <option value="Vista para o mar">
                          Vista para o mar
                        </option>
                        <option value="Frente para o mar">
                          Frente para o mar
                        </option>
                        <option value="Quadra do mar">Quadra do mar</option>
                        <option value="Proximo ao mar">Próximo ao mar</option>
                        <option value="all">Não</option>
                      </select>
                    </div> -->

                    <div class="form-group col-md-12 mt-3">
                      <label for="tipoImovel"><small><strong>Tipo de Imóvel</strong></small></label>
                      <select class="form-select" v-model="tipoImovel" @change="atualizarFiltros" style="height: 55px">
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
                      <select class="form-select" v-model="perfilImovel" @change="atualizarFiltros"
                        style="height: 55px">
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
                      <select class="form-select" v-model="posicaoSolar" @change="atualizarFiltros"
                        style="height: 55px">
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
                      <select class="form-select" v-model="situacaoImovel" @change="atualizarFiltros"
                        style="height: 55px">
                        <option value="all">Todos</option>
                        <option value="Pronto pra morar">
                          Pronto pra morar
                        </option>
                        <option value="Em construção">Em construção</option>
                        <option value="Lançamento">Lançamento</option>
                        <option value="Novo">Novo</option>
                        <option value="Usado">Usado</option>
                      </select>
                    </div>

                    <div class="form-group col-md-12 mt-3">
                      <label for="temGaragem"><small><strong>Tem Garagem</strong></small></label>
                      <input type="number" v-model.number="temGaragem" @input="atualizarFiltros" class="form-control"
                        placeholder="Número de vagas na garagem" min="0" />
                    </div>

                    <div class="form-group col-md-12 mt-3">
                      <label for="estado"><small><strong>Estado</strong></small></label>
                      <select class="form-select" v-model="estadoSelecionado" @change="atualizarFiltros"
                        style="height: 55px">
                        <option value="all">Todos os estados</option>
                        <option v-for="estado in estados" :key="estado.sigla" :value="estado.sigla">
                          {{ estado.nome }}
                        </option>
                      </select>
                    </div>

                    <div class="form-group col-md-12 mt-3">
                      <label for="cidade"><small><strong>Cidade</strong></small></label>
                      <select class="form-select" v-model="cidadeSelecionada" @change="atualizarFiltros"
                        style="height: 55px">
                        <option value="all">Todas as cidades</option>
                        <option v-for="cidade in cidadesFiltradas" :key="cidade" :value="cidade">
                          {{ cidade }}
                        </option>
                      </select>
                    </div>

                    <div class="form-group col-md-12 mt-3">
                      <label for="cidade"><small><strong>Bairro</strong></small></label>
                      <select class="form-select" v-model="bairroSelecionado" @change="atualizarFiltros"
                        style="height: 55px">
                        <option value="all">Todos os Bairros</option>
                        <option v-for="bairro in bairrosFiltrados" :key="bairro" :value="bairro">
                          {{ bairro }}
                        </option>
                      </select>
                    </div>

                    <div class="form-group col-md-12 mt-3">
                      <label for="dormitorios">Dormitórios</label>
                      <input type="number" v-model.number="dormitorios" @input="atualizarFiltros" class="form-control"
                        placeholder="Número de Dormitórios" min="0" />
                    </div>

                    <div class="form-group col-md-12 mt-3">
                      <label for="banheiro">Banheiro</label>
                      <input type="number" v-model.number="banheiro" @input="atualizarFiltros" class="form-control"
                        placeholder="Número de Banheiros" min="0" />
                    </div>

                    <div class="form-group col-md-12 mt-3">
                      <label for="cozinha">Cozinha</label>
                      <input type="number" v-model.number="cozinha" @input="atualizarFiltros" class="form-control"
                        placeholder="Número de Cozinhas" min="0" />
                    </div>

                    <div class="form-group col-md-11 mt-3" style="width: 100%">
                      <label><small><strong>Características</strong></small></label>
                      <div class="" style="
                          display: flex;
                          justify-content: left;
                          width: 100%;
                          flex-wrap: wrap;
                        ">
                        <div class="">
                          <div class="" style="">
                            <div v-for="(
                                caracteristica, index
                              ) in todasCaracteristicas" :key="caracteristica" class="form-check"
                              style="margin-right: 8px">
                              <input class="form-check-input" type="checkbox" :value="caracteristica"
                                v-model="caracteristicasSelecionadas" @change="atualizarFiltros" />
                              <label class="form-check-label">{{
                                caracteristica
                              }}</label>
                            </div>
                          </div>
                        </div>
                        <!-- <div class="">
                          <div class="d-flex flex-column">
                            <div
                              v-for="(caracteristica, index) in segundaColuna"
                              :key="caracteristica"
                              class="form-check"
                            >
                              <input
                                class="form-check-input"
                                type="checkbox"
                                :value="caracteristica"
                                v-model="caracteristicasSelecionadas"
                                @change="atualizarFiltros"
                              />
                              <label class="form-check-label">{{
                                caracteristica
                              }}</label>
                            </div>
                          </div>
                        </div> -->
                      </div>

                      <div class="form-group col-md-12 mt-3">
                        <label for="ordenarPor"><small><strong>Ordenar por</strong></small></label>
                        <select v-model="ordenarPor" @change="atualizarFiltros" class="form-control"
                          placeholder="Ordenar por">
                          <option value="">Ordenar por</option>
                          <option value="relevantes">Mais Relevantes</option>
                          <option value="recentes">Mais Recentes</option>
                          <option value="maiorPreco">Maior Preço</option>
                          <option value="menorPreco">Menor Preço</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card col-8 m-2" style="width: 72%">
              <div class="card-body">
                <div class="row">
                  <div class="container-fluid p-0 mt-5" v-if="!algumFiltroAtivo">
                    <h1 class="h3 text-dark">
                      <strong>Último imóveis cadastrados</strong>
                    </h1>
                  </div>
                  <div class="container-fluid mt-3" v-if="!algumFiltroAtivo">
                    <!-- <div class="row">
                        <div class="col-2 m-3" v-for="imovel in imoveis"> -->
                    <div class="d-flex flex-wrap justify-content-flex-start">
                      <div class="mx-2" v-for="imovel in lastImoveis">
                        <!-- {{ console.log(imovel) }} -->
                        <a href="#" @click="storeImovelId(imovel.id_imovel)"
                          style="color: inherit; text-decoration: none">
                          <div class="card" style="width: 15rem">
                            <img :src="`https://zonu.com.br/api${imovel.fotos[0].foto}`" class="card-img-top" alt="..."
                              style="width: 240px; height: 180px" />
                            <div class="card-body">
                              <h5>
                                <i class="fa fa-building"></i>
                                <a href="#" style="text-decoration: none; color: #000">
                                  <strong>{{ " " }} {{ imovel.descricao.titulo }}
                                  </strong>
                                </a>
                                <span class="badge text-bg-success">{{
                                  imovel.preco.tipo_negocio
                                }}</span>
                              </h5>
                              <h5 class="text-info">
                                <strong>{{
                                  formatCurrency(imovel.preco.preco_imovel)
                                }}</strong><a style="float: inline-end" class="text-info"></a>
                              </h5>
                              <h5 class="text-dark">
                                <i class="fa fa-user"></i>
                                <small>
                                  {{ " " }} {{ imovel.usuario.nome }}
                                  {{ imovel.usuario.sobrenome }}</small>
                              </h5>
                              <h5 class="text-dark">
                                <small><i class="fa fa-map-marker"></i>
                                  {{ imovel.localizacao.logradouro }},
                                  {{ imovel.localizacao.numero }} |
                                  {{ imovel.localizacao.bairro }},
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
                  <div class="container-fluid p-0 mt-3 mb-3" v-if="algumFiltroAtivo">
                    {{ console.log(algumFiltroAtivo) }}
                    <h1 class="h3 text-dark">
                      <strong>Seu resultado da pesquisa é...</strong>
                    </h1>
                    <h6 class="h3 text-dark" style="font-size: 13px; font-weight: 100">
                      <span>1 - 12 de {{ quantidadeImoveis }} resultados</span>
                    </h6>
                  </div>
                  <div class="" style="
                      display: flex;
                      flex-direction: row;
                      flex-wrap: wrap;
                      justify-content: flex-start;
                    " v-if="algumFiltroAtivo">
                    <div class="mb-3" style="
                        display: flex;
                        flex-wrap: wrap;
                        flex-direction: column;
                        margin-right: 60px;
                      " v-for="imovel in imoveisOnCurrentPage">
                      <div class="mb-2" style="
                          display: flex;
                          justify-content: right;
                          width: 15rem;
                        ">
                        <button class="btn btn-light rounded-circle icon-button"
                          @click="handleCompartilhar(imovel.id_imovel)">
                          <i class="fas fa-share"></i>
                        </button>
                      </div>
                      <a href="#" @click="storeImovelId(imovel.id_imovel)" style="
                          color: inherit;
                          text-decoration: none;
                          width: 15rem;
                        " class="card shadow-lg">
                        {{ console.log(imovel) }}
                        <div>
                          <img :src="`https://zonu.com.br/api${imovel.fotos[0].foto}`" class="card-img-top" alt="..."
                            style="width: 240px; height: 180px" />
                          <div class="card-body">
                            <h5>
                              <i class="fa fa-building"></i>
                              <a href="#" style="text-decoration: none; color: #000">
                                <strong>{{ " " }} {{ imovel.descricao.titulo }}
                                </strong>
                              </a>
                              <span class="badge text-bg-success">{{
                                imovel.preco.tipo_negocio
                              }}</span>
                            </h5>
                            <h5 class="text-info">
                              <strong>{{
                                formatCurrency(imovel.preco.preco_imovel)
                              }}</strong>
                            </h5>
                            <h5 class="text-dark">
                              <i class="fa fa-user"></i>
                              <small>{{ " " }} {{ imovel.usuario.nome }}
                                {{ imovel.usuario.sobrenome }}</small>
                            </h5>
                            <h5 class="text-dark">
                              <small><i class="fa fa-map-marker"></i>
                                {{ imovel.localizacao.logradouro }},
                                {{ imovel.localizacao.numero }} |
                                {{ imovel.localizacao.bairro }},
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

                  <div class="d-grid mt-3 mb-3 gap-2 d-md-flex justify-content-md-end" v-if="algumFiltroAtivo">
                    <button class="btn btn-dark btn-sm" @click="previousPageImovel()"
                      :disabled="currentPageImovel <= 1">
                      Anterior
                    </button>
                    <button class="btn btn-dark btn-sm" style="margin-right: 3% !important" @click="nextPageImovel()"
                      :disabled="currentPageImovel >= totalPagesImoveis">
                      Proximo
                    </button>
                  </div>
                </div>
              </div>
              <GraphMetro />
              <GraphMercadpComp />
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
import apiUser from "../../../service/api/usuarios/index";
import GraphMetro from "../../components/graph/index.vue";
import GraphMercadpComp from "@/components/client/graph/graphMercadpComp.vue";

export default {
  name: "ImobilView",

  components: {
    Navbar,
    Footer,
    GraphMetro,
    GraphMercadpComp,
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

      imoveis: [],
      lastImoveis: [],
      todosImoveis: [],
      quantidadeImoveis: 0,

      qualidadeProgress: "",
      qualidade: {},
      estrelaImovel: {},

      currentPageImovel: 1,
      perPageImovel: 12,
      searchImovel: "",

      // filtros
      tipoNegocio: "all",
      condominio: "all",
      valorMin: 0,
      valorMax: 0,
      condMin: 0,
      condMax: 0,
      iptuMin: 0,
      iptuMax: 0,
      proximoMar: "all",
      tipoImovel: "all",
      perfilImovel: "all",
      posicaoSolar: "all",
      situacaoImovel: "all",
      temGaragem: "",
      estadoSelecionado: "all",
      cidadeSelecionada: "all",
      estadoAnterior: "all",
      dormitorios: 0,
      banheiro: 0,
      cozinha: 0,
      areaMin: 0,
      areaMax: 0,
      ordenarPor: "",
      nomeImovel: "",
      bairroSelecionado: "all", // Inicialmente selecionado como "todos os bairros"
      bairrosDisponiveis: [],

      caracteristicasSelecionadas: [], // Armazenar características selecionadas
      todasCaracteristicas: [], // Armazenar todas as características disponíveis

      cidades: [],
      estados: [],
      bairros: [],

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
        { sigla: "TO", nome: "Tocantins" },
      ],

      textoFiltro: "Último imóveis cadastrados",
      textoFiltroAntigo: "Seu resultado da pesquisa é...",
    };
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

    const storedTipoNegocio = localStorage.getItem("TipoNegocio");
    if (storedTipoNegocio) {
      this.tipoNegocio = storedTipoNegocio;
      localStorage.removeItem("TipoNegocio");
    }
    const storedVistaMar = localStorage.getItem("Casa");
    if (storedVistaMar) {
      this.tipoImovel = storedVistaMar;
      localStorage.removeItem("Casa");
    }
    const storedGaragem = localStorage.getItem("Garagem");
    if (storedGaragem) {
      this.temGaragem = storedGaragem;
      localStorage.removeItem("Garagem");
    }

    this.fetchImoveis();
    this.fetchLastImoveis();
    this.fetchCidades();
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
    algumFiltroAtivo() {
      return (
        this.tipoNegocio !== "all" ||
        this.condominio !== "all" ||
        this.valorMin > 0 ||
        this.valorMax > 0 ||
        this.condMin > 0 ||
        this.condMax > 0 ||
        this.iptuMin > 0 ||
        this.iptuMax > 0 ||
        this.proximoMar !== "all" ||
        this.tipoImovel !== "all" ||
        this.perfilImovel !== "all" ||
        this.posicaoSolar !== "all" ||
        this.situacaoImovel !== "all" ||
        this.temGaragem !== "" ||
        this.estadoSelecionado !== "all" ||
        this.cidadeSelecionada !== "all" ||
        this.dormitorios > 0 ||
        this.banheiro > 0 ||
        this.cozinha > 0 ||
        this.areaMin > 0 ||
        this.areaMax > 0 ||
        this.caracteristicasSelecionadas.length > 0 ||
        this.ordenarPor !== "" ||
        this.nomeImovel !== "" ||
        this.bairroSelecionado !== "all"
      );
    },
    primeiraColuna() {
      return this.todasCaracteristicas.slice(
        0,
        Math.ceil(this.todasCaracteristicas.length / 2)
      );
    },
    segundaColuna() {
      return this.todasCaracteristicas.slice(
        Math.ceil(this.todasCaracteristicas.length / 2)
      );
    },

    imoveisOnCurrentPage() {
      const startIndex = (this.currentPageImovel - 1) * this.perPageImovel;
      const endIndex = startIndex + this.perPageImovel;
      return this.imoveis
        .filter((imovel) => {
          return imovel.descricao.titulo
            .toLowerCase()
            .includes(this.searchImovel.toLowerCase());
        })
        .slice(startIndex, endIndex);
    },
    totalPagesImoveis() {
      return Math.ceil(
        this.imoveis.filter((imovel) => {
          this.currentPageConcept = 1;
          return imovel.descricao.titulo
            .toLowerCase()
            .includes(this.searchImovel.toLowerCase());
        }).length / this.perPageImovel
      );
    },
    cidadesFiltradas() {
      if (this.estadoSelecionado === "all") {
        return this.cidades;
      }
      return this.cidades.filter((cidade) => {
        const imovel = this.todosImoveis.find(
          (imovel) => imovel.localizacao.cidade === cidade
        );
        return imovel && imovel.localizacao.estado === this.estadoSelecionado;
      });
    },
    bairrosFiltrados() {
      // Se a cidade não estiver selecionada, retorna todos os bairros disponíveis
      if (this.cidadeSelecionada === "") {
        return this.bairros;
      }
      // Filtra os bairros com base na cidade e estado selecionados
      return this.bairros.filter((bairro) => {
        const imovel = this.todosImoveis.find(
          (imovel) =>
            imovel.localizacao.bairro === bairro &&
            imovel.localizacao.cidade === this.cidadeSelecionada
        );
        return imovel && imovel.localizacao.estado === this.estadoSelecionado;
      });
    },
  },

  methods: {
    async handleCompartilhar(idImovel) {
      // const userId = 123; // Substitua pelo ID do usuário real
      // const currentDate = new Date().toISOString().split("T")[0]; // Obtém a data no formato YYYY-MM-DD
      // const routeName = `http://localhost:5173/seu-imovel/?id=${idImovel}`; // Nome da rota onde o ID do usuário será usado
      // console.log(this.token);
      const decoded = jwtDecode(this.token);

      // Exibir o resultado
      // console.log(decoded.id_user);
      // Gerar a URL com base no ID do usuário e na data atual
      const routeName = `https://zonu.com.br/seu-imovel/?id=${idImovel}&idUser=${decoded.id_user}`;
      const url = new URL(routeName, window.location.origin);

      try {
        apiUser.salvarLink(decoded.id_user, url).then(async (res) => {
          if (res.status === 201) {
            // Copiar o link para a área de transferência
            await navigator.clipboard.writeText(url.toString());
            localStorage.setItem("url", url.toString());
            localStorage.setItem("id", decoded.id_user);
            // localStorage.setItem("data", currentDate);
            this.copyStatus = "Link copiado para a área de transferência!";
          }
        });

        // apiUser.meusLinks(decoded.id_user).then((res) => {
        //   console.log(res)
        // })
      } catch (err) {
        console.error("Falha ao copiar o link: ", err);
        this.copyStatus = "Falha ao copiar o link.";
      }
    },
    async fetchCidades() {
      try {
        const response = await api.listallImoveis();
        const imoveis = response.data;
        const cidades = [
          ...new Set(imoveis.map((imovel) => imovel.localizacao.cidade)),
        ];
        const estadosSiglas = [
          ...new Set(imoveis.map((imovel) => imovel.localizacao.estado)),
        ];

        // Mapear as siglas para os nomes completos dos estados
        const estados = estadosSiglas.map((sigla) => {
          const estado = this.estadosMap.find((e) => e.sigla === sigla);
          return estado ? estado : { sigla: sigla, nome: sigla };
        });
        const bairros = [
          ...new Set(imoveis.map((imovel) => imovel.localizacao.bairro)),
        ];

        this.cidades = cidades;
        this.estados = estados;
        this.bairros = bairros
      } catch (error) {
        console.error("Erro ao buscar cidades:", error);
      }
    },
    async fetchLastImoveis() {
      try {
        const response = await api.listallImoveis();
        this.lastImoveis = response.data;
        this.lastImoveis = this.ultimosImoveis(response.data);
        this.avaliarQualidadeCadastro(this.lastImoveis);
      } catch (error) {
        console.error("Erro ao buscar imóveis:", error);
      }
    },
    ultimosImoveis(imoveis) {
      return imoveis
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 5);
    },
    atualizarFiltros() {
      if (this.estadoSelecionado !== this.estadoAnterior) {
        this.cidadeSelecionada = "all";
        this.estadoAnterior = this.estadoSelecionado;
      }

      console.log("Filtros atualizados:", {
        tipoNegocio: this.tipoNegocio,
        condominio: this.condominio,
        valorMin: this.valorMin,
        valorMax: this.valorMax,
        condMin: this.condMin,
        condMax: this.condMax,
        iptuMin: this.iptuMin,
        iptuMax: this.iptuMax,
        proximoMar: this.proximoMar,
        tipoImovel: this.tipoImovel,
        perfilImovel: this.perfilImovel,
        posicaoSolar: this.posicaoSolar,
        situacaoImovel: this.situacaoImovel,
        temGaragem: this.temGaragem,
        estado: this.estadoSelecionado,
        cidade: this.cidadeSelecionada,
        estadoAnterior: this.estadoAnterior,
        dormitorios: this.dormitorios,
        banheiro: this.banheiro,
        cozinha: this.cozinha,
        ordenarPor: this.ordenarPor,
        bairro: this.bairroSelecionado,
      });

      this.filtrarImoveis();
    },
    async fetchImoveis() {
      try {
        const res = await api.listallImoveis();
        console.log("res aqui =====> ", res);
        this.todosImoveis = res.data;

        const caracteristicasSet = new Set();
        this.todosImoveis.forEach((imovel) => {
          imovel.caracteristicas.forEach((caracteristica) => {
            if (
              caracteristica.detalhesCaracteristica &&
              caracteristica.detalhesCaracteristica.nome_caracteristica
            ) {
              caracteristicasSet.add(
                caracteristica.detalhesCaracteristica.nome_caracteristica
              );
            }
          });
        });
        this.todasCaracteristicas = Array.from(caracteristicasSet);

        this.filtrarImoveis();
        this.quantidadeImoveis = this.imoveis.length;
        // this.imoveis = this.ultimosImoveis(res.data);
        this.avaliarQualidadeCadastro(this.imoveis);
      } catch (error) {
        console.error("Erro ao buscar imóveis:", error);
      }
    },
    filtrarImoveis() {
      // console.log("Imoveis ====>", this.imoveis);
      // console.log("Todos os Imoveis ====>", this.todosImoveis);
      // Filtrar imóveis com base nos critérios
      this.imoveis = this.todosImoveis.filter((imovel) => {
        // Conversão de preços para números
        const valorImovel = parseFloat(
          imovel.preco.preco_imovel
            .replace("R$", "")
            .replace(".", "")
            .replace(",", ".")
            .trim()
        );
        const precoCondominio = parseFloat(
          imovel.preco.preco_condominio
            .replace("R$", "")
            .replace(".", "")
            .replace(",", ".")
            .trim()
        );
        const precoIPTU = parseFloat(
          imovel.preco.preco_iptu
            .replace("R$", "")
            .replace(".", "")
            .replace(",", ".")
            .trim()
        );
        const areaImovel = parseFloat(imovel.medidas.area_total);

        const filtroTipoNegocio =
          this.tipoNegocio === "all" ||
          imovel.preco.tipo_negocio === this.tipoNegocio;
        const filtroCondominio =
          this.condominio === "all" ||
          (this.condominio === "Sim" && imovel.tem_condominio === "Sim") ||
          (this.condominio === "Não" && imovel.tem_condominio === "Não");

        // Filtros de valor
        const filtroValor =
          (this.valorMin === 0 && this.valorMax === 0) ||
          (this.valorMin === 0 && valorImovel <= this.valorMax) ||
          (this.valorMax === 0 && valorImovel >= this.valorMin) ||
          (valorImovel >= this.valorMin && valorImovel <= this.valorMax);

        const filtroValorCondominio =
          (this.condMin === 0 && this.condMax === 0) ||
          (this.condMin === 0 && precoCondominio <= this.condMax) ||
          (this.condMax === 0 && precoCondominio >= this.condMin) ||
          (precoCondominio >= this.condMin && precoCondominio <= this.condMax);

        const filtroValorIPTU =
          (this.iptuMin === 0 && this.iptuMax === 0) ||
          (this.iptuMin === 0 && precoIPTU <= this.iptuMax) ||
          (this.iptuMax === 0 && precoIPTU >= this.iptuMin) ||
          (precoIPTU >= this.iptuMin && precoIPTU <= this.iptuMax);

        const filtroProximoMar =
          this.proximoMar === "all" ||
          imovel.info.proximo_mar === this.proximoMar;
        const filtroTipoImovel =
          this.tipoImovel === "all" || imovel.info.tipo === this.tipoImovel;
        const filtroPerfilImovel =
          this.perfilImovel === "all" ||
          imovel.info.perfil_imovel === this.perfilImovel;
        const filtroPosicaoSolar =
          this.posicaoSolar === "all" ||
          imovel.info.posicao_solar === this.posicaoSolar;
        const filtroSituacaoImovel =
          this.situacaoImovel === "all" ||
          imovel.info.situacao_imovel === this.situacaoImovel;
        const filtroGaragem =
          this.temGaragem === "" || imovel.comodos.garagem == this.temGaragem;
        const filtroEstado =
          this.estadoSelecionado === "all" ||
          imovel.localizacao.estado === this.estadoSelecionado;
        const filtroCidade =
          this.cidadeSelecionada === "all" ||
          imovel.localizacao.cidade === this.cidadeSelecionada;
        const filtroBairro =
          this.bairroSelecionado === "all" ||
          imovel.localizacao.bairro === this.bairroSelecionado;
        const filtroDormitorios =
          this.dormitorios === 0 ||
          this.dormitorios === "" ||
          imovel.comodos.dormitorio == this.dormitorios;
        const filtroBanheiros =
          this.banheiro === 0 ||
          this.banheiro === "" ||
          imovel.comodos.banheiro == this.banheiro;
        const filtroCozinhas =
          this.cozinha === 0 ||
          this.cozinha === "" ||
          imovel.comodos.cozinha == this.cozinha;

        const filtroArea =
          (this.areaMin === 0 && this.areaMax === 0) ||
          (this.areaMin === 0 && areaImovel <= this.areaMax) ||
          (this.areaMax === 0 && areaImovel >= this.areaMin) ||
          (areaImovel >= this.areaMin && areaImovel <= this.areaMax);

        const filtroCaracteristicas =
          this.caracteristicasSelecionadas.length === 0 ||
          this.caracteristicasSelecionadas.every((caracteristica) =>
            imovel.caracteristicas.some(
              (c) =>
                c.detalhesCaracteristica.nome_caracteristica === caracteristica
            )
          );
        const filtroNomeImovel =
          this.nomeImovel === "" ||
          imovel.descricao.titulo
            .toLowerCase()
            .includes(this.nomeImovel.toLowerCase());

        return (
          filtroTipoNegocio &&
          filtroCondominio &&
          filtroValor &&
          filtroValorCondominio &&
          filtroValorIPTU &&
          filtroProximoMar &&
          filtroTipoImovel &&
          filtroPerfilImovel &&
          filtroPosicaoSolar &&
          filtroSituacaoImovel &&
          filtroGaragem &&
          filtroEstado &&
          filtroCidade &&
          filtroBairro &&
          filtroDormitorios &&
          filtroBanheiros &&
          filtroCozinhas &&
          filtroArea &&
          filtroCaracteristicas &&
          filtroNomeImovel
        );
      });

      // Ordenar os imóveis com base na seleção do usuário
      switch (this.ordenarPor) {
        case "relevantes":
          this.imoveis.sort(
            (a, b) => b.porcentagemQualidade - a.porcentagemQualidade
          );
          break;
        case "recentes":
          this.imoveis.sort(
            (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
          );
          break;
        case "maiorPreco":
          this.imoveis.sort(
            (a, b) =>
              parseFloat(
                b.preco.preco_imovel
                  .replace("R$", "")
                  .replace(".", "")
                  .replace(",", ".")
                  .trim()
              ) -
              parseFloat(
                a.preco.preco_imovel
                  .replace("R$", "")
                  .replace(".", "")
                  .replace(",", ".")
                  .trim()
              )
          );
          break;
        case "menorPreco":
          this.imoveis.sort(
            (a, b) =>
              parseFloat(
                a.preco.preco_imovel
                  .replace("R$", "")
                  .replace(".", "")
                  .replace(",", ".")
                  .trim()
              ) -
              parseFloat(
                b.preco.preco_imovel
                  .replace("R$", "")
                  .replace(".", "")
                  .replace(",", ".")
                  .trim()
              )
          );
          break;
        default:
          // Manter a ordem padrão
          break;
      }

      this.quantidadeImoveis = this.imoveis.length;
    },

    // ultimosImoveis(imoveis) {
    //     return imoveis
    //         .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    //         .slice(0, 5);
    // },

    avaliarQualidadeCadastro(imoveis) {
      imoveis.forEach((imovel) => {
        let totalCampos = 0;
        let camposNulos = 0;

        const analisarObjeto = (obj) => {
          Object.values(obj).forEach((val) => {
            if (val && typeof val === "object" && !Array.isArray(val)) {
              analisarObjeto(val);
            } else {
              totalCampos++;
              if (val === null || val === "") {
                camposNulos++;
              }
            }
          });
        };

        analisarObjeto(imovel);

        const pontuacaoMaxima = 10;
        const pontuacao = Math.round(
          ((totalCampos - camposNulos) / totalCampos) * pontuacaoMaxima
        );
        const porcentagem = Math.round(
          ((totalCampos - camposNulos) / totalCampos) * 100
        ); // Calcula a porcentagem

        imovel.pontuacaoQualidade = `${pontuacao}/10`;
        imovel.porcentagemQualidade = porcentagem;
        // console.log('qualidade: ', imovel.pontuacaoQualidade)
        // this.qualidade = imovel.pontuacaoQualidade;
        this.qualidade[imovel.id_imovel] = imovel.pontuacaoQualidade;
        this.estrelaImovel[imovel.id_imovel] = imovel.pontuacaoQualidade;

        if (porcentagem == 100) {
          this.estrelas = 5;
          this.msgQualidade = "Excelente";
        } else if (porcentagem >= 80) {
          this.estrelas = 4;
          this.msgQualidade = "Muito Bom";
        } else if (porcentagem >= 60) {
          this.estrelas = 3;
          this.msgQualidade = "Bom";
        } else if (porcentagem >= 40) {
          this.estrelas = 2;
          this.msgQualidade = "Regular";
        } else if (porcentagem >= 20) {
          this.estrelas = 1;
          this.msgQualidade = "Ruim";
        } else {
          this.estrelas = 0;
          this.msgQualidade = "Péssimo";
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
      return this.qualidade[id] ? this.qualidade[id] : "";
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
        this.currentPageImovel -= 1;
      }
    },
    nextPageImovel() {
      if (this.currentPageImovel < this.totalPagesImoveis) {
        this.currentPageImovel += 1;
      }
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

    storeImovelId(id) {
      localStorage.setItem("imovelId", id);
      this.$router.push({ name: "imovel" });
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
      console.log(this.latitudeImoveis);
      if (!isNaN(lat) && !isNaN(lng)) {
        const customIcon = {
          url: "https://zonu.com.br/emailmkt/IconLocationMaps.png", // Caminho para o ícone personalizado
          scaledSize: new google.maps.Size(28, 18), // Ajuste o tamanho do ícone conforme necessário
          anchor: new google.maps.Point(29, 38), // Ajuste a âncora do ícone conforme necessário
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
