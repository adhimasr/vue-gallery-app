<script setup>
import { ref, reactive, computed } from 'vue';
import router from "../config/router"
import useAuth from "../composables/auth"
import { UtilsButton, UtilsInput } from "../components"

const { signin, signup, isReqAuth, isFailed } = useAuth()

const authForm = ref(null) 

const form = reactive({ email: '', password: '' })
const mode = reactive({
  selected: 'signin',
  options: {
    signin: { label: 'Login', action: () => signin({ email: form.email, password: form.password }) },
    signup: { label: 'Register', action: () => signup({ email: form.email, password: form.password }) }
  }
})

const currentMode = computed({
    get() {
        return mode.options[mode.selected]
    }
})

const handleForm = async () => {
    await currentMode.value.action()
    authForm.value.reset()
    if (!isFailed.value) {
        router.push('/gallery')
    }
}

</script>

<template>
    <div class="md:max-w-sm bg-slate-800 flex flex-col gap-4 justify-center items-center mx-auto rounded-3xl p-6">
        <div className="w-full grid grid-cols-2 border-[1px] border-slate-600 rounded-3xl">
            <template v-for="(opt, o) in mode.options" :key="o">            
                <span class="text-sm text-center text-white font-bold cursor-pointer rounded-3xl p-2" :class="{'bg-slate-600' : mode.selected === o}" @click="mode.selected = o">
                    {{ opt.label }}
                </span>
            </template>
        </div>
        <form ref="authForm" class="w-full flex flex-col gap-4" @submit.prevent="handleForm">
            <UtilsInput v-model="form.email" placeholder="Email" />
            <UtilsInput v-model="form.password" placeholder="Password" />
            <UtilsButton :disabled="isReqAuth" :class="{'cursor-wait' : isReqAuth }" :text="currentMode.label" />
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