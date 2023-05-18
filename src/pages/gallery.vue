<script setup>
import { ref, reactive } from 'vue';
import useStorage from '../composables/storage'
import { UtilsButton, UtilsInput, UtilsModal } from "../components"

const modal = ref(false)
const form = reactive({ 
    name: '',
    data: '',
    tags: []
})

const { uploadFile, isUploading } = useStorage()

const handleDrop = async (event) => {
    const files = event.dataTransfer.files[0];
    if (files) {
        const data = await uploadFile(files);
        form.data = data;
    }
}
</script>

<template>
    <div class="h-screen w-full bg-slate-900">
        <div class="container lg:max-w-5xl mx-auto p-4">
            <div class="flex flex-row justify-between">
                <h1 class="font-bold text-white">Gallery</h1>
                <UtilsButton text="Add" @click="modal = !modal" />
            </div>
        </div>

        <UtilsModal :visible="modal">
            <div class="md:w-[512px] bg-slate-600 flex flex-col gap-4 rounded-3xl p-4">
                <div class="flex flex-row justify-between">
                    <h2 class="text-white font-bold">Add Gallery</h2>
                    <span class="cursor-pointer" @click="modal = false">X</span>
                </div>
                <form class="flex flex-col gap-4">
                    <UtilsInput v-model="form.name" placeholder="Name" />
                    <div class="h-[288px] flex flex-col justify-center items-center border-2 border-slate-700 rounded-[28px] p-4" @drop.prevent="handleDrop" @dragover.prevent>
                        <span v-if="isUploading" class="text-white font-semibold animate-bounce">Upload...</span>
                        <span v-else-if="!form.data" class="text-white font-semibold">Drag Here</span>
                        <img v-else :src="form.data" class="object-cover" />
                    </div>
                    <UtilsButton text="Update Gallery" />
                </form>
            </div>
        </UtilsModal>
    </div>
</template>