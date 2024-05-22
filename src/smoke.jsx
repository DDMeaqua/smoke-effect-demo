import { motion } from 'framer-motion';
import './smoke.css'; // 引入CSS样式
import { useState } from 'react';

const Smoke = () => {
    const [animate, setAnimate] = useState(false);

    const handleClick = () => {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 1000); // Reset after animation
    };

    return (
        <div className="container">
            <div className='bigbox'>
                {animate && (
                    <motion.div
                        className="smoke-effect"
                        initial={{ scale: 0.9, opacity: 1 }}
                        animate={{
                            scale: [0.9 , 1.2],
                            opacity: [1 , 0],
                            boxShadow: ["0px 0px 0px 0px rgba(7, 241, 44, 0)", "0px 0px 20px 40px rgba(7, 241, 44, 0.8)"]
                        }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    />
                )}
                <div className="smoke-box" />
            </div>
            <button onClick={handleClick} className="trigger-button">点击我</button>
        </div>
    );
};

export default Smoke;
