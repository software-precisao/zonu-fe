<template>
    {{ console.log(modalId, item) }}
    <div class="modal fade" :id="modalId" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
        data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header" style="display: flex; justify-content: space-between;">
                    <h5 class="modal-title" id="exampleModalLabel">{{ item.Cliente.nome }}</h5>
                    <div class="form-group" style="
                      ">
                        <label for="corretorResponsavel" style="font-size: 14px; font-weight: 600;
                          margin-right: 10px;">Corretor
                            Responsável</label>
                        <select class="form-floating" id="corretorResponsavel" v-model="corretorResponsavel" style="
                          height: 30px;
                          border: 1px solid #dee2e6;
                          padding-left: 8px;
                          margin-right: 10px;
                        ">
                            <option value="" disabled hidden>Selecione</option>
                            <option :value="`${userName} ${userSobrenome}`">
                                {{ userName }} {{ userSobrenome }}
                            </option>
                        </select>
                        <button type="button" class="btn-close" aria-label="Close" @click="closeModal"></button>
                    </div>
                </div>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <!-- <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="inicio-tab" data-bs-toggle="tab"
                            data-bs-target="#inicio-tab-pane" type="button" role="tab" aria-controls="inicio-tab-pane"
                            aria-selected="false">
                            <small>Início</small>
                        </button>
                    </li> -->
                    <!-- <li class="nav-item" role="presentation">
                        <button class="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#imovel-tab-pane"
                            type="button" role="tab" aria-controls="imovel-tab-pane" aria-selected="true"
                            @click="handleImovel">
                            <small>Imóvel(1)</small>
                        </button>
                    </li> -->
                    <!-- <li class="nav-item" role="presentation">
                        <button class="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#anotacoes-tab-pane"
                            type="button" role="tab" aria-controls="anotacoes-tab-pane" aria-selected="true">
                            <small>anotações(1)</small>
                        </button>
                    </li> -->
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab"
                            data-bs-target="#dados-tab-pane" type="button" role="tab" aria-controls="dados-tab-pane"
                            aria-selected="true" @click="handleDados">
                            <small>Dados</small>
                        </button>
                    </li>
                    <!-- <li class="nav-item" role="presentation">
                        <button class="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#perfil-tab-pane"
                            type="button" role="tab" aria-controls="perfil-tab-pane" aria-selected="true">
                            <small>Perfis(1)</small>
                        </button>
                    </li> -->
                    <!-- <li class="nav-item" role="presentation">
                        <button class="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#documento-tab-pane"
                            type="button" role="tab" aria-controls="documento-tab-pane" aria-selected="true">
                            <small>Documentos(0)</small>
                        </button>
                    </li> -->
                    <!-- <li class="nav-item" role="presentation">
                        <button class="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#agenda-tab-pane"
                            type="button" role="tab" aria-controls="agenda-tab-pane" aria-selected="true">
                            <small>Agenda(1)</small>
                        </button>
                    </li> -->
                </ul>

                <div class="modal-body">
                    <!-- <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="inicio-tab-pane" role="tabpanel"
                            aria-labelledby="inicio-tab" tabindex="0">
                            <p>Inicio sobre os negocios do {{ item.Cliente.nome }}</p>
                        </div>
                    </div> -->
                    <!-- <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show " id="imovel-tab-pane" role="tabpanel"
                            aria-labelledby="imovel-tab" tabindex="0">
                            <p>Imóveis sobre os negocios do {{ item.Cliente.nome }}</p>
                        </div>
                    </div> -->
                    <!-- <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show " id="anotacoes-tab-pane" role="tabpanel"
                            aria-labelledby="info-tab" tabindex="0">
                            <p>Anotações sobre os negocios do {{ item.Cliente.nome }}</p>
                        </div>
                    </div> -->
                    <div class="tab-content" id="myTabContent" style="padding-bottom: 30px;">
                        <div class="tab-pane fade show active" id="dados-tab-pane" role="tabpanel"
                            aria-labelledby="dados-tab" tabindex="0">
                            <p>Dados do Cliente</p>

                            <ul class="list-group">
                                <li class="list-group-item" style="display: flex; justify-content: left; gap: 30px;">
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">Categoria</h3>
                                        <span style="font-size: 12px; font-weight: 500;">{{
                                            item.Cliente.CategoriaCliente.categoria_cliente == "" ? "-" :
                                                item.Cliente.CategoriaCliente.categoria_cliente }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">Origem da captação</h3>
                                        <span style="font-size: 12px; font-weight: 500;">{{
                                            item.Cliente.Captacao.origem_captacao == "" ? "-" :
                                                item.Cliente.Captacao.origem_captacao
                                        }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">Telefone</h3>
                                        <span style="font-size: 12px; font-weight: 500;">{{ item.Cliente.telefone_1 ==
                                            "" ? "-" : item.Cliente.telefone_1
                                            }}</span>
                                    </div>
                                </li>

                                <li class="list-group-item" style="display: flex; justify-content: left; gap: 30px;">
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">E-mail</h3>
                                        <span style="font-size: 12px; font-weight: 500;">{{ item.Cliente.email == "" ?
                                            "-" : item.Cliente.email }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">Aniversário</h3>
                                        <span style="font-size: 12px; font-weight: 500;">{{
                                            item.Cliente.data_de_nascimento == "" ? "-" :
                                                item.Cliente.data_de_nascimento }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">Tipo</h3>
                                        <span style="font-size: 12px; font-weight: 500;">{{
                                            item.Cliente.TipoCliente.tipo_cliente == "" ? "-" :
                                                item.Cliente.TipoCliente.tipo_cliente }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">CPF</h3>
                                        <span style="font-size: 12px; font-weight: 500;">{{ item.Cliente.cpf == "" ? "-"
                                            : item.Cliente.cpf }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">RG</h3>
                                        <span style="font-size: 12px; font-weight: 500;">{{ item.Cliente.rg == "" ? "-"
                                            : item.Cliente.rg }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">Profissão</h3>
                                        <span style="font-size: 12px; font-weight: 500;">{{ item.Cliente.profissao == ""
                                            ? "-" : item.Cliente.profissao
                                            }}</span>
                                    </div>
                                </li>

                                <li class="list-group-item"
                                    style="display: flex; justify-content: left; gap: 30px; flex-wrap: wrap;">
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">UF</h3>
                                        <span>{{ item.Cliente.uf == "" ? "-" : item.Cliente.uf }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">Cidade</h3>
                                        <span>{{ item.Cliente.cidade == "" ? "-" : item.Cliente.cidade }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">Bairro</h3>
                                        <span>{{ item.Cliente.bairro == "" ? "-" : item.Cliente.bairro }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">Logradouro</h3>
                                        <span>{{ item.Cliente.logradouro == "" ? "-" : item.Cliente.logradouro }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">Complemento</h3>
                                        <span>{{ item.Cliente.complemento == "" ? "-" : item.Cliente.complemento
                                            }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">N°</h3>
                                        <span>{{ item.Cliente.numero == "" ? "-" : item.Cliente.numero }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">CEP</h3>
                                        <span>{{ item.Cliente.cep == "" ? "-" : item.Cliente.cep }}</span>
                                    </div>
                                </li>
                            </ul>

                            <!-- <ul class="list-group mt-3">
                                <li class="list-group-item">
                                    <h3 style="font-size: 16px;">Clientes ligados</h3>
                                    <span>Nenhum cliente relacionado</span>
                                </li>
                            </ul> -->
                        </div>
                    </div>
                    <!-- <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show " id="perfil-tab-pane" role="tabpanel"
                            aria-labelledby="perfil-tab" tabindex="0">
                            <p>Perfil sobre os negocios do {{ item.Cliente.nome }}</p>
                        </div>
                    </div>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show " id="perfil-tab-pane" role="tabpanel"
                            aria-labelledby="perfil-tab" tabindex="0">
                            <p>Perfil sobre os negocios do {{ item.Cliente.nome }}</p>
                        </div>
                    </div>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show " id="documento-tab-pane" role="tabpanel"
                            aria-labelledby="documento-tab" tabindex="0">
                            <p>Documento sobre os negocios do {{ item.Cliente.nome }}</p>
                        </div>
                    </div>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show " id="agenda-tab-pane" role="tabpanel"
                            aria-labelledby="agenda-tab" tabindex="0">
                            <p>Agenda sobre os negocios do {{ item.Cliente.nome }}</p>
                        </div>
                    </div> -->
                </div>
                <!-- <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="closeModal">Cancelar</button>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import { jwtDecode } from 'jwt-decode';
import api from "../../../service/api/index"

export default {
    props: {
        modalId: {
            type: String,
            required: true
        },
        item: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            userName: '',
            userSobrenome: '',
            id_user: '',
            corretorResponsavel: '',
            token: localStorage.getItem("token"),

            tabInicio: false,
            tabInfo: false,
            tabDados: true,
            tabImovel: true,
        }
    },
    mounted() {
        let token = this.token;
        let decode = jwtDecode(token);
        let id_user = decode.id_user;
        this.userName = decode.nome;
        this.userSobrenome = decode.sobrenome;

        this.id_user = id_user;

        this.corretorResponsavel = `${this.userName} ${this.userSobrenome}`;
    },
    methods: {
        closeModal() {
            const modalElement = document.getElementById(this.modalId);
            if (modalElement) {
                const modal = bootstrap.Modal.getInstance(modalElement);
                modal.hide();
                const backdropElement = document.querySelector('.modal-backdrop');
                if (backdropElement) {
                    backdropElement.remove();
                }
            }
        },

        handleImovel() {
            this.tabDados = false
            this.tabImovel = true
        },
        handleDados() {
            this.tabDados = true
            this.tabImovel = false
        },
    }
};
</script>