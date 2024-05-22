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
                        initial={{ scale: 0.8, opacity: 1 }}
                        animate={{
                            scale: [1, 1.5, 1.5],
                            opacity: [1, 0.5, 0],
                            boxShadow: ["0px 0px 10px 10px rgba(7, 241, 44, 0)"]
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
