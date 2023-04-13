<script setup lang="ts">
import TheSignIn from '@/components/TheSignIn.vue'
import TheOAuth from '@/components/TheOAuth.vue'
import MySwitcher from '@/components/TheSwitcher.vue'
</script>

<template>
  <div class="items-center justify-center">
    <div class="flex h-screen flex-col">
      <MySwitcher class="left-5 top-5 lg:mb-20" />

      <div class="flex flex-col items-center lg:flex-row lg:space-x-12">
        <div class="flex flex-col items-center">
          <TheSignIn />
          <TheOAuth />
        </div>

        <div
          class="mt-5 flex flex-col justify-center space-y-6 bg-gray-100 dark:bg-gray-800 lg:mt-0 lg:w-[1000px]">
          <div
            class="px-1 text-center text-2xl font-bold dark:animate-[rainbow_24s_linear_infinite] lg:text-5xl">
            Безопасно загружайте и храните ваши важные документы в Облаке!
          </div>

          <div class="h-[221px] w-[393px] lg:h-[562px] lg:w-[1000px]">
            <img src="/pictures/cloud-picture.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
