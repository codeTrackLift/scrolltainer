import { motion } from 'framer-motion';
import Backdrop from './Backdrop';
import useWindowDimensions from '../utils/windowDimensions';

const dropIn = {
  initial: {
    y: '-100vh',
    opacity: 0
  },
  animate: {
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
    paddingRight: '1rem',
    width: width,
  }

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className='modal'
        variants={dropIn}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <img id='modalImage' src={modalImg} alt='demo' style={modalImageStyle} />
      </motion.div>
    </Backdrop>
  )
};
