import { motion } from 'framer-motion';
import qrCode from '../images/qr-code.png'
import '../styles/Footer.css'

const qrStyle = {
  cursor: 'auto',
  display: 'block',
  margin: '0 auto',
}

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
    <img src={qrCode} alt='QR Code' width={100} style={qrStyle} id='qrCode' />
    <hr style={{margin:'0.5rem 0 -1rem 0',}} />
    <footer>
      <p>Copyright © {currentYear}
          <span> ScrollTainer</span>
      </p>
    </footer>
    </motion.div>
  )
};
