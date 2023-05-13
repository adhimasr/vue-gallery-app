<script setup>
import { reactive } from 'vue';
import useStorage from '../composables/storage'
import { UtilsButton, UtilsInput, UtilsModal } from "../components"

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
        console.log({ data, form })
        form.data = data;
    }
}
</script>

<template>
    <div class="h-screen w-full bg-slate-900">
        <div class="container lg:max-w-5xl mx-auto p-4">
            <div class="flex flex-row justify-between">
                <h1 class="font-bold text-white">Gallery</h1>
                <UtilsButton text="Add" />
            </div>
        </div>

        <UtilsModal>
            <div class="md:w-[512px] bg-slate-600 flex flex-col gap-4 rounded-3xl p-4">
                <h2 class="text-white font-bold">Add Gallery</h2>
                <UtilsInput placeholder="Name" />
                <div class="h-[288px] flex flex-col justify-center items-center border-2 border-slate-700 rounded-[28px] p-4" @drop.prevent="handleDrop" @dragover.prevent>
                    <span v-if="!form.data" class="text-white font-semibold">Drag Here</span>
                    <img v-else :src="form.data" />
                </div>
                <UtilsButton text="Update Gallery" />
            </div>
        </UtilsModal>
    </div>
</template>