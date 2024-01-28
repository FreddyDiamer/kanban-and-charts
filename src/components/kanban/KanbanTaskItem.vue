<script setup>
import { computed, onUpdated, ref } from 'vue'
import { useRouter } from 'vue-router'
import { EditIcon, BasketIcon, SaveIcon } from '@/components/icons'
import { useKanbanStore } from '@/stores/kanbanStore'

const { stage, task } = defineProps({
  stage: {
    type: Object,
    required: true,
  },
  task: {
    type: Object,
    required: true,
  },
})
const router = useRouter()

const kanbanStore = useKanbanStore()

const editingTasksID = ref([])

const editTask = task => editingTasksID.value.push(task.id)
const isEditingTask = computed(
  () => task => task.isEditing || editingTasksID.value.includes(task.id)
)

const saveTaskText = task => {
  if (task.isEditing) delete task.isEditing

  kanbanStore.changeTaskText(stage.id, task)

  editingTasksID.value = editingTasksID.value.filter(id => id !== task.id)
}

const openTaskPage = () => {
  router.push({
    name: 'kanbanTaskPage',
    params: { stageId: stage.id, taskId: task.id },
  })
}
</script>

<template>
  <div
    class="border p-2 text-sm rounded cursor-pointer hover:shadow-white shadow-md transition-shadow duration-300"
    @click="openTaskPage"
  >
    <div class="flex justify-between items-center space-x-2">
      <input
        v-if="isEditingTask(task)"
        v-model="task.title"
        @click.stop
        type="text"
        class="task-item-inputs text-base w-40"
        placeholder="Введите заголовок"
      />
      <h4
        v-else
        class="text-base text-ellipsis whitespace-nowrap overflow-hidden"
        :title="task.title"
      >
        {{ task.title }}
      </h4>
      <div class="flex justify-end space-x-1">
        <SaveIcon v-if="isEditingTask(task)" @click.stop="saveTaskText(task)" />
        <EditIcon v-else @click.stop="editTask(task)" />
        <BasketIcon
          @click.stop="kanbanStore.deleteStageTask(stage.id, task.id)"
        />
      </div>
    </div>
    <textarea
      v-if="isEditingTask(task)"
      @click.stop
      class="task-item-inputs w-full resize-none mt-2"
      rows="4"
      v-model="task.text"
      placeholder="Введите описание задачи"
    ></textarea>
    <p v-else>{{ task.text }}</p>
  </div>
</template>
