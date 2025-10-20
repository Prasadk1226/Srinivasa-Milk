import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import InputField from '../../components/UI/InputField';
import PrimaryButton from '../../components/UI/PrimaryButton';
import AuthCard from '../../components/UI/AuthCard';
import MilkFlowBackground from '../../components/UI/MilkFlowBackground';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Placeholder login logic
    console.log('Login:', { email, password });
  };

  const MilkDropIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="#3A5A40"/>
      <circle cx="12" cy="20" r="2" fill="#A3B18A"/>
    </svg>
  );

  const FarmIllustration = () => (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="hidden lg:block relative"
    >
      <motion.svg
        width="300"
        height="250"
        viewBox="0 0 300 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Animated background elements */}
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          fill="#FFF8E7"
          opacity="0.3"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.circle
          cx="225"
          cy="30"
          r="15"
          fill="#A3B18A"
          opacity="0.2"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.1, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />

        {/* Barn */}
        <rect x="50" y="150" width="200" height="100" fill="#A3B18A" rx="10"/>
        <rect x="100" y="120" width="100" height="30" fill="#DAD7CD" rx="5"/>
        <polygon points="100,120 150,90 200,120" fill="#DAD7CD"/>

        {/* Windows */}
        <circle cx="130" cy="140" r="15" fill="#FFF8E7"/>
        <circle cx="170" cy="140" r="15" fill="#FFF8E7"/>

        {/* Milk bottle */}
        <rect x="140" y="170" width="20" height="80" fill="#3A5A40" rx="10"/>
        <circle cx="150" cy="160" r="8" fill="#A3B18A"/>

        {/* Flowing milk path */}
        <motion.path
          d="M50 200 Q150 180 250 200"
          stroke="#DAD7CD"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />

        {/* Animated milk droplets */}
        <motion.circle
          cx="80"
          cy="190"
          r="3"
          fill="#FFF8E7"
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: -10, opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 }}
        />
        <motion.circle
          cx="150"
          cy="185"
          r="2"
          fill="#DAD7CD"
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: -8, opacity: [0, 1, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: 2 }}
        />
        <motion.circle
          cx="220"
          cy="195"
          r="2.5"
          fill="#FFF8E7"
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: -12, opacity: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: 2.5 }}
        />
      </motion.svg>

      {/* Floating milk particles */}
      <motion.div
        className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-20 right-20 w-1.5 h-1.5 bg-accent rounded-full opacity-50"
        animate={{
          y: [0, -15, 0],
          x: [0, -8, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-highlight to-accent/20 flex items-center justify-center p-4 relative">
      <MilkFlowBackground />
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center lg:justify-start mb-4"
          >
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary mr-2">
              Srinivasa Milk
            </h1>
            <MilkDropIcon />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-text/80 mb-8 font-body"
          >
            From our farms to your home.
          </motion.p>

          <AuthCard className="max-w-md mx-auto lg:mx-0">
            <h2 className="text-2xl font-heading font-semibold text-text mb-6 text-center">
              Start Fresh — Login
            </h2>
            <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} className="space-y-4">
              <InputField
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputField
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <PrimaryButton type="submit" className="w-full">
                Login
              </PrimaryButton>
            </form>
            <div className="mt-6 text-center space-y-2">
              <p className="text-text/70">
                Don't have an account?{' '}
                <Link to="/signup" className="text-primary hover:text-accent transition-colors font-medium">
                  Sign Up
                </Link>
              </p>
              <Link to="/home" className="block text-accent hover:text-primary transition-colors font-medium">
                Continue as Guest
              </Link>
            </div>
          </AuthCard>
        </motion.div>

        <FarmIllustration />
      </div>
    </div>
  );
};

export default Login;
