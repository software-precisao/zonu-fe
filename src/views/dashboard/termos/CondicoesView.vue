<template>
    <div class="wrapper">
        <SideBar />
        <div class="main">
            <NavBar />
            <main class="content">
                <div class="container-fluid p-0">

                    <h1 class="h3 mb-3"><strong>Termos & Condições |</strong> Zonu</h1>
                    <div class="row">

                        <div class="col-12 col-lg-12 col-xxl-12 d-flex">
                            <div class="card flex-fill">
                                <div class="card-header">
                                    <h5 class="card-title mb-0">Termo </h5>
                                </div>

                                <div class="card-body">
                                    <div v-if="msgSuccess" class="alert alert-success alert-dismissible fade show"
                                        role="alert">
                                        <strong><i class="align-middle" data-feather="check"></i> Sucesso!</strong>
                                        Termo de Responsabilidade acabou de ser atualizado.
                                        <button type="button" class="btn-close" data-bs-dismiss="alert"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <Editor api-key="a0eo66lpqzpu1anhsfgh9ru0bp7id447c6hsvz9cgexp82oh" :init="{
                                                toolbar_mode: 'sliding',
                                                plugins:
                                                    'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                                                toolbar:
                                                    'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                                            }" v-model="termos" @editorChange="handleEditorChange" />
                                        </div>
                                        <div class="col-12 mt-4">
                                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                                <button :disabled="autenticando" @click="handleSaveTermo()"
                                                    class="btn btn-success" type="button">
                                                    {{ textoBotao }}
                                                    <span v-if="autenticando" class="spinner-border spinner-border-sm"
                                                        aria-hidden="true"></span>
                                                    <span v-if="autenticando" class="visually-hidden">Aguarde...</span>
                                                </button>
                                                <button class="btn btn-secondary" type="button">Cancelar</button>
                                            </div>
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
import Editor from "@tinymce/tinymce-vue";
import { jwtDecode } from "jwt-decode";
import axios from 'axios'
import _ from 'lodash';
import { format, parseISO } from 'date-fns';
import $ from 'jquery';

import api from '../../../../service/api/index.js'
export default {
    name: 'TermosView',
    data() {
        return {

            assunto: '',
            textotikets: '',
            id_user: '',
      

            textoBotao: "Atualizar Termos e condições",
            autenticando: false,

            msgSuccess: false,
            msgErrorNull: false,
            msgSuccessEdit: false,
            msgSuccessDelete: false,
            termos: '',

        }
    },
    components: {
        SideBar,
        NavBar,
        Footer,
        Editor,
    },

    mounted() {

        let token = localStorage.getItem('token')
        this.token = token;
        let decode = jwtDecode(token);

        let id_user = decode.id_user;
        this.id_user = id_user;


        this.fetchTermos();



    },

    methods: {

        handleEditorChange(content) {
            this.editorContent = content;
        },

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

        handleSaveTermo() {
            let id_termos = 1
            let termos = this.termos
            api.editTermos(id_termos, termos).then(res => {
                this.msgSuccess = true;
                this.textoBotao = "Atualizar Termos e condições";
                this.autenticando = false;
                this.fetchTermos();
            })

        },


        fetchTermos() {
            api.termos().then(res => {
                this.termos = res.data.response[0].texto;
            }).catch(error => {
                console.error('Erro ao buscar tickets: ', error);
            });

        },

    }








}
</script>