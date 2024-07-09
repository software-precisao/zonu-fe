<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 d-flex flex-column justify-content-center align-items-center p-5">
                <div v-if="mostrarSkeleton" class=" mb-5 skeleton-logo"></div>
                <img v-if="!mostrarSkeleton" src="../../../assets/images/logo.svg" class="mb-2" alt="">

                <div v-if="emailTab" class="area-login px-4">

                    <div v-if="mostrarSkeleton" class="skeleton-title"></div>
                    <h1 v-if="!mostrarSkeleton" class="title-login mt-5">Calma, vamos resolver...</h1>

                    <div v-if="mostrarSkeleton" class="skeleton-title-subtitle"></div>
                    <p v-if="!mostrarSkeleton">Siga os passos que tudo correrá bem!</p>


                    <div class="mt-4">
                        <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                        <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                        <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Informe o E-mail
                            cadastrado
                        </label>
                        <input type="email" v-if="!mostrarSkeleton" class="form-control" v-model="emailRecovery"
                            placeholder="email@dominio.com">
                        <p v-if="msgSuccessEmail" class="text-success mt-2"><i class="fa fa-check"></i> Este e-mail está
                            em nossa base de dados.</p>
                        <p v-if="msgErrorEmail" class="text-danger mt-2"><i class="fa fa-ban"></i> Este e-mail não está
                            em nossa base de dados, tente outro.
                            tenho outro.</p>

                    </div>

                    <div v-if="mostrarSkeleton" class="skeleton-button mt-5"></div>
                    <button v-if="!mostrarSkeleton" @click="handleAvancar()" :disabled="autenticando" type="submit"
                        class="btn btn-dark bot mt-4">{{ textoBotao }}</button>

                    <a href="/">
                        <button type="button" v-if="!mostrarSkeleton" href="/"
                            class="btn btn-outline-dark bot mt-4">Voltar
                            ao login</button>
                    </a>

                </div>

                <div v-if="codeTab" class="area-login px-4">

                    <div v-if="mostrarSkeleton" class="skeleton-title"></div>
                    <h1 v-if="!mostrarSkeleton" class="title-login mt-5">Falta pouco...</h1>

                    <div v-if="mostrarSkeleton" class="skeleton-title-subtitle"></div>
                    <p v-if="!mostrarSkeleton">Insira o código que enviamos para o seu e-mail</p>



                    <div class="row mt-5">
                        <div class="col-4"></div>
                        <div class="col-1">
                            <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                            <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                            <input type="text" v-if="!mostrarSkeleton" class="form-control number-code-input"
                                v-model="number1" placeholder="0" maxlength="1">
                        </div>
                        <div class="col-1">
                            <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                            <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                            <input type="text" v-if="!mostrarSkeleton" class="form-control number-code-input"
                                v-model="number2" placeholder="0" maxlength="1">
                        </div>
                        <div class="col-1">
                            <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                            <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                            <input type="text" v-if="!mostrarSkeleton" class="form-control number-code-input"
                                v-model="number3" placeholder="0" maxlength="1">
                        </div>
                        <div class="col-1">
                            <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                            <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                            <input type="text" v-if="!mostrarSkeleton" class="form-control number-code-input"
                                v-model="number4" placeholder="0" maxlength="1">
                        </div>

                        <div class="col-12">
                            <p v-if="msgSuccessCode" class="text-success mt-4 text-center"><i class="fa fa-check"></i>
                                Código confirmado</p>
                            <p v-if="msgErrorCode" class="text-danger mt-4 text-center"><i class="fa fa-ban"></i> Código
                                não confere</p>
                        </div>


                    </div>




                    <div v-if="mostrarSkeleton" class="skeleton-button mt-5"></div>
                    <button v-if="!mostrarSkeleton" @click="handleValidaCod()" :disabled="autenticando" type="submit"
                        class="btn btn-dark bot mt-4">{{ textoBotao }}</button>

                    <a href="/">
                        <button type="button" v-if="!mostrarSkeleton" href="/"
                            class="btn btn-outline-dark bot mt-4">Voltar
                            ao login</button>
                    </a>

                </div>


                <div v-if="passwordTab" class="area-login px-4">
                    <div v-if="mostrarSkeleton" class="skeleton-title"></div>
                    <h1 v-if="!mostrarSkeleton" class="title-login mt-5">Perfeito...</h1>

                    <div v-if="mostrarSkeleton" class="skeleton-title-subtitle"></div>
                    <p v-if="!mostrarSkeleton">Digite novas senhas e anote em um lugar seguro.</p>

                    <p v-if="msgSuccessNewPass" class="text-success mt-2"><i class="fa fa-check"></i> Senha alterada com
                        sucesso! </p>

                    <div class="row">
                        <div class="col-6">
                            <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Crie uma
                                    nova senha
                                </label>
                                <div class="input-group">
                                    <input type="password" required v-if="!mostrarSkeleton" class="form-control"
                                        v-model="senha" :class="{ 'is-invalid': !senhaValida && senha.length > 0 }"
                                        @input="validarSenha" placeholder="Digite sua senha" />
                                </div>

                                <p class="text-warning mt-2" v-if="!senhaValida && senha.length > 0">
                                    <small>
                                        <i class="fa fa-bell"></i> Sua senha deve ter no mínimo 8 caracteres, número
                                        e uma letra MAIÚSCULA.
                                    </small>
                                </p>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Confirme
                                    a senha
                                </label>
                                <input type="password" required v-if="!mostrarSkeleton" class="form-control"
                                    v-model="confimSenha" placeholder="Digite a senha novamente" />

                                <p class="text-danger mt-2" v-if="confimSenha && !passwordsMatch">
                                    <i class="fa fa-ban"></i> As senhas não conferem!
                                </p>
                                <p class="text-success mt-2" v-if="confimSenha && passwordsMatch">
                                    <i class="fa fa-check"></i> As senhas conferem
                                </p>
                            </div>
                        </div>
                    </div>

              


                    <div v-if="mostrarSkeleton" class="skeleton-button mt-5"></div>
                    <button v-if="!mostrarSkeleton" :disabled="autenticando" @click="handleValidar()" type="submit"
                        class="btn btn-dark bot mt-4">{{ textoBotao }}</button>

                    <button v-if="!mostrarSkeleton" @click="handleVoltar()" type="button"
                        class="btn btn-outline-dark bot mt-4">Voltar</button>


                </div>
            </div>

            <div class="col-lg-6 p-0 d-none d-lg-block">
                <div class="bg-login">
                    <div class="gradient px-5">
                        <img src="../../../assets/images/logo-transparente2.png" class="img-fluid" alt="">
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import _ from 'lodash';
import api from '../../../service/api';
export default {
    name: 'RecoveryView',
    data() {
        return {
            mostrarSkeleton: true,
            msgErrorEmail: false,
            msgSuccessEmail: false,
            msgSuccessSenha: false,
            msgErrorSenha: false,
            msgSuccess: false,
            loading: false,
            emailRecovery: '',
            newsenha: '',
            confimSenha: '',
            emailTab: true,
            passwordTab: false,
            codeTab: false,
            email: '',
            senha: '',
            confimSenha: '',
            msgNotActivate: false,
            autenticando: false,
            textoBotao: "Avançar",
            emailValid: null,
            senhaValid: null,
            emailVazio: null,
            senhaVazio: null,
            msgSuccessNewPass: false,
            number1: '',
            number2: '',
            number3: '',
            number4: '',
            msgSuccessCode: false,
            msgErrorCode: false,
        }
    },
    computed: {
        passwordsMatch() {
            return this.senha === this.confimSenha;
        },
    },
    mounted() {
        setTimeout(() => {
            this.mostrarSkeleton = false;
        }, 2000)
    },
    methods: {

        handleValidaCod() {
            this.autenticando = true;

            let code = this.number1 + this.number2 + this.number3 + this.number4;

            api.validaCode(code).then((res) => {

                if (res.status == 200) {

                    this.autenticando = false;
                    this.textoBotao = "Aguarde...";

                    setTimeout(() => {
                        this.textoBotao = "Alterar senha...";
                        this.codeTab = false;
                        this.passwordTab = true;
                        this.msgSuccessCode = true;
                    }, 2000)
                } else {
                    this.textoBotao = "Tentar novamente.";
                    this.msgSuccessCode = false;
                    this.msgErrorCode = true;
                    this.codeTab = true;
                    this.passwordTab = false;
                }

            })
        },

        validarSenha() {
            const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{6,}$/;
            this.senhaValida = regex.test(this.senha);
        },

        handleAvancar() {
            this.autenticando = true;
            this.textoBotao = "Aguarde...";

            let email = this.emailRecovery;

            if (email !== '') {

                api.varificaEmail(email).then((res) => {

                    if (res.status == 200) {
                        this.msgSuccessEmail = true;
                        this.msgErrorEmail = false;

                        setTimeout(() => {

                            this.textoBotao = "Validar código...";
                            this.autenticando = false;
                            this.emailTab = false;
                            this.codeTab = true;
                        }, 3000)

                    } else {
                        this.emailTab = true;
                        this.codeTab = false;
                        this.msgSuccessEmail = false;
                        this.msgErrorEmail = true;
                    }

                })

            }




        },
        handleVoltar() {
            this.emailTabTab = true
            this.passwordTabTab = false
        },

        handleValidar() {
            this.autenticando = true;
            this.textoBotao = "Aguarde...";

            let email = this.emailRecovery;
            let senha = this.senha;

            api.recovery(email, senha).then((res) => {

                if (res.status == 200) {
                    this.msgSuccessNewPass = true;

                    setTimeout(() => {
                        window.location.href = '/';
                    }, 3000)
                }

            });



        },

    },

}

</script>