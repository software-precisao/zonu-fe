<template>
  <div class="main">
    <navbarImobiliaria />
    <main class="">
      <div class="" style="display: flex; flex-direction: row">
        <!-- Sidebar com opções e ícones -->
        <sidebarCrm tab="Imóveis reservados" />
        <!-- Dashboard -->
        <div class="" style="width: 100%">
          <header class="pe-3 ps-3" style="
              background-color: #fff;
              height: 60px;
              width: 100%;
              border-bottom: 1px solid #d3d3d3;
              display: flex;
              align-items: center;
              justify-content: space-between;
            ">
            <h4 class="fw-semibold mt-2" style="font-size: 13px">
              Negócios em andamento | Imóveis reservados | 0 Imóvel | 0 Cliente
              | R$0,00
            </h4>
          </header>

          <div class="">
            <div class="row justify-content-center">
              <div class="col-10 mb-3 mt-3">
                <!-- caso nao tenha nenhum imovel reservado -->
                <!-- <div style="
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    margin-top: 7rem
                  ">
                  <img :src="homeIcon" style="width: 80px; height: 80px; margin-bottom: 1rem" />
                  <h2 style="font-size: 1.14286em; font-weight: 600">
                    Nenhum imóvel reservado
                  </h2>
                </div> -->

                <div class="skeleton-big-card" v-if="!mostrarSkeleton"></div>
                <div class="card" v-if="mostrarSkeleton">
                  <div class="table-responsive">
                    <table class="table" style="
                        font-size: 14px;
                        border: 1px solid rgb(216, 216, 216);
                        border-radius: 5px;
                      ">
                      <thead>
                        <tr style="background-color: rgb(244, 244, 244)">
                          <th>
                            <input class="form-check-input" type="checkbox" :id="'flexCheck'" />
                          </th>
                          <th>Imóvel</th>
                          <th class="text-center">Detalhes</th>
                          <th class="text-center">No Radar</th>
                          <th class="text-center">Compartilhar</th>
                          <th class="text-center"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in usuariosOnCurrentPage" :key="item.id" style="cursor: pointer">
                          <td>
                            <input class="form-check-input" type="checkbox" :id="'flexCheck' + item.id_imovel" />
                          </td>
                          <td style="display: flex">
                            <img :src="`https://zonu.com.br/api${item.fotos[0].foto}`" style="
                                width: 60px;
                                height: 60px;
                                border-radius: 10px;
                                margin-right: 10px;
                              " />
                            <div style="
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                font-size: 14px;
                                color: #000;
                              ">
                              <span style="font-weight: 900">{{
                                item.descricao.titulo
                              }}</span>
                              <span>{{ item.localizacao.bairro }} - {{ item.localizacao.cidade }}/{{
                                item.localizacao.estado
                              }}</span>
                            </div>
                          </td>
                          <td class="text-center">
                            <div style="
                                display: flex;
                                align-items: center;
                                justify-content: center;
                              ">
                              <img :src="bedIcon" style="
                                  width: 20px;
                                  height: 20px;
                                  margin-right: 5px;
                                " /><span style="margin-right: 5px; font-weight: 500">{{ item.comodos.dormitorio
                                }} | {{ item.comodos.suite }}</span>
                              <img v-if="item.comodos.garagem != '' || item.comodos.garagem != '0'" :src="carIcon"
                                style="
                                  width: 20px;
                                  height: 20px;
                                  margin-right: 5px;
                                " /><span style="font-weight: 500">{{ item.comodos.garagem }}</span>
                            </div>
                            <span :style="{
                              color:
                                item.detalhes > '2.000' ? 'orange' : 'green',
                            }" style="font-weight: 700">
                              R${{ aplicaMascaraDinheiroPrecoImovel(item.preco.preco_imovel) }}
                            </span>
                          </td>
                          <td class="text-center" style="color: #000">
                            30
                          </td>
                          <td class="text-center">
                            <a style="text-decoration: underline; color: blue">compartilhar</a>
                          </td>
                          <td>
                            <i class="align-middle" data-feather="trash-2"></i>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div style="
                    display: flex;
                    width: 100%;
                    align-items: center;
                    justify-content: center;
                  ">
                  <button class="btnHoverPag" style="
                      border: none;
                      color: #0084f4;
                      font-weight: 700;
                      line-height: 22px;
                      margin-right: 50px;
                      padding: 0 0.25em;
                      border-radius: 4px;
                    " @click="previousPageUser()" :disabled="currentPageUser <= 1">
                    <i class="align-middle" data-feather="chevron-left"></i>Anterior
                  </button>
                  <button class="btnHoverPag" style="
                      border: none;
                      color: #0084f4;
                      font-weight: 700;
                      line-height: 22px;
                      padding: 0 0.25em;
                      border-radius: 8px;
                    " @click="nextPageUser()" :disabled="currentPageUser >= totalPagesUsuarios">
                    Próximo
                    <i class="align-middle" data-feather="chevron-right"></i>
                  </button>
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
import barCodeIcon from "../../../../assets/images/icons/barCodeIcon.svg";
import homeIcon from "../../../../assets/images/icons/homeIcone.svg";
import { jwtDecode } from "jwt-decode";
import api from '../../../../service/api/index'
import apiImovel from '../../../../service/api/imoveis/index'

export default {
  name: "CrmImoReserView",
  components: {
    navbarImobiliaria,
    footer,
    sidebarCrm,
  },
  data() {
    return {
      token: localStorage.getItem("token"),
      id_user: "",
      userName: "",
      userSobrenome: "",
      corretorResponsavel: "",

      graphType: "",
      youtubeLogo,
      barCodeIcon,
      homeIcon,

      canais: "",
      contatos: "",
      dataInicio: "",
      dataFinal: "",

      mostrarSkeleton: false,
    };
  },
  mounted() {
    let token = this.token;
    let decode = jwtDecode(token);
    let id_user = decode.id_user;
    this.userName = decode.nome;
    this.userSobrenome = decode.sobrenome;

    this.id_user = id_user;

    this.corretorResponsavel = `${this.userName} ${this.userSobrenome}`;

    this.fetchFunil()
    setTimeout(() => {
      this.fetchNegocios()
      this.fetchImoveis()
    }, 2000);

    setTimeout(() => {
      this.mostrarSkeleton = true
    }, 3000);
  },
  methods: {

  },
};
</script>
