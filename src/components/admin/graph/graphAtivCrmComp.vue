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
import api from '../../../../service/api/index'

export default {
  name: "SocialMediaChart",
  props: {
    idFunil: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      myChart: null,
      redesSociais: {}
    };
  },
  watch: {
    idFunil: {
      handler(newVal) {
        this.fetchClientes()
      },
      deep: true // Observa mudanças profundas, caso o idFunil seja alterado
    }
  },
  methods: {
    renderChart(reds) {
      // console.log(reds)
      const ctx = document
        .getElementById("myChartRedesSociais")
        .getContext("2d");

      // if (this.myChart) {
      //   this.myChart.destroy();
      // }

      // Preparar dados para o gráfico
      const labels = Object.keys(reds);
      const data = Object.values(reds);

      // Gerar o gráfico
      // console.log(ctx)
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

    fetchClientes() {
      api.getCliente()
        .then((res) => {
          if (res.status === 200) {
            const clientes = res.data;
            const redes = {};

            // Filtra clientes com base no array this.idFunil
            const clientesFiltrados = clientes.filter(cliente =>
              this.idFunil.includes(cliente.id_cliente.toString())
            );

            // Processa dados dos clientes filtrados para contar o número de cada rede social
            clientesFiltrados.forEach(cliente => {
              const origem = cliente.Captacao.origem_captacao;
              if (origem) {
                if (!redes[origem]) {
                  redes[origem] = 0;
                }
                redes[origem] += 1;
              }
            });
            // console.log(redes)
            this.redesSociais = redes;
            this.$nextTick(() => {
              this.renderChart(redes); // Atualiza o gráfico com os dados mais recentes
            });
            // Atualiza o gráfico com os dados mais recentes
          } else {
            console.error('Erro ao buscar clientes:', res.status);
          }
        })
        .catch((error) => {
          console.error('Erro ao buscar clientes:', error);
        });
    }
    ,
  },
  beforeDestroy() {
    if (this.myChart) {
      this.myChart.destroy();
    }
  },
};
</script>
