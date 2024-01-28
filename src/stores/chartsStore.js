import { defineStore } from 'pinia'

export const useChartStore = defineStore('chartsStore', {
  state: () => ({
    chartSeries: [
      {
        id: 1,
        title: 'Продукт 1',
        data: [10, 40],
        color: '#0077F7',
        goal: 2000,
      },
      {
        id: 2,
        title: 'Продукт 2',
        data: [20, 80],
        color: '#13D6FF',
        goal: 300,
      },
      {
        id: 3,
        title: 'Продукт 3',
        data: [100, 50],
        color: '#9747FF',
        goal: 300,
      },
    ],
    shownChartsId: [],
  }),
  getters: {
    shownCharts: state => {
      const shownCharts = state.chartSeries.filter(chart =>
        state.shownChartsId.includes(chart.id)
      )

      if (!shownCharts.length) return state.chartSeries

      return shownCharts
    },
    isShownChartId: state => id => state.shownChartsId.includes(id),
  },
  actions: {
    changeChartVisibility(id, isShown) {
      if (isShown) this.shownChartsId.push(id)
      else
        this.shownChartsId = this.shownChartsId.filter(chartId => chartId != id)
    },
    toggleChartVisibility(id) {
      const isVisible = this.isShownChartId(id)

      this.changeChartVisibility(id, !isVisible)
    },
    toggleShownCharts() {
      if (this.shownChartsId.length) this.shownChartsId = []
      else this.shownChartsId = this.chartSeries.map(chart => chart.id)
    },
  },
})
