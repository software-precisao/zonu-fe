<template>
  <section class="py-0 mt-0" id="home" style="width: 100%;
        background-color: #fff;
        padding-top: 200px;
        padding-bottom: 200px; 
        background-image: url('https://api.zonu.com.br/imagens/imgFundo.webp');
        background-position: bottom;
        background-size: cover;">
    <div style="width: 100%; display: flex; align-items: center; justify-content: center;" class="pt-6">
      <nav class="py-2"
        style="background-color: #fff !important; width: 30% ; display: flex; justify-content: space-around; align-items: center; border-radius: 10px;"
        data-navbar-on-scroll="data-navbar-on-scroll">
        <a class="navbar-brand d-flex align-items-center fw-bold fs-2" href="index.html">
          <img src="../../../assets/images/logo-transparente.png" class="img-fluid" width="150" alt="" />
        </a>
        <span class="badge bg-light rounded-pill"><i class="mdi mdi-information-variant"
            style="font-size: 24px; color: #000;"></i></span>
        <span class="badge bg-light rounded-pill"><i class="mdi mdi-currency-usd"
            style="font-size: 24px; color: #000;"></i></span>
        <button class="btn btn-primary rounded-pill order-0 px-4 py-2"
          style="font-size: 20px; font-weight: 900; letter-spacing: 1px;" type="submit" @click="handleLogin">
          Login
        </button>
      </nav>
    </div>

    <div class="" style="display: flex; align-items: center; justify-content: center;">
      <div class="row align-items-center py-6" style="width: 70%;">
        <img src="../../../assets/images/imgFunil.webp" alt="">
      </div>
    </div>

    <div class="py-4" style="display: flex; flex-direction:column; align-items: center;">
      <div class="row">
        <div class="align-items-center text-center mb-4">
          <button class="badge bg-outline-primary me-4 rounded-pill text-primary border-primary border-2 py-2"
            style="font-size: 20px; font-weight: 600; background-color: transparent;">
            <a href="#planos" style="text-decoration: none;">
              planos e preços
            </a>
          </button>
          <button class="badge bg-primary rounded-pill text-primary py-2 border-primary border-2 text-light"
            style="font-size: 20px; font-weight: 600;">
            <a href="/select" style="text-decoration: none; color: #fff;">
              teste grátis
            </a>
          </button>
        </div>
      </div>
      <p style="width: 60%;">A plataforma Zonu é uma solução completa para o mercado imobiliário, com ferramentas para
        construtoras,
        proprietários e corretores. Ela otimiza processos, aumenta a visibilidade e facilita </p>
    </div>
  </section>
  <section class="" style="
        background-color: #fff;
        padding-top: 200px;
        padding-bottom: 200px;
        background-image: url('https://api.zonu.com.br/imagens/imgFundo2.webp');
        background-position: bottom;
        background-size: cover;">
    <div style="display: flex; flex-direction: column; align-items: center;">
      <div class="" style="text-align: left; width: 70%; color: #fff;">
        <h1 style=" color: #fff;" class="titleResponse">
          FUNCIONALIDADES PARA <br>
          <strong style=" color: #fff;" class="subTitleResponse">
            CONSTRUTORAS
          </strong>
        </h1>

        <div class="mt-5" style="display: flex; justify-content: space-between;">
          <div style="width: 45%">
            <h2 style="color: #fff; font-weight: 700;" class="title2Response">Cadastro Gratuito de
              Imóveis</h2>
            <p style="font-size: 14px; color: #fff;" class="mt-1 ">Construtoras podem cadastrar seus imóveis para venda
              e aluguel sem nenhum custo, com acesso exclusivo aos corretores credenciados ao CRECI.</p>
          </div>
          <div style="width: 45%; border-left: 2px solid #fff; padding-left: 20px;">
            <h2 style="color: #fff; font-weight: 700;" class="title2Response">Gráfico de Análise de
              Mercado</h2>
            <p style="font-size: 14px; color: #fff;" class="mt-1">Visualize a média do valor do metro quadrado dos
              imóveis cadastrados, com filtros personalizáveis para diferentes tipos de imóveis.</p>
          </div>
        </div>
        <div class="mt-5" style="display: flex; justify-content: space-between;">
          <div style="width: 45%">
            <h2 style="color: #fff; font-weight: 700;" class="title2Response">Tendências de Mercado
            </h2>
            <p style="font-size: 14px; color: #fff;" class="mt-1">Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Vitae
              voluptatem cum
              perspiciatis numquam aut
              quis libero praesentium natus debitis perferendis, dignissimos molestiae, tenetur magni. Odio vero sint
              impedit vitae repellat?</p>
          </div>
          <div style="width: 45%; border-left: 2px solid #fff; padding-left: 20px;">
            <h2 style="color: #fff; font-weight: 700;" class="title2Response">Relatórios de Interesse
              dos Corretores</h2>
            <p style="font-size: 14px; color: #fff;" class="mt-1">Relatório dos tipos de imóveis, bairros e valores mais
              buscados pelos corretores na plataforma.</p>
          </div>
        </div>
        <div class="mt-5" style="display: flex; justify-content: space-between;">
          <div style="width: 45%">
            <h2 style="color: #fff; font-weight: 700;" class="title2Response">Relatório de Atividade
              dos Corretores</h2>
            <p style="font-size: 14px; color: #fff;" class="mt-1">Relatório dos tipos de imóveis, bairros e valores mais
              buscados pelos corretores na plataforma.</p>
          </div>
          <div style="width: 45%; border-left: 2px solid #fff; padding-left: 20px;">
            <h2 style="color: #fff; font-weight: 700;" class="title2Response">Relatórios de Performance
              dos Imóveis</h2>
            <p style="font-size: 14px; color: #fff;" class="mt-1">Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Vitae
              voluptatem cum
              perspiciatis numquam aut
              quis libero praesentium natus debitis perferendis, dignissimos molestiae, tenetur magni. Odio vero sint
              impedit vitae repellat?</p>
          </div>
        </div>
        <div class="mt-5" style="display: flex; justify-content: space-between;">
          <div style="width: 45%;">
            <h2 style="color: #fff; font-weight: 700;" class="title2Response">Envio de Mensagens em
              Massa</h2>
            <p style="font-size: 14px; color: #fff;" class="mt-1">Ferramenta que permite enviar comunicações diretamente
              para todos os corretores cadastrados na plataforma.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-6" style="background-color: #fff;">
    <div style="display: flex; flex-direction: column; align-items: center;">
      <div class="" style="text-align: left; width: 70%; color: #000;">
        <h1 style="" class="titleResponse">
          FUNCIONALIDADES PARA <br>
          <strong style="color: #DB7093;" class="subTitleResponse">
            CORRETORES DE IMÓVEIS
          </strong>
        </h1>

        <div class="mt-5" style="display: flex; justify-content: space-between;">
          <div style="width: 45%">
            <h2 style="font-weight: 700; color: #DB7093;" class="title2Response">Acesso Exclusivo a Imóveis</h2>
            <p style="font-size: 14px;" class="mt-1">Somente corretores credenciados ao CRECI podem acessar os imóveis
              cadastrados por construtoras e proprietários particulares, com um catálogo extenso e filtros avançados.
            </p>
          </div>
          <div style="width: 45%; border-left: 2px solid #000; padding-left: 20px;">
            <h2 style="font-weight: 700; color: #DB7093;" class="title2Response">CRM Integrado</h2>
            <p style="font-size: 14px;" class="mt-1">Gerencie seus clientes e leads de forma eficiente, com uma
              ferramenta integrada para acompanhar negociações e campanhas de anúncios patrocinados.</p>
          </div>
        </div>
        <div class="mt-5" style="display: flex; justify-content: space-between;">
          <div style="width: 45%">
            <h2 style="font-weight: 700; color: #DB7093;" class="title2Response">Contratos Revisados
            </h2>
            <p style="font-size: 14px;" class="mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              voluptatem cum
              perspiciatis numquam aut
              quis libero praesentium natus debitis perferendis, dignissimos molestiae, tenetur magni. Odio vero sint
              impedit vitae repellat?</p>
          </div>
          <div style="width: 45%; border-left: 2px solid #000; padding-left: 20px;">
            <h2 style="font-weight: 700; color: #DB7093;" class="title2Response">Sites Personalizados
            </h2>
            <p style="font-size: 14px;" class="mt-1">Ao compartilhar imóveis ou filtros de imóveis, a plataforma gera
              automaticamente um site personalizado com a logomarca do corretor, sem a necessidade de criação manual.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================-->
  <!-- <section> begin ============================-->
  <section class="" style="
    background-color: #fff;
    padding-top: 200px;
    padding-bottom: 200px;
    background-image: url('https://api.zonu.com.br/imagens/imgFundo3.webp');
    background-position: bottom;
    background-size: cover;">
    <div style="display: flex; flex-direction: column; align-items: center;">
      <div class="" style="text-align: left; width: 70%; color: #fff;">
        <h1 style="line-height: 62px; color: #fff;" class="titleResponse">
          FUNCIONALIDADES PARA <br>
          <strong style="" class="subTitleResponse">
            PROPRIETÁRIOS PARTICULARES
          </strong>
        </h1>

        <div class="mt-5" style="display: flex; justify-content: space-between;">
          <div style="width: 45%">
            <h2 style="font-weight: 700; color: #fff;" class="title2Response">Cadastro Gratuito de Imóveis</h2>
            <p style="font-size: 14px;" class="mt-1">Proprietários podem cadastrar seus imóveis para venda ou aluguel
              sem custos, garantindo que apenas corretores credenciados ao CRECI tenham acesso às informações.</p>
          </div>
          <div style="width: 45%; border-left: 2px solid #fff; padding-left: 20px;">
            <h2 style="font-weight: 700; color: #fff;" class="title2Response">Segurança e Exclusividade</h2>
            <p style="font-size: 14px;" class="mt-1">Somente corretores com CRECI ativo podem acessar as informações dos
              imóveis cadastrados, garantindo maior segurança nas negociações.</p>
          </div>
        </div>
        <div class="mt-5" style="display: flex; justify-content: space-between;">
          <div style="width: 45%">
            <h2 style="font-weight: 700; color: #fff;" class="title2Response">Ferramentas de Análise de Metro Quadrado
            </h2>
            <p style="font-size: 14px;" class="mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              voluptatem cum
              perspiciatis numquam aut
              quis libero praesentium natus debitis perferendis, dignissimos molestiae, tenetur magni. Odio vero sint
              impedit vitae repellat?</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <section> close ============================-->
  <!-- ============================================-->

  <!-- ============================================-->
  <!-- <section> begin ============================-->
  <section class="py-6" style="background-color: #fff;" id="planos">
    <div style="display: flex; flex-direction: column; align-items: center; width: 100%; justify-content: center;">
      <div class=""
        style="text-align: center; width: 100%; color: #6A5ACD; align-items: center; display: flex; flex-direction: column;">
        <h1 style="font-size: 40px; width: 50%; color: #6A5ACD" class="mb-4">
          <strong>
            APROVEITE RECURSOS INCRÍVEIS INCLUIDOS NO SEU PLANO
          </strong>
        </h1>

        <div class="cmb-3">
          <div class="d-flex justify-content-center">
            <label class="form-check-label" for="customSwitch1">Mensal</label>
            <div class="form-switch" style="">
              <input class="form-check-input" id="customSwitch1" type="checkbox" v-model="isAnnual"
                @change="togglePlan" />
            </div>
            <label class="form-check-label align-top" for="customSwitch1">Anual</label>
          </div>
        </div>

        <div class="mt-5 mb-4" style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; width: 100%;">
          <div v-for="(plano, index) in allPlanos" :key="plano.id_plano">
            <div class="card"
              style="width: 250px; height: 300px; border-radius: 15px !important; padding: 0; display: flex; flex-direction: column; justify-content: space-between;">
              <div
                style="width: 100%; height: 80px; display: flex; justify-content: center; align-items: center; flex-direction: column;">
                <h1 style="font-size: 20px; font-weight: 600; color: #6A5ACD;">{{ plano.nome_plano }}</h1>
                <h4 style="font-size: 12px; font-weight: 300; color: #6A5ACD;">{{ plano.descricao }}</h4>
              </div>
              <div style="width: 100%; height: 170px; text-align: left;">
                <ul style="margin-bottom: 6px;">
                  <li v-for="item in plano.itens_do_plano" style="margin-bottom: 5px; color: #6A5ACD;">
                    {{ item }}
                  </li>
                </ul>

                <div
                  style="display: flex; justify-content: space-between; margin-bottom: 10px; padding-left: 15px; padding-right: 15px; color: #6A5ACD; align-items: center;">
                  <span>R$<span style="font-size: 20px;">{{
                    formatCurrency(plano.valor_plano)
                  }}</span></span>
                  <span style="font-size: 12px;">{{ planPeriod }}</span>
                </div>
              </div>
              <div @click="handleCadastrar(plano.id_plano)"
                style="cursor: pointer; background-color: #6A5ACD; width: 100%; height: 60px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; display: flex; align-items: center; justify-content: center;">
                <span style="color: #fff; font-size: 18px; font-weight: 300; line-height: 20px;">CADASTRE-SE
                  <br>AGORA</span>
              </div>
            </div>
          </div>
        </div>



        <div class="mt-5" style="width: 50%; display: flex; align-items: center; justify-content: center;">
          <p style="font-size: 16px; color: #000;" class="mt-1 mb-4">Recursos incríveis e inovadores, todos inclusos no
            seu plano, conectando construtores, corretores e imobiliárias com seus clientes</p>
        </div>

        <div class="container mt-5">
          <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6 text-center mb-3">
              <h6 class="fw-bold fs-2 display-3 lh-sm mb-3">
                PERGUNTAS FREQUENTES
              </h6>
            </div>
          </div>
          <div class="row flex-center" style="display: flex; align-items: center; justify-content: center;">
            <div class="col-lg-10">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item mb-2">
                  <h2 class="accordion-header" id="heading1">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1"
                      aria-expanded="true" aria-controls="collapse1">
                      <span class="mb-0 fw-bold text-start fs-4 text-1000">Como posso cadastrar um imóvel na plataforma?
                      </span>
                    </button>
                  </h2>
                  <div class="accordion-collapse collapse show" id="collapse1" aria-labelledby="heading1"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body bg-100">
                      Para cadastrar um imóvel, acesse sua conta, clique em
                      "Adicionar Imóvel" e preencha as informações detalhadas sobre
                      o imóvel, incluindo fotos, descrição, preço e localização.
                      Após a revisão, seu imóvel será publicado e visível para
                      potenciais compradores e locatários.
                    </div>
                  </div>
                </div>
                <div class="accordion-item mb-2">
                  <h2 class="accordion-header" id="heading2">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                      <span class="mb-0 fw-bold text-start fs-4 text-1000">Quais são os benefícios de usar a plataforma
                        para
                        corretores?</span>
                    </button>
                  </h2>
                  <div class="accordion-collapse collapse" id="collapse2" aria-labelledby="heading2"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body bg-100">
                      Nossa plataforma oferece aos corretores uma série de
                      benefícios, incluindo maior visibilidade dos imóveis, acesso a
                      análises detalhadas do mercado, relatórios personalizados, e
                      ferramentas de marketing digital para atrair mais clientes.
                      Tudo isso ajuda a aumentar suas vendas e otimizar suas
                      operações.
                    </div>
                  </div>
                </div>
                <div class="accordion-item mb-2">
                  <h2 class="accordion-header" id="heading3">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapse3">
                      <span class="mb-0 fw-bold text-start fs-4 text-1000">Como a plataforma assegura a precisão das
                        informações dos
                        imóveis?</span>
                    </button>
                  </h2>
                  <div class="accordion-collapse collapse" id="collapse3" aria-labelledby="heading3"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body bg-100">
                      Nós implementamos um rigoroso processo de verificação que
                      inclui a validação das informações fornecidas pelos usuários e
                      o uso de tecnologias avançadas para garantir que os dados
                      sejam precisos e atualizados. Além disso, nossos
                      administradores revisam manualmente cada cadastro antes de sua
                      publicação.
                    </div>
                  </div>
                </div>
                <div class="accordion-item mb-2">
                  <h2 class="accordion-header" id="heading4">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapse4" aria-expanded="true" aria-controls="collapse4">
                      <span class="mb-0 fw-bold text-start fs-4 text-1000">É possível personalizar o plano de assinatura
                        de
                        acordo com
                        minhas necessidades?</span>
                    </button>
                  </h2>
                  <div class="accordion-collapse collapse" id="collapse4" aria-labelledby="heading4"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body bg-100">
                      Sim, oferecemos planos de assinatura flexíveis que podem ser
                      personalizados para atender às suas necessidades específicas.
                      Entre em contato com nosso suporte ao cliente para discutir
                      suas exigências e encontrar o plano que melhor se adapta ao
                      seu negócio.
                    </div>
                  </div>
                </div>
                <div class="accordion-item mb-2">
                  <h2 class="accordion-header" id="heading5">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapse5" aria-expanded="true" aria-controls="collapse5">
                      <span class="mb-0 fw-bold text-start fs-4 text-1000">Como funciona o suporte ao cliente na
                        plataforma?</span>
                    </button>
                  </h2>
                  <div class="accordion-collapse collapse" id="collapse5" aria-labelledby="heading5"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body bg-100">
                      Nosso suporte ao cliente está disponível 24/7 para ajudá-lo
                      com qualquer dúvida ou problema. Você pode entrar em contato
                      conosco através do chat ao vivo, e-mail ou telefone. Nosso
                      time está comprometido em fornecer soluções rápidas e eficazes
                      para garantir sua satisfação.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-6" style="background-color: #242F51; display: flex; flex-direction: column; align-items: center; ">
    <!-- <div class="container"> -->
    <div class="row flex-center">
      <div class="col-auto py-2">
        <a class="d-flex align-items-center text-decoration-none fw-bold fs-3" href="#">
          <img src="../../../assets/images/logo-transparente2.png" class="img-fluid" width="250" alt="" />
        </a>
      </div>
      <!-- </div> -->
    </div>
    <!-- end of .container-->
  </section>
