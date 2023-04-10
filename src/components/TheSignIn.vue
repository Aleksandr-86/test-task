<script setup lang="ts">
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseCheckbox from '@/components/ui/BaseCheckbox.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { ref } from '@vue/reactivity'

const checkboxIsChecked = ref(false)
</script>

<template>
  <div>
    <div class="h-full">
      <div class="select-none">
        <div class="flex mb-3 justify-center items-center space-x-3">
          <img class="h-12" src="icons/cloud-icon.png" />
          <p class="text-3xl">Облако</p>
        </div>

        <form class="w-[400px]">
          <div class="flex flex-col">
            <BaseInput
              label="Эл. почта"
              type="email"
              id="email"
              autocomplete="email"
              icon-src="icons/envelope.svg" />

            <BaseInput
              label="Пароль"
              type="password"
              id="password"
              autocomplete="current-password"
              icon-src="icons/key.svg"
              :show-password="true" />
          </div>

          <div class="mt-2">
            <BaseCheckbox
              label="Запомнить меня"
              v-model="checkboxIsChecked"
              :value="true" />

            <div class="flex items-center space-x-2 pl-1">
              <input class="w-4 h-4 form-checkbox rounded opacity-0" />
              <span class="text-lg">
                Запомнить мои регистрационные данные для следующего раза.
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
