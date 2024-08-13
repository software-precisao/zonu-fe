<template>
  <div class="container mt-5">
    <canvas id="myHorizontalBarChart"></canvas>
  </div>
</template>

<script>
export default {
  name: "graphBarLaterCrmComp.vue",
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = document
        .getElementById("myHorizontalBarChart")
        .getContext("2d");

      new Chart(ctx, {
        type: "bar", // Tipo de gráfico de barras
        data: {
          labels: [
            "Contato",
            "Atendimento",
            "Procurando Imóvel",
            "Efetuar ligação",
          ],
          datasets: [
            {
              label: "Exemplo de Dados",
              data: [1, 2, 3, 4], // Dados ajustados para 4 itens
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          indexAxis: "y", // Define o eixo X como horizontal e o eixo Y como vertical
          plugins: {
            legend: {
              display: false, // Remove a legenda do dataset
            },
          },
          scales: {
            x: {
              beginAtZero: true,
              min: 0,
              max: 4,
              ticks: {
                stepSize: 1, // Define o intervalo entre os ticks no eixo X (horizontal)
              },
            },
            y: {
              title: {
                display: false, // Remove a label do eixo Y (vertical)
              },
              grid: {
                lineWidth: 0, // Remove as linhas de grade para mais espaço visual
              },
              ticks: {
                padding: 10, // Ajusta o espaço ao redor dos rótulos no eixo Y
              },
            },
          },
          elements: {
            bar: {
              // Ajusta a largura e o espaçamento das barras
              barThickness: 6, // Ajuste a largura das barras para torná-las mais finas
              categoryPercentage: 0.5, // Ajusta o espaço ocupado pelas barras
              barPercentage: 0.8, // Ajusta a largura das barras em relação ao espaço total
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
