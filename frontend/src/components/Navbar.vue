<template>
    <div class="flex flex-1 items-center justify-center bg-gray-800">
        <div class="flex items-center justify-center basis-1/4">
          <img src="/favicon.ico" alt="" class="h-10 w-auto my-2">
        </div>
        <div class="flex space-x-4 basis-3/4">
          <div>
            <RouterLink class="rounded-md px-4 py-2 text-base font-medium hover:bg-white hover:text-black hover:cursor-pointer" to="/">Főoldal</RouterLink>
            <RouterLink class="rounded-md px-4 py-2 text-base font-medium hover:bg-white hover:text-black hover:cursor-pointer" to="/about">Kapcsolat</RouterLink>
          </div>
        </div>
    </div>
</template>

  <script setup>
  </script>