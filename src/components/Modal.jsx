import { motion } from 'framer-motion';
import Backdrop from './Backdrop';
import useWindowDimensions from '../utils/windowDimensions';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    }
  },
  exit: {
    y: '100vh',
    opacity: 0
  }
}

export default function Modal({ handleClose, modalImg }) {
  const { width } = useWindowDimensions();

  const modalImageStyle= {
    width: width,
    paddingRight: '1rem',
  }

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className='modal'
        variants={dropIn}
      >
        <img id='modalImage' src={modalImg} alt='demo' style={modalImageStyle} />
      </motion.div>
    </Backdrop>
  )
};
