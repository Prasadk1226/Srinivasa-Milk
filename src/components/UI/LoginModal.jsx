// src/components/LoginModal.js
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 12 }}
          >
            <div className="bg-white rounded-2xl p-6 w-80 shadow-lg text-center">
              <h2 className="text-xl font-bold text-[#3A5A40] mb-3">Login Required</h2>
              <p className="text-gray-600 mb-5">Please log in to access this feature.</p>
              <div className="flex justify-center space-x-3">
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={() => (window.location.href = '/login')}
                  className="px-4 py-2 rounded-full bg-[#E7B800] text-[#3A5A40] font-semibold text-sm hover:bg-[#FFD84D]"
                >
                  Login
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
