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
            <input type="text" v-model="nomePlano" class="form-control mt-2" id="nome" placeholder="Digite o nome" />
          </div>

          <div class="form-group col-md-3">
            <label for="nome"><small><strong>Valor do Plano</strong></small></label>
            <input type="text" @input="mascaraValorplano" v-model="valorPlano" class="form-control mt-2" id="nome" placeholder="R$ 0,00" />
          </div>

          <div class="form-group col-md-12 mt-3">
            <label for="nome"><small><strong>Faça uma breve descrição sobre seu plano</strong></small></label>
            <textarea rows="4" style="height: 90px;" v-model="descricaoPlano" class="form-control mt-2" id="nome" placeholder="..."></textarea>
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
            <div
              v-for="(item, index) in items"
              :key="index"
              class="form-group col-md-7 mt-3"
            >
              <label for="nome"><small><strong>Nome do item do seu plano</strong></small></label>
              <input
                v-model="item.nome"
                class="form-control mt-2"
                :id="'nome-' + index"
                placeholder="..."
              />
            </div>

            <div class="form-group col-md-1 mt-5 d-flex">
              <button type="button" class="btn btn-success btn-lg me-2" @click="addItem">
                <i class="fa fa-plus"></i>
              </button>
              <button type="button" class="btn btn-danger btn-lg" @click="removeItem">
                <i class="fa fa-minus"></i>
              </button>
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
      <div class="row flex-center">
                <div class="col-12 mb-3">
                    <div class="d-flex justify-content-center">
                        <label class="form-check-label me-2" for="customSwitch1">Mensal</label>
                        <div class="form-check form-switch">
                            <input class="form-check-input" id="customSwitch1" type="checkbox" v-model="isAnnual"
                                @change="togglePlan" />
                            <label class="form-check-label align-top" for="customSwitch1">Anual</label>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4" v-for="item in allPlanos">
                    <div class="card shadow-lg mb-4 border-0">
                        <div class="card-header border-bottom-0 pt-7 pb-5">
                            <div class="d-flex justify-content-center">
                                <h1 class="fw-bold">{{ formatCurrency(item.valor_plano) }}</h1><span
                                    class="d-flex align-items-center">/{{ planPeriod }}</span>
                            </div>
                            <h5 class="fw-bold text-center">{{ item.nome_plano }}</h5>
                            <span class="text-700 text-center d-block">{{item.descricao}}</span>
                        </div>
                        <div class="card-body mx-auto">
                            <ul class="list-unstyled mb-4">
                                <li class="text-700 py-2 text-secondary" v-for="(itens, index) in item.itens_do_plano[0]"><i class="fa fa-check"></i> &nbsp;  {{ itens }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <div class="card-body py-3">
      <div class="container">
      
      </div>

    </div>
  </div>
</template>
<script>
import api from '../../../../service/api/planos/index'

export default {
  name: 'CadPlanosComponent',
  data() {
    return {
      nomePlano: '',
      valorPlano: '',
      descricaoPlano: '',
      autenticando: false,
      textoBotao: 'Salvar',
      items: [{ nome: '' }],
      allPlanos: [],
      planPeriod: "/mês"
    };
  },
  methods: {
    addItem() {
      if (this.items.length < 5) {
        this.items.push({ nome: '' });
      }
    },
    removeItem() {
      if (this.items.length > 1) {
        this.items.pop();
      }
    },
    handleSalvarUserZonu() {
      this.autenticando = true;
      
      const plano = {
        nome: this.nomePlano,
        valor: this.valorPlano,
        descricao: this.descricaoPlano,
        itens: this.items,
      };

      console.log(plano);  // Aqui você pode enviar os dados para o seu backend através da API
      api.cadastroPlano(this.nomePlano, this.valorPlano, this.descricaoPlano, this.items).then((res) => {
        console.log(res)
        this.autenticando = false
      });
    },
    mascaraValorplano() {
      let v = this.valorPlano

      // Remove tudo o que não é dígito
      v = v.replace(/\D/g, "");

      // Divide o número para preparar a adição de vírgula e ponto
      let valorDecimal = parseInt(v) / 100;

      // Formata o número como valor monetário
      this.valorPlano = valorDecimal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    },
    parseCurrency(value) {
    if (typeof value === 'string' && value) {
      let valor = value.replace(/\./g, '').replace(',', '.');
      return parseFloat(valor);
    } else {
      console.error('Invalid value provided:', value);
      return 0; // valor padrão
    }
  },
  formatCurrency(value) {
    let valor = this.parseCurrency(value);
    if (this.isAnnual) {
      valor *= 12;
    }
    return `R$ ${valor.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
  },
    togglePlan() {
      this.planPeriod = this.isAnnual ? "/ano" : "/mês";
    //   this.updatePrices();
    },
  },
  mounted() {
    api.getPlanos().then((res) => {
        this.allPlanos = res.data
        console.log(res.data)
    })
  }
}
</script>