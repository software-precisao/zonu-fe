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
        <td v-if="item.id_status == 1">
            <span class="badge text-bg-success">Ativo</span>
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
              margin-right: 6px !important;">
                    <i class="fa fa-check"></i>
                </button>
                <button v-if="item.id_status == 1" @click="handleEditStatusBlock(item.id_user)" type="button"
                    class="btn btn-info" style="
              --bs-btn-padding-y: 0.25rem;
              --bs-btn-padding-x: 0.5rem;
              --bs-btn-font-size: 0.75rem;
              margin-right: 6px !important;">
                    <i class="fa fa-ban"></i>
                </button>
            </div>
            <div class="col-4">
                <button @click="openEditModal(item)" type="button" class="btn btn-warning" style="
              --bs-btn-padding-y: 0.25rem;
              --bs-btn-padding-x: 0.5rem;
              --bs-btn-font-size: 0.75rem;
              margin-right: 6px !important;">
                    <i class="fa fa-edit"></i>
                </button>
            </div>
            <div class="col-4">
                <button @click="handleDeleteUser(item.id_user)" type="button" class="btn btn-danger" style="
              --bs-btn-padding-y: 0.25rem;
              --bs-btn-padding-x: 0.5rem;
              --bs-btn-font-size: 0.75rem;
              margin-right: 6px;">
                    <i class="fa fa-trash"></i>
                </button>
            </div>
        </td>

        <EditModal :item="item" @save="handleEditUsuario" />
    </tr>
</template>

<script>
import EditModal from './EditModal.vue';

export default {
    props: {
        item: Object,
    },
    components: {
        EditModal,
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

        handleEditUsuario() {
            const updatedUser = {
                id_user: this.selectedUser.id_user,
                nome: this.nome,
                sobrenome: this.sobrenome,
                email: this.email,
                razao_social: this.razao_social,
                cnpj: this.cnpj,
                telefone: this.telefone,
                cep: this.cep,
                endereco: this.endereco,
                numero: this.numero,
                complemento: this.complemento,
                cidade: this.cidade,
                estado: this.estado,
                bairro: this.bairro,
            };

            api.editUser(updatedUser).then((res) => {
                if (res.status == 201) {
                    this.fetchUsuarios();
                    this.msgSuccess = 'Status atualizado com sucesso!';

                    setTimeout(() => {
                        this.msgSuccess = '';
                    }, 3000);
                }

                $("#modalEdit" + this.selectedUser.id_user).modal("hide");
            });
        },

        handleEditUsuario(id) {
            let id_user = id;
            let status = 1;

            api.editStatusUser(id_user, status).then((res) => {
                if (res.status == 201) {
                    this.fetcUsuarios();
                    this.msgSuccess = 'Status atualizado com sucesso!';

                    setTimeout(() => {
                        this.msgSuccess = '';
                    }, 3000);
                }
            });
        },

        handleEditStatusBlock(id) {
            let id_user = id;
            let status = 2;

            api.editStatusUser(id_user, status).then((res) => {
                if (res.status == 201) {
                    this.fetcUsuarios();
                    this.msgSuccess = 'Status atualizado com sucesso!';

                    setTimeout(() => {
                        this.msgSuccess = '';
                    }, 3000);
                }
            });
        },

        handleEditStatusAtivate(id) {
            let id_user = id;
            let status = 1;

            api.editStatusUser(id_user, status).then((res) => {
                if (res.status == 201) {
                    this.fetcUsuarios();
                    this.msgSuccess = 'Status atualizado com sucesso!';

                    setTimeout(() => {
                        this.msgSuccess = '';
                    }, 3000);
                }
            });
        },

        handleDeleteUser(id) {
            let id_user = id;

            api.deleteUser(id_user).then((res) => {
                if (res.status == 202) {
                    this.fetcUsuarios();
                    this.msgSuccess = 'Usuário Excluído com sucesso!';

                    setTimeout(() => {
                        this.msgSuccess = '';
                    }, 3000);
                }
            });
        },
    },
};
</script>