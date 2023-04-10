<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <button
    class="flex w-full justify-center items-center bg-blue-200 text-2xl rounded-md cursor-pointer h-10"
    type="button">
    {{ label }}
  </button>
</template>
