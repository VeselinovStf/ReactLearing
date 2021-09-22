import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion'

const ImageGrid = ({ setSelectedImg }) => {
    const { data } = useFirestore("images");

    return (
        <div className="img-grid">
            {data && data.map(d => (
                <motion.div 
                        layout
                        whileHover={{opacity: 1}}
                        className="img-wrap" key={d.id} onClick={() => setSelectedImg(d.url)}>
                    <motion.img
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay:1}}    
                        src={d.url} alt="uploaded ..." />
                </motion.div>
            ))}
        </div>
    );
}

export default ImageGrid;
