import { motion } from 'framer-motion';
import imageArray from './imageArray'

export default function renderImages({height, modalOpen, open, close}) {
  const zoom = height < 65 ?
    2.5 : height <= 100 ?
    2 : height <= 125 ?
    1.75 : height <= 175 ? 
    1.5 : height <= 225 ? 
    1.37 : 1.25;

  const images = imageArray.map((image, i) => {
    return (
      <motion.img 
        key={i}
        src={image}
        alt='ScrollTainer demo'
        height={height}
        initial={{ opacity: 0, x: '25vw' }}
        transition={{
          duration: 0.5,
          type: 'interia',
          velocity: 100
        }}
        whileHover={{ scale: zoom }}
        whileInView={{ opacity: 1, x: 0 }}
        onClick={() => (modalOpen ? close() : open(image))}
      />
    );
  });

  return (
    <>
      {images}
    </>
  )
};
