<script setup lang="ts">
import { themeIsDark } from '@/store/theme'
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
  <div class="w-80 space-y-3">
    <BaseButton
      @click="$router.push('sign-in-google')"
      label="Войти через Google"
      icon-src="/icons/google.svg" />
    <BaseButton
      @click="$router.push('sign-in-facebook')"
      label="Войти через Facebook"
      icon-src="/icons/facebook.svg" />

    <BaseButton
      v-if="themeIsDark"
      @click="$router.push('sign-in-apple')"
      label="Войти через Apple"
      icon-src="/icons/apple-black.svg" />
    <BaseButton
      v-else
      @click="$router.push('sign-in-apple')"
      label="Войти через Apple"
      icon-src="/icons/apple-white.svg" />
  </div>
</template>
