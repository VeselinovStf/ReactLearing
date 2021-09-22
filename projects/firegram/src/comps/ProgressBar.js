import React, {useEffect} from 'react';
import useUploadImageStorage from '../hooks/useUploadImageStorage';
import { motion } from 'framer-motion'

const ProgressBar = ({file,setFile}) => {
    const { url, progress} = useUploadImageStorage(file);

    useEffect(() => {
     if (url) {
         setFile(null)
     }
    }, [file,setFile,url]);

  return (
    <motion.div className="progress-bar" 
        initial={{width:0}}
        animate={{width: progress + "%"}}
        >
        
      </motion.div>
  );
}

export default ProgressBar;
