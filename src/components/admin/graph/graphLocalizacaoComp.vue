<template>
  <div class="card flex-fill w-100">
    <div class="card-header">
      <h5 class="card-title mb-0">Imóveis por cidades</h5>
    </div>
    <div class="card-body py-3">
      <div class="chart chart-sm">
        <canvas id="myChartCidade"></canvas>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../../../../service/api/index";
import { jwtDecode } from "jwt-decode";
import "https://cdn.jsdelivr.net/npm/chart.js";
export default {
  name: "UsoGraphdmin",
  data() {
    return {
      token: localStorage.getItem("token"),
      id_user: "",
      myChart: null,
    };
  },
  mounted() {
    let token = this.token;
    let decode = jwtDecode(token);
    let id_user = decode.id_user;

    this.id_user = id_user;

    this.fetchAllImoveisPorCidade();
  },
  methods: {
    fetchAllImoveisPorCidade() {
      api.listallImoveis().then((res) => {
        let imoveis = res.data;

        // Contar imóveis por cidade
        let contagemCidades = {};
        imoveis.forEach((imovel) => {
          let cidade = imovel.localizacao.cidade;
          if (!contagemCidades[cidade]) {
            contagemCidades[cidade] = 0;
          }
          contagemCidades[cidade]++;
        });

        // Preparar dados para o gráfico
        let labels = Object.keys(contagemCidades).map((cidade) => {
          return cidade.length > 15 ? cidade.substring(0, 15) + "..." : cidade;
        });
        let data = Object.values(contagemCidades);

        // Cores personalizadas para o gráfico
        const colors = [
          "rgb(192, 75, 192)",
          "rgb(54, 162, 235)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
          "rgb(255, 159, 64)",
          "rgb(99, 255, 132)",
          "rgb(162, 54, 235)",
          "rgb(255, 99, 666)",
        ];

        // Gerar o gráfico
        const ctx = document.getElementById("myChartCidade").getContext("2d");
        if (this.myChart) {
          this.myChart.destroy();
        }
        this.myChart = new Chart(ctx, {
          type: "pie",
          data: {
            labels: labels,
            datasets: [
              {
                label: "Imóveis por Cidade",
                data: data,
                backgroundColor: colors,
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
      });
    },
  },
};
</script>
