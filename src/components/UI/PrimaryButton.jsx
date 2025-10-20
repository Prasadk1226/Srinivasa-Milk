import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PrimaryButton = ({ children, onClick, className = '', disabled = false, ...props }) => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    if (disabled) return;

    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = { id: Date.now(), x, y, size };
    setRipples([...ripples, newRipple]);

    setTimeout(() => {
      setRipples(ripples.filter(ripple => ripple.id !== newRipple.id));
    }, 600);

    if (onClick) onClick(e);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(58, 90, 64, 0.4)' }}
      whileTap={{ scale: 0.95 }}
      disabled={disabled}
      onClick={handleClick}
      className={`relative overflow-hidden px-6 py-3 bg-primary text-white rounded-lg font-body font-medium hover:bg-primary/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          className="absolute bg-white opacity-30 rounded-full"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      ))}
    </motion.button>
  );
};

export default PrimaryButton;
