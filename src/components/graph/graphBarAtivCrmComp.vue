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
      required: true,
    },
  },
  data() {
    return {
      chart: null, // Armazena a instância do gráfico
    };
  },
  watch: {
    idFunil: {
      handler(newVal) {
        if (newVal && newVal.etapas) {
          this.renderChart();
        }
      },
      deep: true, // Observa mudanças profundas no idFunil
    },
  },
  methods: {
    renderChart() {
      const ctx = document.getElementById("myBarChart").getContext("2d");

      const labels = this.idFunil.etapas.map((etapa) => etapa.nome_etapa);
      const data = labels.map(() => 0);

      if (this.idFunil !== undefined && this.idFunil.negocios) {
        if (this.chart) {
          this.chart == null
        }
        this.idFunil.negocios.forEach((negocio) => {
          const etapaNome = negocio.Etapa.nome_etapa;
          const index = labels.indexOf(etapaNome);
          if (index !== -1) {
            data[index] += 1;
          }
        });
      }

      // Destrói o gráfico anterior se ele existir


      // Cria um novo gráfico
      this.chart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Número de Negócios por Etapa",
              data: data,
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
