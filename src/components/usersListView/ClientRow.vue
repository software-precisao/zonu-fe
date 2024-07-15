<template>
    <th scope="row">
        <div class="col-3">
            <div class="avatar-null rounded me-1" alt="Avatar" style="width: 50px; height: 50px">
                {{ item.iniciais }}
            </div>
        </div>
    </th>
    <td>{{ item.nome }} {{ item.sobrenome }}</td>
    <td>{{ item.email }}</td>
    <td v-if="item.perfil == null">N/A</td>
    <td v-if="item.perfil !== null">
        {{ item.perfil.telefone }}
    </td>
    <td v-if="item.id_nivel == 1">
        <span class="badge text-bg-dark">Administrador</span>
    </td>
    <td v-if="item.id_nivel == 2">
        <span class="badge text-bg-warning">Suporte</span>
    </td>
    <td v-if="item.id_status == 1">
        <span class="badge text-bg-success">Ativo</span>
    </td>
    <td v-if="item.id_status == 2">
        <span class="badge text-bg-danger">Inativo</span>
    </td>
    <td v-if="item.perfil == null">Team Zonu</td>
    <td v-if="item.perfil !== null">
        {{ item.perfil.razao_social }}
    </td>
    <td>
        <button @click="handleEditModal(item.id_user)" type="button" class="btn btn-warning" style="
            --bs-btn-padding-y: 0.25rem;
            --bs-btn-padding-x: 0.5rem;
            --bs-btn-font-size: 0.75rem;
            margin-right: 6px;
          ">
            <i class="fa fa-edit"></i>
        </button>
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
        <button @click="handleDeleteUser(item.id_user)" type="button" class="btn btn-danger" style="
            --bs-btn-padding-y: 0.25rem;
            --bs-btn-padding-x: 0.5rem;
            --bs-btn-font-size: 0.75rem;
          ">
            <i class="fa fa-trash"></i>
        </button>
    </td>
</template>

<script>
export default {
    name: 'ClientRow',
    props: {
        item: {
            type: Object,
            required: true
        },
        handleEditModal: {
            type: Function,
            required: true
        },
        handleEditStatusAtivate: {
            type: Function,
            required: true
        },
        handleEditStatusBlock: {
            type: Function,
            required: true
        },
        handleDeleteUser: {
            type: Function,
            required: true
        }
    }
}
</script>