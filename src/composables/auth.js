import { ref } from "vue"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../config/firebase"

const useAuth = () => {
    const isFailed = ref(null)
    const isSignin = ref(false)

    const signin = async ({ email, password }) => {
        try {
            isSignin.value = true
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            isFailed.value = error
            setTimeout(() => { isFailed.value = null }, 2000)
        } finally {
            isSignin.value = false
        }
    }

    return { signin, isSignin, isFailed }
}

export default useAuth