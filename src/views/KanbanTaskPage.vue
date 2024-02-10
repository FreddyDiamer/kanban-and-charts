<script setup>
import { useRoute } from 'vue-router'
import { useKanbanStore } from '@/stores/kanbanStore'

const route = useRoute()
const kanbanStore = useKanbanStore()

const taskId = route.params.taskId
const stageId = route.params.stageId

const task = kanbanStore.getTaskById(stageId, taskId)
</script>

<template>
  <div class="container mx-auto mt-3">
    <h2 class="text-center text-2xl">Страница задачи</h2>
    <div class="space-y-3">
      <div>
        <h3 class="mb-1">Заголовок задачи:</h3>
        <p class="mx-[30px] py-1 text-base">{{ task.title }}</p>
      </div>
      <div>
        <h3 class="mb-1">Описание:</h3>
        <p class="mx-[30px] py-1 text-sm">{{ task.text }}</p>
      </div>
    </div>
  </div>
</template>
