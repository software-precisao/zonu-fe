<template>
    <div class="mt-5 container" style="width: 100%; height: 100%;">
        <div class="d-flex  justify-content-center align-items-center">

            <div class="col-md-6 col-11 d-flex align-items-center radioDiv">
                <h1 class="col-12 text-center text-dark transform-upper">Selecione o método de pagamento</h1>
                <div class="inputRow">
                    <div class="radioGroup">

                        <input type="radio" value="credit" name="paymentMethod" id="credit" v-model="selectedOption">
                        <label for="credit">Cartão de Crédito</label>
                    </div>
                    <div>

                        <img src="../../../assets/images/visa_brand.png" class="img-fluid imgs" alt="">
                        <img src="../../../assets/images/master_brand.png" class="img-fluid imgs" alt="">
                    </div>
                </div>
                <div class="inputRow">
                    <div class="radioGroup">

                        <input type="radio" value="boleto" name="paymentMethod" id="boleto" v-model="selectedOption">
                        <label for="boleto">Boleto</label>
                    </div>
                    <img src="../../../assets/images/boleto_brand.png" class="img-fluid imgs" alt="">
                </div>

                <div class="inputRow">
                    <div class="radioGroup">

                        <input type="radio" value="pix" name="paymentMethod" id="pix" v-model="selectedOption">
                        <label for="pix">Pix</label>
                    </div>
                    <img src="../../../assets/images/pix_brand.png" class="img-fluid imgs" alt="">
                </div>


            </div>

            <div class="col-6">

                <div class="card">
                    <img src="../../../assets/images/logo.svg"
                        style="width: 200px; padding: 20px; display: block; margin-left: auto; margin-right: auto;"
                        class="img-fluid" alt="">
                    <div class="card-body">

                        <section v-if="selectedOption !== ''"
                            class="col-md-5 col-11 d-flex flex-column justify-content-center align-items-center form-container">
                            <h2 class="form-title">Plano <bold>{{ planoAtivo.nome_plano }}</bold> - inclui.</h2>

                            <div class="d-flex form-header">
                                {{ console.log(planoAtivo) }}

                                <div class="">
                                    <p class="plan_text" v-for="item in planoAtivo.itens_do_plano"> <img
                                            style="margin-right: 10px;" src="../../../assets/images/check_icon.png"
                                            alt="">{{ item }}</p>
                                </div>
                                <div class="">

                                    <img v-if="selectedOption == 'credit'"
                                        src="../../../assets/images/master_brand_large.png" alt="" class="large-brand">
                                    <img v-if="selectedOption == 'boleto'"
                                        src="../../../assets/images/boleto_brand_large.png" alt="" class="large-brand">
                                    <img v-if="selectedOption == 'pix'" src="../../../assets/images/pix_brand_large.png"
                                        alt="" class="large-brand">

                                </div>
                            </div>
                            <hr class="ruler">

                            <div class="w-90">
                                <!-- <div class="valores mb-3">
                                    <p class="text-desconto">Desconto</p>
                                    <p class="destaque">R$ 40,00</p>
                                </div> -->
                                <div class="d-flex justify-content-center">
                                    <label class="form-check-label me-2" for="customSwitch1">Mensal</label>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" id="customSwitch1" type="checkbox"
                                            v-model="isAnnual" @change="togglePlan" />
                                        <label class="form-check-label align-top" for="customSwitch1">Anual</label>
                                    </div>
                                </div>
                                <div class="valores">
                                    <p class="text-total">Total</p>
                                    <div class="valoresTotal">
                                        <!-- <p class="original">R$ 249,99</p> -->
                                        <p class="destaque-large">R$ {{ aplicaMascaraDinheiro(valorTotal) }}<bold
                                                class="smallText">
                                                {{ planPeriod }}</bold>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <hr class="ruler">

                            <form v-if="selectedOption === 'credit'">
                                <div class="row container">
                                    <div class="col-md-6">
                                        <span class="ml-3">Nome no Cartão</span>
                                        <input class="input" style="width: 100%; margin: 2%;" type="text"
                                            placeholder="João Coutinho" />
                                    </div>
                                    <div class="col-md-6    ">
                                        <span class="ml-3">Número do cartão</span>
                                        <input class="input ml-2 " style="width: 100%; margin: 2%;" type="text"
                                            id="card" v-model="card" placeholder="0000 0000 0000 0000" />
                                    </div>
                                    <div class="col-md-4">
                                        <span class="ml-2">Validade</span>
                                        <input class="input" style="width: 100%; margin: 2%;" maxlength="5"
                                            minlength="4" placeholder="00/0000" type="text" />
                                    </div>
                                    <div class="col-md-4">
                                        <span class="ml-2">CVV</span>
                                        <input class="input" style="width: 100%; margin: 2%;" maxlength="3"
                                            minlength="3" placeholder="CVV" type="text" />
                                    </div>


                                    <div class="col-md-12"
                                        style="width: 100%; margin-left: auto; margin-right: auto; display: block;">
                                        <button style="width: 100%; margin-top: 4%;" class="custom-button">Realizar
                                            Pagamento</button>

                                    </div>

                                </div>



                            </form>

                            <p class="continue" v-if="selectedOption !== '' && selectedOption !== 'credit'">Continue com
                                sua
                                compra</p>

                            <form v-if="selectedOption === 'boleto'" class=" w-90 form-complete">

                                <div class="form">

                                    <input class="input w-100" type="text" placeholder="CPF ou CNPJ" />

                                </div>

                                <ul class="list">
                                    <li class="list-content">O tempo de conclusão da transação varia de acordo com o
                                        método de
                                        pagamento
                                        escolhido.</li>
                                </ul>

                                <button class="custom-button">Gerar Boleto</button>


                            </form>

                            <form v-if="selectedOption === 'pix'" class=" w-90 form-complete">

                                <div class="form">

                                    <input class="input w-100" type="text" placeholder="CPF ou CNPJ" />

                                </div>

                                <ul class="list">
                                    <li class="list-content">Observe que, em alguns casos, pagamentos via Pix podem
                                        levar de 15
                                        a 30
                                        minutos para serem concluídos.</li>
                                </ul>

                                <button class="custom-button">Gerar id ou qr code</button>

                                <!-- Local onde o QR code será exibido -->
                                <!-- <div style="display: flex; align-items: center; justify-content: center">
                                    <canvas :style="{ display: qrcodePix ? 'block' : 'none' }"
                                        id="qrcodeCanvas"></canvas>
                                </div> -->


                            </form>

                        </section>
                    </div>
                </div>



            </div>

        </div>

    </div>

