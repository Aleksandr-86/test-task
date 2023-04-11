<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import { themeIsDark } from '@/store/theme'
</script>

<template>
  <div class="space-y-3">
    <BaseButton label="Войти через Google" icon-src="icons/google.svg" />
    <BaseButton label="Войти через Facebook" icon-src="icons/facebook.svg" />

    <BaseButton
      v-if="themeIsDark"
      label="Войти через Apple"
      icon-src="icons/apple-black.svg" />
    <BaseButton
      v-else
      label="Войти через Apple"
      icon-src="icons/apple-white.svg" />
  </div>
</template>
