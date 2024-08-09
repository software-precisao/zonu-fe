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
    <td v-if="item.id_nivel == 7">
      <span class="badge text-bg-success">Pessoa Física</span>
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
        <button
          v-if="item.id_status == 2"
          @click="handleEditStatusAtivate(item.id_user)"
          type="button"
          class="btn btn-success"
          style="
            --bs-btn-padding-y: 0.25rem;
            --bs-btn-padding-x: 0.5rem;
            --bs-btn-font-size: 0.75rem;
            margin-right: 6px !important;
          "
        >
          <i class="fa fa-check"></i>
        </button>
        <button
          v-if="item.id_status == 1"
          @click="handleEditStatusBlock(item.id_user)"
          type="button"
          class="btn btn-info"
          style="
            --bs-btn-padding-y: 0.25rem;
            --bs-btn-padding-x: 0.5rem;
            --bs-btn-font-size: 0.75rem;
            margin-right: 6px !important;
          "
        >
          <i class="fa fa-ban"></i>
        </button>
      </div>
      <div class="col-4">
        <button
          @click="openEditModal(item)"
          type="button"
          class="btn btn-warning"
          style="
            --bs-btn-padding-y: 0.25rem;
            --bs-btn-padding-x: 0.5rem;
            --bs-btn-font-size: 0.75rem;
            margin-right: 6px !important;
          "
        >
          <i class="fa fa-edit"></i>
        </button>
      </div>
      <div class="col-4">
        <button
          @click="handleDeleteUser(item.id_user)"
          type="button"
          class="btn btn-danger"
          style="
            --bs-btn-padding-y: 0.25rem;
            --bs-btn-padding-x: 0.5rem;
            --bs-btn-font-size: 0.75rem;
            margin-right: 6px;
          "
        >
          <i class="fa fa-trash"></i>
        </button>
      </div>
    </td>

    <EditModal :item="item" @save="handleEditUsuario" />
  </tr>
</template>

<script>
import EditModal from "./EditModal.vue";
import api from "@/../service/api";

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

    handleEditUsuario(updatedUser) {
      console.log(updatedUser);
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
          window.location.reload();
          setTimeout(() => {
            this.msgSuccess = "";
          }, 3000);
        }
      });
    },
  },
};
</script>
