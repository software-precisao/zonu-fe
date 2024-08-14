<template>
  <div class="main">
    <navbarImobiliaria />
    <main class="">
      <div class="" style="display: flex; flex-direction: row">
        <!-- Sidebar com opções e ícones -->
        <sidebarCrm tab="Visão geral" />
        <!-- Dashboard -->
        <div class="" style="width: 100%">
          <header
            class="pe-3 ps-3"
            style="
              background-color: #fff;
              height: 60px;
              width: 100%;
              border-bottom: 1px solid #d3d3d3;
              display: flex;
              align-items: center;
              justify-content: space-between;
            "
          >
            <h4 class="fw-semibold mt-2" style="font-size: 13px">
              Visão geral
            </h4>
            <div style="display: flex; align-items: center">
              <select
                class="form-select"
                v-model="graphType"
                style="height: 30px; font-size: 13px; font-weight: 600"
              >
                <option value="" style="font-weight: 600">
                  Vita Studios Manaíra (54 negócios)
                </option>
                <option value="op2" style="font-weight: 600">
                  Aluguel (37 negócios)
                </option>
                <option value="op3" style="font-weight: 600">
                  Farol das Antilhas (1 negócio)
                </option>
                <option value="op4" style="font-weight: 600">
                  Padrão (0 negócios)
                </option>
                <option value="op5" style="font-weight: 600">
                  Teste (0 negócios)
                </option>
                <option value="op6" style="font-weight: 600">
                  Venda (247 negócios)
                </option>
              </select>

              <button
                class="btn btn-oranges ms-2"
                style="display: flex; align-items: center; height: 30px"
                @click="openModal"
              >
                <i class="align-middle" data-feather="plus"></i>
                <span style="margin-left: 3px">Negócio</span>
              </button>
              <button
                class="btn btn-blues ms-2"
                style="display: flex; align-items: center; height: 30px"
                @click="openModalClient"
              >
                <i class="align-middle" data-feather="plus"></i>
                <span style="margin-left: 3px">Clientes</span>
              </button>
              <button
                class="btn btn-white ms-2"
                style="display: flex; align-items: center; height: 30px"
              >
                <i class="align-middle" data-feather="file-plus"></i>
                <span style="margin-left: 3px">Exportar</span>
              </button>
              <a
                class="btn btn-white ms-2"
                style="display: flex; align-items: center; height: 30px"
                href="/seu-crmconfig"
              >
                <i class="align-middle" data-feather="settings"></i>
              </a>
            </div>
          </header>
          <div class="mt-4">
            <div class="row justify-content-center">
              <!-- Card 1 -->
              <div class="col-10 mb-3">
                <div
                  class="card"
                  style="
                    position: relative;
                    border: 1px solid rgb(211, 220, 235);
                  "
                >
                  <div
                    style="
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
                    "
                  >
                    <i class="align-middle" data-feather="x"></i>
                  </div>
                  <div class="d-flex">
                    <!-- Barra lateral dentro do card -->
                    <div
                      class="bg-primary"
                      style="
                        background-color: rgb(23, 110, 200);
                        width: 15%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        color: #fff;
                        border-top-left-radius: 5px;
                        border-bottom-left-radius: 5px;
                      "
                    >
                      <i
                        class="align-middle"
                        style="width: 60%; height: 60%"
                        data-feather="help-circle"
                      ></i>
                      <span class="mt-1" style="font-weight: 800">Ajuda</span>
                    </div>
                    <!-- Conteúdo do card -->
                    <div class="card-body flex-fill ms-3">
                      <h5
                        class="card-title"
                        style="color: #000; font-size: 16px; font-weight: 500"
                      >
                        Precisa de ajuda?
                      </h5>
                      <p
                        class="card-text"
                        style="color: #000; font-size: 13.5px; font-weight: 400"
                      >
                        Separamos alguns tópicos desta área
                      </p>
                      <div style="display: flex; flex-direction: column">
                        <div style="display: flex">
                          <img
                            :src="youtubeLogo"
                            style="width: 20px; height: 20px"
                          />

                          <a
                            href="#"
                            style="
                              text-decoration: none;
                              color: rgb(23, 110, 200);
                              font-size: 13.5px;
                              font-weight: 500;
                            "
                            class="ms-2"
                            >Adicionar negócio ao CRM</a
                          >
                        </div>
                      </div>
                      <div
                        style="display: flex; flex-direction: column"
                        class="mt-1"
                      >
                        <div style="display: flex">
                          <img
                            :src="youtubeLogo"
                            style="width: 20px; height: 20px"
                          />

                          <a
                            href="#"
                            style="
                              text-decoration: none;
                              color: rgb(23, 110, 200);
                              font-size: 13.5px;
                              font-weight: 500;
                            "
                            class="ms-2"
                            >Criar Funil</a
                          >
                        </div>
                      </div>
                      <div
                        style="display: flex; flex-direction: column"
                        class="mt-1"
                      >
                        <div style="display: flex">
                          <img
                            :src="youtubeLogo"
                            style="width: 20px; height: 20px"
                          />

                          <a
                            href="#"
                            style="
                              text-decoration: none;
                              color: rgb(23, 110, 200);
                              font-size: 13.5px;
                              font-weight: 500;
                            "
                            class="ms-2"
                            >Editar Funil</a
                          >
                        </div>
                      </div>
                      <div
                        style="display: flex; flex-direction: column"
                        class="mt-1"
                      >
                        <div style="display: flex">
                          <img
                            :src="youtubeLogo"
                            style="width: 20px; height: 20px"
                          />

                          <a
                            href="#"
                            style="
                              text-decoration: none;
                              color: rgb(23, 110, 200);
                              font-size: 13.5px;
                              font-weight: 500;
                            "
                            class="ms-2"
                            >Radar de oportunidades</a
                          >
                        </div>
                      </div>
                      <div
                        style="display: flex; flex-direction: column"
                        class="mt-1"
                      >
                        <div style="display: flex">
                          <img
                            :src="youtubeLogo"
                            style="width: 20px; height: 20px"
                          />

                          <a
                            href="#"
                            style="
                              text-decoration: none;
                              color: rgb(23, 110, 200);
                              font-size: 13.5px;
                              font-weight: 500;
                            "
                            class="ms-2"
                            >Distribuição padrão de funil por negócio</a
                          >
                        </div>
                      </div>
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          margin-left: -6px;
                        "
                        class="mt-3"
                      >
                        <a
                          href="#"
                          style="
                            text-decoration: none;
                            color: rgb(23, 110, 200);
                            font-size: 13px;
                            font-weight: 500;
                            display: flex;
                          "
                          class="ms-2"
                          ><span style="color: #000">Acessar</span> &nbsp;
                          Central de ajuda</a
                        >
                      </div>
                    </div>
                    <div class="me-3 mt-3">
                      <h5
                        class="card-title"
                        style="color: #000; font-size: 16px; font-weight: 500"
                      >
                        Vídeo demonstrativo
                      </h5>
                      <div
                        style="
                          position: relative;
                          width: 240px;
                          height: 135px;
                          cursor: pointer;
                        "
                      >
                        <img
                          src="https://img.youtube.com/vi/8DX7mudPCNs/0.jpg"
                          style="
                            width: inherit;
                            height: inherit;
                            object-fit: cover;
                            border-radius: 4px;
                          "
                        />
                        <img
                          :src="youtubeLogo"
                          style="
                            position: absolute;
                            top: 49%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            height: 50px;
                            width: 50px;
                          "
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="card pe-4 ps-4 pt-4"
                  style="border: 1px solid rgb(211, 220, 235)"
                >
                  <h2
                    class="mb-0"
                    style="
                      font-size: 14px;
                      color: rgb(33, 35, 44);
                      font-weight: 900;
                    "
                  >
                    Etapas do Funil
                  </h2>
                  <p
                    class="mb-4"
                    style="
                      font-size: 14px;
                      line-height: 21px;
                      color: rgb(33, 35, 44);
                      font-weight: 400;
                    "
                  >
                    Quantidade de negócios e VGV por etapa
                  </p>

                  <div class="container">
                    <div class="row">
                      <div class="col-lg-6 mb-4">
                        <div
                          class="mb-2"
                          v-for="(etapa, index) in etapas"
                          :key="etapa.nome"
                        >
                          <div
                            class="card-body d-flex justify-content-between align-items-center"
                            :style="{
                              width: `${etapa.vgv}%`,
                              backgroundColor: calculateBarColor(index),
                              color: '#fff',
                              borderRadius: '10px',
                              height: '62px',
                            }"
                          >
                            <div>
                              <h6 class="mb-0" style="color: #fff">
                                {{ etapa.nome }}
                              </h6>
                            </div>
                            <div class="text-end">
                              <h5 style="color: #fff">{{ etapa.qtd }}</h5>
                              <p class="mb-0">
                                R$
                                {{
                                  etapa.valor.toLocaleString("pt-BR", {
                                    minimumFractionDigits: 2,
                                  })
                                }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Coluna para o gráfico de clientes, estagnados e imóveis -->
                      <div class="col-lg-5" style="margin-left: 60px">
                        <!-- Adicione aqui o gráfico de pizza e os dados dos clientes, estagnados e imóveis -->
                        <div class="row mb-4">
                          <div
                            class=""
                            style="
                              width: 28%;
                              padding: 10px;
                              border-left: 4px solid rgb(0, 99, 192);
                              box-shadow: rgba(0, 0, 0, 0.05) 1px 2px 5px;
                              height: 70px;
                              margin-right: 10px;
                            "
                          >
                            <h2 style="font-size: 14px; color: rgb(92, 82, 96)">
                              Clientes
                            </h2>
                            <p
                              style="
                                font-size: 24px;
                                font-weight: bold;
                                text-align: right;
                              "
                            >
                              54
                            </p>
                          </div>
                          <div
                            class="col-4"
                            style="
                              width: 28%;
                              padding: 10px;
                              border-left: 4px solid rgb(248, 67, 67);
                              box-shadow: rgba(0, 0, 0, 0.05) 1px 2px 5px;
                              height: 70px;
                              margin-right: 10px;
                            "
                          >
                            <h2 style="font-size: 14px; color: rgb(92, 82, 96)">
                              Estagnados
                            </h2>
                            <p
                              style="
                                font-size: 24px;
                                font-weight: bold;
                                text-align: right;
                              "
                            >
                              52
                            </p>
                          </div>
                          <div
                            class="col-4"
                            style="
                              width: 28%;
                              padding: 10px;
                              border-left: 4px solid rgb(0, 99, 192);
                              box-shadow: rgba(0, 0, 0, 0.05) 1px 2px 5px;
                              height: 70px;
                            "
                          >
                            <h2 style="font-size: 14px; color: rgb(92, 82, 96)">
                              Imóveis
                            </h2>
                            <p
                              style="
                                font-size: 24px;
                                font-weight: bold;
                                text-align: right;
                              "
                            >
                              1
                            </p>
                          </div>
                        </div>
                        <div>
                          <h2
                            class="mb-0"
                            style="
                              font-size: 14px;
                              color: rgb(33, 35, 44);
                              font-weight: 900;
                            "
                          >
                            Canal de origem dos clientes
                          </h2>
                          <p
                            class="mb-4"
                            style="
                              font-size: 14px;
                              line-height: 21px;
                              color: rgb(33, 35, 44);
                              font-weight: 400;
                            "
                          >
                            Distribuição por canal
                          </p>
                          <div class="w-52">
                            <graphAtivCrmComp />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="card mb-2"
                  style="
                    background: rgb(237, 238, 242);
                    padding: 5px 15px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                  "
                >
                  <h2 style="font-size: 14px; font-weight: 600">
                    Análise de resultado por período
                  </h2>
                  <div
                    class=""
                    style="
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                    "
                  >
                    <div class="">
                      <input
                        id="start_date"
                        type="text"
                        class="formControl"
                        placeholder="DD/MM/AAAA"
                        name="start_date"
                        value="01/01/2024"
                        style="
                          height: 45px;
                          width: 120px;
                          padding-left: 8px;
                          border: solid #d3d3d3 1px;
                          border-radius: 5px;
                          font-size: 1em;
                          font-weight: 500;
                        "
                      />
                    </div>
                    <div
                      class=""
                      style="
                        width: 15px;
                        background-color: #d3dceb;
                        height: 1px;
                      "
                    ></div>
                    <div class="">
                      <input
                        id="end_date"
                        type="text"
                        class="formControl"
                        placeholder="DD/MM/AAAA"
                        name="end_date"
                        value="13/08/2024"
                        style="
                          height: 45px;
                          width: 120px;
                          padding-left: 8px;
                          border: solid #d3d3d3 1px;
                          border-radius: 5px;
                          font-size: 1em;
                          font-weight: 500;
                        "
                      />
                    </div>
                  </div>
                </div>

                <div
                  class=""
                  style="
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                  "
                >
                  <div
                    class="card"
                    style="
                      width: 49%;
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: space-around;
                      padding: 20px 10px;
                      border-left: 3px solid rgb(0, 99, 192);
                    "
                  >
                    <h2 style="font-size: 24px; color: rgb(92, 82, 96)">
                      Negócios
                    </h2>
                    <div
                      style="
                        display: flex;
                        flex-direction: column;
                        align-items: left;
                      "
                    >
                      <h3
                        style="
                          margin: 0;
                          padding: 0;
                          font-size: 16px;
                          color: rgb(92, 82, 96);
                          font-weight: 600;
                        "
                      >
                        Iniciados
                      </h3>
                      <p
                        style="
                          margin: 0;
                          padding: 0;
                          font-size: 22px;
                          font-weight: 600;
                        "
                      >
                        54
                      </p>
                    </div>
                    <div>
                      <h3
                        style="
                          margin: 0;
                          padding: 0;
                          font-size: 16px;
                          color: rgb(92, 82, 96);
                          font-weight: 600;
                        "
                      >
                        Ganhos
                      </h3>
                      <p
                        style="
                          margin: 0;
                          padding: 0;
                          font-size: 22px;
                          font-weight: 600;
                        "
                      >
                        0
                      </p>
                    </div>
                    <div>
                      <h3
                        style="
                          margin: 0;
                          padding: 0;
                          font-size: 16px;
                          color: rgb(92, 82, 96);
                          font-weight: 600;
                        "
                      >
                        Perdidos
                      </h3>
                      <p
                        style="
                          margin: 0;
                          padding: 0;
                          font-size: 20px;
                          font-weight: 600;
                        "
                      >
                        0
                      </p>
                    </div>
                  </div>
                  <div
                    class="card"
                    style="
                      width: 49%;
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: space-around;
                      padding: 10px;
                      border-left: 3px solid rgb(0, 99, 192);
                    "
                  >
                    <h2 style="font-size: 24px; color: rgb(92, 82, 96)">
                      Clientes
                    </h2>
                    <div
                      style="
                        display: flex;
                        flex-direction: column;
                        align-items: left;
                      "
                    >
                      <h3
                        style="
                          margin: 0;
                          padding: 0;
                          font-size: 16px;
                          color: rgb(92, 82, 96);
                          font-weight: 600;
                        "
                      >
                        Iniciados
                      </h3>
                      <p
                        style="
                          margin: 0;
                          padding: 0;
                          font-size: 22px;
                          font-weight: 600;
                        "
                      >
                        54
                      </p>
                    </div>
                    <div>
                      <h3
                        style="
                          margin: 0;
                          padding: 0;
                          font-size: 16px;
                          color: rgb(92, 82, 96);
                          font-weight: 600;
                        "
                      >
                        Ganhos
                      </h3>
                      <p
                        style="
                          margin: 0;
                          padding: 0;
                          font-size: 22px;
                          font-weight: 600;
                        "
                      >
                        0
                      </p>
                    </div>
                    <div>
                      <h3
                        style="
                          margin: 0;
                          padding: 0;
                          font-size: 16px;
                          color: rgb(92, 82, 96);
                          font-weight: 600;
                        "
                      >
                        Perdidos
                      </h3>
                      <p
                        style="
                          margin: 0;
                          padding: 0;
                          font-size: 20px;
                          font-weight: 600;
                        "
                      >
                        0
                      </p>
                    </div>
                  </div>
                </div>

                <div class="card pe-4 ps-4 pt-4">
                  <h2
                    class="mb-0"
                    style="
                      font-size: 14px;
                      color: rgb(33, 35, 44);
                      font-weight: 900;
                    "
                  >
                    Negócios Perdidos por Etapa
                  </h2>
                  <p
                    class="mb-6"
                    style="
                      font-size: 14px;
                      line-height: 21px;
                      color: rgb(33, 35, 44);
                      font-weight: 400;
                    "
                  >
                    Análise de percentual de perdas em cada etapa
                  </p>

                  <graphBarAtivCrmComp />
                </div>
                <div class="card pe-4 ps-4 pt-4">
                  <h2
                    class="mb-0"
                    style="
                      font-size: 14px;
                      color: rgb(33, 35, 44);
                      font-weight: 900;
                    "
                  >
                    Principais motivos de perda
                  </h2>
                  <p
                    class="mb-2"
                    style="
                      font-size: 14px;
                      line-height: 21px;
                      color: rgb(33, 35, 44);
                      font-weight: 400;
                    "
                  >
                    Contabilizado por motivo
                  </p>

                  <graphBarLaterCrmComp />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- modal criar negocio -->
        <div
          class="modal fade"
          id="myModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          ref="myModal"
        >
          <div class="modal-dialog" style="padding-top: 80px" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Adicionar Negócio
                </h5>
                <button
                  type="button"
                  class="close custom-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
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
                    <label for="selectContato" style="font-weight: 600"
                      >Posição</label
                    >
                    <select
                      class="form-control"
                      v-model="posicao"
                      id="selectContato"
                      style="height: 40px !important"
                    >
                      <option value="" disabled selected hidden>
                        Selecione uma opção
                      </option>
                      <option value="contato">Contato</option>
                    </select>
                  </div>

                  <!-- Campo Nível de Interesse -->
                  <div class="form-group mt-3 col-6">
                    <label for="nivelInteresse" style="font-weight: 600"
                      >Nível de interesse</label
                    >
                    <div class="nivel-interesse">
                      <button
                        v-for="nivel in 5"
                        :key="nivel"
                        type="button"
                        class="nivel-btn"
                        :class="{ active: nivelInteresse >= nivel }"
                        @click="nivelInteresse = nivel"
                      >
                        {{ nivel }}
                      </button>
                      <div class="nivel-linha"></div>
                    </div>
                  </div>
                </div>

                <div class="form-group mt-3 col-12">
                  <label for="client" style="font-weight: 600">Cliente</label>
                  <div class="custom-select" ref="selectContainer">
                    <div
                      class="select-box"
                      @click="toggleDropdown"
                      :aria-expanded="isOpen.toString()"
                      role="button"
                      tabindex="0"
                    >
                      <span v-if="selectedOption">{{
                        selectedOption.name
                      }}</span>
                      <span v-else>Selecione um cliente</span>
                      <i class="align-middle" data-feather="chevron-down"></i>
                    </div>
                    <ul v-if="isOpen" class="options-list">
                      <li @click="addClient" style="background-color: #f1f4f9">
                        <button
                          class="btn"
                          style="
                            color: #026da6;
                            display: flex;
                            align-items: center;
                            font-weight: 600;
                          "
                        >
                          <img
                            :src="plusCircle"
                            style="width: 12px; height: 12px; margin-right: 6px"
                          />Adicionar
                        </button>
                      </li>
                      <li
                        v-for="client in clients"
                        :key="client.value"
                        @click="selectOption(client)"
                      >
                        <div style="display: flex; flex-direction: column">
                          <span
                            >{{ client.name }}
                            <img
                              :src="userIcon"
                              style="
                                width: 12px;
                                height: 12px;
                                margin-bottom: 2px;
                                margin-left: 2px;
                              "
                            />
                          </span>
                          <span class="">{{ client.phone }}</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="form-group mt-3 col-12">
                  <label for="client" style="font-weight: 600"
                    >Encontre o imóvel</label
                  >
                  <div class="custom-select" ref="selectContainerImovel">
                    <div
                      class="select-box"
                      @click="toggleDropdownImovel"
                      :aria-expanded="isOpenImovel.toString()"
                      role="button"
                      tabindex="0"
                    >
                      <span v-if="selectedOptionImovel">{{
                        selectedOptionImovel.titulo
                      }}</span>
                      <span v-else
                        >Procure por endereço ou nome do condomínio</span
                      >
                      <i class="align-middle" data-feather="chevron-down"></i>
                    </div>
                    <ul v-if="isOpenImovel" class="options-list">
                      <li
                        v-for="item in imovel"
                        :key="item.value"
                        @click="selectOptionImovel(item)"
                      >
                        <div style="display: flex">
                          <img
                            :src="item.image"
                            style="
                              width: 70px;
                              height: 70px;
                              border-radius: 10px;
                              margin-top: 3px;
                              margin-right: 8px;
                            "
                          />
                          <div
                            style="
                              display: flex;
                              flex-direction: column;
                              justify-content: center;
                            "
                          >
                            <h2
                              style="
                                margin: 0;
                                padding: 0;
                                font-size: 14px;
                                font-weight: 600;
                              "
                            >
                              {{ item.titulo }}
                            </h2>
                            <p
                              style="
                                margin: 0;
                                padding: 0;
                                font-size: 14px;
                                font-weight: 500;
                                color: #31d084;
                              "
                            >
                              R${{ item.value }}
                            </p>
                            <p
                              style="
                                margin: 0;
                                padding: 0;
                                font-size: 14px;
                                font-weight: 400;
                              "
                            >
                              {{ item.subTitulo }}
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                class="modal-footer"
                style="display: flex; justify-content: space-between"
              >
                <button
                  type="button"
                  class="btn btnModal"
                  style="
                    padding: 10px 15px;
                    border: 1px solid #d3dceb;
                    background-color: #fff;
                    color: #1c0c1e;
                    box-shadow: 0 0 5px rgba(211, 220, 235, 0.6);
                    font-size: 1em;
                    font-weight: 600;
                    cursor: pointer;
                  "
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  class="btn btnModal2"
                  style="
                    padding: 10px 15px;
                    border: 1px solid #d3dceb;
                    color: #fff;
                    background-color: #31d084;
                    box-shadow: 0 0 5px rgba(49, 208, 132, 0.6),
                      inset 0 0 1px rgba(0, 0, 0, 0.6);
                    font-size: 1em;
                    font-weight: 600;
                    cursor: pointer;
                  "
                >
                  Adicionar Negócio
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- modal para criar cliente -->
        <div
          class="modal fade"
          id="myModalClient"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          ref="myModalClient"
        >
          <div
            class="modal-dialog"
            style="max-width: 600px !important; padding-top: 40px"
            role="document"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Cadastrar Cliente
                </h5>
                <button
                  type="button"
                  class="close custom-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div class="modal-body" style="padding: 0 0">
                <div class="row">
                  <!-- Esquerda: Inputs e Selects com linha divisória -->
                  <div
                    class="col-6"
                    style="
                      border-right: 1px solid #ced4da;
                      padding-right: 15px;
                      padding-left: 25px;
                      padding-top: 20px;
                      padding-bottom: 20px;
                    "
                  >
                    <div class="form-group">
                      <label
                        for="nome"
                        style="font-size: 14px; font-weight: 600"
                        >Nome</label
                      ><strong class="text-danger">*</strong>
                      <input
                        type="text"
                        class="form-control"
                        id="nome"
                        v-model="nome"
                        placeholder="Digite..."
                        style="height: 40px"
                      />
                    </div>

                    <div class="form-group mt-3">
                      <label
                        for="email"
                        style="font-size: 14px; font-weight: 600"
                        >Email</label
                      >
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        v-model="email"
                        placeholder="Digite..."
                        style="height: 40px"
                      />
                    </div>

                    <div class="form-group mt-3">
                      <label
                        for="dataNascimento"
                        style="font-size: 14px; font-weight: 600"
                        >Data de Nascimento</label
                      >
                      <input
                        type="date"
                        class="form-control"
                        id="dataNascimento"
                        v-model="dataNascimento"
                        placeholder="Digite..."
                        style="height: 40px"
                      />
                    </div>

                    <div class="form-group mt-3">
                      <label
                        for="categoria"
                        style="font-size: 14px; font-weight: 600"
                        >Categoria</label
                      ><strong class="text-danger">*</strong>
                      <select
                        class="form-floating"
                        id="categoria"
                        v-model="categoria"
                        style="
                          height: 40px;
                          border: 1px solid #dee2e6;
                          width: 100%;
                        "
                      >
                        <option value="" disabled selected hidden>
                          Selecione uma categoria
                        </option>
                        <option value="categoria1">Categoria 1</option>
                        <option value="categoria2">Categoria 2</option>
                      </select>
                    </div>

                    <div class="form-group mt-3">
                      <label
                        for="origemCaptacao"
                        style="font-size: 14px; font-weight: 600"
                        >Origem de Captação</label
                      ><strong class="text-danger">*</strong>
                      <select
                        class="form-floating"
                        id="origemCaptacao"
                        v-model="origemCaptacao"
                        style="
                          height: 40px;
                          border: 1px solid #dee2e6;
                          width: 100%;
                        "
                      >
                        <option value="" disabled selected hidden>
                          Selecione uma origem
                        </option>
                        <option value="origem1">Origem 1</option>
                        <option value="origem2">Origem 2</option>
                      </select>
                    </div>

                    <div
                      class="mt-4"
                      style="
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                      "
                    >
                      <a
                        @click="openThirdModal"
                        style="
                          text-decoration: underline;
                          color: rgb(0, 132, 244);
                        "
                        >Ver cadastro completo</a
                      >
                    </div>
                  </div>

                  <!-- Direita: Select Corretor, Títulos e Botão -->
                  <div
                    class="col-6"
                    style="
                      padding-top: 20px;
                      padding-bottom: 20px;
                      padding-right: 12px;
                      padding-left: 0;
                    "
                  >
                    <div
                      class="form-group"
                      style="
                        border-bottom: 1px solid #dee2e6;
                        padding-right: 15px;
                        padding-left: 15px;
                        padding-bottom: 20px;
                      "
                    >
                      <label
                        for="corretorResponsavel"
                        style="font-size: 14px; font-weight: 600"
                        >Corretor Responsável</label
                      >
                      <select
                        class="form-floating"
                        id="corretorResponsavel"
                        v-model="corretorResponsavel"
                        style="
                          height: 40px;
                          border: 1px solid #dee2e6;
                          width: 100%;
                        "
                      >
                        <option value="" disabled selected hidden>
                          Selecione um corretor
                        </option>
                        <option value="corretor1">Corretor 1</option>
                        <option value="corretor2">Corretor 2</option>
                      </select>
                    </div>

                    <div class="mt-4" style="padding-left: 15px">
                      <h5 style="font-size: 14px; font-weight: 600">
                        Telefones
                      </h5>
                      <p
                        class="text-muted"
                        style="
                          font-size: 12px;
                          font-weight: 500;
                          margin-bottom: 5px;
                        "
                      >
                        Você ainda não cadastrou nenhum telefone.
                      </p>
                      <button
                        type="button "
                        class="btn btnModal"
                        @click="openSecondModal"
                        style="
                          padding: 5px 15px;
                          border: 1px solid #d3dceb;
                          background-color: #fff;
                          color: #1c0c1e;
                          box-shadow: 0 0 5px rgba(211, 220, 235, 0.6);
                          font-size: 0.9em;
                          font-weight: 600;
                          cursor: pointer;
                        "
                      >
                        Adicionar telefones
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="modal-footer"
                style="display: flex; justify-content: space-between"
              >
                <button
                  type="button"
                  class="btn btnModal"
                  style="
                    padding: 10px 15px;
                    border: 1px solid #d3dceb;
                    background-color: #fff;
                    color: #1c0c1e;
                    box-shadow: 0 0 5px rgba(211, 220, 235, 0.6);
                    font-size: 1em;
                    font-weight: 600;
                    cursor: pointer;
                  "
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  class="btn btnModal2"
                  style="
                    padding: 10px 15px;
                    border: 1px solid #d3dceb;
                    color: #fff;
                    background-color: #31d084;
                    box-shadow: 0 0 5px rgba(49, 208, 132, 0.6),
                      inset 0 0 1px rgba(0, 0, 0, 0.6);
                    font-size: 1em;
                    font-weight: 600;
                    cursor: pointer;
                  "
                >
                  Cadastrar
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal para adicionar telefones -->
        <div
          class="modal fade"
          id="modalAdicionarTelefone"
          tabindex="-1"
          role="dialog"
          aria-labelledby="modalAdicionarTelefoneLabel"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-sm"
            style="padding-top: 80px; margin-right: 10%"
            role="document"
          >
            <div class="modal-content">
              <!-- <div class="modal-header"> -->
              <button
                type="button"
                class="close custom-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <!-- </div> -->
              <div class="modal-body">
                <!-- Conteúdo do modal de adicionar telefones -->
                <div class="form-group">
                  <label
                    for="telefone"
                    style="font-size: 14px; font-weight: 600"
                    >Telefone</label
                  >
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <button
                        class="btn btn-outline-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style="
                          height: 40px;
                          border: 1px solid #d3dceb;
                          border-right: none;
                        "
                      >
                        <span
                          :class="'fi ' + selectedFlag"
                          style="margin-right: 8px"
                        ></span>
                        {{ selectedCode }}
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <li v-for="pais in paises" :key="pais.codigo">
                          <a
                            class="dropdown-item"
                            href="#"
                            @click.prevent="selecionarPais(pais)"
                          >
                            <span
                              :class="'fi ' + pais.flag"
                              style="margin-right: 8px"
                            ></span>
                            {{ pais.codigo }}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      id="telefone"
                      v-model="telefone"
                      placeholder="(99) 99999-9999"
                      style="height: 40px"
                    />
                  </div>
                </div>

                <div
                  class="form-group mt-3"
                  style="display: flex; flex-direction: column"
                >
                  <span style="font-size: 13px; font-weight: 600"
                    >É WhatsApp?</span
                  >
                  <div style="width: 100%">
                    <button
                      class="btn btn-green"
                      style="width: 50% !important; padding: 10px 0 !important"
                    >
                      Sim
                    </button>
                    <button
                      class="btn btn-white-no-border"
                      style="width: 50% !important; padding: 10px 0 !important"
                    >
                      Não
                    </button>
                  </div>
                </div>

                <div
                  class="form-group mt-3"
                  style="display: flex; flex-direction: column"
                >
                  <span style="font-size: 13px; font-weight: 600"
                    >Telefone Principal?</span
                  >
                  <div style="width: 100%">
                    <button
                      class="btn btn-green"
                      style="width: 50% !important; padding: 10px 0 !important"
                    >
                      Sim
                    </button>
                    <button
                      class="btn btn-white-no-border"
                      style="width: 50% !important; padding: 10px 0 !important"
                    >
                      Não
                    </button>
                  </div>
                </div>

                <div class="form-group mt-3">
                  <span style="font-size: 13px; font-weight: 600"
                    >Breve descrição</span
                  >
                  <input
                    type="text"
                    placeholder="Ex: Celular"
                    class="form-control"
                    style="height: 40px"
                  />
                </div>
              </div>
              <div
                class="form-group"
                style="
                  background-color: #fff;
                  padding: 1rem 18px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                "
              >
                <button
                  type="button"
                  class="btn btn-greenHover"
                  style="width: 100%; padding: 15px 0 !important"
                >
                  Concluir
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal de cadastro completo -->
        <div
          class="modal fade"
          id="myModalComplete"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalComplete"
          aria-hidden="true"
          ref="myModalComplete"
        >
          <div
            class="modal-dialog modal-xl"
            style="padding-top: 40px"
            role="document"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Cadastrar Clientes
                </h5>
                <button
                  type="button"
                  class="close custom-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div class="modal-body" style="padding: 0 0">
                <div class="row">
                  <!-- Esquerda: Inputs e Selects com linha divisória -->
                  <div
                    class="col-6"
                    style="
                      border-right: 1px solid #ced4da;
                      padding-right: 15px;
                      padding-left: 25px;
                      padding-top: 20px;
                      padding-bottom: 20px;
                    "
                  >
                    <div class="row">
                      <div class="form-group col-6">
                        <label
                          for="nome"
                          style="font-size: 14px; font-weight: 600"
                          >Nome</label
                        ><strong class="text-danger">*</strong>
                        <input
                          type="text"
                          class="form-control"
                          id="nome"
                          v-model="nome"
                          placeholder="Digite..."
                          style="height: 40px"
                        />
                      </div>

                      <div class="form-group col-6">
                        <label
                          for="email"
                          style="font-size: 14px; font-weight: 600"
                          >Email</label
                        >
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          v-model="email"
                          placeholder="Digite..."
                          style="height: 40px"
                        />
                      </div>

                      <div class="form-group mt-3">
                        <label
                          for="dataNascimento"
                          style="font-size: 14px; font-weight: 600"
                          >Data de Nascimento</label
                        >
                        <input
                          type="date"
                          class="form-control"
                          id="dataNascimento"
                          v-model="dataNascimento"
                          placeholder="Digite..."
                          style="height: 40px"
                        />
                      </div>

                      <div class="form-group mt-3">
                        <label
                          for="categoria"
                          style="font-size: 14px; font-weight: 600"
                          >Categoria</label
                        ><strong class="text-danger">*</strong>
                        <select
                          class="form-floating"
                          id="categoria"
                          v-model="categoria"
                          style="
                            height: 40px;
                            border: 1px solid #dee2e6;
                            width: 100%;
                          "
                        >
                          <option value="" disabled selected hidden>
                            Selecione uma categoria
                          </option>
                          <option value="categoria1">Categoria 1</option>
                          <option value="categoria2">Categoria 2</option>
                        </select>
                      </div>

                      <div class="form-group mt-3">
                        <label
                          for="origemCaptacao"
                          style="font-size: 14px; font-weight: 600"
                          >Origem de Captação</label
                        ><strong class="text-danger">*</strong>
                        <select
                          class="form-floating"
                          id="origemCaptacao"
                          v-model="origemCaptacao"
                          style="
                            height: 40px;
                            border: 1px solid #dee2e6;
                            width: 100%;
                          "
                        >
                          <option value="" disabled selected hidden>
                            Selecione uma origem
                          </option>
                          <option value="origem1">Origem 1</option>
                          <option value="origem2">Origem 2</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <!-- Direita: Select Corretor, Títulos e Botão -->
                  <div
                    class="col-6"
                    style="
                      padding-top: 20px;
                      padding-bottom: 20px;
                      padding-right: 12px;
                      padding-left: 0;
                    "
                  >
                    <div
                      class="form-group"
                      style="
                        border-bottom: 1px solid #dee2e6;
                        padding-right: 15px;
                        padding-left: 15px;
                        padding-bottom: 20px;
                      "
                    >
                      <label
                        for="corretorResponsavel"
                        style="font-size: 14px; font-weight: 600"
                        >Corretor Responsável</label
                      >
                      <select
                        class="form-floating"
                        id="corretorResponsavel"
                        v-model="corretorResponsavel"
                        style="
                          height: 40px;
                          border: 1px solid #dee2e6;
                          width: 100%;
                        "
                      >
                        <option value="" disabled selected hidden>
                          Selecione um corretor
                        </option>
                        <option value="corretor1">Corretor 1</option>
                        <option value="corretor2">Corretor 2</option>
                      </select>
                    </div>

                    <div class="mt-4" style="padding-left: 15px">
                      <h5 style="font-size: 14px; font-weight: 600">
                        Telefones
                      </h5>
                      <p
                        class="text-muted"
                        style="
                          font-size: 12px;
                          font-weight: 500;
                          margin-bottom: 5px;
                        "
                      >
                        Você ainda não cadastrou nenhum telefone.
                      </p>
                      <button
                        type="button "
                        class="btn btnModal"
                        @click="openSecondModal"
                        style="
                          padding: 5px 15px;
                          border: 1px solid #d3dceb;
                          background-color: #fff;
                          color: #1c0c1e;
                          box-shadow: 0 0 5px rgba(211, 220, 235, 0.6);
                          font-size: 0.9em;
                          font-weight: 600;
                          cursor: pointer;
                        "
                      >
                        Adicionar telefones
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="modal-footer"
                style="display: flex; justify-content: space-between"
              >
                <button
                  type="button"
                  class="btn btnModal"
                  style="
                    padding: 10px 15px;
                    border: 1px solid #d3dceb;
                    background-color: #fff;
                    color: #1c0c1e;
                    box-shadow: 0 0 5px rgba(211, 220, 235, 0.6);
                    font-size: 1em;
                    font-weight: 600;
                    cursor: pointer;
                  "
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  class="btn btnModal2"
                  style="
                    padding: 10px 15px;
                    border: 1px solid #d3dceb;
                    color: #fff;
                    background-color: #31d084;
                    box-shadow: 0 0 5px rgba(49, 208, 132, 0.6),
                      inset 0 0 1px rgba(0, 0, 0, 0.6);
                    font-size: 1em;
                    font-weight: 600;
                    cursor: pointer;
                  "
                >
                  Cadastrar
                </button>
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

export default {
  name: "CrmView",
  components: {
    navbarImobiliaria,
    footer,
    sidebarCrm,
    graphAtivCrmComp,
    graphBarAtivCrmComp,
    graphBarLaterCrmComp,
  },
  data() {
    return {
      graphType: "",
      youtubeLogo,
      userIcon,
      plusCircle,

      posicao: "", // Variável para armazenar o contato selecionado
      nivelInteresse: 1,
      selectCliente: "",

      etapas: [
        { nome: "Contato", qtd: 3, vgv: 100, valor: "748.356,00" },
        { nome: "Atendimento", qtd: 5, vgv: 98, valor: "1.247.260,00" },
        { nome: "Procurando Imóvel", qtd: 3, vgv: 96, valor: "748.356,00" },
        { nome: "Efetuar ligação", qtd: 6, vgv: 94, valor: "1.496.712,00" },
        { nome: "WhatsApp (Dia 1)", qtd: 0, vgv: 92, valor: "0,00" },
        { nome: "WhatsApp (Dia 2)", qtd: 0, vgv: 90, valor: "0,00" },
        { nome: "WhatsApp (Dia 3)", qtd: 0, vgv: 88, valor: "0,00" },
        { nome: "Aquecimento 01", qtd: 2, vgv: 87, valor: "498.904,00" },
        { nome: "Aquecimento 02", qtd: 0, vgv: 86, valor: " 0,00" },
        { nome: "Aquecimento 02", qtd: 0, vgv: 85, valor: "0,00" },
        { nome: "Aquecimento 02", qtd: 0, vgv: 84, valor: "0,00" },
        { nome: "Aquecimento 02", qtd: 21, vgv: 83, valor: "5.238.492,00" },
        { nome: "Agendado Compromisso", qtd: 2, vgv: 82, valor: "498.904,00" },
        { nome: "Agendamento Longo", qtd: 2, vgv: 81, valor: "498.904,00" },
        { nome: "Agendado Visita", qtd: 0, vgv: 80, valor: "0,00" },
        { nome: "Visita Realizada", qtd: 1, vgv: 79, valor: "249.452,00" },
        { nome: "Proposta", qtd: 0, vgv: 78, valor: "0,00" },
        { nome: "Documentação", qtd: 0, vgv: 77, valor: "0,00" },
        { nome: "Assinatura", qtd: 0, vgv: 76, valor: "0,00" },
        { nome: "Sem Interação", qtd: 0, vgv: 75, valor: "0,00" },
        { nome: "Descartado", qtd: 9, vgv: 74, valor: "2.245.068,00" },
      ],

      isOpen: false,
      isOpenImovel: false,
      selectedOption: null,
      selectedOptionImovel: null,
      clients: [
        {
          value: "client1",
          name: "Marcelo Agostini",
          phone: "(61) 98107-8419",
        },
        // Adicione outros clientes aqui
      ],
      imovel: [
        {
          id: 1,
          image: "../../../../assets/images/casaFrente.jpeg",
          titulo: "Apartamento - Ref.: 144",
          value: "2.000,00",
          subTitulo: "Manaíra - João Pessoa/PB",
        },
        {
          id: 2,
          image: "../../../../assets/images/casaFrente.jpeg",
          titulo: "Apartamento - Ref.: 128",
          value: "2.000,00",
          subTitulo: "Manaíra - João Pessoa/PB",
        },
        {
          id: 2,
          image: "../../../../assets/images/casaFrente.jpeg",
          titulo: "Apartamento - Ref.: 144",
          value: "2.000,00",
          subTitulo: "Manaíra - João Pessoa/PB",
        },
        {
          id: 2,
          image: "../../../../assets/images/casaFrente.jpeg",
          titulo: "Apartamento - Ref.: 144",
          value: "2.000,00",
          subTitulo: "Manaíra - João Pessoa/PB",
        },
        {
          id: 2,
          image: "../../../../assets/images/casaFrente.jpeg",
          titulo: "Apartamento - Ref.: 144",
          value: "2.000,00",
          subTitulo: "Manaíra - João Pessoa/PB",
        },
        {
          id: 2,
          image: "../../../../assets/images/casaFrente.jpeg",
          titulo: "Apartamento - Ref.: 144",
          value: "2.000,00",
          subTitulo: "Manaíra - João Pessoa/PB",
        },
      ],

      telefone: "",
      selectedFlag: "fi-br", // Bandeira inicial (Brasil)
      selectedCode: "+55", // Código inicial
      paises: [
        { flag: "fi-br", codigo: "+55" }, // Brasil
        { flag: "fi-us", codigo: "+1" }, // Estados Unidos
        { flag: "fi-gb", codigo: "+44" }, // Reino Unido
        // Adicione mais países aqui
      ],
    };
  },
  methods: {
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
    calculateBarWidth(vgv) {
      const maxVGV = Math.max(...this.etapas.map((etapa) => etapa.vgv));
      return (vgv / maxVGV) * 100; // Proporção em relação ao maior VGV
    },
    calculateBarColor(index) {
      // Cor base para a primeira barra
      const baseColor = { r: 25, g: 114, b: 198 };

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
  },

  mounted() {
    document.addEventListener("click", this.handleClickOutside);
    // Initialize Feather icons
    if (window.feather) window.feather.replace();

    document.addEventListener("click", this.handleClickOutsideImovel);
    // Initialize Feather icons
    if (window.feather) window.feather.replace();
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
    document.removeEventListener("click", this.handleClickOutsideImovel);
  },
};
</script>
<style>
.modal-backdrop {
  z-index: 1040 !important;
}

.modal {
  z-index: 1050 !important;
}
/* Custom styles for reducing font size */
.custom-nav-link {
  font-size: 0.79rem; /* Smaller font size */
  font-weight: 400; /* Increased font-weight */
}
.custom-select {
  font-size: 0.75rem; /* Smaller font size */
}

.btn-oranges {
  color: #fff; /* Texto branco */
  border: none; /* Remove a borda padrão */
  background-color: #ff9702;
  box-shadow: 0 0 5px rgba(255, 151, 2, 0.6), inset 0 0 1px rgba(0, 0, 0, 0.6); /* Sombra laranja */
  transition: background-color 0.3s, box-shadow 0.3s; /* Transições suaves */
}

.btn-blues {
  color: #fff; /* Texto branco */
  border: none; /* Remove a borda padrão */
  background-color: #0084f4;
  box-shadow: 0 0 5px rgba(0, 132, 255, 0.6), inset 0 0 1px rgba(0, 0, 0, 0.6); /* Sombra laranja */
  transition: background-color 0.3s, box-shadow 0.3s; /* Transições suaves */
}

.btn-white {
  color: #000; /* Texto branco */
  border: none; /* Remove a borda padrão */
  background-color: #fff;
  box-shadow: 0 0 5px rgba(41, 41, 40, 0.6), inset 0 0 1px rgba(0, 0, 0, 0.6); /* Sombra laranja */
  transition: background-color 0.3s, box-shadow 0.3s; /* Transições suaves */
}

.btn-white-no-border {
  color: #000; /* Texto branco */
  border: 1px solid #d3dceb; /* Remove a borda padrão */
  background-color: #fff;
}

.btn-green {
  color: #fff; /* Texto branco */
  border: none; /* Remove a borda padrão */
  background-color: #31d084;
  box-shadow: 0 0 5px rgba(146, 255, 138, 0.6), inset 0 0 1px rgba(0, 0, 0, 0.6); /* Sombra laranja */
  transition: background-color 0.3s, box-shadow 0.3s; /* Transições suaves */
}
.btn-greenHover {
  color: #fff; /* Texto branco */
  border: none; /* Remove a borda padrão */
  background-color: #31d084;
  box-shadow: 0 0 5px rgba(146, 255, 138, 0.6), inset 0 0 1px rgba(0, 0, 0, 0.6); /* Sombra laranja */
  transition: background-color 0.3s, box-shadow 0.3s; /* Transições suaves */
}

.btn-oranges:hover {
  background-color: #af6901; /* Laranja mais escuro ao passar o mouse */
  color: #fff; /* Garantir que o texto permaneça branco */
}
.btn-blues:hover {
  background-color: #0072e5; /* Laranja mais escuro ao passar o mouse */
  color: #fff; /* Garantir que o texto permaneça branco */
}
.btn-white:hover {
  background-color: #efeeee; /* Laranja mais escuro ao passar o mouse */
  color: #000; /* Garantir que o texto permaneça branco */
}
.btn-white-no-border:hover {
  border: 1px solid #d3dceb;
  background-color: #fff; /* Laranja mais escuro ao passar o mouse */
  color: #000; /* Garantir que o texto permaneça branco */
}
.btn-green:hover {
  background-color: #31d084; /* Laranja mais escuro ao passar o mouse */
  color: #fff; /* Garantir que o texto permaneça branco */
}
.btn-greenHover:hover {
  background-color: #33b476; /* Laranja mais escuro ao passar o mouse */
  color: #fff; /* Garantir que o texto permaneça branco */
}
.custom-close {
  position: absolute;
  top: -25px; /* Ajuste a posição vertical */
  right: -20px; /* Ajuste a posição horizontal */
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
  max-height: 200px; /* Optional: limit the height of the dropdown */
  overflow-y: auto; /* Optional: enable scrolling if content is too long */
  z-index: 1000; /* Ensures the dropdown appears above other elements */
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
  background-color: #fff; /* Garante que cada seção tenha fundo branco */
}
</style>
