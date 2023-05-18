import { ref } from 'vue'
import { ref as reference, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage, auth } from '../config/firebase';

const useStorage = () => {
    const isUploading = ref(false);
    const isFailedUpload = ref(null);
    
    const uploadFile = async (file) => {
        try {
            isUploading.value = true
            
            const storageRef = reference(storage, `${auth?.currentUser.uid}/image/${file.name}`);
            const snapshot = await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(snapshot.ref);
            
            return downloadURL;
        } catch (error) {
            isFailedUpload.value = error
            setTimeout(() => { isFailedUpload.value = null }, 2000)
        } finally {
            isUploading.value = false
        }
    }

    return { uploadFile, isUploading }
};

export default useStorage;