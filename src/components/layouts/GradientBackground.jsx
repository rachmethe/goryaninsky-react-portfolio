import React from 'react';
import { motion } from 'framer-motion';

const GradientBackground = () => {
  // Настройки анимации
  const gradientVariants = {
    initial: {
      backgroundPosition: '50% 50%',
    },
    animate: {
      backgroundPosition: ['0% 50%', '50% 100%', '100% 50%', '50% 0%', '0% 50%'],
      transition: {
        duration: 20,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'mirror',
      },
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full z-[-1]" // Полная ширина и фон за контентом
      style={{
        background: `
          radial-gradient(
            circle at 20% 30%, 
            rgba(255, 255, 255, 0.8), 
            rgba(102, 126, 234, 0.4), 
            rgba(255, 255, 255, 0.1)
          ),
          radial-gradient(
            circle at 80% 70%, 
            rgba(234, 242, 248, 0.1), 
            rgba(118, 75, 162, 0.5), 
            rgba(255, 255, 255, 0.6)
          ),
          radial-gradient(
            circle at 50% 50%, 
            rgba(76, 175, 80, 0.4), 
            rgba(255, 235, 59, 0.5), 
            rgba(255, 255, 255, 0.1)
          )`,
        backgroundSize: '200% 200%',
      }}
      variants={gradientVariants}
      initial="initial"
      animate="animate"
    />
  );
};

export default GradientBackground;
