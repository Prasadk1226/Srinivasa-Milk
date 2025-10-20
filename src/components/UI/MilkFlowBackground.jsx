import React from 'react';
import { motion } from 'framer-motion';

const MilkFlowBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Main milk flow path */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="milkFlowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF8E7" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#DAD7CD" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FFF8E7" stopOpacity="0.1" />
          </linearGradient>
          <filter id="milkGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Flowing milk stream */}
        <motion.path
          d="M50 0 Q30 25 50 50 T50 100"
          stroke="url(#milkFlowGradient)"
          strokeWidth="4"
          fill="none"
          filter="url(#milkGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />

        {/* Animated milk droplets along the path */}
        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={i}
            r="2"
            fill="#FFF8E7"
            filter="url(#milkGlow)"
            initial={{ offsetDistance: "0%", opacity: 0 }}
            animate={{
              offsetDistance: "100%",
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear"
            }}
            style={{
              offsetPath: `path('M50 0 Q30 25 50 50 T50 100')`,
              offsetRotate: "0deg"
            }}
          />
        ))}
      </motion.svg>

      {/* Floating milk particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            scale: [0.5, 1, 0.5],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Subtle wave patterns */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-32 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <svg viewBox="0 0 1200 64" className="w-full h-full">
          <path
            d="M0,32 Q300,16 600,32 T1200,32 V64 H0 Z"
            fill="#DAD7CD"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default MilkFlowBackground;
