<template>
    <div class="wrapper">
        <SideBar />
        <div class="main">
            <NavBar />
            <main class="content">
                <div class="container-fluid p-0">

                    <h1 class="h3 mb-3"><strong>Novo Ticket |</strong> Zonu</h1>
                    <div class="row">

                        <div class="col-md-12 col-xl-12">
                            <div class="card mb-3">
                                <div class="card-header">
                                    <h5 class="card-title mb-0"><i class="fa fa-tag"></i> Abra um novo Ticket </h5>
                                </div>
                                <div class="card-body">
                                    <div v-if="msgSuccess" class="alert alert-success mt-3" role="alert">
                                        <i class="fa fa-check"></i> Ticket criado com sucesso!
                                    </div>

                                    <div class="container">
                                        <div class="row">

                                            <div class="col-5">
                                                <div class="form-group">
                                                    <label for=""><small><strong>Assunto</strong></small></label>
                                                    <select class="form-control form-select" id="nome"
                                                        v-model="assunto">
                                                        <option disabled selected>Escolha</option>
                                                        <option value="Financeiro">Financeiro</option>
                                                        <option value="Suporte Técnico">Suporte Técnico</option>
                                                        <option value="Sugestão">Sugestão</option>
                                                        <option value="Reclamação">Reclamação</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-12 mt-4">
                                                <div class="form-group">
                                                    <label for=""><small><strong>Sua mensagem</strong></small></label>
                                                    <textarea style="height: 200px;" v-model="textotikets"
                                                        class="form-control" id="exampleFormControlTextarea1"
                                                        rows="8"></textarea>
                                                </div>
                                            </div>

                                            <div class="mt-4 d-grid gap-2 d-md-flex justify-content-md-end">
                                                <button :disabled="autenticando" @click="handleAbrirTicket()"
                                                    class="btn btn-success" type="button"> {{ textoBotao
                                                    }}
                                                    <span v-if="autenticando" class="spinner-border spinner-border-sm"
                                                        aria-hidden="true"></span>
                                                    <span v-if="autenticando" class="visually-hidden">Aguarde...</span>
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-12 col-xl-12">
                            <div class="card mb-3">
                                <div class="card-header">
                                    <h5 class="card-title mb-0"><i class="fa fa-tag"></i> Seus Tickets abertos </h5>
                                </div>
                                <div class="card-body">
                                    <div v-if="msgSuccessEdit" class="alert alert-success mt-3" role="alert">
                                        <i class="fa fa-check"></i> Status atualizado com sucesso!
                                    </div>

                                    <div v-if="msgSuccessDelete" class="alert alert-success mt-3" role="alert">
                                        <i class="fa fa-check"></i> Usuário Excluído com sucesso!
                                    </div>
                                    <div class="container">
                                        <div class="row">

                                            <table class="table">
                                                <thead>
                                                    <tr class="text-center">
                                                        <th scope="col">Protocolo</th>
                                                        <th scope="col">Assunto</th>
                                                        <th scope="col">Data de Envio</th>
                                                        <th scope="col">Tempo de resposta</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Ação</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(ticket, index) in listTikets" class="text-center">
                                                        <td>{{ ticket.protocolo }}</td>
                                                        <td>{{ ticket.assunto }}</td>
                                                        <td>{{ formatDate(ticket.data_pergunta) }}</td>
                                                        <td v-if="ticket.tempo_resposta == null">-</td>
                                                        <td v-if="ticket.tempo_resposta !== null"><i class="fa fa-clock"></i> {{ ticket.tempo_resposta
                                                            }} Segundos</td>

                                                        <td v-if="ticket.status == 2"><span
                                                                class="badge text-bg-info">Aguardando</span></td>
                                                        <td v-if="ticket.status == 1"><span
                                                                class="badge text-bg-success">Respondido</span></td>

                                                        <td v-if="ticket.status == 2"><button disabled type="button"
                                                                class="btn btn-warning btn-sm">Ver
                                                                resposta</button>
                                                        </td>

                                                        <td v-if="ticket.status == 1"><button data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal" type="button"
                                                                class="btn btn-warning btn-sm">Ver
                                                                resposta</button>

                                                        </td>

                                                        <div class="modal fade" id="exampleModal" tabindex="-1"
                                                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h1 class="modal-title fs-5"
                                                                            id="exampleModalLabel">Respondendo | <span
                                                                                style=" position:relative; right:  0;"><small><strong>Protocolo:
                                                                                        {{ ticket.protocolo
                                                                                        }}</strong></small></span>
                                                                        </h1>

                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <div class="row">
                                                                            <div style="text-align: left;">
                                                                                <label for="">
                                                                                    <small><strong>Assunto</strong></small>
                                                                                </label>
                                                                                <h4 class="text-muted">{{ ticket.assunto
                                                                                    }}
                                                                                </h4>
                                                                            </div>



                                                                            <div style="text-align: left;" class="mt-3">
                                                                                <label for="">
                                                                                    <small><strong>Sua pergunta</strong></small>
                                                                                </label>
                                                                                <h4 class="text-muted">{{
                                                                                    ticket.mensagem }}
                                                                                </h4>
                                                                            </div>
                                                                            <hr>

                                                                            <div style="text-align: left;">
                                                                                <label for="">
                                                                                    <small><strong><i
                                                                                                class="fa fa-comment"></i>
                                                                                            Sua resposta</strong></small>
                                                                                </label>
                                                                                <h4 class="text-muted">{{
                                                                                    ticket.resposta }}
                                                                                </h4>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-secondary"
                                                                            data-bs-dismiss="modal">Fechar</button>
                                                                       
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </tr>

                                                </tbody>
                                            </table>

                                        </div>
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
import SideBar from '../../../components/sidebar/index.vue';
import NavBar from '../../../components/navbar/index.vue';
import Footer from '../../../components/footer/index.vue';
import { jwtDecode } from "jwt-decode";
import axios from 'axios'
import _ from 'lodash';
import { format, parseISO } from 'date-fns';

