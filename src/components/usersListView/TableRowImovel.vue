<template>
    <tr>
        <th scope="row"></th>
        <td>{{ item.descricao.titulo }}</td>
        <td v-if="item.perfil == null">--</td>
        <td v-else>{{ item.perfil.telefone }}</td>

        <td>{{ item.usuario.email }}</td>

        <td v-if="item.perfil == null">--</td>
        <td v-if="item.perfil !== null">{{ item.perfil.razao_social }}</td>

        <td class="row mt-3">
            <!-- <div class="col-4">
                <button v-if="item.id_status == 2" @click="handleEditStatusAtivate(item.id_user)" type="button"
                    class="btn btn-success" style="
              --bs-btn-padding-y: 0.25rem;
              --bs-btn-padding-x: 0.5rem;
              --bs-btn-font-size: 0.75rem;
              margin-right: 6px !important;
            ">
                    <i class="fa fa-check"></i>
                </button>
                <button v-if="item.id_status == 1" @click="handleEditStatusBlock(item.id_user)" type="button"
                    class="btn btn-info" style="
              --bs-btn-padding-y: 0.25rem;
              --bs-btn-padding-x: 0.5rem;
              --bs-btn-font-size: 0.75rem;
              margin-right: 6px !important;
            ">
                    <i class="fa fa-ban"></i>
                </button>
            </div> -->
            <div class="col-4">
                <button data-bs-toggle="modal" :data-bs-target="`#modalEditImovel${item.id_imovel}`" type="button"
                    class="btn btn-warning" style="
              --bs-btn-padding-y: 0.25rem;
              --bs-btn-padding-x: 0.5rem;
              --bs-btn-font-size: 0.75rem;
              margin-right: 6px !important;
            ">
                    <i class="fa fa-edit"></i>
                </button>
            </div>
            <div class="col-4">
                <button data-bs-toggle="modal" :data-bs-target="`#modalImovel${item.id_imovel}`" type="button"
                    class="btn btn-primary" style="
              --bs-btn-padding-y: 0.25rem;
              --bs-btn-padding-x: 0.5rem;
              --bs-btn-font-size: 0.75rem;
              margin-right: 6px !important;
            ">
                    <i class="fa fa-eye"></i>
                </button>
            </div>
            <div class="col-4">
                <button @click="handleDeleteImovel(item.id_imovel)" type="button" class="btn btn-danger" style="
              --bs-btn-padding-y: 0.25rem;
              --bs-btn-padding-x: 0.5rem;
              --bs-btn-font-size: 0.75rem;
              margin-right: 6px;
            ">
                    <i class="fa fa-trash"></i>
                </button>
            </div>
        </td>

        <div class="modal fade" :id="`modalImovel${item.id_imovel}`" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                            <i class="fa fa-building"></i> {{ item.descricao.titulo }}
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <nav>
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <button class="nav-link active" :id="`nav-home-tab${item.id_imovel}`"
                                    data-bs-toggle="tab" :data-bs-target="`#nav-home${item.id_imovel}`" type="button"
                                    role="tab" aria-controls="nav-home" aria-selected="true">
                                    <i class="fa fa-bell" aria-hidden="true"></i>

                                    Informações do imóvel
                                </button>

                                <!-- <button class="nav-link" :id="`nav-comentario-tab${item.id_imovel}`"
                                    data-bs-toggle="tab" :data-bs-target="`#nav-comentario${item.id_imovel}`"
                                    type="button" role="tab" aria-controls="nav-comentario" aria-selected="false">
                                    Anotações <small><i class="fa fa-file"></i></small>
                                </button> -->

                                <button class="nav-link" :id="`nav-documentos-tab${item.id_imovel}`"
                                    data-bs-toggle="tab" :data-bs-target="`#nav-documentos${item.id_imovel}`"
                                    type="button" role="tab" aria-controls="nav-documentos" aria-selected="false">
                                    Documentos <small><i class="fa fa-folder"></i></small>
                                </button>
                            </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" :id="`nav-home${item.id_imovel}`" role="tabpanel"
                                aria-labelledby="nav-home-tab" tabindex="0">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-2 mt-4" v-for="foto in item.fotos" :key="foto.id_imagem">
                                            <img :src="`https://zonu.com.br/api${foto.foto}`"
                                                :alt="`Foto ${foto.id_imagem} do Imóvel ${item.id_imovel}`"
                                                class="thumbnail-modal" />
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-2">
                                            <h5>
                                                <strong><i class="fa fa-money" aria-hidden="true"></i>
                                                    Preço
                                                    <small style="font-size: 10px" class="text-secondary">({{
                                                        item.preco.tipo_negocio
                                                        }})</small></strong>
                                            </h5>
                                            <h4 class="text-success">
                                                <strong>{{ item.preco.preco_imovel }} </strong>
                                            </h4>
                                        </div>
                                        <div class="col-md-2">
                                            <h5>
                                                <strong><i class="fa fa-money" aria-hidden="true"></i>
                                                    Condomínio</strong>
                                            </h5>
                                            <h4 class="text-success">
                                                <strong>{{ item.preco.preco_condominio }}</strong>
                                            </h4>
                                        </div>
                                        <div class="col-md-2">
                                            <h5>
                                                <strong><i class="fa fa-tag" aria-hidden="true"></i>
                                                    Taxas
                                                    <small style="font-size: 10px"
                                                        class="text-secondary">(Mensal)</small></strong>
                                            </h5>
                                            <h4 class="text-success">
                                                <strong>{{ item.preco.total_mensal_taxas }}</strong>
                                            </h4>
                                        </div>
                                        <hr class="mt-3" />
                                    </div>

                                    <div class="row mt-3">
                                        <div class="col-md-8">
                                            <h6 style="font-size: 12px">
                                                <strong><i class="fa fa-building-o" aria-hidden="true"></i>
                                                    Cômodos</strong>
                                            </h6>
                                            <div class="row mt-3 ml-2">
                                                <div class="col-md-3">
                                                    <h6 style="font-size: 12px; text-align: right">
                                                        <strong>Dormitórios:
                                                            {{ item.comodos.dormitorio }}</strong>
                                                    </h6>
                                                    <h6 v-if="item.comodos.suite !== 0"
                                                        style="font-size: 12px; text-align: right">
                                                        <strong>Sendo Suites:
                                                            {{ item.comodos.suite }}</strong>
                                                    </h6>
                                                    <h6 v-if="item.comodos.suite == 0"
                                                        style="font-size: 12px; text-align: right">
                                                        <strong>Sendo Suites: Não</strong>
                                                    </h6>
                                                    <h6 style="font-size: 12px; text-align: right">
                                                        <strong>Banheiros:
                                                            {{ item.comodos.banheiro }}</strong>
                                                    </h6>
                                                    <h6 v-if="item.comodos.garagem == 0"
                                                        style="font-size: 12px; text-align: right">
                                                        <strong>Garagens: Não</strong>
                                                    </h6>
                                                    <h6 v-if="item.comodos.garagem !== 0"
                                                        style="font-size: 12px; text-align: right">
                                                        <strong>Garagens: {{ item.comodos.garagem }}</strong>
                                                    </h6>
                                                </div>
                                                <div class="col-md-3">
                                                    <h6 style="font-size: 12px; text-align: right">
                                                        <strong>Área de Serviço:
                                                            {{ item.comodos.area_servico }}</strong>
                                                    </h6>
                                                    <h6 style="font-size: 12px; text-align: right">
                                                        <strong>Banheiros:
                                                            {{ item.comodos.banheiro }}</strong>
                                                    </h6>
                                                    <h6 style="font-size: 12px; text-align: right">
                                                        <strong>Dep. empregada:
                                                            {{ item.comodos.casa_empregada }}</strong>
                                                    </h6>

                                                    <h6 style="font-size: 12px; text-align: right">
                                                        <strong>Box Garagem:
                                                            {{ item.comodos.garagem_box }}</strong>
                                                    </h6>
                                                </div>
                                                <div class="col-md-2">
                                                    <h6 style="font-size: 12px; text-align: right">
                                                        <strong>Copa: {{ item.comodos.copa }}</strong>
                                                    </h6>
                                                    <h6 style="font-size: 12px; text-align: right">
                                                        <strong>Cozinha: {{ item.comodos.cozinha }}</strong>
                                                    </h6>
                                                    <h6 style="font-size: 12px; text-align: right">
                                                        <strong>Escritório:
                                                            {{ item.comodos.escritorio }}</strong>
                                                    </h6>
                                                    <h6 style="font-size: 12px; text-align: right">
                                                        <strong>Garagem coberta:
                                                            {{ item.comodos.garagem_coberta }}</strong>
                                                    </h6>
                                                </div>
                                                <div class="col-md-2">
                                                    <h6 style="font-size: 12px; text-align: right">
                                                        <strong>Closet: {{ item.comodos.closet }}</strong>
                                                    </h6>
                                                    <h6 style="font-size: 12px; text-align: right">
                                                        <strong>Lavabo: {{ item.comodos.lavabo }}</strong>
                                                    </h6>
                                                    <h6 style="font-size: 12px; text-align: right">
                                                        <strong>Sl de estar:
                                                            {{ item.comodos.sala_estar }}</strong>
                                                    </h6>
                                                    <h6 style="font-size: 12px; text-align: right">
                                                        <strong>Sl de jantar:
                                                            {{ item.comodos.sala_jantar }}</strong>
                                                    </h6>
                                                </div>

                                                <div class="col-md-2">
                                                    <h6 style="font-size: 12px; text-align: right">
                                                        <strong>Sala de TV:
                                                            {{ item.comodos.sala_tv }}</strong>
                                                    </h6>
                                                    <h6 style="font-size: 12px; text-align: right">
                                                        <strong>Dormitórios com suites:
                                                            {{ item.comodos.suite }}</strong>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-1 mt-3">
                                            <div style="border-left: 1px solid #0001; height: 100px"></div>
                                        </div>
                                        <div class="col-md-2">
                                            <h6 style="font-size: 12px; margin-left: -70px">
                                                <strong><i class="fa fa-ruler" aria-hidden="true"></i>
                                                    Medida das áreas</strong>
                                            </h6>
                                            <div class="row mt-3" style="margin-left: -50px">
                                                <div class="col-md-12">
                                                    <h6 style="font-size: 12px">
                                                        <strong>Total:
                                                            {{ item.medidas != null ? item.medidas.area_total : '' }}
                                                            m²</strong>
                                                    </h6>
                                                    <h6 style="font-size: 12px">
                                                        <strong>Construida:
                                                            {{ item.medidas != null ?
                                                                item.medidas.area_contruida : '' }} m²</strong>
                                                    </h6>
                                                    <h6 style="font-size: 12px">
                                                        <strong>Privativa:
                                                            {{ item.medidas != null ? item.medidas.area_privativa
                                                                : '' }} m²</strong>
                                                    </h6>
                                                    <h6 style="font-size: 12px">
                                                        <strong>Preço m²: R$
                                                            {{
                                                                item.medidas != null ? item.medidas.media_metro_quadrado :
                                                                    ''
                                                            }}</strong>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>

                                        <hr class="mt-3" />

                                        <div class="col-md-7">
                                            <h6 style="font-size: 12px">
                                                <strong><i class="fa fa-check-square" aria-hidden="true"></i>
                                                    Caracteística do imóvel</strong>
                                            </h6>
                                            <div class="row mt-3">
                                                <div class="col-md-2" v-for="dado in item.caracteristicas">
                                                    <h6>
                                                        <span><i class="fa fa-check"></i>
                                                            <small>{{
                                                                dado.detalhesCaracteristica == null
                                                                    ? ""
                                                                    : dado.detalhesCaracteristica
                                                                        .nome_caracteristica
                                                            }}</small></span>
                                                    </h6>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>

                                        <div class="col-md-5">
                                            <h6 style="font-size: 12px">
                                                <strong><i class="fa fa-edit" aria-hidden="true"></i>
                                                    Detalhes do imóvel</strong>
                                            </h6>
                                            <div class="row mt-3">
                                                <div class="col-md-2">
                                                    <div class="avatar-null img-fluid rounded me-1" alt="Avatar">
                                                        {{ iniciais }}
                                                    </div>
                                                </div>
                                                <div class="col-md-3 mb-3">
                                                    <h6 style="font-size: 12px">
                                                        <strong>Responsável</strong>
                                                    </h6>
                                                    <h6 style="font-size: 12px">
                                                        {{ item.usuario.nome }} {{ item.usuario.sobrenome }}
                                                    </h6>
                                                </div>
                                                <div class="col-md-1">
                                                    <div style="
                                  border-left: 1px solid #0001;
                                  height: 40px;
                                "></div>
                                                </div>
                                                <div class="col-md-3" style="margin-top: -10px">
                                                    <img :src="item.qrcode.qrcode" width="50" alt="" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-7" style="margin-top: 4%">
                                            <h6 style="font-size: 12px">
                                                <strong><i class="fa fa-check-square" aria-hidden="true"></i>
                                                    Proximidades</strong>
                                            </h6>
                                            <div class="row mt-3">
                                                <div class="col-md-2" v-for="dado in item.proximidades">
                                                    <h6>
                                                        <span><i class="fa fa-check"></i><small>
                                                                {{
                                                                    dado.detalhesProximidade !== null
                                                                        ? dado.detalhesProximidade
                                                                            .nome_proximidade
                                                                        : ""
                                                                }}</small>
                                                        </span>
                                                    </h6>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>

                                        <div class="col-md-7" style="margin-top: 2%">
                                            <h6 style="font-size: 12px">
                                                <strong><i class="fa fa-edit" aria-hidden="true"></i>
                                                    Descrição do Imóvel</strong>
                                            </h6>
                                            <div class="row mt-3">
                                                {{ item.descricao.apresentacao }}
                                            </div>
                                        </div>

                                        <div class="col-md-5" style="margin-top: -150px">
                                            <table class="table">
                                                <tbody>
                                                    <tr>
                                                        <td style="background-color: #0001">
                                                            <strong><small>Ano da construção:</small></strong>
                                                        </td>
                                                        <td style="background-color: #0001">
                                                            <small>{{ item.info.ano_construcao }}</small>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong><small>Incorporação:</small></strong>
                                                        </td>
                                                        <td>
                                                            <small>{{ item.info.incorporacao }}</small>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="background-color: #0001">
                                                            <strong><small>Situação do Imóvel:</small></strong>
                                                        </td>
                                                        <td style="background-color: #0001">
                                                            <small>{{ item.info.situacao_imovel }}</small>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong><small>Esquina:</small></strong>
                                                        </td>
                                                        <td>
                                                            <small>{{ item.info.esquina }}</small>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="background-color: #0001">
                                                            <strong><small>Tem Financiamento:</small></strong>
                                                        </td>
                                                        <td style="background-color: #0001">
                                                            <small>{{ item.preco.financiado }}</small>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong><small>Aceita financiamento:</small></strong>
                                                        </td>
                                                        <td>
                                                            <small>{{
                                                                item.preco.aceita_financiamento
                                                                }}</small>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="background-color: #0001">
                                                            <strong><small>Minha Casa Minha Vida:</small></strong>
                                                        </td>
                                                        <td style="background-color: #0001">
                                                            <small>{{
                                                                item.preco.minhacasa_minhavida
                                                                }}</small>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong><small>Aceita permuta:</small></strong>
                                                        </td>
                                                        <td>
                                                            <small>{{ item.preco.aceita_permuta }}</small>
                                                        </td>
                                                    </tr>

                                                    <div class="col-md-12 mt-3"></div>
                                                </tbody>
                                            </table>

                                            <div class="mt-3">
                                                <h6 style="font-size: 12px">
                                                    <strong>Qualidade do anúncio
                                                        <span class="badge text-bg-success">{{ qualidadeProgress }}%
                                                        </span>
                                                        &nbsp;</strong>
                                                    <small>
                                                        {{ msgQualidade }}
                                                        <i v-for="star in estrelas" :key="star"
                                                            class="text-warning fa fa-star"></i></small>
                                                </h6>
                                                <div class="progress" role="progressbar" aria-label="Success example"
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

                            <div class="tab-pane fade show" :id="`nav-documentos${item.id_imovel}`" role="tabpanel"
                                :aria-labelledby="`nav-documentos-tab${item.id_imovel}`" tabindex="0">
                                <div class="container">
                                    <div class="row mt-3">
                                        <div class="col-md-8">
                                            <h6 style="font-size: 15px">
                                                <strong><i class="fa fa-link" aria-hidden="true"></i>
                                                    Links
                                                </strong>
                                            </h6>
                                            <div class="row mt-3">
                                                <div class="col-md-12">
                                                    <h6 style="font-size: 12px">
                                                        <strong>Drive:
                                                            <a :href="item.complemento.link_drive" target="_blank">{{
                                                                item.complemento.link_drive
                                                                }}</a></strong>
                                                    </h6>

                                                    <h6 style="font-size: 12px">
                                                        <strong>YouTube:
                                                            <a :href="item.complemento.link_youtube" target="_blank">{{
                                                                item.complemento.link_youtube }}</a></strong>
                                                    </h6>

                                                    <h6 style="font-size: 12px">
                                                        <strong>Apresentação:
                                                            <a :href="item.complemento.link_apresentacao"
                                                                target="_blank">{{
                                                                    item.complemento.link_apresentacao }}</a></strong>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- <div class="tab-pane fade show" :id="`nav-comentario${item.id_imovel}`" role="tabpanel"
                                :aria-labelledby="`nav-comentario-tab${item.id_imovel}`" tabindex="0">
                                <div class="container">
                                    <div class="row mt-3">
                                        <div class="col-md-12">
                                            <h6 style="font-size: 15px">
                                                <strong><i class="fa fa-list" aria-hidden="true"></i>
                                                    Faça aqui as anotações sobre este imóvel
                                                </strong>
                                            </h6>
                                            <div class="row mt-3">
                                                <div class="col-md-12">
                                                    <div class="form-floating">
                                                        <textarea class="form-control"
                                                            placeholder="Leave a comment here" id="floatingTextarea2"
                                                            style="height: 300px"></textarea>
                                                        <label for="floatingTextarea2"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                                            <button class="btn btn-success me-md-2"
                                                @click="handledComentario(item.id_imovel)" type="button">
                                                Salvar anotação
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Fechar
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- <EditModal :item="item" @save="handleEditUsuario" /> -->
        <ModalEditImovel :imovel="item" />
    </tr>
