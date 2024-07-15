<template>
  <div class="modal fade" :id="modalId" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
       data-bs-backdrop="static" data-bs-keyboard="false">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Confirmar Exclusão</h5>
          <button type="button" class="btn-close" aria-label="Close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <p>Deseja realmente excluir este {{ itemName }}?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">Cancelar</button>
          <button type="button" class="btn btn-danger" @click="handleDelete">Excluir</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalId: {
      type: String,
      required: true
    },
    itemName: {
      type: String,
      required: true
    }
  },
  methods: {
    handleDelete() {
      this.$emit('delete-item');
      this.closeModal();
    },
    closeModal() {
      const modalElement = document.getElementById(this.modalId);
      if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.hide();
        const backdropElement = document.querySelector('.modal-backdrop');
        if (backdropElement) {
          backdropElement.remove();
        }
      }
    }
  }
};
</script>
