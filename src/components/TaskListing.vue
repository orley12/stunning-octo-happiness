<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import type { Task } from '@/types/task.types'
import axios from 'axios'
import TaskItem from '@/components/TaskItem.vue'
import { useToast } from 'vue-toastification'


const toast = useToast()


const state = reactive({
  tasks: [] as Task[],
  isLoading: true,
})

onMounted(async () => {
  try {
    const response = await axios.get('/api/tasks')
    state.tasks = response.data
    toast.success(`fetched tasks ${state.tasks}`)

  } catch (error) {
    toast.success(`Error fetching tasks`)
  } finally {
    state.isLoading = false
  }
})
</script>

<template>
  <section class="">
    <div class="container m-auto max-w-2xl py-24">
      <div >
        <div class="flex justify-center">
          <h2 class="text-3xl font-bold text-green-500">Tasks</h2>
        </div>


        <TaskItem v-for="task in state.tasks" :key="task.id" :task="task" />
      </div>
    </div>
  </section>
</template>
