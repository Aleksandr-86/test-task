<template>
  <div
    class="flex h-screen w-screen items-center justify-center dark:bg-gray-700 dark:text-gray-200">
    <div class="flex select-none flex-col items-center space-y-4 text-5xl">
      <p v-if="$route.name">
        {{ 'Вы находитесь на странице ' + $route.name.toString() }}
      </p>
      <p v-else>
        {{ 'Вы находитесь на маршруте: ' + $route.path }}
      </p>

      <RouterLink class="text-blue-700 font-bold dark:text-blue-500" to="/">
        Вернуться назад
      </RouterLink>
    </div>
  </div>
</template>
