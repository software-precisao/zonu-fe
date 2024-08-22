<template>
  <div class="container mt-5">
    <div class="card-body py-3">
      <div class="chart chart-sm">
        <canvas id="myBarChart"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GraphBarAtivCrmComp",
  props: {
    idFunil: {
      type: Array,
      required: true
    }
  },
  watch: {
    idFunil: {
      handler(newVal) {
        if (newVal && newVal.etapas) {
          this.renderChart();
        }
      },
      deep: true // Observa mudanças profundas, caso o idFunil seja alterado
    }
  },
  methods: {
    renderChart() {
      const ctx = document.getElementById("myBarChart").getContext("2d");

      const labels = this.idFunil.etapas.map(etapa => etapa.nome_etapa);
      const data = labels.lenght;
      // console.log(this.idFunil)

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Exemplo de Dados",
              data: data, // Dados aleatórios entre 0 e 4
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false, // Remove a legenda do dataset
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              min: 0,
              max: 4,
              ticks: {
                stepSize: 1, // Define o intervalo entre os ticks no eixo Y
              },
            },
          },
        },
      });
    },
  },
};
</script>

<style scoped>
/* Estilos adicionais, se necessário */
</style>
