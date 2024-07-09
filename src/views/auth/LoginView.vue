<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-lg-6 d-flex flex-column justify-content-center align-items-center p-5">
				<div v-if="mostrarSkeleton" class=" mb-5 skeleton-logo"></div>
				<img v-if="!mostrarSkeleton" src="../../../assets/images/logo.svg" class="mb-2" alt="">

				<div class="area-login px-4">

					<div v-if="mostrarSkeleton" class="skeleton-title"></div>
					<h1 v-if="!mostrarSkeleton" class="title-login mt-5">Bem-vindo(a) de volta</h1>

					<div v-if="mostrarSkeleton" class="skeleton-title-subtitle"></div>
					<p v-if="!mostrarSkeleton">Preencha seus dados para acessar a sua conta</p>

					<div v-if="msgNotActivate" class="alert text-danger " role="alert">
						😞 <strong>Ooops...</strong> Você ainda não está ativo. Aguarde até que algum administrador ative
						sua conta.
					</div>

					<div v-if="msgEmailErro" class="alert text-danger" role="alert">
						😞 <strong>Ooops...</strong> Seu e-mail ou sua senha estão errados, tente outro.
					</div>


					<div class="mt-4">
						<div class="mb-3">
							<div v-if="mostrarSkeleton" class="skeleton-label"></div>
							<div v-if="mostrarSkeleton" class="skeleton-input"></div>
							<label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">E-mail </label>
							<input type="email" v-if="!mostrarSkeleton" class="form-control" v-model="email"
								:class="{ 'is-invalid': emailValid === false || emailVazio === false }"
								placeholder="Digite aqui o seu e-mail">
							<div v-if="emailVazio === false" class="invalid-feedback">
								<strong>Oops...</strong> o e-mail não pode ser em branco.
							</div>
							<div v-if="emailValid === false && emailVazio !== false" class="invalid-feedback">
								Por favor, forneça um e-mail válido.
							</div>
						</div>
						<div class="mb-3">
							<div v-if="mostrarSkeleton" class="skeleton-label"></div>
							<div v-if="mostrarSkeleton" class="skeleton-input"></div>
							<label v-if="!mostrarSkeleton" for="exampleInputPassword1" class="form-label">Senha</label>
							<input v-model="senha" :class="{ 'is-invalid': senhaValid === false || senhaVazio === false }"
								placeholder="Digite aqui o sua senha" v-if="!mostrarSkeleton" type="password"
								class="form-control" name="senha">
							<div v-if="senhaVazio === false" class="invalid-feedback">
								<strong>Eei...</strong> a senha não pode ser em branco.
							</div>

							<div v-if="senhaValid === false && senhaVazio !== false" class="invalid-feedback">
								Por favor, forneça uma senha válida.
							</div>
						</div>

						<div class="row mt-2">
							<div class="col-8">
								<div v-if="mostrarSkeleton" class="skeleton-esqueci"></div>
								<a v-if="!mostrarSkeleton" href="/recovery" style="text-decoration: none;">Esqueci a senha |
								</a>
								<a v-if="!mostrarSkeleton" href="/cadastro"
									style="color: #C66976; text-decoration: none;">Ainda não
									tenho cadastro</a>
							</div>
						</div>
						<div v-if="mostrarSkeleton" class="skeleton-button mt-4"></div>
						<button @click="handleAuth()" :disabled="autenticando" v-if="!mostrarSkeleton" type="submit"
							class="btn btn-dark bot mt-4"> {{ textoBotao }}
							<span v-if="autenticando" class="spinner-border spinner-border-sm" aria-hidden="true"></span>
							<span v-if="autenticando" class="visually-hidden">Aguarde...</span></button>

						<div v-if="mostrarSkeleton" class="skeleton-text-line mt-3"></div>
						<p v-if="!mostrarSkeleton" class="text-center mt-3">Ou use</p>

						<div class="row d-flex justify-content-center align-items-center">
							<div class="col-md-2">
								<div v-if="mostrarSkeleton" class="skeleton-button-social mt-3"></div>
								<button @click="loginWithGoogle()" v-if="!mostrarSkeleton" type="button"
									class="btn btn-google bot"><i class="fa fa-google fa-2x" aria-hidden="true"></i>
								</button>
							</div>
							<div class="col-md-2">
								<div v-if="mostrarSkeleton" class="skeleton-button-social mt-3"></div>
								<button v-if="!mostrarSkeleton" type="button" class="btn btn-instagram bot"><i
										class="fa fa-instagram fa-2x" aria-hidden="true"></i></button>
							</div>
							<div class="col-md-2">
								<div v-if="mostrarSkeleton" class="skeleton-button-social mt-3"></div>
								<button v-if="!mostrarSkeleton" type="button" class="btn btn-facebook bot"><i
										class="fa fa-facebook fa-2x" aria-hidden="true"></i></button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="col-lg-6 p-0 d-none d-lg-block">
				<div v-if="mostrarSkeleton" class="skeleton-imagem"></div>
                <img v-if="!mostrarSkeleton" src="../../../assets/images/bg-login.svg" class="bg-login" alt="">	
			</div>

		</div>
	</div>
