<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <button
    class="flex h-10 w-full cursor-pointer items-center justify-center rounded-md bg-blue-200 text-2xl"
    type="button">
    {{ label }}
  </button>
</template>
