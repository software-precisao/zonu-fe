<template>
    <div class="modal fade" :id="`modalEdit${item.id_user}`" tabindex="-1" aria-labelledby="exampleModalLabel"
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
                            <label for="telefone"><small><strong>Telefone</strong></small></label>
                            <input type="text" v-model="telefone" class="form-control mt-2" id="telefone"
                                placeholder="Digite o telefone" />
                        </div>
                        <div class="form-group col-md-3 mt-3">
                            <label for="cep"><small><strong>CEP</strong></small></label>
                            <input type="text" v-model="cep" class="form-control mt-2" id="cep"
                                placeholder="Digite o CEP" />
                        </div>
                        <div class="form-group col-md-7 mt-3">
                            <label for="endereco"><small><strong>Endereço</strong></small></label>
                            <input type="text" v-model="endereco" class="form-control mt-2" id="endereco"
                                placeholder="Digite o endereço" />
                        </div>
                        <div class="form-group col-md-2 mt-3">
                            <label for="numero"><small><strong>Número</strong></small></label>
                            <input type="number" v-model="numero" class="form-control mt-2" id="numero"
                                placeholder="00" />
                        </div>
                        <div class="form-group col-md-3 mt-3" v-if="item.id_nivel != 7 && item.id_nivel != 4">
                            <label for="cnpj"><small><strong>CNPJ</strong></small></label>
                            <input type="text" v-model="cnpj" class="form-control mt-2" id="cnpj"
                                placeholder="Digite o CNPJ" />
                        </div>
                        <div class="form-group col-md-9 mt-3" v-if="item.id_nivel != 7 && item.id_nivel != 4">
                            <label for="razao_social"><small><strong>Razão
                                        Social</strong></small></label>
                            <input type="text" v-model="razao_social" class="form-control mt-2" id="razao_social"
                                placeholder="Digite a razão social" />
                        </div>
                        <div class="form-group col-md-4 mt-3" v-if="item.id_nivel == 7 || item.id_nivel == 4">
                            <label for="razao_social"><small><strong>CPF</strong></small></label>
                            <input type="text" v-model="cpf" class="form-control mt-2" id="razao_social"
                                placeholder="Digite a razão social" />
                        </div>
                        <div class="form-group col-md-8 mt-3" v-if="item.id_nivel == 7 || item.id_nivel == 4">
                            <label for="complemento"><small><strong>Complemento</strong></small></label>
                            <input type="text" v-model="complemento" class="form-control mt-2" id="complemento"
                                placeholder="Digite o complemento" />
                        </div>
                        <div class="form-group col-md-12 mt-3" v-if="item.id_nivel != 7 && item.id_nivel != 4">
                            <label for="complemento"><small><strong>Complemento</strong></small></label>
                            <input type="text" v-model="complemento" class="form-control mt-2" id="complemento"
                                placeholder="Digite o complemento" />
                        </div>
                        <div class="form-group col-md-6 mt-3">
                            <label for="cidade"><small><strong>Cidade</strong></small></label>
                            <input type="text" v-model="cidade" class="form-control mt-2" id="cidade"
                                placeholder="Digite a cidade" />
                        </div>
                        <div class="form-group col-md-3 mt-3">
                            <label for="estado"><small><strong>Estado</strong></small></label>
                            <input type="text" v-model="estado" class="form-control mt-2" id="estado"
                                placeholder="Digite o estado" />
                        </div>
                        <div class="form-group col-md-3 mt-3">
                            <label for="bairro"><small><strong>Bairro</strong></small></label>
                            <input type="text" v-model="bairro" class="form-control mt-2" id="bairro"
                                placeholder="Digite o bairro" />
                        </div>
                    </div>
                </div>
                {{ console.log(item) }}
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Fechar
                    </button>
                    <button type="button" @click="saveChanges" class="btn btn-warning">
                        Salvar mudanças
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
            nome: this.item.nome,
            sobrenome: this.item.sobrenome,
            email: this.item.email,
            telefone: this.item.perfil ? this.item.perfil.telefone : '',
            cep: this.item.perfil ? this.item.perfil.cep : '',
            endereco: this.item.perfil ? this.item.perfil.endereco : '',
            numero: this.item.perfil ? this.item.perfil.numero : '',
            complemento: this.item.perfil ? this.item.perfil.complemento : '',
            cidade: this.item.perfil ? this.item.perfil.cidade : '',
            estado: this.item.perfil ? this.item.perfil.estado : '',
            bairro: this.item.perfil ? this.item.perfil.bairro : '',
            cnpj: this.item.perfil ? this.item.perfil.cnpj : '',
            razao_social: this.item.perfil ? this.item.perfil.razao_social : '',
            cpf: this.item.perfil ? this.item.perfil.cpf : '',
        };
    },
    methods: {
        saveChanges() {
            console.log("Salvando mudancas")

            const updatedUser = {
                id_user: this.item.id_user,
                nome: this.nome,
                sobrenome: this.sobrenome,
                email: this.email,
                telefone: this.telefone,
                cep: this.cep,
                endereco: this.endereco,
                numero: this.numero,
                complemento: this.complemento,
                cidade: this.cidade,
                estado: this.estado,
                bairro: this.bairro,
                cnpj: this.cnpj,
                razao_social: this.razao_social,
                cpf: this.cpf,
            };

            this.$emit('save', updatedUser);
        },
    },
};
</script>