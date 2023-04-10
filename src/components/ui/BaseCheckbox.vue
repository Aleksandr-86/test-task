<script setup lang="ts">
import { computed, defineEmits } from 'vue'

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
  <div class="flex items-center space-x-2 pl-1">
    <input
      class="form-checkbox h-4 w-4 rounded"
      type="checkbox"
      v-model="model"
      :value="value" />
    <span class="text-lg font-bold">{{ label }}</span>
  </div>
</template>
