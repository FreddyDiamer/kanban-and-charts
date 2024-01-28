<script setup>
import { ref } from 'vue'
import { useKanbanStore } from '@/stores/kanbanStore'

const kanbanStore = useKanbanStore()

const newStageName = ref('')

const onCreateStage = () => {
  if (!newStageName.value) return

  kanbanStore.createStage(newStageName.value)

  newStageName.value = ''
}
</script>

<template>
  <div>
    <input
      type="text"
      class="bg-transparent border rounded px-3 py-2 outline-none placeholder:text-sm w-full sm:w-60 sm:rounded-r-none"
      placeholder="Введитие название стадии"
      v-model="newStageName"
      @keypress.enter="onCreateStage"
    />
    <button
      class="button border border-blue-800 mt-2 ml-auto sm:rounded-l-none"
      @click="onCreateStage"
    >
      Создать стадию
    </button>
  </div>
</template>