</template>

<script>
import Footer from '../../components/footer/index.vue'
import { jwtDecode } from 'jwt-decode';
import api from "../../../service/api/planos/index"
import QRCode from 'qrcode';

export default {
    data() {
        return {
            selectedOption: 'pix',
            card: '',

            token: localStorage.getItem("token"),
            nome: "",
            sobrenome: "",
            id_user: "",
            id_plano: "",
            planoAtivo: '',
            valorTotal: '',

            isAnnual: false,
            planPeriod: "",
            textoParaQRCode: "Seu texto ou ID aqui",
            qrcodePix: false,
        };
    },
    components: {
        Footer
    },

    mounted() {
        let token = this.token;
        let decode = jwtDecode(token);
        let id_user = decode.id_user;
        this.nome = decode.nome;
        this.sobrenome = decode.sobrenome;
        this.id_user = id_user;
        this.id_plano = decode.id_plano
        // console.log(decode)

        this.fetchMyPlano()
    },

    methods: {
        gerarQRCode() {
            const canvas = document.getElementById('qrcodeCanvas');
            this.qrcodePix = true
            // Gera o QR code no canvas com o texto fornecido
            QRCode.toCanvas(canvas, this.textoParaQRCode, (error) => {
                if (error) {
                    console.error(error);
                } else {
                    console.log('QR code gerado com sucesso!');
                }
            });
        },
        aplicarMascaraCard() {
            const cardMask = new Inputmask('9999-9999-9999-9999');
            cardMask.mask('#card');
        },

        fetchMyPlano() {
            api.getPlanos().then((res) => {
                if (res.status === 200) {
                    res.data.map((plano) => {
                        // console.log(plano.id_plano, this.id_plano)
                        if (plano.id_plano == this.id_plano) {
                            this.planoAtivo = plano
                            this.valorTotal = plano.valor_plano
                        }
                    })
                }
            })
        },

        togglePlan() {
            this.planPeriod = this.isAnnual ? "/ANUAL" : "/MÊS";
            this.updatePrices();
        },
        updatePrices() {
            let valorNumerico = parseFloat(this.planoAtivo.valor_plano.replace(",", "."));

            if (this.isAnnual) {
                // Multiplica o valor numérico por 12 para o plano anual
                this.valorTotal = (valorNumerico * 12).toFixed(2).replace(".", ",");
            } else {
                // Mantém o valor original formatado corretamente
                this.valorTotal = valorNumerico.toFixed(2).replace(".", ",");
            }
        },

        aplicaMascaraDinheiro(preco) {
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
    }
};

</script>

<style scoped>
@import '../../../assets/css/payment.css';
</style>