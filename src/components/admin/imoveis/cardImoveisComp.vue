<template>
    <div class="card flex-fill w-100">
        <div class="card-header">
            <h5 class="card-title mb-0"><i class="fa fa-clock"></i> Ultimos imóveis
                cadastrados</h5>
        </div>
        <div class="card-body py-3">
            <input type="text" placeholder="Pesquise aqui" class="form-control mb-3"
                aria-describedby="passwordHelpBlock" v-model="searchImovel" />
                <div class="mt-3" v-for="item in imoveisOnCurrentPage" :key="item.id_imovel">
                    {{console.log(item)}}

                <a class="row" style="text-decoration: none;">
                    <div class="col-3">
                        <img class="thumbImovel" :src="`https://zonu.com.br/api${item.fotos[0].foto}`" alt="">
                        <span class="badge text-bg-success" style="width: 90%;">{{
                            item.preco.tipo_negocio }}</span>
                    </div>

                    <div class="col-9" style="margin-left: -10px;">
                        <h5><i class="fa fa-building"></i> <a href="#" style="text-decoration: none; color: #000;"
                                data-bs-toggle="modal" :data-bs-target="`#modalImovel${item.id_imovel}`"><strong>{{
                                    item.descricao.titulo }}</strong></a>
                        </h5>
                        <h5 class="text-info"><strong>{{ formatCurrency(item.preco.preco_imovel) }}</strong><a
                                data-bs-toggle="modal" :data-bs-target="`#modalImovel${item.id_imovel}`"
                                style="float: inline-end;" class="text-info"><i class="fa fa-eye"></i></a></h5>
                        <h5 class="text-dark"><i class="fa fa-user"></i> <small> {{item.usuario.nome}} {{item.usuario.sobrenome}}</small>
                        </h5>
                        <h5 class="text-dark"><small><i class="fa fa-map-marker "></i>
                                {{ item.localizacao.logradouro }}, {{ item.localizacao.numero }} | {{
                                    item.localizacao.bairro }}, {{ item.localizacao.cidade }}</small></h5>
                        <h5 class="text-dark"><small><i class="fa fa-calendar "></i>
                                Atualizado: {{ formatarData(item.updatedAt) }}</small> <i v-for="star in estrelas"
                                :key="star" class="text-warning fa fa-star"></i> <span class="text-success"
                                style="float: inline-end; font-weight: 900;">
                                {{ qualidade }}</span></h5>
                    </div>
                </a>
                <hr class="mt-3">
                <!-- Modal -->
                <div class="modal fade" :id="`modalImovel${item.id_imovel}`" tabindex="-1"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel"><i class="fa fa-building"></i> {{
                                    item.descricao.titulo }}
                                </h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <nav>
                                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                                            aria-selected="true"><i class="fa fa-bell" aria-hidden="true"></i>

                                            Informações do imóvel </button>

                                        <button class="nav-link" id="nav-comentario-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav-comentario" type="button" role="tab"
                                            aria-controls="nav-comentario" aria-selected="false">Anotações <small><i
                                                    class="fa fa-file"></i></small></button>

                                        <button class="nav-link" id="nav-documentos-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav-documentos" type="button" role="tab"
                                            aria-controls="nav-documentos" aria-selected="false">Documentos <small><i
                                                    class="fa fa-folder"></i></small></button>

                                    </div>
                                </nav>
                                <div class="tab-content" id="nav-tabContent">
                                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel"
                                        aria-labelledby="nav-home-tab" tabindex="0">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-2 mt-4" v-for="foto in item.fotos"
                                                    :key="foto.id_imagem">
                                                    <img :src="`https://zonu.com.br/api${foto.foto}`"
                                                        :alt="`Foto ${foto.id_imagem} do Imóvel ${item.id_imovel}`"
                                                        class="thumbnail-modal">
                                                </div>
                                            </div>

                                            <div class="row mt-4">
                                                <div class="col-md-2">
                                                    <h5><strong><i class="fa fa-money" aria-hidden="true"></i> Preço
                                                            <small style="font-size: 10px;" class="text-secondary">({{
                                                                item.preco.tipo_negocio }})</small></strong>
                                                    </h5>
                                                    <h4 class="text-success"><strong>{{ item.preco.preco_imovel }}
                                                        </strong>
                                                    </h4>
                                                </div>
                                                <div class="col-md-2">
                                                    <h5><strong><i class="fa fa-money" aria-hidden="true"></i>
                                                            Condomínio</strong>
                                                    </h5>
                                                    <h4 class="text-success"><strong>{{ item.preco.preco_condominio
                                                            }}</strong>
                                                    </h4>
                                                </div>
                                                <div class="col-md-2">
                                                    <h5><strong><i class="fa fa-tag" aria-hidden="true"></i>
                                                            Taxas <small style="font-size: 10px;"
                                                                class="text-secondary">(Mensal)</small></strong>
                                                    </h5>
                                                    <h4 class="text-success"><strong>{{ item.preco.total_mensal_taxas
                                                            }}</strong>
                                                    </h4>
                                                </div>
                                                <hr class="mt-3">
                                            </div>

                                            <div class="row mt-3">
                                                <div class="col-md-8">
                                                    <h6 style="font-size: 12px;"><strong><i class="fa fa-building-o"
                                                                aria-hidden="true"></i>
                                                            Cômodos</strong>
                                                    </h6>
                                                    <div class="row mt-3 ml-2">
                                                        <div class="col-md-3">
                                                            <h6 style="font-size: 12px; text-align: right;">
                                                                <strong>Dormitórios: {{ item.comodos.dormitorio
                                                                    }}</strong>
                                                            </h6>
                                                            <h6 v-if="item.comodos.suite !== 0"
                                                                style="font-size: 12px; text-align: right;">
                                                                <strong>Sendo Suites: {{ item.comodos.suite }}</strong>
                                                            </h6>
                                                            <h6 v-if="item.comodos.suite == 0"
                                                                style="font-size: 12px; text-align: right;">
                                                                <strong>Sendo Suites: Não</strong>
                                                            </h6>
                                                            <h6 style="font-size: 12px; text-align: right;">
                                                                <strong>Banheiros: {{ item.comodos.banheiro }}</strong>
                                                            </h6>
                                                            <h6 v-if="item.comodos.garagem == 0"
                                                                style="font-size: 12px; text-align: right;">
                                                                <strong>Garagens: Não</strong>
                                                            </h6>
                                                            <h6 v-if="item.comodos.garagem !== 0"
                                                                style="font-size: 12px; text-align: right;">
                                                                <strong>Garagens: {{ item.comodos.garagem }}</strong>
                                                            </h6>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <h6 style="font-size: 12px; text-align: right;">
                                                                <strong>Área de Serviço: {{ item.comodos.area_servico
                                                                    }}</strong>
                                                            </h6>
                                                            <h6 style="font-size: 12px; text-align: right;">
                                                                <strong>Banheiros: {{ item.comodos.banheiro }}</strong>
                                                            </h6>
                                                            <h6 style="font-size: 12px; text-align: right;">
                                                                <strong>Dep. empregada: {{ item.comodos.casa_empregada
                                                                    }}</strong>
                                                            </h6>

                                                            <h6 style="font-size: 12px; text-align: right;">
                                                                <strong>Box Garagem: {{ item.comodos.garagem_box
                                                                    }}</strong>
                                                            </h6>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <h6 style="font-size: 12px; text-align: right;">
                                                                <strong>Copa: {{ item.comodos.copa }}</strong>
                                                            </h6>
                                                            <h6 style="font-size: 12px; text-align: right;">
                                                                <strong>Cozinha: {{ item.comodos.cozinha }}</strong>
                                                            </h6>
                                                            <h6 style="font-size: 12px; text-align: right;">
                                                                <strong>Escritório: {{ item.comodos.escritorio
                                                                    }}</strong>
                                                            </h6>
                                                            <h6 style="font-size: 12px; text-align: right;">
                                                                <strong>Garagem coberta: {{ item.comodos.garagem_coberta
                                                                    }}</strong>
                                                            </h6>

                                                        </div>
                                                        <div class="col-md-2">
                                                            <h6 style="font-size: 12px; text-align: right;">
                                                                <strong>Closet: {{ item.comodos.closet }}</strong>
                                                            </h6>
                                                            <h6 style="font-size: 12px; text-align: right;">
                                                                <strong>Lavabo: {{ item.comodos.lavabo }}</strong>
                                                            </h6>
                                                            <h6 style="font-size: 12px; text-align: right;">
                                                                <strong>Sl de estar: {{ item.comodos.sala_estar
                                                                    }}</strong>
                                                            </h6>
                                                            <h6 style="font-size: 12px; text-align: right;">
                                                                <strong>Sl de jantar: {{ item.comodos.sala_jantar
                                                                    }}</strong>
                                                            </h6>
                                                        </div>

                                                        <div class="col-md-2">
                                                            <h6 style="font-size: 12px; text-align: right;">
                                                                <strong>Sala de TV: {{ item.comodos.sala_tv }}</strong>
                                                            </h6>
                                                            <h6 style="font-size: 12px; text-align: right;">
                                                                <strong>Dormitórios com suites: {{ item.comodos.suite
                                                                    }}</strong>
                                                            </h6>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="col-md-1 mt-3">
                                                    <div style="border-left: 1px solid #0001; height: 100px; ">
                                                    </div>
                                                </div>
                                                <div class="col-md-2">
                                                    <h6 style="font-size: 12px; margin-left: -70px; ">
                                                        <strong><i class="fa fa-ruler" aria-hidden="true"></i> Medida
                                                            das
                                                            áreas</strong>
                                                    </h6>
                                                    <div class="row mt-3" style="margin-left: -50px;">
                                                        <div class="col-md-12">
                                                            <h6 style="font-size: 12px;">
                                                                <strong>Total: {{ item.medidas.area_total }} m²</strong>
                                                            </h6>
                                                            <h6 style="font-size: 12px;">
                                                                <strong>Construida: {{ item.medidas.area_contruida }}
                                                                    m²</strong>
                                                            </h6>
                                                            <h6 style="font-size: 12px;">
                                                                <strong>Privativa: {{ item.medidas.area_privativa }}
                                                                    m²</strong>
                                                            </h6>
                                                            <h6 style="font-size: 12px;">
                                                                <strong>Preço m²: R$ {{
                                                                    item.medidas.media_metro_quadrado }}</strong>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </div>

                                                <hr class="mt-3">

                                                <div class="col-md-7">
                                                    <h6 style="font-size: 12px;"><strong><i class="fa fa-check-square"
                                                                aria-hidden="true"></i> Caracteística do
                                                            imóvel</strong>
                                                    </h6>
                                                    <div class="row mt-3">
                                                        <div class="col-md-2" v-for="dado in item.caracteristicas">
                                                            <h6>
                                                                <span><i class="fa fa-check"></i> <small>{{
                                                                    dado.detalhesCaracteristica.nome_caracteristica
                                                                        }}</small></span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <hr>
                                                </div>

                                                <div class="col-md-5">
                                                    <h6 style="font-size: 12px;"><strong><i class="fa fa-edit"
                                                                aria-hidden="true"></i>
                                                            Detalhes do
                                                            imóvel</strong>
                                                    </h6>
                                                    <div class="row mt-3">
                                                        <div class="col-md-2">
                                                            <div class="avatar-null img-fluid rounded me-1"
                                                                alt="Avatar">{{ iniciais
                                                                }}</div>
                                                        </div>
                                                        <div class="col-md-3 mb-3">
                                                            <h6 style="font-size: 12px;">
                                                                <strong>Responsável</strong>
                                                            </h6>
                                                            <h6 style="font-size: 12px;">
                                                                {{ nome }} {{ sobrenome }}
                                                            </h6>
                                                        </div>
                                                        <div class="col-md-1">
                                                            <div style="border-left: 1px solid #0001; height: 40px; ">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3" style="margin-top: -10px;">
                                                            <img :src="item.qrcode[0].qrcode" width="50" alt="">
                                                        </div>
                                                    </div>

                                                </div>

                                                <div class="col-md-7" style="margin-top: 4%;">
                                                    <h6 style="font-size: 12px;">
                                                        <strong><i class="fa fa-check-square" aria-hidden="true"></i>
                                                            Proximidades</strong>
                                                    </h6>
                                                    <div class="row mt-3">
                                                        <div class="col-md-2" v-for="dado in item.proximidades">
                                                            <h6>
                                                                <span><i class="fa fa-check"></i><small>
                                                                        {{ dado.detalhesProximidade !== null ? dado.detalhesProximidade.nome_proximidade : ""
                                                                        }}</small> </span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <hr>
                                                </div>

                                                <div class="col-md-7" style="margin-top: 2%;">
                                                    <h6 style="font-size: 12px;">
                                                        <strong><i class="fa fa-edit" aria-hidden="true"></i> Descrição
                                                            do
                                                            Imóvel</strong>
                                                    </h6>
                                                    <div class="row mt-3">
                                                        {{ item.descricao.apresentacao }}
                                                    </div>
                                                </div>

                                                <div class="col-md-5" style="margin-top: -150px;">

                                                    <table class="table">
                                                        <tbody>
                                                            <tr>
                                                                <td style="background-color: #0001;">
                                                                    <strong><small>Ano da
                                                                            construção:</small></strong>
                                                                </td>
                                                                <td style="background-color: #0001;">
                                                                    <small>{{ item.info.ano_construcao }}</small>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><strong><small>Incorporação:</small></strong></td>
                                                                <td><small>{{ item.info.incorporacao }}</small></td>
                                                            </tr>
                                                            <tr>
                                                                <td style="background-color: #0001;">
                                                                    <strong><small>Situação do Imóvel:</small></strong>
                                                                </td>
                                                                <td style="background-color: #0001;">
                                                                    <small>{{ item.info.situacao_imovel }}</small>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><strong><small>Esquina:</small></strong>
                                                                </td>
                                                                <td><small>{{ item.info.esquina }}</small></td>
                                                            </tr>
                                                            <tr>
                                                                <td style="background-color: #0001;">
                                                                    <strong><small>Tem
                                                                            Financiamento:</small></strong>
                                                                </td>
                                                                <td style="background-color: #0001;">
                                                                    <small>{{ item.preco.financiado }}</small>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><strong><small>Aceita
                                                                            financiamento:</small></strong>
                                                                </td>
                                                                <td><small>{{ item.preco.aceita_financiamento }}</small>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="background-color: #0001;">
                                                                    <strong><small>Minha Casa Minha
                                                                            Vida:</small></strong>
                                                                </td>
                                                                <td style="background-color: #0001;">
                                                                    <small>{{ item.preco.minhacasa_minhavida }}</small>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><strong><small>Aceita
                                                                            permuta:</small></strong></td>
                                                                <td><small>{{ item.preco.aceita_permuta }}</small></td>
                                                            </tr>

                                                            <div class="col-md-12 mt-3">

                                                            </div>

                                                        </tbody>
                                                    </table>

                                                    <div class="mt-3">
                                                        <h6 style="font-size: 12px;">
                                                            <strong>Qualidade do anúncio <span
                                                                    class="badge text-bg-success">{{
                                                                        qualidadeProgress }}% </span>
                                                                &nbsp;</strong>
                                                            <small> {{ msgQualidade }} <i v-for="star in estrelas"
                                                                    :key="star"
                                                                    class="text-warning fa fa-star"></i></small>
                                                        </h6>
                                                        <div class="progress" role="progressbar"
                                                            aria-label="Success example"
                                                            :aria-valuenow="qualidadeProgress" aria-valuemin="0"
                                                            aria-valuemax="100">
                                                            <div class="progress-bar bg-success"
                                                                :style="{ width: qualidadeProgress + '%' }"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="tab-pane fade show" id="nav-documentos" role="tabpanel"
                                        aria-labelledby="nav-documentos-tab" tabindex="0">
                                        <div class="container">
                                            <div class="row mt-3">
                                                <div class="col-md-8">
                                                    <h6 style="font-size: 15px;"><strong><i class="fa fa-link"
                                                                aria-hidden="true"></i> Links </strong>
                                                    </h6>
                                                    <div class="row mt-3">
                                                        <div class="col-md-3">
                                                            <h6 style="font-size: 12px;">
                                                                <strong>Drive: <a :href="item.complemento.link_drive"
                                                                        target="_blank">{{
                                                                            item.complemento.link_drive }}</a></strong>
                                                            </h6>

                                                            <h6 style="font-size: 12px;">
                                                                <strong>YouTube: <a
                                                                        :href="item.complemento.link_youtube"
                                                                        target="_blank">{{ item.complemento.link_youtube
                                                                        }}</a></strong>
                                                            </h6>

                                                            <h6 style="font-size: 12px;">
                                                                <strong>Apresentação: <a
                                                                        :href="item.complemento.link_apresentacao"
                                                                        target="_blank">{{
                                                                            item.complemento.link_apresentacao
                                                                        }}</a></strong>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="tab-pane fade show" id="nav-comentario" role="tabpanel"
                                        aria-labelledby="nav-comentario-tab" tabindex="0">
                                        <div class="container">
                                            <div class="row mt-3">
                                                <div class="col-md-12">
                                                    <h6 style="font-size: 15px;"><strong><i class="fa fa-list"
                                                                aria-hidden="true"></i> Faça aqui as anotações sobre
                                                            este imóvel
                                                        </strong>
                                                    </h6>
                                                    <div class="row mt-3">
                                                        <div class="col-md-12">
                                                            <div class="form-floating">
                                                                <textarea class="form-control"
                                                                    placeholder="Leave a comment here"
                                                                    id="floatingTextarea2"
                                                                    style="height: 300px"></textarea>
                                                                <label for="floatingTextarea2"></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                                                    <button class="btn btn-success me-md-2"
                                                        @click="handledComentario(item.id_imovel)" type="button">Salvar
                                                        anotação</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="d-grid mt-3 mb-3 gap-2 d-md-flex justify-content-md-end">
                <button class="btn btn-dark btn-sm" @click="previousPageImovel()" :disabled="currentPageImovel <= 1">
                    Anterior
                </button>
                <button class=" btn btn-dark btn-sm" style="margin-right: 3% !important;" @click="nextPageImovel()"
                    :disabled="currentPageImovel >= totalPagesImoveis">
                    Proximo
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import api from '../../../../service/api/index'
import { jwtDecode } from "jwt-decode";
export default {
    name: 'ListImoveisdmin',
    data() {
        return {
            token: localStorage.getItem('token'),
            id_user: '',
            allImoveis: [],
            currentPageImovel: 1,
            perPageImovel: 4,
            searchImovel: '',
            msgQualidade: '',
            estrelas: 0,
            porcentagemQualidade: 0,
            iniciais: '',
            nome: '',
            sobrenome: ''

        }
    },
    mounted() {
        let token = this.token;
        let decode = jwtDecode(token);
        let id_user = decode.id_user;
        this.nome = decode.nome
        this.sobrenome = decode.sobrenome

        const iniciais = this.nome.charAt(0) + this.sobrenome.charAt(0);
        this.iniciais = iniciais
        this.id_user = id_user

        this.fetchAllImoveis();

    },
    methods: {
        fetchAllImoveis() {
            api.listallImoveis().then(res => {
                this.allImoveis = res.data;
                


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

                this.avaliarQualidadeCadastro(this.allImoveis);



            })
        },

        formatCurrency(value) {
            if (typeof value !== "number") {
                value = parseFloat(value);
            }
            return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        },
        formatarData(dataString) {
            if (!dataString) return '';
            const data = new Date(dataString);
            return data.toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
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
                this.qualidade = imovel.pontuacaoQualidade;


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


            });

            return imoveis;
        },
    },

    computed: {
        imoveisOnCurrentPage() {
            const startIndex = (this.currentPageImovel - 1) * this.perPageImovel
            const endIndex = startIndex + this.perPageImovel
            return this.allImoveis
                .filter((imovel) => {
                    return imovel.descricao.titulo
                        .toLowerCase()
                        .includes(this.searchImovel.toLowerCase())
                })
                .slice(startIndex, endIndex)
        },
        totalPagesImoveis() {
            return Math.ceil(
                this.allImoveis.filter((imovel) => {
                    this.currentPageConcept = 1
                    return imovel.descricao.titulo
                        .toLowerCase()
                        .includes(this.searchImovel.toLowerCase())
                }).length / this.perPageImovel,
            )
        },
    }

}

</script>