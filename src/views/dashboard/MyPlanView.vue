<template>
  <div class="wrapper">
    <Sidebar :defaultCollapsed="true" />
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
                          <h2>Our Pricing</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                            quam urna, dignissim nec auctor in, mattis vitae leo.
                          </p>
                        </div>
                        <div class="row justify-content-md-center">
                          <div class="col-md-5 col-lg-4">
                            <div class="item">
                              <div class="heading">
                                <h3>BASIC</h3>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              </p>
                              <div class="features">
                                <h4>
                                  <span class="feature">Full Support</span> :
                                  <span class="value">No</span>
                                </h4>
                                <h4>
                                  <span class="feature">Duration</span> :
                                  <span class="value">30 Days</span>
                                </h4>
                                <h4>
                                  <span class="feature">Storage</span> :
                                  <span class="value">10GB</span>
                                </h4>
                              </div>
                              <div class="price">
                                <h4>$25</h4>
                              </div>
                              <button
                                class="btn btn-block btn-outline-primary"
                                type="submit"
                              >
                                BUY NOW
                              </button>
                            </div>
                          </div>
                          <div class="col-md-5 col-lg-4">
                            <div class="item">
                              <div class="ribbon">Best Value</div>
                              <div class="heading">
                                <h3>PRO</h3>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              </p>
                              <div class="features">
                                <h4>
                                  <span class="feature">Full Support</span> :
                                  <span class="value">Yes</span>
                                </h4>
                                <h4>
                                  <span class="feature">Duration</span> :
                                  <span class="value">60 Days</span>
                                </h4>
                                <h4>
                                  <span class="feature">Storage</span> :
                                  <span class="value">50GB</span>
                                </h4>
                              </div>
                              <div class="price">
                                <h4>$50</h4>
                              </div>
                              <button class="btn btn-block btn-primary" type="submit">
                                BUY NOW
                              </button>
                            </div>
                          </div>
                          <div class="col-md-5 col-lg-4">
                            <div class="item">
                              <div class="heading">
                                <h3>PREMIUM</h3>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              </p>
                              <div class="features">
                                <h4>
                                  <span class="feature">Full Support</span> :
                                  <span class="value">Yes</span>
                                </h4>
                                <h4>
                                  <span class="feature">Duration</span> :
                                  <span class="value">120 Days</span>
                                </h4>
                                <h4>
                                  <span class="feature">Storage</span> :
                                  <span class="value">150GB</span>
                                </h4>
                              </div>
                              <div class="price">
                                <h4>$150</h4>
                              </div>
                              <button
                                class="btn btn-block btn-outline-primary"
                                type="submit"
                              >
                                BUY NOW
                              </button>
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
import Sidebar from "../../components/sidebar/index.vue";
import Navbar from "../../components/navbar/index.vue";
import Footer from "../../components/footer/index.vue";

export default {
  name: "MyPlanView",
  components: {
    Sidebar,
    Navbar,
    Footer,
  },
  data() {
    return {};
  },

  //Aqui está o MOSTRA e ESCONDE dos INPUTS do dashboard
  watch: {},
  mounted() {
    setTimeout(() => {
      this.mostrarSkeleton = false;
    }, 2000);
  },

  methods: {},
};
</script>
