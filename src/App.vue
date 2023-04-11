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
  <RouterView />
</template>
