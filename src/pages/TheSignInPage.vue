<script setup lang="ts">
import TheSignIn from '@/components/TheSignIn.vue'
import TheOAuth from '@/components/TheOAuth.vue'
import MySwitcher from '@/components/MySwitcher.vue'
import BaseSeparator from '@/components/ui/BaseSeparator.vue'
</script>

<template>
  <div class="flex h-screen w-screen justify-center dark:bg-gray-800">
    <MySwitcher />

    <div>
      <TheSignIn />
      <BaseSeparator />
      <TheOAuth />
    </div>
  </div>
</template>
