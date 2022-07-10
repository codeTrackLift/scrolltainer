import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Header from './Header';
import Modal from './Modal';
import ContentTop from './ContentTop';
import ContentBottom from './ContentBottom';
import Footer from './Footer';
import ScrollTainer from './ScrollTainer';
import Slider from './Slider';
import '../styles/Modal.css';

const hidden = {
  opacity: 0,
  transform: 'scale(0)',
}

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
    <Header />
    <AnimatePresence initial={false} exitBeforeEnter={true}>
      { modalOpen && 
        <Modal
          modalOpen={modalOpen}
          handleClose={close}
          modalImg={modalImg}
        />
      }
    </AnimatePresence>
    <AnimatePresence initial={true} exitBeforeEnter={true}>
      <div style={modalOpen ? hidden : {}}>
        <ContentTop modalOpen={modalOpen} open={open} close={close} />
        <Slider height={height} setHeight={setHeight} />
        <ScrollTainer 
          height={height} 
          modalOpen={modalOpen}
          open={open}
          close={close}
        />
        <ContentBottom
          modalOpen={modalOpen}
          open={open}
          close={close}
        />
        <Footer />
      </div>
    </AnimatePresence>
    </>
  )
};
