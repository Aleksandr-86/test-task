<template>
  <div class="flex h-screen w-screen items-center justify-center bg-gray-700">
    <div
      class="flex animate-[rainbow_21s_linear_infinite] select-none flex-col items-center space-y-4 text-5xl">
      <p v-if="$route.name">
        {{ 'Вы находитесь на странице ' + $route.name.toString() }}
      </p>
      <p v-else>
        {{ 'Вы находитесь на маршруте: ' + $route.path }}
      </p>

      <RouterLink to="/">Вернуться назад</RouterLink>
    </div>
  </div>
</template>
