import React from 'react'
import { motion } from 'framer-motion'

const topVariant = {
  animate: { y: 0 },
  initial: { y: -1000 },
};

export default function Header() {

  return (
    <header>
      <motion.div
        id='top'
        variants={topVariant}
        animate='animate'
        initial='initial'
        transition={{ 
          delay: 0.125,
          duration: 0.5 
        }}
      >
        <h2>ScrollTainer</h2>
      </motion.div>
    </header>
  )
};
