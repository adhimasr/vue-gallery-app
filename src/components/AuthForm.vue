<script setup>
import { ref, reactive } from 'vue';
import router from "../config/router"
import useAuth from "../composables/auth"
import { UtilsButton, UtilsInput } from "../components"

const { signin, isSignin, isFailed } = useAuth()
const authForm = ref(null) 
const data = reactive({ email: '', password: '' })

const handleForm = async () => {
    await signin({ email: data.email, password: data.password })
    authForm.value.reset()
    if (!isFailed.value) {
        router.push('/gallery')
    }
}

</script>

<template>
    <div class="md:max-w-sm bg-slate-800 flex flex-col gap-4 justify-center items-center mx-auto rounded-3xl p-6">
        <h1 class="text-white font-bold">Login</h1>
        <form ref="authForm" class="w-full flex flex-col gap-4" @submit.prevent="handleForm">
            <UtilsInput v-model="data.email" placeholder="Email" />
            <UtilsInput v-model="data.password" placeholder="Password" />
            <UtilsButton :disabled="isSignin" :class="{'cursor-wait' : isSignin }" text="Login" />
        </form>

        <Transition name="fade">
            <div v-if="isFailed" class="bg-white fixed top-4 right-4 rounded-2xl p-4">
                <span class="font-medium">Message</span> {{ isFailed }}
            </div>
        </Transition>
    </div>
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