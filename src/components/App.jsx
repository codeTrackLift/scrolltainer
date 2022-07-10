import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import ScrollTainer from './ScrollTainer';
import Slider from './Slider';
import '../styles/Modal.css';
import Modal from './Modal';

export default function App() {
  const [height, setHeight] = useState(200);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');

  const close = () => setModalOpen(false);
  const open = (image) => {
    setModalImg(image);
    setModalOpen(true)
  };

  return (
    <>
    <Header modalOpen={modalOpen} open={open} close={close} />
    <Slider height={height} setHeight={setHeight} />
    <ScrollTainer 
      height={height} 
      modalOpen={modalOpen}
      open={open}
      close={close}
    />
    
    <AnimatePresence initial={false} exitBeforeEnter={true}>
      {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} modalImg={modalImg} />}
    </AnimatePresence>
    <Body modalOpen={modalOpen} open={open} close={close} />
    <Footer />
    </>
  )
};
