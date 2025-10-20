import React from 'react';
import { motion } from 'framer-motion';

const InputField = ({ type = 'text', placeholder, value, onChange, className = '', ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative ${className}`}
    >
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-primary/30 rounded-lg text-text placeholder-text/70 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
        {...props}
      />
    </motion.div>
  );
};

export default InputField;
