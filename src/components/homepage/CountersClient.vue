<template>
  <div class="counter-function mt-6 text-capitalize">
    <v-container fluid>
      <v-row>
        <v-col col="3" md="3" sm="3" lg="3">
          <div class="clients text-center mt-3 mb-2">
            <h2 class="mt-3 mb-2 green-color">Clients</h2>
            <p class="mt-3 mb-2 white-color bold-text">+{{ numberClients }}</p>
          </div>
        </v-col>
        <v-col col="3" md="3" sm="3" lg="3">
          <div class="clients text-center mt-3 mb-2">
            <h2 class="mt-3 mb-2 green-color">Projects Completed</h2>
            <p class="mt-3 mb-2 white-color bold-text">+{{ projectComp }}</p>
          </div>
        </v-col>
        <v-col col="3" md="3" sm="3" lg="3">
          <div class="clients text-center mt-3 mb-2">
            <h2 class="mt-3 mb-2 green-color">Working Hours</h2>
            <p class="mt-3 mb-2 white-color bold-text">+{{ workHour }}</p>
          </div>
        </v-col>
        <v-col col="3" md="3" sm="3" lg="3">
          <div class="clients text-center mt-3 mb-2">
            <h2 class="mt-3 mb-2 green-color">Countries</h2>
            <p class="mt-3 mb-2 white-color bold-text">+{{ counters }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    numberClients: 0,
    projectComp: 0,
    workHour: 2440.0,
    counters: 0,
    clientGoal: 100,
    projectGoal: 50,
    workHourGoal: 2500.0,
    countriesGoal: 10,
    intervalId: null,
  }),
  mounted() {
    this.startCounter();
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  methods: {
    startCounter() {
      this.incrementClients();
      this.incrementProjects();
      this.incrementWorkingHours();
      this.incrementCountries();
    },
    incrementClients() {
      const clientInterval = setInterval(() => {
        if (this.numberClients < this.clientGoal) {
          this.numberClients++;
        } else {
          clearInterval(clientInterval);
        }
      }, 100);
    },
    incrementProjects() {
      const projectInterval = setInterval(() => {
        if (this.projectComp < this.projectGoal) {
          this.projectComp++;
        } else {
          clearInterval(projectInterval);
        }
      }, 200);
    },
    incrementWorkingHours() {
      const workHourInterval = setInterval(() => {
        if (this.workHour < this.workHourGoal) {
          this.workHour++;
        } else {
          clearInterval(workHourInterval);
        }
      }, 200);
    },
    incrementCountries() {
      const countriesInterval = setInterval(() => {
        if (this.counters < this.countriesGoal) {
          this.counters++;
        } else {
          clearInterval(countriesInterval);
        }
      }, 500);
    },
  },
};
</script>

<style scoped lang="scss">
@media (max-width: 670px) {
  .clients {
    h2 {
      font-size: 10px !important;
      white-space: nowrap;
    }
  }
  p {
    font-size: 15px;
  }
}
@media (max-width: 768px) {
  .clients {
    h2 {
      font-size: 18px;
      white-space: nowrap;
    }
  }
  p {
    font-size: 15px;
  }
}
.counter-function {
  background-color: #000;
}
</style>
