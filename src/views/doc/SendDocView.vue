<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 d-flex flex-column justify-content-center align-items-center p-5">
                <img src="../../../assets/images/logo.svg" class="mb-2" alt="" />

                <div class="area-login px-4">
                    <h1 class="title-login mt-5">Olá {{ nome }} {{ sobrenome }}</h1>

                    <p>
                        Para sua experiência ser completa, precisamos que envie alguns documentos.
                    </p>
                    <p class="text-danger"><small><i class="fa fa-bell"></i> Os formatos aceitos são: .pdf .jpg .JPEG
                            .png</small></p>

                    <div class="row">
                        <div class="col-6" v-if="viewCreci">
                            <a class="card card-select" @click="triggerFileUpload('creci')"
                                style="height: 150px; text-decoration: none !important;">
                                <div class="card-body">
                                    <img src="../../../assets/images/iconCardCreci.png"
                                        style="margin-left: auto; margin-right: auto; display: block; width: 70px;"
                                        alt="">
                                    <p class="text-center mt-3">CRECI</p>
                                </div>
                                <i
                                    :class="['fa-solid', 'fa-circle-check', 'fa-2x', 'text-center', creciUploadSuccess ? 'text-success' : 'text-secondary']"></i>
                            </a>
                            <input type="file" ref="creciFileInput"
                                @change="(event) => handleFileUpload('creci', event)" style="display: none;"
                                accept=".jpg,.jpeg,.pdf" />
                        </div>

                        <div class="col-6" v-if="viewCreci">
                            <a class="card card-select" @click="triggerFileUpload('doc_ofc')"
                                style="height: 150px; text-decoration: none !important;">
                                <div class="card-body">
                                    <img src="../../../assets/images/iconCardCreci.png"
                                        style="margin-left: auto; margin-right: auto; display: block; width: 70px;"
                                        alt="">
                                    <p class="text-center mt-3">RG / CNH</p>
                                </div>
                                <i
                                    :class="['fa-solid', 'fa-circle-check', 'fa-2x', 'text-center', docOfcUploadSuccess ? 'text-success' : 'text-secondary']"></i>
                            </a>
                            <input type="file" ref="docOfcFileInput"
                                @change="(event) => handleFileUpload('doc_ofc', event)" style="display: none;"
                                accept=".jpg,.jpeg,.pdf" />
                        </div>


                        <div class="col-6" v-if="viewCNPJ">
                            <a class="card card-select" @click="triggerFileUpload('cnpj')"
                                style="height: 150px; text-decoration: none !important;">
                                <div class="card-body">
                                    <img src="../../../assets/images/iconDoc.png"
                                        style="margin-left: auto; margin-right: auto; display: block; width: 70px;"
                                        alt="">
                                    <p class="text-center mt-3">Cartão de CNPJ</p>
                                </div>
                                <i
                                    :class="['fa-solid', 'fa-circle-check', 'fa-2x', 'text-center', cnpjUploadSuccess ? 'text-success' : 'text-secondary']"></i>
                            </a>
                            <input type="file" ref="cnpjFileInput" @change="(event) => handleFileUpload('cnpj', event)"
                                style="display: none;" accept=".jpg,.jpeg,.pdf" />
                        </div>
                    </div>
                </div>

                <button :disabled="autenticando" @click="sendDocuments" type="submit" class="btn btn-dark bot mt-5">
                    {{ textoBotao }}
                    <span v-if="autenticando" class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                    <span v-if="autenticando" class="visually-hidden">Aguarde...</span>
                </button>
            </div>

            <div class="col-lg-6 p-0 d-none d-lg-block">
                <img src="../../../assets/images/bg-login.svg" class="bg-login" alt="" />
            </div>
        </div>
    </div>
</template>
<script>

import api from '../../../service/api/usuarios/index'
import { jwtDecode } from "jwt-decode";

