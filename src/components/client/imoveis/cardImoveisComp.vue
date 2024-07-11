<template>
  <div class="card flex-fill w-100">
    <div class="card-header">
      <h5 class="card-title mb-0">
        <i class="fa fa-clock"></i> Seus ultimos imóveis cadastrados
      </h5>
    </div>
    {{ console.log(this.allImoveis) }}
    <div class="card-body py-3">
      <input
        type="text"
        placeholder="Pesquise aqui"
        class="form-control mb-3"
        aria-describedby="passwordHelpBlock"
        v-model="searchImovel"
      />
      <div
        class="mt-5"
        v-for="item in imoveisOnCurrentPage"
        :key="item.id_imovel"
      >
        <a class="row" style="text-decoration: none">
          <div class="col-3">
            <img
              class="thumbImovel"
              :src="`https://zonu.com.br/api${item.fotos[0].foto}`"
              alt=""
            />
          </div>

          <div class="col-9" style="margin-left: -10px">
            <h5>
              <i class="fa fa-building"></i>
              <a
                href="#"
                style="text-decoration: none; color: #000"
                data-bs-toggle="modal"
                :data-bs-target="`#modalImovel${item.id_imovel}`"
                ><strong>{{ item.descricao.titulo }}</strong></a
              >
              <span class="badge text-bg-success">{{
                item.preco.tipo_negocio
              }}</span
              ><a
                data-bs-toggle="modal"
                :data-bs-target="`#exampleModal${item.id_imovel}`"
                style="float: inline-end"
                class="text-danger"
                ><i class="fa fa-trash"></i
              ></a>
            </h5>
            <h5 class="text-info">
              <strong>{{ formatCurrency(item.preco.preco_imovel) }}</strong
              ><a
                data-bs-toggle="modal"
                :data-bs-target="`#modalImovel${item.id_imovel}`"
                style="float: inline-end"
                class="text-info"
                ><i class="fa fa-eye"></i
              ></a>
            </h5>
            <h5 class="text-dark">
              <small
                ><i class="fa fa-map-marker"></i>
                {{ item.localizacao.logradouro }},
                {{ item.localizacao.numero }} | {{ item.localizacao.bairro }},
                {{ item.localizacao.cidade }}</small
              >
              <a
                data-bs-toggle="modal"
                :data-bs-target="`#modalEditImovel${item.id_imovel}`"
                @click="openModal(item.id_imovel)"
                style="float: inline-end"
                class="text-warning"
                ><i class="fa fa-edit"></i
              ></a>
            </h5>
            <h5 class="text-dark">
              <small
                ><i class="fa fa-calendar"></i> Atualizado:
                {{ formatarData(item.updatedAt) }}</small
              >
              <i
                v-for="star in estrelas"
                :key="star"
                class="text-warning fa fa-star"
              ></i>
              <span
                class="text-success"
                style="float: inline-end; font-weight: 900"
              >
                {{ qualidade }}</span
              >
            </h5>
          </div>
        </a>

        <div
          class="modal fade"
          :id="`exampleModal${item.id_imovel}`"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  <i class="fa fa-trash"></i> Apagar imóvel
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <h3 class="text-center">
                  Você tem certeza que deseja apagar este imóvel?
                </h3>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Fechar
                </button>
                <button
                  @click="handledDelete(item.id_imovel)"
                  type="button"
                  class="btn btn-success"
                >
                  <i class="fa fa-trash"></i> Sim, apagar
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr class="mt-3" />
        <!-- Modal -->
        <div
          class="modal fade"
          :id="`modalImovel${item.id_imovel}`"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  <i class="fa fa-building"></i> {{ item.descricao.titulo }}
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      class="nav-link active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      <i class="fa fa-bell" aria-hidden="true"></i>

                      Informações do imóvel
                    </button>

                    <button
                      class="nav-link"
                      id="nav-comentario-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-comentario"
                      type="button"
                      role="tab"
                      aria-controls="nav-comentario"
                      aria-selected="false"
                    >
                      Anotações <small><i class="fa fa-file"></i></small>
                    </button>

                    <button
                      class="nav-link"
                      id="nav-documentos-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-documentos"
                      type="button"
                      role="tab"
                      aria-controls="nav-documentos"
                      aria-selected="false"
                    >
                      Documentos <small><i class="fa fa-folder"></i></small>
                    </button>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                    tabindex="0"
                  >
                    <div class="container">
                      <div class="row">
                        <div
                          class="col-md-2 mt-4"
                          v-for="foto in item.fotos"
                          :key="foto.id_imagem"
                        >
                          <img
                            :src="`https://zonu.com.br/api${foto.foto}`"
                            :alt="`Foto ${foto.id_imagem} do Imóvel ${item.id_imovel}`"
                            class="thumbnail-modal"
                          />
                        </div>
                      </div>

                      <div class="row mt-4">
                        <div class="col-md-2">
                          <h5>
                            <strong
                              ><i class="fa fa-money" aria-hidden="true"></i>
                              Preço
                              <small
                                style="font-size: 10px"
                                class="text-secondary"
                                >({{ item.preco.tipo_negocio }})</small
                              ></strong
                            >
                          </h5>
                          <h4 class="text-success">
                            <strong>{{ item.preco.preco_imovel }} </strong>
                          </h4>
                        </div>
                        <div class="col-md-2">
                          <h5>
                            <strong
                              ><i class="fa fa-money" aria-hidden="true"></i>
                              Condomínio</strong
                            >
                          </h5>
                          <h4 class="text-success">
                            <strong>{{ item.preco.preco_condominio }}</strong>
                          </h4>
                        </div>
                        <div class="col-md-2">
                          <h5>
                            <strong
                              ><i class="fa fa-tag" aria-hidden="true"></i>
                              Taxas
                              <small
                                style="font-size: 10px"
                                class="text-secondary"
                                >(Mensal)</small
                              ></strong
                            >
                          </h5>
                          <h4 class="text-success">
                            <strong>{{ item.preco.total_mensal_taxas }}</strong>
                          </h4>
                        </div>
                        <hr class="mt-3" />
                      </div>

                      <div class="row mt-3">
                        <div class="col-md-8">
                          <h6 style="font-size: 12px">
                            <strong
                              ><i
                                class="fa fa-building-o"
                                aria-hidden="true"
                              ></i>
                              Cômodos</strong
                            >
                          </h6>
                          <div class="row mt-3 ml-2">
                            <div class="col-md-3">
                              <h6 style="font-size: 12px; text-align: right">
                                <strong
                                  >Dormitórios:
                                  {{ item.comodos.dormitorio }}</strong
                                >
                              </h6>
                              <h6
                                v-if="item.comodos.suite !== 0"
                                style="font-size: 12px; text-align: right"
                              >
                                <strong
                                  >Sendo Suites:
                                  {{ item.comodos.suite }}</strong
                                >
                              </h6>
                              <h6
                                v-if="item.comodos.suite == 0"
                                style="font-size: 12px; text-align: right"
                              >
                                <strong>Sendo Suites: Não</strong>
                              </h6>
                              <h6 style="font-size: 12px; text-align: right">
                                <strong
                                  >Banheiros:
                                  {{ item.comodos.banheiro }}</strong
                                >
                              </h6>
                              <h6
                                v-if="item.comodos.garagem == 0"
                                style="font-size: 12px; text-align: right"
                              >
                                <strong>Garagens: Não</strong>
                              </h6>
                              <h6
                                v-if="item.comodos.garagem !== 0"
                                style="font-size: 12px; text-align: right"
                              >
                                <strong
                                  >Garagens: {{ item.comodos.garagem }}</strong
                                >
                              </h6>
                            </div>
                            <div class="col-md-3">
                              <h6 style="font-size: 12px; text-align: right">
                                <strong
                                  >Área de Serviço:
                                  {{ item.comodos.area_servico }}</strong
                                >
                              </h6>
                              <h6 style="font-size: 12px; text-align: right">
                                <strong
                                  >Banheiros:
                                  {{ item.comodos.banheiro }}</strong
                                >
                              </h6>
                              <h6 style="font-size: 12px; text-align: right">
                                <strong
                                  >Dep. empregada:
                                  {{ item.comodos.casa_empregada }}</strong
                                >
                              </h6>

                              <h6 style="font-size: 12px; text-align: right">
                                <strong
                                  >Box Garagem:
                                  {{ item.comodos.garagem_box }}</strong
                                >
                              </h6>
                            </div>
                            <div class="col-md-2">
                              <h6 style="font-size: 12px; text-align: right">
                                <strong>Copa: {{ item.comodos.copa }}</strong>
                              </h6>
                              <h6 style="font-size: 12px; text-align: right">
                                <strong
                                  >Cozinha: {{ item.comodos.cozinha }}</strong
                                >
                              </h6>
                              <h6 style="font-size: 12px; text-align: right">
                                <strong
                                  >Escritório:
                                  {{ item.comodos.escritorio }}</strong
                                >
                              </h6>
                              <h6 style="font-size: 12px; text-align: right">
                                <strong
                                  >Garagem coberta:
                                  {{ item.comodos.garagem_coberta }}</strong
                                >
                              </h6>
                            </div>
                            <div class="col-md-2">
                              <h6 style="font-size: 12px; text-align: right">
                                <strong
                                  >Closet: {{ item.comodos.closet }}</strong
                                >
                              </h6>
                              <h6 style="font-size: 12px; text-align: right">
                                <strong
                                  >Lavabo: {{ item.comodos.lavabo }}</strong
                                >
                              </h6>
                              <h6 style="font-size: 12px; text-align: right">
                                <strong
                                  >Sl de estar:
                                  {{ item.comodos.sala_estar }}</strong
                                >
                              </h6>
                              <h6 style="font-size: 12px; text-align: right">
                                <strong
                                  >Sl de jantar:
                                  {{ item.comodos.sala_jantar }}</strong
                                >
                              </h6>
                            </div>

                            <div class="col-md-2">
                              <h6 style="font-size: 12px; text-align: right">
                                <strong
                                  >Sala de TV:
                                  {{ item.comodos.sala_tv }}</strong
                                >
                              </h6>
                              <h6 style="font-size: 12px; text-align: right">
                                <strong
                                  >Dormitórios com suites:
                                  {{ item.comodos.suite }}</strong
                                >
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-1 mt-3">
                          <div
                            style="border-left: 1px solid #0001; height: 100px"
                          ></div>
                        </div>
                        <div class="col-md-2">
                          <h6 style="font-size: 12px; margin-left: -70px">
                            <strong
                              ><i class="fa fa-ruler" aria-hidden="true"></i>
                              Medida das áreas</strong
                            >
                          </h6>
                          <div class="row mt-3" style="margin-left: -50px">
                            <div class="col-md-12">
                              <h6 style="font-size: 12px">
                                <strong
                                  >Total:
                                  {{ item.medidas.area_total }} m²</strong
                                >
                              </h6>
                              <h6 style="font-size: 12px">
                                <strong
                                  >Construida:
                                  {{ item.medidas.area_contruida }} m²</strong
                                >
                              </h6>
                              <h6 style="font-size: 12px">
                                <strong
                                  >Privativa:
                                  {{ item.medidas.area_privativa }} m²</strong
                                >
                              </h6>
                              <h6 style="font-size: 12px">
                                <strong
                                  >Preço m²: R$
                                  {{
                                    item.medidas.media_metro_quadrado
                                  }}</strong
                                >
                              </h6>
                            </div>
                          </div>
                        </div>

                        <hr class="mt-3" />

                        <div class="col-md-7">
                          <h6 style="font-size: 12px">
                            <strong
                              ><i
                                class="fa fa-check-square"
                                aria-hidden="true"
                              ></i>
                              Caracteística do imóvel</strong
                            >
                          </h6>
                          <div class="row mt-3">
                            <div
                              class="col-md-2"
                              v-for="dado in item.caracteristicas"
                            >
                              <h6>
                                <span
                                  ><i class="fa fa-check"></i>
                                  <small>{{
                                    dado.detalhesCaracteristica
                                      .nome_caracteristica
                                  }}</small></span
                                >
                              </h6>
                            </div>
                          </div>
                          <hr />
                        </div>

                        <div class="col-md-5">
                          <h6 style="font-size: 12px">
                            <strong
                              ><i class="fa fa-edit" aria-hidden="true"></i>
                              Detalhes do imóvel</strong
                            >
                          </h6>
                          <div class="row mt-3">
                            <div class="col-md-2">
                              <div
                                class="avatar-null img-fluid rounded me-1"
                                alt="Avatar"
                              >
                                {{ iniciais }}
                              </div>
                            </div>
                            <div class="col-md-3 mb-3">
                              <h6 style="font-size: 12px">
                                <strong>Responsável</strong>
                              </h6>
                              <h6 style="font-size: 12px">
                                {{ nome }} {{ sobrenome }}
                              </h6>
                            </div>
                            <div class="col-md-1">
                              <div
                                style="
                                  border-left: 1px solid #0001;
                                  height: 40px;
                                "
                              ></div>
                            </div>
                            <div class="col-md-3" style="margin-top: -10px">
                              <img
                                :src="item.qrcode[0].qrcode"
                                width="50"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>

                        <div class="col-md-7" style="margin-top: 4%">
                          <h6 style="font-size: 12px">
                            <strong
                              ><i
                                class="fa fa-check-square"
                                aria-hidden="true"
                              ></i>
                              Proximidades</strong
                            >
                          </h6>
                          <div class="row mt-3">
                            <div
                              class="col-md-2"
                              v-for="dado in item.proximidades"
                            >
                              <h6>
                                <span
                                  ><i class="fa fa-check"></i
                                  ><small>
                                    {{
                                      dado.detalhesProximidade !== null
                                        ? dado.detalhesProximidade
                                            .nome_proximidade
                                        : ""
                                    }}</small
                                  >
                                </span>
                              </h6>
                            </div>
                          </div>
                          <hr />
                        </div>

                        <div class="col-md-7" style="margin-top: 2%">
                          <h6 style="font-size: 12px">
                            <strong
                              ><i class="fa fa-edit" aria-hidden="true"></i>
                              Descrição do Imóvel</strong
                            >
                          </h6>
                          <div class="row mt-3">
                            {{ item.descricao.apresentacao }}
                          </div>
                        </div>

                        <div class="col-md-5" style="margin-top: -150px">
                          <table class="table">
                            <tbody>
                              <tr>
                                <td style="background-color: #0001">
                                  <strong
                                    ><small>Ano da construção:</small></strong
                                  >
                                </td>
                                <td style="background-color: #0001">
                                  <small>{{ item.info.ano_construcao }}</small>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong><small>Incorporação:</small></strong>
                                </td>
                                <td>
                                  <small>{{ item.info.incorporacao }}</small>
                                </td>
                              </tr>
                              <tr>
                                <td style="background-color: #0001">
                                  <strong
                                    ><small>Situação do Imóvel:</small></strong
                                  >
                                </td>
                                <td style="background-color: #0001">
                                  <small>{{ item.info.situacao_imovel }}</small>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong><small>Esquina:</small></strong>
                                </td>
                                <td>
                                  <small>{{ item.info.esquina }}</small>
                                </td>
                              </tr>
                              <tr>
                                <td style="background-color: #0001">
                                  <strong
                                    ><small>Tem Financiamento:</small></strong
                                  >
                                </td>
                                <td style="background-color: #0001">
                                  <small>{{ item.preco.financiado }}</small>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong
                                    ><small
                                      >Aceita financiamento:</small
                                    ></strong
                                  >
                                </td>
                                <td>
                                  <small>{{
                                    item.preco.aceita_financiamento
                                  }}</small>
                                </td>
                              </tr>
                              <tr>
                                <td style="background-color: #0001">
                                  <strong
                                    ><small
                                      >Minha Casa Minha Vida:</small
                                    ></strong
                                  >
                                </td>
                                <td style="background-color: #0001">
                                  <small>{{
                                    item.preco.minhacasa_minhavida
                                  }}</small>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong
                                    ><small>Aceita permuta:</small></strong
                                  >
                                </td>
                                <td>
                                  <small>{{ item.preco.aceita_permuta }}</small>
                                </td>
                              </tr>

                              <div class="col-md-12 mt-3"></div>
                            </tbody>
                          </table>

                          <div class="mt-3">
                            <h6 style="font-size: 12px">
                              <strong
                                >Qualidade do anúncio
                                <span class="badge text-bg-success"
                                  >{{ qualidadeProgress }}%
                                </span>
                                &nbsp;</strong
                              >
                              <small>
                                {{ msgQualidade }}
                                <i
                                  v-for="star in estrelas"
                                  :key="star"
                                  class="text-warning fa fa-star"
                                ></i
                              ></small>
                            </h6>
                            <div
                              class="progress"
                              role="progressbar"
                              aria-label="Success example"
                              :aria-valuenow="qualidadeProgress"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              <div
                                class="progress-bar bg-success"
                                :style="{ width: qualidadeProgress + '%' }"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade show"
                    id="nav-documentos"
                    role="tabpanel"
                    aria-labelledby="nav-documentos-tab"
                    tabindex="0"
                  >
                    <div class="container">
                      <div class="row mt-3">
                        <div class="col-md-8">
                          <h6 style="font-size: 15px">
                            <strong
                              ><i class="fa fa-link" aria-hidden="true"></i>
                              Links
                            </strong>
                          </h6>
                          <div class="row mt-3">
                            <div class="col-md-3">
                              <h6 style="font-size: 12px">
                                <strong
                                  >Drive:
                                  <a
                                    :href="item.complemento.link_drive"
                                    target="_blank"
                                    >{{ item.complemento.link_drive }}</a
                                  ></strong
                                >
                              </h6>

                              <h6 style="font-size: 12px">
                                <strong
                                  >YouTube:
                                  <a
                                    :href="item.complemento.link_youtube"
                                    target="_blank"
                                    >{{ item.complemento.link_youtube }}</a
                                  ></strong
                                >
                              </h6>

                              <h6 style="font-size: 12px">
                                <strong
                                  >Apresentação:
                                  <a
                                    :href="item.complemento.link_apresentacao"
                                    target="_blank"
                                    >{{ item.complemento.link_apresentacao }}</a
                                  ></strong
                                >
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade show"
                    id="nav-comentario"
                    role="tabpanel"
                    aria-labelledby="nav-comentario-tab"
                    tabindex="0"
                  >
                    <div class="container">
                      <div class="row mt-3">
                        <div class="col-md-12">
                          <h6 style="font-size: 15px">
                            <strong
                              ><i class="fa fa-list" aria-hidden="true"></i>
                              Faça aqui as anotações sobre este imóvel
                            </strong>
                          </h6>
                          <div class="row mt-3">
                            <div class="col-md-12">
                              <div class="form-floating">
                                <textarea
                                  class="form-control"
                                  placeholder="Leave a comment here"
                                  id="floatingTextarea2"
                                  style="height: 300px"
                                ></textarea>
                                <label for="floatingTextarea2"></label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="d-grid gap-2 d-md-flex justify-content-md-end mt-3"
                        >
                          <button
                            class="btn btn-success me-md-2"
                            @click="handledComentario(item.id_imovel)"
                            type="button"
                          >
                            Salvar anotação
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- fazer esse modal funcionar -->
        <div
          class="modal fade"
          :id="`modalEditImovel${item.id_imovel}`"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          v-if="currentImovel"
        >
          <!-- {{ console.log(item) }} -->
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  <i class="fa fa-file"></i> Resumo
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  @click="closeModal()"
                ></button>
              </div>
              <div class="modal-body">
                <div
                  v-if="msgError"
                  class="alert alert-danger mt-4 mb-4"
                  style="margin-top: -20px; margin-bottom: 10px"
                  role="alert"
                >
                  <strong
                    ><i class="fa fa-ban"></i> Desculpa, houve um erro para
                    processar o seu pedido. Tente novamente mais tarde</strong
                  >
                </div>

                <div
                  v-if="msgSucesso"
                  class="alert alert-success mt-4 mb-4"
                  style="margin-top: -20px; margin-bottom: 10px"
                  role="alert"
                >
                  <strong
                    ><i class="fa fa-check"></i> Sucesso! Imóvel cadastrado com
                    sucesso!</strong
                  >
                </div>

                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#info-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="info-tab-pane"
                      aria-selected="true"
                    >
                      <small>Info</small>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="comodos-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#comodos-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="comodos-tab-pane"
                      aria-selected="false"
                    >
                      <small>Cômodos</small>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="comodos-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#medidas-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="medidas-tab-pane"
                      aria-selected="false"
                    >
                      <small>Medidas & Preço</small>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="caracteristica-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#caracteristica-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="caracteristica-tab-pane"
                      aria-selected="false"
                    >
                      <small>Características</small>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="localizacao-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#localizacao-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="localizacao-tab-pane"
                      aria-selected="false"
                    >
                      <small>Localização</small>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="proximidades-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#proximidades-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="proximidades-tab-pane"
                      aria-selected="false"
                    >
                      <small>Proximidades</small>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="descricao-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#descricao-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="descricao-tab-pane"
                      aria-selected="false"
                    >
                      <small>Descrição</small>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="complementos-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#complementos-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="complementos-tab-pane"
                      aria-selected="false"
                    >
                      <small>Complementos</small>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="images-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#images-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="images-tab-pane"
                      aria-selected="false"
                    >
                      <small>Imagens</small>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="publicar-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#publicar-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="publicar-tab-pane"
                      aria-selected="false"
                    >
                      <small>Publicação</small>
                    </button>
                  </li>
                </ul>

                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="info-tab-pane"
                    role="tabpanel"
                    aria-labelledby="info-tab"
                    tabindex="0"
                  >
                    <div>
                      <div class="row mt-4">
                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                              >Código de referência
                              <small class="text-danger">*</small>
                            </label>
                            <input
                              type="text"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="currentImovel.info.cod_referencia"
                              placeholder="Digite aqui..."
                            />
                            <small v-if="msgNull" class="text-danger">
                              <li class="mt-2">Não deixe este campo vazio</li>
                            </small>
                          </div>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                              >Condomínio/empreendimento?
                            </label>

                            <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                            <div
                              v-if="!mostrarSkeleton"
                              class="btn-group"
                              role="group"
                              aria-label="Basic radio toggle button group"
                            >
                              <!-- <div class="btn-group" role="group" aria-label="Basic radio toggle button group"> -->
                              <input
                                type="radio"
                                class="btn-check"
                                name="selectCondominio"
                                id="selectCondominio1"
                                autocomplete="off"
                                value="Sim"
                                v-model="currentImovel.tem_condominio"
                              />
                              <label
                                class="btn btn-outline-success"
                                :class="{
                                  active:
                                    currentImovel.tem_condominio === 'Sim',
                                }"
                                for="selectCondominio1"
                                >Sim</label
                              >

                              <input
                                type="radio"
                                class="btn-check"
                                value="Não"
                                v-model="currentImovel.tem_condominio"
                                name="selectCondominio"
                                id="selectCondominio2"
                                autocomplete="off"
                              />
                              <label
                                class="btn btn-outline-danger"
                                :class="{
                                  active:
                                    currentImovel.tem_condominio === 'Não',
                                }"
                                for="selectCondominio2"
                                >Não</label
                              >
                              <!-- </div> -->
                            </div>
                          </div>
                        </div>

                        <div class="col-6">
                          <div
                            class="mb-3"
                            v-if="currentImovel.tem_condominio === 'Sim'"
                          >
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                              >Condomínio/empreendimento?
                              <small class="text-danger">* </small>
                              <a
                                href="/novo-condominio"
                                type="button"
                                class="ms-2 text-success"
                                style="
                                  --bs-btn-padding-y: 0.25rem;
                                  --bs-btn-padding-x: 0.5rem;
                                  --bs-btn-font-size: 0.75rem;
                                "
                              >
                                <i class="fa fa-plus"></i> Adicionar condominio
                              </a>
                            </label>

                            <select
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control form-select"
                              v-model="condominioEmpreendimento"
                            >
                              <option selected disabled>Selecione</option>

                              <option
                                v-for="condominio in condominios"
                                :value="condominio.id_condominio"
                              >
                                {{ condominio.nome_condominio }}
                              </option>
                            </select>
                          </div>
                        </div>

                        <div class="col-2">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                              >Tipo/Subtipo
                              <small class="text-danger">* </small>
                            </label>

                            <select
                              type="text"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control form-select"
                              v-model="currentImovel.info.tipo"
                            >
                              <option selected disabled>Selecione</option>
                              <option value="Casa">Casa</option>
                              <option value="Apartamento">Apartamento</option>
                              <option value="Flat">Flat</option>
                              <option value="Terreno">Terreno</option>
                              <option value="Sítio">Sítio</option>
                              <option value="Haras">Haras</option>
                              <option value="Kitnet">Kitnet</option>
                              <option value="Fazenda">Fazenda</option>
                              <option value="Galpão">Galpão</option>
                              <option value="Sala Comercial">
                                Sala Comercial
                              </option>
                            </select>
                          </div>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                              >Perfil do imóvel
                              <small class="text-danger">* </small>
                            </label>

                            <select
                              type="text"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control form-select"
                              v-model="currentImovel.info.perfil_imovel"
                            >
                              <option selected disabled>Selecione</option>
                              <option value="Residêncial">Residêncial</option>
                              <option value="Comercial">Comercial</option>
                              <option value="Industrial">Industrial</option>
                              <option value="Rural">Rural</option>
                              <option value="Temporada">Temporada</option>
                            </select>
                          </div>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                              >Situação
                              <small class="text-danger">* </small>
                            </label>

                            <select
                              type="text"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control form-select"
                              v-model="currentImovel.info.situacao_imovel"
                            >
                              <option selected disabled>Selecione</option>
                              <option value="Pronto pra morar">
                                Pronto pra morar
                              </option>
                              <option value="Em construção">
                                Em construção
                              </option>
                              <option value="Lançamento">Lançamento</option>
                              <option value="Novo">Novo</option>
                              <option value="Usado">Usado</option>
                            </select>
                          </div>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                              >Ano da construção
                              <small class="text-danger">* </small>
                            </label>

                            <input
                              type="number"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              placeholder="Ex.: 2015"
                              v-model="currentImovel.info.ano_construcao"
                            />

                            <small v-if="msgNull" class="text-danger">
                              <li class="mt-2">Não deixe este campo vazio</li>
                            </small>
                          </div>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                              >Incorporação</label
                            >
                            <!-- para funcionar precisa alterar para text o type do input  -->
                            <input
                              type="text"
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              placeholder="Digite..."
                              v-model="currentImovel.info.incorporacao"
                            />
                          </div>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                              >Posição Solar
                              <small class="text-danger">* </small>
                            </label>
                            <select
                              type="text"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control form-select"
                              v-model="currentImovel.info.posicao_solar"
                            >
                              <option selected disabled>Selecione</option>
                              <option value="Norte">Norte</option>
                              <option value="Sul">Sul</option>
                              <option value="Leste">Leste</option>
                              <option value="Oeste">Oeste</option>
                              <option value="Sudeste">Sudeste</option>
                              <option value="Nordeste">Nordeste</option>
                              <option value="Sudoeste">Sudoeste</option>
                              <option value="Noroeste">Noroeste</option>
                            </select>
                          </div>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                              >Terreno
                              <small class="text-danger">* </small>
                            </label>
                            <div
                              v-if="!mostrarSkeleton"
                              class="btn-group"
                              role="group"
                              aria-label="Basic radio toggle button group"
                            >
                              <input
                                type="radio"
                                class="btn-check"
                                id="btnTerreno1"
                                autocomplete="off"
                                value="Plano"
                                name="selectTerreno"
                                v-model="currentImovel.info.terreno"
                              />
                              <label
                                class="btn btn-outline-success"
                                :class="{
                                  active:
                                    currentImovel.info.terreno === 'Plano',
                                }"
                                for="btnTerreno1"
                                >Plano</label
                              >

                              <input
                                type="radio"
                                class="btn-check"
                                id="btnTerreno2"
                                autocomplete="off"
                                value="Aclive"
                                name="selectTerreno"
                                v-model="currentImovel.info.terreno"
                              />
                              <label
                                class="btn btn-outline-success"
                                :class="{
                                  active:
                                    currentImovel.info.terreno === 'Aclive',
                                }"
                                for="btnTerreno2"
                                >Aclive</label
                              >

                              <input
                                type="radio"
                                class="btn-check"
                                id="btnTerreno3"
                                autocomplete="off"
                                value="Declive"
                                name="selectTerreno"
                                v-model="currentImovel.info.terreno"
                              />
                              <label
                                class="btn btn-outline-success"
                                :class="{
                                  active:
                                    currentImovel.info.terreno === 'Declive',
                                }"
                                for="btnTerreno3"
                                >Declive</label
                              >
                            </div>
                            <small v-if="msgNull" class="text-danger">
                              <li class="mt-2">Não deixe este campo vazio</li>
                            </small>
                          </div>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                              >Próximo ao mar?<small class="text-danger"
                                >*
                              </small>
                            </label>
                            <select
                              type="text"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control form-select"
                              v-model="currentImovel.info.proximo_mar"
                            >
                              <option selected disabled>Selecione</option>
                              <option value="Vista para o mar">
                                Vista para o mar
                              </option>
                              <option value="Frente para o mar">
                                Frente para o mar
                              </option>
                              <option value="Quadra do mar">
                                Quadra do mar
                              </option>
                              <option value="Proximo ao mar">
                                Proximo ao mar
                              </option>
                              <option value="Não">Não</option>
                            </select>
                          </div>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                              >Averbado
                            </label>

                            <br />

                            <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                            <div
                              v-if="!mostrarSkeleton"
                              class="btn-group"
                              role="group"
                              aria-label="Basic radio toggle button group"
                            >
                              <input
                                type="radio"
                                class="btn-check"
                                name="selectAverbado"
                                id="selectAverbado1"
                                autocomplete="off"
                                value="Sim"
                                v-model="currentImovel.info.averbado"
                              />
                              <label
                                class="btn btn-outline-success"
                                for="selectAverbado1"
                                :class="{
                                  active: currentImovel.info.averbado === 'Sim',
                                }"
                                >Sim</label
                              >

                              <input
                                type="radio"
                                class="btn-check"
                                value="Não"
                                v-model="currentImovel.info.averbado"
                                name="selectAverbado"
                                id="selectAverbado2"
                                autocomplete="off"
                              />
                              <label
                                class="btn btn-outline-danger"
                                for="selectAverbado2"
                                :class="{
                                  active: currentImovel.info.averbado === 'Não',
                                }"
                                >Não</label
                              >
                            </div>
                          </div>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                              >Escriturado
                            </label>

                            <br />

                            <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                            <div
                              v-if="!mostrarSkeleton"
                              class="btn-group"
                              role="group"
                              aria-label="Basic radio toggle button group"
                            >
                              <input
                                type="radio"
                                class="btn-check"
                                name="selectEscritura"
                                id="selectEscritura1"
                                autocomplete="off"
                                value="Sim"
                                v-model="currentImovel.info.escriturado"
                              />
                              <label
                                class="btn btn-outline-success"
                                for="selectEscritura1"
                                :class="{
                                  active:
                                    currentImovel.info.escriturado === 'Sim',
                                }"
                                >Sim</label
                              >

                              <input
                                type="radio"
                                class="btn-check"
                                value="Não"
                                v-model="currentImovel.info.escriturado"
                                name="selectEscritura"
                                id="selectEscritura2"
                                autocomplete="off"
                              />
                              <label
                                class="btn btn-outline-danger"
                                for="selectEscritura2"
                                :class="{
                                  active:
                                    currentImovel.info.escriturado === 'Não',
                                }"
                                >Não</label
                              >
                            </div>
                          </div>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                              >Esquina
                            </label>

                            <br />

                            <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                            <div
                              v-if="!mostrarSkeleton"
                              class="btn-group"
                              role="group"
                              aria-label="Basic radio toggle button group"
                            >
                              <input
                                type="radio"
                                class="btn-check"
                                name="selectEsquina"
                                id="selectEsquina1"
                                autocomplete="off"
                                value="Sim"
                                v-model="currentImovel.info.esquina"
                              />
                              <label
                                class="btn btn-outline-success"
                                for="selectEsquina1"
                                :class="{
                                  active: currentImovel.info.esquina === 'Sim',
                                }"
                                >Sim</label
                              >

                              <input
                                type="radio"
                                class="btn-check"
                                value="Não"
                                v-model="currentImovel.info.esquina"
                                name="selectEsquina"
                                id="selectEsquina2"
                                autocomplete="off"
                              />
                              <label
                                class="btn btn-outline-danger"
                                for="selectEsquina2"
                                :class="{
                                  active: currentImovel.info.esquina === 'Não',
                                }"
                                >Não</label
                              >
                            </div>
                          </div>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                              >Tem mobília
                            </label>

                            <br />

                            <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                            <div
                              v-if="!mostrarSkeleton"
                              class="btn-group"
                              role="group"
                              aria-label="Basic radio toggle button group"
                            >
                              <input
                                type="radio"
                                class="btn-check"
                                name="selectMobilia"
                                id="selectMobilia1"
                                autocomplete="off"
                                value="Sim"
                                v-model="currentImovel.info.mobilia"
                              />
                              <label
                                class="btn btn-outline-success"
                                for="selectMobilia1"
                                :class="{
                                  active: currentImovel.info.mobilia === 'Sim',
                                }"
                                >Sim</label
                              >

                              <input
                                type="radio"
                                class="btn-check"
                                value="Não"
                                v-model="currentImovel.info.mobilia"
                                name="selectMobilia"
                                id="selectMobilia2"
                                autocomplete="off"
                              />
                              <label
                                class="btn btn-outline-danger"
                                for="selectMobilia2"
                                :class="{
                                  active: currentImovel.info.mobilia === 'Não',
                                }"
                                >Não</label
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="comodos-tab-pane"
                    role="tabpanel"
                    aria-labelledby="comodos-tab"
                    tabindex="0"
                  >
                    <div>
                      <!-- Insira o HTML form aqui de acordo com o TecImob -->
                      <div class="row mt-4">
                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Dormitório
                            </label>
                            <input
                              type="number"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="currentImovel.comodos.dormitorio"
                              placeholder="Digite a quantidade"
                            />
                          </div>
                          <p v-if="msgNullComodos" class="text-danger">
                            <small
                              ><i class="fa fa-ban"></i> Não deixe este campo
                              vazio!</small
                            >
                          </p>
                        </div>
                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Suíte
                            </label>
                            <input
                              type="number"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="currentImovel.comodos.suite"
                              placeholder="Digite a quantidade"
                            />
                          </div>
                          <p v-if="msgNullComodos" class="text-danger">
                            <small
                              ><i class="fa fa-ban"></i> Não deixe este campo
                              vazio!</small
                            >
                          </p>
                        </div>
                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Banheiro
                            </label>
                            <input
                              type="number"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="currentImovel.comodos.banheiro"
                              placeholder="Digite a quantidade"
                            />
                          </div>
                          <p v-if="msgNullComodos" class="text-danger">
                            <small
                              ><i class="fa fa-ban"></i> Não deixe este campo
                              vazio!</small
                            >
                          </p>
                        </div>
                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Garagem
                            </label>
                            <input
                              type="number"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="currentImovel.comodos.garagem"
                              placeholder="Digite a quantidade"
                            />
                          </div>
                          <p v-if="msgNullComodos" class="text-danger">
                            <small
                              ><i class="fa fa-ban"></i> Não deixe este campo
                              vazio!</small
                            >
                          </p>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                              >Garagem coberta?
                            </label>

                            <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                            <div
                              class="btn-group"
                              role="group"
                              aria-label="Basic radio toggle button group"
                            >
                              <input
                                v-if="!mostrarSkeleton"
                                type="radio"
                                class="btn-check"
                                name="garagemCoberta"
                                id="selectGaragemCobertura1"
                                autocomplete="off"
                                value="Sim"
                                v-model="currentImovel.comodos.garagem_coberta"
                              />
                              <label
                                v-if="!mostrarSkeleton"
                                class="btn btn-outline-success"
                                for="selectGaragemCobertura1"
                                :class="{
                                  active:
                                    currentImovel.comodos.garagem_coberta ===
                                    'Sim',
                                }"
                                >Sim</label
                              >

                              <input
                                v-if="!mostrarSkeleton"
                                type="radio"
                                class="btn-check"
                                value="Não"
                                v-model="currentImovel.comodos.garagem_coberta"
                                name="garagemCoberta"
                                id="selectGaragemCobertura2"
                                autocomplete="off"
                              />
                              <label
                                v-if="!mostrarSkeleton"
                                class="btn btn-outline-danger"
                                for="selectGaragemCobertura2"
                                :class="{
                                  active:
                                    currentImovel.comodos.garagem_coberta ===
                                    'Não',
                                }"
                                >Não</label
                              >
                            </div>
                          </div>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                              >Possui box na garagem?
                            </label>

                            <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                            <div
                              class="btn-group"
                              role="group"
                              aria-label="Basic radio toggle button group"
                            >
                              <input
                                v-if="!mostrarSkeleton"
                                type="radio"
                                class="btn-check"
                                name="boxGaragem"
                                id="boxGaragemY"
                                autocomplete="off"
                                value="Sim"
                                v-model="currentImovel.comodos.garagem_box"
                              />
                              <label
                                v-if="!mostrarSkeleton"
                                class="btn btn-outline-success"
                                for="boxGaragemY"
                                :class="{
                                  active:
                                    currentImovel.comodos.garagem_box === 'Sim',
                                }"
                                >Sim</label
                              >

                              <input
                                v-if="!mostrarSkeleton"
                                type="radio"
                                class="btn-check"
                                value="Não"
                                v-model="currentImovel.comodos.garagem_box"
                                name="boxGaragem"
                                id="boxGaragemN"
                                autocomplete="off"
                              />
                              <label
                                v-if="!mostrarSkeleton"
                                class="btn btn-outline-danger"
                                for="boxGaragemN"
                                :class="{
                                  active:
                                    currentImovel.comodos.garagem_box === 'Não',
                                }"
                                >Não</label
                              >
                            </div>
                          </div>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Sala de TV
                            </label>
                            <input
                              type="number"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="currentImovel.comodos.sala_tv"
                              placeholder="Digite a quantidade"
                            />
                          </div>
                          <p v-if="msgNullComodos" class="text-danger">
                            <small
                              ><i class="fa fa-ban"></i> Não deixe este campo
                              vazio!</small
                            >
                          </p>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Sala de jantar
                            </label>
                            <input
                              type="number"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="currentImovel.comodos.sala_jantar"
                              placeholder="Digite a quantidade"
                            />
                          </div>
                          <p v-if="msgNullComodos" class="text-danger">
                            <small
                              ><i class="fa fa-ban"></i> Não deixe este campo
                              vazio!</small
                            >
                          </p>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Sala de estar
                            </label>
                            <input
                              type="number"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="currentImovel.comodos.sala_estar"
                              placeholder="Digite a quantidade"
                            />
                          </div>
                          <p v-if="msgNullComodos" class="text-danger">
                            <small
                              ><i class="fa fa-ban"></i> Não deixe este campo
                              vazio!</small
                            >
                          </p>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Lavabo
                            </label>
                            <input
                              type="number"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="currentImovel.comodos.lavabo"
                              placeholder="Digite a quantidade"
                            />
                          </div>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Área de serviço
                            </label>
                            <input
                              type="number"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="currentImovel.comodos.area_servico"
                              placeholder="Digite a quantidade"
                            />
                          </div>
                          <p v-if="msgNullComodos" class="text-danger">
                            <small
                              ><i class="fa fa-ban"></i> Não deixe este campo
                              vazio!</small
                            >
                          </p>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Cozinha
                            </label>
                            <input
                              type="number"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="currentImovel.comodos.cozinha"
                              placeholder="Digite a quantidade"
                            />
                          </div>
                          <p v-if="msgNullComodos" class="text-danger">
                            <small
                              ><i class="fa fa-ban"></i> Não deixe este campo
                              vazio!</small
                            >
                          </p>
                        </div>

                        <div class="col-4">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Closet
                            </label>
                            <input
                              type="number"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="currentImovel.comodos.closet"
                              placeholder="Digite a quantidade"
                            />
                          </div>
                          <p v-if="msgNullComodos" class="text-danger">
                            <small
                              ><i class="fa fa-ban"></i> Não deixe este campo
                              vazio!</small
                            >
                          </p>
                        </div>

                        <div class="col-4">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Escritório
                            </label>
                            <input
                              type="number"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="currentImovel.comodos.escritorio"
                              placeholder="Digite a quantidade"
                            />
                          </div>
                          <p v-if="msgNullComodos" class="text-danger">
                            <small
                              ><i class="fa fa-ban"></i> Não deixe este campo
                              vazio!</small
                            >
                          </p>
                        </div>

                        <div class="col-4">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Dependência para empregada
                            </label>
                            <input
                              type="number"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="currentImovel.comodos.casa_empregada"
                              placeholder="Digite a quantidade"
                            />
                          </div>
                          <p v-if="msgNullComodos" class="text-danger">
                            <small
                              ><i class="fa fa-ban"></i> Não deixe este campo
                              vazio!</small
                            >
                          </p>
                        </div>

                        <div class="col-4">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Copa
                            </label>
                            <input
                              type="number"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="currentImovel.comodos.copa"
                              placeholder="Digite a quantidade"
                            />
                          </div>
                          <p v-if="msgNullComodos" class="text-danger">
                            <small
                              ><i class="fa fa-ban"></i> Não deixe este campo
                              vazio!</small
                            >
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="medidas-tab-pane"
                    role="tabpanel"
                    aria-labelledby="medidas-tab"
                    tabindex="0"
                  >
                    <div>
                      <div class="row mt-4">
                        <div class="col-4">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="areaConstruida"
                              class="form-label"
                            >
                              Área Construída
                            </label>
                            <div class="input-group">
                              <input
                                type="text"
                                required
                                v-if="!mostrarSkeleton"
                                class="form-control"
                                v-model="areaConstruida"
                                placeholder="Digite aqui..."
                                @input="aplicaMascaraMedida('areaConstruida')"
                              />
                              <span
                                v-if="!mostrarSkeleton"
                                class="input-group-text"
                                >m²</span
                              >
                            </div>
                          </div>
                        </div>

                        <div class="col-4">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="areaPrivativa"
                              class="form-label"
                            >
                              Área Privativa
                            </label>
                            <div class="input-group">
                              <input
                                type="text"
                                required
                                v-if="!mostrarSkeleton"
                                class="form-control"
                                v-model="areaPrivativa"
                                placeholder="Digite aqui..."
                                @input="aplicaMascaraMedida('areaPrivativa')"
                              />
                              <span
                                v-if="!mostrarSkeleton"
                                class="input-group-text"
                                >m²</span
                              >
                            </div>
                          </div>
                        </div>

                        <div class="col-4">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="areaTotal"
                              class="form-label"
                            >
                              Área Total
                            </label>
                            <div class="input-group">
                              <input
                                type="text"
                                required
                                v-if="!mostrarSkeleton"
                                class="form-control"
                                v-model="areaTotal"
                                disabled
                                placeholder="Aguardando..."
                              />
                              <span
                                v-if="!mostrarSkeleton"
                                class="input-group-text"
                                >m²</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div class="row mt-4">
                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Tipo do negócio
                            </label>

                            <select
                              type="text"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control form-select"
                              v-model="currentImovel.preco.tipo_negocio"
                            >
                              <option selected disabled>Selecione</option>
                              <option value="Aluguel">Aluguel</option>
                              <option value="Venda">Venda</option>
                            </select>
                          </div>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Preço Imóvel
                            </label>
                            <div class="input-group">
                              <span
                                v-if="!mostrarSkeleton"
                                class="input-group-text"
                                >R$</span
                              >
                              <input
                                type="text"
                                @input="aplicaMascaraDinheiroPrecoImovel"
                                @blur="aplicaMascaraDinheiroPrecoImovel"
                                required
                                v-if="!mostrarSkeleton"
                                class="form-control"
                                v-model="precoImovel"
                                placeholder="R$ 0,00"
                              />
                            </div>
                          </div>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Mostrar preço no site?
                            </label>

                            <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                            <div
                              v-if="!mostrarSkeleton"
                              class="btn-group"
                              role="group"
                              aria-label="Basic radio toggle button group"
                            >
                              <input
                                type="radio"
                                class="btn-check"
                                name="precoNoSite"
                                id="btnradio1"
                                autocomplete="off"
                                value="Sim"
                                v-model="currentImovel.preco.mostra_preco"
                              />
                              <label
                                class="btn btn-outline-success"
                                for="btnradio1"
                                :class="{
                                  active:
                                    currentImovel.preco.mostra_preco === 'Sim',
                                }"
                                >Sim</label
                              >

                              <input
                                type="radio"
                                class="btn-check"
                                value="Não"
                                v-model="currentImovel.preco.mostra_preco"
                                name="precoNoSite"
                                id="btnradio2"
                                autocomplete="off"
                              />
                              <label
                                class="btn btn-outline-danger"
                                for="btnradio2"
                                :class="{
                                  active:
                                    currentImovel.preco.mostra_preco === 'Não',
                                }"
                                >Não</label
                              >
                            </div>
                          </div>
                        </div>

                        <div
                          v-if="currentImovel.preco.mostra_preco == 'Não'"
                          class="col-3"
                        >
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Mostrar no lugar do preço:
                            </label>
                            <input
                              type="text"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="currentImovel.preco.textoLugarPreco"
                              placeholder="Texto exemplo: Consulte"
                            />
                          </div>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Preço do IPTU
                            </label>
                            <input
                              type="text"
                              @input="aplicaMascaraDinheiroPrecoIptu"
                              @blur="aplicaMascaraDinheiroPrecoIptu"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="precoIptu"
                              placeholder="R$ 0,00"
                            />
                          </div>
                        </div>

                        <div
                          class="col-3"
                          v-if="currentImovel.preco.tipo_negocio === 'Aluguel'"
                        >
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Período
                            </label>

                            <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                            <div
                              v-if="!mostrarSkeleton"
                              class="btn-group"
                              role="group"
                              aria-label="Basic radio toggle button group"
                            >
                              <input
                                type="radio"
                                class="btn-check"
                                name="periodo"
                                id="periodo1"
                                autocomplete="off"
                                value="Anual"
                                v-model="currentImovel.preco.periodo"
                              />
                              <label
                                class="btn btn-outline-success"
                                for="periodo1"
                                :class="{
                                  active:
                                    currentImovel.preco.periodo === 'Anual',
                                }"
                                >Anual</label
                              >

                              <input
                                type="radio"
                                class="btn-check"
                                value="Mensal"
                                v-model="currentImovel.preco.periodo"
                                name="periodo"
                                id="periodo2"
                                autocomplete="off"
                              />
                              <label
                                class="btn btn-outline-danger"
                                for="periodo2"
                                :class="{
                                  active:
                                    currentImovel.preco.periodo === 'Mensal',
                                }"
                                >Mensal</label
                              >
                            </div>
                          </div>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Preço Condomínio
                            </label>
                            <input
                              type="text"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="precoCondominio"
                              @input="aplicaMascaraDinheiroPrecoCondominio"
                              @blur="aplicaMascaraDinheiroPrecoCondominio"
                              placeholder="R$ 0,00"
                            />
                          </div>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Está financiado?
                            </label>

                            <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                            <div
                              v-if="!mostrarSkeleton"
                              class="btn-group"
                              role="group"
                              aria-label="Basic radio toggle button group"
                            >
                              <input
                                type="radio"
                                class="btn-check"
                                name="estaFinanciado"
                                id="estaFinanciado1"
                                autocomplete="off"
                                value="Sim"
                                v-model="currentImovel.preco.financiado"
                              />
                              <label
                                class="btn btn-outline-success"
                                for="estaFinanciado1"
                                :class="{
                                  active:
                                    currentImovel.preco.financiado === 'Sim',
                                }"
                                >Sim</label
                              >

                              <input
                                type="radio"
                                class="btn-check"
                                value="Não"
                                v-model="currentImovel.preco.financiado"
                                name="estaFinanciado"
                                id="estaFinanciado2"
                                autocomplete="off"
                              />
                              <label
                                class="btn btn-outline-danger"
                                for="estaFinanciado2"
                                :class="{
                                  active:
                                    currentImovel.preco.financiado === 'Não',
                                }"
                                >Não</label
                              >
                            </div>
                          </div>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Aceita financiamento?
                            </label>

                            <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                            <div
                              v-if="!mostrarSkeleton"
                              class="btn-group"
                              role="group"
                              aria-label="Basic radio toggle button group"
                            >
                              <input
                                type="radio"
                                class="btn-check"
                                name="aceitaFinanciamento"
                                id="aceitaFinanciamento1"
                                autocomplete="off"
                                value="Sim"
                                v-model="
                                  currentImovel.preco.aceita_financiamento
                                "
                              />
                              <label
                                class="btn btn-outline-success"
                                for="aceitaFinanciamento1"
                                :class="{
                                  active:
                                    currentImovel.preco.aceita_financiamento ===
                                    'Sim',
                                }"
                                >Sim</label
                              >

                              <input
                                type="radio"
                                class="btn-check"
                                value="Não"
                                v-model="
                                  currentImovel.preco.aceita_financiamento
                                "
                                name="aceitaFinanciamento"
                                id="aceitaFinanciamento2"
                                autocomplete="off"
                              />
                              <label
                                class="btn btn-outline-danger"
                                for="aceitaFinanciamento2"
                                :class="{
                                  active:
                                    currentImovel.preco.aceita_financiamento ===
                                    'Não',
                                }"
                                >Não</label
                              >
                            </div>
                          </div>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Minha Casa Minha Vida?
                            </label>

                            <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                            <div
                              v-if="!mostrarSkeleton"
                              class="btn-group"
                              role="group"
                              aria-label="Basic radio toggle button group"
                            >
                              <input
                                type="radio"
                                class="btn-check"
                                name="mCasaMVida"
                                id="mCasaMVida1"
                                autocomplete="off"
                                value="Sim"
                                v-model="
                                  currentImovel.preco.minhacasa_minhavida
                                "
                              />
                              <label
                                class="btn btn-outline-success"
                                for="mCasaMVida1"
                                :class="{
                                  active:
                                    currentImovel.preco.minhacasa_minhavida ===
                                    'Sim',
                                }"
                                >Sim</label
                              >

                              <input
                                type="radio"
                                class="btn-check"
                                value="Não"
                                v-model="
                                  currentImovel.preco.minhacasa_minhavida
                                "
                                name="mCasaMVida"
                                id="mCasaMVida2"
                                autocomplete="off"
                              />
                              <label
                                class="btn btn-outline-danger"
                                for="mCasaMVida2"
                                :class="{
                                  active:
                                    currentImovel.preco.minhacasa_minhavida ===
                                    'Não',
                                }"
                                >Não</label
                              >
                            </div>
                          </div>
                        </div>

                        <div class="col-6">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Total mensal em taxas (se houver)
                            </label>
                            <input
                              type="text"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="taxasTotal"
                              placeholder="R$ 0,00"
                              @input="aplicaMascaraDinheiroTotalTaxas"
                              @blur="aplicaMascaraDinheiroTotalTaxas"
                            />
                          </div>
                        </div>

                        <div class="col-6">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Descrição das Taxas
                            </label>
                            <input
                              type="text"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="currentImovel.preco.descricao_taxas"
                              placeholder="Digite aqui..."
                            />
                          </div>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Aceita permuta?
                            </label>

                            <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                            <div
                              v-if="!mostrarSkeleton"
                              class="btn-group"
                              role="group"
                              aria-label="Basic radio toggle button group"
                            >
                              <input
                                type="radio"
                                class="btn-check"
                                name="aceitaPermuta"
                                id="aceitaPermuta1"
                                autocomplete="off"
                                value="Sim"
                                v-model="currentImovel.preco.aceita_permuta"
                              />
                              <label
                                class="btn btn-outline-success"
                                for="aceitaPermuta1"
                                :class="{
                                  active:
                                    currentImovel.preco.aceita_permuta ===
                                    'Sim',
                                }"
                                >Sim</label
                              >

                              <input
                                type="radio"
                                class="btn-check"
                                value="Não"
                                v-model="currentImovel.preco.aceita_permuta"
                                name="aceitaPermuta"
                                id="aceitaPermuta2"
                                autocomplete="off"
                              />
                              <label
                                class="btn btn-outline-danger"
                                for="aceitaPermuta2"
                                :class="{
                                  active:
                                    currentImovel.preco.aceita_permuta ===
                                    'Não',
                                }"
                                >Não</label
                              >
                            </div>
                          </div>
                        </div>

                        <div class="col-9">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Descrição das Permutas
                            </label>
                            <input
                              type="text"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="currentImovel.preco.descricao_permuta"
                              placeholder="Digite aqui..."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="caracteristica-tab-pane"
                    role="tabpanel"
                    aria-labelledby="caracteristica-tab"
                    tabindex="0"
                  >
                    <div>
                      <div class="row mt-3">
                        <div class="col-md-6">
                          <div
                            class="form-check"
                            v-for="caracteristica in currentImovel.caracteristicas"
                            :key="caracteristica.id_caracteristica"
                          >
                            <input
                              v-if="!mostrarSkeleton"
                              class="form-check-input"
                              v-model="
                                currentImovel.caracteristicas[
                                  caracteristica.id_caracteristica
                                ]
                              "
                              type="checkbox"
                              :id="
                                'flexCheck' + caracteristica.id_caracteristica
                              "
                            />
                            <label
                              v-if="!mostrarSkeleton"
                              class="form-check-label"
                              :for="
                                'flexCheck' + caracteristica.id_caracteristica
                              "
                            >
                              {{
                                caracteristica.detalhesCaracteristica
                                  .nome_caracteristica
                              }}
                            </label>

                            <a
                              style="margin-left: 2%"
                              href="#"
                              @click="
                                handleDeleteCaracacteristicas(
                                  caracteristica.id_caracteristica
                                )
                              "
                              ><small
                                ><i class="text-danger fa fa-trash"></i></small
                            ></a>
                          </div>
                        </div>

                        <!-- dando erro aqui -->
                        <div class="col-md-6">
                          <div
                            class="form-check"
                            v-for="item in listcaracteristicas"
                            :key="item.id_caracteristica"
                          >
                            <input
                              v-if="!mostrarSkeleton"
                              class="form-check-input"
                              v-model="
                                caracteristicaAllImovel[item.id_caracteristica]
                              "
                              type="checkbox"
                              :id="'flexCheck' + item.id_caracteristica"
                            />
                            <label
                              v-if="!mostrarSkeleton"
                              class="form-check-label"
                              :for="'flexCheck' + item.id_caracteristica"
                            >
                              {{ item.nome_caracteristica }}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="localizacao-tab-pane"
                    role="tabpanel"
                    aria-labelledby="localizacao-tab"
                    tabindex="0"
                  >
                    <div>
                      <div class="row mt-4">
                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              CEP
                            </label>
                            <div class="input-group">
                              <input
                                type="text"
                                @input="aplicaMascaraCEP"
                                class="form-control"
                                placeholder="00000-00"
                                v-model="buscarCEP"
                                required
                                v-if="!mostrarSkeleton"
                                aria-label="Example text with button addon"
                                aria-describedby="button-addon1"
                              />
                            </div>
                          </div>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                              >País
                            </label>

                            <input
                              type="text"
                              placeholder="Brasil"
                              required
                              v-if="!mostrarSkeleton"
                              disabled
                              class="form-control"
                              v-model="selectPais"
                            />
                          </div>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                              >Estado
                            </label>

                            <input
                              type="text"
                              placeholder="SP"
                              required
                              v-if="!mostrarSkeleton"
                              disabled
                              class="form-control"
                              v-model="selectEstado"
                            />
                          </div>
                        </div>

                        <div class="col-3">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                              >Cidade
                            </label>

                            <input
                              type="text"
                              placeholder="Ex.: Baurú"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              disabled
                              v-model="selectCidade"
                            />
                          </div>
                        </div>

                        <div class="col-4">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                              >Bairro
                            </label>

                            <input
                              type="text"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="selectBairro"
                              disabled
                              placeholder="Ex.: Jardim Olímpia"
                            />
                          </div>
                        </div>

                        <div class="col-6">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Logradouro
                            </label>
                            <input
                              type="text"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              disabled
                              v-model="logradouro"
                              placeholder="Ex.: Rua das flores"
                            />
                          </div>
                        </div>
                        <div class="col-2">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Número
                            </label>
                            <input
                              type="number"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="currentImovel.localizacao.numero"
                              placeholder="00"
                            />
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Complemento
                            </label>
                            <input
                              type="text"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="currentImovel.localizacao.complemento"
                              placeholder="Digite aqui o complemento, se houver."
                            />
                          </div>
                        </div>

                        <div class="col-4">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Nº ou identificação da Unidade
                            </label>
                            <input
                              type="text"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="currentImovel.localizacao.numero_unidade"
                              placeholder="Insira aqui"
                            />
                          </div>
                        </div>
                        <div class="col-2">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Andar
                            </label>
                            <input
                              type="number"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="currentImovel.localizacao.andar"
                              placeholder="Insira aqui"
                            />
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Unidades por andar
                            </label>
                            <input
                              type="number"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="
                                currentImovel.localizacao.unidade_por_andar
                              "
                              placeholder="Informe a quantidade..."
                            />
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Total de andares
                            </label>
                            <input
                              type="number"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="currentImovel.localizacao.total_andar"
                              placeholder="Insira o total"
                            />
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Total de torres
                            </label>
                            <input
                              type="number"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="currentImovel.localizacao.total_torres"
                              placeholder="Se houver, insira aqui"
                            />
                          </div>
                        </div>

                        <hr />

                        <div class="col-4">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Mostrar andar do apartamento
                            </label>

                            <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                            <div
                              class="btn-group"
                              role="group"
                              aria-label="Basic radio toggle button group"
                            >
                              <input
                                type="radio"
                                class="btn-check"
                                name="mostrarAndar"
                                id="mostrarAndar1"
                                autocomplete="off"
                                value="Sim"
                                v-model="
                                  currentImovel.localizacao.mostrar_andar_site
                                "
                              />
                              <label
                                class="btn btn-outline-success"
                                for="mostrarAndar1"
                                :class="{
                                  active:
                                    currentImovel.localizacao
                                      .mostrar_andar_site === 'Sim',
                                }"
                                >Sim</label
                              >

                              <input
                                type="radio"
                                class="btn-check"
                                value="Não"
                                v-model="
                                  currentImovel.localizacao.mostrar_andar_site
                                "
                                name="mostrarAndar"
                                id="mostrarAndar2"
                                autocomplete="off"
                              />
                              <label
                                class="btn btn-outline-danger"
                                for="mostrarAndar2"
                                :class="{
                                  active:
                                    currentImovel.localizacao
                                      .mostrar_andar_site === 'Não',
                                }"
                                >Não</label
                              >
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Mostrar o número da unidade
                            </label>

                            <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                            <div
                              class="btn-group"
                              role="group"
                              aria-label="Basic radio toggle button group"
                            >
                              <input
                                type="radio"
                                class="btn-check"
                                name="mostrarNUnidade"
                                id="mostrarNUnidade1"
                                autocomplete="off"
                                value="Sim"
                                v-model="
                                  currentImovel.localizacao
                                    .mostrar_numero_unidade_site
                                "
                              />
                              <label
                                class="btn btn-outline-success"
                                for="mostrarNUnidade1"
                                :class="{
                                  active:
                                    currentImovel.localizacao
                                      .mostrar_numero_unidade_site === 'Sim',
                                }"
                                >Sim</label
                              >

                              <input
                                type="radio"
                                class="btn-check"
                                value="Não"
                                v-model="
                                  currentImovel.localizacao
                                    .mostrar_numero_unidade_site
                                "
                                name="mostrarNUnidade"
                                id="mostrarNUnidade2"
                                autocomplete="off"
                              />
                              <label
                                class="btn btn-outline-danger"
                                for="mostrarNUnidade2"
                                :class="{
                                  active:
                                    currentImovel.localizacao
                                      .mostrar_numero_unidade_site === 'Não',
                                }"
                                >Não</label
                              >
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Mostrar Logradouro no site?
                            </label>

                            <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                            <div
                              class="btn-group"
                              role="group"
                              aria-label="Basic radio toggle button group"
                            >
                              <input
                                type="radio"
                                class="btn-check"
                                name="mostrarLogradouro"
                                id="mostrarLogradouro1"
                                autocomplete="off"
                                value="Sim"
                                v-model="
                                  currentImovel.localizacao
                                    .mostrar_logradouro_site
                                "
                              />
                              <label
                                class="btn btn-outline-success"
                                for="mostrarLogradouro1"
                                :class="{
                                  active:
                                    currentImovel.localizacao
                                      .mostrar_logradouro_site === 'Sim',
                                }"
                                >Sim</label
                              >

                              <input
                                type="radio"
                                class="btn-check"
                                value="Não"
                                v-model="
                                  currentImovel.localizacao
                                    .mostrar_logradouro_site
                                "
                                name="mostrarLogradouro"
                                id="mostrarLogradouro2"
                                autocomplete="off"
                              />
                              <label
                                class="btn btn-outline-danger"
                                for="mostrarLogradouro2"
                                :class="{
                                  active:
                                    currentImovel.localizacao
                                      .mostrar_logradouro_site === 'Não',
                                }"
                                >Não</label
                              >
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Mostrar Bairro no site?
                            </label>

                            <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                            <div
                              class="btn-group"
                              role="group"
                              aria-label="Basic radio toggle button group"
                            >
                              <input
                                type="radio"
                                class="btn-check"
                                name="mostrarBairro"
                                id="mostrarBairro1"
                                autocomplete="off"
                                value="Sim"
                                v-model="
                                  currentImovel.localizacao.mostrar_bairro_site
                                "
                              />
                              <label
                                class="btn btn-outline-success"
                                for="mostrarBairro1"
                                :class="{
                                  active:
                                    currentImovel.localizacao
                                      .mostrar_bairro_site === 'Sim',
                                }"
                                >Sim</label
                              >

                              <input
                                type="radio"
                                class="btn-check"
                                value="Não"
                                v-model="
                                  currentImovel.localizacao.mostrar_bairro_site
                                "
                                name="mostrarBairro"
                                id="mostrarBairro2"
                                autocomplete="off"
                              />
                              <label
                                class="btn btn-outline-danger"
                                for="mostrarBairro2"
                                :class="{
                                  active:
                                    currentImovel.localizacao
                                      .mostrar_bairro_site === 'Não',
                                }"
                                >Não</label
                              >
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Mostrar complemento no site?
                            </label>

                            <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                            <div
                              class="btn-group"
                              role="group"
                              aria-label="Basic radio toggle button group"
                            >
                              <input
                                type="radio"
                                class="btn-check"
                                name="mostrarComplemento"
                                id="mostrarComplemento1"
                                autocomplete="off"
                                value="Sim"
                                v-model="
                                  currentImovel.localizacao
                                    .mostrar_complemento_site
                                "
                              />
                              <label
                                class="btn btn-outline-success"
                                for="mostrarComplemento1"
                                :class="{
                                  active:
                                    currentImovel.localizacao
                                      .mostrar_complemento_site === 'Sim',
                                }"
                                >Sim</label
                              >

                              <input
                                type="radio"
                                class="btn-check"
                                value="Não"
                                v-model="
                                  currentImovel.localizacao
                                    .mostrar_complemento_site
                                "
                                name="mostrarComplemento"
                                id="mostrarComplemento2"
                                autocomplete="off"
                              />
                              <label
                                class="btn btn-outline-danger"
                                for="mostrarComplemento2"
                                :class="{
                                  active:
                                    currentImovel.localizacao
                                      .mostrar_complemento_site === 'Não',
                                }"
                                >Não</label
                              >
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Mostrar número no site?
                            </label>

                            <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                            <div
                              class="btn-group"
                              role="group"
                              aria-label="Basic radio toggle button group"
                            >
                              <input
                                type="radio"
                                class="btn-check"
                                name="mostrarNumero"
                                id="mostrarNumero1"
                                autocomplete="off"
                                value="Sim"
                                v-model="
                                  currentImovel.localizacao.mostrar_numero_site
                                "
                              />
                              <label
                                class="btn btn-outline-success"
                                for="mostrarNumero1"
                                :class="{
                                  active:
                                    currentImovel.localizacao
                                      .mostrar_numero_site === 'Sim',
                                }"
                                >Sim</label
                              >

                              <input
                                type="radio"
                                class="btn-check"
                                value="Não"
                                v-model="
                                  currentImovel.localizacao.mostrar_numero_site
                                "
                                name="mostrarNumero"
                                id="mostrarNumero2"
                                autocomplete="off"
                              />
                              <label
                                class="btn btn-outline-danger"
                                for="mostrarNumero2"
                                :class="{
                                  active:
                                    currentImovel.localizacao
                                      .mostrar_numero_site === 'Não',
                                }"
                                >Não</label
                              >
                            </div>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Mostrar nome no site?
                            </label>

                            <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                            <div
                              class="btn-group"
                              role="group"
                              aria-label="Basic radio toggle button group"
                            >
                              <input
                                type="radio"
                                class="btn-check"
                                name="mostrarNCondo"
                                id="mostrarNCondo1"
                                autocomplete="off"
                                value="Sim"
                                v-model="mostrarNCondo"
                              />
                              <label
                                class="btn btn-outline-success"
                                for="mostrarNCondo1"
                                :class="{
                                  active:
                                    currentImovel.localizacao
                                      .mostrar_nome_condominio_site === 'Sim',
                                }"
                                >Sim</label
                              >

                              <input
                                type="radio"
                                class="btn-check"
                                value="Não"
                                v-model="mostrarNCondo"
                                name="mostrarNCondo"
                                id="mostrarNCondo2"
                                autocomplete="off"
                              />
                              <label
                                class="btn btn-outline-danger"
                                for="mostrarNCondo2"
                                :class="{
                                  active:
                                    currentImovel.localizacao
                                      .mostrar_nome_condominio_site === 'Não',
                                }"
                                >Não</label
                              >
                            </div>
                          </div>
                        </div>

                        <div class="col-4">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Localizar imóvel no mapa?
                            </label>

                            <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                            <div
                              class="btn-group"
                              role="group"
                              aria-label="Basic radio toggle button group"
                            >
                              <input
                                type="radio"
                                class="btn-check"
                                name="mapaCondo"
                                id="mapaCondo1"
                                autocomplete="off"
                                value="Sim"
                                v-model="mapaCondo"
                              />
                              <label
                                class="btn btn-outline-success"
                                for="mapaCondo1"
                                :class="{ active: mapaCondo === 'Sim' }"
                                >Sim</label
                              >

                              <input
                                type="radio"
                                class="btn-check"
                                value="Não"
                                v-model="mapaCondo"
                                name="mapaCondo"
                                id="mapaCondo2"
                                autocomplete="off"
                              />
                              <label
                                class="btn btn-outline-danger"
                                for="mapaCondo2"
                                :class="{ active: mapaCondo === 'Não' }"
                                >Não</label
                              >
                            </div>
                          </div>
                        </div>

                        <hr />

                        <div
                          class="col-12"
                          style="position: relative"
                          v-if="mostrarMapa"
                        >
                          <div
                            id="map"
                            ref="mapElement"
                            style="
                              height: 350px;
                              width: 100%;
                              border: 0;
                              position: sticky;
                              bottom: 0;
                            "
                          ></div>

                          <div class="row">
                            <div class="col-4">
                              <div class="mb-3">
                                <div
                                  v-if="mostrarSkeleton"
                                  class="skeleton-label"
                                ></div>
                                <div
                                  v-if="mostrarSkeleton"
                                  class="skeleton-input"
                                ></div>
                                <label
                                  v-if="!mostrarSkeleton"
                                  for="exampleInputEmail1"
                                  class="form-label"
                                >
                                  Mostrar mapa no site?
                                </label>

                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                <div
                                  class="btn-group"
                                  role="group"
                                  aria-label="Basic radio toggle button group"
                                >
                                  <input
                                    type="radio"
                                    class="btn-check"
                                    name="selectMapSite"
                                    id="selectMapSite1"
                                    autocomplete="off"
                                    value="Sim"
                                    v-model="selectMapSite"
                                  />
                                  <label
                                    class="btn btn-outline-success"
                                    for="selectMapSite1"
                                    :class="{
                                      active:
                                        currentImovel.localizacao
                                          .mostrar_mapa_site === 'Sim',
                                    }"
                                    >Sim</label
                                  >

                                  <input
                                    type="radio"
                                    class="btn-check"
                                    value="Não"
                                    v-model="selectMapSite"
                                    name="selectMapSite"
                                    id="selectMapSite2"
                                    autocomplete="off"
                                  />
                                  <label
                                    class="btn btn-outline-danger"
                                    for="selectMapSite2"
                                    :class="{
                                      active:
                                        currentImovel.localizacao
                                          .mostrar_mapa_site === 'Não',
                                    }"
                                    >Não</label
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="proximidades-tab-pane"
                    role="tabpanel"
                    aria-labelledby="proximidades-tab"
                    tabindex="0"
                  >
                    <div>
                      <div class="row">
                        <div class="col-md-6">
                          <div
                            class="form-check"
                            v-for="proximidade in currentImovel.proximidades"
                            :key="proximidade.id_proximidade"
                          >
                            <input
                              v-if="!mostrarSkeleton"
                              class="form-check-input"
                              v-model="
                                currentImovel.proximidades[
                                  proximidade.id_proximidade
                                ]
                              "
                              type="checkbox"
                              :id="'flexCheck' + proximidade.id_proximidade"
                            />
                            <label
                              v-if="!mostrarSkeleton"
                              class="form-check-label"
                              :for="'flexCheck' + proximidade.id_proximidade"
                            >
                              {{
                                proximidade.detalhesProximidade
                                  ? proximidade.detalhesProximidade
                                      .nome_proximidade
                                  : ""
                              }}
                            </label>
                            <a
                              style="margin-left: 2%"
                              href="#"
                              @click="
                                handleDeleteProximidades(
                                  proximidade.id_proximidade
                                )
                              "
                              ><small
                                ><i class="text-danger fa fa-trash"></i></small
                            ></a>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div
                            class="form-check"
                            v-for="item in listProximidades"
                            :key="item.id_proximidade"
                          >
                            <input
                              v-if="!mostrarSkeleton"
                              class="form-check-input"
                              v-model="
                                proximidadesAllImovel[item.id_proximidade]
                              "
                              type="checkbox"
                              :id="'flexCheck' + item.id_proximidade"
                            />
                            <label
                              v-if="!mostrarSkeleton"
                              class="form-check-label"
                              :for="'flexCheck' + item.id_proximidade"
                            >
                              {{ item.nome_proximidade }}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="descricao-tab-pane"
                    role="tabpanel"
                    aria-labelledby="decricao-tab"
                    tabindex="0"
                  >
                    <div>
                      <div class="row mt-4">
                        <div class="col-12">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Titulo da página de detalhamento do imóvel
                            </label>
                            <input
                              type="text"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="currentImovel.descricao.titulo"
                              placeholder="Digite aqui..."
                            />
                          </div>
                        </div>

                        <div class="col-12">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Texto de apresentação do imóvel
                            </label>

                            <textarea
                              class="form-control"
                              v-if="!mostrarSkeleton"
                              v-model="currentImovel.descricao.apresentacao"
                              style="height: 100px"
                              placeholder="Digite aqui..."
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="complementos-tab-pane"
                    role="tabpanel"
                    aria-labelledby="complementos-tab"
                    tabindex="0"
                  >
                    <div>
                      <div class="row mt-4">
                        <div class="col-12">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Vídeo do Imóvel: Insira a URL do seu vídeo no
                              Youtube
                              <button
                                type="button"
                                class="btn btn-danger ms-2"
                                style="
                                  --bs-btn-padding-y: 0.25rem;
                                  --bs-btn-padding-x: 0.5rem;
                                  --bs-btn-font-size: 0.75rem;
                                "
                              >
                                <i class="fa fa-trash me-2"></i> Remover Vídeo
                              </button>
                            </label>
                            <input
                              type="text"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="currentImovel.complemento.link_youtube"
                              placeholder="Digite aqui..."
                            />
                          </div>
                        </div>

                        <div class="col-12">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Apresentação 360°: Insira a URL 360° do seu imóvel
                              <button
                                type="button"
                                class="btn btn-danger ms-2"
                                style="
                                  --bs-btn-padding-y: 0.25rem;
                                  --bs-btn-padding-x: 0.5rem;
                                  --bs-btn-font-size: 0.75rem;
                                "
                              >
                                <i class="fa fa-trash me-2"></i> Remover 360°
                              </button>
                            </label>
                            <input
                              type="text"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="
                                currentImovel.complemento.link_apresentacao
                              "
                              placeholder="Digite aqui..."
                            />
                          </div>
                        </div>

                        <div class="col-12">
                          <div class="mb-3">
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-label"
                            ></div>
                            <div
                              v-if="mostrarSkeleton"
                              class="skeleton-input"
                            ></div>
                            <label
                              v-if="!mostrarSkeleton"
                              for="exampleInputEmail1"
                              class="form-label"
                            >
                              Insira o link do Google Drive, Dropbox, Onedrive
                              ou outro
                            </label>
                            <input
                              type="text"
                              required
                              v-if="!mostrarSkeleton"
                              class="form-control"
                              v-model="currentImovel.complemento.link_drive"
                              placeholder="Digite aqui..."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="images-tab-pane"
                    role="tabpanel"
                    aria-labelledby="images-tab"
                    tabindex="0"
                  >
                    <div>
                      <div class="row mt-4">
                        <li class="text-danger">
                          <small> Envie até 10 imagens . </small>
                        </li>
                        <li class="text-danger">
                          <small> Formatos aceitos .PNG .JPG ou .JPEG</small>
                        </li>
                        <li class="text-danger">
                          <small>
                            Tamanho máx. permitido é de até 3 mb por
                            imagem.</small
                          >
                        </li>
                        <li class="text-danger">
                          <small> A resolução ideal de w: 1342 h:768.</small>
                        </li>

                        <div class="row g-3">
                          <div class="col-12">
                            <div class="row row-cols-1 row-cols-md-5 g-4">
                              <div
                                class="col"
                                v-for="(image, index) in images"
                                :key="index"
                              >
                                <div class="card bg-transparent border-0">
                                  <div
                                    class="preview-photo-prato area-photo-prato"
                                  >
                                    <img
                                      :src="getImageUrl(image.foto)"
                                      class="img-photo-prato"
                                    />
                                    <!-- {{ console.log(image.foto) }} -->
                                    <!-- Barra de Progresso -->
                                    <div class="progress">
                                      <div
                                        class="progress-bar"
                                        :style="{ width: image.progress + '%' }"
                                      ></div>
                                    </div>

                                    <button
                                      @click="removerImagem(index)"
                                      class="btn btn-danger btn-remover"
                                    >
                                      <i class="fa fa-minus"></i>
                                    </button>
                                  </div>
                                </div>
                              </div>

                              <!-- Botão para adicionar mais imagens -->
                              <div class="col" v-if="images.length < maxImages">
                                <div class="card bg-transparent border-0">
                                  <div
                                    class="preview-photo-prato area-photo-prato"
                                  >
                                    <label
                                      for="inputGroupFile03"
                                      class="btn btn-primary btn-photo my-4 rounded-2 py-2"
                                    >
                                      <i class="fa fa-plus"></i>
                                    </label>
                                    <input
                                      hidden
                                      type="file"
                                      class="form-control"
                                      id="inputGroupFile03"
                                      @change="previewImage"
                                      aria-describedby="inputGroupFileAddon03"
                                      aria-label="Upload"
                                      multiple
                                    />

                                    <div v-if="success">
                                      <i class="fa fa-check"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="publicar-tab-pane"
                    role="tabpanel"
                    aria-labelledby="publicar-tab"
                    tabindex="0"
                  >
                    <div class="row mt-4">
                      <div class="col-3">
                        <div class="mb-3">
                          <div
                            v-if="mostrarSkeleton"
                            class="skeleton-label"
                          ></div>
                          <div
                            v-if="mostrarSkeleton"
                            class="skeleton-input"
                          ></div>
                          <label
                            v-if="!mostrarSkeleton"
                            for="exampleInputEmail1"
                            class="form-label"
                          >
                            Mostrar imóvel no site?
                            <p>
                              <small
                                >Determine se o imóvel será publicado em seu
                                site.</small
                              >
                            </p>
                          </label>

                          <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                          <div
                            class="btn-group"
                            role="group"
                            aria-label="Basic radio toggle button group"
                          >
                            <input
                              type="radio"
                              class="btn-check"
                              name="selectImovelSite"
                              id="selectImovelSite1"
                              autocomplete="off"
                              value="Sim"
                              v-model="selectImovelSite"
                            />
                            <label
                              class="btn btn-outline-success"
                              for="selectImovelSite1"
                              :class="{
                                active:
                                  currentImovel.publicacao
                                    .mostrar_imovel_publi === 'Sim',
                              }"
                              >Sim</label
                            >

                            <input
                              type="radio"
                              class="btn-check"
                              value="Não"
                              v-model="selectImovelSite"
                              name="selectImovelSite"
                              id="selectImovelSite2"
                              autocomplete="off"
                            />
                            <label
                              class="btn btn-outline-danger"
                              for="selectImovelSite2"
                              :class="{
                                active:
                                  currentImovel.publicacao
                                    .mostrar_imovel_publi === 'Não',
                              }"
                              >Não</label
                            >
                          </div>
                        </div>
                      </div>

                      <div class="col-6">
                        <label class="form-label mb-3" for="btnradio2">
                          Tarja do imóvel para o site <br />
                          <small
                            >Escolha a cor e a frase que aparecerão na miniatura
                            do imóvel.
                          </small>
                        </label>
                        <div class="row">
                          <div class="col-8">
                            <div class="mb-3">
                              <div
                                v-if="mostrarSkeleton"
                                class="skeleton-label"
                              ></div>
                              <div
                                v-if="mostrarSkeleton"
                                class="skeleton-input"
                              ></div>
                              <label
                                v-if="!mostrarSkeleton"
                                for="exampleInputEmail1"
                                class="form-label"
                              >
                                Texto da tarja
                              </label>
                              <input
                                type="text"
                                required
                                v-if="!mostrarSkeleton"
                                class="form-control"
                                v-model="
                                  currentImovel.publicacao
                                    .tarja_imovel_site_publi
                                "
                                placeholder="Em construção"
                              />
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="mb-3">
                              <div
                                v-if="mostrarSkeleton"
                                class="skeleton-label"
                              ></div>
                              <div
                                v-if="mostrarSkeleton"
                                class="skeleton-input"
                              ></div>
                              <label
                                v-if="!mostrarSkeleton"
                                for="exampleInputEmail1"
                                class="form-label"
                              >
                                Cor da tarja
                              </label>
                              <input
                                type="color"
                                v-if="!mostrarSkeleton"
                                v-model="
                                  currentImovel.publicacao.cor_tarja_publi
                                "
                                class="form-control"
                                id="exampleColorInput"
                                value="#563d7c"
                                title="Escolha a cor"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  @click="closeModal()"
                >
                  Fechar
                </button>
                <button
                  type="button"
                  class="btn btn-warning"
                  :disabled="autenticando"
                  @click="handleFinish()"
                >
                  Salvar alterações &nbsp;<i
                    class="fa fa-arrow-right"
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="d-grid mt-3 mb-3 gap-2 d-md-flex justify-content-md-end">
        <button
          class="btn btn-dark btn-sm"
          @click="previousPageImovel()"
          :disabled="currentPageImovel <= 1"
        >
          Anterior
        </button>
        <button
          class="btn btn-dark btn-sm"
          style="margin-right: 3% !important"
          @click="nextPageImovel()"
          :disabled="currentPageImovel >= totalPagesImoveis"
        >
          Proximo
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../../../../service/api/index";
import { jwtDecode } from "jwt-decode";

