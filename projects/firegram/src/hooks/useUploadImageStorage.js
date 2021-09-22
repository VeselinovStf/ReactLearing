import { useState, useEffect } from 'react';
import { projectStorage } from '../firebase/config'

const useUploadImageStorage = (file) => {
    const [url, setURL] = useState(null);
    const [error, setError] = useState(null);
    const [progress, setProgress] = useState(0);

    useEffect(()=>{
        let storageRef = projectStorage.ref(file.name);

        storageRef.put(file).on("storage_change", (snap) =>{
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(percentage);
        }, (error) => {
            setError(error);
        }, async () =>{
            const url = await storageRef.getDownloadURL();
            setURL(url);
        })
        
    },[file])

    return { progress, url, error };
}

export default useUploadImageStorage;
