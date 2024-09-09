<template>
    <tr>
        <th scope="row"></th>
        <td>{{ item.nome }} {{ item.sobrenome }}</td>
        <td>{{ item.email }}</td>
        <td v-if="item.perfil == null">N/A</td>
        <td v-else>{{ item.perfil.telefone }}</td>

        <td v-if="item.id_nivel == 1">
            <span class="badge text-bg-dark">Administrador</span>
        </td>
        <td v-if="item.id_nivel == 2">
            <span class="badge text-bg-warning">Suporte</span>
        </td>
        <td v-if="item.id_nivel == 3">
            <span class="badge text-bg-success">Construtora</span>
        </td>
        <td v-if="item.id_nivel == 4">
            <span class="badge text-bg-success">Corretor</span>
        </td>
        <td v-if="item.id_nivel == 5">
            <span class="badge text-bg-success">Imobiliaria</span>
        </td>
        <td v-if="item.id_nivel == 6">
            <span class="badge text-bg-success">Imobiliaria</span>
        </td>
        <td v-if="item.id_status == 1">
            <span class="badge text-bg-success">Ativo</span>
        </td>
        <td v-if="item.id_status == 2">
            <span class="badge text-bg-danger">Inativo</span>
        </td>
        <td v-if="item.perfil == null">Team Zonu</td>
        <td v-if="item.perfil !== null">{{ item.perfil.razao_social }}</td>

        <td class="row mt-3">
            <div class="col-4">
                <button v-if="item.id_status == 2" @click="handleEditStatusAtivate(item.id_user)" type="button"
                    class="btn btn-success" style="
              --bs-btn-padding-y: 0.25rem;
              --bs-btn-padding-x: 0.5rem;
              --bs-btn-font-size: 0.75rem;
              margin-right: 6px !important;
            ">
                    <i class="fa fa-check"></i>
                </button>
                <button v-if="item.id_status == 1" @click="handleEditStatusBlock(item.id_user)" type="button"
                    class="btn btn-info" style="
              --bs-btn-padding-y: 0.25rem;
              --bs-btn-padding-x: 0.5rem;
              --bs-btn-font-size: 0.75rem;
              margin-right: 6px !important;
            ">
                    <i class="fa fa-ban"></i>
                </button>
            </div>
            <div class="col-4">
                <button @click="baixarDoc(item)" type="button" class="btn btn-primary" style="
              --bs-btn-padding-y: 0.25rem;
              --bs-btn-padding-x: 0.5rem;
              --bs-btn-font-size: 0.75rem;
              margin-right: 6px !important;
            ">
                    <i class="fa fa-download"></i>
                </button>
            </div>
            <!-- <div class="col-4">
                <button @click="openEditModal(item)" type="button" class="btn btn-warning" style="
              --bs-btn-padding-y: 0.25rem;
              --bs-btn-padding-x: 0.5rem;
              --bs-btn-font-size: 0.75rem;
              margin-right: 6px !important;
            ">
                    <i class="fa fa-edit"></i>
                </button>
            </div>
            <div class="col-4">
                <button @click="handleDeleteUser(item.id_user)" type="button" class="btn btn-danger" style="
              --bs-btn-padding-y: 0.25rem;
              --bs-btn-padding-x: 0.5rem;
              --bs-btn-font-size: 0.75rem;
              margin-right: 6px;
            ">
                    <i class="fa fa-trash"></i>
                </button>
            </div> -->
        </td>

        <div class="modal fade modalTelefone" id="modalRemoverFunil" tabindex="-1" role="dialog"
            aria-labelledby="modalRemoverFunil" aria-hidden="true" ref="modalRemoverFunil">
            <div class="modal-dialog" style="padding-top: 80px" role="document">
                <div class="modal-content">
                    <div class="modal-header" style="
                          display: flex;
                          flex-direction: column;
                          width: 100%;
                          align-items: flex-start;
                        ">
                        <div v-if="msgFunilRemoveSuccess" class="alert alert-success" role="alert" style="width: 100%">
                            Funil Removido com sucesso
                        </div>
                        <div v-if="msgFunilRemoveError" class="alert alert-danger" role="alert" style="width: 100%">
                            Falha ao remover o funil
                        </div>
                        <h5 class="modal-title" id="exampleModalLabel">
                            Remover funil
                        </h5>
                        <button type="button" class="close custom-close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <h2 style="
                            font-size: 16px;
                            font-weight: 600;
                            text-align: center;
                            padding: 20px 0;
                          ">
                            {{ textoModal }}
                        </h2>
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
                        <button type="button" class="btn btn-primary" style="padding: 10px 15px"
                            @click="baixarDocumentos" :disabled="docSelected.length == 0">
                            {{ textBaixarDoc }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </tr>
</template>

<script>
import api from "@/../service/api/usuarios/index";

export default {
    props: {
        item: Object,
    },

    data() {
        return {
            textBaixarDoc: "Baixar",
            textoModal: "",
            docSelected: [],
        }
    },

    methods: {
        openEditModal(item) {
            const modalId = `modalEdit${item.id_user}`;
            const modalElement = document.getElementById(modalId);
            if (modalElement) {
                const modalInstance = new bootstrap.Modal(modalElement);
                modalInstance.show();
            }
        },

        handleEditUsuario(updatedUser) {
            // Atualiza o usuário usando a API
            api.editUser(updatedUser).then((res) => {
                if (res.status == 201) {
                    this.$emit("updateUsers");
                    this.msgSuccess = "Status atualizado com sucesso!";

                    setTimeout(() => {
                        this.msgSuccess = "";

                        window.location.reload();
                    }, 3000);
                }
                const modalId = `modalEdit${updatedUser.id_user}`;
                $(`#${modalId}`).modal("hide");
            });
        },

        handleEditStatusAtivate(id) {
            let id_user = id;
            let status = 1;

            api.editStatusUser(id_user, status).then((res) => {
                if (res.status == 201) {
                    this.$emit("updateUsers");
                    this.msgSuccess = "Status atualizado com sucesso!";
                    window.location.reload();
                    setTimeout(() => {
                        this.msgSuccess = "";
                    }, 3000);
                }
            });
        },

        handleEditStatusBlock(id) {
            let id_user = id;
            let status = 2;

            api.editStatusUser(id_user, status).then((res) => {
                if (res.status == 201) {
                    this.$emit("updateUsers");
                    this.msgSuccess = "Status atualizado com sucesso!";
                    window.location.reload();
                    setTimeout(() => {
                        this.msgSuccess = "";
                    }, 3000);
                }
            });
        },

        handleDeleteUser(id) {
            let id_user = id;

            api.deleteUser(id_user).then((res) => {
                if (res.status == 202) {
                    this.$emit("updateUsers");
                    this.msgSuccess = "Usuário Excluído com sucesso!";
                    setTimeout(() => {
                        this.msgSuccess = "";
                    }, 3000);
                }
            });
        },

        baixarDoc(item) {
            if (item.id_nivel == 4) {
                console.log("Creci ====> ", item.perfil.creci)
                console.log("RG / CHN ====> ", item.perfil.doc_ofc)

                if (item.perfil.creci == "/documento/default-creci.pdf" && item.perfil.doc_ofc == "/documento/default-documento.png") {
                    this.textoModal = "Esse Corretor não enviou documentos"
                } else if (item.perfil.creci == "/documento/default-creci.pdf" && item.perfil.doc_ofc != "/documento/default-documento.png") {
                    this.docSelected.push(item.perfil.doc_ofc)
                    this.textoModal = "Esse Corretor enviou apenas o documento RG/CNH"
                } else if (item.perfil.creci != "/documento/default-creci.pdf" && item.perfil.doc_ofc == "/documento/default-documento.png") {
                    this.docSelected.push(item.perfil.creci)
                    this.textoModal = "Esse Corretor enviou apenas o documento Creci"
                } else {
                    this.docSelected.push(item.perfil.creci)
                    this.docSelected.push(item.perfil.doc_ofc)
                    this.textoModal = "Esse Corretor enviou os dois documentos"
                }
                const modalRemove = new bootstrap.Modal(this.$refs.modalRemoverFunil);
                modalRemove.show();
            } else if (item.id_nivel == 5) {
                console.log("Imobiliaria ====> ", item.perfil.doc_cnpj)
                console.log("Imobiliaria ====> ", item.perfil.doc_creci)

                if (item.perfil.creci == "/documento/default-creci.pdf" && item.perfil.doc_cnpj == "/documento/default-cnpj.pdf") {
                    this.textoModal = "Esse Corretor não enviou documentos"
                } else if (item.perfil.creci == "/documento/default-creci.pdf" && item.perfil.doc_cnpj != "/documento/default-cnpj.pdf") {
                    this.docSelected.push(item.perfil.doc_cnpj)
                    this.textoModal = "Esse Corretor enviou apenas o documento CNPJ"
                } else if (item.perfil.creci != "/documento/default-creci.pdf" && item.perfil.doc_cnpj == "/documento/default-cnpj.pdf") {
                    this.docSelected.push(item.perfil.creci)
                    this.textoModal = "Esse Corretor enviou apenas o documento Creci"
                } else {
                    this.docSelected.push(item.perfil.creci)
                    this.docSelected.push(item.perfil.doc_cnpj)
                    this.textoModal = "Esse Corretor enviou os dois documentos"
                }

                const modalRemove = new bootstrap.Modal(this.$refs.modalRemoverFunil);
                modalRemove.show();
            }
        },

        baixarDocumentos() {
            console.log(this.docSelected); // Exibe os documentos selecionados

            this.docSelected.forEach((documento) => {
                // Monta a URL completa para o documento
                const url = `https://zonu.com.br/api${documento}`;

                // Chama a função para baixar o arquivo
                this.downloadFile(url);
            });
        },
        downloadFile(url) {
            fetch(url)
                .then((response) => response.blob()) // Converte a resposta para blob
                .then((blob) => {
                    const link = document.createElement('a');
                    const objectUrl = URL.createObjectURL(blob);
                    link.href = objectUrl;

                    // Define o nome do arquivo dinamicamente com base na URL
                    const filename = url.split('/').pop();
                    link.download = filename;

                    // Adiciona o link ao DOM, clica para iniciar o download e remove o link
                    document.body.appendChild(link);
                    link.click();
                    link.remove();
                    URL.revokeObjectURL(objectUrl);

                    this.docSelected = []
                    const modalRemove = bootstrap.Modal.getInstance(this.$refs.modalRemoverFunil);
                    if (modalRemove) {
                        modalRemove.hide();
                    }
                })
                .catch((error) => console.error('Erro ao baixar o arquivo:', error));
        },
    },
};
</script>