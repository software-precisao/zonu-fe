<template>
  <div class="wrapper">

    <Sidebar :defaultCollapsed="true" />

    <div class="main">
      <Navbar />
      <main class="content">
        <div class="container-fluid p-0">
          <h1 class="h3 mb-3"><strong>Cadastro |</strong> Novo Imóveis</h1>

          <div class="row d-flex flex-row justify-content-between">


            <div style="width: 19%; margin-right: 1%">
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
                              <span v-if="!stepInfo"><i class="fa fa-circle"></i> Informações</span>
                              <span v-if="stepInfo" class="text-success"><i class="fa fa-check text-success"></i>
                                Informações</span>
                            </div>

                            <div class="col-auto">
                              <div class="vertical-hr"></div>
                            </div>

                            <div class="col-12">
                              <span v-if="!stepComodos"><i class="fa fa-circle"></i> Cômodos</span>
                              <span class="text-success" v-if="stepComodos">
                                <i class="fa fa-check text-success"></i>
                                Cômodos</span>
                            </div>

                            <div class="col-auto">
                              <div class="vertical-hr"></div>
                            </div>

                            <div class="col-12">
                              <span v-if="!stepMedidas">
                                <i class="fa fa-circle"></i> Medidas</span>
                              <span class="text-success" v-if="stepMedidas">
                                <i class="fa fa-check text-success"></i>
                                Medidas</span>
                            </div>

                            <div class="col-auto">
                              <div class="vertical-hr"></div>
                            </div>

                            <div class="col-12">
                              <span v-if="!stepPreco">
                                <i class="fa fa-circle"></i> Preço</span>
                              <span class="text-success" v-if="stepPreco">
                                <i class="fa fa-check text-success"></i>
                                Preço</span>
                            </div>

                            <div class="col-auto">
                              <div class="vertical-hr"></div>
                            </div>

                            <div class="col-12">
                              <span v-if="!stepCaracteristica">
                                <i class="fa fa-circle"></i>
                                Características</span>
                              <span class="text-success" v-if="stepCaracteristica">
                                <i class="fa fa-check text-success"></i>
                                Características</span>
                            </div>

                            <div class="col-auto">
                              <div class="vertical-hr"></div>
                            </div>
                            <div class="col-12">
                              <span v-if="!stepLocalizacao">
                                <i class="fa fa-circle"></i> Localização</span>
                              <span class="text-success" v-if="stepLocalizacao">
                                <i class="fa fa-check text-success"></i>
                                Localização</span>
                            </div>

                            <div class="col-auto">
                              <div class="vertical-hr"></div>
                            </div>
                            <div class="col-12">
                              <span v-if="!stepProximidades">
                                <i class="fa fa-circle"></i> Proximidades</span>
                              <span class="text-success" v-if="stepProximidades">
                                <i class="fa fa-check text-success"></i>
                                Proximidades</span>
                            </div>

                            <div class="col-auto">
                              <div class="vertical-hr"></div>
                            </div>

                            <div class="col-12">
                              <span v-if="!stepDescricao">
                                <i class="fa fa-circle"></i> Descrição</span>
                              <span class="text-success" v-if="stepDescricao">
                                <i class="fa fa-check text-success"></i>
                                Descrição</span>
                            </div>

                            <div class="col-auto">
                              <div class="vertical-hr"></div>
                            </div>

                            <div class="col-12">
                              <span v-if="!stepComplemento">
                                <i class="fa fa-circle"></i> Complementos</span>
                              <span class="text-success" v-if="stepComplemento">
                                <i class="fa fa-check text-success"></i>
                                Complementos</span>
                            </div>

                            <div class="col-auto">
                              <div class="vertical-hr"></div>
                            </div>
                            <div class="col-12">
                              <span v-if="!stepImagens">
                                <i class="fa fa-circle"></i> Imagens</span>
                              <span class="text-success" v-if="stepImagens">
                                <i class="fa fa-check text-success"></i>
                                Imagens</span>
                            </div>

                            <div class="col-auto">
                              <div class="vertical-hr"></div>
                            </div>

                            <div class="col-12">
                              <span v-if="!stepPublicacao">
                                <i class="fa fa-circle"></i> Publicação</span>
                              <span class="text-success" v-if="stepPublicacao">
                                <i class="fa fa-check text-success"></i>
                                Publicação</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Aqui começa as TABS. Copie e cole da INFOTAB -->
            <div style="width: 79%; margin-left: 1%; margin-bottom: 4%;">


              <div class="col-xl-12 col-xxl-12 d-flex">
                <div class="w-100">
                  <div class="row">

                    <div class="card" v-if="infoTab">
                      <div class="card-body">
                        <div class="col mt-0">
                          <h1 class="title-login mt-2">Informações iniciais</h1>
                          <p>Defina as informações com precisão para os seus clientes.</p>
                        </div>
                        <div>
                          <div class="row mt-4">
                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Código de
                                  referência
                                  <small class="text-danger">*</small>
                                </label>
                                <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="codigoref" placeholder="Digite aqui..." />

                                <small v-if="msgNull" class="text-danger">
                                  <li class="mt-2">Não deixe este campo vazio</li>
                                </small>
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                  class="form-label">Condomínio/empreendimento?
                                </label>

                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                  aria-label="Basic radio toggle button group">
                                  <input type="radio" class="btn-check" name="selectCondominio" id="selectCondominio1"
                                    autocomplete="off" value="Sim" v-model="selectCondominio" />
                                  <label class="btn btn-outline-success" for="selectCondominio1">Sim</label>

                                  <input type="radio" class="btn-check" value="Não" v-model="selectCondominio"
                                    name="selectCondominio" id="selectCondominio2" autocomplete="off" />
                                  <label class="btn btn-outline-danger" for="selectCondominio2">Não</label>
                                </div>
                              </div>
                            </div>

                            <div class="col-6">
                              <div class="mb-3" v-if="inputCondominio">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                  class="form-label">Condomínio/empreendimento?
                                  <small class="text-danger">* </small>
                                  <a href="/novo-condominio" type="button" class="ms-2 text-success" style="
                                      --bs-btn-padding-y: 0.25rem;
                                      --bs-btn-padding-x: 0.5rem;
                                      --bs-btn-font-size: 0.75rem;
                                    ">
                                    <i class="fa fa-plus"></i> Adicionar condominio
                                  </a>
                                </label>

                                <select required v-if="!mostrarSkeleton" class="form-control form-select"
                                  v-model="condominioEmpreendimento">
                                  <option selected disabled>Selecione</option>

                                  <option v-for="condominio in condominios" :value="condominio.id_condominio">{{
                                    condominio.nome_condominio }}</option>
                                </select>
                              </div>
                            </div>

                            <div class="col-2">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Tipo/Subtipo
                                  <small class="text-danger">* </small>
                                </label>

                                <select type="text" required v-if="!mostrarSkeleton" class="form-control form-select"
                                  v-model="tipoImovel">
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
                                  <option value="Sala Comercial">Sala Comercial</option>
                                </select>
                                <small v-if="msgNull" class="text-danger">
                                  <li class="mt-2">Não deixe este campo vazio</li>
                                </small>
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Perfil do
                                  imóvel
                                  <small class="text-danger">* </small>
                                </label>

                                <select type="text" required v-if="!mostrarSkeleton" class="form-control form-select"
                                  v-model="perfilImovel">
                                  <option selected disabled>Selecione</option>
                                  <option value="Residêncial">Residêncial</option>
                                  <option value="Comercial">Comercial</option>
                                  <option value="Industrial">Industrial</option>
                                  <option value="Rural">Rural</option>
                                  <option value="Temporada">Temporada</option>
                                </select>
                                <small v-if="msgNull" class="text-danger">
                                  <li class="mt-2">Não deixe este campo vazio</li>
                                </small>
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Situação
                                  <small class="text-danger">* </small>
                                </label>

                                <select type="text" required v-if="!mostrarSkeleton" class="form-control form-select"
                                  v-model="situacaoImovel">
                                  <option selected disabled>Selecione</option>
                                  <option value="Pronto pra morar">Pronto pra morar</option>
                                  <option value="Em construção">Em construção</option>
                                  <option value="Lançamento">Lançamento</option>
                                  <option value="Novo">Novo</option>
                                  <option value="Usado">Usado</option>

                                </select>
                                <small v-if="msgNull" class="text-danger">
                                  <li class="mt-2">Não deixe este campo vazio</li>
                                </small>
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Ano da
                                  construção

                                </label>

                                <input type="number" required v-if="!mostrarSkeleton" class="form-control"
                                  placeholder="Ex.: 2015" v-model="anoImovel" />
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                  class="form-label">Incorporação </label>
                                <input type="text" v-if="!mostrarSkeleton" class="form-control" placeholder="RI"
                                  v-model="incorporacao" />
                               
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Posição Solar
                                  <small class="text-danger">* </small>
                                </label>
                                <select type="text" required v-if="!mostrarSkeleton" class="form-control form-select"
                                  v-model="posicaoSolar">
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
                                <small v-if="msgNull" class="text-danger">
                                  <li class="mt-2">Não deixe este campo vazio</li>
                                </small>
                              </div>

                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Terreno

                                </label>
                                <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                  aria-label="Basic radio toggle button group">
                                  <input type="radio" class="btn-check" id="btnTerreno1" autocomplete="off"
                                    value="Plano" name="selectTerreno" v-model="selectTerreno" />
                                  <label class="btn btn-outline-success" for="btnTerreno1">Plano</label>

                                  <input type="radio" class="btn-check" id="btnTerreno2" autocomplete="off"
                                    value="Aclive" name="selectTerreno" v-model="selectTerreno" />
                                  <label class="btn btn-outline-success" for="btnTerreno2">Aclive</label>

                                  <input type="radio" class="btn-check" id="btnTerreno3" autocomplete="off"
                                    value="Declive" name="selectTerreno" v-model="selectTerreno" />
                                  <label class="btn btn-outline-success" for="btnTerreno3">Declive</label>
                                </div>

                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Próximo ao
                                  mar? <small class="text-danger">* </small>
                                </label>
                                <select type="text" required v-if="!mostrarSkeleton" class="form-control form-select"
                                  v-model="proximoMar">
                                  <option selected disabled>Selecione</option>
                                  <option value="Vista para o mar">Vista para o mar</option>
                                  <option value="Frente para o mar">Frente para o mar</option>
                                  <option value="Quadra do mar">Quadra do mar</option>
                                  <option value="Proximo ao mar">Proximo ao mar</option>
                                  <option value="Não">Não</option>

                                </select>
                                <small v-if="msgNull" class="text-danger">
                                  <li class="mt-2">Não deixe este campo vazio</li>
                                </small>
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Averbado
                                 </label>

                                <br />

                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                  aria-label="Basic radio toggle button group">
                                  <input type="radio" class="btn-check" name="selectAverbado" id="selectAverbado1"
                                    autocomplete="off" value="Sim" v-model="selectAverbado" />
                                  <label class="btn btn-outline-success" for="selectAverbado1">Sim</label>

                                  <input type="radio" class="btn-check" value="Não" v-model="selectAverbado"
                                    name="selectAverbado" id="selectAverbado2" autocomplete="off" />
                                  <label class="btn btn-outline-danger" for="selectAverbado2">Não</label>
                                </div>
                              
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Escriturado
                                 </label>

                                <br />

                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                  aria-label="Basic radio toggle button group">
                                  <input type="radio" class="btn-check" name="selectEscritura" id="selectEscritura1"
                                    autocomplete="off" value="Sim" v-model="selectEscritura" />
                                  <label class="btn btn-outline-success" for="selectEscritura1">Sim</label>

                                  <input type="radio" class="btn-check" value="Não" v-model="selectEscritura"
                                    name="selectEscritura" id="selectEscritura2" autocomplete="off" />
                                  <label class="btn btn-outline-danger" for="selectEscritura2">Não</label>
                                </div>
                              
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Esquina
                                </label>

                                <br />

                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                  aria-label="Basic radio toggle button group">
                                  <input type="radio" class="btn-check" name="selectEsquina" id="selectEsquina1"
                                    autocomplete="off" value="Sim" v-model="selectEsquina" />
                                  <label class="btn btn-outline-success" for="selectEsquina1">Sim</label>

                                  <input type="radio" class="btn-check" value="Não" v-model="selectEsquina"
                                    name="selectEsquina" id="selectEsquina2" autocomplete="off" />
                                  <label class="btn btn-outline-danger" for="selectEsquina2">Não</label>
                                </div>
                              
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Tem mobília
                                </label>

                                <br />

                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                  aria-label="Basic radio toggle button group">
                                  <input type="radio" class="btn-check" name="selectMobilia" id="selectMobilia1"
                                    autocomplete="off" value="Sim" v-model="selectMobilia" />
                                  <label class="btn btn-outline-success" for="selectMobilia1">Sim</label>

                                  <input type="radio" class="btn-check" value="Não" v-model="selectMobilia"
                                    name="selectMobilia" id="selectMobilia2" autocomplete="off" />
                                  <label class="btn btn-outline-danger" for="selectMobilia2">Não</label>
                                </div>
                              
                              </div>
                            </div>
                          </div>

                          <hr />
                          <div class="row mt-3">
                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-block">
                                <a href="/dashboard" class="btn btn-secondary" type="button">Cancelar</a>
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-success" @click="handleProximoComodo()" type="submit">
                                  Próximo
                                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card" v-if="comodosTab">
                      <div class="card-body">
                        <div class="col mt-0">
                          <h1 class="title-login mt-2">Cômodos</h1>
                          <p>Defina as quantidades de cada cômodo deste imóvel.</p>
                        </div>
                        <div>
                          <!-- Insira o HTML form aqui de acordo com o TecImob -->
                          <div class="row mt-4">
                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Dormitório
                                </label>
                                <input type="number" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="dormitorio" placeholder="Digite a quantidade" />
                              </div>
                              <p v-if="msgNullComodos" class="text-danger"><small><i class="fa fa-ban"></i> Não
                                  deixe este campo vazio!</small></p>
                            </div>
                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Suíte
                                </label>
                                <input type="number" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="suite" placeholder="Digite a quantidade" />
                              </div>
                              <p v-if="msgNullComodos" class="text-danger"><small><i class="fa fa-ban"></i> Não
                                  deixe este campo vazio!</small></p>
                            </div>
                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Banheiro
                                </label>
                                <input type="number" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="banheiro" placeholder="Digite a quantidade" />
                              </div>
                              <p v-if="msgNullComodos" class="text-danger"><small><i class="fa fa-ban"></i> Não
                                  deixe este campo vazio!</small></p>
                            </div>
                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Garagem
                                </label>
                                <input type="number" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="garagem" placeholder="Digite a quantidade" />
                              </div>
                              <p v-if="msgNullComodos" class="text-danger"><small><i class="fa fa-ban"></i> Não
                                  deixe este campo vazio!</small></p>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Garagem
                                  coberta?
                                </label>

                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                  <input v-if="!mostrarSkeleton" type="radio" class="btn-check" name="garagemCoberta"
                                    id="selectGaragemCobertura1" autocomplete="off" value="Sim"
                                    v-model="selectGaragemCobertura" />
                                  <label v-if="!mostrarSkeleton" class="btn btn-outline-success"
                                    for="selectGaragemCobertura1">Sim</label>

                                  <input v-if="!mostrarSkeleton" type="radio" class="btn-check" value="Não"
                                    v-model="selectGaragemCobertura" name="garagemCoberta" id="selectGaragemCobertura2"
                                    autocomplete="off" />
                                  <label v-if="!mostrarSkeleton" class="btn btn-outline-danger"
                                    for="selectGaragemCobertura2">Não</label>
                                </div>
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Possui box na
                                  garagem?
                                </label>

                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                  <input v-if="!mostrarSkeleton" type="radio" class="btn-check" name="boxGaragem"
                                    id="boxGaragemY" autocomplete="off" value="Sim" v-model="selectBoxGaragem" />
                                  <label v-if="!mostrarSkeleton" class="btn btn-outline-success"
                                    for="boxGaragemY">Sim</label>

                                  <input v-if="!mostrarSkeleton" type="radio" class="btn-check" value="Não"
                                    v-model="selectBoxGaragem" name="boxGaragem" id="boxGaragemN" autocomplete="off" />
                                  <label v-if="!mostrarSkeleton" class="btn btn-outline-danger"
                                    for="boxGaragemN">Não</label>
                                </div>
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Sala de TV
                                </label>
                                <input type="number" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="salaTv" placeholder="Digite a quantidade" />
                              </div>
                              <p v-if="msgNullComodos" class="text-danger"><small><i class="fa fa-ban"></i> Não
                                  deixe este campo vazio!</small></p>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Sala de jantar
                                </label>
                                <input type="number" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="salaJantar" placeholder="Digite a quantidade" />
                              </div>
                              <p v-if="msgNullComodos" class="text-danger"><small><i class="fa fa-ban"></i> Não
                                  deixe este campo vazio!</small></p>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Sala de estar
                                </label>
                                <input type="number" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="salaEstar" placeholder="Digite a quantidade" />
                              </div>
                              <p v-if="msgNullComodos" class="text-danger"><small><i class="fa fa-ban"></i> Não
                                  deixe este campo vazio!</small></p>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Lavabo
                                </label>
                                <input type="number" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="lavabo" placeholder="Digite a quantidade" />
                              </div>

                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Área de serviço
                                </label>
                                <input type="number" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="areaServico" placeholder="Digite a quantidade" />
                              </div>
                              <p v-if="msgNullComodos" class="text-danger"><small><i class="fa fa-ban"></i> Não
                                  deixe este campo vazio!</small></p>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Cozinha
                                </label>
                                <input type="number" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="cozinha" placeholder="Digite a quantidade" />
                              </div>
                              <p v-if="msgNullComodos" class="text-danger"><small><i class="fa fa-ban"></i> Não
                                  deixe este campo vazio!</small></p>
                            </div>

                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Closet
                                </label>
                                <input type="number" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="closet" placeholder="Digite a quantidade" />
                              </div>
                              <p v-if="msgNullComodos" class="text-danger"><small><i class="fa fa-ban"></i> Não
                                  deixe este campo vazio!</small></p>
                            </div>

                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Escritório
                                </label>
                                <input type="number" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="escritorio" placeholder="Digite a quantidade" />
                              </div>
                              <p v-if="msgNullComodos" class="text-danger"><small><i class="fa fa-ban"></i> Não
                                  deixe este campo vazio!</small></p>
                            </div>

                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Dependência para empregada
                                </label>
                                <input type="number" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="depEmpregada" placeholder="Digite a quantidade" />
                              </div>
                              <p v-if="msgNullComodos" class="text-danger"><small><i class="fa fa-ban"></i> Não
                                  deixe este campo vazio!</small></p>
                            </div>

                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Copa
                                </label>
                                <input type="number" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="salaCopa" placeholder="Digite a quantidade" />
                              </div>
                              <p v-if="msgNullComodos" class="text-danger"><small><i class="fa fa-ban"></i> Não
                                  deixe este campo vazio!</small></p>
                            </div>
                          </div>

                          <hr />
                          <div class="row mt-3">
                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-block">
                                <button @click="handleAnteriorInfo()" class="btn btn-secondary" type="button">
                                  <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                  Anterior
                                </button>
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-success" @click="handleProximoMedida()" type="button">
                                  Próximo
                                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card" v-if="medidaTab">
                      <div class="card-body">
                        <div class="col mt-0">
                          <h1 class="title-login mt-2">Medidas</h1>
                          <p>Defina as medidas deste imóvel.</p>
                        </div>
                        <div>
                          <div class="row mt-4">



                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="areaConstruida" class="form-label">Área
                                  Construída</label>
                                <div class="input-group">
                                  <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                    v-model="areaConstruida" placeholder="Digite aqui..."
                                    @input="aplicaMascaraMedida('areaConstruida')" />
                                  <span v-if="!mostrarSkeleton" class="input-group-text">m²</span>
                                </div>
                              </div>
                            </div>


                            <!-- <div class="col-4">
                                <div class="mb-3">
                                  <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                  <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                  <label v-if="!mostrarSkeleton" for="areaConstruida" class="form-label">
                                    Área Construída
                                  </label>
                                  <div class="input-group">
                                    <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                      v-model="areaConstruida" placeholder="Digite aqui..."
                                      @input="aplicaMascaraMedida('areaConstruida')" />
                                    <span v-if="!mostrarSkeleton" class="input-group-text">m²</span>
                                  </div>
                                </div>
                              </div> -->

                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="areaPrivativa" class="form-label">
                                  Área Privativa
                                </label>
                                <div class="input-group">
                                  <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                    v-model="areaPrivativa" placeholder="0,00"
                                    @input="aplicaMascaraMedida('areaPrivativa')" />
                                  <span v-if="!mostrarSkeleton" class="input-group-text">m²</span>
                                </div>
                              </div>
                            </div>

                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="areaTotal" class="form-label">
                                  Área Total
                                </label>
                                <div class="input-group">
                                  <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                    v-model="areaTotal" disabled placeholder="Aguardando..." />
                                  <span v-if="!mostrarSkeleton" class="input-group-text">m²</span>
                                </div>
                              </div>
                            </div>

                          </div>

                          <hr />
                          <div class="row mt-3">
                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-block">
                                <button @click="handleAnteriorComodos()" class="btn btn-secondary" type="button">
                                  <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                  Anterior
                                </button>
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-success" @click="handleProximoPreco()" type="button">
                                  Próximo
                                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card" v-if="precoTab">
                      <div class="card-body">
                        <div class="col mt-0">
                          <h1 class="title-login mt-2">Preço</h1>
                          <p>
                            Defina o preço deste imóvel e outras informações importantes
                            para o seu cliente.
                          </p>
                        </div>
                        <div>
                          <div class="row mt-4">
                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Tipo do negócio
                                </label>

                                <select type="text" required v-if="!mostrarSkeleton" class="form-control form-select"
                                  v-model="tipoNegocio">
                                  <option selected disabled>Selecione</option>
                                  <option value="Aluguel">Aluguel</option>
                                  <option value="Venda">Venda</option>
                                </select>
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Preço Imóvel
                                </label>
                                <div class="input-group">
                                  <span v-if="!mostrarSkeleton" class="input-group-text">R$</span>
                                  <input type="text" @input="aplicaMascaraDinheiroPrecoImovel"
                                    @blur="aplicaMascaraDinheiroPrecoImovel" required v-if="!mostrarSkeleton"
                                    class="form-control" v-model="precoImovel" placeholder="R$ 0,00" />

                                </div>
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Mostrar preço no site?
                                </label>

                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                  aria-label="Basic radio toggle button group">
                                  <input type="radio" class="btn-check" name="precoNoSite" id="btnradio1"
                                    autocomplete="off" value="Sim" v-model="precoNoSite" />
                                  <label class="btn btn-outline-success" for="btnradio1">Sim</label>

                                  <input type="radio" class="btn-check" value="Não" v-model="precoNoSite"
                                    name="precoNoSite" id="btnradio2" autocomplete="off" />
                                  <label class="btn btn-outline-danger" for="btnradio2">Não</label>
                                </div>
                              </div>
                            </div>

                            <div v-if="textoLugarPrecoView" class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Mostrar no lugar do preço:
                                </label>
                                <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="textoLugarPreco" placeholder="Texto exemplo: Consulte" />
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Preço do IPTU
                                </label>
                                <input type="text" @input="aplicaMascaraDinheiroPrecoIptu"
                                  @blur="aplicaMascaraDinheiroPrecoIptu" required v-if="!mostrarSkeleton"
                                  class="form-control" v-model="precoIptu" placeholder="R$ 0,00" />
                              </div>
                            </div>

                            <div class="col-3" v-if="tipoNegocio === 'Aluguel'">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Período
                                </label>

                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                  aria-label="Basic radio toggle button group">
                                  <input type="radio" class="btn-check" name="periodo" id="periodo1" autocomplete="off"
                                    value="Anual" v-model="periodoIptu" />
                                  <label class="btn btn-outline-success" for="periodo1">Anual</label>

                                  <input type="radio" class="btn-check" value="Mensal" v-model="periodoIptu"
                                    name="periodo" id="periodo2" autocomplete="off" />
                                  <label class="btn btn-outline-danger" for="periodo2">Mensal</label>
                                </div>
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Preço Condomínio
                                </label>
                                <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="precoCondominio" @input="aplicaMascaraDinheiroPrecoCondominio"
                                  @blur="aplicaMascaraDinheiroPrecoCondominio" placeholder="R$ 0,00" />
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Está financiado?
                                </label>

                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                  aria-label="Basic radio toggle button group">
                                  <input type="radio" class="btn-check" name="estaFinanciado" id="estaFinanciado1"
                                    autocomplete="off" value="Sim" v-model="estaFinanciado" />
                                  <label class="btn btn-outline-success" for="estaFinanciado1">Sim</label>

                                  <input type="radio" class="btn-check" value="Não" v-model="estaFinanciado"
                                    name="estaFinanciado" id="estaFinanciado2" autocomplete="off" />
                                  <label class="btn btn-outline-danger" for="estaFinanciado2">Não</label>
                                </div>
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Aceita financiamento?
                                </label>

                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                  aria-label="Basic radio toggle button group">
                                  <input type="radio" class="btn-check" name="aceitaFinanciamento"
                                    id="aceitaFinanciamento1" autocomplete="off" value="Sim"
                                    v-model="aceitaFinanciamento" />
                                  <label class="btn btn-outline-success" for="aceitaFinanciamento1">Sim</label>

                                  <input type="radio" class="btn-check" value="Não" v-model="aceitaFinanciamento"
                                    name="aceitaFinanciamento" id="aceitaFinanciamento2" autocomplete="off" />
                                  <label class="btn btn-outline-danger" for="aceitaFinanciamento2">Não</label>
                                </div>
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Minha Casa Minha Vida?
                                </label>

                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                  aria-label="Basic radio toggle button group">
                                  <input type="radio" class="btn-check" name="mCasaMVida" id="mCasaMVida1"
                                    autocomplete="off" value="Sim" v-model="mCasaMVida" />
                                  <label class="btn btn-outline-success" for="mCasaMVida1">Sim</label>

                                  <input type="radio" class="btn-check" value="Não" v-model="mCasaMVida"
                                    name="mCasaMVida" id="mCasaMVida2" autocomplete="off" />
                                  <label class="btn btn-outline-danger" for="mCasaMVida2">Não</label>
                                </div>
                              </div>
                            </div>

                            <div class="col-6">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Total mensal em taxas (se houver)
                                </label>
                                <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="taxasTotal" placeholder="R$ 0,00" @input="aplicaMascaraDinheiroTotalTaxas"
                                  @blur="aplicaMascaraDinheiroTotalTaxas" />
                              </div>
                            </div>

                            <div class="col-12">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Descrição das Taxas
                                </label>
                                <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="taxasDescricao" placeholder="Digite aqui..." />
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Aceita permuta?
                                </label>

                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                  aria-label="Basic radio toggle button group">
                                  <input type="radio" class="btn-check" name="aceitaPermuta" id="aceitaPermuta1"
                                    autocomplete="off" value="Sim" v-model="aceitaPermuta" />
                                  <label class="btn btn-outline-success" for="aceitaPermuta1">Sim</label>

                                  <input type="radio" class="btn-check" value="Não" v-model="aceitaPermuta"
                                    name="aceitaPermuta" id="aceitaPermuta2" autocomplete="off" />
                                  <label class="btn btn-outline-danger" for="aceitaPermuta2">Não</label>
                                </div>
                              </div>
                            </div>

                            <div class="col-9">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Descrição das Permutas
                                </label>
                                <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="permutaDescricao" placeholder="Digite aqui..." />
                              </div>
                            </div>
                          </div>

                          <hr />
                          <div class="row mt-3">
                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-block">
                                <button @click="handleAnteriorMedida()" class="btn btn-secondary" type="button">
                                  <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                  Anterior
                                </button>
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-success" @click="handleProximoCaracteristica()" type="button">
                                  Próximo
                                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card" v-if="addCaracteristicas">
                      <div class="card-body">
                        <div class="col mt-0">
                          <h1 class="title-login mt-2">Suas Características</h1>
                          <p>Quais as características que este imóvel tem?.</p>
                        </div>
                        <div>
                          <div class="row mt-4">
                            <div class="col-12">
                              <div v-if="msgSuccessCaracteristica"
                                class="alert alert-success alert-dismissible fade show" role="alert">
                                <strong><i class="fa fa-check"></i> Sucesso!</strong> Nova
                                característica cadastrada.
                              </div>
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>

                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                  class="form-label">Caracteristica
                                  <small class="text-danger">*</small>
                                </label>
                                <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="inputCaracteristicas" placeholder="Digite aqui..." />

                              </div>
                              <p v-if="msgNullCaracteristica" class="text-danger"><small><i class="fa fa-ban"></i> Não
                                  deixe este campo vazio!</small></p>
                            </div>


                          </div>
                          <hr />
                          <div class="row mt-3">

                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-block">
                                <button @click="handleFecharCaracteristicas()" class="btn btn-secondary" type="submit">
                                  <i class="fa fa-close" aria-hidden="true"></i>
                                  Fechar
                                </button>
                              </div>
                            </div>



                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-success" @click="handleSaveCaracteristicas()" type="button">
                                  Salvar

                                </button>
                              </div>
                            </div>


                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card" v-if="caracteristicaTab">
                      <div class="card-body">
                        <div class="col mt-0">
                          <h1 class="title-login mt-2">Características do Imóvel <span
                              style="float: inline-end;"><button @click="handleAbrirCaracteristicas()" type="button"
                                class="btn btn-success btn-sm"><i class="fa fa-plus"></i> Adicionar
                                Características</button></span></h1>

                          <p>Defina todas as características deste imóvel.</p>
                        </div>

                        <div>
                          <div class="row">

                            <div class="col-md-6">
                              <div class="form-check" v-for="caracteristica in minhasCaracteristicas"
                                :key="caracteristica.id_caracteristica">
                                <input v-if="!mostrarSkeleton" class="form-check-input"
                                  v-model="caracteristicaImovel[caracteristica.id_caracteristica]" type="checkbox"
                                  :id="'flexCheck' + caracteristica.id_caracteristica" />
                                <label v-if="!mostrarSkeleton" class="form-check-label"
                                  :for="'flexCheck' + caracteristica.id_caracteristica">
                                  {{ caracteristica.nome_caracteristica }}
                                </label>

                                <a style="margin-left: 2%;" href="#"
                                  @click="handleDeleteCaracacteristicas(caracteristica.id_caracteristica)"><small><i
                                      class="text-danger fa fa-trash"></i></small></a>
                              </div>

                            </div>

                            <div class="col-md-6">
                              <div class="form-check" v-for="item in listcaracteristicas" :key="item.id_caracteristica">
                                <input v-if="!mostrarSkeleton" class="form-check-input"
                                  v-model="caracteristicaAllImovel[item.id_caracteristica]" type="checkbox"
                                  :id="'flexCheck' + item.id_caracteristica" />
                                <label v-if="!mostrarSkeleton" class="form-check-label"
                                  :for="'flexCheck' + item.id_caracteristica">
                                  {{ item.nome_caracteristica }}
                                </label>
                              </div>
                            </div>

                          </div>

                          <hr />
                          <div class="row mt-3">
                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-block">
                                <button @click="handleAnteriorPreco()" class="btn btn-secondary" type="button">
                                  <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                  Anterior
                                </button>
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-success" @click="handleProximoLocalizacao()" type="button">
                                  Próximo
                                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card" v-if="localizacaoTab">
                      <div class="card-body">
                        <div class="col mt-0">
                          <h1 class="title-login mt-2">Localização</h1>
                          <p>
                            Adicione a localização deste imóvel e defina o que será
                            mostrado ou não em seu site.
                          </p>
                        </div>
                        <div>
                          <div class="row mt-4">
                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  CEP
                                </label>
                                <div class="input-group">
                                  <input type="text" @input="aplicaMascaraCEP" class="form-control"
                                    placeholder="00000-00" v-model="buscarCEP" required v-if="!mostrarSkeleton"
                                    aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                </div>
                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">País
                                </label>

                                <input type="text" placeholder="Brasil" required v-if="!mostrarSkeleton" disabled
                                  class="form-control" v-model="selectPais" />

                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Estado
                                </label>

                                <input type="text" placeholder="SP" required v-if="!mostrarSkeleton" disabled
                                  class="form-control" v-model="selectEstado" />

                              </div>
                            </div>

                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Cidade
                                </label>

                                <input type="text" placeholder="Ex.: Baurú" required v-if="!mostrarSkeleton"
                                  class="form-control" disabled v-model="selectCidade" />

                              </div>
                            </div>

                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Bairro
                                </label>

                                <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="selectBairro" disabled placeholder="Ex.: Jardim Olímpia">

                              </div>
                            </div>

                            <div class="col-6">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Logradouro
                                </label>
                                <input type="text" required v-if="!mostrarSkeleton" class="form-control" disabled
                                  v-model="logradouro" placeholder="Ex.: Rua das flores" />
                              </div>
                            </div>
                            <div class="col-2">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Número
                                </label>
                                <input type="number" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="nLogradouro" placeholder="00" />
                              </div>
                            </div>
                            <div class="col-6">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Complemento
                                </label>
                                <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="complemento" placeholder="Digite aqui o complemento, se houver." />
                              </div>
                            </div>

                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Nº ou identificação da Unidade
                                </label>
                                <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="idUnidade" placeholder="Insira aqui" />
                              </div>
                            </div>
                            <div class="col-2">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Andar
                                </label>
                                <input type="number" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="selectAndar" placeholder="Insira aqui" />
                              </div>
                            </div>
                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Unidades por andar
                                </label>
                                <input type="number" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="undPorAndar" placeholder="Informe a quantidade..." />
                              </div>
                            </div>
                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Total de andares
                                </label>
                                <input type="number" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="totalAndares" placeholder="Insira o total" />
                              </div>
                            </div>
                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Total de torres
                                </label>
                                <input type="number" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="totalTorres" placeholder="Se houver, insira aqui" />
                              </div>
                            </div>

                            <hr />

                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Mostrar andar do apartamento
                                </label>

                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                  <input type="radio" class="btn-check" name="mostrarAndar" id="mostrarAndar1"
                                    autocomplete="off" value="Sim" v-model="mostrarAndar" />
                                  <label class="btn btn-outline-success" for="mostrarAndar1">Sim</label>

                                  <input type="radio" class="btn-check" value="Não" v-model="mostrarAndar"
                                    name="mostrarAndar" id="mostrarAndar2" autocomplete="off" />
                                  <label class="btn btn-outline-danger" for="mostrarAndar2">Não</label>
                                </div>
                              </div>
                            </div>
                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Mostrar o número da unidade
                                </label>

                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                  <input type="radio" class="btn-check" name="mostrarNUnidade" id="mostrarNUnidade1"
                                    autocomplete="off" value="Sim" v-model="mostrarNUnidade" />
                                  <label class="btn btn-outline-success" for="mostrarNUnidade1">Sim</label>

                                  <input type="radio" class="btn-check" value="Não" v-model="mostrarNUnidade"
                                    name="mostrarNUnidade" id="mostrarNUnidade2" autocomplete="off" />
                                  <label class="btn btn-outline-danger" for="mostrarNUnidade2">Não</label>
                                </div>
                              </div>
                            </div>
                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Mostrar Logradouro no site?
                                </label>

                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                  <input type="radio" class="btn-check" name="mostrarLogradouro" id="mostrarLogradouro1"
                                    autocomplete="off" value="Sim" v-model="mostrarLogradouro" />
                                  <label class="btn btn-outline-success" for="mostrarLogradouro1">Sim</label>

                                  <input type="radio" class="btn-check" value="Não" v-model="mostrarLogradouro"
                                    name="mostrarLogradouro" id="mostrarLogradouro2" autocomplete="off" />
                                  <label class="btn btn-outline-danger" for="mostrarLogradouro2">Não</label>
                                </div>
                              </div>
                            </div>
                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Mostrar Bairro no site?
                                </label>

                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                  <input type="radio" class="btn-check" name="mostrarBairro" id="mostrarBairro1"
                                    autocomplete="off" value="Sim" v-model="mostrarBairro" />
                                  <label class="btn btn-outline-success" for="mostrarBairro1">Sim</label>

                                  <input type="radio" class="btn-check" value="Não" v-model="mostrarBairro"
                                    name="mostrarBairro" id="mostrarBairro2" autocomplete="off" />
                                  <label class="btn btn-outline-danger" for="mostrarBairro2">Não</label>
                                </div>
                              </div>
                            </div>
                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Mostrar complemento no site?
                                </label>

                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                  <input type="radio" class="btn-check" name="mostrarComplemento"
                                    id="mostrarComplemento1" autocomplete="off" value="Sim"
                                    v-model="mostrarComplemento" />
                                  <label class="btn btn-outline-success" for="mostrarComplemento1">Sim</label>

                                  <input type="radio" class="btn-check" value="Não" v-model="mostrarComplemento"
                                    name="mostrarComplemento" id="mostrarComplemento2" autocomplete="off" />
                                  <label class="btn btn-outline-danger" for="mostrarComplemento2">Não</label>
                                </div>
                              </div>
                            </div>
                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Mostrar número no site?
                                </label>

                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                  <input type="radio" class="btn-check" name="mostrarNumero" id="mostrarNumero1"
                                    autocomplete="off" value="Sim" v-model="mostrarNumero" />
                                  <label class="btn btn-outline-success" for="mostrarNumero1">Sim</label>

                                  <input type="radio" class="btn-check" value="Não" v-model="mostrarNumero"
                                    name="mostrarNumero" id="mostrarNumero2" autocomplete="off" />
                                  <label class="btn btn-outline-danger" for="mostrarNumero2">Não</label>
                                </div>
                              </div>
                            </div>
                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Mostrar nome no site?
                                </label>

                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                  <input type="radio" class="btn-check" name="mostrarNCondo" id="mostrarNCondo1"
                                    autocomplete="off" value="Sim" v-model="mostrarNCondo" />
                                  <label class="btn btn-outline-success" for="mostrarNCondo1">Sim</label>

                                  <input type="radio" class="btn-check" value="Não" v-model="mostrarNCondo"
                                    name="mostrarNCondo" id="mostrarNCondo2" autocomplete="off" />
                                  <label class="btn btn-outline-danger" for="mostrarNCondo2">Não</label>
                                </div>
                              </div>
                            </div>



                            <div class="col-4">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Localizar imóvel no mapa?
                                </label>

                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                  <input type="radio" class="btn-check" name="mapaCondo" id="mapaCondo1"
                                    autocomplete="off" value="Sim" v-model="mapaCondo" />
                                  <label class="btn btn-outline-success" for="mapaCondo1">Sim</label>

                                  <input type="radio" class="btn-check" value="Não" v-model="mapaCondo" name="mapaCondo"
                                    id="mapaCondo2" autocomplete="off" />
                                  <label class="btn btn-outline-danger" for="mapaCondo2">Não</label>
                                </div>
                              </div>
                            </div>

                            <hr />

                            <div class="col-12" style="position: relative;" v-if="mostrarMapa">

                              <!-- <iframe :src="mapUrl" width="100%" height="350" style="border: 0" allowfullscreen=""
                                loading="lazy" class="my-3" referrerpolicy="no-referrer-when-downgrade">
                              </iframe> -->
                              <div id="map" ref="mapElement"
                                style="height: 350px; width:100%; border: 0; position: sticky; bottom: 0;"></div>

                              <div class="row">

                                <div class="col-4">
                                  <div class="mb-3">
                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                      Mostrar mapa no site?
                                    </label>

                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                      <input type="radio" class="btn-check" name="selectMapSite" id="selectMapSite1"
                                        autocomplete="off" value="Sim" v-model="selectMapSite" />
                                      <label class="btn btn-outline-success" for="selectMapSite1">Sim</label>

                                      <input type="radio" class="btn-check" value="Não" v-model="selectMapSite"
                                        name="selectMapSite" id="selectMapSite2" autocomplete="off" />
                                      <label class="btn btn-outline-danger" for="selectMapSite2">Não</label>
                                    </div>
                                  </div>
                                </div>

                                <div class="col-4">
                                  <div class="mb-3">
                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                      Ativar StreetView?
                                    </label>

                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                      <input type="radio" class="btn-check" name="mapaStreetV" id="mapaStreetV1"
                                        autocomplete="off" value="Sim" v-model="mapaStreetV" />
                                      <label class="btn btn-outline-success" for="mapaStreetV1">Sim</label>

                                      <input type="radio" class="btn-check" value="Não" v-model="mapaStreetV"
                                        name="mapaStreetV" id="mapaStreetV2" autocomplete="off" />
                                      <label class="btn btn-outline-danger" for="mapaStreetV2">Não</label>
                                    </div>
                                  </div>
                                </div>

                                <div class="col-12" v-if="mostrarStreetV">


                                  <div class="col-12 mb-3">
                                    <small>* As imagens são extraídas do google e podem estar
                                      desatualizadas</small>
                                  </div>

                                  <div class="col-4">
                                    <div class="mb-3">
                                      <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                      <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                      <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                        Mostrar StreetView no site?
                                      </label>

                                      <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                      <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" class="btn-check" name="selectStreetVSite"
                                          id="selectStreetVSite1" autocomplete="off" value="Sim"
                                          v-model="selectStreetVSite" />
                                        <label class="btn btn-outline-success" for="selectStreetVSite1">Sim</label>

                                        <input type="radio" class="btn-check" value="Não" v-model="selectStreetVSite"
                                          name="selectStreetVSite" id="selectStreetVSite2" autocomplete="off" />
                                        <label class="btn btn-outline-danger" for="selectStreetVSite2">Não</label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>


                          </div>



                          <hr />
                          <div class="row mt-3">
                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-block">
                                <button @click="handleAnteriorCaracteristica()" class="btn btn-secondary" type="button">
                                  <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                  Anterior
                                </button>
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-success" @click="handleProximoProximidades()" type="button">
                                  Próximo
                                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card" v-if="addProximidades">
                      <div class="card-body">
                        <div class="col mt-0">
                          <h1 class="title-login mt-2">Suas Proximidades</h1>
                          <p>Deixe as suas preferencias de proximidades.</p>
                        </div>
                        <div>
                          <div class="row mt-4">
                            <div class="col-12">
                              <div v-if="msgSuccessProximidade" class="alert alert-success alert-dismissible fade show"
                                role="alert">
                                <strong><i class="fa fa-check"></i> Sucesso!</strong> Nova
                                proximidade cadastrada.
                              </div>
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>

                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">Proximidades
                                  <small class="text-danger">*</small>
                                </label>
                                <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="inputProximidades" placeholder="Digite aqui..." />

                              </div>
                              <p v-if="msgNullProximidades" class="text-danger"><small><i class="fa fa-ban"></i> Não
                                  deixe este campo vazio!</small></p>
                            </div>


                          </div>
                          <hr />
                          <div class="row mt-3">

                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-block">
                                <button @click="handleFecharProximidades()" class="btn btn-secondary" type="submit">
                                  <i class="fa fa-close" aria-hidden="true"></i>
                                  Fechar
                                </button>
                              </div>
                            </div>



                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-success" @click="handleSaveProximidades()" type="button">
                                  Salvar

                                </button>
                              </div>
                            </div>


                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card" v-if="proximidadesTab">
                      <div class="card-body">
                        <div class="col mt-0">
                          <h1 class="title-login mt-2">Proximidades <span style="float: inline-end;"><button
                                @click="handleAbrirProximidades()" type="button" class="btn btn-success btn-sm"><i
                                  class="fa fa-plus"></i> Adicionar
                                Proximidades</button></span></h1>
                          <p>Defina os estabelecimentos próximos a este imóvel.</p>
                        </div>
                        <div>

                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-check" v-for="proximidade in minhasProximidades"
                                :key="proximidade.id_proximidade">
                                <input v-if="!mostrarSkeleton" class="form-check-input"
                                  v-model="proximidadesImovel[proximidade.id_proximidade]" type="checkbox"
                                  :id="'flexCheck' + proximidade.id_proximidade" />
                                <label v-if="!mostrarSkeleton" class="form-check-label"
                                  :for="'flexCheck' + proximidade.id_proximidade">
                                  {{ proximidade.nome_proximidade }}

                                </label>
                                <a style="margin-left: 2%;" href="#"
                                  @click="handleDeleteProximidades(proximidade.id_proximidade)"><small><i
                                      class="text-danger fa fa-trash"></i></small></a>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-check" v-for="item in listProximidades" :key="item.id_proximidade">
                                <input v-if="!mostrarSkeleton" class="form-check-input"
                                  v-model="proximidadesAllImovel[item.id_proximidade]" type="checkbox"
                                  :id="'flexCheck' + item.id_proximidade" />
                                <label v-if="!mostrarSkeleton" class="form-check-label"
                                  :for="'flexCheck' + item.id_proximidade">
                                  {{ item.nome_proximidade }}

                                </label>
                              </div>
                            </div>

                          </div>


                          <hr />
                          <div class="row mt-3">
                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-block">
                                <button @click="handleAnteriorLocalizacao()" class="btn btn-secondary" type="button">
                                  <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                  Anterior
                                </button>
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-success" @click="handleProximoDescricao()" type="button">
                                  Próximo
                                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card" v-if="descricaoTab">
                      <div class="card-body">
                        <div class="col mt-0">
                          <h1 class="title-login mt-2">Descrição</h1>
                          <p>
                            Descreva o imóvel com as melhores informações possíveis para
                            atrair o seu cliente.
                          </p>
                        </div>
                        <div>
                          <div class="row mt-4">
                            <div class="col-12">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Titulo da página de detalhamento do imóvel
                                </label>
                                <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="titleImovel" placeholder="Digite aqui..." />
                              </div>
                            </div>

                            <div class="col-12">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Texto de apresentação do imóvel
                                </label>

                                <textarea class="form-control" v-if="!mostrarSkeleton" v-model="descricaoImovel"
                                  style="height: 100px" placeholder="Digite aqui..."></textarea>
                              </div>
                            </div>
                          </div>

                          <hr />
                          <div class="row mt-3">
                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-block">
                                <button @click="handleAnteriorProximidade()" class="btn btn-secondary" type="button">
                                  <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                  Anterior
                                </button>
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-success" @click="handleProximoComplemento()" type="button">
                                  Próximo
                                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card" v-if="complementoTab">
                      <div class="card-body">
                        <div class="col mt-0">
                          <h1 class="title-login mt-2">Complementos</h1>
                          <p>Configure dados complementares do seu imóvel.</p>
                        </div>
                        <div>
                          <div class="row mt-4">
                            <div class="col-12">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Vídeo do Imóvel: Insira a URL do seu vídeo no Youtube
                                  <button type="button" class="btn btn-danger ms-2" style="
                                      --bs-btn-padding-y: 0.25rem;
                                      --bs-btn-padding-x: 0.5rem;
                                      --bs-btn-font-size: 0.75rem;
                                    ">
                                    <i class="fa fa-trash me-2"></i> Remover Vídeo
                                  </button>
                                </label>
                                <input type="text" required v-if="!mostrarSkeleton" class="form-control" v-model="urlYT"
                                  placeholder="Digite aqui..." />
                              </div>
                            </div>

                            <div class="col-12">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Apresentação 360°: Insira a URL 360° do seu imóvel
                                  <button type="button" class="btn btn-danger ms-2" style="
                                      --bs-btn-padding-y: 0.25rem;
                                      --bs-btn-padding-x: 0.5rem;
                                      --bs-btn-font-size: 0.75rem;
                                    ">
                                    <i class="fa fa-trash me-2"></i> Remover 360°
                                  </button>
                                </label>
                                <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="url360" placeholder="Digite aqui..." />
                              </div>
                            </div>

                            <div class="col-12">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Insira o link do Google Drive, Dropbox, Onedrive ou outro

                                </label>
                                <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="link_drive" placeholder="Digite aqui..." />
                              </div>
                            </div>

                          </div>

                          <hr />
                          <div class="row mt-3">
                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-block">
                                <button @click="handleAnteriorDescricao()" class="btn btn-secondary" type="button">
                                  <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                  Anterior
                                </button>
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-success" @click="handleProximoImagem()" type="button">
                                  Próximo
                                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card" v-if="imagemTab">
                      <div class="card-body">
                        <div class="col mt-0">
                          <h1 class="title-login mt-2">Imagens</h1>
                          <p>
                            Envie todas as imagens que mostrem as qualidades do imóvel.
                          </p>
                        </div>
                        <div>
                          <div class="row mt-4">
                            <li class="text-danger"><small> Envie até 10 imagens . </small></li>
                            <li class="text-danger"><small> Formatos aceitos .PNG .JPG ou .JPEG</small></li>
                            <li class="text-danger"><small> Tamanho máx. permitido é de até 3 mb por imagem.</small>
                            </li>
                            <li class="text-danger"><small> A resolução ideal de w: 1342 h:768.</small>
                            </li>

                            <div class="row g-3">
                              <div class="col-12">
                                <div class="row row-cols-1 row-cols-md-5 g-4">
                                  <div class="col" v-for="(image, index) in images" :key="index">
                                    <div class="card bg-transparent border-0">
                                      <div class="preview-photo-prato area-photo-prato">
                                        <img :src="image.src" class="img-photo-prato" />

                                        <!-- Barra de Progresso -->
                                        <div class="progress">
                                          <div class="progress-bar" :style="{ width: image.progress + '%' }"></div>
                                        </div>

                                        <button @click="removerImagem(index)" class="btn btn-danger btn-remover">
                                          <i class="fa fa-minus"></i>
                                        </button>
                                      </div>
                                    </div>
                                  </div>

                                  <!-- Botão para adicionar mais imagens -->
                                  <div class="col" v-if="images.length < maxImages">
                                    <div class="card bg-transparent border-0">
                                      <div class="preview-photo-prato area-photo-prato">
                                        <label for="inputGroupFile03"
                                          class="btn btn-primary btn-photo my-4 rounded-2 py-2">
                                          <i class="fa fa-plus"></i>
                                        </label>
                                        <input hidden type="file" class="form-control" id="inputGroupFile03"
                                          @change="previewImage" aria-describedby="inputGroupFileAddon03"
                                          aria-label="Upload" multiple />

                                        <div v-if="success"><i class="fa fa-check"></i></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>


                            </div>


                          </div>

                          <hr />
                          <div class="row mt-3">
                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-block">
                                <button @click="handleAnteriorComplemento()" class="btn btn-secondary" type="button">
                                  <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                  Anterior
                                </button>
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-success" @click="handleProximoPublicacao()" type="button">
                                  Próximo
                                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card" v-if="publicacaoTab">
                      <div class="card-body">



                        <div class="col mt-0">
                          <h1 class="title-login mt-2">Publicação</h1>
                          <p>
                            Selecione abaixo para quais portais você deseja enviar este
                            imóvel.
                          </p>
                        </div>
                        <div>
                          <div class="row mt-4">
                            <div class="col-3">
                              <div class="mb-3">
                                <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                  Mostrar imóvel no site?
                                  <p>
                                    <small>Determine se o imóvel será publicado em seu
                                      site.</small>
                                  </p>
                                </label>

                                <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                  <input type="radio" class="btn-check" name="selectImovelSite" id="selectImovelSite1"
                                    autocomplete="off" value="Sim" v-model="selectImovelSite" />
                                  <label class="btn btn-outline-success" for="selectImovelSite1">Sim</label>

                                  <input type="radio" class="btn-check" value="Não" v-model="selectImovelSite"
                                    name="selectImovelSite" id="selectImovelSite2" autocomplete="off" />
                                  <label class="btn btn-outline-danger" for="selectImovelSite2">Não</label>
                                </div>
                              </div>
                            </div>

                            <div class="col-6">
                              <label class="form-label mb-3" for="btnradio2">
                                Tarja do imóvel para o site <br />
                                <small>Escolha a cor e a frase que aparecerão na miniatura do
                                  imóvel.
                                </small>
                              </label>
                              <div class="row">
                                <div class="col-8">
                                  <div class="mb-3">
                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                      Texto da tarja
                                    </label>
                                    <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                      v-model="textoTarja" placeholder="Em construção" />
                                  </div>
                                </div>
                                <div class="col-4">
                                  <div class="mb-3">
                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label">
                                      Cor da tarja
                                    </label>
                                    <input type="color" v-if="!mostrarSkeleton" v-model="corTarja" class="form-control"
                                      id="exampleColorInput" value="#563d7c" title="Escolha a cor" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <hr />
                          <div class="row mt-3">
                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-block">
                                <button @click="handleAnteriorImagem()" class="btn btn-secondary" type="button">
                                  <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                  Anterior
                                </button>
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button class="btn btn-success" type="button" data-bs-toggle="modal"
                                  data-bs-target="#exampleModal">
                                  {{ textoBotaoFinish }} &nbsp;<i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>


                                <div class="modal fade" id="exampleModal" tabindex="-1"
                                  aria-labelledby="exampleModalLabel" aria-hidden="true">
                                  <div class="modal-dialog modal-xl">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel"><i class="fa fa-file"></i>
                                          Resumo</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                          aria-label="Close"></button>
                                      </div>
                                      <div class="modal-body">

                                        <div v-if="msgError" class="alert alert-danger mt-4 mb-4"
                                          style="margin-top: -20px; margin-bottom: 10px;" role="alert">
                                          <strong><i class="fa fa-ban"></i> Desculpa, houve um erro para processar o
                                            seu
                                            pedido. Tente novamente
                                            mais tarde</strong>
                                        </div>

                                        <div v-if="msgSucesso" class="alert alert-success mt-4 mb-4"
                                          style="margin-top: -20px; margin-bottom: 10px;" role="alert">
                                          <strong><i class="fa fa-check"></i> Sucesso! Imóvel cadastrado com
                                            sucesso!</strong>
                                        </div>


                                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                                          <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab"
                                              data-bs-target="#info-tab-pane" type="button" role="tab"
                                              aria-controls="info-tab-pane" aria-selected="true"><small>Info</small>
                                            </button>
                                          </li>
                                          <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="comodos-tab" data-bs-toggle="tab"
                                              data-bs-target="#comodos-tab-pane" type="button" role="tab"
                                              aria-controls="comodos-tab-pane"
                                              aria-selected="false"><small>Cômodos</small></button>
                                          </li>
                                          <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="comodos-tab" data-bs-toggle="tab"
                                              data-bs-target="#medidas-tab-pane" type="button" role="tab"
                                              aria-controls="medidas-tab-pane" aria-selected="false"><small>Medidas &
                                                Preço</small></button>
                                          </li>
                                          <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="caracteristica-tab" data-bs-toggle="tab"
                                              data-bs-target="#caracteristica-tab-pane" type="button" role="tab"
                                              aria-controls="caracteristica-tab-pane"
                                              aria-selected="false"><small>Características</small></button>
                                          </li>
                                          <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="localizacao-tab" data-bs-toggle="tab"
                                              data-bs-target="#localizacao-tab-pane" type="button" role="tab"
                                              aria-controls="localizacao-tab-pane"
                                              aria-selected="false"><small>Localização</small></button>
                                          </li>
                                          <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="proximidades-tab" data-bs-toggle="tab"
                                              data-bs-target="#proximidades-tab-pane" type="button" role="tab"
                                              aria-controls="proximidades-tab-pane"
                                              aria-selected="false"><small>Proximidades</small></button>
                                          </li>
                                          <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="descricao-tab" data-bs-toggle="tab"
                                              data-bs-target="#descricao-tab-pane" type="button" role="tab"
                                              aria-controls="descricao-tab-pane"
                                              aria-selected="false"><small>Descrição</small></button>
                                          </li>
                                          <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="complementos-tab" data-bs-toggle="tab"
                                              data-bs-target="#complementos-tab-pane" type="button" role="tab"
                                              aria-controls="complementos-tab-pane"
                                              aria-selected="false"><small>Complementos</small></button>
                                          </li>
                                          <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="images-tab" data-bs-toggle="tab"
                                              data-bs-target="#images-tab-pane" type="button" role="tab"
                                              aria-controls="images-tab-pane"
                                              aria-selected="false"><small>Imagens</small> </button>
                                          </li>
                                          <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="publicar-tab" data-bs-toggle="tab"
                                              data-bs-target="#publicar-tab-pane" type="button" role="tab"
                                              aria-controls="publicar-tab-pane"
                                              aria-selected="false"><small>Publicação</small> </button>
                                          </li>

                                        </ul>



                                        <div class="tab-content" id="myTabContent">
                                          <div class="tab-pane fade show active" id="info-tab-pane" role="tabpanel"
                                            aria-labelledby="info-tab" tabindex="0">

                                            <div>
                                              <div class="row mt-4">
                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Código de
                                                      referência
                                                      <small class="text-danger">*</small>
                                                    </label>
                                                    <input type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="codigoref"
                                                      placeholder="Digite aqui..." />

                                                    <small v-if="msgNull" class="text-danger">
                                                      <li class="mt-2">Não deixe este campo vazio</li>
                                                    </small>
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Condomínio/empreendimento?
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="selectCondominio"
                                                        id="selectCondominio1" autocomplete="off" value="Sim"
                                                        v-model="selectCondominio" />
                                                      <label class="btn btn-outline-success"
                                                        for="selectCondominio1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="selectCondominio" name="selectCondominio"
                                                        id="selectCondominio2" autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="selectCondominio2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div class="col-6">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Condomínio/empreendimento?
                                                      <small class="text-danger">* </small>
                                                      <a href="/novo-condominio" type="button" class="ms-2 text-success"
                                                        style="
                                      --bs-btn-padding-y: 0.25rem;
                                      --bs-btn-padding-x: 0.5rem;
                                      --bs-btn-font-size: 0.75rem;
                                    ">
                                                        <i class="fa fa-plus"></i> Adicionar condominio
                                                      </a>
                                                    </label>

                                                    <select required v-if="!mostrarSkeleton"
                                                      class="form-control form-select"
                                                      v-model="condominioEmpreendimento">
                                                      <option selected disabled>Selecione</option>

                                                      <option v-for="condominio in condominios"
                                                        :value="condominio.id_condominio">{{
                                                          condominio.nome_condominio }}</option>
                                                    </select>
                                                  </div>
                                                </div>

                                                <div class="col-2">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Tipo/Subtipo
                                                      <small class="text-danger">* </small>
                                                    </label>

                                                    <select type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control form-select" v-model="tipoImovel">
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
                                                      <option value="Sala Comercial">Sala Comercial</option>
                                                    </select>
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Perfil do
                                                      imóvel
                                                      <small class="text-danger">* </small>
                                                    </label>

                                                    <select type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control form-select" v-model="perfilImovel">
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
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Situação
                                                      <small class="text-danger">* </small>
                                                    </label>

                                                    <select type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control form-select" v-model="situacaoImovel">
                                                      <option selected disabled>Selecione</option>
                                                      <option value="Pronto pra morar">Pronto pra morar</option>
                                                      <option value="Em construção">Em construção</option>
                                                      <option value="Lançamento">Lançamento</option>
                                                      <option value="Novo">Novo</option>
                                                      <option value="Usado">Usado</option>

                                                    </select>
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Ano da
                                                      construção
                                                      <small class="text-danger">* </small>
                                                    </label>

                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" placeholder="Ex.: 2015"
                                                      v-model="anoImovel" />

                                                    <small v-if="msgNull" class="text-danger">
                                                      <li class="mt-2">Não deixe este campo vazio</li>
                                                    </small>
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Incorporação</label>
                                                    <input type="number" v-if="!mostrarSkeleton" class="form-control"
                                                      placeholder="Digite..." v-model="incorporacao" />
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Posição Solar
                                                      <small class="text-danger">* </small>
                                                    </label>
                                                    <select type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control form-select" v-model="posicaoSolar">
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
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Terreno
                                                      <small class="text-danger">* </small>
                                                    </label>
                                                    <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" id="btnTerreno1"
                                                        autocomplete="off" value="Plano" name="selectTerreno"
                                                        v-model="selectTerreno" />
                                                      <label class="btn btn-outline-success"
                                                        for="btnTerreno1">Plano</label>

                                                      <input type="radio" class="btn-check" id="btnTerreno2"
                                                        autocomplete="off" value="Aclive" name="selectTerreno"
                                                        v-model="selectTerreno" />
                                                      <label class="btn btn-outline-success"
                                                        for="btnTerreno2">Aclive</label>

                                                      <input type="radio" class="btn-check" id="btnTerreno3"
                                                        autocomplete="off" value="Declive" name="selectTerreno"
                                                        v-model="selectTerreno" />
                                                      <label class="btn btn-outline-success"
                                                        for="btnTerreno3">Declive</label>
                                                    </div>
                                                    <small v-if="msgNull" class="text-danger">
                                                      <li class="mt-2">Não deixe este campo vazio</li>
                                                    </small>
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Próximo ao
                                                      mar?<small class="text-danger">* </small>
                                                    </label>
                                                    <select type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control form-select" v-model="proximoMar">
                                                      <option selected disabled>Selecione</option>
                                                      <option value="Vista para o mar">Vista para o mar</option>
                                                      <option value="Frente para o mar">Frente para o mar</option>
                                                      <option value="Quadra do mar">Quadra do mar</option>
                                                      <option value="Proximo ao mar">Proximo ao mar</option>
                                                      <option value="Não">Não</option>

                                                    </select>
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Averbado
                                                    </label>

                                                    <br />

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="selectAverbado"
                                                        id="selectAverbado1" autocomplete="off" value="Sim"
                                                        v-model="selectAverbado" />
                                                      <label class="btn btn-outline-success"
                                                        for="selectAverbado1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="selectAverbado" name="selectAverbado"
                                                        id="selectAverbado2" autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="selectAverbado2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Escriturado
                                                    </label>

                                                    <br />

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="selectEscritura"
                                                        id="selectEscritura1" autocomplete="off" value="Sim"
                                                        v-model="selectEscritura" />
                                                      <label class="btn btn-outline-success"
                                                        for="selectEscritura1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="selectEscritura" name="selectEscritura"
                                                        id="selectEscritura2" autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="selectEscritura2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Esquina
                                                    </label>

                                                    <br />

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="selectEsquina"
                                                        id="selectEsquina1" autocomplete="off" value="Sim"
                                                        v-model="selectEsquina" />
                                                      <label class="btn btn-outline-success"
                                                        for="selectEsquina1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="selectEsquina" name="selectEsquina" id="selectEsquina2"
                                                        autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="selectEsquina2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Tem mobília
                                                    </label>

                                                    <br />

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="selectMobilia"
                                                        id="selectMobilia1" autocomplete="off" value="Sim"
                                                        v-model="selectMobilia" />
                                                      <label class="btn btn-outline-success"
                                                        for="selectMobilia1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="selectMobilia" name="selectMobilia" id="selectMobilia2"
                                                        autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="selectMobilia2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>


                                            </div>

                                          </div>

                                          <div class="tab-pane fade" id="comodos-tab-pane" role="tabpanel"
                                            aria-labelledby="comodos-tab" tabindex="0">
                                            <div>
                                              <!-- Insira o HTML form aqui de acordo com o TecImob -->
                                              <div class="row mt-4">
                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Dormitório
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="dormitorio"
                                                      placeholder="Digite a quantidade" />
                                                  </div>
                                                  <p v-if="msgNullComodos" class="text-danger"><small><i
                                                        class="fa fa-ban"></i> Não
                                                      deixe este campo vazio!</small></p>
                                                </div>
                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Suíte
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="suite"
                                                      placeholder="Digite a quantidade" />
                                                  </div>
                                                  <p v-if="msgNullComodos" class="text-danger"><small><i
                                                        class="fa fa-ban"></i> Não
                                                      deixe este campo vazio!</small></p>
                                                </div>
                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Banheiro
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="banheiro"
                                                      placeholder="Digite a quantidade" />
                                                  </div>
                                                  <p v-if="msgNullComodos" class="text-danger"><small><i
                                                        class="fa fa-ban"></i> Não
                                                      deixe este campo vazio!</small></p>
                                                </div>
                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Garagem
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="garagem"
                                                      placeholder="Digite a quantidade" />
                                                  </div>
                                                  <p v-if="msgNullComodos" class="text-danger"><small><i
                                                        class="fa fa-ban"></i> Não
                                                      deixe este campo vazio!</small></p>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Garagem
                                                      coberta?
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input v-if="!mostrarSkeleton" type="radio" class="btn-check"
                                                        name="garagemCoberta" id="selectGaragemCobertura1"
                                                        autocomplete="off" value="Sim"
                                                        v-model="selectGaragemCobertura" />
                                                      <label v-if="!mostrarSkeleton" class="btn btn-outline-success"
                                                        for="selectGaragemCobertura1">Sim</label>

                                                      <input v-if="!mostrarSkeleton" type="radio" class="btn-check"
                                                        value="Não" v-model="selectGaragemCobertura"
                                                        name="garagemCoberta" id="selectGaragemCobertura2"
                                                        autocomplete="off" />
                                                      <label v-if="!mostrarSkeleton" class="btn btn-outline-danger"
                                                        for="selectGaragemCobertura2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Possui box na
                                                      garagem?
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input v-if="!mostrarSkeleton" type="radio" class="btn-check"
                                                        name="boxGaragem" id="boxGaragemY" autocomplete="off"
                                                        value="Sim" v-model="selectBoxGaragem" />
                                                      <label v-if="!mostrarSkeleton" class="btn btn-outline-success"
                                                        for="boxGaragemY">Sim</label>

                                                      <input v-if="!mostrarSkeleton" type="radio" class="btn-check"
                                                        value="Não" v-model="selectBoxGaragem" name="boxGaragem"
                                                        id="boxGaragemN" autocomplete="off" />
                                                      <label v-if="!mostrarSkeleton" class="btn btn-outline-danger"
                                                        for="boxGaragemN">Não</label>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Sala de TV
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="salaTv"
                                                      placeholder="Digite a quantidade" />
                                                  </div>
                                                  <p v-if="msgNullComodos" class="text-danger"><small><i
                                                        class="fa fa-ban"></i> Não
                                                      deixe este campo vazio!</small></p>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Sala de jantar
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="salaJantar"
                                                      placeholder="Digite a quantidade" />
                                                  </div>
                                                  <p v-if="msgNullComodos" class="text-danger"><small><i
                                                        class="fa fa-ban"></i> Não
                                                      deixe este campo vazio!</small></p>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Sala de estar
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="salaEstar"
                                                      placeholder="Digite a quantidade" />
                                                  </div>
                                                  <p v-if="msgNullComodos" class="text-danger"><small><i
                                                        class="fa fa-ban"></i> Não
                                                      deixe este campo vazio!</small></p>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Lavabo
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="lavabo"
                                                      placeholder="Digite a quantidade" />
                                                  </div>

                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Área de serviço
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="areaServico"
                                                      placeholder="Digite a quantidade" />
                                                  </div>
                                                  <p v-if="msgNullComodos" class="text-danger"><small><i
                                                        class="fa fa-ban"></i> Não
                                                      deixe este campo vazio!</small></p>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Cozinha
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="cozinha"
                                                      placeholder="Digite a quantidade" />
                                                  </div>
                                                  <p v-if="msgNullComodos" class="text-danger"><small><i
                                                        class="fa fa-ban"></i> Não
                                                      deixe este campo vazio!</small></p>
                                                </div>

                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Closet
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="closet"
                                                      placeholder="Digite a quantidade" />
                                                  </div>
                                                  <p v-if="msgNullComodos" class="text-danger"><small><i
                                                        class="fa fa-ban"></i> Não
                                                      deixe este campo vazio!</small></p>
                                                </div>

                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Escritório
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="escritorio"
                                                      placeholder="Digite a quantidade" />
                                                  </div>
                                                  <p v-if="msgNullComodos" class="text-danger"><small><i
                                                        class="fa fa-ban"></i> Não
                                                      deixe este campo vazio!</small></p>
                                                </div>

                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Dependência para empregada
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="depEmpregada"
                                                      placeholder="Digite a quantidade" />
                                                  </div>
                                                  <p v-if="msgNullComodos" class="text-danger"><small><i
                                                        class="fa fa-ban"></i> Não
                                                      deixe este campo vazio!</small></p>
                                                </div>

                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Copa
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="salaCopa"
                                                      placeholder="Digite a quantidade" />
                                                  </div>
                                                  <p v-if="msgNullComodos" class="text-danger"><small><i
                                                        class="fa fa-ban"></i> Não
                                                      deixe este campo vazio!</small></p>
                                                </div>
                                              </div>


                                            </div>

                                          </div>

                                          <div class="tab-pane fade" id="medidas-tab-pane" role="tabpanel"
                                            aria-labelledby="medidas-tab" tabindex="0">

                                            <div>
                                              <div class="row mt-4">

                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="areaConstruida"
                                                      class="form-label">
                                                      Área Construída
                                                    </label>
                                                    <div class="input-group">
                                                      <input type="text" required v-if="!mostrarSkeleton"
                                                        class="form-control" v-model="areaConstruida"
                                                        placeholder="Digite aqui..."
                                                        @input="aplicaMascaraMedida('areaConstruida')" />
                                                      <span v-if="!mostrarSkeleton" class="input-group-text">m²</span>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="areaPrivativa"
                                                      class="form-label">
                                                      Área Privativa
                                                    </label>
                                                    <div class="input-group">
                                                      <input type="text" required v-if="!mostrarSkeleton"
                                                        class="form-control" v-model="areaPrivativa"
                                                        placeholder="Digite aqui..."
                                                        @input="aplicaMascaraMedida('areaPrivativa')" />
                                                      <span v-if="!mostrarSkeleton" class="input-group-text">m²</span>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="areaTotal" class="form-label">
                                                      Área Total
                                                    </label>
                                                    <div class="input-group">
                                                      <input type="text" required v-if="!mostrarSkeleton"
                                                        class="form-control" v-model="areaTotal" disabled
                                                        placeholder="Aguardando..." />
                                                      <span v-if="!mostrarSkeleton" class="input-group-text">m²</span>
                                                    </div>
                                                  </div>
                                                </div>

                                              </div>


                                            </div>

                                            <div>
                                              <div class="row mt-4">
                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Tipo do negócio
                                                    </label>

                                                    <select type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control form-select" v-model="tipoNegocio">
                                                      <option selected disabled>Selecione</option>
                                                      <option value="Aluguel">Aluguel</option>
                                                      <option value="Venda">Venda</option>
                                                    </select>
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Preço Imóvel
                                                    </label>
                                                    <div class="input-group">
                                                      <span v-if="!mostrarSkeleton" class="input-group-text">R$</span>
                                                      <input type="text" @input="aplicaMascaraDinheiroPrecoImovel"
                                                        @blur="aplicaMascaraDinheiroPrecoImovel" required
                                                        v-if="!mostrarSkeleton" class="form-control"
                                                        v-model="precoImovel" placeholder="R$ 0,00" />

                                                    </div>
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Mostrar preço no site?
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="precoNoSite"
                                                        id="btnradio1" autocomplete="off" value="Sim"
                                                        v-model="precoNoSite" />
                                                      <label class="btn btn-outline-success" for="btnradio1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="precoNoSite" name="precoNoSite" id="btnradio2"
                                                        autocomplete="off" />
                                                      <label class="btn btn-outline-danger" for="btnradio2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div v-if="textoLugarPrecoView" class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Mostrar no lugar do preço:
                                                    </label>
                                                    <input type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="textoLugarPreco"
                                                      placeholder="Texto exemplo: Consulte" />
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Preço do IPTU
                                                    </label>
                                                    <input type="text" @input="aplicaMascaraDinheiroPrecoIptu"
                                                      @blur="aplicaMascaraDinheiroPrecoIptu" required
                                                      v-if="!mostrarSkeleton" class="form-control" v-model="precoIptu"
                                                      placeholder="R$ 0,00" />
                                                  </div>
                                                </div>

                                                <div class="col-3" v-if="tipoNegocio === 'Aluguel'">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Período
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="periodo" id="periodo1"
                                                        autocomplete="off" value="Anual" v-model="periodoIptu" />
                                                      <label class="btn btn-outline-success"
                                                        for="periodo1">Anual</label>

                                                      <input type="radio" class="btn-check" value="Mensal"
                                                        v-model="periodoIptu" name="periodo" id="periodo2"
                                                        autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="periodo2">Mensal</label>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Preço Condomínio
                                                    </label>
                                                    <input type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="precoCondominio"
                                                      @input="aplicaMascaraDinheiroPrecoCondominio"
                                                      @blur="aplicaMascaraDinheiroPrecoCondominio"
                                                      placeholder="R$ 0,00" />
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Está financiado?
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="estaFinanciado"
                                                        id="estaFinanciado1" autocomplete="off" value="Sim"
                                                        v-model="estaFinanciado" />
                                                      <label class="btn btn-outline-success"
                                                        for="estaFinanciado1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="estaFinanciado" name="estaFinanciado"
                                                        id="estaFinanciado2" autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="estaFinanciado2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Aceita financiamento?
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="aceitaFinanciamento"
                                                        id="aceitaFinanciamento1" autocomplete="off" value="Sim"
                                                        v-model="aceitaFinanciamento" />
                                                      <label class="btn btn-outline-success"
                                                        for="aceitaFinanciamento1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="aceitaFinanciamento" name="aceitaFinanciamento"
                                                        id="aceitaFinanciamento2" autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="aceitaFinanciamento2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Minha Casa Minha Vida?
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="mCasaMVida"
                                                        id="mCasaMVida1" autocomplete="off" value="Sim"
                                                        v-model="mCasaMVida" />
                                                      <label class="btn btn-outline-success"
                                                        for="mCasaMVida1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="mCasaMVida" name="mCasaMVida" id="mCasaMVida2"
                                                        autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="mCasaMVida2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div class="col-6">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Total mensal em taxas (se houver)
                                                    </label>
                                                    <input type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="taxasTotal" placeholder="R$ 0,00"
                                                      @input="aplicaMascaraDinheiroTotalTaxas"
                                                      @blur="aplicaMascaraDinheiroTotalTaxas" />
                                                  </div>
                                                </div>

                                                <div class="col-6">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Descrição das Taxas
                                                    </label>
                                                    <input type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="taxasDescricao"
                                                      placeholder="Digite aqui..." />
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Aceita permuta?
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div v-if="!mostrarSkeleton" class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="aceitaPermuta"
                                                        id="aceitaPermuta1" autocomplete="off" value="Sim"
                                                        v-model="aceitaPermuta" />
                                                      <label class="btn btn-outline-success"
                                                        for="aceitaPermuta1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="aceitaPermuta" name="aceitaPermuta" id="aceitaPermuta2"
                                                        autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="aceitaPermuta2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div class="col-9">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Descrição das Permutas
                                                    </label>
                                                    <input type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="permutaDescricao"
                                                      placeholder="Digite aqui..." />
                                                  </div>
                                                </div>
                                              </div>


                                            </div>


                                          </div>

                                          <div class="tab-pane fade" id="caracteristica-tab-pane" role="tabpanel"
                                            aria-labelledby="caracteristica-tab" tabindex="0">

                                            <div>
                                              <div class="row mt-3">

                                                <div class="col-md-6">
                                                  <div class="form-check"
                                                    v-for="caracteristica in minhasCaracteristicas"
                                                    :key="caracteristica.id_caracteristica">
                                                    <input v-if="!mostrarSkeleton" class="form-check-input"
                                                      v-model="caracteristicaImovel[caracteristica.id_caracteristica]"
                                                      type="checkbox"
                                                      :id="'flexCheck' + caracteristica.id_caracteristica" />
                                                    <label v-if="!mostrarSkeleton" class="form-check-label"
                                                      :for="'flexCheck' + caracteristica.id_caracteristica">
                                                      {{ caracteristica.nome_caracteristica }}
                                                    </label>

                                                    <a style="margin-left: 2%;" href="#"
                                                      @click="handleDeleteCaracacteristicas(caracteristica.id_caracteristica)"><small><i
                                                          class="text-danger fa fa-trash"></i></small></a>
                                                  </div>

                                                </div>

                                                <div class="col-md-6">
                                                  <div class="form-check" v-for="item in listcaracteristicas"
                                                    :key="item.id_caracteristica">
                                                    <input v-if="!mostrarSkeleton" class="form-check-input"
                                                      v-model="caracteristicaAllImovel[item.id_caracteristica]"
                                                      type="checkbox" :id="'flexCheck' + item.id_caracteristica" />
                                                    <label v-if="!mostrarSkeleton" class="form-check-label"
                                                      :for="'flexCheck' + item.id_caracteristica">
                                                      {{ item.nome_caracteristica }}
                                                    </label>
                                                  </div>
                                                </div>

                                              </div>


                                            </div>


                                          </div>

                                          <div class="tab-pane fade" id="localizacao-tab-pane" role="tabpanel"
                                            aria-labelledby="localizacao-tab" tabindex="0">

                                            <div>
                                              <div class="row mt-4">
                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      CEP
                                                    </label>
                                                    <div class="input-group">
                                                      <input type="text" @input="aplicaMascaraCEP" class="form-control"
                                                        placeholder="00000-00" v-model="buscarCEP" required
                                                        v-if="!mostrarSkeleton"
                                                        aria-label="Example text with button addon"
                                                        aria-describedby="button-addon1" />
                                                    </div>
                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">País
                                                    </label>

                                                    <input type="text" placeholder="Brasil" required
                                                      v-if="!mostrarSkeleton" disabled class="form-control"
                                                      v-model="selectPais" />

                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Estado
                                                    </label>

                                                    <input type="text" placeholder="SP" required v-if="!mostrarSkeleton"
                                                      disabled class="form-control" v-model="selectEstado" />

                                                  </div>
                                                </div>

                                                <div class="col-3">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Cidade
                                                    </label>

                                                    <input type="text" placeholder="Ex.: Baurú" required
                                                      v-if="!mostrarSkeleton" class="form-control" disabled
                                                      v-model="selectCidade" />

                                                  </div>
                                                </div>

                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">Bairro
                                                    </label>

                                                    <input type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="selectBairro" disabled
                                                      placeholder="Ex.: Jardim Olímpia">

                                                  </div>
                                                </div>

                                                <div class="col-6">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Logradouro
                                                    </label>
                                                    <input type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control" disabled v-model="logradouro"
                                                      placeholder="Ex.: Rua das flores" />
                                                  </div>
                                                </div>
                                                <div class="col-2">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Número
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="nLogradouro" placeholder="00" />
                                                  </div>
                                                </div>
                                                <div class="col-6">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Complemento
                                                    </label>
                                                    <input type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="complemento"
                                                      placeholder="Digite aqui o complemento, se houver." />
                                                  </div>
                                                </div>

                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Nº ou identificação da Unidade
                                                    </label>
                                                    <input type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="idUnidade"
                                                      placeholder="Insira aqui" />
                                                  </div>
                                                </div>
                                                <div class="col-2">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Andar
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="selectAndar"
                                                      placeholder="Insira aqui" />
                                                  </div>
                                                </div>
                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Unidades por andar
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="undPorAndar"
                                                      placeholder="Informe a quantidade..." />
                                                  </div>
                                                </div>
                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Total de andares
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="totalAndares"
                                                      placeholder="Insira o total" />
                                                  </div>
                                                </div>
                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Total de torres
                                                    </label>
                                                    <input type="number" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="totalTorres"
                                                      placeholder="Se houver, insira aqui" />
                                                  </div>
                                                </div>

                                                <hr />

                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Mostrar andar do apartamento
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="mostrarAndar"
                                                        id="mostrarAndar1" autocomplete="off" value="Sim"
                                                        v-model="mostrarAndar" />
                                                      <label class="btn btn-outline-success"
                                                        for="mostrarAndar1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="mostrarAndar" name="mostrarAndar" id="mostrarAndar2"
                                                        autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="mostrarAndar2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Mostrar o número da unidade
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="mostrarNUnidade"
                                                        id="mostrarNUnidade1" autocomplete="off" value="Sim"
                                                        v-model="mostrarNUnidade" />
                                                      <label class="btn btn-outline-success"
                                                        for="mostrarNUnidade1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="mostrarNUnidade" name="mostrarNUnidade"
                                                        id="mostrarNUnidade2" autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="mostrarNUnidade2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Mostrar Logradouro no site?
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="mostrarLogradouro"
                                                        id="mostrarLogradouro1" autocomplete="off" value="Sim"
                                                        v-model="mostrarLogradouro" />
                                                      <label class="btn btn-outline-success"
                                                        for="mostrarLogradouro1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="mostrarLogradouro" name="mostrarLogradouro"
                                                        id="mostrarLogradouro2" autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="mostrarLogradouro2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Mostrar Bairro no site?
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="mostrarBairro"
                                                        id="mostrarBairro1" autocomplete="off" value="Sim"
                                                        v-model="mostrarBairro" />
                                                      <label class="btn btn-outline-success"
                                                        for="mostrarBairro1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="mostrarBairro" name="mostrarBairro" id="mostrarBairro2"
                                                        autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="mostrarBairro2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Mostrar complemento no site?
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="mostrarComplemento"
                                                        id="mostrarComplemento1" autocomplete="off" value="Sim"
                                                        v-model="mostrarComplemento" />
                                                      <label class="btn btn-outline-success"
                                                        for="mostrarComplemento1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="mostrarComplemento" name="mostrarComplemento"
                                                        id="mostrarComplemento2" autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="mostrarComplemento2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Mostrar número no site?
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="mostrarNumero"
                                                        id="mostrarNumero1" autocomplete="off" value="Sim"
                                                        v-model="mostrarNumero" />
                                                      <label class="btn btn-outline-success"
                                                        for="mostrarNumero1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="mostrarNumero" name="mostrarNumero" id="mostrarNumero2"
                                                        autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="mostrarNumero2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Mostrar nome no site?
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="mostrarNCondo"
                                                        id="mostrarNCondo1" autocomplete="off" value="Sim"
                                                        v-model="mostrarNCondo" />
                                                      <label class="btn btn-outline-success"
                                                        for="mostrarNCondo1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="mostrarNCondo" name="mostrarNCondo" id="mostrarNCondo2"
                                                        autocomplete="off" />
                                                      <label class="btn btn-outline-danger"
                                                        for="mostrarNCondo2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>



                                                <div class="col-4">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Localizar imóvel no mapa?
                                                    </label>

                                                    <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                    <div class="btn-group" role="group"
                                                      aria-label="Basic radio toggle button group">
                                                      <input type="radio" class="btn-check" name="mapaCondo"
                                                        id="mapaCondo1" autocomplete="off" value="Sim"
                                                        v-model="mapaCondo" />
                                                      <label class="btn btn-outline-success"
                                                        for="mapaCondo1">Sim</label>

                                                      <input type="radio" class="btn-check" value="Não"
                                                        v-model="mapaCondo" name="mapaCondo" id="mapaCondo2"
                                                        autocomplete="off" />
                                                      <label class="btn btn-outline-danger" for="mapaCondo2">Não</label>
                                                    </div>
                                                  </div>
                                                </div>

                                                <hr />

                                                <div class="col-12">

                                                  <iframe :src="mapUrl" width="100%" height="350" style="border: 0"
                                                    allowfullscreen="" loading="lazy" class="my-3"
                                                    referrerpolicy="no-referrer-when-downgrade">
                                                  </iframe>

                                                  <div class="row">

                                                    <div class="col-4">
                                                      <div class="mb-3">
                                                        <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                        <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                        <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                          class="form-label">
                                                          Mostrar mapa no site?
                                                        </label>

                                                        <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                        <div class="btn-group" role="group"
                                                          aria-label="Basic radio toggle button group">
                                                          <input type="radio" class="btn-check" name="selectMapSite"
                                                            id="selectMapSite1" autocomplete="off" value="Sim"
                                                            v-model="selectMapSite" />
                                                          <label class="btn btn-outline-success"
                                                            for="selectMapSite1">Sim</label>

                                                          <input type="radio" class="btn-check" value="Não"
                                                            v-model="selectMapSite" name="selectMapSite"
                                                            id="selectMapSite2" autocomplete="off" />
                                                          <label class="btn btn-outline-danger"
                                                            for="selectMapSite2">Não</label>
                                                        </div>
                                                      </div>
                                                    </div>

                                                    <div class="col-4">
                                                      <div class="mb-3">
                                                        <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                        <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                        <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                          class="form-label">
                                                          Ativar StreetView?
                                                        </label>

                                                        <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                        <div class="btn-group" role="group"
                                                          aria-label="Basic radio toggle button group">
                                                          <input type="radio" class="btn-check" name="mapaStreetV"
                                                            id="mapaStreetV1" autocomplete="off" value="Sim"
                                                            v-model="mapaStreetV" />
                                                          <label class="btn btn-outline-success"
                                                            for="mapaStreetV1">Sim</label>

                                                          <input type="radio" class="btn-check" value="Não"
                                                            v-model="mapaStreetV" name="mapaStreetV" id="mapaStreetV2"
                                                            autocomplete="off" />
                                                          <label class="btn btn-outline-danger"
                                                            for="mapaStreetV2">Não</label>
                                                        </div>
                                                      </div>
                                                    </div>

                                                    <div class="col-12" v-if="mostrarStreetV">


                                                      <div class="col-12 mb-3">
                                                        <small>* As imagens são extraídas do google e podem estar
                                                          desatualizadas</small>
                                                      </div>

                                                      <div class="col-4">
                                                        <div class="mb-3">
                                                          <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                          <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                          <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                            class="form-label">
                                                            Mostrar StreetView no site?
                                                          </label>

                                                          <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                          <div class="btn-group" role="group"
                                                            aria-label="Basic radio toggle button group">
                                                            <input type="radio" class="btn-check"
                                                              name="selectStreetVSite" id="selectStreetVSite1"
                                                              autocomplete="off" value="Sim"
                                                              v-model="selectStreetVSite" />
                                                            <label class="btn btn-outline-success"
                                                              for="selectStreetVSite1">Sim</label>

                                                            <input type="radio" class="btn-check" value="Não"
                                                              v-model="selectStreetVSite" name="selectStreetVSite"
                                                              id="selectStreetVSite2" autocomplete="off" />
                                                            <label class="btn btn-outline-danger"
                                                              for="selectStreetVSite2">Não</label>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>


                                              </div>




                                            </div>


                                          </div>

                                          <div class="tab-pane fade" id="proximidades-tab-pane" role="tabpanel"
                                            aria-labelledby="proximidades-tab" tabindex="0">

                                            <div>

                                              <div class="row">
                                                <div class="col-md-6">
                                                  <div class="form-check" v-for="proximidade in minhasProximidades"
                                                    :key="proximidade.id_proximidade">
                                                    <input v-if="!mostrarSkeleton" class="form-check-input"
                                                      v-model="proximidadesImovel[proximidade.id_proximidade]"
                                                      type="checkbox" :id="'flexCheck' + proximidade.id_proximidade" />
                                                    <label v-if="!mostrarSkeleton" class="form-check-label"
                                                      :for="'flexCheck' + proximidade.id_proximidade">
                                                      {{ proximidade.nome_proximidade }}

                                                    </label>
                                                    <a style="margin-left: 2%;" href="#"
                                                      @click="handleDeleteProximidades(proximidade.id_proximidade)"><small><i
                                                          class="text-danger fa fa-trash"></i></small></a>
                                                  </div>
                                                </div>
                                                <div class="col-md-6">
                                                  <div class="form-check" v-for="item in listProximidades"
                                                    :key="item.id_proximidade">
                                                    <input v-if="!mostrarSkeleton" class="form-check-input"
                                                      v-model="proximidadesAllImovel[item.id_proximidade]"
                                                      type="checkbox" :id="'flexCheck' + item.id_proximidade" />
                                                    <label v-if="!mostrarSkeleton" class="form-check-label"
                                                      :for="'flexCheck' + item.id_proximidade">
                                                      {{ item.nome_proximidade }}

                                                    </label>
                                                  </div>
                                                </div>

                                              </div>



                                            </div>

                                          </div>

                                          <div class="tab-pane fade" id="descricao-tab-pane" role="tabpanel"
                                            aria-labelledby="decricao-tab" tabindex="0">

                                            <div>
                                              <div class="row mt-4">
                                                <div class="col-12">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Titulo da página de detalhamento do imóvel
                                                    </label>
                                                    <input type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="titleImovel"
                                                      placeholder="Digite aqui..." />
                                                  </div>
                                                </div>

                                                <div class="col-12">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Texto de apresentação do imóvel
                                                    </label>

                                                    <textarea class="form-control" v-if="!mostrarSkeleton"
                                                      v-model="descricaoImovel" style="height: 100px"
                                                      placeholder="Digite aqui..."></textarea>
                                                  </div>
                                                </div>
                                              </div>


                                            </div>

                                          </div>

                                          <div class="tab-pane fade" id="complementos-tab-pane" role="tabpanel"
                                            aria-labelledby="complementos-tab" tabindex="0">

                                            <div>
                                              <div class="row mt-4">
                                                <div class="col-12">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Vídeo do Imóvel: Insira a URL do seu vídeo no Youtube
                                                      <button type="button" class="btn btn-danger ms-2" style="
                                      --bs-btn-padding-y: 0.25rem;
                                      --bs-btn-padding-x: 0.5rem;
                                      --bs-btn-font-size: 0.75rem;
                                    ">
                                                        <i class="fa fa-trash me-2"></i> Remover Vídeo
                                                      </button>
                                                    </label>
                                                    <input type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="urlYT"
                                                      placeholder="Digite aqui..." />
                                                  </div>
                                                </div>

                                                <div class="col-12">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Apresentação 360°: Insira a URL 360° do seu imóvel
                                                      <button type="button" class="btn btn-danger ms-2" style="
                                      --bs-btn-padding-y: 0.25rem;
                                      --bs-btn-padding-x: 0.5rem;
                                      --bs-btn-font-size: 0.75rem;
                                    ">
                                                        <i class="fa fa-trash me-2"></i> Remover 360°
                                                      </button>
                                                    </label>
                                                    <input type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="url360"
                                                      placeholder="Digite aqui..." />
                                                  </div>
                                                </div>

                                                <div class="col-12">
                                                  <div class="mb-3">
                                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                      class="form-label">
                                                      Insira o link do Google Drive, Dropbox, Onedrive ou outro

                                                    </label>
                                                    <input type="text" required v-if="!mostrarSkeleton"
                                                      class="form-control" v-model="link_drive"
                                                      placeholder="Digite aqui..." />
                                                  </div>
                                                </div>

                                              </div>


                                            </div>

                                          </div>

                                          <div class="tab-pane fade" id="images-tab-pane" role="tabpanel"
                                            aria-labelledby="images-tab" tabindex="0">

                                            <div>
                                              <div class="row mt-4">
                                                <li class="text-danger"><small> Envie até 10 imagens . </small></li>
                                                <li class="text-danger"><small> Formatos aceitos .PNG .JPG ou
                                                    .JPEG</small></li>
                                                <li class="text-danger"><small> Tamanho máx. permitido é de até 3 mb
                                                    por
                                                    imagem.</small>
                                                </li>
                                                <li class="text-danger"><small> A resolução ideal de w: 1342
                                                    h:768.</small>
                                                </li>

                                                <div class="row g-3">
                                                  <div class="col-12">
                                                    <div class="row row-cols-1 row-cols-md-5 g-4">
                                                      <div class="col" v-for="(image, index) in images" :key="index">
                                                        <div class="card bg-transparent border-0">
                                                          <div class="preview-photo-prato area-photo-prato">
                                                            <img :src="image.src" class="img-photo-prato" />

                                                            <!-- Barra de Progresso -->
                                                            <div class="progress">
                                                              <div class="progress-bar"
                                                                :style="{ width: image.progress + '%' }"></div>
                                                            </div>

                                                            <button @click="removerImagem(index)"
                                                              class="btn btn-danger btn-remover">
                                                              <i class="fa fa-minus"></i>
                                                            </button>
                                                          </div>
                                                        </div>
                                                      </div>

                                                      <!-- Botão para adicionar mais imagens -->
                                                      <div class="col" v-if="images.length < maxImages">
                                                        <div class="card bg-transparent border-0">
                                                          <div class="preview-photo-prato area-photo-prato">
                                                            <label for="inputGroupFile03"
                                                              class="btn btn-primary btn-photo my-4 rounded-2 py-2">
                                                              <i class="fa fa-plus"></i>
                                                            </label>
                                                            <input hidden type="file" class="form-control"
                                                              id="inputGroupFile03" @change="previewImage"
                                                              aria-describedby="inputGroupFileAddon03"
                                                              aria-label="Upload" multiple />

                                                            <div v-if="success"><i class="fa fa-check"></i></div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>


                                                </div>


                                              </div>


                                            </div>

                                          </div>

                                          <div class="tab-pane fade" id="publicar-tab-pane" role="tabpanel"
                                            aria-labelledby="publicar-tab" tabindex="0">

                                            <div class="row mt-4">
                                              <div class="col-3">
                                                <div class="mb-3">
                                                  <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                  <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                  <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                    class="form-label">
                                                    Mostrar imóvel no site?
                                                    <p>
                                                      <small>Determine se o imóvel será publicado em seu
                                                        site.</small>
                                                    </p>
                                                  </label>

                                                  <!-- O CSS DESSE BUTTON ESTÁ NO STYLE.CSS -->

                                                  <div class="btn-group" role="group"
                                                    aria-label="Basic radio toggle button group">
                                                    <input type="radio" class="btn-check" name="selectImovelSite"
                                                      id="selectImovelSite1" autocomplete="off" value="Sim"
                                                      v-model="selectImovelSite" />
                                                    <label class="btn btn-outline-success"
                                                      for="selectImovelSite1">Sim</label>

                                                    <input type="radio" class="btn-check" value="Não"
                                                      v-model="selectImovelSite" name="selectImovelSite"
                                                      id="selectImovelSite2" autocomplete="off" />
                                                    <label class="btn btn-outline-danger"
                                                      for="selectImovelSite2">Não</label>
                                                  </div>
                                                </div>
                                              </div>

                                              <div class="col-6">
                                                <label class="form-label mb-3" for="btnradio2">
                                                  Tarja do imóvel para o site <br />
                                                  <small>Escolha a cor e a frase que aparecerão na miniatura do
                                                    imóvel.
                                                  </small>
                                                </label>
                                                <div class="row">
                                                  <div class="col-8">
                                                    <div class="mb-3">
                                                      <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                      <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                      <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                        class="form-label">
                                                        Texto da tarja
                                                      </label>
                                                      <input type="text" required v-if="!mostrarSkeleton"
                                                        class="form-control" v-model="textoTarja"
                                                        placeholder="Em construção" />
                                                    </div>
                                                  </div>
                                                  <div class="col-4">
                                                    <div class="mb-3">
                                                      <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                                      <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                                      <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                        class="form-label">
                                                        Cor da tarja
                                                      </label>
                                                      <input type="color" v-if="!mostrarSkeleton" v-model="corTarja"
                                                        class="form-control" id="exampleColorInput" value="#563d7c"
                                                        title="Escolha a cor" />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>

                                          </div>
                                        </div>
                                      </div>
                                      <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                          data-bs-dismiss="modal">Fechar</button>
                                        <button type="button" class="btn btn-success" :disabled="autenticandoBtn"
                                          @click="handleFinish()">Salvar &nbsp;<i class="fa fa-arrow-right"
                                            aria-hidden="true"></i></button>
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
import api from "../../../service/api/index.js";
import { jwtDecode } from "jwt-decode";
import axios from 'axios'
import _ from 'lodash';
import L from 'leaflet';


