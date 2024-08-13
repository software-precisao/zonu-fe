<template>
  <div class="container mt-5">
    <canvas id="myBarChart"></canvas>
  </div>
</template>

<script>
export default {
  name: "GraphBarAtivCrmComp",
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = document.getElementById("myBarChart").getContext("2d");

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: [
            "Contato",
            "Atendimento",
            "Procurando Imóvel",
            "Efetuar ligação",
            "WhatsApp (Dia 1)",
            "WhatsApp (Dia 2)",
            "WhatsApp (Dia 3)",
            "Aquecimento 01",
            "Aquecimento 02",
            "Aquecimento 03",
            "Aquecimento 04",
            "Aquecimento 05",
            "Agendado Compromisso",
            "Agendamento Longo",
            "Agendado Visita",
            "Visita Realizada",
            "Proposta",
            "Documentação",
            "Assinatura",
            "Sem Interação",
            "Descartado",
            "Ganho",
          ],
          datasets: [
            {
              label: "Exemplo de Dados",
              data: Array(21)
                .fill()
                .map(() => Math.floor(Math.random() * 5)), // Dados aleatórios entre 0 e 4
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
              min: 0,
              max: 4,
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
