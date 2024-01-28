import { useChartStore } from '@/stores/chartsStore'
import { computed } from 'vue'

const chartStore = useChartStore()

function getSeriesTooltipHtml(params) {
  let tooltipMarkup = ''
  for (const series of params) {
    if (series.seriesType == 'line') continue

    tooltipMarkup += `<div>
                        <span class="text-sm">${series.seriesName}</span>
                        <div class="flex items-center space-x-2">
                          <span class="w-2 h-2 rounded-full" style="background: ${series.color}"></span>
                          <span class="text-white">${series.data}</span></div>
                      </div>`
  }

  return `<div class="flex space-x-4 text-">${tooltipMarkup}</div>`
}

function getSecondChartOptions(chartsInfo) {
  return {
    backgroundColor: {
      colorStops: [
        {
          offset: 0,
          color: '#1B1B1E',
        },
      ],
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: '#212226',
      borderColor: '#212226',
    },
    xAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: '#292829',
        },
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        color: '#656565',
      },
    },
    yAxis: {
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: '#656565',
      },
      type: 'category',
      data: ['Факт', 'План'],
    },
    series: chartsInfo.map(chart => {
      return {
        name: chart.title,
        type: 'bar',
        stack: 'y',
        data: chart.data,
        itemStyle: {
          color: chart.color,
          borderRadius: 3,
          borderColor: '#1B1B1E',
          borderWidth: 1,
        },
      }
    }),
  }
}

const firstChartOptions = {
  backgroundColor: {
    colorStops: [
      {
        offset: 0,
        color: '#1B1B1E',
      },
    ],
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: '#212226',
    borderColor: '#212226',
    formatter(params) {
      const tooltipMarkup = getSeriesTooltipHtml(params)

      return tooltipMarkup
    },
  },
  xAxis: {
    data: ['Янв', 'Фев', 'Март', 'Апр', 'Май'],
    axisLine: {
      show: true,
      lineStyle: {
        color: '#292829',
      },
    },
    splitLine: {
      show: false,
    },
    axisLabel: {
      color: '#656565',
    },
  },
  yAxis: {
    axisLabel: {
      color: '#656565',
    },
  },
  series: [
    {
      name: 'Прочее',
      type: 'bar',
      stack: 'x',
      data: [12, 15, 35, 40, 10],
      itemStyle: {
        color: '#9747FF',
        borderRadius: 3,
        borderColor: '#1B1B1E',
        borderWidth: 1,
      },
    },
    {
      name: 'ЗП',
      type: 'bar',
      stack: 'x',
      data: [30, 55, 25, 10, 50],
      itemStyle: {
        color: '#0077F7',
        borderRadius: 3,
        borderColor: '#1B1B1E',
        borderWidth: 1,
      },
    },
    {
      name: 'Мясо',
      type: 'bar',
      stack: 'x',
      data: [32, 15, 15, 20, 30],
      itemStyle: {
        color: '#13D6FF',
        borderRadius: 3,
        borderColor: '#1B1B1E',
        borderWidth: 1,
      },
    },
    {
      name: '',
      type: 'line',
      data: [12, 35, 15, 40, 50],
      smooth: true,
      symbol: 'none',
      itemStyle: {
        color: '#C6EC92',
        borderColor: '#1B1B1E',
      },
    },
  ],
}

const secondChartOptions = computed(() =>
  getSecondChartOptions(chartStore.shownCharts)
)

export { firstChartOptions, secondChartOptions }
