<script setup>
import { UtilsButton, UtilsInput } from "../components"
</script>

<template>
    <div class="md:max-w-sm bg-slate-800 flex flex-col gap-4 justify-center items-center mx-auto rounded-3xl p-6">
        <h1 class="text-white font-bold">Login</h1>
        <form class="w-full flex flex-col gap-4">
            <UtilsInput placeholder="Email" />
            <UtilsInput placeholder="Password" />
            <UtilsButton text="Login" />
        </form>
    </div>
</template>