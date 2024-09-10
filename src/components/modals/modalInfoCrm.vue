<template>
    {{ console.log(modalId, item) }}
    <div class="modal fade" :id="modalId" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
        data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header" style="display: flex; justify-content: space-between;">
                    <h5 class="modal-title" id="exampleModalLabel">{{ item.Cliente.nome }}</h5>
                    <div class="form-group" style="
                        border-bottom: 1px solid #dee2e6;
                      ">
                        <label for="corretorResponsavel" style="font-size: 14px; font-weight: 600;
                          margin-right: 10px;">Corretor
                            Responsável</label>
                        <select class="form-floating" id="corretorResponsavel" v-model="corretorResponsavel" style="
                          height: 40px;
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
                        <button class="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#info-tab-pane"
                            type="button" role="tab" aria-controls="info-tab-pane" aria-selected="true">
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
                            aria-selected="true">
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
                    </div>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show " id="info-tab-pane" role="tabpanel"
                            aria-labelledby="anotacoes-tab" tabindex="0">
                            <p>Imóveis sobre os negocios do {{ item.Cliente.nome }}</p>
                        </div>
                    </div>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show " id="anotacoes-tab-pane" role="tabpanel"
                            aria-labelledby="info-tab" tabindex="0">
                            <p>Anotações sobre os negocios do {{ item.Cliente.nome }}</p>
                        </div>
                    </div> -->
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="dados-tab-pane" role="tabpanel"
                            aria-labelledby="dados-tab" tabindex="0">
                            <p>Dados do Cliente</p>

                            <ul class="list-group">
                                <li class="list-group-item" style="display: flex; justify-content: left; gap: 20px;">
                                    <div>
                                        <h3 style="font-size: 16px;">Categoria</h3>
                                        <span>{{ item.Cliente.id_categoria_cliente }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 16px;">Origem da captação</h3>
                                        <span>{{ item.Cliente.id_captacao }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 16px;">Telefone</h3>
                                        <span>{{ item.Cliente.telefone_1 }}</span>
                                    </div>
                                </li>

                                <li class="list-group-item" style="display: flex; justify-content: left; gap: 20px;">
                                    <div>
                                        <h3 style="font-size: 16px;">E-mail</h3>
                                        <span>{{ item.Cliente.email }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 16px;">Aniversário</h3>
                                        <span>{{ item.Cliente.data_de_nascimento }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 16px;">Tipo</h3>
                                        <span>{{ item.Cliente.id_tipo_cliente }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 16px;">CPF</h3>
                                        <span>{{ item.Cliente.cpf }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 16px;">RG</h3>
                                        <span>{{ item.Cliente.rg }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 16px;">Profissão</h3>
                                        <span>{{ item.Cliente.profissao }}</span>
                                    </div>
                                </li>

                                <li class="list-group-item" style="display: flex; justify-content: left; gap: 20px;">
                                    <div>
                                        <h3 style="font-size: 16px;">UF</h3>
                                        <span>{{ item.Cliente.uf }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 16px;">Cidade</h3>
                                        <span>{{ item.Cliente.cidade }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 16px;">Bairro</h3>
                                        <span>{{ item.Cliente.bairro }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 16px;">Logradouro</h3>
                                        <span>{{ item.Cliente.logradouro }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 16px;">Complemento</h3>
                                        <span>{{ item.Cliente.complemento }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 16px;">N°</h3>
                                        <span>{{ item.Cliente.numero }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 16px;">CEP</h3>
                                        <span>{{ item.Cliente.cep }}</span>
                                    </div>
                                </li>
                            </ul>

                            <ul class="list-group mt-3">
                                <li class="list-group-item">
                                    <h3 style="font-size: 16px;">Clientes ligados</h3>
                                    <span>Nenhum cliente relacionado</span>
                                </li>
                            </ul>
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
        }
    }
};
</script>