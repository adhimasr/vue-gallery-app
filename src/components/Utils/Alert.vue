<script setup>
const props = defineProps({
    visible: { type: [Object, null], default: false }
})
</script>
<template>
    <Transition name="fade">
        <div v-if="props.visible" class="bg-white fixed top-4 right-4 rounded-2xl p-4">
            <slot />
        </div>
    </Transition>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>