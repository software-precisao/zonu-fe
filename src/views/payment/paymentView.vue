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
                    <img src="../../../assets/images/logo.svg" style="width: 200px; padding: 20px; display: block; margin-left: auto; margin-right: auto;" class="img-fluid" alt="">
                    <div class="card-body">
                       
                        <section v-if="selectedOption !== ''"
                            class="col-md-5 col-11 d-flex flex-column justify-content-center align-items-center form-container">
                            <h2 class="form-title">Plano <bold>PREMIUM</bold> - inclui.</h2>

                            <div class="d-flex form-header">


                                <div class="">
                                    <p class="plan_text"> <img src="../../../assets/images/check_icon.png" alt=""> Lorem
                                        Ipsum
                                        is simply
                                        dummy text</p>
                                    <p class="plan_text"> <img src="../../../assets/images/check_icon.png" alt=""> Lorem
                                        Ipsum
                                        is simply
                                        dummy text</p>
                                    <p class="plan_text"> <img src="../../../assets/images/check_icon.png" alt=""> Lorem
                                        Ipsum
                                        is simply
                                        dummy text</p>
                                    <p class="plan_text"> <img src="../../../assets/images/check_icon.png" alt=""> Lorem
                                        Ipsum
                                        is simply
                                        dummy text</p>
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
                                <div class="valores mb-3">
                                    <p class="text-desconto">Desconto</p>
                                    <p class="destaque">R$ 40,00</p>
                                </div>
                                <div class="valores">
                                    <p class="text-total">Total</p>
                                    <div class="valoresTotal">
                                        <p class="original">R$ 249,99</p>
                                        <p class="destaque-large">R$ 209,99<bold class="smallText">/MÊS</bold>
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


                            </form>

                        </section>
                    </div>
                </div>



            </div>


        </div>
       
    </div>
    <footer class="footer" style="position: absolute; bottom: 0; width: 100%;">
    <div class="container-fluid">
      <div class="row text-muted">
        <div class="col-6 text-start">
          <p class="mb-0">
            <a class="text-muted" href="#" target="_blank"
              ><strong>Zonu</strong></a
            >
            -
            <a class="text-muted" href="#" target="_blank"
              ><strong>Zonu Tecnologia</strong></a
            >
            &copy;
          </p>
        </div>
        <div class="col-6 text-end">
          <ul class="list-inline">
            <li class="list-inline-item">
              <a
                class="text-muted"
                href="https://wa.me/5583996795816?text=Ol%C3%A1%2C%20preciso%20de%20um%20suporte%20na%20plataforma%20Zonu%20%3A)"
                target="_blank"
                >Suporte</a
              >
            </li>
            <li class="list-inline-item">
              <a
                class="text-muted"
                href="https://wa.me/5583996795816?text=Ol%C3%A1%2C%20preciso%20de%20um%20suporte%20na%20plataforma%20Zonu%20%3A)"
                target="_blank"
                >Help Center</a
              >
            </li>
            <li class="list-inline-item">
              <a
                class="text-muted"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#privacidadeModal"
                >Privacidade</a
              >
            </li>
            <li class="list-inline-item">
              <a
                class="text-muted"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#termosModal"
                >Termos</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Footer from '../../components/footer/index.vue'

export default {
    data() {
        return {
            selectedOption: 'pix',
            card: '',
        };
    },
    components: {
        Footer
    },

    methods: {
        aplicarMascaraCard() {
            const cardMask = new Inputmask('9999-9999-9999-9999');
            cardMask.mask('#card');
        }
    }
};

</script>

<style scoped>
@import '../../../assets/css/payment.css';
</style>