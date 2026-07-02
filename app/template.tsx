'use 'use client';

import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      // 1. Where the page starts (hidden, shifted completely off-screen to the right)
      initial={{ x: '100%', opacity: 0 }}
      // 2. How it animates into view (slides left to its natural position)
      animate={{ x: 0, opacity: 1 }}
      // 3. The tuning configuration for the movement
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