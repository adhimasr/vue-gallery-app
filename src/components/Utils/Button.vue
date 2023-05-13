<script setup>
const props = defineProps({
  text: String
})
</script>

<template>
    <button class="bg-white block rounded-xl px-4 py-2">
      <span class="text-sm text-black font-bold">{{ text }}</span>
    </button>
</template>