<script setup lang="ts">
import { ref } from '@vue/reactivity'

defineProps<{
  label: string
  type: string
  id: string
  autocomplete: string
  iconSrc?: string // Наличие иконки слева
  showPassword?: boolean // Наличие иконки показа скрытого пароля
}>()

const inputContentRef = ref('')
const typeRef = ref('password')

const changeInputType = () => {
  if (typeRef.value === 'password') {
    typeRef.value = 'text'
  } else {
    typeRef.value = 'password'
  }
}
</script>

<template>
  <div class="flex flex-col space-y-2">
    <div class="h-6">
      <transition
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
        enter-active-class="transition linear duration-700"
        leave-active-class="transition linear duration-700">
        <label v-if="inputContentRef" class="text-lg font-bold" :for="id">
          {{ label }}
        </label>
      </transition>
    </div>

    <div class="relative">
      <input
        class="h-10 w-full rounded text-2xl shadow-[inset_1px_1px_2px_rgba(0,0,0,0.5)]"
        :class="[
          { 'px-5': !iconSrc },
          { 'pe-5 ps-10': iconSrc && !showPassword },
          { 'px-10 ': iconSrc && showPassword }
        ]"
        :type="type === 'password' ? typeRef : type"
        :name="id"
        :id="id"
        :placeholder="label"
        :autocomplete="autocomplete"
        v-model="inputContentRef" />

      <!-- Иконка слева -->
      <div v-if="iconSrc" class="absolute bottom-0 left-0 top-0 flex p-2">
        <img :src="iconSrc" />
      </div>

      <!-- Иконка справа -->
      <transition
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
        enter-active-class="transition linear duration-700"
        leave-active-class="transition linear duration-700">
        <img
          v-if="showPassword && inputContentRef"
          @click="changeInputType"
          class="absolute right-2 top-2 h-6 w-6 cursor-pointer"
          :src="
            typeRef === 'text' ? 'icons/eye-closed.svg' : 'icons/eye-opened.svg'
          " />
      </transition>
    </div>
  </div>
</template>
