<template>
  <div class="wrapper">
    <SideBar />
    <div class="main">
      <NavBar />
      <main class="content">
        <div class="container-fluid p-0">
          <h1 class="h3 mb-3"><strong>Cadastro de usuários |</strong> Zonu</h1>
          <div class="row">
            <div class="col-md-12 col-xl-12">
              <div class="card mb-3">
                <div class="card-header">
                  <h5 class="card-title mb-0">
                    <i class="fa fa-user"></i> Crie um novo usuário
                  </h5>
                </div>
                <div class="card-body">
                  <div class="container-fluid">
                    <div class="row">
                      <div v-if="msgSuccess" class="alert alert-success mt-3" role="alert">
                        <i class="fa fa-check"></i> Conta criada com sucesso!
                        <span style="float: inline-end"><i class="fa fa-qrcode"></i></span>
                      </div>
                      <div v-if="msgErrorNull" class="alert alert-danger mt-3" role="alert">
                        <i class="fa fa-ban"></i> Por favor, não deixe nenhum
                        campo vazio!
                      </div>
                      <div>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                          <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab"
                              data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane"
                              aria-selected="true">
                              Team Zonu
                            </button>
                          </li>
                          <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab"
                              data-bs-target="#profile-tab-pane" type="button" role="tab"
                              aria-controls="profile-tab-pane" aria-selected="false">
                              Cliente Zonu
                            </button>
                          </li>
                          <li class="nav-item" role="presentation">
                            <button class="nav-link" id="convidado-tab" data-bs-toggle="tab"
                              data-bs-target="#convidado-tab-pane" type="button" role="tab"
                              aria-controls="convidado-tab-pane" aria-selected="false">
                              Convidados
                            </button>
                          </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                          <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                            aria-labelledby="home-tab" tabindex="0">
                            <div class="row mt-4">
                              <div v-if="iniciais" class="col-md-7">
                                <div class="avatar-null rounded me-1 mb-4" style="
                                    width: 128px;
                                    height: 128px;
                                    font-size: 40px;
                                    margin-left: auto;
                                    margin-right: auto;
                                    display: block;
                                    justify-content: center;
                                    text-align: center;
                                    padding-top: 30px;
                                  ">
                                  {{ iniciais }}
                                </div>
                              </div>

                              <label for="nome" class="mb-4"><small><strong><i class="fa fa-user"></i> Dados sobre o
                                    colaborador Zonu</strong></small></label>

                              <div class="form-group col-md-6">
                                <label for="nome"><small><strong>Nome</strong></small></label>
                                <input type="text" v-model="nome" class="form-control mt-2" id="nome"
                                  placeholder="Digite o nome" />
                              </div>
                              <div class="form-group col-md-6">
                                <label for="nome"><small><strong>Sobrenome</strong></small></label>
                                <input type="text" v-model="sobrenome" class="form-control mt-2" id="nome"
                                  placeholder="Digite o sobrenome" />
                              </div>
                              <div class="form-group col-md-12 mt-3">
                                <label for="nome"><small><strong>E-mail</strong></small></label>
                                <input type="email" v-model="email" class="form-control mt-2" id="nome"
                                  placeholder="Insira um e-mail válido" />
                              </div>
                              <div class="form-group col-md-6 mt-3">
                                <label for="nome"><small><strong>Senha</strong></small></label>
                                <input type="password" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="senha" :class="{
                                    'is-invalid':
                                      !senhaValida && senha.length > 0,
                                  }" @input="validarSenha" placeholder="Digite sua senha" />

                                <p class="text-warning mt-2" v-if="!senhaValida && senha.length > 0">
                                  <small>
                                    <i class="fa fa-bell"></i> Sua senha deve
                                    ter no mínimo 8 caracteres, número e uma
                                    letra MAIÚSCULA.
                                  </small>
                                </p>
                              </div>
                              <div class="form-group col-md-6 mt-3">
                                <label for="nome"><small><strong>Confirme a senha</strong></small></label>

                                <input type="password" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="confimSenha" placeholder="Digite a senha novamente" />

                                <p class="text-danger mt-2" v-if="confimSenha && !passwordsMatch">
                                  <i class="fa fa-ban"></i> As senhas não
                                  conferem!
                                </p>
                                <p class="text-success mt-2" v-if="confimSenha && passwordsMatch">
                                  <i class="fa fa-check"></i> As senhas conferem
                                </p>
                              </div>

                              <div class="form-group col-md-6 mt-3">
                                <label for="nome"><small><strong>Nivel de acesso</strong></small></label>
                                <select v-model="selectNivel" type="text" class="form-control mt-2" id="nome"
                                  placeholder="Digite seu nome">
                                  <option disabled selected>Escolha</option>
                                  <option v-for="item in niveis" :value="item.id_nivel">
                                    {{ item.label }}
                                  </option>
                                </select>
                              </div>

                              <div class="mt-4 d-grid gap-2 d-md-flex justify-content-md-end">
                                <button :disabled="autenticando" @click="handleSalvarUserZonu()" class="btn btn-success"
                                  type="button">
                                  {{ textoBotao }}
                                  <span v-if="autenticando" class="spinner-border spinner-border-sm"
                                    aria-hidden="true"></span>
                                  <span v-if="autenticando" class="visually-hidden">Aguarde...</span>
                                </button>
                              </div>

                              <h5 class="card-title mb-0">
                                <i class="fa fa-building"></i> Lista de usuários
                              </h5>
                            </div>
                            <div class="card-body">
                              <div v-if="msgSuccessEdit" class="alert alert-success mt-3" role="alert">
                                <i class="fa fa-check"></i> Status atualizado
                                com sucesso!
                              </div>

                              <div v-if="msgSuccessDelete" class="alert alert-success mt-3" role="alert">
                                <i class="fa fa-check"></i> Usuário Excluído com
                                sucesso!
                              </div>

                              <div v-if="msgMaxUsers" class="alert alert-danger mt-3" role="alert">
                                <i class="fa fa-exclamation-triangle"></i>
                                {{ msgMaxUsers }}
                              </div>

                              <div class="container-fluid">
                                <div class="row">
                                  <table class="table">
                                    <thead>
                                      <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">E-mail</th>
                                        <th scope="col">Telefone</th>
                                        <th scope="col">Nivel</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Empresa</th>
                                        <th scope="col">Ação</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <TableRowList v-for="item in clientesOnCurrentPage" :key="item.id_user"
                                        :item="item" />
                                    </tbody>
                                  </table>

                                  <div class="d-grid mt-3 mb-3 gap-2 d-md-flex justify-content-md-end">
                                    <button class="btn btn-dark btn-sm" @click="previousPageCliente()"
                                      :disabled="currentPageCliente <= 1">
                                      Anterior
                                    </button>
                                    <button class="btn btn-dark btn-sm" style="margin-right: 3% !important"
                                      @click="nextPageCliente()" :disabled="currentPageCliente >= totalPagesClientes
                                        ">
                                      Proximo
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab"
                            tabindex="0">
                            <p v-if="msgCnpjActive" class="text-danger mt-2">
                              <i class="fa fa-circle-exclamation"></i> Desculpe,
                              mas já temos esse CNPJ em nossa base de dados.
                              Volte e insira outro.
                            </p>

                            <div v-if="emailValid" class="alert alert-warning alert-dismissible fade show" role="alert">
                              <strong><i class="fa fa-bell"></i> Atenção!</strong>
                              Já temos esse E-mail cadastrado.
                            </div>

                            <div v-if="erro" class="alert alert-danger alert-dismissible fade show" role="alert">
                              <strong><i class="fa fa-ban"></i> Desculpe!</strong>
                              Houve um problema ao cadastrar, tente novamente!
                            </div>

                            <div class="row mt-4">
                              <div class="form-group col-md-6 mt-3 mb-3">
                                <span><small><strong>Escolha o tipo do cliente</strong></small></span>
                                <select v-model="selectNivelCliente" type="text" class="form-control mt-2" id="nome">
                                  <option value="" selected disabled hidden>Escolha</option>
                                  <option value="Imobiliaria">Imobiliária</option>
                                  <option value="Construtora">Construtora</option>
                                  <option value="Corretor">Corretor</option>
                                  <option value="PessoaFisica">Pessoa Fisíca</option>
                                </select>
                              </div>


                              <label for="nome" class="mb-4"><small><strong><i class="fa fa-user"></i> Dados sobre o
                                    operador da conta</strong></small></label>

                              <div class="form-group col-md-6">
                                <label for="nome"><small><strong>Nome</strong></small></label>
                                <input type="text" v-model="nomeCliente" class="form-control mt-2" id="nome"
                                  placeholder="Digite o nome" />
                              </div>
                              <div class="form-group col-md-6">
                                <label for="sobrenome"><small><strong>Sobrenome</strong></small></label>
                                <input type="text" v-model="sobrenomeCliente" class="form-control mt-2" id="nome"
                                  placeholder="Digite o sobrenome" />
                              </div>
                              <div class="form-group col-md-12 mt-3"
                                v-if="selectNivelCliente == 'Imobiliaria' || selectNivelCliente == 'Construtora'">
                                <label for="email"><small><strong>E-mail</strong></small></label>
                                <input type="email" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="emailCliente" placeholder="Digite um e-mail válido" />

                                <p v-if="emailValid" class="text-danger mt-2">
                                  <i class="fa fa-circle-exclamation"></i>
                                  Por favor, forneça um e-mail válido.
                                </p>
                              </div>
                              <div class="form-group col-md-6 mt-3"
                                v-if="selectNivelCliente == '' || selectNivelCliente == 'Corretor' || selectNivelCliente == 'PessoaFisica'">
                                <label for="email"><small><strong>E-mail</strong></small></label>
                                <input type="email" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="emailCliente" placeholder="Digite um e-mail válido" />

                                <p v-if="emailValid" class="text-danger mt-2">
                                  <i class="fa fa-circle-exclamation"></i>
                                  Por favor, forneça um e-mail válido.
                                </p>
                              </div>
                              <div class="form-group col-md-6 mt-3"
                                v-if="selectNivelCliente == '' || selectNivelCliente == 'Corretor' || selectNivelCliente == 'PessoaFisica'">
                                <label for="cpf"><small><strong>CPF</strong></small></label>
                                <input type="text" @input="aplicaMascaraCPFCli" required v-if="!mostrarSkeleton"
                                  class="form-control" v-model="cpfCliente" placeholder="Digite um e-mail válido" />

                                <p v-if="emailValid" class="text-danger mt-2">
                                  <i class="fa fa-circle-exclamation"></i>
                                  Por favor, forneça um e-mail válido.
                                </p>
                              </div>
                              <div class="form-group col-md-6 mt-3">
                                <label for="senha"><small><strong>Senha</strong></small></label>
                                <input type="password" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="senhaCliente" :class="{
                                    'is-invalid':
                                      !senhaValidaCli && senhaCliente.length > 0,
                                  }" @input="validarSenhaCli" placeholder="Digite sua senha" />

                                <p class="text-warning mt-2" v-if="!senhaValidaCli && senhaCliente.length > 0">
                                  <small>
                                    <i class="fa fa-bell"></i> Sua senha deve
                                    ter no mínimo 8 caracteres, número e uma
                                    letra MAIÚSCULA.
                                  </small>
                                </p>
                              </div>
                              <div class="form-group col-md-6 mt-3">
                                <label for="confSenha"><small><strong>Confirme a senha</strong></small></label>
                                <input type="password" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="confimSenhaCliente" placeholder="Digite a senha novamente" />

                                <p class="text-danger mt-2" v-if="confimSenhaCliente && !passwordsMatchCli">
                                  <i class="fa fa-ban"></i> As senhas não
                                  conferem!
                                </p>
                                <p class="text-success mt-2" v-if="confimSenhaCliente && passwordsMatchCli">
                                  <i class="fa fa-check"></i> As senhas conferem
                                </p>
                              </div>



                              <div class="form-group col-md-6 mt-3"
                                v-if="selectNivelCliente == 'Imobiliaria' || selectNivelCliente == 'Construtora'">
                                <label for="nome"><small><strong>CNPJ</strong></small></label>
                                <input type="text" v-model="cnpjCliente" class="form-control mt-2" id="nome"
                                  placeholder="00.000.000/0001-00" @input="aplicaMascaraCNPJCli" />
                              </div>
                              <div class="form-group col-md-6 mt-3"
                                v-if="selectNivelCliente == 'Imobiliaria' || selectNivelCliente == 'Construtora'">
                                <label for="nome"><small><strong>Razão Social</strong></small></label>
                                <input type="text" v-model="razao_socialCliente" disabled class="form-control mt-2"
                                  id="nome" placeholder="..." />
                              </div>

                              <div v-if="msgErrorCnpjCli" class="mt-2 alert alert-danger alert-dismissible fade show"
                                role="alert">
                                <strong><i class="fa fa-ban"></i>
                                  Lamentamos...</strong>
                                Seu CNPJ não é válido, tenho outro.
                              </div>

                              <div class="form-group col-md-3 mt-3">
                                <label for="nome"><small><strong>Telefone</strong></small></label>
                                <input v-model="telefoneCliente" type="text" @input="aplicaMascaraTelefoneCli"
                                  class="form-control mt-2" id="nome" placeholder="(00) 90000-0000" />
                              </div>
                              <div class="form-group col-md-3 mt-3">
                                <label for="nome"><small><strong>CEP</strong></small></label>
                                <input type="text" required v-if="!mostrarSkeleton" @input="aplicaMascaraCEPCli"
                                  class="form-control mt-2" v-model="buscarCEPCliente" placeholder="000000-000" />
                                <p v-if="msgErrorCep" class="text-danger mt-2">
                                  <small><i class="fa fa-check"></i> Cep
                                    inválido</small>
                                </p>
                              </div>
                              <div class="form-group col-md-6 mt-3">
                                <label for="nome"><small><strong>Endereço</strong></small></label>
                                <input type="text" disabled v-model="logradouroCliente" class="form-control mt-2"
                                  id="nome" placeholder="Aguardando" />
                              </div>
                              <div class="form-group col-md-9 mt-3">
                                <label for="nome"><small><strong>Complemento</strong></small></label>
                                <input type="text" v-model="complementoCliente" class="form-control mt-2" id="nome"
                                  placeholder="Digite um complemento..." />
                              </div>
                              <div class="form-group col-md-3 mt-3">
                                <label for="nome"><small><strong>Número</strong></small></label>
                                <input type="text" v-model="numeroCliente" class="form-control mt-2" id="nome"
                                  placeholder="00" />
                              </div>
                              <div class="form-group col-md-4 mt-3">
                                <label for="nome"><small><strong>Cidade</strong></small></label>
                                <input type="text" disabled v-model="cidadeCliente" class="form-control mt-2" id="nome"
                                  placeholder="Aguardando" />
                              </div>
                              <div class="form-group col-md-4 mt-3">
                                <label for="nome"><small><strong>Estado</strong></small></label>
                                <input type="text" disabled v-model="estadoCliente" class="form-control mt-2" id="nome"
                                  placeholder="Aguardando" />
                              </div>
                              <div class="form-group col-md-4 mt-3">
                                <label for="nome"><small><strong>Bairro</strong></small></label>
                                <input type="text" disabled v-model="bairroCliente" class="form-control mt-2" id="nome"
                                  placeholder="Aguardando" />
                              </div>



                              <div v-if="msgErrorCliente" class="alert alert-danger mt-3" role="alert">
                                <i class="fa fa-ban"></i> Erro ao salvar cliente, por favor preencha os campos
                                corretamente
                              </div>

                              <div v-if="msgErrorSelectNull" class="alert alert-danger mt-3" role="alert">
                                <i class="fa fa-ban"></i> Selecione o tipo do cliente
                              </div>

                              <div class="mt-4 d-grid gap-2 d-md-flex justify-content-md-end">
                                <button :disabled="autenticando" @click="handleSalvarClienteZonu()"
                                  class="btn btn-success" type="button">
                                  {{ textoBotaoCliente }}
                                  <span v-if="autenticando" class="spinner-border spinner-border-sm"
                                    aria-hidden="true"></span>
                                  <span v-if="autenticando" class="visually-hidden">Aguarde...</span>
                                </button>
                              </div>
                            </div>
                          </div>

                          <div class="tab-pane fade" id="convidado-tab-pane" role="tabpanel"
                            aria-labelledby="convidado-tab" tabindex="0">
                            <div class="row mt-2">
                              <div class="form-group col-md-6 mt-3 mb-3">
                                <span><small><strong>Escolha o tipo do convidado</strong></small></span>
                                <select v-model="selectNivelCon" type="text" class="form-control mt-2" id="nome">
                                  <option value="" selected disabled hidden>Escolha</option>
                                  <option value="Imobiliaria">Imobiliária</option>
                                  <option value="Corretor">Corretor</option>
                                </select>
                              </div>
                              <label for="nome" class="mb-4"><small><strong><i class="fa fa-user"></i> {{ selectNivelCon
                                ==
                                "" ? "Selecione um tipo de convidado" : selectNivelCon == "Imobiliaria" ? `Dados
                                    sobre a ${selectNivelCon}` : `Dados sobre o ${selectNivelCon}`
                                    }}</strong></small></label>

                              <div class="form-group col-md-6">
                                <label for="nome"><small><strong>Nome</strong></small></label>
                                <input type="text" v-model="nomeCon" class="form-control mt-2" id="nome"
                                  placeholder="Digite o nome" />
                              </div>
                              <div class="form-group col-md-6">
                                <label for="nome"><small><strong>Sobrenome</strong></small></label>
                                <input type="text" v-model="sobrenomeCon" class="form-control mt-2" id="nome"
                                  placeholder="Digite o sobrenome" />
                              </div>
                              <div class="form-group col-md-12 mt-3"
                                v-if="selectNivelCon == '' || selectNivelCon == 'Imobiliaria'">
                                <label for="nome"><small><strong>E-mail</strong></small></label>
                                <input type="email" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="emailCon" placeholder="Digite um e-mail válido" />

                                <p v-if="emailValidCon" class="text-danger mt-2">
                                  <i class="fa fa-circle-exclamation"></i>
                                  Por favor, forneça um e-mail válido.
                                </p>
                              </div>

                              <div class="form-group col-md-6 mt-3" v-if="selectNivelCon == 'Corretor'">
                                <label for="nome"><small><strong>E-mail</strong></small></label>
                                <input type="email" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="emailCon" placeholder="Digite um e-mail válido" />

                                <p v-if="emailValidCon" class="text-danger mt-2">
                                  <i class="fa fa-circle-exclamation"></i>
                                  Por favor, forneça um e-mail válido.
                                </p>
                              </div>

                              <div class="form-group col-md-6 mt-3" v-if="selectNivelCon == 'Corretor'">
                                <label for="nome"><small><strong>CPF</strong></small></label>
                                <input type="text" v-model="cpfCon" class="form-control" id="nome" placeholder="..."
                                  @input="aplicaMascaraCPFCon" />
                              </div>

                              <div class="form-group col-md-6 mt-3">
                                <label for="nome"><small><strong>Senha</strong></small></label>
                                <input type="password" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="senhaCon" :class="{
                                    'is-invalid':
                                      !senhaValidaCon && senhaCon.length > 0,
                                  }" @input="validarSenhaCon" placeholder="Digite sua senha" />

                                <p class="text-warning mt-2" v-if="!senhaValidaCon && senhaCon.length > 0">
                                  <small>
                                    <i class="fa fa-bell"></i> Sua senha deve
                                    ter no mínimo 8 caracteres, número e uma
                                    letra MAIÚSCULA.
                                  </small>
                                </p>
                              </div>
                              <div class="form-group col-md-6 mt-3">
                                <label for="nome"><small><strong>Confirme a senha</strong></small></label>
                                <input type="password" required v-if="!mostrarSkeleton" class="form-control"
                                  v-model="confimSenhaCon" placeholder="Digite a senha novamente" />

                                <p class="text-danger mt-2" v-if="confimSenhaCon && !passwordsMatchCon">
                                  <i class="fa fa-ban"></i> As senhas não
                                  conferem!
                                </p>
                                <p class="text-success mt-2" v-if="confimSenhaCon && passwordsMatchCon">
                                  <i class="fa fa-check"></i> As senhas conferem
                                </p>
                              </div>

                              <!-- <hr class="mt-4" />
                              <label for="nome"><small><strong><i class="fa fa-building"></i> Dados sobre
                                    a empresa</strong></small></label> -->

                              <div class="form-group col-md-6 mt-3" v-if="selectNivelCon == 'Imobiliaria'">
                                <label for=" nome"><small><strong>CNPJ</strong></small></label>
                                <input type="text" v-model="cnpjCon" class="form-control mt-2" id="nome"
                                  placeholder="00.000.000/0001-00" @input="aplicaMascaraCNPJCon" />
                              </div>
                              <div class="form-group col-md-6 mt-3" v-if="selectNivelCon == 'Imobiliaria'">
                                <label for="nome"><small><strong>Razão Social</strong></small></label>
                                <input type="text" v-model="razao_socialCon" disabled class="form-control mt-2"
                                  id="nome" placeholder="..." />
                              </div>
                              <div v-if="msgErrorCnpj" class="mt-2 alert alert-danger alert-dismissible fade show"
                                role="alert">
                                <strong><i class="fa fa-ban"></i>
                                  Lamentamos...</strong>
                                Seu CNPJ não é válido, tenho outro.
                              </div>

                              <div class="form-group col-md-3 mt-3">
                                <label for="nome"><small><strong>Telefone</strong></small></label>
                                <input v-model="telefoneCon" type="text" @input="aplicaMascaraTelefoneCon"
                                  class="form-control mt-2" id="nome" placeholder="(00) 90000-0000" />
                              </div>
                              <div class="form-group col-md-3 mt-3">
                                <label for="nome"><small><strong>CEP</strong></small></label>
                                <input type="text" required v-if="!mostrarSkeleton" @input="aplicaMascaraCEPCon"
                                  class="form-control mt-2" v-model="buscarCEPCon" placeholder="000000-000" />
                                <p v-if="msgErrorCep" class="text-danger mt-2">
                                  <small><i class="fa fa-check"></i> Cep
                                    inválido</small>
                                </p>
                              </div>
                              <div class="form-group col-md-6 mt-3">
                                <label for="nome"><small><strong>Endereço</strong></small></label>
                                <input type="text" disabled v-model="logradouroCon" class="form-control mt-2" id="nome"
                                  placeholder="Aguardando" />
                              </div>

                              <div class="form-group col-md-3 mt-3">
                                <label for="nome"><small><strong>Número</strong></small></label>
                                <input type="text" v-model="numeroCon" class="form-control mt-2" id="nome"
                                  placeholder="00" />
                              </div>

                              <div class="form-group col-md-9 mt-3">
                                <label for="nome"><small><strong>Complemento</strong></small></label>
                                <input type="text" v-model="complementoCon" class="form-control mt-2" id="nome"
                                  placeholder="Digite um complemento..." />
                              </div>

                              <div class="form-group col-md-4 mt-3">
                                <label for="nome"><small><strong>Bairro</strong></small></label>
                                <input type="text" disabled v-model="bairroCon" class="form-control mt-2" id="nome"
                                  placeholder="Aguardando" />
                              </div>
                              <div class="form-group col-md-4 mt-3">
                                <label for="nome"><small><strong>Cidade</strong></small></label>
                                <input type="text" disabled v-model="cidadeCon" class="form-control mt-2" id="nome"
                                  placeholder="Aguardando" />
                              </div>
                              <div class="form-group col-md-4 mt-3">
                                <label for="nome"><small><strong>Estado</strong></small></label>
                                <input type="text" disabled v-model="estadoCon" class="form-control mt-2" id="nome"
                                  placeholder="Aguardando" />
                              </div>

                              <div v-if="msgErrorCon" class="alert alert-danger mt-3" role="alert">
                                <i class="fa fa-ban"></i> Erro ao salvar convidado, por favor preencha os campos
                                corretamente
                              </div>

                              <div v-if="msgErrorSelectNull" class="alert alert-danger mt-3" role="alert">
                                <i class="fa fa-ban"></i> Selecione o tipo do convidado
                              </div>

                              <div class="mt-4 d-grid gap-2 d-md-flex justify-content-md-end">
                                <button :disabled="autenticando" @click="handleSalvarUserConvidadosZonu()"
                                  class="btn btn-success" type="button">
                                  {{ textoBotaoCon }}
                                  <span v-if="autenticando" class="spinner-border spinner-border-sm"
                                    aria-hidden="true"></span>
                                  <!-- <span v-if="autenticando" class="visually-hidden">Aguarde...</span> -->
                                </button>
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
import SideBar from "../../../components/sidebar/index.vue";
import NavBar from "../../../components/navbar/index.vue";
import Footer from "../../../components/footer/index.vue";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import _ from "lodash";
import TableRowList from "@/components/usersListView/TableRowList.vue";

