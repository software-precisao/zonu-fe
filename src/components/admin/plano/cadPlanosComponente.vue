<template>
  <div class="card flex-fill w-100">
    <div class="card-header">
      <h5 class="card-title mb-0"><i class="fa fa-dollar"></i> Cadastro de Planos</h5>
    </div>
    <div class="card-body py-3">
      <div class="container">
        <div class="row">
          <div class="form-group col-md-6">
            <label for="nome"><small><strong>Nome do plano</strong></small></label>
            <input type="text" v-model="nome" class="form-control mt-2" id="nome" placeholder="Digite o nome" />
          </div>

          <div class="form-group col-md-3">
            <label for="nome"><small><strong>Valor do Plano</strong></small></label>
            <input type="text" v-model="nome" class="form-control mt-2" id="nome" placeholder="R$ 0,00" />
          </div>

          <div class="form-group col-md-12 mt-3">
            <label for="nome"><small><strong>Faça uma breve descrição sobre seu plano</strong></small></label>
            <textarea rows="4" style="height: 90px;" v-model="nome" class="form-control mt-2" id="nome" placeholder="..."></textarea>
          </div>

          <div class="form-group col-md-12 mt-5 mb-3">
            <label for="nome"><small><strong><i class="fa fa-plus"></i> Adicione os itens do seu
                  plano</strong></small></label>
          </div>

          <div class="alert alert-info alert-dismissible fade show" role="alert">
            <strong><i class="fa fa-star"></i> Sugestão zonu</strong> Adicione quantidades iguais de itens para cada
            plano.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>

          <div class="row">
            <div class="form-group col-md-7 mt-3">
              <label for="nome"><small><strong>Nome do item do seu plano</strong></small></label>
              <input v-model="nome" class="form-control mt-2" id="nome" placeholder="..." />
            </div>

            <div class="form-group col-md-1 mt-5">
              <button type="button" class="btn btn-success btn-lg"><i class="fa fa-plus"></i></button>
            </div>

          </div>

          <hr class="mt-5 mb-5">

          <div class="mt-4 d-grid gap-2 d-md-flex justify-content-md-end">
            <button :disabled="autenticando" @click="handleSalvarUserZonu()" class="btn btn-success" type="button">
              {{ textoBotao }}
              <span v-if="autenticando" class="spinner-border spinner-border-sm" aria-hidden="true"></span>
              <span v-if="autenticando" class="visually-hidden">Aguarde...</span>
            </button>
          </div>





        </div>
      </div>

    </div>
  </div>

  <div class="card flex-fill w-100">
    <div class="card-header">
      <h5 class="card-title mb-0"><i class="fa fa-list"></i> Seus planos</h5>
    </div>
    <div class="card-body py-3">
      <div class="container">
      
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'CadPlanosComponent',
  data() {
    return {
      nome: '',
      autenticando: false,
      textoBotao: 'Salvar'
    };
  }
}
</script>