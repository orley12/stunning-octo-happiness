import { createRouter, createWebHistory } from 'vue-router'
import TaskListingView from '../views/TaskListingView.vue'
import AddTaskView from '../views/AddTaskView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tasks',
      component: TaskListingView,
    },
    {
      path: '/tasks/add',
      name: 'add',
      component: AddTaskView,
    },
  ],
})

export default router
