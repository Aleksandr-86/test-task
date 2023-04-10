<script setup lang="ts">
import BaseInput from '@/components/ui/BaseInput.vue'
// import BaseCheckbox from '@/components/ui/BaseCheckbox.vue.js'
// import
</script>

<template>
  <div>
    <div class="h-full">
      <!-- Left column container with background-->
      <div
        class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
        <!-- <div
          class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="w-full"
            alt="Sample image" />
        </div> -->

        <!-- Right column container -->
        <!-- <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12"> -->

        <div>
          <form>
            <div class="flex flex-col space-y-3">
              <BaseInput
                label="Эл. почта"
                type="email"
                id="email"
                autocomplete="email"
                icon-src="icons/key.svg" />

              <BaseInput
                label="Пароль"
                type="password"
                id="password"
                autocomplete="current-password"
                icon-src="icons/envelope.svg"
                :show-password="true" />
            </div>

            <!-- <BaseCheckbox label="Remember me" value="remember" /> -->

            <div class="mb-6 flex items-center justify-between">
              <!--Forgot password link-->
              <a href="#!">Forgot password?</a>
            </div>

            <!-- Login button -->
            <div class="text-center lg:text-left">
              <button
                type="button"
                class="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light">
                Login
              </button>

              <!-- Register link -->
              <p class="mb-0 mt-2 pt-1 text-sm font-semibold">
                Don't have an account?
                <a
                  href="#!"
                  class="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                  >Register</a
                >
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
