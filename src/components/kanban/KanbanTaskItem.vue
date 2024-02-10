<script setup>
import { BasketIcon, EditIcon } from '../icons'

defineEmits(['editTask', 'deleteStageTask', 'openTaskPage'])

defineProps({
  task: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="task-item" @click="$emit('openTaskPage')">
    <div class="flex justify-between items-center space-x-2">
      <h4
        class="text-base text-ellipsis whitespace-nowrap overflow-hidden"
        :title="task.title"
      >
        {{ task.title }}
      </h4>
      <div class="flex justify-end space-x-1">
        <EditIcon @click.stop="$emit('editTask')" />
        <BasketIcon @click.stop="$emit('deleteStageTask')" />
      </div>
    </div>
    <p>{{ task.text }}</p>
  </div>
</template>
