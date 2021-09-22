import ProgressBar from './ProgressBar';
import React, { useState } from 'react';

const fileTypes = [
    "image/jpeg",
    "image/png"
];

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        let selectedFile = e.target.files[0];

        if (selectedFile && fileTypes.includes(selectedFile.type)) {
            setFile(selectedFile)
            setError('')
        } else {
            setFile(null)
            setError("Please select an image file ( png/jpeg ) ");
        }
    }

    return (
        <form>
            <label>
                <input type="file" onChange={handleChange} />
                <span>+</span>
            </label>
            <div className="output">
                {error &&
                    <p className="error">{error}</p>
                }
                {file &&
                    <p className="message">{file.name}</p>
                }
                {file &&
                    <ProgressBar file={file} setFile={setFile} />
                }
            </div>
            
        </form>
    );
}

export default UploadForm;