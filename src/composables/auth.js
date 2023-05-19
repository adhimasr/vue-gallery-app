import { ref } from "vue"
import { 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword 
} from "firebase/auth"
import { auth } from "../config/firebase"

const useAuth = () => {
    const userId = ref(null)
    const isFailed = ref(null)
    const isReqAuth = ref(false)

    const onAuth = async () => {
        await onAuthStateChanged(auth, (user) => {
            userId.value = user?.uid
        });
    }

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

    return { onAuth, userId, signin, signup, isReqAuth, isFailed }
}

export default useAuth