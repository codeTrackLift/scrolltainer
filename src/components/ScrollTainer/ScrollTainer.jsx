import { useEffect } from "react";
import { motion } from 'framer-motion';
import imageArray from '../../context/imageArray'
import './ScrollTainer.css';

const renderImages = ({height}) => {
  const zoom = height < 65 ?
    3 : height <= 100 ?
    2.5 : height <= 200 ? 
    1.5 : 1.25 ;

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
        whileTap={{ scale: zoom }}
      />
      )
  })
  return (
    <>
      {images}
    </>
  )
}

const isElementInViewport = (e) => {
  const rect = e.getBoundingClientRect();
  return rect.right > 0;
}

export default function ScrollTainer({height}) {
  useEffect(() => {
    const scrollTainer = document.getElementById('scrollTainer');
    const scrollTainerWidth = scrollTainer.scrollWidth;
    
    const scroll = () => {
        const first = document.querySelector('#scrollTainer *');
        if (!isElementInViewport(first)) {
            scrollTainer.appendChild(first);
            scrollTainer.scrollTo(scrollTainer.scrollLeft - first.offsetWidth, 0);
        }
        if (scrollTainer.scrollLeft !== scrollTainerWidth) {
            scrollTainer.scrollTo(scrollTainer.scrollLeft + 1, 0);
        } 
    };
    setInterval(scroll, 15);
  }, [])

  return (
    <motion.div 
      id='scrollTainer'
      animate={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 1000 }}
      transition={{ 
        delay: 0.675,
        duration: 0.5 
      }}
      style={{background: 'rgb(50,50,50)'}}
    >
      {renderImages({height})}
    </motion.div>
  );
};
