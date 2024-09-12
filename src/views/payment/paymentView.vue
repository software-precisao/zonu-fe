<template>
    <div class="mt-5 container" style="width: 100%; height: 100%; position: relative;">
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
                                                /{{ planPeriod }}</bold>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <hr class="ruler">

                            <form v-if="selectedOption === 'credit'">
                                <div class="alert alert-danger" v-if="msgErrorCartaoCredito">Preencha as informações do
                                    cartão corretamente!</div>
                                <div class="row container">
                                    <div class="col-md-6">
                                        <span class="ml-3">Nome no Cartão</span>
                                        <input class="input" style="width: 100%; margin: 2%;" type="text"
                                            placeholder="João Coutinho" v-model="nomeCartaoCredito" />
                                    </div>
                                    <div class="col-md-6    ">
                                        <span class="ml-3">Número do cartão</span>
                                        <input class="input ml-2 " style="width: 100%; margin: 2%;" type="text"
                                            id="card" v-model="numeroCartaoCredito" maxlength="19"
                                            @input="aplicaMascaraNumeroCartao" placeholder="0000 0000 0000 0000" />
                                    </div>
                                    <div class="col-md-4">
                                        <span class="ml-2">Validade</span>
                                        <input class="input" style="width: 100%; margin: 2%;" maxlength="7"
                                            minlength="4" placeholder="00/0000" type="text"
                                            @input="aplicaMascaraValidade" v-model="validadeCartaoCredito" />
                                    </div>
                                    <div class="col-md-4">
                                        <span class="ml-2">CVV</span>
                                        <input class="input" style="width: 100%; margin: 2%;" maxlength="3"
                                            minlength="3" placeholder="CVV" type="text" v-model="CVVCartaoCredito" />
                                    </div>


                                    <div class="col-md-12"
                                        style="width: 100%; margin-left: auto; margin-right: auto; display: block;">
                                        <button style="width: 100%; margin-top: 4%;" class="custom-button"
                                            @click="handlePayment" :disabled="creditCardOn == false">{{
                                                textoCartaoCredito }}</button>

                                    </div>

                                </div>



                            </form>

                            <p class="continue" v-if="selectedOption !== '' && selectedOption !== 'credit'">Continue com
                                sua
                                compra</p>

                            <form v-if="selectedOption === 'boleto'" class=" w-90 form-complete">

                                <!-- <div class="form">

                                    <input class="input w-100" type="text" v-model="boletoCPFOrCNPJ"
                                        @input="aplicaMascaraBoleto" placeholder="CPF ou CNPJ" maxlength="18" />

                                </div> -->

                                <ul class="list">
                                    <li class="list-content">O tempo de conclusão da transação varia de acordo com o
                                        método de
                                        pagamento
                                        escolhido.</li>
                                </ul>

                                <button class="custom-button" @click="handlePayment" v-if="buttonBoletoOn">Gerar
                                    Boleto</button>


                            </form>

                            <form v-if="selectedOption === 'pix'" class=" w-90 form-complete">

                                <!-- <div class="form">

                                    <input class="input w-100" type="text" v-model="pixCPFOrCNPJ"
                                        @input="aplicaMascaraPix" placeholder="CPF ou CNPJ" maxlength="18" />

                                </div> -->

                                <ul class="list">
                                    <li class="list-content">Observe que, em alguns casos, pagamentos via Pix podem
                                        levar de 15
                                        a 30
                                        minutos para serem concluídos.</li>
                                </ul>

                                <div class="alert alert-success" v-if="paymentRecebido">Pagamento recebido, você será
                                    redirecionado em breve!</div>

                                <img v-if="pixQrcodeOn" v-bind:src="'data:image/jpeg;base64,' + qrcodePix"
                                    alt="QR code Pix"
                                    style="width: 200px; height: 200px; display: block; margin-left: auto; margin-right: auto;" />

                                <span class="text-center" v-if="pixQrcodeOn">{{ pixCopiaCola }}</span>

                                <button class="custom-button" @click="handlePayment" v-if="!pixQrcodeOn"
                                    :disabled="buttonPix == false">Gerar id ou qr
                                    code</button>

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

            <!-- <div v-if="paymentRecebido"
                style="position: absolute; background-color: #fff; height: 100%; width: 100%; border-radius: 20px; display: flex; flex-direction: column;align-items: center; justify-content: center">
                <h2 style="margin-bottom: 20px; font-weight: 700;">Pagamento Realizado com sucesso!</h2>
                <h4 style="font-weight: 500;">Você será redirecionado para o dashboard em alguns segundos...</h4>
            </div> -->
        </div>

    </div>

