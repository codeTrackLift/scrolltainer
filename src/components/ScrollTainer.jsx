import { useEffect } from "react";
import { motion } from 'framer-motion';
import renderImages from '../utils/renderImages';
import '../styles/ScrollTainer.css';

const isElementInViewport = (e) => {
  const rect = e.getBoundingClientRect();
  return rect.right > 0;
};

export default function ScrollTainer({height, modalOpen, open, close}) {
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
  }, []);

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
      {renderImages({height, modalOpen, open, close})}
    </motion.div>
  );
};
