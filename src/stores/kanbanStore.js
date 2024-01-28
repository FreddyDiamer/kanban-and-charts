import { defineStore } from 'pinia'

export const useKanbanStore = defineStore('kanbanStore', {
  state: () => ({
    stages: JSON.parse(localStorage.getItem('stages')) || [],
  }),
  actions: {
    createStage(stageName) {
      const stageInfo = {
        id: Date.now(),
        title: stageName,
        tasks: [],
      }

      this.stages.push(stageInfo)
    },
    deleteStage(id) {
      this.stages = this.stages.filter(stage => stage.id !== id)
    },
    getTaskById(stageId, taskId) {
      const stage = this.stages.find(stage => stage.id == stageId)
      const task = stage.tasks.find(task => task.id == taskId)

      return task
    },
    addStageTask(stageId) {
      const stage = this.stages.find(stage => stage.id === stageId)
      const newTaskData = {
        id: Date.now(),
        title: '',
        text: '',
        isEditing: true,
      }

      stage.tasks.push(newTaskData)
    },
    deleteStageTask(stageId, taskId) {
      const stage = this.stages.find(stage => stage.id === stageId)

      stage.tasks = stage.tasks.filter(task => task.id !== taskId)
    },
    changeTaskText(stageId, newTaskInfo) {
      const stage = this.stages.find(stage => stage.id === stageId)

      const taskIndex = stage.tasks.findIndex(task => task.id == newTaskInfo.id)
      stage.tasks[taskIndex] = newTaskInfo
    },
    saveStages() {
      console.log({ st: this.stages })
      localStorage.setItem('stages', JSON.stringify(this.stages))
    },
  },
})
