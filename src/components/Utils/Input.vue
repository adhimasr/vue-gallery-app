<script setup>
import { computed } from 'vue';

const props = defineProps({
    modelValue: { type: String, default: '' }
})
const emits = defineEmits(["update:modelValue"])
const model = computed({
    get() {
        return props.modelValue
    },
    set(val) {
        emits("update:modelValue", val)
    }
})
</script>
<template>
    <input v-model="model" v-bind="$attrs" class="bg-slate-700 rounded-2xl p-4" />
</template>