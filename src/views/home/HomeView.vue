<template>
  <nav
    class="navbar navbar-expand-lg navbar-light fixed-top py-3"
    style="background-color: #fff !important"
    data-navbar-on-scroll="data-navbar-on-scroll"
  >
    <div class="container">
      <a
        class="navbar-brand d-flex align-items-center fw-bold fs-2"
        href="index.html"
      >
        <img
          src="../../../assets/images/logo.svg"
          class="img-fluid"
          width="100"
          alt=""
        />
      </a>
      <button
        class="navbar-toggler collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav ms-auto pt-2 pt-lg-0">
          <li class="nav-item" data-anchor="data-anchor">
            <a
              class="nav-link fw-medium active"
              aria-current="page"
              href="#home"
              >Home</a
            >
          </li>
          <li class="nav-item" data-anchor="data-anchor">
            <a class="nav-link fw-medium" href="#features">Plataforma</a>
          </li>
          <li class="nav-item" data-anchor="data-anchor">
            <a class="nav-link fw-medium" href="#pricing">Preço</a>
          </li>
          <li class="nav-item" data-anchor="data-anchor">
            <a class="nav-link fw-medium" href="#testimonial">Cases</a>
          </li>
          <li class="nav-item" data-anchor="data-anchor">
            <a class="nav-link fw-medium" href="#faq">FAQ</a>
          </li>
        </ul>
        <form class="ps-lg-5" action="/login">
          <button
            class="btn btn-lg btn-primary rounded-pill order-0"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </nav>
  <section class="py-0" id="home">
    <div
      class="bg-holder"
      style="
        background-image: url(../../../assets/img/illustrations/hero-bg.png);
        background-position: bottom;
        background-size: cover;
      "
    ></div>
    <!--/.bg-holder-->

    <div class="container position-relative">
      <div class="row align-items-center py-8">
        <div class="col-md-5 col-lg-6 order-md-1 text-center text-md-end">
          <img
            src="../../../assets/img/illustrations/plataform.png"
            width="550"
            alt=""
          />
        </div>
        <div class="col-md-7 col-lg-6 text-center text-md-start">
          <span
            class="badge bg-light rounded-pill text-dark align-items-center d-flex flex-row-reverse justify-content-end mx-auto mx-md-0 ps-0 w-75 w-sm-50 w-md-75 w-xl-50 mb-3"
            >#SejaZonu<img
              class="img-fluid float-start me-3"
              src="../../../assets/img/illustrations/arrow-right.png"
              alt=""
          /></span>
          <h1 class="mb-4 display-3 fw-bold lh-sm">
            A maior plataforma imobiliária
            <br class="d-block d-lg-none d-xl-block" />do Brasil
          </h1>
          <p class="mt-3 mb-4 fs-1">
            A plataforma definitiva para construtores, corretores e
            imobiliárias. <br class="d-none d-lg-block" />Tudo em um único
            lugar.
          </p>
          <a
            class="btn btn-lg btn-primary rounded-pill hover-top"
            href="#pricing"
            role="button"
            >Teste grátis</a
          ><a class="btn btn-link ps-md-4" href="#features" role="button">
            Conheça nossa plataforma</a
          >
        </div>
      </div>
    </div>
  </section>

  <section class="py-5" id="features">
    <div class="container-lg">
      <div class="row align-items-center">
        <div class="col-md-5 col-lg-6 order-md-0 text-center text-md-start">
          <img
            class="img-fluid"
            src="../../../assets/img/illustrations/location.png"
            width="60%"
            alt=""
          />
        </div>
        <div class="col-md-7 col-lg-6 px-sm-5 px-md-0">
          <h6 class="fw-bold fs-4 display-3 lh-sm">
            Vantagens de ser <br />Zonu
          </h6>
          <p class="my-4">
            Transforme suas oportunidades imobiliárias em sucesso com tecnologia
            <br class="d-none d-xl-block" />avançada e insights precisos.
          </p>
          <div class="d-flex align-items-center mb-5">
            <div>
              <img
                class="img-fluid"
                src="../../../assets/images/iconHome.png"
                width="90"
                alt=""
              />
            </div>
            <div class="px-4">
              <h5 class="fw-bold text-danger">Imóveis mapeados</h5>
              <p>
                Aumente a visibilidade dos seus imóveis com cadastros
                <br class="d-none d-xl-block" />
                detalhados e atraentes, otimizados para chamar a atenção
                <br class="d-none d-xl-block" />
                dos compradores
              </p>
            </div>
          </div>
          <div class="d-flex align-items-center mb-5">
            <div>
              <img
                class="img-fluid"
                src="../../../assets/images/iconPesquisa.png"
                width="90"
                alt=""
              />
            </div>
            <div class="px-4">
              <h5 class="fw-bold text-primary">Pesquisa apurada</h5>
              <p>
                Conte com análises detalhadas e precisas do mercado, garantindo
                que <br class="d-none d-xl-block" />
                suas decisões sejam sempre baseadas nas melhores
                <br class="d-none d-xl-block" />
                informações disponíveis
              </p>
            </div>
          </div>
          <div class="d-flex align-items-center mb-5">
            <div>
              <img
                class="img-fluid"
                src="../../../assets/images/iconReport.png"
                width="90"
                alt=""
              />
            </div>
            <div class="px-4">
              <h5 class="fw-bold text-success">Relatórios</h5>
              <p>
                Obtenha seus relatórios entregues
                <br class="d-none d-xl-block" />
                em casa, colete uma amostra das <br class="d-none d-xl-block" />
                novidades do seu mercado imobiliário
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================-->
  <!-- <section> begin ============================-->
  <section class="py-5">
    <div class="container">
      <div class="row align-items-center mb-6">
        <div class="col-md-5 col-lg-4 offset-lg-1">
          <h1 class="fw-bold lh-base">
            Soluções inteligentes para o mercado imobiliário
          </h1>
        </div>
        <div class="col-md-6 col-lg-5 offset-lg-1 border-start py-5 ps-5">
          <p class="mb-0">
            O aumento do uso de dispositivos móveis está revolucionando a
            maneira como consumimos informações, impactando diretamente os
            principais canais do mundo, como o Facebook. Nossa plataforma
            imobiliária aproveita essa transformação digital para oferecer
            soluções inteligentes e inovadoras, conectando construtores,
            corretores e imobiliárias com seus clientes de forma mais eficaz e
            eficiente.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-lg-3 offset-lg-1 mb-4">
          <div class="py-4">
            <img
              class="img-fluid"
              src="../../../assets/img/illustrations/automatic.png"
              width="90"
              alt=""
            />
          </div>
          <h5 class="fw-bold text-danger">Organize</h5>
          <p class="mt-2 mb-0">
            A organização é crucial para o sucesso. Ela melhora a eficiência,
            reduz erros e ajuda a concentrar no que realmente importa.
          </p>
        </div>
        <div class="col-md-4 col-lg-3 offset-lg-1 mb-4">
          <div class="py-4">
            <img
              class="img-fluid"
              src="../../../assets/img/illustrations/network.png"
              width="90"
              alt=""
            />
          </div>
          <h5 class="fw-bold text-primary">Publique</h5>
          <p class="mt-2 mb-0">
            Publique e promova seus anúncios de imóveis com facilidade para
            atrair mais potenciais compradores e locatários.
          </p>
        </div>
        <div class="col-md-4 col-lg-3 offset-lg-1 mb-4">
          <div class="py-4">
            <img
              class="img-fluid"
              src="../../../assets/img/illustrations/rewards.png"
              width="90"
              alt=""
            />
          </div>
          <h5 class="fw-bold text-success">Acompanhe</h5>
          <p class="mt-2 mb-0">
            Acompanhe o desempenho dos seus anúncios e fique atualizado com as
            últimas tendências do mercado.
          </p>
        </div>
      </div>
    </div>
    <!-- end of .container-->
  </section>
  <!-- <section> close ============================-->
  <!-- ============================================-->

  <!-- ============================================-->
  <!-- <section> begin ============================-->
  <section class="py-6">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-5 order-md-0 text-center text-md-start">
          <img
            class="img-fluid mb-4"
            src="../../../assets/images/grafico.png"
            width="550"
            alt=""
          />
        </div>
        <div class="col-md-6 text-center text-md-start offset-md-1">
          <h6 class="fw-bold fs-4 display-3 lh-sm">
            Análise detalhada dos <br />
            dados imobiliários
          </h6>
          <p class="my-4 pe-xl-5" style="font-size: 1.1em">
            A nossa plataforma utiliza tecnologia avançada para oferecer uma
            visão abrangente do mercado imobiliário. Com gráficos interativos e
            dados precisos, você pode monitorar a distribuição de imóveis por
            tipo, a relação entre aluguéis e vendas, e a localização dos imóveis
            em diversas cidades. Essas ferramentas visuais são essenciais para
            tomar decisões informadas e estratégicas, aproveitando ao máximo as
            oportunidades do mercado.
          </p>
        </div>
      </div>
    </div>
    <!-- end of .container-->
  </section>
  <!-- <section> close ============================-->
  <!-- ============================================-->

  <!-- ============================================-->
  <!-- <section> begin ============================-->
  <section class="py-6">
    <div class="container">
      <div class="row justify-content-center mb-6">
        <div class="col-lg-6 text-center mx-auto mb-3 mb-md-5 mt-4">
          <h6 class="fw-bold fs-4 display-3 lh-sm">
            Por que você deve escolher <br />nossa plataforma
          </h6>
          <!-- <p class="mb-0">The rise of mobile devices transforms the way we consume information entirely and
                        the
                        world's most elevant channels such as Facebook.</p> -->
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 mb-6">
          <div class="text-center px-lg-3">
            <img
              class="img-fluid mb-3"
              src="../../../assets/img/illustrations/app.png"
              width="90"
              alt=""
            />
            <h5 class="fw-bold">Desenvolvimento da Plataforma</h5>
            <p class="mb-md-0">
              Receba suas análises de mercado diretamente <br />em sua casa,
              coletando dados valiosos sobre as <br />
              tendências imobiliárias.
            </p>
          </div>
        </div>
        <div class="col-md-4 mb-6">
          <div class="text-center px-lg-3">
            <img
              class="img-fluid mb-3"
              src="../../../assets/img/illustrations/time-award.png"
              width="90"
              alt=""
            />
            <h5 class="fw-bold">Excelência Reconhecida</h5>
            <p class="mb-md-0">
              A maior plataforma imobiliária do Brasil, destacando-se por sua
              excelência e inovação no setor imobiliário.
            </p>
          </div>
        </div>
        <div class="col-md-4 mb-6">
          <div class="text-center px-lg-3">
            <img
              class="img-fluid mb-3"
              src="../../../assets/img/illustrations/cloud.png"
              width="90"
              alt=""
            />
            <h5 class="fw-bold">Armazenamento em Nuvem</h5>
            <p class="mb-md-0">
              Mantenha todos os seus dados imobiliários seguros e acessíveis com
              nosso armazenamento em nuvem de alta qualidade.
            </p>
          </div>
        </div>
        <div class="col-md-4 mb-6">
          <div class="text-center px-lg-3">
            <img
              class="img-fluid mb-3"
              src="../../../assets/img/illustrations/customization.png"
              width="90"
              alt=""
            />
            <h5 class="fw-bold">Personalização</h5>
            <p class="mb-md-0">
              Personalize sua experiência na plataforma para atender melhor às
              suas necessidades específicas de mercado.
            </p>
          </div>
        </div>
        <div class="col-md-4 mb-6">
          <div class="text-center px-lg-3">
            <img
              class="img-fluid mb-3"
              src="../../../assets/img/illustrations/ux.png"
              width="90"
              alt=""
            />
            <h5 class="fw-bold">Planejamento de UX</h5>
            <p class="mb-md-0">
              Oferecemos uma experiência de usuário otimizada, garantindo que
              todas as funcionalidades sejam intuitivas e fáceis de usar.
            </p>
          </div>
        </div>
        <div class="col-md-4 mb-6">
          <div class="text-center px-lg-3">
            <img
              class="img-fluid mb-3"
              src="../../../assets/img/illustrations/support.png"
              width="90"
              alt=""
            />
            <h5 class="fw-bold">Suporte ao Cliente</h5>
            <p class="mb-md-0">
              Receba suporte ao cliente dedicado para garantir que todas as suas
              dúvidas e necessidades sejam atendidas rapidamente.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- end of .container-->
  </section>
  <!-- <section> close ============================-->
  <!-- ============================================-->

  <!-- ============================================-->
  <!-- <section> begin ============================-->
  <section class="py-4">
    <div class="container">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 order-md-1 text-center text-md-start">
            <img
              class="mb-4 img-fluid"
              style="max-width: 95%"
              src="../../../assets/images/graficoAi.png"
              alt=""
            />
          </div>
          <div class="col-md-6 text-center text-md-start">
            <h6 class="fw-bold fs-4 display-3 lh-sm">
              Recursos Inovadores<br />que Desenvolvemos
            </h6>
            <p class="my-4 pe-xl-5">
              O aumento do uso de dispositivos móveis está transformando
              completamente a maneira como consumimos informações no mercado
              imobiliário.
            </p>
            <div class="row">
              <div class="col-md-6">
                <div class="mb-4">
                  <div class="py-4">
                    <img
                      class="img-fluid"
                      src="../../../assets/img/illustrations/app.png"
                      width="90"
                      alt=""
                    />
                  </div>
                  <h5 class="fw-bold text-undefined">
                    Desenvolvimento de sites
                  </h5>
                  <p class="mt-2 mb-0">
                    Desenvolvemos telas que permitem que você visualize e
                    gerencie seus imóveis diretamente do seu celular, com
                    atualizações em tempo real sobre o mercado.
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-4">
                  <div class="py-4">
                    <img
                      class="img-fluid"
                      src="../../../assets/img/illustrations/ux.png"
                      width="90"
                      alt=""
                    />
                  </div>
                  <h5 class="fw-bold text-undefined">Planejamento de UX</h5>
                  <p class="mt-2 mb-0">
                    Nosso planejamento de UX é centrado no usuário, garantindo
                    uma navegação intuitiva e uma experiência agradável enquanto
                    você busca pelos melhores imóveis.
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-4">
                  <div class="py-4">
                    <img
                      class="img-fluid"
                      src="../../../assets/img/illustrations/cloud.png"
                      width="90"
                      alt=""
                    />
                  </div>
                  <h5 class="fw-bold text-undefined">Armazenamento em Nuvem</h5>
                  <p class="mt-2 mb-0">
                    Armazenamos todos os dados dos imóveis na nuvem,
                    proporcionando acesso rápido e seguro a partir de qualquer
                    dispositivo, a qualquer momento.
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-4">
                  <div class="py-4">
                    <img
                      class="img-fluid"
                      src="../../../assets/img/illustrations/support.png"
                      width="90"
                      alt=""
                    />
                  </div>
                  <h5 class="fw-bold text-undefined">Suporte ao Cliente</h5>
                  <p class="mt-2 mb-0">
                    Oferecemos suporte ao cliente dedicado para ajudar você com
                    qualquer dúvida ou problema, garantindo que você tenha a
                    melhor experiência possível na nossa plataforma.
                  </p>
                </div>
              </div>
            </div>
            <!-- <a class="btn btn-lg btn-primary rounded-pill hover-top" href="#" role="button">See
                            all</a> -->
          </div>
        </div>
      </div>
    </div>
    <!-- end of .container-->
  </section>
  <!-- <section> close ============================-->
  <!-- ============================================-->

  <!-- ============================================-->
  <!-- <section> begin ============================-->
  <section class="py-8" id="pricing">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6 col-xxl-5 text-center mb-3">
          <h6 class="fw-bold fs-4 display-3 lh-sm mb-3">
            Aproveite recursos incríveis incluídos no seu plano
          </h6>
          <p class="mb-4">
            Nossa plataforma imobiliária aproveita essa transformação digital
            para oferecer recursos incríveis e inovadores, todos inclusos no seu
            plano, conectando construtores, corretores e imobiliárias com seus
            clientes de forma mais eficaz e eficiente.
          </p>
        </div>
      </div>
      <div class="row flex-center">
        <div class="col-12 mb-3">
          <div class="d-flex justify-content-center">
            <label class="form-check-label me-2" for="customSwitch1"
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
              <label class="form-check-label align-top" for="customSwitch1"
                >Anual</label
              >
            </div>
          </div>
        </div>
        <div class="col-lg-3" v-for="item in allPlanos">
          {{ console.log("item =>", item) }}
          <div
            class="card shadow-lg mb-4 border-0 d-flex flex-column"
            style="height: 500px"
          >
            <div class="card-header border-bottom-0 pt-5 pb-4">
              <div class="d-flex justify-content-center">
                <h1 class="fw-bold fs-2">
                  {{ formatCurrency(item.valor_plano) }}
                </h1>
                <span class="d-flex align-items-center">/{{ planPeriod }}</span>
              </div>
              <h5 class="fw-bold text-center fs-1">{{ item.nome_plano }}</h5>
              <span class="text-700 text-center d-block">{{
                item.descricao
              }}</span>
            </div>
            <div class="card-body mx-auto flex-grow-1">
              <ul class="list-unstyled mb-2">
                <li
                  class="text-700 py-2 text-secondary"
                  v-for="(itens, index) in item.itens_do_plano"
                >
                  <i class="fa fa-check"></i> &nbsp; {{ itens }}
                </li>
              </ul>
            </div>
            <div class="mt-auto text-center">
              <a
                class="btn btn-lg btn-primary rounded-pill mb-5"
                @click="handleCadastrar(item.id_plano)"
              >
                Cadastre-se agora
              </a>
            </div>
          </div>
        </div>
        <!-- <div class="col-lg-4">
                    <div class="card shadow-lg mb-4">
                        <div class="card-header border-bottom-0 pt-7 pb-5">
                            <div class="d-flex justify-content-center">
                                <h1 class="fw-bold">{{ formatCurrency(zonuImobiliariaPrice) }}</h1><span
                                    class="d-flex align-items-center">/{{ planPeriod }}</span>
                            </div>
                            <h5 class="fw-bold text-center">Zonu Imobiliária</h5>
                            <span class="text-700 text-center d-block">Ideal para TODAS as imobiliárias</span>
                        </div>
                        <div class="card-body mx-auto">
                            <ul class="list-unstyled mb-4">
                                <li class="text-700 py-2 text-secondary"><i class="fa fa-check"></i> Drag &amp; Drop
                                    Builder</li>
                                <li class="text-700 py-2 text-secondary"><i class="fa fa-check"></i> 1,000's of
                                    Templates</li>
                                <li class="text-700 py-2 text-secondary"><i class="fa fa-check"></i> Blog Support Tools
                                </li>
                                <li class="text-700 py-2 text-secondary"><i class="fa fa-check"></i> eCommerce Store
                                </li>
                            </ul>
                            <div class="d-flex flex-column">
                                <a class="btn btn-lg btn-primary rounded-pill mb-3" href="#">Assine agora</a>
                                <a href="#" class="text-center">Ou teste por 7 dias</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card shadow-lg mb-4 border-0">
                        <div class="card-header border-bottom-0 pt-7 pb-5">
                            <div class="d-flex justify-content-center">
                                <h1 class="fw-bold">{{ formatCurrency(zonuCorretorPrice) }}</h1><span
                                    class="d-flex align-items-center">/{{ planPeriod }}</span>
                            </div>
                            <h5 class="fw-bold text-center">{{nomeCorretora}}</h5>
                            <span class="text-700 text-center d-block">{{ descricaoCorretora }}</span>
                        </div>
                        <div class="card-body mx-auto">
                            <ul class="list-unstyled mb-4">
                                <li class="text-700 py-2 text-secondary"><i class="fa fa-check"></i> Drag</li>
                                <li class="text-700 py-2 text-secondary"><i class="fa fa-check"></i> 1,000's of
                                    Templates</li>
                                <li class="text-700 py-2 text-secondary"><i class="fa fa-check"></i> Blog Support Tools
                                </li>
                                <li class="text-700 py-2 text-secondary"><i class="fa fa-check"></i> eCommerce Store
                                </li>
                            </ul>
                            <div class="d-flex flex-column">
                                <a class="btn btn-lg btn-primary rounded-pill mb-3" href="#">Assine agora</a>
                                <a href="#" class="text-center">Ou teste por 7 dias</a>
                            </div>
                        </div>
                    </div>
                </div> -->
      </div>
    </div>
    <!-- end of .container-->
  </section>
  <!-- <section> close ============================-->
  <!-- ============================================-->

  <section class="py-8" id="testimonial">
    <div class="container-lg">
      <div class="row flex-center">
        <div
          class="col-sm-10 col-md-5 col-lg-5 order-md-0 text-center text-md-start"
        >
          <img
            class="img-fluid mb-4"
            src="../../../assets/img/illustrations/testimonial.png"
            alt=""
          />
        </div>
        <div
          class="col-sm-10 col-md-6 col-lg-6 text-center text-md-start offset-md-1"
        >
          <h6 class="fw-bold fs-4 display-3 lh-sm">
            Conheça a satisfação do cliente<br />usando nosso produto
          </h6>
          <p class="my-4 pe-xl-5">
            Nossa plataforma imobiliária aproveita essa transformação digital
            para oferecer soluções que garantem a satisfação do cliente.
          </p>
          <div
            class="carousel slide"
            id="carouselExampleDark"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <div class="row h-100">
                  <div class="col-12">
                    <svg
                      class="bi bi-star-fill"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#FFCC00"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                      ></path>
                    </svg>
                    <svg
                      class="bi bi-star-fill"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#FFCC00"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                      ></path>
                    </svg>
                    <svg
                      class="bi bi-star-fill"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#FFCC00"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                      ></path>
                    </svg>
                    <svg
                      class="bi bi-star-fill"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#FFCC00"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                      ></path>
                    </svg>
                    <svg
                      class="bi bi-star-fill"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#FFCC00"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                      ></path>
                    </svg>
                    <h5 class="my-4 fw-bold lh-sm">
                        Simples &amp; Eficaz
                    </h5>
                    <p class="mb-0 text-center text-md-start">
                        O site se destacou pela sua simplicidade e flexibilidade, o que foi fundamental para otimizar nossas operações. Como a maior plataforma imobiliária do Brasil, ela oferece uma solução completa e integrada para construtores, corretores e imobiliárias.
                    </p>
                  </div>
                  <div class="col-xl-6 pt-4 d-flex d-sm-block flex-center">
                    <div class="d-flex align-items-md-center">
                      <img
                        class="img-fluid me-4 me-md-3 me-lg-4"
                        src="../../../assets/img/gallery/user.png"
                        width="100"
                        alt=""
                      />
                      <div class="w-lg-50 my-3">
                        <h5 class="mb-0 fw-bold">Zoltan Nemeth</h5>
                        <p class="fw-normal mb-0">CEO of Pixer Lab</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <div class="row h-100">
                  <div class="col-12">
                    <svg
                      class="bi bi-star-fill"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#FFCC00"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                      ></path>
                    </svg>
                    <svg
                      class="bi bi-star-fill"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#FFCC00"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                      ></path>
                    </svg>
                    <svg
                      class="bi bi-star-fill"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#FFCC00"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                      ></path>
                    </svg>
                    <svg
                      class="bi bi-star-fill"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#FFCC00"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                      ></path>
                    </svg>
                    <svg
                      class="bi bi-star-fill"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#FFCC00"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                      ></path>
                    </svg>
                    <h5 class="my-4 fw-bold lh-sm">
                      Fácil de usar &amp; personalizável
                    </h5>
                    <p class="mb-0 text-center text-md-start">
                        A interface é intuitiva e simplificada, o que tornou a experiência muito agradável. A capacidade de gerar e interagir com conteúdo em tempo real é um grande diferencial, criando vários pontos de contato e oferecendo uma vantagem competitiva significativa. Estou muito satisfeito com a solução e a recomendaria a outros profissionais do setor!
                    </p>
                  </div>
                  <div class="col-xl-6 pt-4 d-flex d-sm-block flex-center">
                    <div class="d-flex align-items-md-center">
                      <img
                        class="img-fluid me-4 me-md-3 me-lg-4"
                        src="../../../assets/img/gallery/user-1.png"
                        width="100"
                        alt=""
                      />
                      <div class="w-lg-50 my-3">
                        <h5 class="mb-0 fw-bold">Jhon Doe</h5>
                        <p class="fw-normal mb-0">Web Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row h-100">
                  <div class="col-12">
                    <svg
                      class="bi bi-star-fill"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#FFCC00"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                      ></path>
                    </svg>
                    <svg
                      class="bi bi-star-fill"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#FFCC00"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                      ></path>
                    </svg>
                    <svg
                      class="bi bi-star-fill"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#FFCC00"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                      ></path>
                    </svg>
                    <svg
                      class="bi bi-star-fill"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#FFCC00"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                      ></path>
                    </svg>
                    <svg
                      class="bi bi-star-fill"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#FFCC00"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                      ></path>
                    </svg>
                    <h5 class="my-4 fw-bold lh-sm">
                        Intuitiva &amp; Personalizável
                    </h5>
                    <p class="mb-0 text-center text-md-start">
                        A plataforma se destacou pela sua facilidade de uso e flexibilidade. Ela oferece soluções inteligentes e estratégias eficazes que garantem um controle proativo e eficiente. Ao longo do tempo, a plataforma evoluiu para se adaptar às novas necessidades, oferecendo uma solução em nuvem que simplifica todos os processos.
                    </p>
                  </div>
                  <div class="col-xl-6 pt-4 d-flex d-sm-block flex-center">
                    <div class="d-flex align-items-md-center">
                      <img
                        class="img-fluid me-4 me-md-3 me-lg-4"
                        src="../../../assets/img/gallery/user-2.png"
                        width="100"
                        alt=""
                      />
                      <div class="w-lg-50 my-3">
                        <h5 class="mb-0 fw-bold">Viezh Robert</h5>
                        <p class="fw-normal mb-0">UI/UX Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="position-relative mt-sm-n5">
              <a
                class="carousel-control-prev carousel-icon z-index-2"
                href="#carouselExampleDark"
                role="button"
                data-bs-slide="prev"
                ><span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span
                ><span class="visually-hidden">Previous</span></a
              ><a
                class="carousel-control-next carousel-icon z-index-2"
                href="#carouselExampleDark"
                role="button"
                data-bs-slide="next"
                ><span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span
                ><span class="visually-hidden">Next</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================-->
  <!-- <section> begin ============================-->
  <section class="py-8" id="faq">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6 text-center mb-3">
          <h6 class="fw-bold fs-4 display-3 lh-sm mb-3">
            Perguntas Frequentes
          </h6>
        </div>
      </div>
      <div class="row flex-center">
        <div class="col-lg-9">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item mb-2">
              <h2 class="accordion-header" id="heading1">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1"
                  aria-expanded="true"
                  aria-controls="collapse1"
                >
                  <span class="mb-0 fw-bold text-start fs-1 text-1000"
                    >Como posso cadastrar um imóvel na plataforma?
                  </span>
                </button>
              </h2>
              <div
                class="accordion-collapse collapse show"
                id="collapse1"
                aria-labelledby="heading1"
                data-bs-parent="#accordionExample"
              >
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
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2"
                  aria-expanded="true"
                  aria-controls="collapse2"
                >
                  <span class="mb-0 fw-bold text-start fs-1 text-1000"
                    >Quais são os benefícios de usar a plataforma para
                    corretores?</span
                  >
                </button>
              </h2>
              <div
                class="accordion-collapse collapse"
                id="collapse2"
                aria-labelledby="heading2"
                data-bs-parent="#accordionExample"
              >
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
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse3"
                  aria-expanded="true"
                  aria-controls="collapse3"
                >
                  <span class="mb-0 fw-bold text-start fs-1 text-1000"
                    >Como a plataforma assegura a precisão das informações dos
                    imóveis?</span
                  >
                </button>
              </h2>
              <div
                class="accordion-collapse collapse"
                id="collapse3"
                aria-labelledby="heading3"
                data-bs-parent="#accordionExample"
              >
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
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse4"
                  aria-expanded="true"
                  aria-controls="collapse4"
                >
                  <span class="mb-0 fw-bold text-start fs-1 text-1000"
                    >É possível personalizar o plano de assinatura de acordo com
                    minhas necessidades?</span
                  >
                </button>
              </h2>
              <div
                class="accordion-collapse collapse"
                id="collapse4"
                aria-labelledby="heading4"
                data-bs-parent="#accordionExample"
              >
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
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse5"
                  aria-expanded="true"
                  aria-controls="collapse5"
                >
                  <span class="mb-0 fw-bold text-start fs-1 text-1000"
                    >Como funciona o suporte ao cliente na plataforma?</span
                  >
                </button>
              </h2>
              <div
                class="accordion-collapse collapse"
                id="collapse5"
                aria-labelledby="heading5"
                data-bs-parent="#accordionExample"
              >
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
    <!-- end of .container-->
  </section>
  <!-- <section> close ============================-->
  <!-- ============================================-->

  <!-- <section class="py-6">
    <hr />
    <div class="container">
      <div class="row align-items-center">
        <div
          class="col-md-5 col-lg-7 order-md-1 text-center text-md-start z-index-2 cta-image"
        >
          <img
            class="img-fluid mb-4 mb-md-0"
            src="../../../assets/img/illustrations/cta.png"
            width="850"
            alt=""
          />
        </div>
        <div class="col-md-7 col-lg-5 text-center text-md-start">
          <h1 class="display-3 fw-bold lh-sm">Download our App now</h1>
          <p class="my-4">
            The rise of mobile devices transforms the way we consume information
            entirely and the world's most elevant channels such as Facebook.
          </p>
          <div class="d-flex justify-content-center d-md-inline-block">
            <a class="pe-2 pe-sm-3 pe-md-4" href="!#"></a><a href="!#"></a>
          </div>
        </div>
      </div>
    </div>
  </section> -->

  <!-- ============================================-->
  <!-- <section> begin ============================-->
  <section class="py-8 bg-1000">
    <div class="container">
      <div class="row flex-center">
        <div class="col-auto mb-5">
          <a
            class="pe-2 d-flex align-items-center text-decoration-none fw-bold fs-3"
            href="#"
          >
            <img
              src="../../../assets/images/logo.svg"
              class="img-fluid"
              width="100"
              alt=""
            />
          </a>
        </div>
      </div>
      <div class="row flex-center">
        <div class="col-auto mb-1">
          <!-- <ul class="list-unstyled list-inline mb-0">
            <li class="list-inline-item me3 me-sm-4">
              <a class="text-light text-decoration-none" href="#!">Home</a>
            </li>
            <li class="list-inline-item me3 me-sm-4">
              <a class="text-light text-decoration-none" href="#!"
                >Key Features</a
              >
            </li>
            <li class="list-inline-item me3 me-sm-4">
              <a class="text-light text-decoration-none" href="#!">Pricing</a>
            </li>
            <li class="list-inline-item me3 me-sm-4">
              <a class="text-light text-decoration-none" href="#!"
                >Testimonial</a
              >
            </li>
            <li class="list-inline-item me3 me-sm-4">
              <a class="text-light text-decoration-none" href="#!">FAQ</a>
            </li>
          </ul> -->
        </div>
      </div>
      <div class="row flex-center">
        <div class="col-auto mb-5">
          <ul class="list-unstyled list-inline">
            <li class="list-inline-item me-3">
              <a class="text-decoration-none" href="#!">
                <svg
                  class="bi bi-facebook"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#7D7987"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                  ></path></svg
              ></a>
            </li>
            <li class="list-inline-item me-3">
              <a href="#!">
                <svg
                  class="bi bi-twitter"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#7D7987"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                  ></path></svg
              ></a>
            </li>

            <li class="list-inline-item me-3">
              <a href="#!">
                <svg
                  class="bi bi-instagram"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#7D7987"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                  ></path></svg
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row flex-center">
        <div class="col-auto">
          <p class="mb-0 fs--1 text-700">
            &copy; Desenvolvido por&nbsp;
            <svg
              class="bi bi-suit-heart-fill"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#ffffff"
              viewBox="0 0 16 16"
            >
              <path
                d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"
              ></path></svg
            >&nbsp;&nbsp;<a
              class="text-700"
              href="https://themewagon.com/"
              target="_blank"
              >Software Precisão
            </a>
          </p>
        </div>
      </div>
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
      return `R$ ${valor
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
      this.allPlanos = res.data;
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
@import "../../../assets/css/theme.css";
</style>
