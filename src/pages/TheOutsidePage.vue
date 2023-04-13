<template>
  <div class="flex items-center justify-center">
    <div
      class="flex select-none flex-col items-center space-y-4 text-center text-3xl lg:text-5xl">
      <p v-if="$route.name" class="w-[393px] px-1 lg:w-[1000px]">
        {{ 'Вы находитесь на странице ' + $route.name.toString() }}
      </p>
      <p v-else>
        {{ 'Вы находитесь на маршруте: ' + $route.path }}
      </p>

      <RouterLink class="font-bold text-blue-700 dark:text-blue-500" to="/">
        Вернуться назад
      </RouterLink>
    </div>
  </div>
</template>