</template>

<script>
import Footer from '../../components/footer/index.vue'
import { jwtDecode } from 'jwt-decode';
import api from "../../../service/api/planos/index"
import apiTeste from "../../../service/api/teste/index"
import apiPayment from "../../../service/api/payment/index"
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
            email: "",
            cpforCnpj: "",
            cep: "",
            numero: "",
            telefone: "",
            id_plano: "",
            planoAtivo: '',
            valorTotal: '',

            isAnnual: false,
            planPeriod: "MÊS",
            textoParaQRCode: "Seu texto ou ID aqui",
            qrcodePix: false,

            // Pix
            pixCPFOrCNPJ: '',

            // Boleto
            boletoCPFOrCNPJ: '',

            // Credito
            nomeCartaoCredito: '',
            numeroCartaoCredito: '',
            validadeCartaoCredito: '',
            CVVCartaoCredito: '',
            customerId: '',

            textoCartaoCredito: "REALIZAR PAGAMENTO",
            msgErrorCartaoCredito: false,

            pixQrcodeOn: false,
            creditCardOn: true,
            qrcodePix: null,
            pixCopiaCola: null,
            idCobrança: "pay_zcpa10yih0tk7mc9",
            intervalId: null,
            paymentRecebido: false,

            boletoImg: "",
            boletoOn: false,
            buttonBoletoOn: true,

            buttonPix: true
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
        this.email = decode.email
        this.cpforCnpj = decode.perfil.cpf == null ? decode.perfil.cnpj : decode.perfil.cpf
        this.cep = decode.perfil.cep
        this.numero = decode.perfil.numero
        this.telefone = decode.perfil.telefone
        console.log(decode)

        this.fetchMyPlano()
        this.fetchControle()
    },

    beforeDestroy() {
        // Limpa o intervalo quando o componente for destruído
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
        }
    },

    methods: {
        fetchControle() {
            apiTeste.myPeriodoTeste(this.id_user).then((res) => {
                this.customerId = res.data.customerId
                this.idControleTeste = res.data.id_controle
            })
        },

        formatarDataHoje() {
            const hoje = new Date();

            // Obtém o ano, mês e dia
            const ano = hoje.getFullYear();
            const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // getMonth retorna de 0 a 11, então adicionamos 1
            const dia = String(hoje.getDate()).padStart(2, '0');

            // Formata a data como "AAAA-MM-DD"
            const dataFormatada = `${ano}-${mes}-${dia}`;

            return dataFormatada;
        },

        removerMascaraEConverterParaNumero(valor) {
            // Remove o símbolo de moeda (R$, $ etc.) e caracteres de formatação como ponto e vírgula
            let valorNumerico = valor.replace(/[^\d,-]/g, '');

            // Substitui a vírgula decimal por um ponto decimal
            valorNumerico = valorNumerico.replace(',', '.');

            // Converte a string para um número flutuante
            return parseFloat(valorNumerico);
        },

        // Formata o número com uma casa decimal
        formatarNumeroComUmaCasaDecimal(numero) {
            return numero.toFixed(2);
        },

        adicionarUmMes(dueDate) {
            // Cria um objeto Date a partir da data fornecida
            if (this.planPeriod == "MÊS") {
                let data = new Date(dueDate);

                // Adiciona 1 mês à data
                data.setMonth(data.getMonth() + 1);

                // Corrige a data se o novo mês tiver menos dias que o mês original
                // Se a data original é maior do que o número de dias no novo mês, ajuste para o último dia do novo mês
                let dataOriginal = new Date(dueDate);
                if (data.getDate() < dataOriginal.getDate()) {
                    data.setDate(0); // Define o último dia do mês anterior
                }

                // Retorna a nova data no formato YYYY-MM-DD
                const anoFinal = data.getFullYear();
                const mesFinal = String(data.getMonth() + 1).padStart(2, '0'); // Mês é baseado em zero, então adiciona 1
                const diaFinal = String(data.getDate()).padStart(2, '0');

                return `${anoFinal}-${mesFinal}-${diaFinal}`;
            } else {
                let data = new Date(dueDate);

                // Adiciona 1 mês à data
                data.setFullYear(data.getFullYear() + 1);

                // Corrige a data se o novo mês tiver menos dias que o mês original
                // Se a data original é maior do que o número de dias no novo mês, ajuste para o último dia do novo mês
                let dataOriginal = new Date(dueDate);
                if (data.getDate() < dataOriginal.getDate()) {
                    data.setDate(0); // Define o último dia do mês anterior
                }

                // Retorna a nova data no formato YYYY-MM-DD
                const anoFinal = data.getFullYear();
                const mesFinal = String(data.getMonth() + 1).padStart(2, '0'); // Mês é baseado em zero, então adiciona 1
                const diaFinal = String(data.getDate()).padStart(2, '0');

                return `${anoFinal}-${mesFinal}-${diaFinal}`;
            }
        },

        salvarIdCobranca(id) {
            let id_user = this.id_user

            apiPayment.salvarIdCobranca(id_user, id).then((res) => {
                if (res.status === 201) {
                    setTimeout(() => {
                        window.location.href = "/login"
                    }, 3000);
                }
            })
        },

        atualizarPeriodoTeste() {
            let id = this.idControleTeste

            apiTeste.atualizarStatusPeriodoTeste(id).then((res) => { })
        },

        consultarCobrança() {
            let id = this.idCobrança

            apiPayment.consultarPagamento(id).then((res) => {
                console.log(res)
                if (res.status === 200) {
                    if (res.data.status == "RECEIVED") {
                        this.paymentRecebido = true
                        this.pixQrcodeOn = false

                        this.atualizarPeriodoTeste()
                        this.salvarIdCobranca(id)

                    }
                    if (res.data.status == "CONFIRMED") {
                        this.paymentRecebido = true
                        this.creditCardOn = false
                        this.textoCartaoCredito = "Você será redirecionado em breve..."

                        this.atualizarPeriodoTeste()
                        this.salvarIdCobranca(id)

                    }
                }
            })
        },

        handlePayment() {
            event.preventDefault()

            if (this.selectedOption == 'pix') {
                console.log("Pix ===>", this.pixCPFOrCNPJ)
                console.log("Periodo do plano ===>", this.planPeriod)
                console.log("Valor do plano ===>", this.valorTotal)

                let valor = this.removerMascaraEConverterParaNumero(this.valorTotal)

                let customerId = this.customerId
                let billingType = 'PIX'
                let value = this.formatarNumeroComUmaCasaDecimal(valor)
                let dueDate = this.formatarDataHoje()
                let nextDueDate = this.adicionarUmMes(dueDate)
                let cycle = this.planPeriod == "MÊS" ? "MONTHLY" : "YEARLY"
                let description = 'Pagamento recorrente via PIX'

                console.log("Dados do pagamento via pix ====>",
                    {
                        customerId: customerId,
                        billingType: billingType,
                        value: value,
                        dueDate: dueDate,
                        nextDueDate: nextDueDate,
                        cycle: cycle,
                        description: description,
                    }
                )

                apiPayment.gerarQrcodePix(customerId, billingType, value, dueDate, nextDueDate, cycle, description).then((res) => {
                    if (res.status === 200) {
                        console.log(res.data)
                        this.qrcodePix = res.data.pixQrCode
                        this.pixCopiaCola = res.data.pixCopyPaste
                        this.pixQrcodeOn = true
                        this.idCobrança = res.data.id

                        //desabilita o button
                        this.buttonPix = false

                        // Configura o intervalo para chamar consultarCobrança a cada 1 segundo
                        this.intervalId = setInterval(this.consultarCobrança(res.data.id), 1000);

                    }
                })
            } else if (this.selectedOption == 'credit') {
                console.log("Crédito ===>", this.nomeCartaoCredito, this.numeroCartaoCredito, this.validadeCartaoCredito, this.CVVCartaoCredito)
                console.log("Periodo do plano ===>", this.planPeriod)
                console.log("Valor do plano ===>", this.valorTotal)

                this.textoCartaoCredito = "Realizando pagamento..."

                let valor = this.removerMascaraEConverterParaNumero(this.valorTotal)

                let customerId = this.customerId
                let billingType = 'CREDIT_CARD'
                let value = this.formatarNumeroComUmaCasaDecimal(valor)
                let dueDate = this.formatarDataHoje()
                let nextDueDate = this.adicionarUmMes(dueDate)
                let cycle = this.planPeriod == "MÊS" ? "MONTHLY" : "YEARLY"
                let description = 'Pagamento recorrente via Crédito'
                let holderName = this.nomeCartaoCredito
                let number = this.numeroCartaoCredito.replace(/\s+/g, '')
                let ccv = this.CVVCartaoCredito
                let email = this.email
                let cpfCnpj = this.cpforCnpj
                let postalCode = this.cep
                let addressNumber = this.numero
                let telefone = this.telefone
                telefone = telefone.substring(0, 2) + ' ' + telefone.substring(2);
                let [expiryMonth, expiryYear] = this.validadeCartaoCredito.split('/');
                let creditCard = {
                    holderName: holderName,
                    number: number,
                    expiryMonth: expiryMonth,
                    expiryYear: expiryYear,
                    ccv: ccv
                }
                let creditCardHolderInfo = {
                    name: holderName,
                    email: email,
                    cpfCnpj: cpfCnpj,
                    postalCode: postalCode,
                    addressNumber: addressNumber,
                    phone: telefone,
                    mobilePhone: telefone
                }

                console.log("Dados do pagamento via Cartão de crédito ====>",
                    {
                        customerId: customerId,
                        billingType: billingType,
                        value: value,
                        dueDate: dueDate,
                        nextDueDate: nextDueDate,
                        cycle: cycle,
                        description: description,
                        creditCard,
                        creditCardHolderInfo
                    }
                )

                apiPayment.pagarCartao(
                    customerId,
                    billingType,
                    value,
                    dueDate,
                    nextDueDate,
                    cycle,
                    description,
                    creditCard,
                    creditCardHolderInfo
                ).then((res) => {
                    console.log(res)

                    if (res.status === 200) {
                        this.idCobrança = res.data.id

                        // Configura o intervalo para chamar consultarCobrança a cada 1 segundo
                        this.intervalId = setInterval(this.consultarCobrança(res.data.id), 1000);
                    } else {
                        this.msgErrorCartaoCredito = true
                        this.textoCartaoCredito = "Realizar pagamento"

                        setTimeout(() => {
                            this.msgErrorCartaoCredito = false
                        }, 3000);
                    }
                })


            } else if (this.selectedOption = 'boleto') {
                console.log("Boleto ===>", this.boletoCPFOrCNPJ)
                console.log("Periodo do plano ===>", this.planPeriod)
                console.log("Valor do plano ===>", this.valorTotal)

                let valor = this.removerMascaraEConverterParaNumero(this.valorTotal)

                let customerId = this.customerId
                let billingType = 'BOLETO'
                let value = this.formatarNumeroComUmaCasaDecimal(valor)
                let dueDate = this.formatarDataHoje()
                let nextDueDate = this.adicionarUmMes(dueDate)
                let cycle = this.planPeriod == "MÊS" ? "MONTHLY" : "YEARLY"
                let description = 'Pagamento recorrente via Boleto'

                console.log("Dados do pagamento via boleto ====>",
                    {
                        customerId: customerId,
                        billingType: billingType,
                        value: value,
                        dueDate: dueDate,
                        nextDueDate: nextDueDate,
                        cycle: cycle,
                        description: description,
                    }
                )

                apiPayment.gerarQrcodePix(customerId, billingType, value, dueDate, nextDueDate, cycle, description).then((res) => {
                    if (res.status === 200) {
                        console.log(res.data)
                        this.boletoImg = res.data.bankSlipUrl
                        this.idCobrança = res.data.id

                        // falta salvar no banco o this.idCobrança acima

                        window.open(this.boletoImg, '_blank');

                        this.buttonBoletoOn = false
                        this.salvarIdCobranca(res.data.id)

                    }
                })
            }
        },

        aplicaMascaraPix() {
            // Remove todos os caracteres que não sejam dígitos
            let valor = this.pixCPFOrCNPJ.replace(/\D/g, '');

            // Verifica o comprimento do valor para decidir a máscara
            if (valor.length <= 11) {
                // Máscara de CPF: ###.###.###-##
                valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
                valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
                valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            } else {
                // Máscara de CNPJ: ##.###.###/####-##
                valor = valor.replace(/^(\d{2})(\d)/, '$1.$2');
                valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
                valor = valor.replace(/\.(\d{3})(\d)/, '.$1/$2');
                valor = valor.replace(/(\d{4})(\d)/, '$1-$2');
            }

            // Atualiza o valor formatado no input
            this.pixCPFOrCNPJ = valor;
        },

        aplicaMascaraBoleto() {
            // Remove todos os caracteres que não sejam dígitos
            let valor = this.boletoCPFOrCNPJ.replace(/\D/g, '');

            // Verifica o comprimento do valor para decidir a máscara
            if (valor.length <= 11) {
                // Máscara de CPF: ###.###.###-##
                valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
                valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
                valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            } else {
                // Máscara de CNPJ: ##.###.###/####-##
                valor = valor.replace(/^(\d{2})(\d)/, '$1.$2');
                valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
                valor = valor.replace(/\.(\d{3})(\d)/, '.$1/$2');
                valor = valor.replace(/(\d{4})(\d)/, '$1-$2');
            }

            // Atualiza o valor formatado no input
            this.boletoCPFOrCNPJ = valor;
        },

        aplicaMascaraNumeroCartao() {
            // Remove todos os caracteres que não sejam dígitos
            let valor = this.numeroCartaoCredito.replace(/\D/g, '');

            // Limita o comprimento máximo a 16 dígitos
            if (valor.length > 16) {
                valor = valor.slice(0, 16);
            }

            // Aplica a máscara de cartão de crédito: #### #### #### ####
            valor = valor.replace(/(\d{4})(?=\d)/g, '$1 ');

            // Atualiza o valor formatado no input
            this.numeroCartaoCredito = valor;
        },

        aplicaMascaraValidade() {
            // Remove todos os caracteres que não sejam dígitos
            let valor = this.validadeCartaoCredito.replace(/\D/g, '');

            // Limita o comprimento máximo a 4 dígitos
            if (valor.length > 6) {
                valor = valor.slice(0, 4);
            }

            // Aplica a máscara de validade: MM/AA
            if (valor.length >= 5) {
                valor = valor.replace(/(\d{2})(\d{1,2})/, '$1/$2');
            }

            // Atualiza o valor formatado no input
            this.validadeCartaoCredito = valor;
        },

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
                        if (plano.id_plano == this.id_plano) {
                            this.planoAtivo = plano
                            this.valorTotal = plano.valor_plano
                        }
                    })
                }
            })
        },

        togglePlan() {
            this.planPeriod = this.isAnnual ? "ANUAL" : "MÊS";
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