<script setup>
import SecondChart from '@/components/charts/SecondChart.vue'
import SecondChartSettings from '@/components/charts/SecondChartSettings.vue'
import SecondChartInfo from '@/components/charts/SecondChartInfo.vue'
import { useChartStore } from '@/stores/chartsStore'

const chartStore = useChartStore()
</script>

<template>
  <SecondChartSettings />
  <SecondChartInfo />
  <SecondChart />
</template>
