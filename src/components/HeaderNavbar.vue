<script setup>
import { LogoIcon } from './icons'
</script>

<template>
  <nav class="bg-gray-900">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 gap-4"
    >
      <router-link :to="{ name: 'kanban' }">
        <div class="flex items-center space-x-3 rtl:space-x-reverse">
          <LogoIcon />
          <span class="self-center text-2xl font-semibold whitespace-nowrap"
            >Sotnikov Test Task</span
          >
        </div>
      </router-link>
      <ul class="flex space-x-5 justify-around w-full sm:w-max">
        <li><router-link :to="{ name: 'kanban' }">Kanban</router-link></li>
        <li>
          <router-link :to="{ name: 'firstChart' }">График 1</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'secondChart' }">График 2</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
