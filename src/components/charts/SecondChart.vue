<script setup>
import { secondChartOptions } from './chartsOptions'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, provide, watch, computed } from 'vue'

use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
])

provide(THEME_KEY, 'dark')

const option = secondChartOptions
</script>

<template>
  <v-chart class="h-[300px]" :option="option" autoresize />
</template>
