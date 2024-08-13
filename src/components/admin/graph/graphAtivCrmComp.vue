<template>
  <div class="flex-fill w-100">
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
        MeuSite: 2,
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
                "rgb(255, 99, 66)",
                "rgb(54, 162, 235)",
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
          animation: {
            duration: 500, // Duração da animação para renderização mais rápida
          },
          plugins: {
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
