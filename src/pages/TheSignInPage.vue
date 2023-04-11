<script setup lang="ts">
import TheSignIn from '@/components/TheSignIn.vue'
import TheOAuth from '@/components/TheOAuth.vue'
import MySwitcher from '@/components/MySwitcher.vue'
</script>

<template>
  <div
    class="flex h-screen w-screen items-center justify-center dark:bg-gray-800">
    <div class="flex h-full flex-col gap-20">
      <MySwitcher class="left-0 top-4" />

      <div class="flex gap-28">
        <div>
          <TheSignIn />
          <TheOAuth />
        </div>

        <div class="mt-5 space-y-24">
          <p
            class="text-center text-5xl font-bold text-gray-800 dark:animate-[rainbow_24s_linear_infinite]">
            <span
              >Безопасно загружайте и храните<br />
              ваши важные документы <br />в Облаке!
            </span>
          </p>
          <img class="x h-[480px]" src="/pictures/cloud-picture.png" />
        </div>
      </div>
    </div>
  </div>
</template>
