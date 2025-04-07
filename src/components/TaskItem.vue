<script setup lang="ts">
import type { Task } from '@/types/task.types'
import { defineProps, reactive } from 'vue'
import axios from 'axios'
import { DateTimeUtil } from '@/util/date-time-util'
import Checkbox from './AppCheckbox.vue'

const props = defineProps<{ task: Task }>()

const state = reactive({
  isLoading: false,
  isCompleted: false,
})

const toggleIsCompleted = async (completed: boolean) => {
  try {
    state.isLoading = true
    await axios.patch(`/api/tasks/${props.task.id}`, { completed })
    state.isCompleted = !state.isCompleted
  } catch (error) {
    console.error('Unable to update', error)
  } finally {
    state.isLoading = false
  }
}
</script>

<template>
  <div class="flex items-center cursor-pointer bg-white rounded-xl shadow-md w-full p-4 m-4">
     <Checkbox :modelValue="props.task.completed" :onChange="toggleIsCompleted" />
    <div class="flex flex-col">
      <h4 class="text-gray-600 mb-2">{{ props.task.title }}</h4>
      <h3 class="text-xl font-bold mb-2">{{ props.task.description }}</h3>
      <h6 class="text-gray-600">{{ DateTimeUtil.toHumanReadableDate(props.task.createdAt) }}</h6>
    </div>
  </div>
</template>
