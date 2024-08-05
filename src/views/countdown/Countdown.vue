<template>
  <div class="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div class="text-center">
      <img
        src="../../../assets/images/logoZonu.png"
        style="
          width: 100px;
          height: 100px;
          margin-top: -50px;
          margin-bottom: 20px;
        "
        alt="Logo"
      />
      <h1 class="display-4">Lançamento em breve!</h1>
      <h1 class="mt-4">
        {{ countdown.days }} dias - {{ countdown.hours }} horas -
        {{ countdown.minutes }} minutos - {{ countdown.seconds }} segundos
      </h1>
      <p class="lead mt-4">
        Estamos ansiosos para compartilhar essa novidade com você.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countdown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    };
  },
  methods: {
    calculateCountdown() {
      const launchDate = new Date("2024-08-15T00:00:00"); // Data e hora do lançamento
      const currentDate = new Date();
      const timeDiff = launchDate - currentDate;

      if (timeDiff > 0) {
        this.countdown.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        this.countdown.hours = Math.floor(
          (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.countdown.minutes = Math.floor(
          (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
        );
        this.countdown.seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      } else {
        // Caso a contagem tenha terminado
        this.countdown.days = 0;
        this.countdown.hours = 0;
        this.countdown.minutes = 0;
        this.countdown.seconds = 0;
      }
    },
    startCountdown() {
      this.calculateCountdown();
      setInterval(this.calculateCountdown, 1000);
    },
  },
  mounted() {
    this.startCountdown();
  },
};
</script>

<style scoped>
.vh-100 {
  height: 100vh;
}
</style>
