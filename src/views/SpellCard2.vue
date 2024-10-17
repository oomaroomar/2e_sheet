<script setup lang="ts">
// import wspells from '../json/wizards.json'
const response = await fetch('../json/wizards.json', {
  headers: {
    accept: 'application/json',
    'User-agent': 'learning app',
  },
})
console.log(response)
</script>

<template>
  <div
    class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center gap-x-4"
  >
    <div class="shrink-0">
      <img class="size-12" src="../assets/logo.svg" alt="ChitChat Logo" />
    </div>
    <div>
      <div class="text-xl font-medium text-black">ChitChat</div>
      <p class="text-slate-500">You have a new message!</p>
    </div>
  </div>
</template>