</template>
<script>
import api from "../../../service/api/planos/index";
import lead from "../../../service/api/lead/index";

export default {
  name: "HomeView",
  data() {
    return {
      isAnnual: false, // Indica se a assinatura é anual
      zonuConstrutoraPrice: 80,
      zonuImobiliariaPrice: 99,
      zonuCorretorPrice: 70,
      annualDiscount: 0.2, // setando que o plano anual terá 20% de desconto
      planPeriod: "/mês", // Período atual (mensal ou anual)
      allPlanos: [],
      inscrever: "",
      msgSuccess: false,
    };
  },
  methods: {
    handleCadastrar(id) {
      localStorage.setItem("plano", id);
      if (id === 1) {
        this.$router.push({ name: "cadastro-imobiliaria" });
      } else if (id === 2) {
        this.$router.push({ name: "cadastro-imobiliaria" });
      } else if (id === 3) {
        this.$router.push({ name: "cadastro-corretor" });
      }
    },

    handleInscrever() {
      let email = this.inscrever;

      lead.novoLead(email).then((res) => {
        if (res.status === 201) {
          this.msgSuccess = true;
          this.inscrever = "";

          setTimeout(() => {
            this.msgSuccess = false;
          }, 5000);
        }
      });
    },

    handleLogin() {
      window.location.href = "/login"
    },

    togglePlan() {
      this.planPeriod = this.isAnnual ? "/ano" : "/mês";
      //   this.updatePrices();
    },
    // updatePrices() {
    //   const monthlyPrices = {
    //     zonuConstrutora: this.zonuConstrutoraPrice, // Preço mensal
    //     zonuImobiliaria: this.zonuImobiliariaPrice, // Preço mensal
    //     zonuCorretor: this.zonuConstrutoraPrice, // Preço mensal
    //   };

    //   if (this.isAnnual) {
    //     console.log(
    //         monthlyPrices
    //     )
    //     this.zonuConstrutoraPrice = monthlyPrices.zonuConstrutora * 12 * (1 - this.annualDiscount);
    //     this.zonuImobiliariaPrice = monthlyPrices.zonuImobiliaria * 12 * (1 - this.annualDiscount);
    //     this.zonuCorretorPrice = monthlyPrices.zonuCorretor * 12 * (1 - this.annualDiscount);
    //   } else {
    //     this.zonuConstrutoraPrice = monthlyPrices.zonuConstrutora;
    //     this.zonuImobiliariaPrice = monthlyPrices.zonuImobiliaria;
    //     this.zonuCorretorPrice = monthlyPrices.zonuCorretor;
    //   }
    // },
    parseCurrency(value) {
      if (typeof value === "string" && value) {
        let valor = value.replace(/\./g, "").replace(",", ".");
        return parseFloat(valor);
      } else {
        console.error("Invalid value provided:", value);
        return 0; // valor padrão
      }
    },
    formatCurrency(value) {
      let valor = this.parseCurrency(value);
      if (this.isAnnual) {
        valor *= 12;
      }
      return `${valor
        .toFixed(2)
        .replace(".", ",")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    },
    cadastrarSe() {
      console.log(this.allPlanos);
    },
  },
  mounted() {
    // this.updatePrices(); // Inicializa os preços ao montar o componente
    api.getPlanos().then((res) => {
      this.allPlanos = res.data.filter(plano => plano.id_plano !== 4);
    });
  },
  //   computed: {
  //     itensCorretora() {
  //         return this.allPlanos[0].itens_do_plano.filter((item) => {
  //             console.log(item)
  //             return item.nome_item
  //         })
  //         // return [1, 2]
  //     }
  //   }
};
</script>
<style scoped>
/* @import "../../../assets/css/theme.css"; */

.titleResponse {
  font-size: 40px;
}

.title2Response {
  font-size: 26px;
}

.subTitleResponse {
  font-size: 80px;
}

/* Para telas menores, ajuste os tamanhos */
@media (max-width: 992px) {
  .titleResponse {
    font-size: 30px;
  }

  .subTitleResponse {
    font-size: 60px;
  }
}

@media (max-width: 768px) {
  .titleResponse {
    font-size: 25px;
  }

  .subTitleResponse {
    font-size: 50px;
  }
}

@media (max-width: 576px) {
  .titleResponse {
    font-size: 20px;
  }

  .title2Response {
    font-size: 20px;
  }

  .subTitleResponse {
    font-size: 40px;
  }
}

@media (max-width: 330px) {
  .titleResponse {
    font-size: 14px;
  }

  .title2Response {
    font-size: 16px;
  }

  .subTitleResponse {
    font-size: 30px;
  }
}
</style>
