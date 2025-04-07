<script setup lang="ts">
import { reactive, ref } from 'vue'
import axios from 'axios'
import router from '@/router';
import { useToast } from 'vue-toastification'

const form = reactive({
  title: '',
  description: '',
  isLoading: true,
})

const isLoading = ref(false)

const toast = useToast()

const handleSubmit = async () => {
  const newTask = {
    title: form.title,
    description: form.description,
  }

  try {
    isLoading.value = true;
    await axios.post('/api/tasks', newTask)
    toast.success('Task Added Successfully')
    router.push('/')
  } catch (_) {
    toast.error('Task was not added')
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <section class="bg-green-50">
    <div class="container m-auto max-w-2xl py-24">
      <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        <form @submit.prevent="handleSubmit">
          <h2 class="text-3xl text-center font-semibold mb-6">Add Task</h2>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Task Title</label>
            <input
              type="text"
              v-model="form.title"
              id="name"
              name="name"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="eg. Travel to Miami"
              required
            />
          </div>
          <div class="mb-4">
            <label for="description" class="block text-gray-700 font-bold mb-2"
            >Task Description</label
            >
            <textarea
              id="description"
              v-model="form.description"
              name="description"
              class="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="Things to do in miami , etc"
            ></textarea>
          </div>

          <div>
            <button
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
