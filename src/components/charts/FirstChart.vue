<script setup>
import { firstChartOptions } from './chartsOptions'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart, LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, provide } from 'vue'

use([
  CanvasRenderer,
  BarChart,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
])

provide(THEME_KEY, 'dark')

const option = ref(firstChartOptions)
</script>

<template>
  <v-chart class="h-[600px]" :option="option" autoresize />
</template>