import L from "leaflet";
import _ from "lodash";
import "leaflet/dist/leaflet.css";
import axios from "axios";

export default {
  name: "ListImoveisdmin",
  data() {
    return {
      token: localStorage.getItem("token"),
      id_user: "",
      allImoveis: [],
      currentPageImovel: 1,
      perPageImovel: 1,
      searchImovel: "",
      msgQualidade: "",
      estrelas: 0,
      porcentagemQualidade: 0,
      iniciais: "",
      nome: "",
      sobrenome: "",
      maxImages: 10,
      modalInstance: null,
      currentImovel: null,
      originalImovelIndex: null,
      modalInstance: null,
      images: [],
      imageSrc: null,

      mostrarMapa: false,
      buscarCEP: "",
      logradouro: "",
      cidade: "",
      estado: "",
      bairro: "",

      latitude: "-8.13057",
      longitude: "39.6945",
      map: null,
      marker: null,
      mapaCondo: "Não",

      areaTotal: "",
      areaConstruida: "",
      areaPrivativa: "",
      precoImovel: "",
      precoCondominio: "",
      precoIptu: "",
      taxasTotal: "",
      buscarCEP: "",
      selectPais: "",
      selectEstado: "",
      selectCidade: "",
      selectBairro: "",
    };
  },
  mounted() {
    let token = this.token;
    let decode = jwtDecode(token);
    let id_user = decode.id_user;
    this.nome = decode.nome;
    this.sobrenome = decode.sobrenome;

    const iniciais = this.nome.charAt(0) + this.sobrenome.charAt(0);
    this.iniciais = iniciais;
    this.id_user = id_user;

    this.fetchAllImoveis();
  },

  watch: {
    mapaCondo(newValue) {
      // console.log(newValue)
      if (newValue == "Sim") {
        this.mostrarMapa = true;
        this.$nextTick(() => {
          if (this.map) {
            this.initMap();
            this.updateMap();
          } else {
            this.initMap();
          }
        });
      } else {
        this.mostrarMapa = false;
      }
    },

    buscarCEP(newVal, oldVal) {
      if (newVal.length === 9 && newVal !== oldVal) {
        this.debouncedCheckCEP();
      }
    },
  },

  created() {
    this.debouncedCheckCEP = _.debounce(this.consultarCEPLoc, 100);
  },

  methods: {
    initMap() {
      this.map = L.map("map").setView([this.latitude, this.longitude], 15);

      // Adiciona os tiles do OpenStreetMap
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap contributors",
      }).addTo(this.map);

      this.addMarker();
    },
    updateMap() {
      this.map.setView([this.latitude, this.longitude], 15);
      this.addMarker();
    },
    addMarker() {
      const lat = this.latitude;
      const lng = this.longitude;

      if (!isNaN(lat) && !isNaN(lng)) {
        L.marker([lat, lng])
          .addTo(this.map)
          .bindPopup(`Latitude: ${lat}, Longitude: ${lng}`)
          .openPopup();
      } else {
        console.error("Coordenadas inválidas");
      }
    },

    mostrarTeste(event) {
      event.preventDefault();
      this.mostrarResumo = true;
    },

    formatCurrency(value) {
      if (typeof value !== "number") {
        value = parseFloat(value);
      }
      return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
    formatarData(dataString) {
      if (!dataString) return "";
      const data = new Date(dataString);
      return data.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    },

    fetchAllImoveis() {
      let id_user = this.id_user;

      api.listmyImoveis(id_user).then((res) => {
        this.allImoveis = res.data;

        this.mapImoveis = L.map(this.$refs.mapElement).setView(
          [this.latitudeImoveis, this.longitudeImoveis],
          10
        );
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution: "© OpenStreetMap contributors",
        }).addTo(this.mapImoveis);

        res.data.map(async (imovel) => {
          await this.buscarCoordenadas(
            imovel.localizacao.cep,
            imovel.localizacao.rua
          ).then((res) => {
            if (res) {
              this.updateMap();
            }
          });
        });

        this.avaliarQualidadeCadastro(this.allImoveis);
      });
    },

    formatCurrency(value) {
      if (typeof value !== "number") {
        value = parseFloat(value);
      }
      return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
    formatarData(dataString) {
      if (!dataString) return "";
      const data = new Date(dataString);
      return data.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    },

    previousPageImovel() {
      if (this.currentPageImovel > 1) {
        this.currentPageImovel -= 1;
      }
    },
    nextPageImovel() {
      if (this.currentPageImovel < this.totalPagesImoveis) {
        this.currentPageImovel += 1;
      }
    },

    avaliarQualidadeCadastro(imoveis) {
      imoveis.forEach((imovel) => {
        let totalCampos = 0;
        let camposNulos = 0;

        const analisarObjeto = (obj) => {
          Object.values(obj).forEach((val) => {
            if (val && typeof val === "object" && !Array.isArray(val)) {
              analisarObjeto(val);
            } else {
              totalCampos++;
              if (val === null || val === "") {
                camposNulos++;
              }
            }
          });
        };

        analisarObjeto(imovel);

        const pontuacaoMaxima = 10;
        const pontuacao = Math.round(
          ((totalCampos - camposNulos) / totalCampos) * pontuacaoMaxima
        );
        const porcentagem = Math.round(
          ((totalCampos - camposNulos) / totalCampos) * 100
        ); // Calcula a porcentagem

        imovel.pontuacaoQualidade = `${pontuacao}/10`;
        imovel.porcentagemQualidade = porcentagem;
        this.qualidade = imovel.pontuacaoQualidade;

        if (porcentagem == 100) {
          this.estrelas = 5;
          this.msgQualidade = "Excelente";
        } else if (porcentagem >= 80) {
          this.estrelas = 4;
          this.msgQualidade = "Muito Bom";
        } else if (porcentagem >= 60) {
          this.estrelas = 3;
          this.msgQualidade = "Bom";
        } else if (porcentagem >= 40) {
          this.estrelas = 2;
          this.msgQualidade = "Regular";
        } else if (porcentagem >= 20) {
          this.estrelas = 1;
          this.msgQualidade = "Ruim";
        } else {
          this.estrelas = 0;
          this.msgQualidade = "Péssimo";
        }

        this.qualidadeProgress = porcentagem;
      });

      return imoveis;
    },

    openModal(id_imovel) {
      // console.log(this.myImoveis)
      // this.originalImovelIndex = this.myImoveis.findIndex(imovel => imovel.id_imovel === id_imovel);
      this.originalImovelIndex = this.allImoveis.findIndex(
        (imovel) => imovel.id_imovel === id_imovel
      );
      if (this.originalImovelIndex !== -1) {
        this.currentImovel = JSON.parse(
          JSON.stringify(this.allImoveis[this.originalImovelIndex])
        );
        this.$nextTick(() => {
          const modalElement = document.getElementById(
            `modalEditImovel${this.currentImovel.id_imovel}`
          );
          this.modalInstance = new bootstrap.Modal(modalElement);
          this.modalInstance.show();
        });
      } else {
        console.error("Imóvel não encontrado");
      }
      this.areaTotal = this.currentImovel.medidas.area_total;
      this.areaConstruida = this.currentImovel.medidas.area_contruida;
      this.areaPrivativa = this.currentImovel.medidas.area_privativa;
      this.precoImovel = this.currentImovel.preco.preco_imovel;
      this.precoCondominio = this.currentImovel.preco.preco_condominio;
      this.precoIptu = this.currentImovel.preco.preco_iptu;
      this.taxasTotal = this.currentImovel.preco.total_mensal_taxas;
      this.buscarCEP = this.currentImovel.localizacao.cep;
      this.selectPais = this.currentImovel.localizacao.pais;
      this.selectEstado = this.currentImovel.localizacao.estado;
      this.selectCidade = this.currentImovel.localizacao.cidade;
      this.selectBairro = this.currentImovel.localizacao.bairro;
      this.logradouro = this.currentImovel.localizacao.logradouro;
      this.images = this.currentImovel.fotos;
      this.aplicaMascaraMedidaTotal();
      this.aplicaMascaraMedidaConstruida();
      this.aplicaMascaraMedidaPrivativa();
      this.aplicaMascaraDinheiroPrecoImovel();
      this.consultarCEPLoc();

      console.log(this.currentImovel);
    },
    closeModal() {
      if (this.modalInstance) {
        this.modalInstance.hide();
        this.modalInstance = null;
      }
      this.currentImovel = null;
      this.originalImovelIndex = null;
      this.areaTotal = "";
      this.areaConstruida = "";
      this.areaPrivativa = "";
    },
    async consultarCEPLoc() {
      if (this.buscarCEP.length === 9) {
        const cep = this.buscarCEP.replace(/\D/g, "");

        try {
          const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
          console.log("res do cep: ", res);
          // Correção nas propriedades de acordo com a resposta da API
          let rua = res.data.logradouro;
          let bairro = res.data.bairro;
          let cidade = res.data.localidade;
          let estado = res.data.uf;

          this.selectPais = "Brasil";
          this.selectEstado = estado;
          this.selectCidade = cidade;
          this.selectBairro = bairro;
          this.logradouro = rua;

          // await this.buscarCoordenadas(cep, cidade, estado);
          await this.buscarCoordenadasLoc(cep, rua);
        } catch (error) {
          console.error("Erro ao consultar CEP: ", error);
        }
      }
    },
    async buscarCoordenadasLoc(cep, rua) {
      // trocar pela apiKey do cliente
      // chave do cliente AIzaSyCYyp1vWvpT3mhnwDQMQhLSiV3EecrP5wY 1
      // chave do cliente AIzaSyC59bw9mWYet8FeTX0tZZdQ_FzBQUxaRjE certa

      const apiKey = "AIzaSyC59bw9mWYet8FeTX0tZZdQ_FzBQUxaRjE";

      try {
        const res = await axios.get(
          "https://maps.googleapis.com/maps/api/geocode/json",
          {
            params: {
              address: `${cep}, ${rua}`,
              key: apiKey,
            },
          }
        );

        console.log(res.data, "coodernadas");

        if (res.data && res.data.results && res.data.results.length > 0) {
          const location = res.data.results[0].geometry.location;
          const latitude = location.lat;
          const longitude = location.lng;

          this.latitude = latitude;
          this.longitude = longitude;

          // console.log("Latitude e Longitude encontradas:", latitude, longitude);
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
    handledComentario(id) {
      let id_imovel = id;

      api.comentarioImovel(id_imovel).then((res) => {
        this.comentario = res.data;
      });
    },
    handledDelete(id) {
      let id_imovel = id;

      api.deleteImovel(id_imovel).then((res) => {
        this.fetchMyImoveis();
      });
    },
    aplicaMascaraMedidaPrivativa() {
      let v = this.areaPrivativa;

      // Remove tudo o que não é dígito e ponto
      v = v.replace(/[^0-9.]/g, "");

      // Evita a entrada de mais de um ponto
      v = v.replace(/(\..*)\./g, "$1");

      // Limita a apenas duas casas decimais após o ponto
      v = v.replace(/(\.\d{2})\d+/g, "$1");

      this.areaPrivativa = v;
    },
    aplicaMascaraMedidaConstruida() {
      let v = this.areaConstruida;

      // Remove tudo o que não é dígito e ponto
      v = v.replace(/[^0-9.]/g, "");

      // Evita a entrada de mais de um ponto
      v = v.replace(/(\..*)\./g, "$1");

      // Limita a apenas duas casas decimais após o ponto
      v = v.replace(/(\.\d{2})\d+/g, "$1");

      this.areaConstruida = v;
    },
    aplicaMascaraMedidaTotal() {
      let v = this.areaTotal;

      // Remove tudo o que não é dígito e ponto
      v = v.replace(/[^0-9.]/g, "");

      // Evita a entrada de mais de um ponto
      v = v.replace(/(\..*)\./g, "$1");

      // Limita a apenas duas casas decimais após o ponto
      v = v.replace(/(\.\d{2})\d+/g, "$1");

      this.areaTotal = v;
    },
    aplicaMascaraDinheiroPrecoImovel() {
      let v = this.precoImovel;

      // Remove tudo o que não é dígito
      v = v.replace(/\D/g, "");

      // Divide o número para preparar a adição de vírgula e ponto
      let valorDecimal = parseInt(v) / 100;

      // Formata o número como valor monetário
      this.precoImovel = valorDecimal.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      // console.log(this.currentImovel)
    },
    aplicaMascaraDinheiroPrecoIptu() {
      let v = this.precoIptu;

      // Remove tudo o que não é dígito
      v = v.replace(/\D/g, "");

      // Divide o número para preparar a adição de vírgula e ponto
      let valorDecimal = parseInt(v) / 100;

      // Formata o número como valor monetário
      this.precoIptu = valorDecimal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
    aplicaMascaraDinheiroPrecoCondominio() {
      let v = this.precoCondominio;

      // Remove tudo o que não é dígito
      v = v.replace(/\D/g, "");

      // Divide o número para preparar a adição de vírgula e ponto
      let valorDecimal = parseInt(v) / 100;

      // Formata o número como valor monetário
      this.precoCondominio = valorDecimal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
    aplicaMascaraDinheiroTotalTaxas() {
      let v = this.taxasTotal;

      // Remove tudo o que não é dígito
      v = v.replace(/\D/g, "");

      // Divide o número para preparar a adição de vírgula e ponto
      let valorDecimal = parseInt(v) / 100;

      // Formata o número como valor monetário
      this.taxasTotal = valorDecimal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
    aplicaMascaraCEP() {
      let v = this.buscarCEP;

      v = v.replace(/\D/g, "");
      if (v.length > 8) {
        v = v.substring(0, 8);
      }

      v = v.replace(/^(\d{5})(\d)/, "$1-$2");

      this.buscarCEP = v;
    },
    removerImagem(index) {
      this.images.splice(index, 1);
    },
    previewImage(event) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        // console.log("arquivo: ", file)
        const reader = new FileReader();
        reader.onload = (e) => {
          this.images.push({
            foto: e.target.result,
            file: file,
            progress: 0,
          });
          // Simulate the upload for each image
          this.simulateUpload(this.images.length - 1);
        };
        reader.readAsDataURL(file);
      }
    },
    simulateUpload(index) {
      const interval = setInterval(() => {
        if (this.images[index].progress < 100) {
          this.images[index].progress += 10;
        } else {
          clearInterval(interval);
        }
      }, 100);
    },
    getImageUrl(imagePath) {
      if (imagePath.startsWith("/foto")) {
        return `https://zonu.com.br/api/${imagePath}`;
      } else {
        return imagePath;
      }
    },

    aplicaMascaraMedida(campo) {
      this.calcularAreaTotal();
      // console.log(campo)
      this[campo] = this.formatarDecimal(this[campo]);
      // console.log(this.areaConstruida, this.areaPrivativa, this.areaTotal)
      // console.log(this.currentImovel)
    },
    formatarDecimal(valor) {
      // console.log(valor)
      let valorNumerico = valor.replace(/\D/g, "");
      valorNumerico = (valorNumerico / 100).toFixed(2).replace(".", ",");
      return valorNumerico.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    calcularAreaTotal() {
      // Converte os valores para números e calcula a área total
      let areaConstruida = parseFloat(this.areaConstruida) || 0;
      let areaPrivativa = parseFloat(this.areaPrivativa) || 0;
      this.areaTotal = (areaConstruida + areaPrivativa).toFixed(2); // Calcula a área total
      this.currentImovel.medidas.area_contruida = this.areaConstruida;
      this.currentImovel.medidas.area_privativa = this.areaPrivativa;
      this.currentImovel.medidas.area_total = this.areaTotal;
      // console.log(this.myImoveis, this.currentImovel)
    },
  },

  computed: {
    imoveisOnCurrentPage() {
      const startIndex = (this.currentPageImovel - 1) * this.perPageImovel;
      const endIndex = startIndex + this.perPageImovel;
      return this.allImoveis
        .filter((imovel) => {
          return imovel.descricao.titulo
            .toLowerCase()
            .includes(this.searchImovel.toLowerCase());
        })
        .slice(startIndex, endIndex);
    },
    totalPagesImoveis() {
      return Math.ceil(
        this.allImoveis.filter((imovel) => {
          this.currentPageConcept = 1;
          return imovel.descricao.titulo
            .toLowerCase()
            .includes(this.searchImovel.toLowerCase());
        }).length / this.perPageImovel
      );
    },
  },
};
</script>
