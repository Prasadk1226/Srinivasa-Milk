import React from 'react';
import { motion } from 'framer-motion';

const AuthCard = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`bg-white/10 backdrop-blur-md border border-primary/20 rounded-2xl p-8 shadow-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AuthCard;
