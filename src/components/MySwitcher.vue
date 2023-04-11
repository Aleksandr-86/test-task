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
    class="flex items-center h-[28px] relative w-max cursor-pointer select-none">
    <input
      class="appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full border-2 border-gray-300 dark:border-transparent focus:outline-blue-700 dark:checked:bg-blue-700 dark:checked:outline-blue-700 dark:focus:outline-blue-700 dark:focus:outline-double"
      @click="toggleSwitch"
      type="checkbox"
      name="switcher"
      v-model="themeIsDark" />
    <span
      class="w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-gray-200" />
  </label>
</template>