export default {
  name: "CadImoveisView",
  components: {
    Sidebar,
    Navbar,
    Footer,
  },
  data() {
    return {
      id_user: "",
      home: "",
      comodos: "",
      inputCondominio: false,
      mostrarMapa: false,
      mostrarStreetV: false,
      msgNull: false,
      mostrarSkeleton: true,
      token: localStorage.getItem("token"),
      condominios: [],
      listsProprietarios: [],
      autenticando: false,
      textoBotaoProprietario: "Add Proprietário",
      msgSuccessProprietario: false,
      autenticando: false,
      textoBotaoFinish: "Ver Resumo",

      proprietarioNome: '',
      proprietarioTelefone: '',
      proprietarioEmail: '',
      proprietarioDocumento: '',
      msgNullPropietario: false,

      autenticandoBtn: false,

      //Tabs - para ativar, mude de FALSE para TRUE
      infoTab: true,
      comodosTab: false,
      medidaTab: false,
      precoTab: false,
      caracteristicaTab: false,
      localizacaoTab: false,
      proximidadesTab: false,
      descricaoTab: false,
      complementoTab: false,
      imagemTab: false,
      publicacaoTab: false,
      addProp: false,

      //Icons Lateriais de Progressão
      stepInfo: false,
      stepComodos: false,
      stepMedidas: false,
      stepPreco: false,
      stepCaracteristica: false,
      stepLocalizacao: false,
      stepProximidades: false,
      stepDescricao: false,
      stepComplemento: false,
      stepImagens: false,
      stepPublicacao: false,

      // TABINFO
      codigoref: "",
      selectCondominio: "Não",
      idCondominio: "",
      selectProprietario: "",
      tipoImovel: "",
      perfilImovel: "",
      situacaoImovel: "",
      anoImovel: "",
      incorporacao: "",
      posicaoSolar: "",
      selectTerreno: "",
      proximoMar: "",
      selectAverbado: "Não",
      selectEscritura: "Não",
      selectEsquina: "Não",
      selectMobilia: "Não",
      msgNullComodos: false,

      // ADD PROPRIETARIO
      clienteNome: "",
      clienteEmail: "",
      clienteDocumento: "",
      clienteTel: "",

      // TAB COMODOS
      dormitorio: "",
      suite: "",
      banheiro: "",
      garagem: "",
      selectGaragemCobertura: "",
      selectBoxGaragem: "",
      salaTv: "",
      salaJantar: "",
      salaEstar: "",
      lavabo: "",
      areaServico: "",
      cozinha: "",
      closet: "",
      escritorio: "",
      depEmpregada: "",
      salaCopa: "",

      // TAB MEDIDAS
      areaConstruida: "",
      areaPrivativa: "0",
      areaTotal: "",

      // TAB PREÇOS
      tipoNegocio: "",
      precoImovel: "",
      precoNoSite: "Sim",
      textoLugarPreco: '',
      textoLugarPrecoView: false,
      precoIptu: "",
      periodoIptu: "Anual",
      precoCondominio: "",
      estaFinanciado: "Não",
      aceitaFinanciamento: "Não",
      mCasaMVida: "",
      taxasTotal: "",
      taxasDescricao: "",
      aceitaPermuta: "Não",
      permutaDescricao: "",
      valorMetroQuadrado: 0,

      //TAB CARACTERISTICA

      inputCaracteristicas: "",
      caracteristicaAllImovel: {},
      caracteristicaImovel: {},

      minhasCaracteristicas: [],
      listcaracteristicas: [],

      msgSuccessCaracteristica: false,
      msgNullCaracteristica: false,
      addCaracteristicas: false,

      // TAB LOCALIZAÇÃO
      buscarCEP: "",
      selectPais: "",
      selectEstado: "",
      selectCidade: "",
      selectBairro: "",
      logradouro: "",
      nLogradouro: "",
      complemento: "",
      idUnidade: "",
      selectAndar: "",
      undPorAndar: "",
      totalAndares: "",
      totalTorres: "",
      mostrarAndar: "Não",
      mostrarNUnidade: "Não",
      mostrarLogradouro: "Não",
      mostrarBairro: "Não",
      mostrarComplemento: "Não",
      mostrarNumero: "Não",
      mostrarNCondo: "Não",
      mapaCondo: "Não",
      selectMapSite: "Não",
      selectLocalSite: "Não",
      mapaStreetV: "Não",
      selectStreetVSite: "Não",
      latitude: '',
      longitude: '',

      // TAB PROXIMIDADES
      proximidades: false,
      inputProximidades: "",
      proximidadesImovel: {},
      proximidadesAllImovel: {},

      minhasProximidades: [],
      listProximidades: [],

      msgSuccessProximidade: false,
      msgNullProximidades: false,
      addProximidades: false,

      // TAB DESCRIÇÃO
      titleImovel: "",
      descricaoImovel: "",

      // TAB COMPLEMENTOS
      urlYT: "",
      url360: "",
      link_drive: "",

      // TAB IMAGEM
      images: [],
      imageSrc: null,
      maxImages: 10,

      // TAB PUBLICAÇÃO
      selectImovelSite: "Sim",
      selectPageInit: "Sim",
      textoTarja: "Em construção",
      corTarja: "#563d7c",
      enviarLinkProprietario: "Não",
      emailProprietario: "",
      periodoEnvio: "+30",
      revisarCadastro: "Não",
      proximaDataRevisao: "",
      periodoRevisao: "+30",

      msgSucesso: false,
      msgError: false,

      latitude: '-8.13057',
      longitude: '39.6945',
      map: null,
      marker: null,

      id_progress: '',
      nome: '',
      email: '',

    };
  },

  created() {
    this.debouncedCheckCEP = _.debounce(this.consultarCEP, 100);
  },

  computed: {

    // mapUrl() {
    //   return `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14725.435606724364!2d${this.longitude}!3d${this.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1707888543130!5m2!1spt-BR!2sbr`;
    // },

    areaTotal() {
      const construida = parseFloat(this.areaConstruida.replace(/\./g, '').replace(',', '.')) || 0;
      const privativa = parseFloat(this.areaPrivativa.replace(/\./g, '').replace(',', '.')) || 0;
      return (construida + privativa).toFixed(2);
    },
  },

  watch: {

    areaConstruida: 'calcularAreaTotal',
    areaPrivativa: 'calcularAreaTotal',

    buscarCEP(newVal, oldVal) {
      if (newVal.length === 9 && newVal !== oldVal) {
        this.debouncedCheckCEP();
      }
    },
    selectCondominio(newValue) {
      if (newValue == "Sim") {
        this.inputCondominio = true;
      } else {
        this.inputCondominio = false;
      }
    },

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

    mapaStreetV(newValue) {
      if (newValue == "Sim") {
        this.mostrarStreetV = true;
      } else {
        this.mostrarStreetV = false;
      }
    },

    // INFO
    selectAverbado(y) {
      this.selectAverbado = y;
    },

    selectEscritura(y) {
      this.selectEscritura = y;
    },

    selectEsquina(y) {
      this.selectEsquina = y;
    },

    selectMobilia(y) {
      this.selectMobilia = y;
    },

    selectTerreno(y) {
      this.selectTerreno = y;
    },

    // COMODOS
    selectGaragemCobertura(y) {
      this.selectGaragemCobertura = y;
    },
    selectBoxGaragem(y) {
      this.selectBoxGaragem = y;
    },

    // PREÇOS
    precoNoSite(y) {
      this.precoNoSite = y;

      if (this.precoNoSite == "Não") {
        this.textoLugarPrecoView = false;
      } else {
        this.textoLugarPrecoView = true;
      }

    },
    periodoIptu(y) {
      this.periodoIptu = y;
    },
    estaFinanciado(y) {
      this.estaFinanciado = y;
    },
    aceitaFinanciamento(y) {
      this.aceitaFinanciamento = y;
    },
    mCasaMVida(y) {
      this.mCasaMVida = y;
    },
    aceitaPermuta(y) {
      this.aceitaPermuta = y;
    },

    // LOCALIZAÇÃO
    mostrarAndar(y) {
      this.mostrarAndar = y;
    },
    mostrarNUnidade(y) {
      this.mostrarNUnidade = y;
    },
    mostrarLogradouro(y) {
      this.mostrarLogradouro = y;
    },
    mostrarBairro(y) {
      this.mostrarBairro = y;
    },
    mostrarComplemento(y) {
      this.mostrarComplemento = y;
    },
    mostrarNumero(y) {
      this.mostrarNumero = y;
    },
    mostrarNCondo(y) {
      this.mostrarNCondo = y;
    },
    selectMapSite(y) {
      this.selectMapSite = y;
    },
    selectLocalSite(y) {
      this.selectLocalSite = y;
    },
    selectStreetVSite(y) {
      this.selectStreetVSite = y;
    },


  },

  mounted() {
    setTimeout(() => {
      this.mostrarSkeleton = false;
    }, 2000);

    let token = this.token;
    let decode = jwtDecode(token);
    this.id_user = decode.id_user;
    let nome = decode.nome;
    let email = decode.email;

    let id_user = this.id_user;

    console.log('este é meu usuário ===> ', id_user);

    this.nome = nome;
    this.email = email;

    this.fetchProximidades();
    this.fetchAllProximidades();

    this.fetchCaracteristicas();
    this.fetchAllCaracteristicas();

    api.listcondominio(id_user).then((res) => {
      this.condominios = res.data.response;
    })

    api.progress(id_user).then((res) => {
      this.id_progress = res.data.id_progressao;
    });

  },

  methods: {
    initMap() {
      this.map = L.map(this.$refs.mapElement).setView([this.latitude, this.longitude], 15);

      // Adiciona os tiles do OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
      }).addTo(this.map);

      this.addMarker();
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

    aplicaMascaraMedida(campo) {
      this[campo] = this.formatarDecimal(this[campo]);
    },

    formatarDecimal(valor) {
      let valorNumerico = valor.replace(/\D/g, '');
      valorNumerico = (valorNumerico / 100).toFixed(2).replace('.', ',');
      return valorNumerico.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },

    calcularAreaTotal() {
      const areaConstruidaNum = parseFloat(this.areaConstruida.replace(/\./g, '').replace(',', '.')) || 0;
      const areaPrivativaNum = parseFloat(this.areaPrivativa.replace(/\./g, '').replace(',', '.')) || 0;
      const areaTotalNum = (areaConstruidaNum + areaPrivativaNum).toFixed(2);
      this.areaTotal = areaTotalNum.toString().replace('.', ',');
    },

    aplicaMascaraMedidaPrivativa() {
      let v = this.areaPrivativa;

      // Remove tudo o que não é dígito e ponto
      v = v.replace(/[^0-9.]/g, "");

      // Evita a entrada de mais de um ponto
      v = v.replace(/(\..*)\./g, '$1');

      // Limita a apenas duas casas decimais após o ponto
      v = v.replace(/(\.\d{2})\d+/g, '$1');

      this.areaPrivativa = v;
    },

    aplicaMascaraMedidaTotal() {
      let v = this.areaTotal;

      // Remove tudo o que não é dígito e ponto
      v = v.replace(/[^0-9.]/g, "");

      // Evita a entrada de mais de um ponto
      v = v.replace(/(\..*)\./g, '$1');

      // Limita a apenas duas casas decimais após o ponto
      v = v.replace(/(\.\d{2})\d+/g, '$1');

      this.areaTotal = v;
    },

    aplicaMascaraDinheiroPrecoImovel() {
      let v = this.precoImovel;

      // Remove tudo o que não é dígito
      v = v.replace(/\D/g, "");

      // Divide o número para preparar a adição de vírgula e ponto
      let valorDecimal = parseInt(v) / 100;

      // Formata o número como valor monetário
      this.precoImovel = valorDecimal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    },

    aplicaMascaraDinheiroPrecoIptu() {
      let v = this.precoIptu;

      // Remove tudo o que não é dígito
      v = v.replace(/\D/g, "");

      // Divide o número para preparar a adição de vírgula e ponto
      let valorDecimal = parseInt(v) / 100;

      // Formata o número como valor monetário
      this.precoIptu = valorDecimal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    },

    aplicaMascaraDinheiroPrecoCondominio() {
      let v = this.precoCondominio;

      // Remove tudo o que não é dígito
      v = v.replace(/\D/g, "");

      // Divide o número para preparar a adição de vírgula e ponto
      let valorDecimal = parseInt(v) / 100;

      // Formata o número como valor monetário
      this.precoCondominio = valorDecimal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    },

    aplicaMascaraDinheiroTotalTaxas() {
      let v = this.taxasTotal;

      // Remove tudo o que não é dígito
      v = v.replace(/\D/g, "");

      // Divide o número para preparar a adição de vírgula e ponto
      let valorDecimal = parseInt(v) / 100;

      // Formata o número como valor monetário
      this.taxasTotal = valorDecimal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    },

    async consultarCEP() {
      if (this.buscarCEP.length === 9) {
        const cep = this.buscarCEP.replace(/\D/g, '');

        try {
          const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

          // Correção nas propriedades de acordo com a resposta da API
          let rua = res.data.logradouro;
          let bairro = res.data.bairro;
          let cidade = res.data.localidade;
          let estado = res.data.uf;

          this.selectPais = "Brasil"
          this.selectEstado = estado
          this.selectCidade = cidade
          this.selectBairro = bairro
          this.logradouro = rua

          // await this.buscarCoordenadas(cep, cidade, estado);
          await this.buscarCoordenadas(cep, rua, estado, cidade);

        } catch (error) {
          console.error("Erro ao consultar CEP: ", error);
        }
      }
    },

    async buscarCoordenadas(cep, rua) {
      // trocar pela apiKey do cliente
      const apiKey = 'AIzaSyAASYgAApUrIKnyEc9ykVzP7-s_-g2ldRU';

      try {
        const res = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
          params: {
            address: `${cep}, ${rua}`,
            key: apiKey
          }
        });
        // console.log(res)

        if (res.data && res.data.results && res.data.results.length > 0) {
          const location = res.data.results[0].geometry.location;
          const latitude = location.lat;
          const longitude = location.lng;
          this.latitude = latitude;
          this.longitude = longitude;

          console.log("Latitude e Longitude encontradas:", latitude, longitude);
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

    updateMap() {
      this.map.setView([this.latitude, this.longitude], 15);
      this.addMarker();
    },
    addMarker() {
      const lat = this.latitude;
      const lng = this.longitude;

      if (!isNaN(lat) && !isNaN(lng)) {
        L.marker([lat, lng]).addTo(this.map)
          .bindPopup(`Latitude: ${lat}, Longitude: ${lng}`).openPopup();
      } else {
        console.error('Coordenadas inválidas');
      }
    },

    handleprop() {
      this.addProp = true;
      this.infoTab = false;
    },
    getSelectedCaracteristicasIDs() {
      const selectedIds = Object.keys(this.caracteristicaImovel).filter(id => this.caracteristicaImovel[id]).map(Number);
      return selectedIds;
    },
    getSelectedMinhasProximidadesIDs() {
      return Object.keys(this.proximidadesImovel).filter(id => this.proximidadesImovel[id]).map(Number);


    },
    getSelectedAllProximidadesIDs() {
      return Object.keys(this.proximidadesAllImovel).filter(id => this.proximidadesAllImovel[id]).map(Number);
    },
    getCombinedSelectedProximidadesIDs() {
      const minhasIDs = this.getSelectedMinhasProximidadesIDs();
      const allIDs = this.getSelectedAllProximidadesIDs();
      const combinedIDs = [...new Set([...minhasIDs, ...allIDs])];

      return combinedIDs;
    },
    getSelectedMinhasCaracteristicasIDs() {
      return Object.keys(this.caracteristicaImovel).filter(id => this.caracteristicaImovel[id]).map(Number);
    },
    getSelectedAllCaracteristicasIDs() {
      return Object.keys(this.caracteristicaAllImovel).filter(id => this.caracteristicaAllImovel[id]).map(Number);
    },
    getCombinedSelectedCaracteristicasIDs() {
      const minhasIDss = this.getSelectedMinhasCaracteristicasIDs();
      const allIDss = this.getSelectedAllCaracteristicasIDs();
      const combinedIDss = [...new Set([...minhasIDss, ...allIDss])];

      return combinedIDss;
    },
    handlePropietario() {
      let id_user = this.id_user;
      let nomeProprietario = this.proprietarioNome
      let telefonePropietario = this.proprietarioTelefone
      let emailProprietario = this.proprietarioEmail
      let documentoProprietario = this.proprietarioDocumento
      this.autenticando = true
      this.textoBotaoProprietario = "Aguarde..."

      api.novoProprietario(nomeProprietario, emailProprietario, documentoProprietario, telefonePropietario, id_user).then((res) => {

        if (res.status == 201) {
          this.msgSuccessProprietario = true
          this.textoBotaoProprietario = "Tudo certo!"
          this.fetchProprietatio()


          setTimeout(() => {
            this.msgSuccessProprietario = false
            this.addProp = false;

            this.infoTab = true;
            this.autenticando = false
          }, 3000)

        }

      })
    },
    aplicaMascaraTelefone() {
      let v = this.propietarioTelefone;

      v = v.replace(/\D/g, "");
      if (v.length > 11) {
        v = v.substring(0, 11);
      }
      v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
      v = v.replace(/(\d{5})(\d)/, "$1-$2");

      this.propietarioTelefone = v;
    },
    handlepropclose() {
      this.addProp = false;
      this.infoTab = true;
    },
    handleSaveProximidades() {
      let nome_proximidade = this.inputProximidades;
      let id_user = this.id_user;

      if (nome_proximidade !== '') {
        api.minhasProximidades(nome_proximidade, id_user).then((res) => {
          if (res.status == 201) {
            this.msgSuccessProximidade = true
            this.inputProximidades = ''

            this.fetchProximidades();

            setTimeout(() => {

              this.msgSuccessProximidade = false
            }, 3000)
          }
        })

      } else {

        this.msgNullProximidades = true

        setTimeout(() => {
          this.msgNullProximidades = false
        }, 3000)

      }




    },
    handleSaveCaracteristicas() {

      let nome_caracteristica = this.inputCaracteristicas;
      let id_user = this.id_user;

      if (nome_caracteristica !== '') {
        api.minhasCaracteristicas(nome_caracteristica, id_user).then((res) => {
          if (res.status == 201) {
            this.msgSuccessCaracteristica = true
            this.inputCaracteristicas = ''

            this.fetchCaracteristicas();

            setTimeout(() => {

              this.msgSuccessCaracteristica = false
            }, 3000)
          }
        })

      } else {

        this.msgNullCaracteristica = true

        setTimeout(() => {
          this.msgNullCaracteristica = false
        }, 3000)

      }

    },
    fetchCaracteristicas() {
      let id_user = this.id_user;
      api.listminhascaracteristicas(id_user).then((res) => {
        this.minhasCaracteristicas = res.data.response;

        console.log(this.minhasCaracteristicas)
      })
    },
    fetchProximidades() {
      let id_user = this.id_user;
      api.listminhasproximidades(id_user).then((res) => {
        this.minhasProximidades = res.data.response;
      })

    },
    fetchProprietatio() {
      let id_user = this.id_user;
      api.listproprietario(id_user).then((res) => {
        this.listsProprietarios = res.data.response;
      })
    },
    fetchAllProximidades() {
      api.listproximidade().then((res) => {
        const todasProximidades = res.data.response;
        this.listProximidades = todasProximidades.filter(proximidade => proximidade.id_user === null);
      });
    },
    fetchAllCaracteristicas() {
      api.listcaracteristica().then((res) => {
        const todasCaracteristicas = res.data.response;
        this.listcaracteristicas = todasCaracteristicas.filter(caracteristica => caracteristica.id_user === null);
      });
    },
    handleFecharProximidades() {
      this.addProximidades = false;
    },
    handleFecharCaracteristicas() {
      this.addCaracteristicas = false;
    },
    handleDeleteProximidades(id) {
      let id_proximidade = id
      api.deleteMinhaProximidades(id_proximidade).then((res) => {
        if (res.status == 200) {
          this.fetchProximidades();
        }

      })
    },
    handleDeleteCaracacteristicas(id) {

      let id_caracteristicas = id
      api.deleteMinhaCaracteristicas(id_caracteristicas).then((res) => {
        if (res.status == 200) {
          this.fetchCaracteristicas();
        }

      })
    },
    handleAbrirProximidades() {
      this.addProximidades = true;
    },
    handleAbrirCaracteristicas() {
      this.addCaracteristicas = true;
    },

    //Ação do botão Proximo de cada tab
    handleProximoComodo() {
      const campos = [
        this.codigoref,
        this.tipoImovel,
        this.perfilImovel,
        this.situacaoImovel,
        this.posicaoSolar,
        this.proximoMar,
      ];

      const algumCampoVazio = campos.some(campo => campo === null || campo === '');

      if (algumCampoVazio) {
        this.msgNull = true;
        this.infoTab = true;
        this.comodosTab = false;
        this.stepInfo = false;
      } else {
        this.msgNull = false;
        this.infoTab = false;
        this.comodosTab = true;
        this.stepInfo = true;
      }





    },
    handleProximoMedida() {

      const campos = [
        this.dormitorio,
        this.suite,
        this.banheiro,
        this.garagem,
        this.selectGaragemCobertura,
        this.selectBoxGaragem,
        this.salaTv,
        this.salaJantar,
        this.salaEstar,
        this.lavabo,
        this.areaServico,
        this.cozinha,
        this.closet,
        this.escritorio,
        this.depEmpregada,
        this.salaCopa,
      ];

      this.comodosTab = false;
      this.medidaTab = true;

      // Progressão
      this.stepInfo = true;
      this.stepComodos = true;


    },
    handleProximoPreco() {
      const campos = [
        this.areaConstruida,
        this.areaPrivativa,
        this.areaTotal,
      ]

      if (campos.every((campo) => campo !== "")) {
        this.medidaTab = false;
        this.precoTab = true;
        this.stepInfo = true;
        this.stepComodos = true;
        this.stepMedidas = true;

      } else {
        this.medidaTab = true;
        this.precoTab = false;
        this.stepInfo = false;

        // Progressão
        this.stepInfo = true;
        this.stepComodos = true;
        this.stepMedidas = false;
      }

    },
    handleProximoCaracteristica() {
      this.precoTab = false;
      this.caracteristicaTab = true;

      const campos = [
        this.tipoNegocio,
        this.precoImovel,
        this.precoNoSite,
        this.precoIptu,
        this.periodoIptu,
        this.precoCondominio,
        this.estaFinanciado,
        this.aceitaFinanciamento,
        this.mCasaMVida,
        this.taxasTotal,
        this.taxasDescricao,
        this.aceitaPermuta,
        this.permutaDescricao,

      ]


      this.stepInfo = true;
      this.stepComodos = true;
      this.stepMedidas = true;
      this.stepPreco = true;
    },
    handleProximoLocalizacao() {
      this.caracteristicaTab = false;
      this.addCaracteristicas = false;
      this.localizacaoTab = true;

      this.stepInfo = true;
      this.stepComodos = true;
      this.stepMedidas = true;
      this.stepPreco = true;
      this.stepCaracteristica = true;
    },
    handleProximoProximidades() {

      const campos = [
        this.buscarCEP,
        this.selectPais,
        this.selectEstado,
        this.selectCidade,
        this.selectBairro,
        this.logradouro,
        this.nLogradouro,
        this.complemento,
        this.idUnidade,
        this.selectAndar,
        this.undPorAndar,
        this.totalAndares,
        this.totalTorres,
        this.mostrarAndar,
        this.mostrarNUnidade,
        this.mostrarLogradouro,
        this.mostrarBairro,
        this.mostrarComplemento,
        this.mostrarNumero,
        this.mostrarNCondo,
        this.mapaCondo,
        this.selectMapSite,
        this.selectLocalSite,
        this.mapaStreetV,
        this.selectStreetVSite,
      ]

      console.log(campos);

      this.localizacaoTab = false;
      this.proximidadesTab = true;

      this.stepInfo = true;
      this.stepComodos = true;
      this.stepMedidas = true;
      this.stepPreco = true;
      this.stepCaracteristica = true;
      this.stepLocalizacao = true;
    },
    handleProximoDescricao() {
      this.proximidadesTab = false;
      this.descricaoTab = true;
      this.addProximidades = false;

      this.stepInfo = true;
      this.stepComodos = true;
      this.stepMedidas = true;
      this.stepPreco = true;
      this.stepCaracteristica = true;
      this.stepLocalizacao = true;
      this.stepProximidades = true;
    },
    handleProximoComplemento() {
      this.descricaoTab = false;
      this.complementoTab = true;

      this.stepInfo = true;
      this.stepComodos = true;
      this.stepMedidas = true;
      this.stepPreco = true;
      this.stepCaracteristica = true;
      this.stepLocalizacao = true;
      this.stepProximidades = true;
      this.stepDescricao = true;
    },
    handleProximoImagem() {
      this.complementoTab = false;
      this.imagemTab = true;

      this.stepInfo = true;
      this.stepComodos = true;
      this.stepMedidas = true;
      this.stepPreco = true;
      this.stepCaracteristica = true;
      this.stepLocalizacao = true;
      this.stepProximidades = true;
      this.stepDescricao = true;
      this.stepComplemento = true;
    },
    handleProximoPublicacao() {
      this.imagemTab = false;
      this.publicacaoTab = true;

      this.stepInfo = true;
      this.stepComodos = true;
      this.stepMedidas = true;
      this.stepPreco = true;
      this.stepCaracteristica = true;
      this.stepLocalizacao = true;
      this.stepProximidades = true;
      this.stepDescricao = true;
      this.stepComplemento = true;
      this.stepImagens = true;
    },
    //Evento de enviar para a API
    handleProximoFinish() {
      this.imagemTab = false;
      this.publicacaoTab = true;

      this.stepInfo = true;
      this.stepComodos = true;
      this.stepMedidas = true;
      this.stepPreco = true;
      this.stepCaracteristica = true;
      this.stepLocalizacao = true;
      this.stepProximidades = true;
      this.stepDescricao = true;
      this.stepComplemento = true;
      this.stepImagens = true;
      this.stepPublicacao = true;
    },
    removerImagem(index) {
      this.images.splice(index, 1);
    },
    previewImage(event) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        const reader = new FileReader();
        reader.onload = (e) => {
          this.images.push({
            src: e.target.result,
            file: file,
            progress: 0,
          });
          // Simulate the upload for each image
          this.simulateUpload(this.images.length - 1);
        };
        reader.readAsDataURL(file);
      }
    },
    simulateUpload(imageIndex) {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        if (progress <= 100) {
          this.$set(this.images[imageIndex], "progress", progress);
        } else {
          clearInterval(interval);
        }
      }, 100);
    },
    async handleFinish() {

      this.autenticandoBtn = true;

      let codRef = this.codigoref;
      let tipoImovel = this.tipoImovel;
      let perfilImovel = this.perfilImovel;
      let situacaoImovel = this.situacaoImovel;
      let anoImovel = this.anoImovel;
      let incorporacao = this.incorporacao;
      let posicaoSolar = this.posicaoSolar;
      let selectTerreno = this.selectTerreno;
      let proximoMar = this.proximoMar;
      let selectAverbado = this.selectAverbado;
      let selectEscritura = this.selectEscritura;
      let selectEsquina = this.selectEsquina;
      let selectMobilia = this.selectMobilia;

      let dormitorio = this.dormitorio
      let suite = this.suite
      let banheiro = this.banheiro
      let garagem = this.garagem
      let selectGaragemCobertura = this.selectGaragemCobertura
      let selectBoxGaragem = this.selectBoxGaragem
      let salaTv = this.salaTv
      let salaJantar = this.salaJantar
      let lavabo = this.lavabo
      let areaServico = this.areaServico
      let cozinha = this.cozinha
      let closet = this.closet
      let escritorio = this.escritorio
      let depEmpregada = this.depEmpregada
      let copa = this.salaCopa

      let tipoNegocio = this.tipoNegocio
      let precoImovel = this.precoImovel
      let precoNoSite = this.precoNoSite
      let textoLugarPreco = this.textoLugarPreco
      let precoIptu = this.precoIptu
      let periodoIptu = this.periodoIptu
      let precoCondominio = this.precoCondominio
      let estaFinanciado = this.estaFinanciado
      let aceitaFinanciamento = this.aceitaFinanciamento
      let mCasaMVida = this.mCasaMVida
      let taxasTotal = this.taxasTotal
      let taxasDescricao = this.taxasDescricao
      let aceitaPermuta = this.aceitaPermuta
      let permutaDescricao = this.permutaDescricao

      let buscarCEP = this.buscarCEP
      let selectPais = this.selectPais
      let selectEstado = this.selectEstado
      let selectCidade = this.selectCidade
      let selectBairro = this.selectBairro
      let logradouro = this.logradouro
      let nLogradouro = this.nLogradouro
      let complemento = this.complemento
      let idUnidade = this.idUnidade
      let selectAndar = this.selectAndar
      let undPorAndar = this.undPorAndar
      let totalAndares = this.totalAndares
      let totalTorres = this.totalTorres
      let mostrarAndar = this.mostrarAndar
      let mostrarNUnidade = this.mostrarNUnidade
      let mostrarLogradouro = this.mostrarLogradouro
      let mostrarBairro = this.mostrarBairro
      let mostrarComplemento = this.mostrarComplemento
      let mostrarNumero = this.mostrarNumero
      let mostrarNCondo = this.mostrarNCondo
      let selectMapSite = this.selectMapSite

      let titleImovel = this.titleImovel
      let descricaoImovel = this.descricaoImovel

      let urlYT = this.urlYT
      let url360 = this.url360
      let link_drive = this.link_drive

      let caracteristicas = this.getCombinedSelectedCaracteristicasIDs()
      let proximidades = this.getCombinedSelectedProximidadesIDs()

      let selectImovelSite = this.selectImovelSite
      let textoTarja = this.textoTarja
      let corTarja = this.corTarja



      let selecteCond = this.selectCondominio;
      let idcondominio

      if (selecteCond == 'Não') {
        idcondominio = 1
      } else if (selecteCond == 'Sim') {
        idcondominio = this.condominioEmpreendimento;
      }


      let id_user = this.id_user;

      const formData = new FormData();

      this.images.forEach((image, index) => {
        if (image && image.file) {
          formData.append(`foto`, image.file);
        }
      });


      let valorImovelLimpo = this.precoImovel.replace("R$", "").trim().replace(/\./g, "").replace(",", ".");
      let valorImovelFloat = parseFloat(valorImovelLimpo);
      let areaConstruidaFloat = parseFloat(this.areaConstruida);
      this.valorMetroQuadrado = valorImovelFloat / areaConstruidaFloat;


      let valorMetroQuadrado = this.valorMetroQuadrado.toFixed(2);


      formData.append("cod_referencia", codRef);
      formData.append("tipo_imovel", tipoImovel);
      formData.append("perfil_imovel", perfilImovel);
      formData.append("situacao_imovel", situacaoImovel);
      formData.append("ano_construcao", anoImovel);
      formData.append("incorporacao", incorporacao);
      formData.append("posicao_solar", posicaoSolar);
      formData.append("terreno", selectTerreno);
      formData.append("proximo_mar", proximoMar);
      formData.append("averbado", selectAverbado);
      formData.append("escriturado", selectEscritura);
      formData.append("esquina", selectEsquina);
      formData.append("mobilia", selectMobilia);
      formData.append("dormitorio", dormitorio);
      formData.append("suite", suite);
      formData.append("banheiro", banheiro);
      formData.append("garagem", garagem);
      formData.append("garagem_coberta", selectGaragemCobertura);
      formData.append("garagem_box", selectBoxGaragem);
      formData.append("sala_tv", salaTv);
      formData.append("sala_jantar", salaJantar);
      formData.append("lavabo", lavabo);
      formData.append("area_servico", areaServico);
      formData.append("cozinha", cozinha);
      formData.append("closet", closet);
      formData.append("escritorio", escritorio);
      formData.append("casa_empregada", depEmpregada);
      formData.append("copa", copa);
      formData.append("area_contruida", parseFloat(this.areaConstruida.replace(/\./g, '').replace(',', '.')));
      formData.append("area_privativa", parseFloat(this.areaPrivativa.replace(/\./g, '').replace(',', '.')));
      formData.append("area_total", parseFloat(this.areaTotal.replace(/\./g, '').replace(',', '.')));
      formData.append("tipo_negocio", tipoNegocio);
      formData.append("preco_imovel", parseFloat(this.precoImovel.replace(/\./g, '').replace(',', '.')));
      formData.append("mostra_preco", precoNoSite);
      formData.append("texto_preco_opcao", textoLugarPreco);
      formData.append("preco_iptu", precoIptu);
      formData.append("periodo_iptu", periodoIptu);
      formData.append("preco_condominio", precoCondominio);
      formData.append("valor_metro_quadrado", valorMetroQuadrado);
      formData.append("financiado", estaFinanciado);
      formData.append("aceita_financiamento", aceitaFinanciamento);
      formData.append("minhacasa_minhavida", mCasaMVida);
      formData.append("total_mensal_taxas", taxasTotal);
      formData.append("descricao_taxas", taxasDescricao);
      formData.append("aceita_permuta", aceitaPermuta);
      formData.append("descricao_permuta", permutaDescricao);
      formData.append("cep", buscarCEP);
      formData.append("pais", selectPais);
      formData.append("estado", selectEstado);
      formData.append("cidade", selectCidade);
      formData.append("bairro", selectBairro);
      formData.append("logradouro", logradouro);
      formData.append("numero", nLogradouro);
      formData.append("complemento", complemento);
      formData.append("numero_unidade", idUnidade);
      formData.append("andar", selectAndar);
      formData.append("unidade_por_andar", undPorAndar);
      formData.append("total_andar", totalAndares);
      formData.append("total_torres", totalTorres);
      formData.append("mostrar_andar_site", mostrarAndar);
      formData.append("mostrar_numero_unidade_site", mostrarNUnidade);
      formData.append("mostrar_logradouro_site", mostrarLogradouro);
      formData.append("mostrar_bairro_site", mostrarBairro);
      formData.append("mostrar_complemento_site", mostrarComplemento);
      formData.append("mostrar_numero_site", mostrarNumero);
      formData.append("mostrar_nome_condominio_site", mostrarNCondo);
      formData.append("mostrar_mapa_site", selectMapSite);
      formData.append("titulo", titleImovel);
      formData.append("descricao", descricaoImovel);
      formData.append("link_youtube", urlYT);
      formData.append("link_apresentacao", url360);
      formData.append("link_drive", link_drive);
      formData.append("id_caracteristicas", JSON.stringify(caracteristicas));
      formData.append("id_proximidades", JSON.stringify(proximidades));
      formData.append("mostrar_imovel_publi", selectImovelSite);
      formData.append("tarja_imovel_site_publi", textoTarja);
      formData.append("cor_tarja_publi", corTarja);
      formData.append("tem_condominio", selecteCond);
      formData.append("id_condominio", idcondominio);
      formData.append("id_user", id_user);
      formData.append("nome", this.nome);
      formData.append("email", this.email);

      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      // console.log('Aqui estão os dados enviados: ', formData);

      api.novoImovel(formData).then((res) => {

        if (res.status === 200) {

          this.msgSucesso = true;

          let id_progressao = this.id_progressao;


          api.editProgressImovel(id_progressao).then((res) => { })

          setTimeout(() => {
            this.msgSucesso = false;
            window.location.href = "/dashboard";

            this.$router.push({
              name: 'dashboard'
            });

          }, 3000);


        } else {
          this.msgError = true;
          this.autenticandoBtn = false;

          setTimeout(() => {
            this.msgError = false;
          }, 3000);
        }
      });
    },
    handleAnteriorInfo() {
      this.infoTab = true;
      this.comodosTab = false;
    },
    handleAnteriorComodos() {
      this.comodosTab = true;
      this.medidaTab = false;
    },
    handleAnteriorMedida() {
      this.medidaTab = true;
      this.precoTab = false;
    },
    handleAnteriorPreco() {
      this.caracteristicaTab = false;
      this.precoTab = true;
    },
    handleAnteriorCaracteristica() {
      this.caracteristicaTab = true;
      this.localizacaoTab = false;
    },
    handleAnteriorLocalizacao() {
      this.localizacaoTab = true;
      this.proximidadesTab = false;
    },
    handleAnteriorProximidade() {
      this.proximidadesTab = true;
      this.descricaoTab = false;
    },
    handleAnteriorDescricao() {
      this.complementoTab = false;
      this.descricaoTab = true;
    },
    handleAnteriorComplemento() {
      this.complementoTab = true;
      this.imagemTab = false;
    },
    handleAnteriorImagem() {
      this.publicacaoTab = false;
      this.imagemTab = true;
    },
  },


};
</script>