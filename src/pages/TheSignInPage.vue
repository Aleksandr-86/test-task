<script setup lang="ts">
import TheSignIn from '@/components/TheSignIn.vue'
import TheOAuth from '@/components/TheOAuth.vue'
import MySwither from '@/components/MySwither.vue'
</script>

<template>
  <div class="flex h-screen w-screen justify-center dark:bg-black">
    <MySwither />
    <TheSignIn />
    <TheOAuth />
  </div>
</template>
