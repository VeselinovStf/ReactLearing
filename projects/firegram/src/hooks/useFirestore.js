import { projectFirestore } from '../firebase/config'
import { useState, useEffect} from 'react'

const useFirestore = (collection) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        
        var unSubscribe = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = []
                snap.forEach(d => {
                    documents.push({...d.data(), id: d.id})
                })
                setData(documents)
            })

        return () => unSubscribe();

    }, [collection])

    return {data};
}

export default useFirestore;