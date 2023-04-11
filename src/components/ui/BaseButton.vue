<script setup lang="ts">
defineProps<{
  label: string
  iconSrc?: string
}>()
</script>

<template>
  <button
    class="flex h-10 w-full cursor-pointer items-center justify-center rounded-md bg-blue-700 dark:bg-blue-100 text-gray-200 dark:text-gray-700 text-2xl font-bold"
    type="button">
    <span>
      <img v-if="iconSrc" class="mr-4" :src="iconSrc" />
    </span>
    {{ label }}
  </button>
</template>
