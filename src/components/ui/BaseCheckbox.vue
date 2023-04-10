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
  <div class="flex items-center space-x-2 pl-1 bg-amber-200">
    <input
      class="w-4 h-4 form-checkbox rounded"
      type="checkbox"
      v-model="model"
      :value="value" />
    <span class="text-lg font-bold">{{ label }}</span>
  </div>
</template>
