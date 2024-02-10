<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useKanbanStore } from '@/stores/kanbanStore'
import KanbanTaskItem from './KanbanTaskItem.vue'
import KanbanTaskItemChange from './KanbanTaskItemChange.vue'

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

const isEditingTask = computed(() => task.isEditing)

const editTask = () => {
  task.isEditing = true
}

const saveTaskText = () => {
  task.isEditing = false

  kanbanStore.changeTaskText(stage.id, task)
}

const openTaskPage = () => {
  router.push({
    name: 'kanbanTaskPage',
    params: { stageId: stage.id, taskId: task.id },
  })
}

const deleteStageTask = () => {
  kanbanStore.deleteStageTask(stage.id, task.id)
}
</script>

<template>
  <KanbanTaskItem
    v-if="!isEditingTask"
    :task="task"
    @edit-task="editTask"
    @deleteStageTask="deleteStageTask"
    @openTaskPage="openTaskPage"
  />
  <KanbanTaskItemChange
    v-else
    :task="task"
    @deleteStageTask="deleteStageTask"
    @saveTaskText="saveTaskText"
  />
</template>
