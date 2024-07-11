<template>
  <div class="card flex-fill w-100">
    <div class="card-header">
      <h5 class="card-title mb-0">Meses com mais cadastrado</h5>
    </div>
    <div class="card-body py-3">
      <div class="chart chart-sm">
        <canvas id="myChartCadastros"></canvas>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../../../../service/api/index";
import { jwtDecode } from "jwt-decode";
import "https://cdn.jsdelivr.net/npm/chart.js";
import moment from "moment";
export default {
  name: "MesGraph",
  data() {
    return {
      token: localStorage.getItem("token"),
      id_user: "",
      myChart1: null,
    };
  },
  mounted() {
    let token = this.token;
    let decode = jwtDecode(token);
    let id_user = decode.id_user;

    this.id_user = id_user;

    this.fetchCadastrosPorMes();
  },
  methods: {
    fetchCadastrosPorMes() {
      api.listallImoveis().then((res) => {
        let imoveis = res.data;

        // Contar cadastros por mês do ano corrente
        let contagemMeses = Array(12).fill(0); // Inicializa um array de 12 posições com 0
        imoveis.forEach((imovel) => {
          let dataCadastro = moment(imovel.createdAt);
          if (dataCadastro.year() === moment().year()) {
            let mes = dataCadastro.month(); // Janeiro é 0, Dezembro é 11
            contagemMeses[mes]++;
          }
        });

        // Preparar dados para o gráfico
        let labels = moment.monthsShort(); // ['Jan', 'Feb', 'Mar', ..., 'Dec']
        let data = contagemMeses;

        // Gerar o gráfico
        this.renderChart(labels, data);
      });
    },
    renderChart(labels, data) {
      const ctx = document.getElementById("myChartCadastros").getContext("2d");
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Cadastros por Mês",
              data: data,
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(75, 192, 192)",
                "rgb(255, 205, 86)",
                "rgb(153, 102, 255)",
                "rgb(201, 203, 207)",
                "rgb(255, 159, 64)",
                "rgb(99, 255, 132)",
                "rgb(162, 54, 235)",
                "rgb(192, 75, 192)",
                "rgb(255, 159, 132)",
                "rgb(54, 162, 135)",
              ],
            },
          ],
        },
        options: {
          responsive: true,
          animation: {
            duration: 500, // Duração da animação para renderização mais rápida
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  let count = data[tooltipItem.dataIndex] || 0;
                  return `${labels[tooltipItem.dataIndex]}: ${count}`;
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
