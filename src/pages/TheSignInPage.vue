<script setup lang="ts">
import TheSignIn from '@/components/TheSignIn.vue'
import TheOAuth from '@/components/TheOAuth.vue'
import MySwitcher from '@/components/MySwitcher.vue'
</script>

<template>
  <div
    class="flex h-screen w-screen justify-center items-center dark:bg-gray-800">
    <div class="h-full flex flex-col gap-20">
      <MySwitcher class="top-4 left-0" />

      <div class="flex gap-20">
        <div>
          <TheSignIn />
          <TheOAuth />
        </div>

        <div class="space-y-24 mt-5">
          <p
            class="text-5xl font-bold text-center text-gray-800 dark:animate-[rainbow_24s_linear_infinite]">
            <span
              >Безопасно загружайте и храните<br />
              ваши важные документы <br />в Облаке!
            </span>
          </p>
          <img class="w-[800px] h-[450px]" src="pictures/cloud-picture.png" />
        </div>
      </div>
    </div>
  </div>
</template>
