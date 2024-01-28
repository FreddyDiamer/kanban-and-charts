import { createRouter, createWebHashHistory } from 'vue-router'

const KanbanBoard = () => import('@/views/KanbanBoard.vue')
const KanbanTaskPage = () => import('@/views/KanbanTaskPage.vue')
const FirstChartPage = () => import('@/views/FirstChartPage.vue')
const SecondChartPage = () => import('@/views/SecondChartPage.vue')

const routes = [
  {
    path: '/',
    redirect: 'kanban',
    name: 'main',
  },
  {
    path: '/kanban',
    name: 'kanban',
    component: KanbanBoard,
  },
  {
    path: '/kanban/:stageId/:taskId',
    name: 'kanbanTaskPage',
    component: KanbanTaskPage,
  },
  {
    path: '/first-chart',
    name: 'firstChart',
    component: FirstChartPage,
  },
  {
    path: '/second-chart',
    name: 'secondChart',
    component: SecondChartPage,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