</template>
<script>
import api from '../../../service/api/index'
import { jwtDecode } from "jwt-decode";
import { googleSdkLoaded } from "vue3-google-login"

export default {
	name: 'LoginView',
	data() {
		return {
			mostrarSkeleton: true,
			email: '',
			senha: '',
			msgNotActivate: false,
			autenticando: false,
			msgEmailErro: false,
			textoBotao: "Acessar sua conta",
			emailValid: null,
			senhaValid: null,
			emailVazio: null,
			senhaVazio: null,
			userInfo: null,
		}
	},
	mounted() {
		setTimeout(() => {
			this.mostrarSkeleton = false;
		}, 2000)
	},
	methods: {
		handleAuth() {
			this.autenticando = true;
			this.textoBotao = "Aguarde...";

			let email = this.email;
			let senha = this.senha;

			if (email == '' && senha == '') {
				this.emailVazio = false;
				this.senhaVazio = false;

				setTimeout(() => {

					this.emailVazio = true;
					this.senhaVazio = true;

				}, 4000)

				setTimeout(() => {
					this.autenticando = false;
					this.textoBotao = "Tentar novamente...";
				}, 2000)


			} else {
				api.login(email, senha).then((response) => {

			

					if (response.status == 200) {
						const token = response.data.token;
						const decode = jwtDecode(token);
						let statusAccess = decode.id_status;

						this.textoBotao = "Sucesso, redirecionando...";

						if (statusAccess == 1) {
							localStorage.setItem('token', token);
							this.autenticando = false;
							window.location.href = "/dashboard";

						} else if (statusAccess == 2) {
							this.email = '',
								this.senha = '',
								this.msgNotActivate = true;

							setTimeout(() => {
								this.msgNotActivate = false;
								this.autenticando = false;
								this.textoBotao = "Acessar sua conta";
							}, 5000);
						}
					} else if (response.status == 401) {

						this.msgEmailErro = true
						this.emailValid = false;
						this.senhaValid = false;

						setTimeout(() => {
							this.emailValid = true;
							this.senhaValid = true;
							this.msgEmailErro = false;
						}, 4000)

						setTimeout(() => {
							this.autenticando = false;
							this.textoBotao = "Acessar sua conta";
						}, 2000)

					}
				}).catch(() => {
					this.autenticando = false;
					this.textoBotao = "Acessar sua conta";
				});
			}
		},


		async loginWithGoogle() {
			googleSdkLoaded((google) => {
				google.accounts.oauth2.initCodeClient({
					client_id: '814680956804-ftruhh4hvgbh8c4e1narprmd1mvecn12.apps.googleusercontent.com',
					scope: 'email profile openid',
					callback: (response) => {
						console.log("Handle the response", response)

						let token_google = response.code
						let decode_google = jwtDecode(token_google)

						console.log('Aqui está os dado do usuário ==> ', decode_google);

					}
				}).requestCode()
			})
		}
	}

}
</script>