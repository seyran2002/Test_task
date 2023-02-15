<template>
  <div>
      <div class="relative">
        <p class="absolute p-px
         bg-white text-xs">
          <span class="font-semibold text-xl">Your progress</span> 3 steps completed
        </p>
        <Doughnut 
          ref="chart"
          class="ml-8"
          width="200" height="200" 
          :data="getChartData" :options="options" 
        />
        <p 
          class="absolute top-1/2 left-1/2 percent text-3xl"
        >
          {{ `${getPercent}%` }}
        </p>
      </div>
    <p class="ml-8 mt-[10px] text-center">Completed <br> appointments</p>
  </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Doughnut
  },
  data() {
    return {
      options: {
        cutout: 67,
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  computed: {
    getPercent() {
      return this.$store.getters['getCompletedPercent']
    },
    getChartData() {
      return {
        labels: ['', ''],
        datasets: [
          {
            backgroundColor: (ctx) => {
              const canvas = ctx.chart.ctx;
              const gradient = canvas.createLinearGradient(70,10,0,100);

              gradient.addColorStop(.5, '#ACD0E2');
              gradient.addColorStop(1, '#5AA255');

              return [gradient, '#F1F2F3'];
            },
            data: [
              this.getPercent,
              100-this.getPercent
            ],
            borderWidth: 0,
          }
        ]
      }
    } 
  }
}
</script>

<style scoped>
.percent {
  transform: translate(-17%, -11%);
}
</style>
