<template>
  <div class="body" v-if="link">
    <nav
      class="navbar navbar-expand-lg bg-body-tertiary py-2"
      data-bs-theme="light"
    >
      <div class="container py-1">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link text-uppercase" href="#info">INFORMAÇÕES</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-uppercase" href="#comodos">COMODOS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-uppercase" href="#medidas">MEDIDAS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-uppercase" href="#preco">PREÇO</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-uppercase" href="#caracteristicas"
                >CARACTERÍSTICAS</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link text-uppercase" href="#localizacao"
                >LOCALIZAÇÃO</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link text-uppercase" href="#proximidades"
                >PROXIMIDADES</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link text-uppercase" href="#complemento"
                >COMPLEMENTO</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="orange-range">
      <h2 class="text-title-h2-contact text-center text-light">
        <strong
          >EMPREENDIMENTO
          {{ imovel.publicacao.tarja_imovel_site_publi }}</strong
        >
      </h2>
    </div>

    <div class="capa">
      <div class="gradient-page-imovel">
        <div class="logo-area">
          <img
            class="logo-page"
            src="../../../../assets/images/logoEmpresa.jpg"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="green-range">
      <h2 class="text-title-h2-contact text-center text-light">
        <strong>{{ imovel.preco.tipo_negocio }}</strong>
      </h2>
    </div>

    <!-- Conteúdo do site -->
    <div class="px-4 px-md-0">
      <div class="container">
        <div class="row">
          <div class="col-12 mt-5">
            <h1 class="text-title text-center">
              <strong>{{ imovel.descricao.titulo }}</strong>
            </h1>
            <p class="text-title-subtitle text-center mt-2">
              {{ imovel.descricao.apresentacao }}
            </p>
          </div>
        </div>

        <div class="container">
          <div class="row g-2">
            <!-- Imagem Principal -->
            <div class="col-6">
              <div class="main-image-container" @click="openModal(0)">
                <img
                  :src="`https://zonu.com.br/api${imovel.fotos[0].foto}`"
                  :alt="`Foto Principal`"
                  class="img-fluid main-image"
                />
              </div>
            </div>

            <!-- Outras Imagens -->
            <div class="col-4">
              <div class="row">
                <div
                  v-for="(foto, index) in imovel.fotos.slice(1, 5)"
                  :key="foto.id_imagem"
                  class="col-6"
                >
                  <div
                    class="thumbnail-container"
                    @click="openModal(index + 1)"
                  >
                    <img
                      :src="`https://zonu.com.br/api${foto.foto}`"
                      :alt="`Foto${foto.id_imagem}`"
                      class="img-fluid thumbnail"
                    />
                    <!-- Sobreposição na Quinta Imagem -->
                    <div
                      v-if="index === 3"
                      class="overlay"
                      style="
                        display: flex;
                        align-items: center;
                        justify-content: center;
                      "
                    >
                      <p style="color: #fff; font-size: 20px">
                        +{{ imovel.fotos.length - 4 }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Modal para Zoom -->
            <div class="modal" v-if="showModal">
              <div class="modal-content">
                <button class="modal-close" @click.stop="closeModal">
                  &times;
                </button>
                <div class="modal-image-container">
                  <img :src="currentImage" alt="Zoom" class="modal-image" />
                </div>
                <div class="modal-thumbnails">
                  <div
                    v-for="(foto, index) in imovel.fotos"
                    :key="foto.id_imagem"
                    class="modal-thumbnail-container"
                  >
                    <img
                      :src="`https://zonu.com.br/api${foto.foto}`"
                      :alt="`Foto${foto.id_imagem}`"
                      class="img-fluid modal-thumbnail"
                      @click="changeImage(index)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Lightbox -->
        <!-- <div class="lightbox">
          <span class="close">&times;</span>
          <img src="" alt="" class="lightbox-img" />
        </div> -->

        <!-- Informações do Imóvel -->
        <div class="row" id="info">
          <div class="col container-box">
            <h2 class="text-title-h2 mt-5">
              <strong>INFORMAÇÕES DO IMÓVEL</strong>
            </h2>
            <p class="text-title-subtitle mt-2">
              Abaixo, você encontrará uma visão geral detalhada deste imóvel.
              Essas informações são projetadas para fornecer uma compreensão
              completa das características e especificações do imóvel, ajudando
              você a avaliar se ele atende às suas necessidades e expectativas
            </p>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Condomínio</strong></h4>
                <h2 class="">
                  <strong>{{ condominio }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Tipo do Imóvel</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.info.tipo }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Perfil do Imóvel</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.info.perfil_imovel }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Situação do Imóvel</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.info.situacao_imovel }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Ano da construção</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.info.ano_construcao }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Incorporação</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.info.incorporacao }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Posição Solar</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.info.posicao_solar }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Terreno</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.info.terreno }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Próximo do mar?</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.info.proximo_mar }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Está Averbado?</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.info.averbado }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Escriturado</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.info.escriturado }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>De esquina?</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.info.esquina }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Possue Mobília?</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.info.mobilia }}</strong>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <!-- Cômodos -->
        <div class="row" id="comodos">
          <div class="col container-box">
            <h2 class="text-title-h2 mt-5"><strong>Cômodos</strong></h2>
            <p class="text-title-subtitle mt-2">
              A seguir, apresentamos a quantidade de cômodos disponíveis neste
              imóvel. Esta informação proporciona uma visão geral da disposição
              e da funcionalidade dos espaços, ajudando você a ter uma ideia
              clara do layout do imóvel
            </p>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Dormitórios</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.comodos.dormitorio }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Suites</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.comodos.suite }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Banheiro</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.comodos.banheiro }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Garagem</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.comodos.garagem }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Possue Garem coberta?</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.comodos.garagem_coberta }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Tem box na garagem</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.comodos.garagem_box }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Sala de TV</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.comodos.sala_tv }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Sala de Jantar</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.comodos.sala_jantar }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Sala de estar</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.comodos.sala_estar }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Lavabo</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.comodos.lavabo }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Área de serviço</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.comodos.area_servico }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Cozinha</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.comodos.cozinha }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Closet</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.comodos.closet }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Escritório</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.comodos.escritorio }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Cômodos p/ empregados</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.comodos.casa_empregada }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Copa</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.comodos.copa }}</strong>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <!-- Medidas -->
        <div class="row" id="medidas">
          <div class="col container-box">
            <div class="row">
              <div class="col-12">
                <h2 class="text-title-h2 mt-5"><strong>Medidas</strong></h2>
                <p class="text-title-subtitle mt-2">
                  Aqui estão as principais medidas deste imóvel, fornecendo uma
                  visão clara das dimensões e da distribuição dos espaços
                </p>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Área construida</strong></h4>
                <h2 class="">
                  <strong
                    >{{
                      formatarDecimal(imovel.medidas.area_contruida)
                    }}
                    m2</strong
                  >
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Área Privativa</strong></h4>
                <h2 class="">
                  <strong
                    >{{
                      formatarDecimal(imovel.medidas.area_privativa)
                    }}
                    m2</strong
                  >
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Área Total</strong></h4>
                <h2 class="">
                  <strong
                    >{{ formatarDecimal(imovel.medidas.area_total) }} m2</strong
                  >
                </h2>
              </div>
            </div>
          </div>
        </div>

        <!-- Preço -->
        <div class="row" id="preco">
          <div class="col container-box">
            <div class="row">
              <div class="col-12">
                <h2 class="text-title-h2 mt-5"><strong>Preço</strong></h2>
                <p class="text-title-subtitle mt-2">
                  Nesta seção, apresentamos os preços relacionados a este
                  imóvel. As informações a seguir fornecem uma visão geral dos
                  valores envolvidos, ajudando você a avaliar o custo e a tomar
                  decisões informadas
                </p>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Valor do Imóvel</strong></h4>
                <h2 class="">
                  <strong
                    >R$ {{ formatarDecimal(imovel.preco.preco_imovel) }}</strong
                  >
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Valor IPTU</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.preco.preco_iptu }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Período</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.preco.periodo }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Valor do condomínio</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.preco.preco_condominio }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Está financiado?</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.preco.financiado }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Aceita financiamento?</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.preco.aceita_financiamento }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Minha casa Minha vida</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.preco.minhacasa_minhavida }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Valor total de taxas</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.preco.total_mensal_taxas }}</strong>
                </h2>
              </div>
            </div>

            <div class="box-alter">
              <div class="box-item">
                <h4 class=""><strong>Descrição das taxas</strong></h4>
                <h2 class="text-title-subtitle">
                  <strong>{{ imovel.preco.descricao_taxas }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Aceita Permuta?</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.preco.aceita_permuta }}</strong>
                </h2>
              </div>
            </div>

            <div class="box-alter">
              <div class="box-item">
                <h4 class=""><strong>Descrição das permutas</strong></h4>
                <h2 class="text-title-subtitle">
                  <strong>{{ imovel.preco.descricao_permuta }}</strong>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <!-- Característica -->
        <div class="row" id="caracteristicas">
          <div class="col container-box">
            <h2 class="text-title-h2 mt-5">
              <strong>CARACTERÍSTICAS DO IMÓVEL</strong>
            </h2>
            <p class="text-title-subtitle mt-2">
              A seguir, você encontrará as características adicionais deste
              imóvel. Essas informações destacam aspectos importantes e
              diferenciais que podem agregar valor e conforto ao seu dia a dia
            </p>

            <div
              class="box"
              v-for="caracteristica in imovel.caracteristicas"
              :key="caracteristica.id_caracteristica"
            >
              <div class="box-item">
                <div class="box-check">
                  <i class="fas fa-check"></i>
                  <h4 class="ms-2 text-title-check">
                    <strong>
                      {{
                        caracteristica.detalhesCaracteristica
                          ? caracteristica.detalhesCaracteristica
                              .nome_caracteristica
                          : null
                      }}
                    </strong>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Localização -->
        <div class="row" id="localizacao">
          <div class="col container-box">
            <h2 class="text-title-h2 mt-5"><strong>LOCALIZAÇÃO</strong></h2>
            <p class="text-title-subtitle mt-2">
              Conheça a localização deste imóvel e descubra as vantagens de
              viver em uma área estratégica e conveniente. A seção a seguir
              fornece uma visão geral da localização do imóvel
            </p>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>CEP</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.localizacao.cep }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>País</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.localizacao.pais }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Estado</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.localizacao.estado }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Cidade</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.localizacao.cidade }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Bairro</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.localizacao.bairro }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Logradouro</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.localizacao.logradouro }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Número</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.localizacao.numero }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Complemento</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.localizacao.complemento }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>ID da Unidade</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.localizacao.numero_unidade }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Andar</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.localizacao.andar }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Unidades por andar</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.localizacao.unidade_por_andar }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Total de andares</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.localizacao.total_andar }}</strong>
                </h2>
              </div>
            </div>

            <div class="box">
              <div class="box-item">
                <h4 class=""><strong>Total de torres</strong></h4>
                <h2 class="">
                  <strong>{{ imovel.localizacao.total_torres }}</strong>
                </h2>
              </div>
            </div>

            <div class="col-12 relative">
              <!-- <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29392.21038117975!2d-43.17517506523439!3d-22.94925859999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9980409039f845%3A0x8075d7bcdfbcb48c!2zUMOjbyBkZSBBw6fDumNhcg!5e0!3m2!1spt-BR!2sbr!4v1712992417057!5m2!1spt-BR!2sbr"
                class="map"
                style="border: 0; padding: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe> -->
              <div
                id="map"
                ref="mapElement"
                style="width: 100%; height: 330px; position: sticky"
              ></div>
            </div>

            <div class="col-12">
              <iframe
                :src="streetViewUrl"
                class="map"
                style="border: 0; padding: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <!-- Proximidades -->
        <div class="row" id="proximidades">
          <div class="col container-box">
            <h2 class="text-title-h2 mt-5"><strong>PROXIMIDADES</strong></h2>
            <p class="text-title-subtitle mt-2">
              Descubra as vantagens de viver próximo a uma variedade de serviços
              e amenidades. A seção a seguir destaca as principais atrações e
              facilidades nas proximidades deste imóvel
            </p>

            <div
              class="box"
              v-for="proximidade in imovel.proximidades"
              :key="proximidade.id_proximidade"
            >
              <div class="box-item">
                <div class="box-check">
                  <i class="fas fa-check"></i>
                  <h4 class="ms-2 text-title-check">
                    <strong>
                      {{
                        proximidade.detalhesProximidade
                          ? proximidade.detalhesProximidade.nome_proximidade
                          : null
                      }}
                    </strong>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Complementos -->
        <div class="row" id="complemento">
          <div class="col container-box">
            <h2 class="text-title-h2 mt-5"><strong>COMPLEMENTOS</strong></h2>
            <p class="text-title-subtitle mt-2">
              Para uma visão mais detalhada e completa deste imóvel, assista ao
              vídeo de apresentação abaixo. Este vídeo oferece um tour virtual,
              destacando os principais aspectos e características do imóvel, e
              ajudando você a visualizar melhor o espaço
            </p>
            <div class="box-video mx-auto" style="max-width: 100%">
              <iframe
                width="100%"
                height="300"
                :src="
                  imovel.complemento.link_youtube.replace('watch?v=', 'embed/')
                "
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <!-- <div class="box-video mx-auto" style="max-width: 100%;">
              <iframe
                width="100%"
                height="300"
                :src="imovel.complemento.link_youtube.replace('watch?v=', 'embed/')"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div> -->
            <span>
              <i class="fa fa-link"></i><a href="www.google.com">google.com</a>
            </span>
            <!-- <p>Link do video</p> -->
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid py-5 mt-5" style="background-color: #3d83b6">
      <div class="container px-4 px-md-0">
        <div class="row">
          <div class="col-12">
            <h2 class="text-title-h2-contact text-light">
              <strong>GOSTOU DESSE IMÓVEL?</strong>
            </h2>
            <p class="p-title-h2-contact text-light">
              QUER RECEBER INFORMAÇÕES DE OUTROS COMO ESTE?
            </p>

            <div class="row text-light mt-5">
              <div class="col-md-4">
                <label for="name" class="form-label">Deixe seu nome</label>
                <input type="text" class="form-control" name="name" />
              </div>
              <div class="col-md-4">
                <label for="email" class="form-label">Seu e-mail</label>
                <input type="text" class="form-control" name="email" />
              </div>
              <div class="col-md-4">
                <label for="telefone" class="form-label">Seu telefone</label>
                <input type="text" class="form-control" name="telefone" />
              </div>
              <div class="px-2 mt-3">
                <div class="px-1">
                  <button
                    type="submit"
                    class="btn col-12"
                    style="background-color: #f24e1e"
                  >
                    <h3 class="mt-2 text-light"><strong>ENVIAR</strong></h3>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="body" style="height: 100vh" v-if="link == false">
    <div class="d-flex justify-content-center align-items-center h-100">
      <div
        class="col-12 col-md-6 col-lg-4 card shadow-md p-4 text-center rounded"
      >
        <h2 class="text-title-h2 mb-4">
          <strong>Esse link já expirou</strong>
        </h2>
        <a href="/login" class="btn btn-primary">Voltar para o login</a>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "../../../components/sidebar/index.vue";
