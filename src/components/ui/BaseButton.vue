<script setup lang="ts">
defineProps<{
  label: string
  iconSrc?: string
}>()
</script>

<template>
  <button
    class="flex h-10 w-full cursor-pointer items-center justify-center rounded-md bg-blue-700 text-2xl font-bold text-gray-200 dark:bg-blue-100 dark:text-gray-700"
    type="button">
    <span v-if="iconSrc" class="mr-2 h-8 w-8">
      <img :src="iconSrc" />
    </span>
    {{ label }}
  </button>
</template>
