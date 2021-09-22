import React from 'react';
import useFirestore from '../hooks/useFirestore';

const ImageGrid = () => {
    const { data } = useFirestore("images");
        
    return (
        <div className="img-grid">
            {data && data.map(d => (
                <div className="img-wrap" key={d.id}>
                    <img src={d.url} alt="uploaded ..." />
                </div>
            ))}
        </div>
    );
}

export default ImageGrid;
