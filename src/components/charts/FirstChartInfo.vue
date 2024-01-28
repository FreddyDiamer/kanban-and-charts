<script setup>
const chartInfo = [
  {
    title: 'Общее оплачено',
    value: 1123500,
  },
  {
    title: 'Деньги за мясо',
    value: 145200,
    color: '#9747FF',
  },
  {
    title: 'Расходы на ЗП',
    value: 1223500,
    color: '#0077F7',
  },
  {
    title: 'Прочее',
    value: 23500,
    color: '#13D6FF',
  },
]
</script>

<template>
  <div class="flex overflow-auto ml-3">
    <div
      v-for="item in chartInfo"
      :key="item.title"
      class="w-44 px-3 x border-r border-gray-800 last:border-none whitespace-nowrap pb-2"
    >
      <div class="flex items-center space-x-2 mb-4">
        <span
          v-if="item.color"
          :class="`w-1 h-1 rounded-full`"
          :style="{ background: item.color }"
        ></span>
        <h4 class="text-sm opacity-60 uppercase">{{ item.title }}</h4>
      </div>
      <p class="text-2xl">
        <span> {{ item.value.toLocaleString() }} ₽ </span>
      </p>
    </div>
  </div>
</template>
