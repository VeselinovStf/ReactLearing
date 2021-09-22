import React from 'react';
import { motion } from 'framer-motion'

const Modal = ({ url, setSelectedImg }) => {

    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedImg(null)
        }
    }

    return (
        <div>
            {
                url && <motion.div
                            initial={{opacity:0}}
                            animate={{opacity: 1}} 
                            className="backdrop" 
                            onClick={handleClick} >
                    <motion.img 
                        initial={{y: "-100vh"}}
                        animate={{y: 0}}
                        src={url} alt="modal display" />
                </motion.div>
            }
        </div>

    );
}

export default Modal;
