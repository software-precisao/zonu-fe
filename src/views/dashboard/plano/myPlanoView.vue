<template>
  <div class="wrapper">
    <div class="main">
      <Navbar />
      <main class="content">
        <div class="container-fluid p-0">
          <h1 class="h3 mb-3"><strong>Planos |</strong> Meu Plano</h1>

          <div class="row d-flex flex-row justify-content-between">
            <!-- <div style="width: 19%; margin-right: 1%;">
                <div class="col-xl-12 col-xxl-12 d-flex">
                  <div class="w-100">
                    <div class="row">
  
                      <div class="card">
                        <div class="card-body">
                          <div class="row">
                            <div class="card-header">
                              <h3 class="card-title mb-0">Passo a passo</h3>
                            </div>
                            <div class="row align-items-center">
                              <div class="col-12">
                                                              <span v-if="!stepInfo"><i class="fa fa-circle"></i>
                                                                  Informações</span>
                                <span v-if="stepInfo" class="text-success"><i class="fa fa-check text-success"></i>
                                                                  Informações</span>
                              </div>
  
                              <div class="col-auto">
                                <div class="vertical-hr"></div>
                              </div>
  
  
                            </div>
                          </div>
                        </div>
                      </div>
  
                    </div>
                  </div>
                </div>
              </div> -->

            <!-- Aqui começa as TABS. Copie e cole da INFOTAB -->
            <div style="">
              <div class="col-xl-12 col-xxl-12 d-flex">
                <div class="w-100">
                  <div class="row">
                    <!-- Pricing 2 - Bootstrap Brain Component -->
                    <section class="pricing-table">
                      <div class="container">
                        <div class="block-heading">
                          <h2>Meu plano</h2>
                          <!-- <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc quam urna, dignissim nec auctor in,
                            mattis vitae leo.
                          </p> -->
                        </div>
                        <div
                          class=""
                          style="
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                          "
                        >
                          <div class="" style="margin-bottom: 20px">
                            <div class="d-flex justify-content-center">
                              <label
                                class="form-check-label me-2"
                                for="customSwitch1"
                                >Mensal</label
                              >
                              <div class="form-check form-switch">
                                <input
                                  class="form-check-input"
                                  id="customSwitch1"
                                  type="checkbox"
                                  v-model="isAnnual"
                                  @change="togglePlan"
                                />
                                <label
                                  class="form-check-label align-top"
                                  for="customSwitch1"
                                  >Anual</label
                                >
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4" v-if="plano != null">
                            {{ console.log("plano =>", plano) }}
                            <div
                              class="card shadow-lg mb-4 border-0 d-flex flex-column"
                              style="height: 500px"
                            >
                              <div
                                class="card-header border-bottom-0 pt-7 pb-5"
                                style="background-color: #fafafa"
                              >
                                <div class="d-flex justify-content-center">
                                  <h1 class="fw-bold fs-2">
                                    {{ formatCurrency(plano.valor_plano) }}
                                  </h1>
                                  <span class="d-flex align-items-center"
                                    >/{{ planPeriod }}</span
                                  >
                                </div>
                                <h5 class="fw-bold text-center fs-1">
                                  {{ plano.nome_plano }}
                                </h5>
                                <span class="text-700 text-center d-block">{{
                                  plano.descricao
                                }}</span>
                              </div>
                              <div class="card-body mx-auto flex-grow-1">
                                <ul class="list-unstyled mb-4">
                                  <li
                                    class="text-700 py-2 text-secondary"
                                    v-for="(itens, index) in plano
                                      .itens_do_plano[0]"
                                  >
                                    <i class="fa fa-check"></i> &nbsp;
                                    {{ itens }}
                                  </li>
                                </ul>
                              </div>
                              <!-- <div class="mt-auto text-center">
                                <a
                                  class="btn btn-lg btn-primary rounded-pill mb-3"
                                  @click="handleCadastrar(plano.id_plano)"
                                >
                                  Cadastre-se agora
                                </a>
                              </div> -->
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>
<script>
import Navbar from "../../../components/navbar/navbar-imobiliaria.vue";
import Footer from "../../../components/footer/index.vue";
import api from "../../../../service/api/planos/index";
import { jwtDecode } from "jwt-decode";

export default {
  name: "meuPlano",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      plano: null,
      planPeriod: "/mês",
      isAnnual: false,
    };
  },

  //Aqui está o MOSTRA e ESCONDE dos INPUTS do dashboard
  watch: {},
  mounted() {
    setTimeout(() => {
      this.mostrarSkeleton = false;
    }, 2000);

    this.fetchPlano();
  },

  methods: {
    fetchPlano() {
      let token = localStorage.getItem("token");

      const decoded = jwtDecode(token);

      api.getPlanos().then((res) => {
        res.data.map((plano) => {
          if (plano.id_plano === decoded.id_plano) {
            this.plano = plano;
          }
        });
      });
    },

    formatCurrency(value) {
      let valor = this.parseCurrency(value);
      if (this.isAnnual) {
        valor *= 12;
      }
      return `R$ ${valor
        .toFixed(2)
        .replace(".", ",")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    },

    parseCurrency(value) {
      if (typeof value === "string" && value) {
        let valor = value.replace(/\./g, "").replace(",", ".");
        return parseFloat(valor);
      } else {
        console.error("Invalid value provided:", value);
        return 0; // valor padrão
      }
    },

    togglePlan() {
      this.planPeriod = this.isAnnual ? "/ano" : "/mês";
      //   this.updatePrices();
    },
  },
};
</script>
