import React from 'react'
import { AnimatePresence, motion, useTransform, useViewportScroll } from 'framer-motion'
import lamboVert from '../images/lamboGoldVert.jpg'
import useWindowDimensions from '../utils/windowDimensions';
import checkWidth from '../utils/checkWidth';

const rightVariant = {
  animate:{ opacity: 1, x: 0 },
  initial:{ opacity: 0, x: 1000 }
};

const imgStyle = {
  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
  marginRight: '1rem',
};

export default function ContentBottom({modalOpen, open, close}) {
  const [top, setTop] = React.useState(0);
  const { scrollYProgress } = useViewportScroll();
  const { width } = useWindowDimensions();

  const yPosAnim = useTransform(scrollYProgress, [0.6, 0.8, 1], checkWidth(width))

  scrollYProgress.onChange(y => {
    setTop(yPosAnim.current);
  });

  return (
    <div>
      <motion.div
        variants={rightVariant}
        animate='animate'
        initial='initial'
        transition={{ 
          delay: 0.75,
          duration: 0.5 
        }}
      >
        <h3>Animations courtesy of framer-motion</h3>
      </motion.div>
      <section>
        <div className='imgWrapper' style={{height: '3rem'}}>
          <AnimatePresence exitBeforeEnter>
            <motion.img
              src={lamboVert}
              height={200}
              alt='ScrollTainer Demo'
              style={imgStyle}
              animate={{ opacity: 1, x: 0, transition:{ 
                delay: 0.375,
                duration: 0.5
              }}}
              initial={{ opacity: 0, x: -1000 }}
              whileInView={{ y: top }}
              viewport={{ once: true }}
              onClick={() => (modalOpen ? close() : open(lamboVert))}
            />
          </AnimatePresence>
        </div>
       
        <div>
          <motion.p
            variants={rightVariant}
            animate='animate'
            initial='initial'
            transition={{ 
              delay: 0.75,
              duration: 0.5 
            }}
          >
            <span className='fade'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nostrum fugit laudantium, ipsum minima recusandae quisquam nihil nisi maiores ullam porro magni quam facilis cumque cum architecto voluptatum quas placeat molestias explicabo saepe tenetur! Ipsum laborum architecto, voluptate quis porro quod. Doloribus atque consequatur neque maxime magnam nobis, suscipit debitis.</span>
          </motion.p>
          <motion.p
            variants={rightVariant}
            animate='animate'
            initial='initial'
            transition={{ 
              delay: 0.875,
              duration: 0.5 
            }}
          >
            <span className='fade'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio magni id quisquam alias? Eos doloribus quis dolorum! Nemo, corporis? Quo praesentium soluta corrupti. Ab, nesciunt. Esse rem architecto eum ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio magni id quisquam alias? Eos doloribus quis dolorum! Nemo, corporis? Quo praesentium soluta corrupti. Ab, nesciunt. Esse rem architecto eum ab.</span><i>photos courtsey of unsplash.com</i>
          </motion.p>
          <motion.p
            variants={rightVariant}
            animate='animate'
            initial='initial'
            transition={{ 
              delay: 1,
              duration: 0.5 
            }}
          >
            <span className='fade'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nostrum fugit laudantium, ipsum minima recusandae quisquam nihil nisi maiores ullam porro magni quam facilis cumque cum architecto voluptatum quas placeat molestias explicabo saepe tenetur! Ipsum laborum architecto, voluptate quis porro quod. Doloribus atque consequatur neque maxime magnam nobis, suscipit debitis.</span>
          </motion.p>
        </div>
      </section>
    </div>
  )
};
