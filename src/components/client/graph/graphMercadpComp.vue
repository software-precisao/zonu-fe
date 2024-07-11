<template>
  <div class="card flex-fill w-100">
    <div class="card-header">
      <h5 class="card-title mb-0">
        Movimentação do Mercado Imobiliário - Hoje
      </h5>
    </div>
    <div class="card-body py-3">
      <div class="chart">
        <canvas id="myChartMercado"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import "https://cdn.jsdelivr.net/npm/chart.js";
import { jwtDecode } from "jwt-decode";

export default {
  name: "MercadoGraphdmin",
  data() {
    return {
      token: localStorage.getItem("token"),
      id_user: "",
      myChart: null,
      data: {
        labels: Array.from({ length: 24 }, (_, i) => i + ":00"), // Horas do dia de 0:00 a 23:00
        datasets: [
          {
            label: "Aluguel",
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            data: Array(24).fill(0),
          },
          {
            label: "Venda",
            borderColor: "rgb(54, 162, 235)",
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            data: Array(24).fill(0),
          },
        ],
      },
    };
  },
  mounted() {
    let token = this.token;
    let decode = jwtDecode(token);
    this.id_user = decode.id_user;

    this.initializeChartData();
    this.renderChart();
    this.startUpdatingData();
  },
  methods: {
    initializeChartData() {
      let currentHour = new Date().getHours();
      this.data.datasets.forEach((dataset) => {
        dataset.data = dataset.data.map((_, index) => {
          return index <= currentHour ? Math.floor(Math.random() * 100) : 0;
        });
      });
    },
    renderChart() {
      const ctx = document.getElementById("myChartMercado").getContext("2d");
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.myChart = new Chart(ctx, {
        type: "line",
        data: this.data,
        options: {
          responsive: true,
          plugins: {
            tooltip: {
              mode: "index",
              intersect: false,
            },
            title: {
              display: true,
              text: "Movimentação do Mercado Imobiliário - Hoje",
            },
          },
          hover: {
            mode: "index",
            intersect: false,
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Horas do Dia",
              },
            },
            y: {
              title: {
                display: true,
                text: "Quantidade de Buscas",
              },
              min: 0,
              max: 100,
              ticks: {
                stepSize: 10,
              },
            },
          },
        },
      });
    },
    startUpdatingData() {
      setInterval(() => {
        this.updateChartData();
      }, 2000);
    },
    updateChartData() {
      let currentHour = new Date().getHours();

      this.data.datasets.forEach((dataset) => {
        for (let i = 0; i <= currentHour; i++) {
          let change = Math.floor(Math.random() * 21) - 10;
          let newValue = dataset.data[i] + change;
          dataset.data[i] = Math.max(0, Math.min(100, newValue));
        }
      });
      this.myChart.update();
    },
  },
  beforeDestroy() {
    if (this.myChart) {
      this.myChart.destroy();
    }
  },
};
</script>
