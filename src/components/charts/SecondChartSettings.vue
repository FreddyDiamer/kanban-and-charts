<script setup>
import { useChartStore } from '@/stores/chartsStore'

const chartStore = useChartStore()
</script>

<template>
  <div class="px-6">
    <h2 class="text-xl my-6">Прибыль</h2>
    <div class="space-x-2 flex overflow-auto pb-2">
      <button
        class="chart-button"
        :class="{ 'chart-button-active': !chartStore.shownChartsId.length }"
        @click="chartStore.toggleShownCharts"
      >
        Все
      </button>
      <button
        v-for="chartInfo in chartStore.chartSeries"
        :key="chartInfo.id"
        class="chart-button"
        :class="{
          'chart-button-active': chartStore.isShownChartId(chartInfo.id),
        }"
        @click="chartStore.toggleChartVisibility(chartInfo.id)"
      >
        <div
          class="bg-gray-800 rounded-full w-4 h-4 flex items-center justify-center"
        >
          <span
            class="w-2 h-2 rounded-full"
            :style="{ background: chartInfo.color }"
          ></span>
        </div>
        <span>{{ chartInfo.title }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.chart-button {
  @apply px-4 py-2 bg-neutral-800 rounded flex items-center space-x-2 hover:bg-neutral-700 transition-all duration-300 text-zinc-500 whitespace-nowrap;
}
.chart-button-active {
  @apply bg-blue-600 text-white hover:bg-blue-600;
}
</style>
