<script setup>
import { useKanbanStore } from '@/stores/kanbanStore'
import KanbanStage from '@/components/kanban/KanbanStage.vue'
import KanbanBoardHeader from '@/components/kanban/KanbanBoardHeader.vue'
import { onUnmounted, onUpdated } from 'vue'

const kanbanStore = useKanbanStore()

onUnmounted(() => kanbanStore.saveStages())

window.addEventListener('beforeunload', () => kanbanStore.saveStages())
</script>

<template>
  <div class="container mx-auto py-5">
    <h2 class="text-2xl text-center">Kanban board</h2>
    <div class="p-4 border-solid border border-gray-200 rounded mt-5 mx-4">
      <KanbanBoardHeader />
      <div class="mt-4 flex space-x-2 overflow-auto">
        <KanbanStage
          v-for="stage in kanbanStore.stages"
          :stage="stage"
          :key="stage.id"
        />
        <p v-if="!kanbanStore.stages.length">У вас пока нет стадий.</p>
      </div>
    </div>
  </div>
</template>
