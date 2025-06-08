
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedName = () => {
  const name = "Abhishek Kushwaha";
  const [displayText, setDisplayText] = useState("");
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let iteration = 0;
    
    const interval = setInterval(() => {
      setDisplayText(name.split("").map((letter, index) => {
        if (index < iteration) {
          return name[index];
        }
        
        return characters[Math.floor(Math.random() * characters.length)];
      }).join(""));
      
      if (iteration >= name.length) {
        clearInterval(interval);
        setIsAnimating(false);
      }
      
      iteration += 1 / 3;
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.h1 
      className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent px-4 whitespace-nowrap"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {displayText}
    </motion.h1>
  );
};

export default AnimatedName;
