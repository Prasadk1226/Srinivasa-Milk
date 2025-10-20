import React from 'react';
import { motion } from 'framer-motion';

const splashVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
        scale: [0, 1.2, 1], // Overshoot scale for a punchy splash
        opacity: [0, 1, 0.8], 
        transition: { 
            duration: 0.8, 
            ease: "easeOut" 
        } 
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
};

const MilkSplash = ({ isSplashing }) => {
    if (!isSplashing) return null;

    return (
        <motion.div
            key="splash"
            variants={splashVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 
                       w-full max-w-4xl h-40 pointer-events-none z-50 overflow-hidden"
        >
            {/* The primary splash body - a single large SVG shape */}
            <svg viewBox="0 0 800 150" fill="none" className="w-full h-full">
                <path 
                    d="M0 100 C150 20 250 150 400 100 C550 50 650 150 800 100 L800 150 L0 150 Z" 
                    fill="#FFFFFF" 
                    // Subtle shadow for 3D premium effect
                    filter="drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))"
                />
            </svg>
            
            {/* Secondary droplets (for added complexity and motion) */}
            <motion.div 
                animate={{ y: [0, -40], opacity: [1, 0] }}
                transition={{ duration: 0.7, delay: 0.1, repeat: 0 }}
                className="absolute left-[30%] bottom-20 w-4 h-4 rounded-full bg-white shadow-lg"
            />
            <motion.div 
                animate={{ y: [0, -30], x: [0, 20], opacity: [1, 0] }}
                transition={{ duration: 0.7, delay: 0.2, repeat: 0 }}
                className="absolute right-[30%] bottom-16 w-3 h-3 rounded-full bg-white shadow-lg"
            />
        </motion.div>
    );
};

export default MilkSplash;