export default {
    name: "SendDocuments",
    data() {
        return {
            textoBotao: "Enviar documentos",
            viewCreci: false,
            viewCNPJ: false,
            token: null,
            id_nivel: null,
            id_user: null,
            nome: null,
            sobrenome: null,
            autenticando: false,
            creciUploadSuccess: false,
            docOfcUploadSuccess: false,
            cnpjUploadSuccess: false,
            creciFile: '',
            cnpjFile: '',
            docOfcFile: '',
        };
    },
    mounted() {
        const urlParams = new URLSearchParams(window.location.search);
        this.token = urlParams.get('id');

        let token = this.token;
        let decode = jwtDecode(token);
        let id_user = decode.id_user;
        let id_nivel = decode.id_nivel;
        let nome = decode.nome;
        let sobrenome = decode.sobrenome;

        this.id_nivel = id_nivel;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.id_user = id_user;

        if (id_nivel == 4) {
            this.viewCreci = true;
        } else if (id_nivel == 5) {
            this.viewCreci = true;
            this.viewCNPJ = true;
        } else {
            this.viewCreci = false;
            this.viewCNPJ = false;
        }
    },
    methods: {
        triggerFileUpload(type) {
            if (type === 'creci') {
                this.$refs.creciFileInput.click();
            } else if (type === 'cnpj') {
                this.$refs.cnpjFileInput.click();
            } else if (type === 'doc_ofc') {
                this.$refs.docOfcFileInput.click()
            }
        },
        handleFileUpload(type, event) {
            const file = event.target.files[0];
            if (file) {
                if (file.type === 'application/pdf' || file.type.startsWith('image/')) {
                    console.log(`Arquivo ${type} selecionado:`, file);
                    if (type === 'creci') {
                        this.creciUploadSuccess = true;
                        this.creciFile = file;
                    } else if (type === 'cnpj') {
                        this.cnpjUploadSuccess = true;
                        this.cnpjFile = file;
                    } else if (type === 'doc_ofc') {
                        this.docOfcUploadSuccess = true
                        this.docOfcFile = file
                    }
                } else {
                    alert('Por favor, selecione um arquivo JPG ou PDF.');
                }
            }
        },
        async sendDocuments() {
            this.textoBotao = "Enviando documentos...";
            this.autenticando = true;

            if (this.creciFile && this.docOfcFile) {
                await this.sendFileCreci(this.id_user, this.creciFile);
                await this.sendDocOfc(this.id_user, this.docOfcFile)
            }
            if (this.cnpjFile) {
                await this.sendFileCnpj(this.id_user, this.cnpjFile);
            }
        },
        async sendFileCreci(id_user, file) {
            const formData = new FormData();
            formData.append('creci', file);

            console.log(formData)

            try {
                const res = await api.sendFileCreci(id_user, formData);
                // console.log(res)
                if (res.status === 200) {
                    this.textoBotao = "Documentos enviados com sucesso!";


                    setTimeout(() => {
                        window.location.href = '/login';
                    }, 3000);
                } else {
                    console.error('Erro ao enviar o arquivo CRECI');
                }
            } catch (error) {
                console.error('Erro na requisição:', error);
            }
        },
        async sendDocOfc(id_user, file) {
            const formData = new FormData();
            formData.append('doc_ofc', file);

            console.log(formData)

            try {
                const res = await api.sendFileDocOfc(id_user, formData);
                // console.log(res)
                if (res.status === 200) {
                    this.textoBotao = "Documentos enviados com sucesso!";


                    setTimeout(() => {
                        window.location.href = '/login';
                    }, 3000);
                } else {
                    console.error('Erro ao enviar o arquivo Doc Ofc');
                }
            } catch (error) {
                console.error('Erro na requisição:', error);
            }
        },


        async sendFileCnpj(id_user, file) {
            const formData = new FormData();
            formData.append('doc_cnpj', file);
            console.log(formData)

            try {
                const res = await api.sendFileCnpj(id_user, formData);
                console.log(res)

                if (res.status === 200) {
                    this.textoBotao = "Documentos enviados com sucesso!";


                    setTimeout(() => {
                        window.location.href = '/login';
                    }, 3000);

                } else {
                    console.error('Erro ao enviar o arquivo CNPJ');
                }
            } catch (error) {
                console.error('Erro na requisição:', error);
            }
        }
    }
}
</script>
<style>
.card-select {
    cursor: pointer;
}

.text-success {
    color: green !important;
}

.text-secondary {
    color: gray !important;
}
</style>