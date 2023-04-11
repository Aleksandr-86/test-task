<script setup lang="ts">
import { ref } from '@vue/reactivity'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseCheckbox from '@/components/ui/BaseCheckbox.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

/**
 * ! Не выполняет на данный момент никаких функций.
 * Может быть использована для отслеживании состояния
 * нажатия checkbox.
 */
const checkboxIsChecked = ref(false)
</script>

<template>
  <div>
    <div class="h-full">
      <div class="select-none">
        <div class="mb-3 flex items-center justify-center space-x-3">
          <img class="h-12" src="icons/cloud.png" />
          <p class="text-3xl dark:text-gray-200">Облако</p>
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
              <input
                class="form-checkbox h-4 w-4 rounded opacity-0"
                name="description"
                tabindex="-1" />
              <span class="text-lg dark:text-gray-200">
                Запомнить мои регистрационные данные для следующего раза.
              </span>
            </div>
          </div>

          <BaseButton
            class="mt-4"
            label="Войти"
            @click="$router.push('after-sign-in')" />
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
