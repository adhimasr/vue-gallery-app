<script setup>
const props = defineProps({
    visible: { type: Boolean, default: false }
})
</script>
<template>
    <Transition name="fade">
        <div v-if="props.visible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
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