import api from '../../../../service/api/index.js'
export default {
    name: 'TicketView',
    data() {
        return {

            assunto: '',
            textotikets: '',
            id_user: '',

            textoBotao: "Abrir Ticket",
            autenticando: false,

            listTikets: [],

            msgSuccess: false,
            msgErrorNull: false,
            msgSuccessEdit: false,
            msgSuccessDelete: false
        }
    },
    components: {
        SideBar,
        NavBar,
        Footer
    },

    mounted() {


        let token = localStorage.getItem('token')
        this.token = token;
        let decode = jwtDecode(token);

        let id_user = decode.id_user;
        this.id_user = id_user;

        this.fetchGetTicket();
    },

    methods: {

        formatDate(dateString) {
            const date = parseISO(dateString);
            return format(date, 'PPpp'); // 'PPpp' é um exemplo de formato que inclui a data completa e a hora
        },

        handleAbrirTicket() {

            this.textoBotao = "Enviando...";
            this.autenticando = true;

            let assunto = this.assunto;
            let mensagem = this.textotikets;
            let id_user = this.id_user;

            if (assunto !== '' && mensagem !== '') {

                api.abritTicket(assunto, mensagem, id_user).then(res => {

                    if (res.status == 201) {
                        this.assunto = '';
                        this.textotikets = '';

                        this.textoBotao = "Abrir um novo Ticket";
                        this.autenticando = false;
                        this.msgSuccess = true;

                        this.fetchGetTicket();
                    }

                    setTimeout(() => {
                        this.msgSuccess = false;

                    }, 3000);

                })

            } else {

                this.msgErrorNull = true;
                this.textoBotao = "Criar novo usuário";
                this.autenticando = false;

                setTimeout(() => {
                    this.msgErrorNull = false;
                }, 3000);

            }

        },

        fetchGetTicket() {
            let id_user = this.id_user;

            api.listMyTickets(id_user).then(res => {
                this.listTikets = res.data
            })
        }




    }
}
</script>