<template>
  <div class="card flex-fill w-100" style="height: 250px">
    <div class="card-header">
      <h5 class="card-title mb-0">Tipos de Imóveis</h5>
    </div>
    <div class="card-body py-3">
      <div class="chart chart-sm">
        <canvas id="myChartTipoImovel"></canvas>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../../../../service/api/index";
import { jwtDecode } from "jwt-decode";
import "https://cdn.jsdelivr.net/npm/chart.js";
export default {
  name: "AluguelVenda",
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

    this.fetchImoveisPorTipo();
  },
  methods: {
    fetchImoveisPorTipo() {
      let id_user = this.id_user;
      api.listmyImoveis(id_user).then((res) => {
        let imoveis = res.data;

        // Contar imóveis por tipo
        let contagemTipos = {};
        imoveis.forEach((imovel) => {
          let tipo = imovel.info.tipo;
          if (!contagemTipos[tipo]) {
            contagemTipos[tipo] = 0;
          }
          contagemTipos[tipo]++;
        });

        // Preparar dados para o gráfico
        let labels = Object.keys(contagemTipos);
        let data = Object.values(contagemTipos);

        // Gerar o gráfico
        this.renderChart(labels, data);
      });
    },
    renderChart(labels, data) {
      const ctx = document.getElementById("myChartTipoImovel").getContext("2d");
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.myChart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Tipos de Imóveis",
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