</template>

<script>
import EditModal from "./EditClientModal.vue";
import api from "@/../service/api/usuarios/index";
import apiIndex from "@/../service/api/index"
import ModalEditImovel from "../modals/modalEditImovel.vue";

export default {
    props: {
        item: Object,
    },

    components: {
        EditModal,
        ModalEditImovel,
    },

    data() {
        return {
            iniciais: '',

            msgQualidade: "",
            estrelas: 0,
            porcentagemQualidade: 0,
            qualidade: {},
            estrelaImovel: {},

            comentario: '',
        }
    },

    mounted() {
        const iniciais = this.item.usuario.nome.charAt(0) + this.item.usuario.sobrenome.charAt(0);
        this.iniciais = iniciais;

        this.avaliarQualidadeCadastro(this.item)
    },

    methods: {
        // handledComentario(id) {
        //     let id_imovel = id;

        //     apiIndex.comentarioImovel(id_imovel).then((res) => {
        //         this.comentario = res.data;
        //         console.log(res)
        //     });
        // },

        handleDeleteImovel(idImovel) {
            apiIndex.deleteImovel(idImovel).then((res) => {
                window.location.href = '/imoveis-plataforma'
            })
        },

        avaliarQualidadeCadastro(imovel) {
            // console.log('aqui')
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
            // console.log("qualidade: ", imovel.pontuacaoQualidade);
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

            return imovel;
        },

        openEditModal(item) {
            const modalId = `modalEdit${item.id_user}`;
            const modalElement = document.getElementById(modalId);
            if (modalElement) {
                const modalInstance = new bootstrap.Modal(modalElement);
                modalInstance.show();
            }
        },

        handleEditUsuario(updatedUser) {
            // Atualiza o usuário usando a API
            api.editUser(updatedUser).then((res) => {
                if (res.status == 201) {
                    this.$emit("updateUsers");
                    this.msgSuccess = "Status atualizado com sucesso!";

                    setTimeout(() => {
                        this.msgSuccess = "";

                        window.location.reload();
                    }, 3000);
                }
                const modalId = `modalEdit${updatedUser.id_user}`;
                $(`#${modalId}`).modal("hide");
            });
        },

        handleEditStatusAtivate(id) {
            let id_user = id;
            let status = 1;

            api.editStatusUser(id_user, status).then((res) => {
                if (res.status == 201) {
                    this.$emit("updateUsers");
                    this.msgSuccess = "Status atualizado com sucesso!";
                    window.location.reload();
                    setTimeout(() => {
                        this.msgSuccess = "";
                    }, 3000);
                }
            });
        },

        handleEditStatusBlock(id) {
            let id_user = id;
            let status = 2;

            api.editStatusUser(id_user, status).then((res) => {
                if (res.status == 201) {
                    this.$emit("updateUsers");
                    this.msgSuccess = "Status atualizado com sucesso!";
                    window.location.reload();
                    setTimeout(() => {
                        this.msgSuccess = "";
                    }, 3000);
                }
            });
        },

        handleDeleteUser(id) {
            let id_user = id;

            api.deleteUser(id_user).then((res) => {
                if (res.status == 202) {
                    this.$emit("updateUsers");
                    this.msgSuccess = "Usuário Excluído com sucesso!";
                    setTimeout(() => {
                        this.msgSuccess = "";
                    }, 3000);
                }
            });
        },
    },
};
</script>