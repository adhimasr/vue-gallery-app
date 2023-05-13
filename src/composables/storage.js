import { ref } from 'vue'
import { ref as reference, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../config/firebase';

const useStorage = (authUser) => {
    const isUploading = ref(false);
    
    const uploadFile = async (file) => {
        isUploading.value = true
        
        const storageRef = reference(storage, `${authUser.uid}/image/${file.name}`);
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);
        
        isUploading.value = false
        return downloadURL;
    }

    return { uploadFile, isUploading }
};

export default useStorage;