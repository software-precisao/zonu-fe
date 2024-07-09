<template>
    <div class="wrapper">
        <SideBar />
        <div class="main">
            <NavBar />
            <main class="content">
                <div class="container-fluid p-0">

                    <h1 class="h3 mb-3"><strong>Lista de Ticket |</strong> Zonu</h1>
                    <div class="row">


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
                                                        <th scope="col">Solicitante</th>
                                                        <th scope="col">Assunto</th>
                                                        <th scope="col">Mensagem</th>
                                                        <th scope="col">Data de Envio</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Ação</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(ticket, index) in listTiketsOpen" class="text-center">
                                                        <td>{{ ticket.protocolo }}</td>
                                                        <td>{{ ticket.usuario.nome }} {{ ticket.usuario.sobrenome }}
                                                        </td>
                                                        <td>{{ ticket.assunto }}</td>
                                                        <td>{{ truncate(ticket.mensagem, 20) }}</td>
                                                        <td>{{ formatDate(ticket.data_pergunta) }}</td>


                                                        <td v-if="ticket.status == 2"><span
                                                                class="badge text-bg-info">Aguardando</span></td>

                                                        <td><button data-bs-toggle="modal"
                                                                :data-bs-target="`#modalResposta` + ticket.id_ticket"
                                                                type="button"
                                                                class="btn btn-warning btn-sm">Responder</button>

                                                        </td>

                                                        <div class="modal fade" :id="`modalResposta` + ticket.id_ticket"
                                                            tabindex="-1" aria-labelledby="exampleModalLabel"
                                                            aria-hidden="true">
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
                                                                                    <small><strong>Pergunta</strong></small>
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
                                                                                            Responda
                                                                                            aqui</strong></small>
                                                                                </label>
                                                                                <textarea style="height: 120px;"
                                                                                    v-model="resposta"
                                                                                    class="form-control mt-3"
                                                                                    id="exampleFormControlTextarea1"
                                                                                    rows="8"></textarea>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-secondary"
                                                                            data-bs-dismiss="modal">Fechar</button>
                                                                        <button
                                                                            @click="handledResposta(ticket.id_ticket)"
                                                                            type="button" class="btn btn-success"
                                                                            data-bs-dismiss="modal">Enviar a
                                                                            resposta</button>

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

                        <div class="col-md-12 col-xl-12">
                            <div class="card mb-3">
                                <div class="card-header">
                                    <h5 class="card-title mb-0"><i class="fa fa-tag"></i> Seus Tickets fechado </h5>
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
                                                        <th scope="col">Solicitante</th>
                                                        <th scope="col">Assunto</th>
                                                        <th scope="col">Mensagem</th>
                                                        <th scope="col">Tempo de resposta</th>
                                                        <th scope="col">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(ticket, index) in listTiketsClose" class="text-center">
                                                        <td>{{ ticket.protocolo }}</td>
                                                        <td>{{ ticket.usuario.nome }} {{ ticket.usuario.sobrenome }}
                                                        </td>
                                                        <td>{{ ticket.assunto }}</td>
                                                        <td>{{ truncate(ticket.mensagem, 20) }}</td>
                                                        <td><i class="fa fa-clock"></i> {{ ticket.tempo_resposta }}
                                                            Segundos</td>


                                                        <td v-if="ticket.status == 1"><span
                                                                class="badge text-bg-success">Respondido</span></td>


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
import $ from 'jquery';

import api from '../../../../service/api/index.js'
export default {
    name: 'TicketListView',
    data() {
        return {

            assunto: '',
            textotikets: '',
            id_user: '',
            resposta: '',

            textoBotao: "Abrir Ticket",
            autenticando: false,

            listTiketsOpen: [],
            listTiketsClose: [],

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

        this.fetchTickets();
        this.fetchResposta();
    },

    methods: {

        formatDate(dateString) {
            const date = parseISO(dateString);
            return format(date, 'PPpp'); // 'PPpp' é um exemplo de formato que inclui a data completa e a hora
        },

        truncate(text, length) {
            if (text.length > length) {
                return text.substring(0, length) + '...'; // Trunca o texto e adiciona reticências
            }
            return text;
        },

        handledResposta(id) {
            let id_ticket = id;
            let resposta = this.resposta

            api.RespondaTicket(id_ticket, resposta).then(res => {

                if(res.status == 200){
                    this.resposta = '';
                    this.fetchTickets();
                    this.fetchResposta();
                    $(`#modalResposta${id_ticket}`).modal('hide');


                }
            })
        },

        fetchTickets() {
            api.listAllTickets().then(res => {

                if (Array.isArray(res.data)) {
                    const filteredTickets = res.data.filter(ticket => ticket.status === 2);

                    this.totalTickets = filteredTickets.length;

                    this.listTiketsOpen = filteredTickets

                    if (filteredTickets.length > 0) {
                        const firstTicketUser = filteredTickets[0].usuario;
                        this.iniciaisUser = `${firstTicketUser.nome.charAt(0)}${firstTicketUser.sobrenome.charAt(0)}`.toUpperCase();
                    }

                } else {
                    console.log('Resposta não contém um array ou está em um formato não esperado');
                }
            }).catch(error => {
                console.error('Erro ao buscar tickets: ', error);
            });

        },

        fetchResposta() {
            api.listAllTickets().then(res => {

                if (Array.isArray(res.data)) {
                    const filteredTicketsClose = res.data.filter(ticket => ticket.status === 1);
                    this.listTiketsClose = filteredTicketsClose

                } else {
                    console.log('Resposta não contém um array ou está em um formato não esperado');
                }
            }).catch(error => {
                console.error('Erro ao buscar tickets: ', error);
            });
        }






    }
}
</script>