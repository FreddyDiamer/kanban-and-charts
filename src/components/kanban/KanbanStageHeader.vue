<script setup>
import { PlusCircleIcon, BasketIcon } from '@/components/icons'
import { useKanbanStore } from '@/stores/kanbanStore'

defineProps({
  stage: {
    type: Object,
    required: true,
  },
})

const kanbanStore = useKanbanStore()
</script>

<template>
  <header class="flex justify-between items-center mb-2">
    <h3 class="text-lg">{{ stage.title }}</h3>
    <div class="flex space-x-2">
      <PlusCircleIcon @click="kanbanStore.addStageTask(stage.id)" />
      <BasketIcon @click="kanbanStore.deleteStage(stage.id)" />
    </div>
  </header>
</template>