import Navbar from "../../../components/navbar/index.vue";
import Footer from "../../../components/footer/index.vue";
import api from "../../../../service/api/imoveis/index";
import apiRaiz from "../../../../service/api/index";
import apiUser from "../../../../service/api/usuarios/index";
import axios from "axios";

export default {
  name: "ImovelView",
  components: {
    Sidebar,
    Navbar,
    Footer,
  },
  data() {
    return {
      imovelId: null,
      donoId: null,
      imovel: {},

      condominio: "Sem condomínio",

      latitude: -15.7942,
      longitude: -47.8822,
      map: null,
      marker: null,

      showModal: false,
      currentImageIndex: 0,
      currentImage: "",

      link: true,
    };
  },

  mounted() {
    //Cola as funçoes aqui
    function myFunction() {}
    // scripts.js
    const thumbnails = document.querySelectorAll(".thumbnail");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn = document.querySelector(".close");

    // thumbnails.forEach((thumbnail) => {
    //   thumbnail.addEventListener("click", () => {
    //     const imgSrc = thumbnail.getAttribute("data-img");
    //     lightboxImg.src = imgSrc;
    //     lightbox.style.display = "flex";
    //   });
    // });

    // closeBtn.addEventListener("click", () => {
    //   lightbox.style.display = "none";
    // });

    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
          const targetPosition = target.getBoundingClientRect().top;
          const startPosition = window.pageYOffset;
          const distance = targetPosition - startPosition;
          const duration = 500; // Tempo em milissegundos, então 0.5 segundos é 500 milissegundos
          let start = null;

          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            window.scrollTo(
              0,
              easeInOutQuad(progress, startPosition, distance, duration)
            );
            if (progress < duration) {
              window.requestAnimationFrame(step);
            }
          };

          window.requestAnimationFrame(step);
        }
      });
    });

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    this.fetchCondominio();
    this.initMap();
  },

  created() {
    // this.imovelId = sessionStorage.getItem("imovelId");
    this.imovelId = this.propertyId = this.$route.query.id;
    this.donoId = this.propertyId = this.$route.query.idUser;
    // console.log(this.imovelId, this.donoId);
    const url = window.location.href;
    apiUser.meusLinks(this.donoId).then((res) => {
      // console.log(res);
      res.data.response.map((link) => {
        if (link.url == url) {
          console.log(link.url == url, link.url, url);
          if (link.ativo == true) {
            console.log("link ativo");
            this.link = true;
          } else {
            console.log("link inativo");
            this.link = false;
          }
        }
      });
    });
    this.fetchImovel();
  },

  computed: {
    streetViewUrl() {
      const apiKey = "AIzaSyC59bw9mWYet8FeTX0tZZdQ_FzBQUxaRjE";
      return `https://www.google.com/maps/embed/v1/streetview?key=${apiKey}&location=${this.latitude},${this.longitude}&heading=210&pitch=10&fov=100`;
    },

    // currentImage() {
    //   // console.log(this.imovel.fotos[this.currentImageIndex].foto);
    //   return `https://zonu.com.br/api${
    //     this.imovel.fotos[this.currentImageIndex].foto
    //   }`;
    // },
  },

  methods: {
    // openModal(index) {
    //   this.currentImageIndex = index; // Resetar para a primeira imagem ao abrir o modal
    //   this.showModal = true;
    // },
    openModal(index) {
      this.currentImage = `https://zonu.com.br/api${this.imovel.fotos[index].foto}`;
      this.showModal = true;
    },

    // Método para mudar a imagem no modal
    changeImage(index) {
      this.currentImage = `https://zonu.com.br/api${this.imovel.fotos[index].foto}`;
    },
    closeModal() {
      this.showModal = false;
    },
    // changeImage(index) {
    //   this.currentImageIndex = index;
    // },

    fetchImovel() {
      api.obterImovel(this.imovelId).then((res) => {
        this.imovel = res.data;
      });
    },

    fetchCondominio() {
      apiRaiz.listAllcondominio().then((res) => {
        res.data.response.map((cond) => {
          if (cond.id_condominio !== 1) {
            if (cond.id_condominio === this.imovel.id_condominio) {
              this.condominio = cond.nome_condominio;
            } else {
              return;
            }
          }
        });
      });
    },

    initMap() {
      this.buscarCoordenadas(
        this.imovel.localizacao.cep,
        this.imovel.localizacao.logradouro,
        this.imovel.localizacao.cidade,
        this.imovel.localizacao.estado,
        this.imovel.localizacao.bairro,
        this.imovel.localizacao.numero
      ).then(() => {
        this.map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: this.latitude, lng: this.longitude },
          zoom: 19,
        });

        this.addMarker();
      });
    },

    addMarker() {
      const lat = this.latitude;
      const lng = this.longitude;

      if (!isNaN(lat) && !isNaN(lng)) {
        const customIcon = {
          url: "https://zonu.com.br/emailmkt/IconLocationMaps.png", // Caminho para o ícone personalizado
          scaledSize: new google.maps.Size(38, 38), // Ajuste o tamanho do ícone conforme necessário
          anchor: new google.maps.Point(19, 38), // Ajuste a âncora do ícone conforme necessário
        };

        const markers = new google.maps.Marker({
          position: { lat: lat, lng: lng },
          map: this.map,
          icon: customIcon,
        });

        const infowindow = new google.maps.InfoWindow({
          content: `Latitude: ${lat}, Longitude: ${lng}`,
        });

        markers.addListener("click", () => {
          infowindow.open(this.map, markers);
        });

        this.marker = markers;
      } else {
        console.error("Coordenadas inválidas");
      }
    },

    async buscarCoordenadas(cep, rua, cidade, estado, bairro, numero) {
      const apiKey = "AIzaSyC59bw9mWYet8FeTX0tZZdQ_FzBQUxaRjE";
      // console.log(cep, rua, cidade, estado, bairro, numero)

      try {
        const res = await axios.get(
          "https://maps.googleapis.com/maps/api/geocode/json",
          {
            params: {
              address: `${rua}, ${numero}, ${cidade}, ${estado}, ${cep}`,
              key: apiKey,
            },
          }
        );

        if (res.data && res.data.results && res.data.results.length > 0) {
          const location = res.data.results[0].geometry.location;
          const latitude = location.lat;
          const longitude = location.lng;

          this.latitude = latitude;
          this.longitude = longitude;

          return { latitude, longitude };
        } else {
          console.error("Coordenadas não encontradas para o CEP informado.");
          return null;
        }
      } catch (error) {
        console.error("Erro ao buscar coordenadas:", error);
        return null;
      }
    },
    formatarDecimal(valor) {
      let valorNumerico = valor.replace(/\D/g, "");
      valorNumerico = (valorNumerico / 100).toFixed(2).replace(".", ",");
      return valorNumerico.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>
<style scoped>
/* Estilo das imagens principais */
.main-image-container {
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem; /* Cantos arredondados */
  cursor: pointer;
}

.main-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0.5rem; /* Cantos arredondados */
}

