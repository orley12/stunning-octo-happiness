<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

const isActiveLink = (routePath: string) => {
  const route = useRoute()
  return route.path === routePath
}
</script>

<template>
  <nav class="bg-fresh-green">
    <div class="flex h-20 items-center justify-center space-x-8">
      <RouterLink
        to="/"
        :class="[
          isActiveLink('/') ? 'bg-green-900' : 'hover:bg-gray-900 hover:text-white',
          'text-white',
          'px-3',
          'py-2',
          'rounded-md',
        ]"
        >Tasks</RouterLink
      >
      <RouterLink
        to="/tasks/add"
        :class="[
          isActiveLink('/tasks/add') ? 'bg-green-900' : 'hover:bg-gray-900 hover:text-white',
          'text-white',
          'px-3',
          'py-2',
          'rounded-md',
        ]"
        >Add Task</RouterLink
      >
    </div>
  </nav>
</template>
