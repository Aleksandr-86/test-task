<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: boolean
  value: boolean
  label: string
}>()

const emit = defineEmits(['update:modelValue'])

const model = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <div class="flex items-center space-x-2 px-1">
    <input
      class="form-checkbox h-5 w-5 cursor-pointer rounded outline-blue-700 checked:outline-blue-700 focus:outline-blue-700"
      type="checkbox"
      name="checkbox"
      v-model="model"
      :value="value" />
    <span class="font-bold">{{ label }}</span>
  </div>
</template>
