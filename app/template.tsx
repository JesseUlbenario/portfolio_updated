'use client';

import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ 
        type: 'spring', 
        stiffness: 100, 
        damping: 18,
        mass: 0.8
      }}
      className="w-full min-h-screen"
    >
      {children}
    </motion.div>
  );
}