import { ref } from "vue"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../config/firebase"

const useAuth = () => {
    const isFailed = ref(null)
    const isReqAuth = ref(false)

    const signin = async ({ email, password }) => {
        try {
            isReqAuth.value = true
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            isFailed.value = error
            setTimeout(() => { isFailed.value = null }, 2000)
        } finally {
            isReqAuth.value = false
        }
    }

    const signup = async ({ email, password }) => {
        try {
            isReqAuth.value = true
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (error) {
            isFailed.value = error
            setTimeout(() => { isFailed.value = null }, 2000)
        } finally {
            isReqAuth.value = false
        }
    }

    return { signin, signup, isReqAuth, isFailed }
}

export default useAuth