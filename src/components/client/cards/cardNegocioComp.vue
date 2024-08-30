<template>
    <div class="container">
        <div class="card" style="background-color: #fff">
            <!-- <i class="fa fa-th text-light" style="position: absolute; padding: 10px" aria-hidden="true"></i> -->

            <div class="card-body" style="display: flex; justify-content: space-between;">
                <div>
                    <h3 class="mt-3 text-left" style="font-size: 15px; font-weight: 600;">
                        <strong>
                            {{ negocio.Cliente.nome }}</strong>
                    </h3>
                    <!-- <hr /> -->
                    <h3 style="font-size: 14px; font-weight: 400; margin-top: 1rem;">{{ imovel.descricao.titulo }}</h3>
                    <div style="display: flex; justify-content: space-between">
                        <div class=" text-left">
                            <h4 style="font-size: 14px; font-weight: 400;">
                                R$ {{ aplicaMascaraDinheiroPrecoImovel(imovel.preco.preco_imovel) }}
                            </h4>
                        </div>
                        <div class="text-right mb-2 me-3" style="display: flex; align-items: flex-end;">
                            <div style="background-color: red; padding: 2px 12px; border-radius: 50px">
                                <h3 class="p-0 m-0" style="font-size: 12px; color: #fff">{{
                                    aplicarMascaraDia(negocio.updatedAt)
                                    }}d
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- {{ console.log("Aqui esta o negocio ===>", negocio) }} -->
    </div>
</template>

<script>
import api from "../../../../service/api/index";

export default {
    name: "cardNegocioComponente",
    props: {
        negocio: {
            type: Object,
            required: true,
        },
        imovel: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            mesas: 0,
        };
    },

    created() {
        console.log("Aqui esta os pedidos ===> ", this.negocio);
        // console.log("Aqui esta o imovel ===> ", this.imovel);
    },
    methods: {
        aplicaMascaraDinheiroPrecoImovel(preco) {
            let v = preco;

            // Remove tudo o que não é dígito
            v = v.replace(/\D/g, "");

            // Divide o número para preparar a adição de vírgula e ponto
            let valorDecimal = parseInt(v) / 100;

            // Formata o número como valor monetário
            return valorDecimal.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });
            // console.log(this.currentImovel)
        },

        aplicarMascaraDia(dataString) {
            // Parseia a data fornecida
            const data = new Date(dataString);

            // Pega a data de hoje
            const hoje = new Date();

            // Calcula a diferença em milissegundos
            const diferencaMilissegundos = hoje - data;

            // Converte milissegundos para dias
            const diferencaDias = Math.floor(diferencaMilissegundos / (1000 * 60 * 60 * 24));

            return diferencaDias;

        },
    },
};
</script>