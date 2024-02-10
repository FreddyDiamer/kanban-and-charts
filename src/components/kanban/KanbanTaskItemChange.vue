<script setup>
import { BasketIcon, SaveIcon } from '../icons'

defineEmits(['saveTaskText', 'deleteStageTask'])

defineProps({
  task: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="task-item">
    <div class="flex justify-between items-center space-x-2">
      <input
        v-model="task.title"
        type="text"
        class="task-item-inputs text-base w-40"
        placeholder="Введите заголовок"
      />
      <div class="flex justify-end space-x-1">
        <SaveIcon @click="$emit('saveTaskText')" />
        <BasketIcon @click="$emit('deleteStageTask')" />
      </div>
    </div>
    <textarea
      class="task-item-inputs w-full resize-none mt-2"
      rows="4"
      v-model="task.text"
      placeholder="Введите описание задачи"
    ></textarea>
  </div>
</template>
