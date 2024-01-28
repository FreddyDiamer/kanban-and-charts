<script setup>
import { useChartStore } from '@/stores/chartsStore'
import { computed } from 'vue'

const chartStore = useChartStore()

const chartSeries = computed(() =>
  chartStore.chartSeries.map(chart => {
    const totalCompleted = chart.data.reduce((prev, cur) => prev + cur, 0)
    const completedPercent = Math.round((totalCompleted / chart.goal) * 100)

    chart.totalCompleted = totalCompleted
    chart.completedPercent = completedPercent

    return chart
  })
)
</script>

<template>
  <div class="flex mt-8 overflow-auto">
    <div
      v-for="chart in chartSeries"
      :key="chart.id"
      class="w-72 border-r border-gray-700 last:border-none px-6 shrink-0"
    >
      <h4 class="text-gray-500 mb-4">{{ chart.title }}</h4>
      <div>
        <span class="text-2xl">{{ chart.totalCompleted }}</span>
        <br />
        <span class="text-gray-600 text-base">/{{ chart.goal }}</span>
      </div>
      <div class="flex gap-4 items-center">
        <div class="py-4">
          <div class="h-1 w-40 bg-gray-400 rounded">
            <div
              class="h-full bg-success rounded"
              :style="{ width: chart.completedPercent + '%' }"
            ></div>
          </div>
        </div>
        <span class="text-success">{{ chart.completedPercent }}%</span>
      </div>
    </div>
  </div>
</template>