/* Container das Miniaturas */
.thumbnail-container {
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem; /* Cantos arredondados */
}

.thumbnail {
  width: 100%;
  height: auto;
  object-fit: cover; /* Ajusta a imagem para cobrir o contêiner */
  border-radius: 0.5rem; /* Cantos arredondados */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transição suave */
}

/* Sobreposição da Quinta Imagem */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* Sobreposição preta com opacidade */
  z-index: 1;
}

/* Efeito ao Passar o Mouse nas Miniaturas */
.thumbnail:hover {
  transform: scale(1.1); /* Aumenta a imagem ao passar o mouse */
  z-index: 2; /* Garante que a imagem em zoom fique acima da sobreposição */
}

/* Modal para Zoom */
.modal {
  display: flex;
  position: fixed;
  top: -8px;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Fundo preto com opacidade */
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  width: 90%;
  height: 90%;
  background: rgba(0, 0, 0, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 0.5rem;
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #fff;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
}

.modal-image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-image {
  width: 100%;
  height: 300px;
  border-radius: 0.5rem;
}

.modal-thumbnails {
  display: flex;
  justify-content: center;
  /* overflow-x: auto; */
  padding: 10px;
}

.modal-thumbnail-container {
  margin: 0 5px;
}

.modal-thumbnail {
  width: 120px;
  height: auto;
  object-fit: cover;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.modal-thumbnail:hover {
  transform: scale(1.1);
}
</style>
