<script setup lang="ts">
import { onMounted } from 'vue'
import { themeIsDark } from '@/store/theme'

onMounted(() => {
  if (localStorage.theme === 'dark') {
    themeIsDark.value = true
  } else {
    themeIsDark.value = false
  }
})

const toggleSwitch = () => {
  if (themeIsDark.value === true) {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
  } else {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
  }
}
</script>

<template>
  <label
    class="relative flex h-[28px] w-max cursor-pointer select-none items-center">
    <input
      class="h-7 w-14 cursor-pointer appearance-none rounded-full border-2 border-gray-300 transition-colors focus:outline-blue-700 dark:border-transparent dark:checked:bg-blue-700 dark:checked:outline-blue-700 dark:focus:outline-double dark:focus:outline-blue-700"
      @click="toggleSwitch"
      type="checkbox"
      name="switcher"
      v-model="themeIsDark" />
    <span
      class="absolute right-7 h-7 w-7 transform rounded-full bg-gray-200 transition-transform" />
  </label>
</template>
