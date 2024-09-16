<template>
    <!-- {{ console.log(modalId, item) }} -->
    <div class="modal fade" :id="modalId" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
        data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header" style="display: flex; justify-content: space-between;">
                    <h5 class="modal-title" id="exampleModalLabel">{{ item.Cliente.nome }}</h5>
                    <div class="form-group" style="
                      ">
                        <label for="corretorResponsavel" style="font-size: 14px; font-weight: 600;
                          margin-right: 10px;">Corretor
                            Responsável</label>
                        <select class="form-floating" id="corretorResponsavel" v-model="corretorResponsavel" style="
                          height: 30px;
                          border: 1px solid #dee2e6;
                          padding-left: 8px;
                          margin-right: 10px;
                        ">
                            <option value="" disabled hidden>Selecione</option>
                            <option :value="`${userName} ${userSobrenome}`">
                                {{ userName }} {{ userSobrenome }}
                            </option>
                        </select>
                        <button type="button" class="btn-close" aria-label="Close" @click="closeModal"></button>
                    </div>
                </div>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <!-- <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="inicio-tab" data-bs-toggle="tab"
                            data-bs-target="#inicio-tab-pane" type="button" role="tab" aria-controls="inicio-tab-pane"
                            aria-selected="false">
                            <small>Início</small>
                        </button>
                    </li> -->
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="imovel-tab" data-bs-toggle="tab"
                            :data-bs-target="`#imovel-tab-pane${item.id_negocio}`" type="button" role="tab"
                            aria-controls="imovel-tab-pane" aria-selected="true" @click="handleImovel">
                            <small>Imóvel({{ item.NovoImovel != null && item.NovoImovel != undefined ? "1" : "0"
                                }})</small>
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="anotacao-tab" data-bs-toggle="tab"
                            :data-bs-target="`#anotacoes-tab-pane${item.id_negocio}`" type="button" role="tab"
                            aria-controls="anotacoes-tab-pane" aria-selected="true" @click="handleAnotacao">
                            <small>anotações({{ item.Cliente.AnotacoesCRM.length }})</small>
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="dados-tab" data-bs-toggle="tab"
                            :data-bs-target="`#dados-tab-pane${item.id_negocio}`" type="button" role="tab"
                            aria-controls="dados-tab-pane" aria-selected="true" @click="handleDados">
                            <small>Dados</small>
                        </button>
                    </li>
                    <!-- <li class="nav-item" role="presentation">
                        <button class="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#perfil-tab-pane"
                            type="button" role="tab" aria-controls="perfil-tab-pane" aria-selected="true">
                            <small>Perfis(1)</small>
                        </button>
                    </li> -->
                    <!-- <li class="nav-item" role="presentation">
                        <button class="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#documento-tab-pane"
                            type="button" role="tab" aria-controls="documento-tab-pane" aria-selected="true">
                            <small>Documentos(0)</small>
                        </button>
                    </li> -->
                    <!-- <li class="nav-item" role="presentation">
                        <button class="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#agenda-tab-pane"
                            type="button" role="tab" aria-controls="agenda-tab-pane" aria-selected="true">
                            <small>Agenda(1)</small>
                        </button>
                    </li> -->
                </ul>

                <div class="modal-body">
                    <!-- <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="inicio-tab-pane" role="tabpanel"
                            aria-labelledby="inicio-tab" tabindex="0">
                            <p>Inicio sobre os negocios do {{ item.Cliente.nome }}</p>
                        </div>
                    </div> -->

                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show " :id="`imovel-tab-pane${item.id_negocio}`" role="tabpanel"
                            aria-labelledby="imovel-tab" tabindex="0">

                            <div class="alert alert-danger" v-if="msgErroStatusNegocio">Erro ao salvar o status do
                                negócio</div>
                            <div class="alert alert-success" v-if="msgSucessoStatusNegocio">Status do negócio salvo com
                                sucesso</div>

                            <ul class="list-group">
                                <li class="list-group-item" style="display: flex; gap: 15px;">
                                    <div>
                                        <img :src="`https://zonu.com.br/api${item.NovoImovel.fotos[0].foto}`" alt=""
                                            style="width: 150px; height: 150px;" />
                                    </div>

                                    <div
                                        style="display: flex; flex-direction: column; justify-content: center; max-width: 23%; word-wrap: break-word;">
                                        <div>
                                            <h2
                                                style="font-size: 14px; font-weight: 600; margin-bottom: 3px; white-space: normal;">
                                                {{
                                                    item.NovoImovel.descricao.titulo }} - {{ item.NovoImovel.info.tipo }}
                                            </h2>
                                            <span
                                                style="font-size: 13px; font-weight: 500; margin-bottom: 0; white-space: normal;">{{
                                                    item.NovoImovel.localizacao.logradouro }}, {{
                                                    item.NovoImovel.localizacao.numero }}</span>
                                        </div>
                                        <span style="font-size: 13px; font-weight: 500; margin-bottom: 5px;">{{
                                            item.NovoImovel.localizacao.bairro }}</span>
                                        <div style="margin-bottom: 10px;">
                                            <img :src="bedIcon" style="
                                                width: 20px;
                                                height: 20px;
                                                margin-right: 5px;
                                            " /><span style="margin-right: 5px; font-weight: 500">{{
                                                item.NovoImovel.comodos.dormitorio == "" ||
                                                    item.NovoImovel.comodos.dormitorio == null ? "0" :
                                                    item.NovoImovel.comodos.dormitorio
                                            }} | {{ item.NovoImovel.comodos.suite == "" ||
                                                    item.NovoImovel.comodos.suite == null ? "0" :
                                                    item.NovoImovel.comodos.suite }}</span>
                                        </div>
                                        <div>
                                            <h2 style="font-size: 16px; font-weight: 600; color: rgb(1, 175, 173);">R${{
                                                aplicaMascaraDinheiroPrecoImovel(item.NovoImovel.preco.preco_imovel) }}
                                                - {{ item.NovoImovel.preco.tipo_negocio }}</h2>
                                        </div>
                                    </div>

                                    <div
                                        style="display: flex; flex-direction: column; justify-content: flex-start; margin-left: 20px">
                                        <div class="mb-3" style="margin-top: .6rem;">
                                            <label for="nivelInteresse" style="font-weight: 600; font-size: 14px">Nível
                                                de
                                                interesse</label>
                                            <div class="nivel-interesse" style="width: 100%;">
                                                <button v-for="nivel in 5" :key="nivel" type="button" class="nivel-btn"
                                                    :class="{ active: nivelInteresse >= nivel }"
                                                    @click="nivelInteresse = nivel">
                                                    {{ nivel }}
                                                </button>
                                                <div class="nivel-linha"></div>
                                            </div>
                                        </div>
                                        <span class="mb-2">
                                            <i class="fa fa-edit"></i> <button type="button"
                                                style="color: rgb(0, 132,244); border: none; background-color: transparent">Fazer
                                                anotação</button>
                                        </span>
                                        <!-- <span class="">
                                            <i class="fa fa-calendar-week"></i> <button type="button"
                                                style="color: rgb(0, 132, 244); border: none; background-color: transparent">Agendar
                                                Atividade</button>
                                        </span> -->
                                    </div>

                                    <div style="display: flex; flex-direction: column; justify-content: flex-start; ">
                                        <div style="margin-top: .6rem;">
                                            <label for="posicaoFunil" class="mb-2"
                                                style="font-weight: 600; font-size: 14px">Posição
                                                no funil</label>
                                            <div class="custom-select-wrapper">
                                                <div ref="dropdown" class="custom-select" @click="toggleDropdown">
                                                    <!-- Aqui você exibe o nome do funil selecionado ou um texto padrão -->
                                                    <div class="custom-select-trigger">
                                                        <!-- <span v-if="!posicaoFunil">Selecione uma posição</span> -->
                                                        <div
                                                            style="font-size: 12px; font-weight: 400; margin: 0 !important; padding: 0 !important;">
                                                            {{
                                                                selectedFunil }}<br /><span
                                                                style="font-size: 12px; font-weight: 600;margin: 0 !important; padding: 0 !important;">{{
                                                                    posicaoFunil
                                                                }}</span></div>
                                                        <!-- <div
                                                            style="font-size: 14px; font-weight: 500; margin: 0px !important; padding: 0 !important;">
                                                        </div> -->
                                                    </div>
                                                    <!-- Aqui você mostra as opções como um dropdown -->
                                                    <div class="custom-options" v-if="isOpen == true">
                                                        <div v-for="item in allFunis" class="custom-option-group">
                                                            <div class="funil-label">{{ item.nome_funil }}</div>
                                                            <div class="custom-option" v-for="etapa in item.etapas"
                                                                @click="selectOption(item.nome_funil, etapa.nome_etapa)">
                                                                {{ etapa.nome_etapa }}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div>
                                            <button class="me-2 btnHovers" @click="atualizarStatusNegocio('Ganho')"
                                                style="width: 90px; height: 35px; border: 1px solid #d9d9d9; border-radius: 8px; background-color: transparent; transition: .5s ease-in-out; font-weight: 600;"><i
                                                    class="fa-regular fa-face-smile"
                                                    style="color: rgb(49, 208, 132); margin-right: 5px;"></i>Ganho</button>
                                            <button class="btnHovers" @click="atualizarStatusNegocio('Perdido')"
                                                style="width: 90px; height: 35px; border: 1px solid #d9d9d9; border-radius: 8px; background-color: transparent; transition: .5s ease-in-out; font-weight: 600;">
                                                <i class="fa-regular fa-face-smile"
                                                    style="color: rgb(248, 67, 67); margin-right: 5px;"></i>Perdido</button>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show " :id="`anotacoes-tab-pane${item.id_negocio}`" role="tabpanel"
                            aria-labelledby="info-tab" tabindex="0">

                            <div v-if="addAnotation" class="mb-4">
                                <Editor api-key="a0eo66lpqzpu1anhsfgh9ru0bp7id447c6hsvz9cgexp82oh" :init="{
                                    toolbar_mode: 'sliding',
                                    plugins:
                                        'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                                    toolbar:
                                        'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                                }" v-model="termos" @editorChange="handleEditorChange" />
                                <button class="btn btn-secondary me-2 mt-2" @click="toggleAnotacion">Cancelar</button>
                                <button class="btn btn-success mt-2" @click="salvarAnotacao">Salvar</button>
                            </div>

                            <div v-if="addAnotationEdit" class="mb-4">
                                <Editor api-key="a0eo66lpqzpu1anhsfgh9ru0bp7id447c6hsvz9cgexp82oh" :init="{
                                    toolbar_mode: 'sliding',
                                    plugins:
                                        'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                                    toolbar:
                                        'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                                }" v-model="termos" @editorChange="handleEditorChange" />
                                <button class="btn btn-secondary me-2 mt-2"
                                    @click="toggleAnotacionEdit">Cancelar</button>
                                <button class="btn btn-success mt-2" @click="editarAnotacao">Editar</button>
                            </div>

                            <div style="display: flex; justify-content: space-between; margin-bottom: 15px"
                                v-if="!addAnotation">
                                <div>
                                    <h2 style="font-size: 14px; font-weight: 500;">Etapa</h2>
                                    <div
                                        style="height: 30px; background-color: #bdbdbd; border: 2px solid rgb(28, 12, 30); padding-left: 10px; padding-right: 20px; padding-top: 3px; padding-bottom: 0px; border-top-right-radius: 60px; border-bottom-right-radius: 60px;">
                                        <span style="color: rgb(28, 12, 30); font-weight: 500;">
                                            {{ item.Etapa.nome_etapa }}
                                        </span>
                                    </div>
                                </div>

                                <button class="btn-anotacao" @click="toggleAnotacion">Adicionar anotação</button>
                            </div>

                            <ul class="list-group mb-3" v-for="anotacao in item.Cliente.AnotacoesCRM"
                                :key="anotacao.id_anotacao_crm">
                                <li class="list-group-item"
                                    style="display: flex; gap: 15px; flex-direction: column; position: relative;">
                                    <div style="position: absolute; top: 7%; right: 5%;">
                                        <i class="fa fa-edit"
                                            style="color: #ff9702; cursor: pointer; margin-right: 5px;"
                                            @click="editAnotacao(anotacao.id_anotacao_crm)"></i>
                                        <i class="fa fa-trash" style="color: #ed2024; cursor: pointer;"
                                            @click="removeAnotacao(anotacao.id_anotacao_crm)"></i>
                                    </div>
                                    <div v-html="anotacao.anotacao"></div>

                                    <!-- <h4 style="font-size: 14px; font-weight: 400; color: #1c0c1e; margin-top: 10px;">
                                        Contato recebido: {{
                                            item.Cliente.Captacao.origem_captacao }}</h4>

                                    <div>
                                        <p
                                            style="font-size: 14px; font-weight: 400; color: #1c0c1e; margin-top: 0; margin-bottom: 0;">
                                            Nome: {{ item.Cliente.nome }}</p>
                                        <p
                                            style="font-size: 14px; font-weight: 400; color: #1c0c1e; margin-top: 0; margin-bottom: 0;">
                                            Telefone: {{ item.Cliente.telefone_1 }}</p>
                                        <p
                                            style="font-size: 14px; font-weight: 400; color: #1c0c1e; margin-top: 0; margin-bottom: 0;">
                                            e-mail: {{ item.Cliente.email }}</p>
                                        <p
                                            style="font-size: 14px; font-weight: 500; color: #1c0c1e; margin-top: 0; margin-bottom: 0;">
                                            Mensagem: {{ item.Cliente.anotacao }}</p>
                                        <p
                                            style="font-size: 14px; font-weight: 400; color: #1c0c1e; margin-top: 0; margin-bottom: 0;">
                                            contato recebido: {{ item.Cliente.Captacao.origem_captacao }}</p>
                                        <p
                                            style="font-size: 14px; font-weight: 400; color: #1c0c1e; margin-top: 0; margin-bottom: 0;">
                                            Formulário: formulário do facebook</p>
                                        <p
                                            style="font-size: 14px; font-weight: 400; color: #1c0c1e; margin-top: 0; margin-bottom: 0;">
                                            Quando_pretende_fazer_esse_investimento?: entre_3_meses_e_6_meses</p>
                                        <p
                                            style="font-size: 14px; font-weight: 400; color: #1c0c1e; margin-top: 0; margin-bottom: 0;">
                                            Nome Completo: {{ item.Cliente.nome }}</p>
                                        <p
                                            style="font-size: 14px; font-weight: 400; color: #1c0c1e; margin-top: 0; margin-bottom: 0;">
                                            Telefone: {{ item.Cliente.telefone_1 }}</p>
                                        <p
                                            style="font-size: 14px; font-weight: 400; color: #1c0c1e; margin-top: 0; margin-bottom: 0;">
                                            Email: {{ item.Cliente.email }}</p>
                                    </div>

                                    <div style="display: flex; justify-content: space-between;">
                                        <p
                                            style="font-size: 14px; font-weight: 400; color: #1c0c1e; margin-top: 0; margin-bottom: 0;">
                                            Contato atribuido ao corretor responsável pelo imóvel {{ corretorResponsavel
                                            }}</p>
                                        <div
                                            style="background-color: #bdbdbd; border: 2px solid rgb(28, 12, 30); padding-left: 10px; padding-right: 20px; padding-top: 5px; padding-bottom: 5px; border-top-right-radius: 60px; border-bottom-right-radius: 60px;">
                                            <span style="color: rgb(28, 12, 30); font-weight: 500;">
                                                CRM
                                            </span>
                                        </div>
                                    </div> -->
                                </li>
                            </ul>

                            <ul class="list-group mt-3">
                                <li class="list-group-item"
                                    style="display: flex; gap: 15px; justify-content: space-between">
                                    <div class="form-group">
                                        <div style="display: flex">
                                            <img :src="`https://zonu.com.br/api${item.NovoImovel.fotos[0].foto}`" style="
                                                    width: 40px;
                                                    height: 40px;
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
                                                    {{ item.NovoImovel.descricao.titulo }} {{
                                                        item.NovoImovel.info.tipo }}
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
                                                            item.NovoImovel.preco.preco_imovel
                                                        )
                                                    }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        style="height: 35px; background-color: #bdbdbd; border: 2px solid rgb(28, 12, 30); padding-left: 10px; padding-right: 20px; padding-top: 5px; padding-bottom: 0px; border-top-right-radius: 60px; border-bottom-right-radius: 60px;">
                                        <span style="color: rgb(28, 12, 30); font-weight: 500;">
                                            {{ item.Etapa.nome_etapa }}
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="tab-content" id="myTabContent" style="padding-bottom: 15px;">
                        <div class="tab-pane fade show active" :id="`dados-tab-pane${item.id_negocio}`" role="tabpanel"
                            aria-labelledby="dados-tab" tabindex="0">
                            <p>Dados do Cliente</p>

                            <ul class="list-group">
                                <li class="list-group-item" style="display: flex; justify-content: left; gap: 30px;">
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">Categoria</h3>
                                        <span style="font-size: 12px; font-weight: 500;">{{
                                            item.Cliente.CategoriaCliente.categoria_cliente == "" ? "-" :
                                                item.Cliente.CategoriaCliente.categoria_cliente }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">Origem da captação</h3>
                                        <span style="font-size: 12px; font-weight: 500;">{{
                                            item.Cliente.Captacao.origem_captacao == "" ? "-" :
                                                item.Cliente.Captacao.origem_captacao
                                        }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">Telefone</h3>
                                        <span style="font-size: 12px; font-weight: 500;">{{ item.Cliente.telefone_1 ==
                                            "" ? "-" : item.Cliente.telefone_1
                                            }}</span>
                                    </div>
                                </li>

                                <li class="list-group-item" style="display: flex; justify-content: left; gap: 30px;">
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">E-mail</h3>
                                        <span style="font-size: 12px; font-weight: 500;">{{ item.Cliente.email == "" ?
                                            "-" : item.Cliente.email }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">Aniversário</h3>
                                        <span style="font-size: 12px; font-weight: 500;">{{
                                            item.Cliente.data_de_nascimento == "" ? "-" :
                                                item.Cliente.data_de_nascimento }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">Tipo</h3>
                                        <span style="font-size: 12px; font-weight: 500;">{{
                                            item.Cliente.TipoCliente.tipo_cliente == "" ? "-" :
                                                item.Cliente.TipoCliente.tipo_cliente }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">CPF</h3>
                                        <span style="font-size: 12px; font-weight: 500;">{{ item.Cliente.cpf == "" ? "-"
                                            : item.Cliente.cpf }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">RG</h3>
                                        <span style="font-size: 12px; font-weight: 500;">{{ item.Cliente.rg == "" ? "-"
                                            : item.Cliente.rg }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">Profissão</h3>
                                        <span style="font-size: 12px; font-weight: 500;">{{ item.Cliente.profissao == ""
                                            ? "-" : item.Cliente.profissao
                                            }}</span>
                                    </div>
                                </li>

                                <li class="list-group-item"
                                    style="display: flex; justify-content: left; gap: 30px; flex-wrap: wrap;">
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">UF</h3>
                                        <span style="font-size: 12px; font-weight: 500;">{{ item.Cliente.uf == "" ? "-"
                                            : item.Cliente.uf }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">Cidade</h3>
                                        <span style="font-size: 12px; font-weight: 500;">{{ item.Cliente.cidade == "" ?
                                            "-" : item.Cliente.cidade }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">Bairro</h3>
                                        <span style="font-size: 12px; font-weight: 500;">{{ item.Cliente.bairro == "" ?
                                            "-" : item.Cliente.bairro }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">Logradouro</h3>
                                        <span style="font-size: 12px; font-weight: 500;">{{ item.Cliente.logradouro ==
                                            "" ? "-" : item.Cliente.logradouro }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">Complemento</h3>
                                        <span style="font-size: 12px; font-weight: 500;">{{ item.Cliente.complemento ==
                                            "" ? "-" : item.Cliente.complemento
                                            }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">N°</h3>
                                        <span style="font-size: 12px; font-weight: 500;">{{ item.Cliente.numero == "" ?
                                            "-" : item.Cliente.numero }}</span>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 14px; font-weight: 600;">CEP</h3>
                                        <span style="font-size: 12px; font-weight: 500;">{{ item.Cliente.cep == "" ? "-"
                                            : item.Cliente.cep }}</span>
                                    </div>
                                </li>
                            </ul>

                            <ul class="list-group mt-3">
                                <li class="list-group-item"
                                    v-if="item.Cliente.pessoasLigadas == null || item.Cliente.pessoasLigadas.length == 0">
                                    <h3 style="font-size: 14px; font-weight: 600;">Clientes ligados</h3>
                                    <span style="font-size: 12px; font-weight: 500;">Nenhum cliente relacionado</span>
                                </li>
                                <li class="list-group-item"
                                    v-if="item.Cliente.pessoasLigadas != null && item.Cliente.pessoasLigadas.length > 0">
                                    <div v-for="pessoa in item.Cliente.pessoasLigadas">
                                        <span style="font-size: 14px; font-weight: 600; margin-right: 10px;">{{
                                            pessoa.id_cliente }}</span>
                                        <span style="font-size: 12px; font-weight: 500;">({{ pessoa.breve_descricao
                                            }})</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show " id="perfil-tab-pane" role="tabpanel"
                            aria-labelledby="perfil-tab" tabindex="0">
                            <p>Perfil sobre os negocios do {{ item.Cliente.nome }}</p>
                        </div>
                    </div>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show " id="perfil-tab-pane" role="tabpanel"
                            aria-labelledby="perfil-tab" tabindex="0">
                            <p>Perfil sobre os negocios do {{ item.Cliente.nome }}</p>
                        </div>
                    </div>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show " id="documento-tab-pane" role="tabpanel"
                            aria-labelledby="documento-tab" tabindex="0">
                            <p>Documento sobre os negocios do {{ item.Cliente.nome }}</p>
                        </div>
                    </div>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show " id="agenda-tab-pane" role="tabpanel"
                            aria-labelledby="agenda-tab" tabindex="0">
                            <p>Agenda sobre os negocios do {{ item.Cliente.nome }}</p>
                        </div>
                    </div> -->
                </div>
                <!-- <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="closeModal">Cancelar</button>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import { jwtDecode } from 'jwt-decode';
import api from "../../../service/api/index"
import apiCrm from "../../../service/api/crm/index"
import bedIcon from "../../../assets/images/icons/bedIcon.svg"
import Editor from "@tinymce/tinymce-vue";

export default {
    props: {
        modalId: {
            type: String,
            required: true
        },
        item: {
            type: String,
            required: true
        }
    },
    components: {
        Editor
    },
    data() {
        return {
            userName: '',
            userSobrenome: '',
            id_user: '',
            corretorResponsavel: '',
            token: localStorage.getItem("token"),

            tabInicio: false,
            tabInfo: false,
            tabDados: true,
            tabImovel: true,
            tabAnotacao: false,

            bedIcon,

            nivelInteresse: 1,
            allFunis: [],
            posicaoFunil: '',
            selectedFunil: '',
            isOpen: false,

            editorContent: '',
            termos: '',
            addAnotation: false,
            addAnotationEdit: false,
            idAnotacaoEdit: '',

            msgSucessoStatusNegocio: false,
            msgErroStatusNegocio: false,
        }
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

        this.selectedFunil = this.item.Etapa.funil.nome_funil
        this.posicaoFunil = this.item.Etapa.nome_etapa
        console.log(this.item)
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeDestroy() {
        // Remove o evento de clique global quando o componente é destruído
        document.removeEventListener('click', this.handleClickOutside);
    },
    methods: {
        closeModal() {
            const modalElement = document.getElementById(this.modalId);
            if (modalElement) {
                const modal = bootstrap.Modal.getInstance(modalElement);
                modal.hide();
                const backdropElement = document.querySelector('.modal-backdrop');
                if (backdropElement) {
                    backdropElement.remove();
                }
            }
        },

        fetchFunil() {
            api.getAllFunil().then((res) => {
                // console.log("Funis ====> ", res)
                if (res.status === 200) {
                    this.allFunis = res.data
                }
            })
        },

        handleImovel() {
            this.tabDados = false
            this.tabImovel = true
            this.tabAnotacao = false
        },
        handleDados() {
            this.tabDados = true
            this.tabImovel = false
            this.tabAnotacao = false
        },
        handleAnotacao() {
            this.tabAnotacao = true
            this.tabDados = false
            this.tabImovel = false
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

        toggleDropdown() {
            this.isOpen = !this.isOpen; // Alterna entre abrir e fechar o dropdown
        },
        selectOption(nomeFunil, nomeEtapa) {
            this.selectedFunil = nomeFunil;
            this.posicaoFunil = nomeEtapa;
            // this.isOpen = false; // Fecha o dropdown após selecionar uma opção
        },

        closeDropdown() {
            this.isOpen = false;
        },
        handleClickOutside(event) {
            // Verifica se o clique foi fora do dropdown usando $refs
            const dropdown = this.$refs.dropdown;
            if (dropdown && !dropdown.contains(event.target)) {
                this.closeDropdown();
            }
        },

        toggleAnotacion() {
            this.addAnotation = !this.addAnotation
        },
        toggleAnotacionEdit() {
            this.addAnotationEdit = !this.addAnotationEdit
        },

        handleEditorChange(content) {
            this.editorContent = content;
        },

        salvarAnotacao() {
            console.log(this.termos)
            let idCliente = this.item.Cliente.id_cliente
            let anotacao = this.termos

            console.log(idCliente, anotacao)

            if (anotacao != "") {
                apiCrm.criarAnotacao(idCliente, anotacao).then((res) => {
                    console.log(res)
                    if (res.status === 201) {
                        this.item.Cliente.AnotacoesCRM.push(res.data)
                        this.termos = ''
                        this.addAnotation = !this.addAnotation
                    }
                })
            }
        },

        editarAnotacao() {
            console.log(this.termos)
            let idCliente = this.item.Cliente.id_cliente
            let anotacao = this.termos
            let id = this.idAnotacaoEdit


            console.log(idCliente, anotacao, id)

            if (anotacao != "") {
                apiCrm.atualizarAnotacao(id, idCliente, anotacao).then((res) => {
                    // console.log(res)
                    if (res.status === 200) {
                        this.item.Cliente.AnotacoesCRM = this.item.Cliente.AnotacoesCRM.filter(anotacao => anotacao.id_anotacao_crm !== id);
                        setTimeout(() => {
                            this.item.Cliente.AnotacoesCRM.push(res.data)
                            this.termos = ''
                            this.addAnotationEdit = !this.addAnotationEdit
                        }, 2000);
                    }
                })
            }
        },

        editAnotacao(id) {
            const anotacaoEncontrada = this.item.Cliente.AnotacoesCRM.find((anotacao) => anotacao.id_anotacao_crm === id);
            this.idAnotacaoEdit = id

            if (anotacaoEncontrada) {
                this.termos = anotacaoEncontrada.anotacao;
            }

            this.addAnotationEdit = !this.addAnotationEdit
        },

        removeAnotacao(id) {
            apiCrm.deletarAnotacao(id).then((res) => {
                // console.log(res)
                if (res.status === 200) {
                    this.item.Cliente.AnotacoesCRM = this.item.Cliente.AnotacoesCRM.filter(anotacao => anotacao.id_anotacao_crm !== id);
                }
            })
        },

        atualizarStatusNegocio(status) {
            let idNegocio = this.item.id_negocio

            apiCrm.atualizarStatusNegocio(idNegocio, status).then((res) => {
                if (res.status === 200) {
                    this.msgSucessoStatusNegocio = true

                    setTimeout(() => {
                        this.msgSucessoStatusNegocio = false
                    }, 3000);
                } else {
                    this.msgErroStatusNegocio = true

                    setTimeout(() => {
                        this.msgErroStatusNegocio = false
                    }, 3000);
                }
            })
        },
    }
};
</script>
<style scoped>
.btnHovers:hover {
    background-color: #d9d9d9 !important;
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
    right: 25px;
    left: 25px;
    height: 2px;
    background-color: #ccc;
    z-index: 0;
}

.nivel-btn {
    background-color: #e0e0e0;
    border: none;
    border-radius: 100%;
    color: white;
    width: 22px;
    height: 22px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    margin: 0 7px;
    position: relative;
    z-index: 1;
    transition: background-color 0.3s, color 0.3s;
}

.nivel-btn.active,
.nivel-btn:hover {
    background-color: #5a67d8;
    color: white;
}

/* select funil do modal */
.custom-select-wrapper {
    position: relative;
    width: 180px;
}

.custom-select {
    position: relative;
    display: block;
    cursor: pointer;
}

.custom-select-trigger {
    height: 40px;
    padding: 0 10px !important;
    background-color: white;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0;
}

.custom-options {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    border: 1px solid #ccc;
    background-color: white;
    z-index: 10;
}

.custom-option-group {
    /* padding: 10px; */
    background-color: #f1f4f9;
}

.funil-label {
    padding: 5px 5px;
    font-weight: bold;
    color: #333;
}

.custom-option {
    padding: 5px 20px;
    background-color: #fff;
    cursor: pointer;
}

.custom-option:hover {
    background-color: #007bff;
    color: #fff;
}

.btn-anotacao {
    width: 160px;
    height: 40px;
    background-color: #ff9702;
    border: none;
    color: #fff;
    box-shadow: 0 0 5px rgba(255, 151, 2, .6), inset 0 0 1px rgba(0, 0, 0, .6);
    transition: .3s ease-in-out;
    border-radius: 5px;
    font-size: 1em;
    font-weight: 500;
}

.btn-anotacao:hover {
    background-color: #b56a00;
}
</style>