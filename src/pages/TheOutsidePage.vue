<template>
  <div class="w-screen h-screen flex justify-center items-center bg-gray-700">
    <div
      class="flex flex-col items-center space-y-4 text-5xl select-none animate-[rainbow_21s_linear_infinite]">
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
