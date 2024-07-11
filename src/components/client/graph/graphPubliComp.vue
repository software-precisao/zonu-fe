<template>
  <div class="card flex-fill w-100" style="height: 250px">
    <div class="card-header">
      <h5 class="card-title mb-0">Publicado X Não Publicado</h5>
    </div>
    <div class="card-body py-3">
      <div class="chart chart-sm">
        <canvas id="myChartPublicacao"></canvas>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../../../../service/api/index";
import { jwtDecode } from "jwt-decode";
import "https://cdn.jsdelivr.net/npm/chart.js";
export default {
  name: "Publicado",
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

    this.fetchImoveisPorPublicacao();
  },
  methods: {
    fetchImoveisPorPublicacao() {
      let id_user = this.id_user;
      api.listmyImoveis(id_user).then((res) => {
        let imoveis = res.data;

        // Contar imóveis por status de publicação
        let contagemPublicacao = { publicado: 0, naoPublicado: 0 };
        imoveis.forEach((imovel) => {
          if (
            imovel.publicacao &&
            imovel.publicacao.mostrar_imovel_publi === "Sim"
          ) {
            contagemPublicacao.publicado++;
          } else {
            contagemPublicacao.naoPublicado++;
          }
        });

        // Preparar dados para o gráfico
        let labels = ["Publicado", "Não Publicado"];
        let data = [
          contagemPublicacao.publicado,
          contagemPublicacao.naoPublicado,
        ];

        // Gerar o gráfico
        this.renderChart(labels, data);
      });
    },
    renderChart(labels, data) {
      const ctx = document.getElementById("myChartPublicacao").getContext("2d");
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Imóveis Publicados vs Não Publicados",
              data: data,
              backgroundColor: ["rgb(75, 192, 192)", "rgb(255, 99, 132)"],
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
