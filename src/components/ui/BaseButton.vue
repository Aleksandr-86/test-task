<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <button
    class="flex h-10 w-full cursor-pointer items-center justify-center rounded-md bg-blue-700 dark:bg-blue-100 text-blue-100 dark:text-gray-700 text-2xl font-bold"
    type="button">
    {{ label }}
  </button>
</template>
