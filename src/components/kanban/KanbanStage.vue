<script setup>
import draggable from 'vuedraggable'
import KanbanStageHeader from './KanbanStageHeader.vue'
import KanbanTask from './KanbanTask.vue'

defineProps({
  stage: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="bg-neutral-800 h-80 min-w-60 rounded p-2 overflow-auto">
    <KanbanStageHeader :stage="stage" />
    <draggable
      class="space-y-2 min-h-[80%]"
      :list="stage.tasks"
      group="people"
      itemKey="name"
    >
      <template #item="{ element: task }">
        <KanbanTask :task="task" :stage="stage" />
      </template>
    </draggable>
  </div>
</template>
