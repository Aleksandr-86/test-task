<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})
</script>

<template>
  <RouterView
    class="flex h-screen w-screen bg-gray-100 text-lg text-gray-800 dark:bg-gray-800 dark:text-gray-200" />
</template>
