import { motion } from 'framer-motion';
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ 
        delay: 1,
        duration: 0.5 
      }}
    >
    <hr style={{margin:'2rem 0 -1rem 0',}} />
    <footer>
      <p>Copyright © {currentYear}
          <span> ScrollTainer</span>
      </p>
    </footer>
    </motion.div>
  )
}