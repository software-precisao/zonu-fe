<template>
  <div class="flex-fill">
    <div class="card-body py-3">
      <div class="chart chart-sm">
        <canvas id="myChartRedesSociais"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import "https://cdn.jsdelivr.net/npm/chart.js";

export default {
  name: "SocialMediaChart",
  data() {
    return {
      myChart: null,
      redesSociais: {
        Facebook: 150,
        // Instagram: 200,
        // Twitter: 120,
        // LinkedIn: 80,
        // YouTube: 90,
        // TikTok: 170,
        // Pinterest: 60,
        // Snapchat: 50,
        // WhatsApp: 220,
        // Reddit: 40,
      },
    };
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = document
        .getElementById("myChartRedesSociais")
        .getContext("2d");

      if (this.myChart) {
        this.myChart.destroy();
      }

      // Preparar dados para o gráfico
      const labels = Object.keys(this.redesSociais);
      const data = Object.values(this.redesSociais);

      // Gerar o gráfico
      this.myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Engajamento por Rede Social",
              data: data,
              backgroundColor: [
                // "rgb(255, 99, 66)",
                "rgb(130, 90, 220)",
                "rgb(75, 192, 192)",
                "rgb(255, 205, 86)",
                "rgb(153, 102, 255)",
                "rgb(201, 203, 207)",
                "rgb(255, 159, 64)",
                "rgb(99, 255, 132)",
                "rgb(162, 54, 235)",
                "rgb(192, 75, 192)",
              ],
              hoverOffset: 4,
            },
          ],
        },
        options: {
          responsive: true,
          aspectRatio: 2, // Ajuste conforme necessário
          rotation: 88,
          animation: {
            duration: 500, // Duração da animação para renderização mais rápida
          },
          plugins: {
            legend: {
              position: "right", // Coloca as labels do lado direito
              align: "center", // Alinha as labels ao centro verticalmente
              labels: {
                boxWidth: 40, // Tamanho do quadrado colorido na legenda
                padding: 20, // Espaçamento entre as labels
              },
              onClick: function () {},
            },
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  let label = labels[tooltipItem.dataIndex] || "";
                  let count = data[tooltipItem.dataIndex] || 0;
                  return `${label}: ${count}`;
                },
              },
            },
          },
        },
      });
    },
  },
  beforeDestroy() {
    if (this.myChart) {
      this.myChart.destroy();
    }
  },
};
</script>

<style>
#myChartRedesSociais {
  width: 70% !important; /* Ou um valor específico em pixels */
  height: 200px !important; /* Ajuste a altura conforme necessário */
}
</style>
