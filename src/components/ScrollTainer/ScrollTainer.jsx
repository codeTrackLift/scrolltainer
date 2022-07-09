import { useEffect } from "react";
import { motion } from 'framer-motion';
import imageArray from '../../context/imageArray'
import './ScrollTainer.css';

const renderImages = ({height}) => {
  const images = imageArray.map((image, i) => {
    return <img src={image} alt='ScrollTainer demo' height={height} key={i} />
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
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ 
        delay: 0.675,
        duration: 0.5 
      }}
    >
      {renderImages({height})}
    </motion.div>
  );
};
