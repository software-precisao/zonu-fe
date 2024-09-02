<template>
  <div class="main">
    <navbarImobiliaria />
    <main class="">
      <div class="" style="display: flex; flex-direction: row">
        <!-- Sidebar com opções e ícones -->
        <sidebarCrm tab="Visão geral" />
        <!-- Dashboard -->
        <div class="" style="width: 81%">
          <header class="pe-3 ps-3" style="
              background-color: #fff;
              height: 60px;
              width: 100%;
              border-bottom: 1px solid #d3d3d3;
              display: flex;
              align-items: center;
              justify-content: space-between;
            ">
            <div class="skeleton-title" style=" margin-bottom: 0 !important" v-if="!mostrarSkeleton"></div>
            <h4 class="fw-semibold mt-2" v-if="mostrarSkeleton" style="font-size: 13px">
              Visão geral
            </h4>
            <div style="display: flex; align-items: center">
              <input style="height: 30px; font-size: 13px; font-weight: 600; border: none; margin-bottom: 0 !important"
                class="skeleton-input" v-if="!mostrarSkeleton"></input>
              <select class="form-select" v-if="mostrarSkeleton" @change="filtrarEtapasFunil" v-model="funilSelect"
                style="height: 30px; font-size: 13px; font-weight: 600">
                <option :value="`${funil.id_funil}`" style="font-weight: 600" v-for="funil in funis"
                  v-if="funis.length > 0">
                  {{ funil.nome_funil }} ({{ funil.qtdNegoicos || 0 }} negócios)
                </option>
              </select>

              <button class="btn btn-oranges ms-2" style="display: flex; align-items: center; height: 30px"
                @click="openModal">
                <i class="align-middle" data-feather="plus"></i>
                <span style="margin-left: 3px">Negócio</span>
              </button>
              <button class="btn btn-blues ms-2" style="display: flex; align-items: center; height: 30px"
                @click="openModalClient">
                <i class="align-middle" data-feather="plus"></i>
                <span style="margin-left: 3px">Clientes</span>
              </button>
              <button class="btn btn-white ms-2" style="display: flex; align-items: center; height: 30px"
                @click="exportarExcel">
                <i class="align-middle" data-feather="file-plus"></i>
                <span style="margin-left: 3px">Exportar</span>
              </button>
              <a class="btn btn-white ms-2" style="display: flex; align-items: center; height: 30px"
                href="/seu-crmconfig">
                <i class="align-middle" data-feather="settings"></i>
              </a>
            </div>
          </header>
          <div class="mt-4">
            <div class="row justify-content-center">
              <!-- Card 1 -->
              <div class="col-10 mb-3">
                <div class="card" v-if="disableAjuda" style="
                    position: relative;
                    border: 1px solid rgb(211, 220, 235);
                  ">
                  <div style="
                      position: absolute;
                      bottom: 95%;
                      left: 98.5%;
                      width: 30px;
                      height: 30px;
                      background-color: rgb(255, 255, 255);
                      border: 1px solid rgb(211, 220, 235);
                      border-radius: 100%;
                      display: grid;
                      place-items: center;
                      cursor: pointer;
                    ">
                    <i class="align-middle" data-feather="x"></i>
                  </div>
                  <div class="d-flex">
                    <!-- Barra lateral dentro do card -->
                    <div class="" style="
                        background-color: rgb(130, 90, 220);
                        width: 15%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        color: #fff;
                        border-top-left-radius: 5px;
                        border-bottom-left-radius: 5px;
                      ">
                      <i class="align-middle" style="width: 60%; height: 60%" data-feather="help-circle"></i>
                      <span class="mt-1" style="font-weight: 800">Ajuda</span>
                    </div>
                    <!-- Conteúdo do card -->
                    <div class="card-body flex-fill ms-3">
                      <h5 class="card-title" style="color: #000; font-size: 16px; font-weight: 500">
                        Precisa de ajuda?
                      </h5>
                      <p class="card-text" style="color: #000; font-size: 13.5px; font-weight: 400">
                        Separamos alguns tópicos desta área
                      </p>
                      <div style="display: flex; flex-direction: column">
                        <div style="display: flex">
                          <img :src="youtubeLogo" style="width: 20px; height: 20px" />

                          <a href="#" style="
                              text-decoration: none;
                              color: rgb(23, 110, 200);
                              font-size: 13.5px;
                              font-weight: 500;
                            " class="ms-2">Adicionar negócio ao CRM</a>
                        </div>
                      </div>
                      <div style="display: flex; flex-direction: column" class="mt-1">
                        <div style="display: flex">
                          <img :src="youtubeLogo" style="width: 20px; height: 20px" />

                          <a href="#" style="
                              text-decoration: none;
                              color: rgb(23, 110, 200);
                              font-size: 13.5px;
                              font-weight: 500;
                            " class="ms-2">Criar Funil</a>
                        </div>
                      </div>
                      <div style="display: flex; flex-direction: column" class="mt-1">
                        <div style="display: flex">
                          <img :src="youtubeLogo" style="width: 20px; height: 20px" />

                          <a href="#" style="
                              text-decoration: none;
                              color: rgb(23, 110, 200);
                              font-size: 13.5px;
                              font-weight: 500;
                            " class="ms-2">Editar Funil</a>
                        </div>
                      </div>
                      <div style="display: flex; flex-direction: column" class="mt-1">
                        <div style="display: flex">
                          <img :src="youtubeLogo" style="width: 20px; height: 20px" />

                          <a href="#" style="
                              text-decoration: none;
                              color: rgb(23, 110, 200);
                              font-size: 13.5px;
                              font-weight: 500;
                            " class="ms-2">Radar de oportunidades</a>
                        </div>
                      </div>
                      <div style="display: flex; flex-direction: column" class="mt-1">
                        <div style="display: flex">
                          <img :src="youtubeLogo" style="width: 20px; height: 20px" />

                          <a href="#" style="
                              text-decoration: none;
                              color: rgb(23, 110, 200);
                              font-size: 13.5px;
                              font-weight: 500;
                            " class="ms-2">Distribuição padrão de funil por negócio</a>
                        </div>
                      </div>
                      <div style="
                          display: flex;
                          flex-direction: column;
                          margin-left: -6px;
                        " class="mt-3">
                        <a href="#" style="
                            text-decoration: none;
                            color: rgb(23, 110, 200);
                            font-size: 13px;
                            font-weight: 500;
                            display: flex;
                          " class="ms-2"><span style="color: #000">Acessar</span> &nbsp;
                          Central de ajuda</a>
                      </div>
                    </div>
                    <div class="me-3 mt-3">
                      <h5 class="card-title" style="color: #000; font-size: 16px; font-weight: 500">
                        Vídeo demonstrativo
                      </h5>
                      <div style="
                          position: relative;
                          width: 240px;
                          height: 135px;
                          cursor: pointer;
                        ">
                        <img src="https://img.youtube.com/vi/8DX7mudPCNs/0.jpg" style="
                            width: inherit;
                            height: inherit;
                            object-fit: cover;
                            border-radius: 4px;
                          " />
                        <img :src="youtubeLogo" style="
                            position: absolute;
                            top: 49%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            height: 50px;
                            width: 50px;
                          " />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="skeleton-big-card" v-if="!mostrarSkeleton"></div>
                <div class="card pe-4 ps-4 pt-4" v-if="mostrarSkeleton" style="border: 1px solid rgb(211, 220, 235)">
                  <h2 class="mb-0" style="
                      font-size: 14px;
                      color: rgb(33, 35, 44);
                      font-weight: 900;
                    ">
                    Etapas do Funil
                  </h2>
                  <p class="mb-4" style="
                      font-size: 14px;
                      line-height: 21px;
                      color: rgb(33, 35, 44);
                      font-weight: 400;
                    ">
                    Quantidade de negócios e VGV por etapa
                  </p>

                  <div class="container">
                    <div class="row">
                      <div class="col-lg-6 mb-4">
                        <!-- {{ console.log(funis) }} -->
                        <div class="mb-2" v-for="(etapa, index) in etapasDoFunil" :key="etapa.nome_etapa">
                          <div class="card-body d-flex justify-content-between align-items-center" :style="{
                            width: `${100 - index * 2}%`,
                            backgroundColor: calculateBarColor(index),
                            color: '#fff',
                            borderRadius: '10px',
                            height: '62px',
                          }">
                            <div>
                              <h6 class="mb-0" style="color: #fff">
                                {{ etapa.nome_etapa }}
                              </h6>
                            </div>
                            <div class="text-end">
                              <h5 style="color: #fff">{{ etapa.qtdNegoicos || 0 }}</h5>
                              <p class="mb-0">
                                R$ {{ calcularSomaPrecoImoveis(etapa) }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Coluna para o gráfico de clientes, estagnados e imóveis -->
                      <div class="col-lg-5" style="margin-left: 60px">
                        <!-- Adicione aqui o gráfico de pizza e os dados dos clientes, estagnados e imóveis -->
                        <div class="row mb-4">
                          <div class="" style="
                              width: 28%;
                              padding: 10px;
                              border-left: 4px solid rgb(0, 99, 192);
                              box-shadow: rgba(0, 0, 0, 0.05) 1px 2px 5px;
                              height: 70px;
                              margin-right: 10px;
                            ">
                            <h2 style="font-size: 14px; color: rgb(92, 82, 96)">
                              Clientes
                            </h2>
                            <p style="
                                font-size: 24px;
                                font-weight: bold;
                                text-align: right;
                              ">
                              {{ contarClientesUnicos.length }}
                            </p>
                          </div>
                          <div class="col-4" style="
                              width: 28%;
                              padding: 10px;
                              border-left: 4px solid rgb(248, 67, 67);
                              box-shadow: rgba(0, 0, 0, 0.05) 1px 2px 5px;
                              height: 70px;
                              margin-right: 10px;
                            ">
                            <h2 style="font-size: 14px; color: rgb(92, 82, 96)">
                              Estagnados
                            </h2>
                            <p style="
                                font-size: 24px;
                                font-weight: bold;
                                text-align: right;
                              ">
                              0
                            </p>
                          </div>
                          <div class="col-4" style="
                              width: 28%;
                              padding: 10px;
                              border-left: 4px solid rgb(0, 99, 192);
                              box-shadow: rgba(0, 0, 0, 0.05) 1px 2px 5px;
                              height: 70px;
                            ">
                            <h2 style="font-size: 14px; color: rgb(92, 82, 96)">
                              Imóveis
                            </h2>
                            <p style="
                                font-size: 24px;
                                font-weight: bold;
                                text-align: right;
                              ">
                              {{ imoveisUnicos }}
                            </p>
                          </div>
                        </div>
                        <div>
                          <h2 class="mb-0" style="
                              font-size: 14px;
                              color: rgb(33, 35, 44);
                              font-weight: 900;
                            ">
                            Canal de origem dos clientes
                          </h2>
                          <p class="mb-4" style="
                              font-size: 14px;
                              line-height: 21px;
                              color: rgb(33, 35, 44);
                              font-weight: 400;
                            ">
                            Distribuição por canal
                          </p>
                          <div class="w-52">
                            <graphAtivCrmComp :idFunil="contarClientesUnicos" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- <div class="card mb-2" style="
                    background: rgb(237, 238, 242);
                    padding: 5px 15px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                  ">
                  <h2 style="font-size: 14px; font-weight: 600">
                    Análise de resultado por período
                  </h2>
                  <div class="" style="
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                    ">
                    <div class="">
                      <input id="start_date" type="text" class="formControl" placeholder="DD/MM/AAAA" name="start_date"
                        v-model="formattedStartDate" @input="onInput" maxlength="10" style="
                          height: 45px;
                          width: 130px;
                          padding-left: 8px;
                          border: solid #d3d3d3 1px;
                          border-radius: 5px;
                          font-size: 1em;
                          font-weight: 500;
                        " />
                    </div>
                    <div class="" style="
                        width: 15px;
                        background-color: #d3dceb;
                        height: 1px;
                      "></div>
                    <div class="">
                      <input id="end_date" type="tex" class="formControl" v-model="formattedEndDate"
                        @input="onEndDateInput" maxlength="10" placeholder="DD/MM/AAAA" name="end_date" style="
                          height: 45px;
                          width: 130px;
                          padding-left: 8px;
                          border: solid #d3d3d3 1px;
                          border-radius: 5px;
                          font-size: 1em;
                          font-weight: 500;
                        " />
                    </div>
                  </div>
                </div> -->

                <!-- <div class="" style="
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                  ">
                  <div class="skeleton-big-card" v-if="!mostrarSkeleton"
                    style="width: 49% !important; height: 80px !important;">
                  </div>
                  <div class="card" v-if="mostrarSkeleton" style="
                      width: 49%;
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: space-around;
                      padding: 20px 10px;
                      border-left: 3px solid rgb(0, 99, 192);
                    ">
                    <h2 style="font-size: 24px; color: rgb(92, 82, 96)">
                      Negócios
                    </h2>
                    <div style="
                        display: flex;
                        flex-direction: column;
                        align-items: left;
                      ">
                      <h3 style="
                          margin: 0;
                          padding: 0;
                          font-size: 16px;
                          color: rgb(92, 82, 96);
                          font-weight: 600;
                        ">
                        Iniciados
                      </h3>
                      <p style="
                          margin: 0;
                          padding: 0;
                          font-size: 22px;
                          font-weight: 600;
                        ">
                        {{ qtdNegoicos }}
                      </p>
                    </div>
                    <div>
                      <h3 style="
                          margin: 0;
                          padding: 0;
                          font-size: 16px;
                          color: rgb(92, 82, 96);
                          font-weight: 600;
                        ">
                        Ganhos
                      </h3>
                      <p style="
                          margin: 0;
                          padding: 0;
                          font-size: 22px;
                          font-weight: 600;
                        ">
                        0
                      </p>
                    </div>
                    <div>
                      <h3 style="
                          margin: 0;
                          padding: 0;
                          font-size: 16px;
                          color: rgb(92, 82, 96);
                          font-weight: 600;
                        ">
                        Perdidos
                      </h3>
                      <p style="
                          margin: 0;
                          padding: 0;
                          font-size: 20px;
                          font-weight: 600;
                        ">
                        0
                      </p>
                    </div>
                  </div>

                  <div class="skeleton-big-card" v-if="!mostrarSkeleton"
                    style="width: 49% !important; height: 80px !important;"></div>
                  <div class="card" v-if="mostrarSkeleton" style="
                      width: 49%;
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: space-around;
                      padding: 10px;
                      border-left: 3px solid rgb(0, 99, 192);
                    ">
                    <h2 style="font-size: 24px; color: rgb(92, 82, 96)">
                      Clientes
                    </h2>
                    <div style="
                        display: flex;
                        flex-direction: column;
                        align-items: left;
                      ">
                      <h3 style="
                          margin: 0;
                          padding: 0;
                          font-size: 16px;
                          color: rgb(92, 82, 96);
                          font-weight: 600;
                        ">
                        Iniciados
                      </h3>
                      <p style="
                          margin: 0;
                          padding: 0;
                          font-size: 22px;
                          font-weight: 600;
                        ">
                        {{ contarClientesUnicos.length }}
                      </p>
                    </div>
                    <div>
                      <h3 style="
                          margin: 0;
                          padding: 0;
                          font-size: 16px;
                          color: rgb(92, 82, 96);
                          font-weight: 600;
                        ">
                        Ganhos
                      </h3>
                      <p style="
                          margin: 0;
                          padding: 0;
                          font-size: 22px;
                          font-weight: 600;
                        ">
                        0
                      </p>
                    </div>
                    <div>
                      <h3 style="
                          margin: 0;
                          padding: 0;
                          font-size: 16px;
                          color: rgb(92, 82, 96);
                          font-weight: 600;
                        ">
                        Perdidos
                      </h3>
                      <p style="
                          margin: 0;
                          padding: 0;
                          font-size: 20px;
                          font-weight: 600;
                        ">
                        0
                      </p>
                    </div>
                  </div>
                </div> -->

                <!-- <div class="skeleton-big-card" v-if="!mostrarSkeleton"></div> -->
                <!-- <div class="card pe-4 ps-4 pt-4">
                  <h2 class="mb-0" style="
                      font-size: 14px;
                      color: rgb(33, 35, 44);
                      font-weight: 900;
                    ">
                    Negócios Perdidos por Etapa
                  </h2>
                  <p class="mb-0" style="
                      font-size: 14px;
                      line-height: 21px;
                      color: rgb(33, 35, 44);
                      font-weight: 400;
                    ">
                    Análise de percentual de perdas em cada etapa
                  </p>
                  <div :style="mostrarSkeleton == false ? 'visibility: hidden' : 'visibility: visible'">
                    <graphBarAtivCrmComp :idFunil="funilSelecionado" />
                  </div>
                </div>
                <div class="card pe-4 ps-4 pt-4">
                  <h2 class="mb-0" style="
                      font-size: 14px;
                      color: rgb(33, 35, 44);
                      font-weight: 900;
                    ">
                    Principais motivos de perda
                  </h2>
                  <p class="mb-0" style="
                      font-size: 14px;
                      line-height: 21px;
                      color: rgb(33, 35, 44);
                      font-weight: 400;
                    ">
                    Contabilizado por motivo
                  </p>
                  <div :style="mostrarSkeleton == false ? 'visibility: hidden' : 'visibility: visible'">
                    <graphBarLaterCrmComp :idFunil="funilSelecionado" />
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </div>

        <!-- modal criar negocio -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
          aria-hidden="true" ref="myModal">
          <div class="modal-dialog" style="padding-top: 80px" role="document">
            <div class="modal-content">
              <div class="modal-header" style="
                  display: flex;
                  flex-direction: column;
                  width: 100%;
                  align-items: flex-start;
                ">
                <div v-if="msgNegocioSuccess" class="alert alert-success" role="alert" style="width: 100%">
                  Negócio Criado com sucesso
                </div>
                <div v-if="msgNegocioError" class="alert alert-danger" role="alert" style="width: 100%">
                  Falha ao criar o negócio
                </div>
                <div v-if="msgNegocioErrorSemCampos" class="alert alert-danger" role="alert" style="width: 100%">
                  Preencha todos os campos!
                </div>
                <h5 class="modal-title" id="exampleModalLabel">
                  Adicionar Negócio
                </h5>
                <button type="button" class="close custom-close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <!-- Conteúdo do modal -->
                <h4 style="font-size: 13px; font-weight: 500">
                  Para adicionar um negócio manualmente ao CRM, preencha os
                  campos:
                </h4>

                <div class="row">
                  <div class="form-group mt-3 col-6">
                    <label for="selectContato" style="font-weight: 600">Posição</label>
                    <select class="form-control" v-model="posicao" id="selectContato" style="height: 40px !important">
                      <option value="" disabled selected hidden>
                        Selecione uma opção
                      </option>
                      <option v-for="item in posicoes" :value="item.nome_etapa">
                        {{ item.nome_etapa }}
                      </option>
                    </select>
                  </div>

                  <!-- Campo Nível de Interesse -->
                  <div class="form-group mt-3 col-6">
                    <label for="nivelInteresse" style="font-weight: 600">Nível de interesse</label>
                    <div class="nivel-interesse">
                      <button v-for="nivel in 5" :key="nivel" type="button" class="nivel-btn"
                        :class="{ active: nivelInteresse >= nivel }" @click="nivelInteresse = nivel">
                        {{ nivel }}
                      </button>
                      <div class="nivel-linha"></div>
                    </div>
                  </div>
                </div>

                <!-- campo de cliente -->
                <div class="form-group mt-3 col-12">
                  <label for="client" style="font-weight: 600">Cliente</label>
                  <div class="custom-select" ref="selectContainer">
                    <div class="select-box" @click="toggleDropdown" :aria-expanded="isOpen.toString()" role="button"
                      tabindex="0">
                      <span v-if="selectedOption">{{
                        selectedOption.nome
                      }}</span>
                      <span v-else>Selecione um cliente</span>
                      <i class="align-middle" data-feather="chevron-down"></i>
                    </div>
                    <ul v-if="isOpen" class="options-list">
                      <li @click="openModalClient" style="background-color: #f1f4f9">
                        <button class="btn" style="
                            color: #026da6;
                            display: flex;
                            align-items: center;
                            font-weight: 600;
                          ">
                          <img :src="plusCircle" style="width: 12px; height: 12px; margin-right: 6px" />Adicionar
                        </button>
                      </li>
                      <li v-for="client in allClientes" :key="client.id_cliente" @click="selectOption(client)">
                        <div style="display: flex; flex-direction: column">
                          <span>{{ client.nome }}
                            <img :src="userIcon" style="
                                width: 12px;
                                height: 12px;
                                margin-bottom: 2px;
                                margin-left: 2px;
                              " />
                          </span>
                          <!-- <span class="">(99) 99999-9999</span> -->
                          <span class="">{{ client.telefone_1 }}</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- campo de enconte um imovel -->
                <div class="form-group mt-3 col-12">
                  <label for="client" style="font-weight: 600">Encontre o imóvel</label>
                  <div class="custom-select" ref="selectContainerImovel">
                    <div class="select-box" @click="toggleDropdownImovel" :aria-expanded="isOpenImovel.toString()"
                      role="button" tabindex="0">
                      <span v-if="selectedOptionImovel">{{
                        selectedOptionImovel.descricao.titulo
                      }}</span>
                      <span v-else>Procure por endereço ou nome do condomínio</span>
                      <i class="align-middle" data-feather="chevron-down"></i>
                    </div>
                    <ul v-if="isOpenImovel" class="options-list">
                      <li v-for="item in imovel" :key="item.id_imovel" @click="selectOptionImovel(item)">
                        <div style="display: flex">
                          <img :src="`https://zonu.com.br/api${item.fotos[0].foto}`" style="
                              width: 70px;
                              height: 70px;
                              border-radius: 10px;
                              margin-top: 3px;
                              margin-right: 8px;
                            " />
                          <div style="
                              display: flex;
                              flex-direction: column;
                              justify-content: center;
                            ">
                            <h2 style="
                                margin: 0;
                                padding: 0;
                                font-size: 14px;
                                font-weight: 600;
                              ">
                              {{ item.descricao.titulo }}
                            </h2>
                            <p style="
                                margin: 0;
                                padding: 0;
                                font-size: 14px;
                                font-weight: 500;
                                color: #31d084;
                              ">
                              R${{
                                aplicaMascaraDinheiroPrecoImovel(
                                  item.preco.preco_imovel
                                )
                              }}
                            </p>
                            <p style="
                                margin: 0;
                                padding: 0;
                                font-size: 14px;
                                font-weight: 400;
                              ">
                              <!-- {{ console.log(item) }} -->
                              {{ item.localizacao.bairro }} - {{ item.localizacao.cidade }}/{{ item.localizacao.estado
                              }}
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="modal-footer" style="display: flex; justify-content: space-between">
                <button type="button" class="btn btnModal" style="
                    padding: 10px 15px;
                    border: 1px solid #d3dceb;
                    background-color: #fff;
                    color: #1c0c1e;
                    box-shadow: 0 0 5px rgba(211, 220, 235, 0.6);
                    font-size: 1em;
                    font-weight: 600;
                    cursor: pointer;
                  " data-bs-dismiss="modal">
                  Cancelar
                </button>
                <button type="button" class="btn btnModal2" style="
                    padding: 10px 15px;
                    border: 1px solid #d3dceb;
                    color: #fff;
                    background-color: #31d084;
                    box-shadow: 0 0 5px rgba(49, 208, 132, 0.6),
                      inset 0 0 1px rgba(0, 0, 0, 0.6);
                    font-size: 1em;
                    font-weight: 600;
                    cursor: pointer;
                  " @click="cadastraNegocio">
                  {{ textAddNegocio }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- modal para criar cliente -->
        <div class="modal fade" id="myModalClient" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
          aria-hidden="true" ref="myModalClient">
          <div class="modal-dialog" style="max-width: 600px !important; padding-top: 40px" role="document">
            <div class="modal-content">
              <div class="modal-header" style="
                  display: flex;
                  flex-direction: column;
                  width: 100%;
                  align-items: flex-start;
                ">
                <div v-if="msgClienteSuccess" class="alert alert-success" role="alert" style="width: 100%">
                  Cliente Criado com sucesso
                </div>
                <div v-if="msgClienteError" class="alert alert-danger" role="alert" style="width: 100%">
                  Falha ao criar o cliente
                </div>
                <div v-if="msgClienteErrorSemCampos" class="alert alert-danger" role="alert" style="width: 100%">
                  Preencha os campos obrigatórios!
                </div>
                <h5 class="modal-title" id="exampleModalLabel">
                  Cadastrar Cliente
                </h5>
                <button type="button" class="close custom-close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div class="modal-body" style="padding: 0 0">
                <div class="row">
                  <!-- Esquerda: Inputs e Selects com linha divisória -->
                  <div class="col-6" style="
                      border-right: 1px solid #ced4da;
                      padding-right: 15px;
                      padding-left: 25px;
                      padding-top: 20px;
                      padding-bottom: 20px;
                    ">
                    <div class="form-group">
                      <label for="nome" style="font-size: 14px; font-weight: 600">Nome</label><strong
                        class="text-danger">*</strong>
                      <input type="text" class="form-control" id="nome" v-model="nome" placeholder="Digite..."
                        style="height: 40px" />
                    </div>

                    <div class="form-group mt-3">
                      <label for="email" style="font-size: 14px; font-weight: 600">Email</label>
                      <input type="email" class="form-control" id="email" v-model="email" placeholder="Digite..."
                        style="height: 40px" />
                    </div>

                    <div class="form-group mt-3">
                      <label for="dataNascimento" style="font-size: 14px; font-weight: 600">Data de Nascimento</label>
                      <input type="text" class="form-control" id="dataNascimento" v-model="dataNascimento"
                        placeholder="Digite..." style="height: 40px" @input="validateDate" />
                    </div>

                    <div class="form-group mt-3">
                      <label for="categoria" style="font-size: 14px; font-weight: 600">Categoria</label><strong
                        class="text-danger">*</strong>
                      <select class="form-floating" id="categoria" v-model="categoria" style="
                          height: 40px;
                          border: 1px solid #dee2e6;
                          width: 100%;
                          padding-left: 8px;
                        ">
                        <option value="" disabled selected hidden>
                          Selecione
                        </option>
                        <option v-for="item in allCategorias" :value="item.categoria_cliente">
                          {{ item.categoria_cliente }}
                        </option>
                      </select>
                    </div>

                    <div class="form-group mt-3">
                      <label for="origemCaptacao" style="font-size: 14px; font-weight: 600">Origem de
                        Captação</label><strong class="text-danger">*</strong>
                      <select class="form-floating" id="origemCaptacao" v-model="origemCaptacao" style="
                          height: 40px;
                          border: 1px solid #dee2e6;
                          width: 100%;
                          padding-left: 8px;
                        ">
                        <option value="" disabled selected hidden>
                          Selecione
                        </option>
                        <option v-for="item in allOrigensCapitacao" :value="item.origem_captacao">
                          {{ item.origem_captacao }}
                        </option>
                      </select>
                    </div>

                    <div class="mt-4" style="
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                      ">
                      <a @click="openThirdModal" style="
                          text-decoration: underline;
                          color: rgb(0, 132, 244);
                        ">Ver cadastro completo</a>
                    </div>
                  </div>

                  <!-- Direita: Select Corretor, Títulos e Botão -->
                  <div class="col-6" style="
                      padding-top: 20px;
                      padding-bottom: 20px;
                      padding-right: 12px;
                      padding-left: 0;
                    ">
                    <div class="form-group" style="
                        border-bottom: 1px solid #dee2e6;
                        padding-right: 15px;
                        padding-left: 15px;
                        padding-bottom: 20px;
                      ">
                      <label for="corretorResponsavel" style="font-size: 14px; font-weight: 600">Corretor
                        Responsável</label>
                      <select class="form-floating" id="corretorResponsavel" v-model="corretorResponsavel" style="
                          height: 40px;
                          border: 1px solid #dee2e6;
                          width: 100%;
                          padding-left: 8px;
                        ">
                        <option value="" disabled hidden>Selecione</option>
                        <option :value="`${userName} ${userSobrenome}`">
                          {{ userName }} {{ userSobrenome }}
                        </option>
                      </select>
                    </div>

                    <div class="mt-4" style="padding-left: 15px">
                      <h5 style="font-size: 14px; font-weight: 600">
                        Telefones
                      </h5>
                      <p v-if="alltelefones.length == 0" class="text-muted" style="
                          font-size: 12px;
                          font-weight: 500;
                          margin-bottom: 5px;
                        ">
                        Você ainda não cadastrou nenhum telefone.
                      </p>
                      <div v-if="alltelefones.length > 0" v-for="(item, index) in alltelefones" style="display: flex; 
                        justify-content: space-between; 
                        align-items: center;
                        padding: 0 10px; 
                        margin-bottom: 1rem; 
                        margin-top: 1rem;">
                        <h2 style="font-size: 13px; font-weight: 500">
                          {{ item.NumTelefone }} ({{ item.Descricao }})
                        </h2>
                        <img style="width: 14px; height: 14px; margin-bottom: 10px; cursor: pointer"
                          @click="handleDelete(index)" :src="trashIcon"></img>
                      </div>
                      <button v-if="alltelefones.length < 2" type="button " class="btn btnModal"
                        @click="openSecondModal" style="
                          padding: 5px 15px;
                          border: 1px solid #d3dceb;
                          background-color: #fff;
                          color: #1c0c1e;
                          box-shadow: 0 0 5px rgba(211, 220, 235, 0.6);
                          font-size: 0.9em;
                          font-weight: 600;
                          cursor: pointer;
                        ">
                        Adicionar telefones
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal-footer" style="display: flex; justify-content: space-between">
                <button type="button" class="btn btnModal" style="
                    padding: 10px 15px;
                    border: 1px solid #d3dceb;
                    background-color: #fff;
                    color: #1c0c1e;
                    box-shadow: 0 0 5px rgba(211, 220, 235, 0.6);
                    font-size: 1em;
                    font-weight: 600;
                    cursor: pointer;
                  " data-bs-dismiss="modal">
                  Cancelar
                </button>
                <button type="button" class="btn btnModal2" style="
                    padding: 10px 15px;
                    border: 1px solid #d3dceb;
                    color: #fff;
                    background-color: #31d084;
                    box-shadow: 0 0 5px rgba(49, 208, 132, 0.6),
                      inset 0 0 1px rgba(0, 0, 0, 0.6);
                    font-size: 1em;
                    font-weight: 600;
                    cursor: pointer;
                  " @click="cadastraCliente">
                  {{ textAddCliente }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal para adicionar telefones -->
        <div class="modal fade modalTelefone" id="modalAdicionarTelefone" tabindex="-1" role="dialog"
          aria-labelledby="modalAdicionarTelefoneLabel" aria-hidden="true" ref="modalAdicionarTelefoneLabel">
          <div class="modal-dialog modal-sm" style="padding-top: 80px; margin-right: 10%" role="document">
            <div class="modal-content">
              <!-- <div class="modal-header"> -->
              <button type="button" class="close custom-close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <!-- </div> -->
              <div class="modal-body">
                <!-- Conteúdo do modal de adicionar telefones -->
                <div class="form-group">
                  <label for="telefone" style="font-size: 14px; font-weight: 600">Telefone</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-bs-toggle="dropdown" aria-expanded="false" style="
                          height: 40px;
                          border: 1px solid #d3dceb;
                          border-right: none;
                        ">
                        <span :class="'fi ' + selectedFlag" style="margin-right: 8px"></span>
                        {{ selectedCode }}
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li v-for="pais in paises" :key="pais.codigo">
                          <a class="dropdown-item" href="#" @click.prevent="selecionarPais(pais)">
                            <span :class="'fi ' + pais.flag" style="margin-right: 8px"></span>
                            {{ pais.codigo }}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <input type="text" class="form-control" id="telefone" v-model="telefone"
                      placeholder="(99) 99999-9999" style="height: 40px" @input="aplicaMascaraTelefone" />
                  </div>
                </div>

                <div class="form-group mt-3" style="display: flex; flex-direction: column">
                  <span style="font-size: 13px; font-weight: 600">É WhatsApp?</span>
                  <div style="width: 100%">
                    <button :class="`btn ${whatsappYes == 'Sim'
                      ? 'btn-green'
                      : 'btn-white-no-border'
                      }`" style="width: 50% !important; padding: 10px 0 !important" @click="handleWhats('Sim')">
                      Sim
                    </button>
                    <button :class="`btn ${whatsappYes == 'Não'
                      ? 'btn-reds'
                      : 'btn-white-no-border'
                      }`" style="width: 50% !important; padding: 10px 0 !important" @click="handleWhats('Não')">
                      Não
                    </button>
                  </div>
                </div>

                <div class="form-group mt-3" style="display: flex; flex-direction: column">
                  <span style="font-size: 13px; font-weight: 600">Telefone Principal?</span>
                  <div style="width: 100%">
                    <button :class="`btn ${principalYes == 'Sim'
                      ? 'btn-green'
                      : 'btn-white-no-border'
                      }`" style="width: 50% !important; padding: 10px 0 !important" @click="handlePrincipal('Sim')">
                      Sim
                    </button>
                    <button :class="`btn ${principalYes == 'Não'
                      ? 'btn-reds'
                      : 'btn-white-no-border'
                      }`" style="width: 50% !important; padding: 10px 0 !important" @click="handlePrincipal('Não')">
                      Não
                    </button>
                  </div>
                </div>

                <div class="form-group mt-3">
                  <span style="font-size: 13px; font-weight: 600">Breve descrição</span>
                  <input type="text" placeholder="Ex: Celular" class="form-control" style="height: 40px"
                    v-model="breveDescricao" />
                </div>
              </div>
              <div class="form-group" style="
                  background-color: #fff;
                  padding: 1rem 18px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                ">
                <button type="button" class="btn btn-greenHover" style="width: 100%; padding: 15px 0 !important"
                  @click="handleAddTelefone">
                  Concluir
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal para ligar pessoas -->
        <div class="modal fade modalTelefone" id="modalLigarPessoa" tabindex="-1" role="dialog"
          aria-labelledby="modalLigarPessoa" aria-hidden="true" ref="modalLigarPessoa">
          <div class="modal-dialog modal-sm" style="padding-top: 150px; margin-right: 12%" role="document">
            <div class="modal-content">
              <!-- <div class="modal-header"> -->
              <button type="button" class="close custom-close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <!-- </div> -->
              <div class="modal-body">
                <div v-if="msgErrorLigarPessoaSemCampos" class="alert alert-danger" role="alert" style="width: 100%">
                  Preencha todos os campos!
                </div>
                <!-- Conteúdo do modal de ligar pessoas -->
                <div class="form-group mt-3">
                  <label for="client" style="font-weight: 600">Cliente</label>
                  <div class="custom-select" ref="selectContainerPessoa">
                    <div class="select-box" @click="toggleDropdownPessoa" :aria-expanded="isOpenPessoa.toString()"
                      role="button" tabindex="0">
                      <span v-if="selectedOptionPessoa">{{
                        selectedOptionPessoa.nome
                      }}</span>
                      <span v-else>Selecione um cliente</span>
                      <i class="align-middle" data-feather="chevron-down"></i>
                    </div>
                    <ul v-if="isOpenPessoa" class="options-list">
                      <!-- <li @click="addClient" style="background-color: #f1f4f9">
                        <button class="btn" style="
                            color: #026da6;
                            display: flex;
                            align-items: center;
                            font-weight: 600;
                          ">
                          <img :src="plusCircle" style="width: 12px; height: 12px; margin-right: 6px" />Adicionar
                        </button>
                      </li> -->
                      <!-- {{console.log(allClientes)}} -->
                      <li v-for="client in allClientes" :key="client.id_cliente" @click="selectOptionPessoa(client)">
                        <div style="display: flex; flex-direction: column">
                          <span>{{ client.nome }}
                            <img :src="userIcon" style="
                                width: 12px;
                                height: 12px;
                                margin-bottom: 2px;
                                margin-left: 2px;
                              " />
                          </span>
                          <span class="">{{ client.telefone_1 }}</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="form-group mt-3">
                  <span style="font-size: 13px; font-weight: 600">Descrição</span>
                  <input type="text" placeholder="Ex: Conjuge" class="form-control" v-model="descricaoPessoaLigada"
                    style="height: 40px" />
                </div>
              </div>
              <div class="form-group" style="
                  background-color: #fff;
                  padding: 1rem 18px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                ">
                <button type="button" @click="handleAddLigarPessoa" class="btn btn-greenHover"
                  style="width: 100%; padding: 15px 0 !important">
                  Adicionar
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal de cadastro completo -->
        <div class="modal fade" id="myModalComplete" tabindex="-1" role="dialog" aria-labelledby="myModalComplete"
          aria-hidden="true" ref="myModalComplete">
          <div class="modal-dialog modal-xl" style="padding-top: 20px" role="document">
            <div class="modal-content">
              <div class="modal-header" style="
                  display: flex;
                  flex-direction: column;
                  width: 100%;
                  align-items: flex-start;
                ">
                <div v-if="msgClienteSuccess" class="alert alert-success" role="alert" style="width: 100%">
                  Cliente Criado com sucesso
                </div>
                <div v-if="msgClienteError" class="alert alert-danger" role="alert" style="width: 100%">
                  Falha ao criar o cliente
                </div>
                <div v-if="msgClienteErrorSemCampos" class="alert alert-danger" role="alert" style="width: 100%">
                  Preencha os campos obrigatórios!
                </div>
                <div style="display: flex; flex-direction: row; width: 100%">
                  <h5 class="modal-title col-4" style="font-size: 15px; font-weight: 600" id="exampleModalLabel">
                    Cadastrar Clientes
                  </h5>

                  <div class="form-group col-8" style="
                      display: flex;
                      align-items: center;
                      justify-content: flex-end;
                    ">
                    <label class="col-3" for="corretorResponsavel" style="font-size: 14px; font-weight: 600">Corretor
                      Responsável</label>
                    <select class="form-floating col-4" id="corretorResponsavel" v-model="corretorResponsavel" style="
                        height: 40px;
                        border: 1px solid #dee2e6;
                        padding-left: 8px;
                      ">
                      <option value="" disabled hidden>Selecione</option>
                      <option :value="`${userName} ${userSobrenome}`">
                        {{ userName }} {{ userSobrenome }}
                      </option>
                    </select>


                  </div>
                </div>
                <button type="button" class="close custom-close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div class="modal-body" style="padding: 0 0">
                <div class="row">
                  <!-- Esquerda: Inputs e Selects com linha divisória -->
                  <div class="col-9" style="
                      border-right: 1px solid #ced4da;
                      padding-right: 15px;
                      padding-left: 25px;
                      padding-top: 20px;
                      padding-bottom: 20px;
                    ">
                    <div class="row">
                      <div class="form-group col-3">
                        <label for="categoria" style="font-size: 13px; font-weight: 600">Categoria</label><strong
                          class="text-danger">*</strong>
                        <select class="form-floating" id="categoria" v-model="categoria" style="
                            height: 40px;
                            border: 1px solid #dee2e6;
                            width: 100%;
                            padding-left: 8px;
                          ">
                          <option value="" disabled selected hidden>
                            Selecione
                          </option>
                          <option v-for="item in allCategorias" :value="item.categoria_cliente">
                            {{ item.categoria_cliente }}
                          </option>
                        </select>
                      </div>

                      <div class="form-group col-3">
                        <label for="origemCaptacao" style="font-size: 13px; font-weight: 600">Origem de
                          Captação</label><strong class="text-danger">*</strong>
                        <select class="form-floating" id="origemCaptacao" v-model="origemCaptacao" style="
                            height: 40px;
                            border: 1px solid #dee2e6;
                            width: 100%;
                            padding-left: 8px;
                          ">
                          <option value="" disabled selected hidden>
                            Selecione
                          </option>
                          <option v-for="item in allOrigensCapitacao" :value="item.origem_captacao">
                            {{ item.origem_captacao }}
                          </option>
                        </select>
                      </div>

                      <div class="form-group col-2">
                        <label for="tipoCliente" style="font-size: 13px; font-weight: 600">Tipo de Cliente</label>
                        <select class="form-floating" id="tipoCliente" v-model="tipoCliente" style="
                            height: 40px;
                            border: 1px solid #dee2e6;
                            width: 100%;
                            padding-left: 8px;
                          ">
                          <option v-for="item in allTiposClientes" :value="item.tipo_cliente">
                            {{ item.tipo_cliente }}
                          </option>
                        </select>
                      </div>

                      <div class="form-group col-2">
                        <label for="cpf" style="font-size: 13px; font-weight: 600">CPF</label>
                        <input type="text" class="form-control" id="cpf" v-model="cpf" placeholder="Digite..."
                          style="height: 40px" @input="aplicaMascaraCPF" />
                      </div>

                      <div class="form-group col-2">
                        <label for="rg" style="font-size: 13px; font-weight: 600">RG</label>
                        <input type="text" class="form-control" id="rg" v-model="rg" placeholder="Digite..."
                          style="height: 40px" />
                      </div>

                      <div class="form-group col-3 mt-3">
                        <label for="nome" style="font-size: 13px; font-weight: 600">Nome</label><strong
                          class="text-danger">*</strong>
                        <input type="text" class="form-control" id="nome" v-model="nome" placeholder="Digite..."
                          style="height: 40px" />
                      </div>

                      <div class="form-group col-3 mt-3">
                        <label for="email" style="font-size: 13px; font-weight: 600">Email</label>
                        <input type="email" class="form-control" id="email" v-model="email" placeholder="Digite..."
                          style="height: 40px" />
                      </div>

                      <div class="form-group col-3 mt-3">
                        <label for="dataNascimento" style="font-size: 13px; font-weight: 600">Data de Nascimento</label>
                        <input type="text" class="form-control" id="dataNascimento" v-model="dataNascimento"
                          placeholder="Digite..." style="height: 40px" @input="validateDate" />
                      </div>

                      <div class="form-group col-3 mt-3">
                        <label for="profissao" style="font-size: 13px; font-weight: 600">Profissão</label>
                        <input type="text" class="form-control" id="profissao" v-model="profissao"
                          placeholder="Digite..." style="height: 40px" />
                      </div>

                      <div class="form-group col-2 mt-3">
                        <label for="profissao" style="font-size: 13px; font-weight: 600">CEP</label>
                        <input type="text" class="form-control" id="cep" v-model="cep" placeholder="Digite..."
                          style="height: 40px" @input="aplicaMascaraCEP" />
                      </div>

                      <div class="form-group col-2 mt-3">
                        <label for="pais" style="font-size: 13px; font-weight: 600">País</label>
                        <input type="text" class="form-control" id="pais" disabled v-model="pais"
                          placeholder="Digite..." style="height: 40px" />
                        <!-- <select class="form-floating" id="pais" disabled v-model="pais" style="
                            height: 40px;
                            border: 1px solid #dee2e6;
                            width: 100%;
                            padding-left: 8px;
                          ">
                          <option value="" disabled selected hidden>
                            Selecione
                          </option> -->
                        <!-- <option value="brasil">Brasil</option> -->
                        <!-- </select> -->
                      </div>

                      <div class="form-group col-2 mt-3">
                        <label for="uf" style="font-size: 13px; font-weight: 600">UF</label>
                        <input type="text" class="form-control" id="uf" disabled v-model="uf" placeholder="Digite..."
                          style="height: 40px" />
                        <!-- <select class="form-floating" id="uf" disabled v-model="uf" style="
                            height: 40px;
                            border: 1px solid #dee2e6;
                            width: 100%;
                            padding-left: 8px;
                          ">
                          <option value="" disabled selected hidden>
                            Selecione
                          </option>
                          <option v-for="estado in brasil.estadosMap" :key="estado.sigla" :value="estado.sigla">
                            {{ estado.nome }}
                          </option>
                        </select> -->
                      </div>

                      <div class="form-group col-3 mt-3">
                        <label for="cidade" style="font-size: 13px; font-weight: 600">Cidade
                        </label>
                        <input type="text" class="form-control" id="cidade" disabled v-model="cidade"
                          placeholder="Digite..." style="height: 40px" />
                        <!-- <select class="form-floating" id="cidade" disabled v-model="cidade" style="
                            height: 40px;
                            border: 1px solid #dee2e6;
                            width: 100%;
                            padding-left: 8px;
                          ">
                          <option value="" disabled selected hidden>
                            Selecione
                          </option>
                          <option v-for="cidade in cidades" :key="cidade" :value="cidade">
                            {{ cidade }}
                          </option>
                        </select> -->
                      </div>

                      <div class="form-group col-3 mt-3">
                        <label for="bairro" style="font-size: 13px; font-weight: 600">Bairro
                        </label>
                        <input type="text" class="form-control" id="bairro" disabled v-model="bairro"
                          placeholder="Digite..." style="height: 40px" />
                        <!-- <select class="form-floating" id="bairro" disabled v-model="bairro" style="
                            height: 40px;
                            border: 1px solid #dee2e6;
                            width: 100%;
                            padding-left: 8px;
                          ">
                          <option value="" disabled selected hidden>
                            Selecione
                          </option>
                          <option v-for="bairro in bairros" :key="bairro.name" :value="bairro.name">
                            {{ bairro.name }}
                          </option>
                        </select> -->
                      </div>

                      <div class="form-group col-4 mt-3">
                        <label for="logradouro" style="font-size: 13px; font-weight: 600">Logradouro</label>
                        <input type="text" class="form-control" id="logradouro" disabled v-model="logradouro"
                          placeholder="Digite..." style="height: 40px" />
                      </div>

                      <div class="form-group col-3 mt-3">
                        <label for="numero" style="font-size: 13px; font-weight: 600">Número</label>
                        <input type="text" class="form-control" id="numero" v-model="numero" placeholder="Digite..."
                          style="height: 40px" />
                      </div>

                      <div class="form-group col-5 mt-3">
                        <label for="complemento" style="font-size: 13px; font-weight: 600">Complemento</label>
                        <input type="text" class="form-control" id="complemento" v-model="complemento"
                          placeholder="Digite..." style="height: 40px" />
                      </div>

                      <div class="form-group col-12 mt-3">
                        <label for="anotacoes" style="font-size: 13px; font-weight: 600">
                          Anotações
                          <img :src="InterrSvg" class="ms-2" style="width: 12px; height: 12px" />
                        </label>
                        <Editor ref="editorComponent" api-key="a0eo66lpqzpu1anhsfgh9ru0bp7id447c6hsvz9cgexp82oh" :init="{
                          toolbar_mode: 'sliding',
                          plugins:
                            'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                          toolbar:
                            'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                          height: 150,
                          menubar: false,
                          branding: false,
                          entity_encoding: 'raw',
                          readonly: false
                        }" v-model="termos" @editorChange="handleEditorChange" />
                      </div>
                    </div>
                    <div class="modal-footer mt-4" style="display: flex; justify-content: space-between">
                      <button type="button" class="btn btnModal" style="
                          padding: 10px 15px;
                          border: 1px solid #d3dceb;
                          background-color: #fff;
                          color: #1c0c1e;
                          box-shadow: 0 0 5px rgba(211, 220, 235, 0.6);
                          font-size: 1em;
                          font-weight: 600;
                          cursor: pointer;
                        " data-bs-dismiss="modal">
                        Cancelar
                      </button>
                      <button type="button" class="btn btnModal2" style="
                          padding: 10px 15px;
                          border: 1px solid #d3dceb;
                          color: #fff;
                          background-color: #31d084;
                          box-shadow: 0 0 5px rgba(49, 208, 132, 0.6),
                            inset 0 0 1px rgba(0, 0, 0, 0.6);
                          font-size: 1em;
                          font-weight: 600;
                          cursor: pointer;
                        " @click="cadastraCliente()">
                        {{ textAddCliente }}
                      </button>
                    </div>
                  </div>

                  <!-- Direita: Select Corretor, Títulos e Botão -->
                  <div class="col-3" style="
                      padding-bottom: 20px;
                      padding-right: 12px;
                      padding-left: 0;
                    ">
                    <div class="mt-4" style="
                        padding-left: 15px;
                        padding-bottom: 20px;
                        border-bottom: 1px solid #ced4da;
                      ">
                      <h5 style="font-size: 14px; font-weight: 600">
                        Telefones
                      </h5>
                      <p v-if="alltelefones.length == 0" class="text-muted" style="
                          font-size: 12px;
                          font-weight: 500;
                          margin-bottom: 5px;
                        ">
                        Você ainda não cadastrou nenhum telefone.
                      </p>
                      <div v-if="alltelefones.length > 0" v-for="(item, index) in alltelefones" style="display: flex; 
                        justify-content: space-between; 
                        align-items: center;
                        padding: 0 10px; 
                        margin-bottom: 1rem; 
                        margin-top: 1rem;">
                        <h2 style="font-size: 13px; font-weight: 500">
                          {{ item.NumTelefone }} ({{ item.Descricao }})
                        </h2>
                        <img style="width: 14px; height: 14px; margin-bottom: 10px; cursor: pointer"
                          @click="handleDelete(index)" :src="trashIcon"></img>
                      </div>
                      <button type="button " class="btn btnModal" v-if="alltelefones.length < 2"
                        @click="openSecondModal" style="
                          padding: 5px 15px;
                          border: 1px solid #d3dceb;
                          background-color: #fff;
                          color: #1c0c1e;
                          box-shadow: 0 0 5px rgba(211, 220, 235, 0.6);
                          font-size: 0.9em;
                          font-weight: 600;
                          cursor: pointer;
                        ">
                        Adicionar telefones
                      </button>
                    </div>

                    <div class="mt-4" style="padding-left: 15px">
                      <h5 style="font-size: 14px; font-weight: 600">
                        Pessoas Ligadas
                      </h5>
                      <p class="text-muted" v-if="allPessoasLigadas.length == 0" style="
                          font-size: 12px;
                          font-weight: 500;
                          margin-bottom: 5px;
                        ">
                        Você ainda não ligou nenhuma pessoa a esse cliente.
                      </p>

                      <!-- {{console.log(selectedOptionPessoa)}} -->

                      <div v-if="allPessoasLigadas.length > 0" v-for="(item, index) in allPessoasLigadas" style="display: flex; 
                        justify-content: space-between; 
                        align-items: center;
                        padding: 0 10px; 
                        margin-bottom: 1rem; 
                        margin-top: 1rem;">
                        <h2 style="font-size: 13px; font-weight: 500">
                          <!-- {{ console.log(item) }} -->
                          {{ item.clienteLigado.nome }} ({{ item.descricao }})
                        </h2>
                        <img style="width: 14px; height: 14px; margin-bottom: 10px; cursor: pointer"
                          @click="handleDeletePessoaLigada(index)" :src="trashIcon"></img>
                      </div>

                      <button type="button " class="btn btnModal" @click="openLigarPessoaModal" style="
                          padding: 5px 15px;
                          border: 1px solid #d3dceb;
                          background-color: #fff;
                          color: #1c0c1e;
                          box-shadow: 0 0 5px rgba(211, 220, 235, 0.6);
                          font-size: 0.9em;
                          font-weight: 600;
                          cursor: pointer;
                        ">
                        Ligar pessoa
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- <footer /> -->
  </div>
</template>

<script>
import navbarImobiliaria from "@/components/navbar/navbar-imobiliaria.vue";
import footer from "@/components/footer/index.vue";
import sidebarCrm from "@/components/sidebar/sidebarCrm.vue";
import youtubeLogo from "../../../../assets/images/icons/youtubeLogo.svg";
import graphAtivCrmComp from "@/components/admin/graph/graphAtivCrmComp.vue";
import graphBarAtivCrmComp from "@/components/graph/graphBarAtivCrmComp.vue";
import graphBarLaterCrmComp from "@/components/graph/graphBarLaterCrmComp.vue";
import userIcon from "../../../../assets/images/icons/userIconBlue.svg";
import plusCircle from "../../../../assets/images/icons/plusCircle.svg";
import InterrSvg from "../../../../assets/images/icons/interrogationIcon.svg";
import trashIcon from "../../../../assets/images/icons/trash-2.svg";
import Editor from "@tinymce/tinymce-vue";
import api from "../../../../service/api/index";
import apiImovel from "../../../../service/api/imoveis/index";
import { jwtDecode } from "jwt-decode";
import _ from "lodash";
import axios from "axios";
import * as XLSX from "xlsx";

export default {
  name: "CrmView",
  components: {
    navbarImobiliaria,
    footer,
    sidebarCrm,
    graphAtivCrmComp,
    graphBarAtivCrmComp,
    graphBarLaterCrmComp,
    Editor,
  },
  data() {
    return {
      token: localStorage.getItem("token"),
      id_user: "",
      userName: "",
      userSobrenome: "",

      mostrarSkeleton: false,

      funilSelect: localStorage.getItem("fs") ? localStorage.getItem("fs") : "1",
      youtubeLogo,
      userIcon,
      plusCircle,
      InterrSvg,
      trashIcon,

      posicao: "", // Variável para armazenar o contato selecionado
      posicoes: [], // Variável para armazenar o contato selecionado
      nivelInteresse: 1,
      selectCliente: "",

      etapas: [],

      isOpen: false,
      isOpenImovel: false,
      selectedOption: null,
      selectedOptionImovel: null,
      allClientes: [],
      imovel: [],
      telefone: "",
      selectedFlag: "fi-br", // Bandeira inicial (Brasil)
      selectedCode: "+55", // Código inicial
      paises: [
        { flag: "fi-br", codigo: "+55" }, // Brasil
        { flag: "fi-us", codigo: "+1" }, // Estados Unidos
        { flag: "fi-gb", codigo: "+44" }, // Reino Unido
        // Adicione mais países aqui
      ],

      //cliente
      nome: "",
      email: "",
      dataNascimento: "",
      categoria: "",
      allCategorias: [],
      tipoCliente: "",
      allTiposClientes: [],
      origemCaptacao: "",
      allOrigensCapitacao: [],
      cpf: "",
      rg: "",
      cep: "",
      profissao: "",
      pais: "",
      uf: "",
      cidade: "",
      bairro: "",
      logradouro: "",
      numero: "",
      complemento: "",
      termos: "", // Contém o conteúdo do editor
      textContent: "", // Contém o texto puro
      corretorResponsavel: "",

      brasil: {
        estadosMap: [
          { sigla: "AC", nome: "Acre" },
          { sigla: "AL", nome: "Alagoas" },
          { sigla: "AP", nome: "Amapá" },
          { sigla: "AM", nome: "Amazonas" },
          { sigla: "BA", nome: "Bahia" },
          { sigla: "CE", nome: "Ceará" },
          { sigla: "DF", nome: "Distrito Federal" },
          { sigla: "ES", nome: "Espírito Santo" },
          { sigla: "GO", nome: "Goiás" },
          { sigla: "MA", nome: "Maranhão" },
          { sigla: "MT", nome: "Mato Grosso" },
          { sigla: "MS", nome: "Mato Grosso do Sul" },
          { sigla: "MG", nome: "Minas Gerais" },
          { sigla: "PA", nome: "Pará" },
          { sigla: "PB", nome: "Paraíba" },
          { sigla: "PR", nome: "Paraná" },
          { sigla: "PE", nome: "Pernambuco" },
          { sigla: "PI", nome: "Piauí" },
          { sigla: "RJ", nome: "Rio de Janeiro" },
          { sigla: "RN", nome: "Rio Grande do Norte" },
          { sigla: "RS", nome: "Rio Grande do Sul" },
          { sigla: "RO", nome: "Rondônia" },
          { sigla: "RR", nome: "Roraima" },
          { sigla: "SC", nome: "Santa Catarina" },
          { sigla: "SP", nome: "São Paulo" },
          { sigla: "SE", nome: "Sergipe" },
          { sigla: "TO", nome: "Tocantins" },
        ],
      },
      cidades: [],
      bairros: [],

      isOpenPessoa: false,
      selectedOptionPessoa: null,

      // erros e sucessos dos modais
      //modal negocios
      msgNegocioSuccess: false,
      msgNegocioErrorSemCampos: false,
      msgNegocioError: false,
      textAddNegocio: "Adicionar Negócio",
      //modal clientes
      msgClienteSuccess: false,
      msgClienteErrorSemCampos: false,
      msgClienteError: false,
      textAddCliente: "Cadastrar",
      msgErrorLigarPessoaSemCampos: false,

      whatsappYes: "Sim",
      principalYes: "Sim",
      breveDescricao: "",
      alltelefones: [],
      allPessoasLigadas: [],
      descricaoPessoaLigada: "",

      funis: [],
      funilporId: [],
      funilName: "",
      qtdNegoicos: 0,
      imoveisUnicos: 0,

      startDate: "01/01/2024",
      endDate: "19/08/2024",

      disableAjuda: false,

      dados: [
        {
          DataDeCadastro: "23/09/2024",
          DataDeAtualizaca: "24/09/2024",
          Corretor: "Rodrigo Castelo",
          Funil: "Venda",
          Etapa: "Assinatura",
          Cliente: "Antonio Luiz",
          Celular: "(61) 99999-9999",
          Email: "dudu@gmail.com",
          Origem: "Facebook",
          Tipo: "Apartamento",
          SubTipo: "Flat",
          Transacao: "Venda",
          Preco: "R$204.000.000"
        },
      ],
    };
  },
  watch: {
    cep(newVal, oldVal) {
      if (newVal.length === 9 && newVal !== oldVal) {
        this.debouncedCheckCEP();
      }
    },
  },
  created() {
    this.debouncedCheckCEP = _.debounce(this.consultarCEP, 100);
  },

  computed: {
    formattedStartDate: {
      get() {
        return this.formatDate(this.startDate);
      },
      set(value) {
        this.startDate = this.parseDate(value);
      }
    },
    formattedEndDate: {
      get() {
        return this.formatDate(this.endDate);
      },
      set(value) {
        this.endDate = this.parseDate(value);
      }
    },
    etapasDoFunil() {
      // Verifica se funilporId está definido e se há etapas associadas
      const funilSelecionado = this.funis.find(f => f.id_funil == Number(this.funilSelect));
      return funilSelecionado ? funilSelecionado.etapas : [];
    },
    funilSelecionado() {
      const teste = this.funis.find(funil => funil.id_funil == Number(this.funilSelect)) || {};
      // console.log(teste)
      return teste
    },

    contarClientesUnicos() {
      const funil = this.funilSelecionado;

      // Cria um objeto para armazenar IDs de clientes únicos
      const clienteIdsUnicos = {};

      // Verifica se o funil e a lista de negócios existem
      if (funil && funil.negocios && Array.isArray(funil.negocios)) {
        // Itera sobre todos os negócios e adiciona os IDs de clientes ao objeto
        funil.negocios.forEach(negocio => {
          if (negocio.Cliente && negocio.Cliente.id_cliente) {
            // Usa o ID do cliente como chave no objeto
            clienteIdsUnicos[negocio.Cliente.id_cliente] = true;
          }
        });
      }

      // Retorna a quantidade de clientes únicos
      return Object.keys(clienteIdsUnicos);
    }
  },

  methods: {
    exportarExcel() {
      let dadosFormatados = []

      // console.log(this.funis)
      // console.log(this.allClientes)
      // console.log(this.imovel)

      this.funis.forEach((funil) => {
        funil.negocios.forEach((negocio) => {
          // Encontra o cliente correspondente em `this.allClientes` usando o id_cliente
          const clienteCorrespondente = this.allClientes.find(cliente => cliente.id_cliente === negocio.Cliente.id_cliente);

          // Encontra o imóvel correspondente em `this.imovel` usando o id_imovel
          const imovelCorrespondente = this.imovel.find(imovel => imovel.id_imovel === negocio.NovoImovel.id_imovel);

          // Formata os dados do negócio para o Excel
          const dadosNegocio = {
            "Data de Cadastro": negocio.createdAt,
            "Data de Atualização": negocio.updatedAt,
            "Corretor": this.corretorResponsavel,
            "Funil": funil.nome_funil,
            "Etapa": negocio.Etapa.nome_etapa,
            "Cliente": negocio.Cliente.nome,
            "Celular": clienteCorrespondente ? clienteCorrespondente.telefone_1 : "",
            "Origem": clienteCorrespondente ? clienteCorrespondente.Captacao.origem_captacao : "",
            "Tipo": imovelCorrespondente ? imovelCorrespondente.info.tipo : "",
            // "Subtipo": imovelCorrespondente ? imovelCorrespondente.info.perfil_imovel : "",
            "Transação": imovelCorrespondente ? (imovelCorrespondente.preco.tipo_negocio === "Venda" ? "Venda" : "Locação") : "",
            "Preço": `R$${this.aplicaMascaraDinheiroPrecoImovel(negocio.NovoImovel.preco_imovel)}`
          };

          // Adiciona os dados formatados ao array
          dadosFormatados.push(dadosNegocio);
        });
      });

      const ws = XLSX.utils.json_to_sheet(dadosFormatados);

      // Ajusta a largura das colunas
      const colWidths = Object.keys(dadosFormatados[0]).map(key => {
        // Calcula o comprimento máximo do conteúdo em cada coluna
        const maxLength = Math.max(
          key.length, // Comprimento do cabeçalho
          ...dadosFormatados.map(row => row[key]?.toString().length || 0) // Comprimento de cada célula
        );
        return { width: maxLength + 2 }; // Adiciona um pequeno buffer de espaço
      });

      // Define a largura das colunas na planilha
      ws['!cols'] = colWidths;

      // Cria uma nova pasta de trabalho (workbook)
      const wb = XLSX.utils.book_new();
      // Anexa a planilha à pasta de trabalho
      XLSX.utils.book_append_sheet(wb, ws, "Relatório");

      // Salva o arquivo Excel com o nome desejado
      XLSX.writeFile(wb, "relatorio.xlsx");
    },

    formatDate(date) {
      if (!date) return '';
      // Remove caracteres não numéricos
      const cleanDate = date.replace(/\D/g, '');
      if (cleanDate.length <= 2) {
        return cleanDate;
      } else if (cleanDate.length <= 4) {
        return `${cleanDate.slice(0, 2)}/${cleanDate.slice(2)}`;
      } else if (cleanDate.length <= 8) {
        return `${cleanDate.slice(0, 2)}/${cleanDate.slice(2, 4)}/${cleanDate.slice(4)}`;
      } else {
        return `${cleanDate.slice(0, 2)}/${cleanDate.slice(2, 4)}/${cleanDate.slice(4, 8)}`;
      }
    },
    parseDate(date) {
      // Remove caracteres não numéricos
      const cleanDate = date.replace(/\D/g, '');
      if (cleanDate.length === 8) {
        return `${cleanDate.slice(0, 2)}/${cleanDate.slice(2, 4)}/${cleanDate.slice(4)}`;
      } else {
        return date;
      }
    },
    onInput(event) {
      // Atualiza o valor da data no formato correto
      this.formattedStartDate = this.formatDate(event.target.value);
    },
    onEndDateInput(event) {
      // Obtém o valor de entrada e limita a quantidade de caracteres
      let value = event.target.value.replace(/\D/g, '');
      if (value.length > 8) {
        value = value.slice(0, 8);
      }
      // Atualiza o valor da data no formato correto
      this.formattedEndDate = this.formatDate(value);
    },

    async consultarCEP() {
      if (this.cep.length === 9) {
        const cep = this.cep.replace(/\D/g, "");

        try {
          const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

          let rua = res.data.logradouro;
          let bairro = res.data.bairro;
          let cidade = res.data.localidade;
          let estado = res.data.uf;

          this.pais = "Brasil"
          this.logradouro = rua;
          this.bairro = bairro;
          this.cidade = cidade;
          this.uf = estado;
        } catch (error) {
          console.error("Erro ao consultar CEP: ", error);
        }
      }
    },

    aplicaMascaraCEP() {
      let v = this.cep;

      v = v.replace(/\D/g, "");
      if (v.length > 8) {
        v = v.substring(0, 8);
      }

      v = v.replace(/^(\d{5})(\d)/, "$1-$2");

      this.cep = v;
    },

    handleDelete(index) {
      this.alltelefones.splice(index, 1);
    },
    handleDeletePessoaLigada(index) {
      this.allPessoasLigadas.splice(index, 1);
    },
    handleAddTelefone() {
      this.alltelefones.push({
        NumTelefone: `${this.selectedCode} ${this.telefone}`,
        TemWhatsapp: this.whatsappYes,
        EPrincipal: this.principalYes,
        Descricao: this.breveDescricao,
      });

      const modalTelefone = bootstrap.Modal.getInstance(
        this.$refs.modalAdicionarTelefoneLabel
      );

      if (modalTelefone) {
        modalTelefone.hide();
      }
      this.telefone = "";
      this.whatsappYes = "Sim";
      this.principalYes = "Sim";
      this.breveDescricao = "";
      // console.log(this.alltelefones, this.selectedCode);
    },
    handleWhats(event) {
      this.whatsappYes = event;
    },
    handlePrincipal(event) {
      this.principalYes = event;
    },

    handleAddLigarPessoa() {
      if (this.descricaoPessoaLigada != "" && this.selectedOptionPessoa != null) {
        this.allPessoasLigadas.push({
          clienteLigado: this.selectedOptionPessoa,
          descricao: this.descricaoPessoaLigada,
        })

        console.log(this.allPessoasLigadas)

        const modalLigarPessoa = bootstrap.Modal.getInstance(
          this.$refs.modalLigarPessoa
        );

        if (modalLigarPessoa) {
          modalLigarPessoa.hide();
        }

        this.selectedOptionPessoa = null
        this.descricaoPessoaLigada = ""
      } else {
        this.msgErrorLigarPessoaSemCampos = true

        setTimeout(() => {
          this.msgErrorLigarPessoaSemCampos = false
        }, 3000);
      }
    },

    handleAddOrigemCaptacao() {
      console.log("Clique");
    },
    handleEditorChange(content) {
      this.termos = content.replace(/<\/?p[^>]*>/g, "");

      // const editor = tinymce.get(this.$refs.editorComponent.id);
      // this.textContent = content.replace(/<\/?[^>]+(>|$)/g, "");
    },
    selecionarPais(pais) {
      this.selectedFlag = pais.flag;
      this.selectedCode = pais.codigo;
    },
    openSecondModal() {
      // Manter o primeiro modal visível
      // $("#myModalClient").modal("show");

      // Abrir o segundo modal
      $("#modalAdicionarTelefone").modal("show");
    },
    openLigarPessoaModal() {
      $("#modalLigarPessoa").modal("show");
    },
    calculateBarWidth(vgv) {
      const maxVGV = Math.max(...this.etapas.map((etapa) => etapa.vgv));
      return (vgv / maxVGV) * 100; // Proporção em relação ao maior VGV
    },
    calculateBarColor(index) {
      // Cor base para a primeira barra
      const baseColor = { r: 130, g: 90, b: 220 };

      // Fator de escurecimento
      const darkenFactor = 0.1 * (index / 3.5);

      // Calcula a nova cor escurecendo a base
      const newColor = {
        r: Math.floor(baseColor.r * (1 - darkenFactor)),
        g: Math.floor(baseColor.g * (1 - darkenFactor)),
        b: Math.floor(baseColor.b * (1 - darkenFactor)),
      };

      // Retorna a cor em formato RGB
      return `rgb(${newColor.r}, ${newColor.g}, ${newColor.b})`;
    },
    openModal() {
      const modal = new bootstrap.Modal(this.$refs.myModal);
      modal.show();
    },
    openModalClient() {
      const modal = new bootstrap.Modal(this.$refs.myModalClient);
      modal.show();

      const modalNegocio = bootstrap.Modal.getInstance(this.$refs.myModal);

      if (modalNegocio) {
        // setTimeout(() => {
        modalNegocio.hide(); // Fecha o modal atual
        // }, 1000);
      }
    },
    openThirdModal() {
      const modal = new bootstrap.Modal(this.$refs.myModalComplete);
      modal.show();
      const modalClient = bootstrap.Modal.getInstance(this.$refs.myModalClient);

      if (modalClient) {
        // setTimeout(() => {
        modalClient.hide(); // Fecha o modal atual
        // }, 1000);
      }
    },

    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(client) {
      this.selectedOption = client;
      this.isOpen = false;
    },
    addClient() {
      // Implementar a lógica para adicionar um novo cliente
    },
    toggleDropdownImovel() {
      this.isOpenImovel = !this.isOpenImovel;
    },
    selectOptionImovel(client) {
      this.selectedOptionImovel = client;
      this.isOpenImovel = false;
    },
    toggleDropdownPessoa() {
      this.isOpenPessoa = !this.isOpenPessoa;
    },
    selectOptionPessoa(client) {
      this.selectedOptionPessoa = client;
      this.isOpenPessoa = false;
    },
    addClientImovel() {
      // Implementar a lógica para adicionar um novo cliente
    },
    handleClickOutside(event) {
      if (!this.$refs.selectContainer.contains(event.target)) {
        this.isOpen = false;
      }
    },
    handleClickOutsideImovel(event) {
      if (!this.$refs.selectContainerImovel.contains(event.target)) {
        this.isOpenImovel = false;
      }
    },
    handleClickOutsidePessoa(event) {
      if (!this.$refs.selectContainerPessoa.contains(event.target)) {
        this.isOpenPessoa = false;
      }
    },

    fetchPosicao() {
      api.getFunilporId(this.funilSelect).then((res) => {
        // console.log("Aqui ta as posições ====> ", res);
        if (res.status === 200) {
          this.posicoes = res.data.etapas;
        }
      });
    },

    fetchCategorias() {
      api.getCategorias().then((res) => {
        // console.log("Aqui estão as categorias ====> ", res);
        if (res.status === 200) {
          this.allCategorias = res.data;
        }
      });
    },

    fetchOrigemCaptacao() {
      api.getOrigemCaptacao().then((res) => {
        // console.log("Aqui estão as origens de capitação ====> ", res);
        if (res.status === 200) {
          this.allOrigensCapitacao = res.data;
        }
      });
    },

    fetchTipoCliente() {
      api.getTipoCliente().then((res) => {
        if (res.status === 200) {
          // console.log(res.data);
          this.allTiposClientes = res.data;
          res.data.map((tipo) => {
            if (tipo.tipo_cliente == "Física") {
              // console.log(tipo);
              this.tipoCliente = tipo.tipo_cliente;
            }
          });
        }
      });
    },

    fetchCliente() {
      api.getCliente().then((res) => {
        console.log("Aqui esta o cliente ====> ", res);
        if (res.status === 200) {
          this.allClientes = res.data.filter(cliente => cliente.id_user === this.id_user);
        }
      });
    },

    fetchImoveis() {
      api.listallImoveis().then((res) => {
        // console.log("Aqui estao os imoveis ====> ", res);
        if (res.status === 200) {
          this.imovel = res.data;
        }
      });
    },

    cadastraCliente() {
      let idCaptacao = "";
      let idCategoriaCliente = "";
      let nome = this.nome;
      let rg = this.rg;
      let idTipoCliente = "";
      let cpf = this.cpf;
      let email = this.email == "" ? null : this.email;
      let dataDeNascimento = this.dataNascimento;
      let profissao = this.profissao;
      let cep = this.cep;
      let pais = this.pais;
      let uf = this.uf;
      let cidade = this.cidade;
      let bairro = this.bairro;
      let logradouro = this.logradouro;
      let numero = Number(this.numero);
      let complemento = this.complemento;
      let anotacao = this.termos.replace(/<\/?p[^>]*>/gi, "");
      let telefone1 = "";
      let telefone2 = "";
      let idUser = this.id_user;
      let pessoasLigadas = []
      // console.log(pessoas)

      idCaptacao = this.allOrigensCapitacao.find(
        (origem) => origem.origem_captacao === this.origemCaptacao
      )?.id_captacao;
      idCategoriaCliente = this.allCategorias.find(
        (categoria) => categoria.categoria_cliente === this.categoria
      )?.id_categoria_cliente;

      if (this.alltelefones.length > 0) {
        // console.log(this.alltelefones[0].NumTelefone)
        telefone1 = this.alltelefones[0].NumTelefone; // Primeiro telefone
      }

      if (this.alltelefones.length == 2) {
        // console.log(this.alltelefones[1].NumTelefone)
        telefone2 = this.alltelefones[1].NumTelefone; // Segundo telefone
      }

      if (this.allPessoasLigadas.length > 0) {
        pessoasLigadas = this.allPessoasLigadas.map(item => {
          return {
            id_pessoa_ligada: item.clienteLigado.id_cliente,
            breve_descricao: item.descricao
          };
        });
      }

      const clienteEncontrado = this.allTiposClientes.find(cliente => cliente.tipo_cliente === this.tipoCliente);

      if (clienteEncontrado) {
        idTipoCliente = clienteEncontrado.id_tipo_cliente;
      }

      // console.log(idTipoCliente)

      // console.log(this.allOrigensCapitacao);
      // console.log(idCaptacao, idCategoriaCliente);
      // console.log(this.origemCaptacao, this.categoria);
      // console.log(this.allOrigensCapitacao, this.allCategorias);
      // console.log(dataDeNascimento);
      // console.log(anotacao)
      if (
        this.nome != "" &&
        this.categoria != "" &&
        this.origemCaptacao != ""
      ) {
        api
          .postCliente(
            idCaptacao,
            idCategoriaCliente,
            nome,
            idTipoCliente,
            cpf,
            rg,
            email,
            dataDeNascimento,
            profissao,
            cep,
            pais,
            uf,
            cidade,
            bairro,
            logradouro,
            numero,
            complemento,
            anotacao,
            telefone1,
            telefone2,
            idUser,
            pessoasLigadas
          )
          .then((res) => {
            this.textAddCliente = "Adicionando...";
            console.log("aqui estao o res do Postcliente ===> ", res);
            if (res.status === 201) {
              this.msgClienteSuccess = true;

              setTimeout(() => {
                this.categoria = ""
                this.origemCaptacao = ""
                this.nome = ""
                this.rg = ""
                this.cpf = ""
                this.email = ""
                this.dataNascimento = ""
                this.profissao = ""
                this.cep = ""
                this.pais = ""
                this.uf = ""
                this.cidade = ""
                this.bairro = ""
                this.logradouro = ""
                this.numero = ""
                this.complemento = ""
                this.termos = ""
                this.alltelefones = []
                this.allPessoasLigadas = []

                const modalCliente = bootstrap.Modal.getInstance(
                  this.$refs.myModalComplete
                );
                const modal = bootstrap.Modal.getInstance(
                  this.$refs.myModalClient
                );
                if (modalCliente) {
                  modalCliente.hide();
                }
                if (modal) {
                  modal.hide();
                }
                this.msgClienteSuccess = false;
                this.textAddCliente = "Cadastrar";
                this.fetchCliente();
              }, 3000);
            } else {
              this.textAddCliente = "Cadastrar";
              this.msgClienteError = true;

              setTimeout(() => {
                this.msgClienteError = false;
              }, 3000);
            }
          });
      } else {
        this.msgClienteErrorSemCampos = true;

        setTimeout(() => {
          this.msgClienteErrorSemCampos = false;
          this.textAddCliente = "Cadastrar";
        }, 3000);
      }
    },

    cadastraNegocio() {
      // cadastraNegocio(idPosicao, idNivelInteresse, idCliente, idImovel) {
      let idPosicao = "";
      let idNivel = "";
      let idCliente = "";
      let idImovel = "";
      let idUser = this.id_user
      this.posicoes.map((posi) => {
        // console.log(posi, this.posicao)
        if (posi.nome_etapa == this.posicao) {
          idPosicao = posi.id_etapa;
        }
      });
      idNivel = this.nivelInteresse;
      idCliente =
        this.selectedOption == null ? "" : this.selectedOption.id_cliente;
      idImovel =
        this.selectedOptionImovel == null
          ? ""
          : this.selectedOptionImovel.id_imovel;
      if (
        idPosicao != "" &&
        idNivel != "" &&
        idCliente != "" &&
        idImovel != ""
      ) {
        api.postNegocio(idPosicao, idNivel, idCliente, idImovel, idUser).then((res) => {
          this.textAddNegocio = "Adicionando...";
          // console.log("Res do postNegocio ===>", res);
          if (res.status === 201) {
            this.msgNegocioSuccess = true;

            setTimeout(() => {
              const modalNegocio = bootstrap.Modal.getInstance(
                this.$refs.myModal
              );

              this.textAddNegocio = "Adicionar Negócio";
              if (modalNegocio) {
                // setTimeout(() => {
                this.filtrarEtapasFunil()
                this.posicao = ""
                this.nivelInteresse = 1
                this.selectedOption = null
                this.selectedOptionImovel = null
                modalNegocio.hide(); // Fecha o modal atual
                // }, 1000);
              }
              this.msgNegocioSuccess = false;
              this.textAddCliente = "Adicionar Negócio";
            }, 3000);
          } else {
            this.textAddNegocio = "Adicionar Negócio";
            this.msgNegocioError = true;

            setTimeout(() => {
              this.msgNegocioError = false;
            }, 3000);
          }
        });
      } else {
        this.msgNegocioErrorSemCampos = true;

        setTimeout(() => {
          this.msgNegocioErrorSemCampos = false;
          this.textAddNegocio = "Adicionar Negócio";
        }, 3000);
      }
    },

    fetchFunil() {
      // console.log('aqui')
      api.getAllFunil().then((res) => {
        // console.log(res.data)
        if (res.status === 200) {
          this.funis = res.data.filter((funil) => funil.id_user === this.id_user);
        }
      })
    },

    // filtrarEtapasFunil(mountedOn) {
    //   if (mountedOn === true || !this.funilSelect) {
    //     this.qtdNegoicos = 0;
    //     api.getFunilporId(this.funilSelect).then((res) => {
    //       if (res.status === 200) {
    //         this.funilporId = res.data;
    //         this.etapas = res.data.etapas;
    //         this.funilName = res.data;
    //         this.fetchPosicao();
    //         this.fetchNegocios(); // Atualiza a contagem de negócios
    //       }
    //     }).catch((error) => {
    //       console.error('Erro ao buscar funil:', error);
    //     });
    //   } else {
    //     console.log(this.funilSelect);
    //     localStorage.setItem("fs", this.funilSelect);

    //     this.qtdNegoicos = 0;
    //     api.getFunilporId(this.funilSelect).then((res) => {
    //       if (res.status === 200) {
    //         this.funilporId = res.data;
    //         this.etapas = res.data.etapas;
    //         this.funilName = res.data;
    //         this.fetchPosicao();
    //         this.fetchNegocios(); // Atualiza a contagem de negócios
    //       }
    //     }).catch((error) => {
    //       console.error('Erro ao buscar funil:', error);
    //     });
    //   }
    // },

    fetchFirstEtapas() {
      api.getFunilporId(this.funilSelect).then((res) => {
        if (res.status === 200) {
          this.funilporId = res.data
          this.etapas = res.data.etapas
        }
      })
    },

    fetchNegocios() {
      api.getNegocios()
        .then((res) => {
          if (res.status === 200) {
            const negocios = res.data.filter((negocio) => negocio.Usuario.id_user === this.id_user);;
            // console.log(negocios)

            // Limpa a contagem e arrays de negócios atuais
            this.funis.forEach((funil) => {
              funil.qtdNegoicos = 0;
              funil.negocios = [];
              funil.imoveisUnicos = new Set(); // Cria um Set para imóveis únicos
              funil.etapas.forEach((etapa) => {
                etapa.qtdNegoicos = 0;
                etapa.negocios = [];
              });
            });

            const etapaMap = new Map();

            // Agrupa os negócios por id_etapa
            negocios.forEach((negocio) => {
              const idEtapa = negocio.Etapa.id_etapa;
              const idImovel = negocio.NovoImovel.id_imovel;

              // Mapeia o negócio para a etapa correspondente
              if (!etapaMap.has(idEtapa)) {
                etapaMap.set(idEtapa, []);
              }
              etapaMap.get(idEtapa).push(negocio);
            });

            // Busca o preço do imóvel e atualiza os negócios em paralelo
            const promises = Array.from(etapaMap.entries()).map(([idEtapa, negocios]) => {
              return Promise.all(negocios.map((negocio) => {
                const idImovel = negocio.NovoImovel.id_imovel;

                return apiImovel.obterImovel(idImovel)
                  .then((res) => {
                    if (res.status === 200) {
                      negocio.NovoImovel.preco_imovel = res.data.preco.preco_imovel;
                    }
                  });
              })).then(() => {
                // Encontra a etapa e funil correspondentes e adiciona os negócios de uma vez
                this.funis.forEach((funil) => {
                  funil.etapas.forEach((etapa) => {
                    if (etapa.id_etapa === idEtapa) {
                      etapa.negocios.push(...negocios);
                      etapa.qtdNegoicos += negocios.length;
                      funil.negocios.push(...negocios);

                      // Adiciona imóveis únicos ao Set do funil
                      negocios.forEach((negocio) => {
                        funil.imoveisUnicos.add(negocio.NovoImovel.id_imovel);
                      });

                      funil.qtdNegoicos += negocios.length;
                    }
                  });
                });
              });
            });

            Promise.all(promises).then(() => {
              // Atualiza a quantidade de imóveis únicos para cada funil
              this.funis.forEach(funil => {
                funil.imoveisUnicos = funil.imoveisUnicos.size;
              });

              const funilSelecionado = this.funis.find(f => f.id_funil === Number(this.funilSelect));
              this.qtdNegoicos = funilSelecionado ? funilSelecionado.qtdNegoicos : 0;
              this.imoveisUnicos = funilSelecionado ? funilSelecionado.imoveisUnicos : 0;

              this.$nextTick(() => {
                // Atualize a interface se necessário
              });
            });
          }
        })
        .catch((error) => {
          console.error('Erro ao buscar negócios:', error);
        });
    },

    filtrarEtapasFunil(mountedOn) {
      const fetchFunil = () => {
        return api.getFunilporId(this.funilSelect)
          .then((res) => {
            if (res.status === 200) {
              this.funilporId = res.data;
              this.etapas = res.data.etapas;
              this.funilName = res.data;
              this.fetchPosicao();
              this.fetchNegocios(); // Atualiza a contagem de negócios
            }
          })
          .catch((error) => {
            console.error('Erro ao buscar funil:', error);
          });
      };

      if (mountedOn === true || !this.funilSelect) {
        // this.qtdNegoicos = 0;
        fetchFunil();
      } else {
        // console.log(this.funilSelect);
        localStorage.setItem("fs", this.funilSelect);
        // this.qtdNegoicos = 0;
        fetchFunil();
      }
    }
    ,

    calcularSomaPrecoImoveis(etapa) {
      // Verifica se etapa.negocios é um array válido
      if (!Array.isArray(etapa.negocios)) {
        return "R$ 0,00"; // Retorna 0 se negocios não for um array
      }

      // Calcula a soma dos preços dos imóveis
      let soma = etapa.negocios.reduce((total, negocio) => {
        // Verifica se NovoImovel e preco_imovel existem e são válidos
        if (negocio.NovoImovel && typeof negocio.NovoImovel.preco_imovel === 'string') {
          // Remove caracteres não numéricos e converte para float
          const precoImovel = parseFloat(negocio.NovoImovel.preco_imovel.replace(/\D/g, "")) || 0;
          return total + precoImovel;
        }
        return total;
      }, 0);

      // Divide o valor total por 100 para simular as casas decimais
      soma = soma / 100;

      // Retorna o valor formatado como moeda
      return soma.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    },

    aplicaMascaraTelefone() {
      let v = this.telefone;

      v = v.replace(/\D/g, "");
      if (v.length > 11) {
        v = v.substring(0, 11);
      }
      v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
      v = v.replace(/(\d{5})(\d)/, "$1-$2");

      this.telefone = v;
    },

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

    aplicaMascaraCPF() {
      let v = this.cpf;

      v = v.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
      if (v.length > 11) {
        v = v.substring(0, 11); // Limita o tamanho a 11 dígitos
      }

      v = v.replace(/(\d{3})(\d)/, "$1.$2");
      v = v.replace(/(\d{3})(\d)/, "$1.$2");
      v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

      this.cpf = v;
    },

    aplicaMascaraRG() {
      let v = this.rg;

      v = v.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
      if (v.length > 9) {
        v = v.substring(0, 9); // Limita o tamanho a 9 dígitos
      }

      v = v.replace(/(\d{2})(\d)/, "$1.$2");
      v = v.replace(/(\d{3})(\d)/, "$1.$2");
      v = v.replace(/(\d{3})(\d{1})$/, "$1-$2");

      this.rg = v;
    },

    validateDate(event) {
      let date = event.target.value;

      // Remove qualquer caractere que não seja número
      date = date.replace(/[^0-9]/g, '');

      // Formata automaticamente para dd/mm/yyyy enquanto o usuário digita
      if (date.length > 2 && date.length <= 4) {
        date = date.slice(0, 2) + '/' + date.slice(2);
      } else if (date.length > 4) {
        date = date.slice(0, 2) + '/' + date.slice(2, 4) + '/' + date.slice(4);
      }

      // Limita a entrada a 10 caracteres no formato dd/mm/yyyy
      if (date.length > 10) {
        date = date.slice(0, 10);
      }

      // Atualiza o valor do input e do modelo Vue
      event.target.value = this.dataNascimento = date;
    },
  },

  mounted() {
    let token = this.token;
    let decode = jwtDecode(token);
    let id_user = decode.id_user;
    this.userName = decode.nome;
    this.userSobrenome = decode.sobrenome;

    this.id_user = id_user;

    this.corretorResponsavel = `${this.userName} ${this.userSobrenome}`;

    document.addEventListener("click", this.handleClickOutside);
    // Initialize Feather icons
    if (window.feather) window.feather.replace();

    document.addEventListener("click", this.handleClickOutsideImovel);
    // Initialize Feather icons
    if (window.feather) window.feather.replace();

    this.fetchPosicao();
    this.fetchCategorias();
    this.fetchOrigemCaptacao();
    this.fetchTipoCliente();
    this.fetchCliente();
    this.fetchImoveis();
    this.fetchFunil()
    this.fetchFirstEtapas()
    // this.fetchNegocios()

    // setTimeout(() => {

    this.filtrarEtapasFunil(true)
    // }, 2000);

    setTimeout(() => {
      this.mostrarSkeleton = true
    }, 3000);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
    document.removeEventListener("click", this.handleClickOutsideImovel);
  },
};
</script>
<style scoped>
.modal-backdrop {
  z-index: 100 !important;
}

.modal {
  z-index: 1050 !important;
}

.modalTelefone {
  z-index: 1060 !important;
}

/* Custom styles for reducing font size */
.custom-nav-link {
  font-size: 0.79rem;
  /* Smaller font size */
  font-weight: 400;
  /* Increased font-weight */
}

.custom-select {
  font-size: 0.75rem;
  /* Smaller font size */
}

.btn-oranges {
  color: #fff;
  /* Texto branco */
  border: none;
  /* Remove a borda padrão */
  background-color: #ff9702;
  box-shadow: 0 0 5px rgba(255, 151, 2, 0.6), inset 0 0 1px rgba(0, 0, 0, 0.6);
  /* Sombra laranja */
  transition: background-color 0.3s, box-shadow 0.3s;
  /* Transições suaves */
}

.btn-blues {
  color: #fff;
  /* Texto branco */
  border: none;
  /* Remove a borda padrão */
  background-color: #0084f4;
  box-shadow: 0 0 5px rgba(0, 132, 255, 0.6), inset 0 0 1px rgba(0, 0, 0, 0.6);
  /* Sombra laranja */
  transition: background-color 0.3s, box-shadow 0.3s;
  /* Transições suaves */
}

.btn-white {
  color: #000;
  /* Texto branco */
  border: none;
  /* Remove a borda padrão */
  background-color: #fff;
  box-shadow: 0 0 5px rgba(41, 41, 40, 0.6), inset 0 0 1px rgba(0, 0, 0, 0.6);
  /* Sombra laranja */
  transition: background-color 0.3s, box-shadow 0.3s;
  /* Transições suaves */
}

.btn-white-no-border {
  color: #000;
  /* Texto branco */
  border: 1px solid #d3dceb;
  /* Remove a borda padrão */
  background-color: #fff;
}

.btn-green {
  color: #fff;
  /* Texto branco */
  border: none;
  /* Remove a borda padrão */
  background-color: #31d084;
  box-shadow: 0 0 5px rgba(146, 255, 138, 0.6), inset 0 0 1px rgba(0, 0, 0, 0.6);
  /* Sombra laranja */
  transition: background-color 0.3s, box-shadow 0.3s;
  /* Transições suaves */
}

.btn-reds {
  color: #fff;
  /* Texto branco */
  border: none;
  /* Remove a borda padrão */
  background-color: #f84343;
  box-shadow: 0 0 5px rgba(248, 67, 67, 0.6), inset 0 0 1px rgba(0, 0, 0, 0.6);
  /* Sombra laranja */
  transition: background-color 0.3s, box-shadow 0.3s;
  /* Transições suaves */
}

.btn-greenHover {
  color: #fff;
  /* Texto branco */
  border: none;
  /* Remove a borda padrão */
  background-color: #31d084;
  box-shadow: 0 0 5px rgba(146, 255, 138, 0.6), inset 0 0 1px rgba(0, 0, 0, 0.6);
  /* Sombra laranja */
  transition: background-color 0.3s, box-shadow 0.3s;
  /* Transições suaves */
}

.btn-oranges:hover {
  background-color: #af6901;
  /* Laranja mais escuro ao passar o mouse */
  color: #fff;
  /* Garantir que o texto permaneça branco */
}

.btn-blues:hover {
  background-color: #0072e5;
  /* Laranja mais escuro ao passar o mouse */
  color: #fff;
  /* Garantir que o texto permaneça branco */
}

.btn-white:hover {
  background-color: #efeeee;
  /* Laranja mais escuro ao passar o mouse */
  color: #000;
  /* Garantir que o texto permaneça branco */
}

.btn-white-no-border:hover {
  border: 1px solid #d3dceb;
  background-color: #fff;
  /* Laranja mais escuro ao passar o mouse */
  color: #000;
  /* Garantir que o texto permaneça branco */
}

.btn-green:hover {
  background-color: #31d084;
  /* Laranja mais escuro ao passar o mouse */
  color: #fff;
  /* Garantir que o texto permaneça branco */
}

.btn-greenHover:hover {
  background-color: #33b476;
  /* Laranja mais escuro ao passar o mouse */
  color: #fff;
  /* Garantir que o texto permaneça branco */
}

.custom-close {
  position: absolute;
  top: -25px;
  /* Ajuste a posição vertical */
  right: -20px;
  /* Ajuste a posição horizontal */
  background-color: #fff;
  border-radius: 1.2rem;
  border: none;
  font-size: 1.3rem;
  width: 1.3rem;
  height: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
}

.nivel-interesse {
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
}

.nivel-linha {
  position: absolute;
  top: 50%;
  left: 20px;
  right: 20px;
  height: 2px;
  background-color: #ccc;
  z-index: 0;
}

.nivel-btn {
  background-color: #e0e0e0;
  border: none;
  border-radius: 100%;
  color: white;
  width: 25px;
  height: 25px;
  font-size: 16px;
  cursor: pointer;
  margin: 0 10px;
  position: relative;
  z-index: 1;
  transition: background-color 0.3s, color 0.3s;
}

.nivel-btn.active,
.nivel-btn:hover {
  background-color: #5a67d8;
  color: white;
}

.custom-select {
  position: relative;
  width: 100%;
}

.select-box {
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.options-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  border: 1px solid #ccc;
  background: white;
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 200px;
  /* Optional: limit the height of the dropdown */
  overflow-y: auto;
  /* Optional: enable scrolling if content is too long */
  z-index: 1000;
  /* Ensures the dropdown appears above other elements */
}

.options-list li {
  padding: 6px 15px;
  cursor: pointer;
}

.options-list li:hover {
  background-color: #f0f0f0;
}

.btnModal:hover {
  background-color: #e8e8e8 !important;
}

.btnModal2:hover {
  background-color: #28b472 !important;
}

.modal-header,
.modal-body,
.modal-footer {
  background-color: #fff;
  /* Garante que cada seção tenha fundo branco */
}
</style>
