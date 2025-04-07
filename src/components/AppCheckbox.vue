<script setup lang="ts">
import { ref, defineProps } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  onChange: {
    type: Function,
    required: true,
  },
})

const isChecked = ref(props.modelValue)

const handleCheckboxChange = () => props.onChange(isChecked.value)
</script>

<template>
  <div class="flex items-center">
    <input
      type="checkbox"
      id="my-checkbox"
      v-model="isChecked"
      @change="handleCheckboxChange"
      class="form-checkbox h-5 w-5 mr-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-500"
    />
  </div>
</template>
