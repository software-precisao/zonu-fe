<template>
    <div class="modal fade" :id="`modalEdit${item.id_perfil_user}`" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        <i class="fa fa-users"></i> Edite os dados
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row mt-4">
                        <div class="form-group col-md-6">
                            <label for="nome"><small><strong>Nome</strong></small></label>
                            <input type="text" v-model="nome" class="form-control mt-2" id="nome"
                                placeholder="Digite o nome" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="sobrenome"><small><strong>Sobrenome</strong></small></label>
                            <input type="text" v-model="sobrenome" class="form-control mt-2" id="sobrenome"
                                placeholder="Digite o sobrenome" />
                        </div>
                        <div class="form-group col-md-6 mt-3">
                            <label for="email"><small><strong>Email</strong></small></label>
                            <input type="email" v-model="email" class="form-control mt-2" id="email"
                                placeholder="Digite o email" />
                        </div>
                        <div class="form-group col-md-6 mt-3">
                            <label for="senha"><small><strong>Senha</strong></small></label>
                            <input type="password" v-model="senha" class="form-control mt-2" id="senha"
                                placeholder="Digite uma senha" :class="{
                                    'is-invalid': !senhaValida && senha.length > 0,
                                }" @input="validarSenha" />

                            <p class="text-warning mt-2" v-if="!senhaValida && senha.length > 0">
                                <small>
                                    <i class="fa fa-bell"></i> Sua senha deve ter no mínimo 8
                                    caracteres, número e uma letra MAIÚSCULA.
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
                <!-- {{ console.log(item) }} -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Fechar
                    </button>
                    <button type="button" @click="saveChanges" class="btn btn-warning">
                        {{ textoBotao }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: Object,
    },
    data() {
        return {
            nome: this.item ? this.item.nome : '',
            sobrenome: this.item ? this.item.sobrenome : '',
            email: this.item ? this.item.email : '',
            senha: '',
            // telefone: this.item.perfil ? this.item.perfil.telefone : '',
            // cep: this.item.perfil ? this.item.perfil.cep : '',
            // endereco: this.item.perfil ? this.item.perfil.endereco : '',
            // numero: this.item.perfil ? this.item.perfil.numero : '',
            // complemento: this.item.perfil ? this.item.perfil.complemento : '',
            // cidade: this.item.perfil ? this.item.perfil.cidade : '',
            // estado: this.item.perfil ? this.item.perfil.estado : '',
            // bairro: this.item.perfil ? this.item.perfil.bairro : '',
            // cnpj: this.item.perfil ? this.item.perfil.cnpj : '',
            // razao_social: this.item.perfil ? this.item.perfil.razao_social : '',
            // cpf: this.item.perfil ? this.item.perfil.cpf : '',

            textoBotao: "Salvar mudanças",
            senhaValida: false
        };
    },
    methods: {
        validarSenha() {
            const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{6,}$/;
            this.senhaValida = regex.test(this.senha);
        },
        saveChanges() {
            console.log("Salvando mudancas")
            this.textoBotao = "Salvando..."

            let updatedUser

            if (this.senha == '' && this.senhaValida == true) {
                updatedUser = {
                    id_perfil_user: this.item.id_perfil_user,
                    nome: this.nome,
                    sobrenome: this.sobrenome,
                    email: this.email,
                    // telefone: this.telefone,
                    // cep: this.cep,
                    // endereco: this.endereco,
                    // numero: this.numero,
                    // complemento: this.complemento,
                    // cidade: this.cidade,
                    // estado: this.estado,
                    // bairro: this.bairro,
                    // cnpj: this.cnpj,
                    // razao_social: this.razao_social,
                    // cpf: this.cpf,
                };

                this.$emit('save', updatedUser);
                setTimeout(() => {
                    this.textoBotao = "Salvar mudanças"
                }, 2000);
            } else if (this.senhaValida == true) {
                updatedUser = {
                    id_perfil_user: this.item.id_perfil_user,
                    nome: this.nome,
                    sobrenome: this.sobrenome,
                    email: this.email,
                    senha: this.senha
                };
                this.$emit('save', updatedUser);
                setTimeout(() => {
                    this.textoBotao = "Salvar mudanças"
                }, 2000);
            } else {
                this.textoBotao = "Houve um erro..."
                setTimeout(() => {
                    this.textoBotao = "Salvar mudanças"
                }, 2000);
            }
        },
    },
};
</script>

<style scoped>
.modal {
    z-index: 999
}
</style>