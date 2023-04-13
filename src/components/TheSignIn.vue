<script setup lang="ts">
import { ref } from '@vue/reactivity'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseCheckbox from '@/components/ui/BaseCheckbox.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseSeparator from '@/components/ui/BaseSeparator.vue'

/**
 * ! Не выполняет на данный момент никаких функций.
 * Может быть использована для отслеживании состояния
 * нажатия checkbox.
 */
const checkboxIsChecked = ref(false)
</script>

<template>
  <div class="flex w-[353px] select-none flex-col items-center">
    <div class="mb-2 mt-7 flex items-center justify-center space-x-3">
      <div class="h-12 w-20">
        <img src="/icons/cloud.png" />
      </div>
      <p class="text-3xl">Облако</p>
    </div>

    <form class="bg-red flex flex-col">
      <div class="flex flex-col gap-1">
        <BaseInput
          label="Эл. почта"
          type="email"
          id="email"
          autocomplete="email"
          icon-src="/icons/envelope.svg" />

        <BaseInput
          label="Пароль"
          type="password"
          id="password"
          autocomplete="current-password"
          icon-src="/icons/key.svg"
          :show-password="true" />
      </div>

      <div class="mt-5">
        <BaseCheckbox
          label="Запомнить меня"
          v-model="checkboxIsChecked"
          :value="true" />

        <div class="flex items-center pl-[32.5px]">
          <span>
            Запомнить мои регистрационные данные для следующего раза.
          </span>
        </div>
      </div>

      <div class="flex justify-center">
        <div class="mt-5 w-80">
          <BaseButton @click="$router.push('after-sign-in')" label="Войти" />
        </div>
      </div>

      <BaseSeparator class="mt-5" />
    </form>

    <div class="mb-5 mt-3 flex space-x-2">
      <p class="">Не имеете аккаунт?</p>
      <span>
        <RouterLink
          class="font-bold text-blue-700 dark:text-blue-500"
          to="sign-up"
          >Зарегистрируйтесь!</RouterLink
        >
      </span>
    </div>
  </div>
</template>
