import React, {useEffect} from 'react';
import useUploadImageStorage from '../hooks/useUploadImageStorage';

const ProgressBar = ({file,setFile}) => {
    const { url, progress} = useUploadImageStorage(file);

    useEffect(() => {
     if (url) {
         setFile(null)
     }
    }, [file,setFile,url]);

  return (
    <div className="progress-bar" style={{width: progress + "%"}}>
        
    </div>
  );
}

export default ProgressBar;