import api from "../../../../service/api/index.js";
import apiAuth from "../../../../service/api/auth/index";
export default {
  name: "UsuariosView",
  data() {
    return {
      tabCliente: false,
      tabZonu: false,
      selectTab: false,

      niveis: [],

      msgErrorCnpj: false,
      msgSuccessCnpj: false,
      msgSuccessSenha: false,
      msgErrorSenha: false,
      campoNullError: false,
      msgErrorCep: false,
      msgCnpjActive: false,

      msgSuccess: true,
      senhaValid: false,
      emailValid: false,

      cnpj: "",
      razao_social: "",
      nome: "",
      sobrenome: "",
      email: "",
      senha: "",
      confimSenha: "",
      telefone: "",
      buscarCEP: "",
      logradouro: "",
      complemento: "",
      numero: "",
      cidade: "",
      estado: "",
      bairro: "",
      selectNivel: "",
      selectPlano: "",
      msgSuccess: false,
      msgErrorNull: false,

      textoBotao: "Criar novo usuário",
      textoBotaoEmpresa: "Criar uma nova construtora",
      autenticando: false,

      listUsers: [],
      perPageCliente: 5,
      currentPageCliente: 1,
      totalPagesClientes: 0,

      msgSuccessEdit: false,
      msgSuccessDelete: false,

      searchCliente: "",

      senhaValida: true,

      cnpjCon: "",
      razao_socialCon: "",
      nomeCon: "",
      sobrenomeCon: "",
      emailCon: "",
      senhaCon: "",
      confimSenhaCon: "",
      telefoneCon: "",
      buscarCEPCon: "",
      logradouroCon: "",
      cpfCon: "",
      numeroCon: "",
      complementoCon: "",
      cidadeCon: "",
      estadoCon: "",
      bairroCon: "",
      textoBotaoCon: "Criar convidado",
      msgErrorCon: false,
      msgErrorSelectNull: false,

      emailValidCon: false,
      senhaValidaCon: true,

      selectNivelCon: "",
      selectNivelCliente: "",

      nomeCliente: "",
      sobrenomeCliente: "",
      emailCliente: "",
      senhaCliente: "",
      confimSenhaCliente: "",
      telefoneCliente: "",
      buscarCEPCliente: "",
      logradouroCliente: "",
      cnpjCliente: "",
      razao_socialCliente: "",
      cpfCliente: "",
      complementoCliente: "",
      numeroCliente: "",
      cidadeCliente: "",
      estadoCliente: "",
      bairroCliente: "",
      senhaValidaCli: true,
      emailValidCli: false,
      textoBotaoCliente: "Criar novo Cliente",
      msgErrorCliente: false
    };
  },
  components: {
    SideBar,
    NavBar,
    Footer,
    TableRowList,
  },
  watch: {
    cnpj(newVal) {
      this.debouncedCheckCNPJ();
    },
    buscarCEP(newVal, oldVal) {
      if (newVal.length === 9 && newVal !== oldVal) {
        this.debouncedCheckCEP();
      }
    },
    cnpjCon(newVal) {
      this.debouncedCheckCNPJCon();
    },
    buscarCEPCon(newVal, oldVal) {
      if (newVal.length === 9 && newVal !== oldVal) {
        this.debouncedCheckCEPCon();
      }
    },
    cnpjCliente(newVal) {
      this.debouncedCheckCNPJCli();
    },
    buscarCEPCliente(newVal, oldVal) {
      if (newVal.length === 9 && newVal !== oldVal) {
        this.debouncedCheckCEPCli();
      }
    },
  },
  created() {
    this.debouncedCheckCNPJ = _.debounce(this.consultarCNPJ, 100);
    this.debouncedCheckCEP = _.debounce(this.consultarCEP, 100);

    this.debouncedCheckCNPJCon = _.debounce(this.consultarCNPJCon, 100);
    this.debouncedCheckCEPCon = _.debounce(this.consultarCEPCon, 100);

    this.debouncedCheckCNPJCli = _.debounce(this.consultarCNPJCli, 100);
    this.debouncedCheckCEPCli = _.debounce(this.consultarCEPCli, 100);

    this.fetchUsuarios();
  },
  computed: {
    clientesOnCurrentPage() {
      const startIndex = (this.currentPageCliente - 1) * this.perPageCliente;
      const endIndex = startIndex + this.perPageCliente;
      return this.listUsers
        .filter((usuario) => {
          return usuario.nome
            .toLowerCase()
            .includes(this.searchCliente.toLowerCase());
        })
        .slice(startIndex, endIndex);
    },

    totalPagesClientes() {
      return Math.ceil(
        this.listUsers.filter((usuario) => {
          this.currentPageCliente = 1;
          return usuario.nome
            .toLowerCase()
            .includes(this.searchCliente.toLowerCase());
        }).length / this.perPageCliente
      );
    },
    passwordsMatch() {
      return this.senha === this.confimSenha;
    },
    passwordsMatchCon() {
      return this.senhaCon === this.confimSenhaCon;
    },
    passwordsMatchCli() {
      return this.senhaCliente === this.confimSenhaCliente;
    },
    iniciais() {
      let inicialNome = this.nome.charAt(0);
      let inicialSobrenome = this.sobrenome.charAt(0);
      return `${inicialNome}${inicialSobrenome}`.toUpperCase().trim();
    },
  },
  mounted() {
    setTimeout(() => {
      this.mostrarSkeleton = false;
    }, 2000);

    let token = localStorage.getItem("token");
    this.token = token;
    let decode = jwtDecode(token);

    this.tabZonu = true;
    this.selectTab = true;

    this.fetchUsuarios();
    this.fetchNivel();
  },

  methods: {
    previousPageCliente() {
      if (this.currentPageCliente > 1) {
        this.currentPageCliente--;
      }
    },
    nextPageCliente() {
      if (this.currentPageCliente < this.totalPagesClientes) {
        this.currentPageCliente++;
      }
    },
    registerUser(newUser, listUsers) {
      const currentUserCount = listUsers.length;
      const permissionCheck = canRegisterUser(newUser, currentUserCount);

      if (!permissionCheck.allowed) {
        console.log(permissionCheck.message);
        return;
      }

      listUsers.push(newUser);
      console.log("Usuário cadastrado com sucesso!");
    },
    canRegisterUser(user, currentUserCount) {
      switch (user.id_nivel) {
        case 1:
          // Administrador pode cadastrar quantos quiser
          return { allowed: true };

        case 3:
          // Construtora não pode cadastrar ninguém
          return {
            allowed: false,
            message: "Construtoras não podem cadastrar novos usuários.",
          };

        case 4:
          // Corretor tem acesso único e não pode cadastrar ninguém
          return {
            allowed: false,
            message: "Corretores não podem cadastrar novos usuários.",
          };

        case 2:
          // Imobiliaria pode cadastrar de acordo com o plano
          if (user.id_plano === 1 && currentUserCount >= 5) {
            return {
              allowed: false,
              message: "Plano imobiliária 1 permite cadastrar até 5 usuários.",
            }; //plano 1 da imobiliaria que permite cadastrar apenas 5 usuarios
          } else if (user.id_plano === 2 && currentUserCount >= 10) {
            return {
              allowed: false,
              message: "Plano imobiliária 2 permite cadastrar até 10 usuários.",
            }; //plano 2 da imobiliaria que permite cadastrar apenas 5 usuarios
          }
          return { allowed: true };

        default:
          // Caso padrão para outros tipos de usuário
          return {
            allowed: false,
            message:
              "Permissão desconhecida. Não é possível cadastrar novos usuários.",
          };
      }
    },
    handleSalvarUserZonu() {
      this.textoBotao = "Salvando...";
      this.autenticando = true;

      let nome = this.nome;
      let sobrenome = this.sobrenome;
      let email = this.email;
      let senha = this.senha;
      let selectNivel = this.selectNivel;
      console.log(selectNivel)
      // let selectPlano = this.selectPlano;

      // Verificar a quantidade máxima de usuários permitidos
      const currentUserCount = this.listUsers.length;
      const permissionCheck = this.canRegisterUser(
        { id_nivel: selectNivel },
        currentUserCount
      );

      if (!permissionCheck.allowed) {
        this.msgMaxUsers = permissionCheck.message;
        this.textoBotao = "Criar novo usuário";
        this.autenticando = false;
        return;
      }

      if (
        nome !== "" &&
        sobrenome !== "" &&
        email !== "" &&
        senha !== "" &&
        selectNivel
      ) {
        if (selectNivel === 1) {
          api
            .cadastroAdmin(nome, sobrenome, email, senha, selectNivel)
            .then((res) => {
              if (res.status == 202) {
                this.nome = "";
                this.sobrenome = "";
                this.email = "";
                this.senha = "";
                this.confimSenha = "";
                this.selectNivel = "";
                this.msgSuccess = true;
                this.textoBotao = "Criar novo usuário";
                this.autenticando = false;

                this.fetchUsuarios();
              }
            });
        }

        if (selectNivel === 2) {
          api
            .cadastroEquipe(nome, sobrenome, email, senha, selectNivel)
            .then((res) => {
              if (res.status == 202) {
                this.nome = "";
                this.sobrenome = "";
                this.email = "";
                this.senha = "";
                this.confimSenha = "";
                this.selectNivel = "";
                this.msgSuccess = true;
                this.textoBotao = "Criar novo usuário";
                this.autenticando = false;

                this.fetchUsuarios();
              }
            });
        }
      } else {
        this.msgErrorNull = true;
        this.textoBotao = "Criar novo usuário";
        this.autenticando = false;

        setTimeout(() => {
          this.msgErrorNull = false;
        }, 3000);
      }
    },

    handleSalvarClienteZonu() {
      let selectNivel = this.selectNivelCliente;

      if (selectNivel !== "") {
        if (selectNivel == "Corretor") {
          this.textoBotaoCliente = "Salvando...";
          this.autenticando = true;

          let nome = this.nomeCliente;
          let sobrenome = this.sobrenomeCliente;
          let email = this.emailCliente;
          let senha = this.senhaCliente;
          let cpf = this.cpfCliente
          let idPlano = 3
          let telefone = this.telefoneCliente
          let cep = this.buscarCEPCliente
          let endereco = this.logradouroCliente
          let complemento = this.complementoCliente
          let numero = this.numeroCliente
          let cidade = this.cidadeCliente
          let estado = this.estadoCliente
          let bairro = this.bairroCliente

          if (
            nome !== "" &&
            sobrenome !== "" &&
            email !== "" &&
            senha !== "" &&
            cpf !== "" &&
            telefone !== "" &&
            cep !== ""
          ) {
            apiAuth
              .cadastroCorretor(nome, sobrenome, email, senha, cpf, idPlano, telefone, cep, endereco, complemento, numero, cidade, estado, bairro)
              .then((res) => {
                if (res.status == 202) {
                  this.selectNivelCliente = "";
                  this.nomeCliente = "";
                  this.sobrenomeCliente = "";
                  this.emailCliente = "";
                  this.senhaCliente = "";
                  this.confimSenhaCliente = "";
                  this.cpfCliente = "";
                  this.telefoneCliente = "";
                  this.buscarCEPCliente = "";
                  this.logradouroCliente = "";
                  this.numeroCliente = "";
                  this.cidadeCliente = "";
                  this.estadoCliente = "";
                  this.bairroCliente = "";

                  this.msgSuccess = true;
                  this.autenticando = false;

                  setTimeout(() => {
                    this.msgSuccess = false;
                    this.textoBotaoCliente = "Criar novo cliente";
                  }, 3000);

                  this.fetchUsuarios();
                } else {
                  this.msgErrorCliente = true
                  this.autenticando = false;
                  this.textoBotaoCliente = "Criar novo cliente";

                  setTimeout(() => {
                    this.msgErrorCliente = false;
                  }, 3000);
                }
              });
          } else {
            this.msgErrorNull = true
            this.textoBotaoCliente = "Criar novo cliente";
            this.autenticando = false
            setTimeout(() => {
              this.msgErrorNull = false
            }, 3000);
          }
        } else if (selectNivel == "Imobiliaria") {
          this.textoBotaoCliente = "Salvando...";
          this.autenticando = true;

          let nome = this.nomeCliente
          let sobrenome = this.sobrenomeCliente;
          let email = this.emailCliente
          let senha = this.senhaCliente
          let razaoSocial = this.razao_socialCliente
          let cnpj = this.cnpjCliente
          let idPlano = 2
          let telefone = this.telefoneCliente
          let cep = this.buscarCEPCliente
          let endereco = this.logradouroCliente
          let complemento = this.complementoCliente
          let numero = this.numeroCliente
          let cidade = this.cidadeCliente
          let estado = this.estadoCliente
          let bairro = this.bairroCliente

          if (
            nome !== "" &&
            sobrenome !== "" &&
            email !== "" &&
            senha !== "" &&
            cnpj !== "" &&
            telefone !== "" &&
            cep !== ""
          ) {
            apiAuth
              .cadastroImobiliaria(nome, sobrenome, email, senha, razaoSocial, cnpj, idPlano, telefone, cep, endereco, complemento, numero, cidade, estado, bairro)
              .then((res) => {
                if (res.status == 202) {
                  this.selectNivelCliente = "";
                  this.nomeCliente = "";
                  this.sobrenomeCliente = "";
                  this.emailCliente = "";
                  this.senhaCliente = "";
                  this.confimSenhaCliente = "";
                  this.razao_socialCliente = "";
                  this.cnpjCliente = "";
                  this.telefoneCliente = "";
                  this.buscarCEPCliente = "";
                  this.logradouroCliente = "";
                  this.numeroCliente = "";
                  this.cidadeCliente = "";
                  this.estadoCliente = "";
                  this.bairroCliente = "";

                  this.msgSuccess = true;
                  this.autenticando = false;

                  setTimeout(() => {
                    this.msgSuccess = false;
                    this.textoBotaoCliente = "Criar novo cliente";
                  }, 3000);

                  this.fetchUsuarios();
                } else {
                  this.msgErrorCliente = true
                  this.autenticando = false;
                  this.textoBotaoCliente = "Criar novo cliente";

                  setTimeout(() => {
                    this.msgErrorCliente = false;
                  }, 3000);
                }
              });
          } else {
            this.msgErrorNull = true
            this.textoBotaoCliente = "Criar novo cliente";
            this.autenticando = false
            setTimeout(() => {
              this.msgErrorNull = false
            }, 3000);
          }
        } else if (selectNivel == "PessoaFisica") {
          this.textoBotaoCliente = "Salvando...";
          this.autenticando = true;

          let nome = this.nomeCliente;
          let sobrenome = this.sobrenomeCliente;
          let email = this.emailCliente;
          let senha = this.senhaCliente;
          let cpf = this.cpfCliente
          let idPlano = 3
          let telefone = this.telefoneCliente
          let cep = this.buscarCEPCliente
          let endereco = this.logradouroCliente
          let complemento = this.complementoCliente
          let numero = this.numeroCliente
          let cidade = this.cidadeCliente
          let estado = this.estadoCliente
          let bairro = this.bairroCliente

          if (
            nome !== "" &&
            sobrenome !== "" &&
            email !== "" &&
            senha !== "" &&
            cpf !== "" &&
            telefone !== "" &&
            cep !== ""
          ) {
            apiAuth.cadastroPessoaFisica(
              nome,
              sobrenome,
              email,
              senha,
              cpf,
              idPlano,
              telefone,
              cep,
              endereco,
              complemento,
              numero,
              cidade,
              estado,
              bairro
            ).then((res) => {
              if (res.status == 202) {
                this.selectNivelCliente = "";
                this.nomeCliente = "";
                this.sobrenomeCliente = "";
                this.emailCliente = "";
                this.senhaCliente = "";
                this.confimSenhaCliente = "";
                this.cpfCliente = "";
                this.telefoneCliente = "";
                this.buscarCEPCliente = "";
                this.logradouroCliente = "";
                this.numeroCliente = "";
                this.cidadeCliente = "";
                this.estadoCliente = "";
                this.bairroCliente = "";

                this.msgSuccess = true;
                this.autenticando = false;

                setTimeout(() => {
                  this.msgSuccess = false;
                  this.textoBotaoCliente = "Criar novo cliente";
                }, 3000);

                this.fetchUsuarios();
              } else {
                this.msgErrorCliente = true
                this.autenticando = false;
                this.textoBotaoCliente = "Criar novo cliente";

                setTimeout(() => {
                  this.msgErrorCliente = false;
                }, 3000);
              }
            })
          } else {
            this.msgErrorNull = true
            this.textoBotaoCliente = "Criar novo cliente";
            this.autenticando = false
            setTimeout(() => {
              this.msgErrorNull = false
            }, 3000);
          }

        } else if (selectNivel == "Construtora") {
          this.textoBotaoCliente = "Salvando...";
          this.autenticando = true;

          let nome = this.nomeCliente
          let sobrenome = this.sobrenomeCliente;
          let email = this.emailCliente
          let senha = this.senhaCliente
          let razaoSocial = this.razao_socialCliente
          let cnpj = this.cnpjCliente
          let idPlano = 4
          let telefone = this.telefoneCliente
          let cep = this.buscarCEPCliente
          let endereco = this.logradouroCliente
          let complemento = this.complementoCliente
          let numero = this.numeroCliente
          let cidade = this.cidadeCliente
          let estado = this.estadoCliente
          let bairro = this.bairroCliente

          if (
            nome !== "" &&
            sobrenome !== "" &&
            email !== "" &&
            senha !== "" &&
            cnpj !== "" &&
            telefone !== "" &&
            cep !== ""
          ) {
            apiAuth
              .cadastroConstrutora(nome, sobrenome, email, senha, razaoSocial, cnpj, idPlano, telefone, cep, endereco, complemento, numero, cidade, estado, bairro)
              .then((res) => {
                if (res.status == 202) {
                  this.selectNivelCliente = "";
                  this.nomeCliente = "";
                  this.sobrenomeCliente = "";
                  this.emailCliente = "";
                  this.senhaCliente = "";
                  this.confimSenhaCliente = "";
                  this.razao_socialCliente = "";
                  this.cnpjCliente = "";
                  this.telefoneCliente = "";
                  this.buscarCEPCliente = "";
                  this.logradouroCliente = "";
                  this.numeroCliente = "";
                  this.cidadeCliente = "";
                  this.estadoCliente = "";
                  this.bairroCliente = "";

                  this.msgSuccess = true;
                  this.autenticando = false;

                  setTimeout(() => {
                    this.msgSuccess = false;
                    this.textoBotaoCliente = "Criar novo cliente";
                  }, 3000);

                  this.fetchUsuarios();
                } else {
                  this.msgErrorCliente = true
                  this.autenticando = false;
                  this.textoBotaoCliente = "Criar novo cliente";

                  setTimeout(() => {
                    this.msgErrorCliente = false;
                  }, 3000);
                }
              });
          } else {
            this.msgErrorNull = true
            this.textoBotaoCliente = "Criar novo cliente";
            this.autenticando = false
            setTimeout(() => {
              this.msgErrorNull = false
            }, 3000);
          }
        }
      } else {
        this.msgErrorSelectNull = true
        setTimeout(() => {
          this.msgErrorSelectNull = false
        }, 3000)
      }
    },

    handleSalvarUserConvidadosZonu() {
      // let nome = this.nomeCon;
      // let sobrenome = this.sobrenomeCon;
      // let email = this.emailCon;
      // let senha = this.senhaCon;
      let selectNivel = this.selectNivelCon;

      if (selectNivel !== "") {
        if (selectNivel == "Corretor") {
          this.textoBotaoCon = "Salvando...";
          this.autenticando = true;

          let nome = this.nomeCon;
          let sobrenome = this.sobrenomeCon;
          let email = this.emailCon;
          let senha = this.senhaCon;
          let cpf = this.cpfCon
          let idPlano = 3
          let telefone = this.telefoneCon
          let cep = this.buscarCEPCon
          let endereco = this.logradouroCon
          let complemento = this.complementoCon
          let numero = this.numeroCon
          let cidade = this.cidadeCon
          let estado = this.estadoCon
          let bairro = this.bairroCon

          if (
            nome !== "" &&
            sobrenome !== "" &&
            email !== "" &&
            senha !== "" &&
            cpf !== "" &&
            telefone !== "" &&
            cep !== ""
          ) {
            apiAuth
              .cadastroCorretor(nome, sobrenome, email, senha, cpf, idPlano, telefone, cep, endereco, complemento, numero, cidade, estado, bairro)
              .then((res) => {
                if (res.status == 202) {
                  this.selectNivel = "";
                  this.nomeCon = "";
                  this.sobrenomeCon = "";
                  this.emailCon = "";
                  this.senhaCon = "";
                  this.confimSenhaCon = "";
                  this.cpfCon = "";
                  this.telefoneCon = "";
                  this.buscarCEPCon = "";
                  this.logradouroCon = "";
                  this.numeroCon = "";
                  this.cidadeCon = "";
                  this.estadoCon = "";
                  this.bairroCon = "";

                  this.msgSuccess = true;
                  this.autenticando = false;

                  setTimeout(() => {
                    this.msgSuccess = false;
                    this.textoBotaoCon = "Criar convidado";
                  }, 3000);

                  this.fetchUsuarios();
                } else {
                  this.msgErrorCon = true
                  this.autenticando = false;
                  this.textoBotaoCon = "Criar convidado";

                  setTimeout(() => {
                    this.msgErrorCon = false;
                  }, 3000);
                }
              });
          } else {
            this.msgErrorNull = true
            this.textoBotaoCon = "Criar convidado";
            this.autenticando = false
            setTimeout(() => {
              this.msgErrorNull = false
            }, 3000);
          }
        } else if (selectNivel == "Imobiliaria") {
          this.textoBotaoCon = "Salvando...";
          this.autenticando = true;

          let nome = this.nomeCon;
          let sobrenome = this.sobrenomeCon;
          let email = this.emailCon;
          let senha = this.senhaCon;
          let razaoSocial = this.razao_socialCon
          let cnpj = this.cnpjCon
          let idPlano = 2
          let telefone = this.telefoneCon
          let cep = this.buscarCEPCon
          let endereco = this.logradouroCon
          let complemento = this.complementoCon
          let numero = this.numeroCon
          let cidade = this.cidadeCon
          let estado = this.estadoCon
          let bairro = this.bairroCon

          if (
            nome !== "" &&
            sobrenome !== "" &&
            email !== "" &&
            senha !== "" &&
            cnpj !== "" &&
            telefone !== "" &&
            cep !== ""
          ) {
            apiAuth
              .cadastroImobiliaria(nome, sobrenome, email, senha, razaoSocial, cnpj, idPlano, telefone, cep, endereco, complemento, numero, cidade, estado, bairro)
              .then((res) => {
                if (res.status == 202) {
                  this.selectNivel = "";
                  this.nomeCon = "";
                  this.sobrenomeCon = "";
                  this.emailCon = "";
                  this.senhaCon = "";
                  this.confimSenhaCon = "";
                  this.razao_socialCon = "";
                  this.cnpjCon = "";
                  this.telefoneCon = "";
                  this.buscarCEPCon = "";
                  this.logradouroCon = "";
                  this.numeroCon = "";
                  this.cidadeCon = "";
                  this.estadoCon = "";
                  this.bairroCon = "";

                  this.msgSuccess = true;
                  this.autenticando = false;

                  setTimeout(() => {
                    this.msgSuccess = false;
                    this.textoBotaoCon = "Criar convidado";
                  }, 3000);

                  this.fetchUsuarios();
                } else {
                  this.msgErrorCon = true
                  this.autenticando = false;
                  this.textoBotaoCon = "Criar convidado";

                  setTimeout(() => {
                    this.msgErrorCon = false;
                  }, 3000);
                }
              });
          } else {
            this.msgErrorNull = true
            this.textoBotaoCon = "Criar convidado";
            this.autenticando = false
            setTimeout(() => {
              this.msgErrorNull = false
            }, 3000);
          }
        }
      } else {
        this.msgErrorSelectNull = true
        setTimeout(() => {
          this.msgErrorSelectNull = false
        }, 3000)
      }

      // if (
      //   nome !== "" &&
      //   sobrenome !== "" &&
      //   email !== "" &&
      //   senha !== "" &&
      //   selectNivel
      // ) {
      //   if (selectNivel === 4) {
      //     //Corretor
      //     apiAuth
      //       .cadastroCorretor(nome, sobrenome, email, senha, selectNivel)
      //       .then((res) => {
      //         if (res.status == 202) {
      //           this.nome = "";
      //           this.sobrenome = "";
      //           this.email = "";
      //           this.senha = "";
      //           this.confimSenha = "";
      //           this.selectNivel = "";
      //           this.msgSuccess = true;
      //           this.textoBotao = "Criar novo usuário";
      //           this.autenticando = false;

      //           this.fetchUsuarios();
      //         }
      //       });
      //   }

      //   if (selectNivel === 5) {
      //     //Imobiliaria
      //     apiAuth
      //       .cadastroImobiliaria(nome, sobrenome, email, senha, selectNivel)
      //       .then((res) => {
      //         if (res.status == 202) {
      //           this.nome = "";
      //           this.sobrenome = "";
      //           this.email = "";
      //           this.senha = "";
      //           this.confimSenha = "";
      //           this.selectNivel = "";
      //           this.msgSuccess = true;
      //           this.textoBotao = "Criar novo usuário";
      //           this.autenticando = false;

      //           this.fetchUsuarios();
      //         }
      //       });
      //   }
      // } else {
      //   this.msgErrorNull = true;
      //   this.textoBotao = "Criar novo usuário";
      //   this.autenticando = false;

      //   setTimeout(() => {
      //     this.msgErrorNull = false;
      //   }, 3000);
      // }
    },

    handledSelect() {
      let escolha = this.selectTab;

      if (escolha == true) {
        this.tabZonu = true;
        this.tabCliente = false;
      } else {
        this.tabCliente = true;
        this.tabZonu = false;
      }
    },
    aplicaMascaraCNPJ() {
      let v = this.cnpj;

      v = v.replace(/\D/g, "");
      if (v.length > 14) {
        v = v.substring(0, 14);
      }

      v = v.replace(/^(\d{2})(\d)/, "$1.$2");
      v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
      v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
      v = v.replace(/(\d{4})(\d)/, "$1-$2");

      this.cnpj = v;
    },
    aplicaMascaraCNPJCon() {
      let v = this.cnpjCon;

      v = v.replace(/\D/g, "");
      if (v.length > 14) {
        v = v.substring(0, 14);
      }

      v = v.replace(/^(\d{2})(\d)/, "$1.$2");
      v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
      v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
      v = v.replace(/(\d{4})(\d)/, "$1-$2");

      this.cnpjCon = v;
    },
    aplicaMascaraCNPJCli() {
      let v = this.cnpjCliente;

      v = v.replace(/\D/g, "");
      if (v.length > 14) {
        v = v.substring(0, 14);
      }

      v = v.replace(/^(\d{2})(\d)/, "$1.$2");
      v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
      v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
      v = v.replace(/(\d{4})(\d)/, "$1-$2");

      this.cnpjCliente = v;
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
    aplicaMascaraCEPCon() {
      let v = this.buscarCEPCon;

      v = v.replace(/\D/g, "");
      if (v.length > 8) {
        v = v.substring(0, 8);
      }

      v = v.replace(/^(\d{5})(\d)/, "$1-$2");

      this.buscarCEPCon = v;
    },
    aplicaMascaraCEPCli() {
      let v = this.buscarCEPCliente;

      v = v.replace(/\D/g, "");
      if (v.length > 8) {
        v = v.substring(0, 8);
      }

      v = v.replace(/^(\d{5})(\d)/, "$1-$2");

      this.buscarCEPCliente = v;
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
    aplicaMascaraTelefoneCon() {
      let v = this.telefoneCon;

      v = v.replace(/\D/g, "");
      if (v.length > 11) {
        v = v.substring(0, 11);
      }
      v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
      v = v.replace(/(\d{5})(\d)/, "$1-$2");

      this.telefoneCon = v;
    },
    aplicaMascaraTelefoneCli() {
      let v = this.telefoneCliente;

      v = v.replace(/\D/g, "");
      if (v.length > 11) {
        v = v.substring(0, 11);
      }
      v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
      v = v.replace(/(\d{5})(\d)/, "$1-$2");

      this.telefoneCliente = v;
    },
    async consultarCNPJ() {
      if (this.cnpj.length === 18) {
        const cnpj = this.cnpj.replace(/\D/g, "");
        try {
          const response = await axios.get(
            `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`
          );

          if (response.data.descricao_situacao_cadastral == "ATIVA") {
            this.razao_social = response.data.razao_social;
            this.msgSuccessCnpj = true;
            this.msgErrorCnpj = false;
          } else {
            this.msgErrorCnpj = true;
            this.msgSuccessCnpj = false;
          }
        } catch (error) {
          this.msgErrorCnpj = true;
          this.msgSuccessCnpj = false;
        }
      }
    },
    async consultarCNPJCon() {
      if (this.cnpjCon.length === 18) {
        const cnpj = this.cnpjCon.replace(/\D/g, "");
        try {
          const response = await axios.get(
            `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`
          );

          if (response.data.descricao_situacao_cadastral == "ATIVA") {
            this.razao_socialCon = response.data.razao_social;
            this.msgSuccessCnpj = true;
            this.msgErrorCnpj = false;
          } else {
            this.msgErrorCnpj = true;
            this.msgSuccessCnpj = false;
          }
        } catch (error) {
          this.msgErrorCnpj = true;
          this.msgSuccessCnpj = false;
        }
      }
    },
    async consultarCNPJCli() {
      if (this.cnpjCliente.length === 18) {
        const cnpj = this.cnpjCliente.replace(/\D/g, "");
        try {
          const response = await axios.get(
            `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`
          );

          if (response.data.descricao_situacao_cadastral == "ATIVA") {
            this.razao_socialCliente = response.data.razao_social;
            this.msgSuccessCnpj = true;
            this.msgErrorCnpj = false;
          } else {
            this.msgErrorCnpj = true;
            this.msgSuccessCnpj = false;
          }
        } catch (error) {
          this.msgErrorCnpj = true;
          this.msgSuccessCnpj = false;
        }
      }
    },
    validarSenha() {
      const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{6,}$/;
      this.senhaValida = regex.test(this.senha);
    },
    toggleMostrarSenha() {
      this.mostrarSenha = !this.mostrarSenha;
    },
    validarSenhaCon() {
      const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{6,}$/;
      this.senhaValidaCon = regex.test(this.senhaCon);
    },
    toggleMostrarSenhaCon() {
      this.mostrarSenhaCon = !this.mostrarSenhaCon;
    },
    validarSenhaCli() {
      const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{6,}$/;
      this.senhaValidaCli = regex.test(this.senhaCliente);
    },
    toggleMostrarSenhaCli() {
      this.mostrarSenhaCli = !this.mostrarSenhaCli;
    },
    async consultarCEP() {
      if (this.buscarCEP.length === 9) {
        const cep = this.buscarCEP.replace(/\D/g, "");

        try {
          const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

          console.log("Aqui está a resposta do CEP ======>", res);

          // Correção nas propriedades de acordo com a resposta da API
          let rua = res.data.logradouro;
          let bairro = res.data.bairro;
          let cidade = res.data.localidade;
          let estado = res.data.uf;

          this.logradouro = rua;
          this.bairro = bairro;
          this.cidade = cidade;
          this.estado = estado;
        } catch (error) {
          console.error("Erro ao consultar CEP: ", error);
        }
      }
    },
    async consultarCEPCon() {
      if (this.buscarCEPCon.length === 9) {
        const cep = this.buscarCEPCon.replace(/\D/g, "");

        try {
          const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

          console.log("Aqui está a resposta do CEP ======>", res);

          // Correção nas propriedades de acordo com a resposta da API
          let rua = res.data.logradouro;
          let bairro = res.data.bairro;
          let cidade = res.data.localidade;
          let estado = res.data.uf;

          this.logradouroCon = rua;
          this.bairroCon = bairro;
          this.cidadeCon = cidade;
          this.estadoCon = estado;
        } catch (error) {
          console.error("Erro ao consultar CEP: ", error);
        }
      }
    },
    async consultarCEPCli() {
      if (this.buscarCEPCliente.length === 9) {
        const cep = this.buscarCEPCliente.replace(/\D/g, "");

        try {
          const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

          console.log("Aqui está a resposta do CEP ======>", res);

          // Correção nas propriedades de acordo com a resposta da API
          let rua = res.data.logradouro;
          let bairro = res.data.bairro;
          let cidade = res.data.localidade;
          let estado = res.data.uf;

          this.logradouroCliente = rua;
          this.bairroCliente = bairro;
          this.cidadeCliente = cidade;
          this.estadoCliente = estado;
        } catch (error) {
          console.error("Erro ao consultar CEP: ", error);
        }
      }
    },

    aplicaMascaraCPFCon() {
      let v = this.cpfCon;

      v = v.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
      if (v.length > 11) {
        v = v.substring(0, 11); // Limita o tamanho a 11 dígitos
      }

      v = v.replace(/(\d{3})(\d)/, "$1.$2");
      v = v.replace(/(\d{3})(\d)/, "$1.$2");
      v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

      this.cpfCon = v;
    },
    aplicaMascaraCPFCli() {
      let v = this.cpfCliente;

      v = v.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
      if (v.length > 11) {
        v = v.substring(0, 11); // Limita o tamanho a 11 dígitos
      }

      v = v.replace(/(\d{3})(\d)/, "$1.$2");
      v = v.replace(/(\d{3})(\d)/, "$1.$2");
      v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

      this.cpfCliente = v;
    },

    handleSalvarUserConstrutora() {
      this.textoBotao = "Salvando...";
      this.autenticando = true;

      let nome = this.nome;
      let sobrenome = this.sobrenome;
      let email = this.email;
      let senha = this.senha;
      let cnpj = this.cnpj;
      let razao_social = this.razao_social;
      let telefone = this.telefone;
      let cep = this.cep;
      let endereco = this.endereco;

      if (
        nome !== "" &&
        sobrenome !== "" &&
        email !== "" &&
        senha !== "" &&
        telefone &&
        cep &&
        endereco != ""
      ) {
        api
          .cadastro(
            nome,
            sobrenome,
            email,
            senha,
            razao_social,
            cnpj,
            telefone,
            cep,
            endereco
          )
          .then((res) => {
            if (res.status == 202) {
              this.nome = "";
              this.sobrenome = "";
              this.email = "";
              this.senha = "";
              this.cnpj = "";
              this.razao_social = "";
              this.cep = "";
              this.endereco = "";
              this.msgSuccess = true;
              this.textoBotao = "Criar novo usuário";
              this.autenticando = false;
            }

            setTimeout(() => {
              this.msgSuccess = false;
            }, 3000);
          });
      } else {
        this.msgErrorNull = true;
        this.textoBotao = "Criar novo usuário";
        this.autenticando = false;

        setTimeout(() => {
          this.msgErrorNull = false;
        }, 3000);
      }
    },
    handleEditModal(user) {
      this.selectedUser = user;
      this.nome = user.nome;
      this.email = user.email;
      this.telefone = user.perfil.telefone;
      this.razao_social = user.perfil.razao_social;
      //Abrir o modal usando jQuery ou Bootstrap

      $("#modalEdit" + user.id_user).modal("show");
    },
    fetchUsuarios() {
      api.listusuarios().then((res) => {
        let usuarios = res.data.response;

        // Filtrar usuários com id_nivel 1, 2 ou 4
        let filteredUsuariosTime = usuarios.filter(
          (usuario) => usuario.id_nivel === 1 || usuario.id_nivel === 2
        );

        // Remover duplicatas (caso necessário)
        let uniqueUsuarios = [];
        let ids = new Set();
        filteredUsuariosTime.forEach((usuario) => {
          if (!ids.has(usuario.id_user)) {
            ids.add(usuario.id_user);
            uniqueUsuarios.push(usuario);
          }
        });

        // Adicionar iniciais a cada usuário
        uniqueUsuarios = uniqueUsuarios.map((usuario) => {
          usuario.iniciais =
            usuario.nome.charAt(0) + usuario.sobrenome.charAt(0);
          return usuario;
        });

        this.listUsers = uniqueUsuarios;
      });
    },
    handleEditStatusBlock(id) {
      let id_user = id;
      let status = 2;

      api.editStatusUser(id_user, status).then((res) => {
        if (res.status == 201) {
          this.fetchUsuarios();
          this.msgSuccessEdit = true;

          setTimeout(() => {
            this.msgSuccessEdit = false;
          }, 3000);
        }
      });
    },
    handleEditStatusAtivate(id) {
      let id_user = id;
      let status = 1;

      api.editStatusUser(id_user, status).then((res) => {
        if (res.status == 201) {
          this.fetchUsuarios();
          this.msgSuccessEdit = true;

          setTimeout(() => {
            this.msgSuccessEdit = false;
          }, 3000);
        }
      });
    },
    handleDeleteUser(id) {
      let id_user = id;

      api.deleteUser(id_user).then((res) => {
        if (res.status == 202) {
          this.fetchUsuarios();
          this.msgSuccessDelete = true;

          setTimeout(() => {
            this.msgSuccessDelete = false;
          }, 3000);
        }
      });
    },
    previousPageCliente() {
      if (this.currentPageCliente > 1) {
        this.currentPageCliente -= 1;
      }
    },
    nextPageCliente() {
      if (this.currentPageCliente < this.totalPagesClientes) {
        this.currentPageCliente += 1;
      }
    },
    validarSenha() {
      const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{6,}$/;
      this.senhaValida = regex.test(this.senha);
    },
    fetchNivel() {
      api
        .listNivel()
        .then((res) => {
          let niveis = res.data.response;

          let niveisFiltrados = niveis.filter(
            (nivel) => nivel.id_nivel === 1 || nivel.id_nivel === 2
          );
          this.niveis = niveisFiltrados;
        })
        .then();
    },
  },
};
</script>
