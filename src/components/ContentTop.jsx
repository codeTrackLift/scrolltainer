import React from 'react'
import { AnimatePresence, motion, useTransform, useViewportScroll } from 'framer-motion'
import useWindowDimensions from '../utils/windowDimensions';
import checkWidth from '../utils/checkWidth';
import m2Vert from '../images/m2BlueVert.jpg'

const topVariant = {
  animate: { y: 0 },
  initial: { y: -1000 },
};

const leftVariant = {
  animate:{ opacity: 1, x: 0 },
  initial:{ opacity: 0, x: -1000 }
};

const imgStyle = {
  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
  marginLeft: '1rem',
};

export default function ContentTop({modalOpen, open, close}) {
  const [top, setTop] = React.useState(0);
  const { scrollYProgress } = useViewportScroll()
  const { width } = useWindowDimensions();

  const yPosAnim = useTransform(scrollYProgress, [0, 0.15, 0.3], checkWidth(width));

  scrollYProgress.onChange(y => {
    setTop(yPosAnim.current);
  });

  return (
    <main>
      <motion.div
          variants={topVariant}
          animate='animate'
          initial='initial'
          transition={{ 
           delay: 0.25,
           duration: 0.5 
         }}
      >
        <h1 style={{paddingTop: '3rem'}}>Renders images in a scrolling container</h1>
      </motion.div>
      <section>
        <div>
          <motion.p
            variants={leftVariant}
            animate='animate'
            initial='initial'
            transition={{ 
              delay: 0.375,
              duration: 0.5 
            }}
          >
            <b><u>Click on an image to see it in a modal</u></b>.<span style={{color:'silver'}}> Obcaecati nostrum fugit laudantium, ipsum minima recusandae quisquam nihil nisi maiores ullam porro magni quam facilis cumque cum architecto voluptatum quas placeat molestias explicabo saepe tenetur! Ipsum laborum architecto, voluptate quis porro quod. Doloribus atque consequatur neque maxime magnam nobis, suscipit debitis. </span> <i>Auto-scroll may not function as intended if zoomed out too far.</i>
          </motion.p>
          <br/>
          <motion.a 
            href='https://github.com/codeTrackLift/scrolltainer' 
            target="_blank" 
            rel='noreferrer'
            variants={leftVariant}
            animate='animate'
            initial='initial'
            transition={{ 
              delay: 1,
              duration: 0.5
            }}
          >View Code</motion.a>
          <br/>
          <br/>
          <motion.p
            variants={leftVariant}
            animate='animate'
            initial='initial'
             transition={{ 
               delay: 0.625,
               duration: 0.5 
             }}
          >
            <span style={{color:'silver'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio magni id quisquam alias? Eos doloribus quis dolorum! Nemo, corporis? Quo praesentium soluta corrupti. Ab, nesciunt. Esse rem architecto eum ab. </span><i>Photos courtsey of Unsplash.com</i>
          </motion.p>
        </div>
        <div className='imgWrapper' style={{height: '3rem'}}>
          <AnimatePresence exitBeforeEnter>
            <motion.img 
              src={m2Vert}
              height={200}
              alt='ScrollTainer Demo'
              style={imgStyle}
              animate={{ opacity: 1, x: 0, transition:{ 
                delay: 0.375,
                duration: 0.5
              }}}
              initial={{ opacity: 0, x: 1000,}}
              transition={{ type: 'tween', duration: 0.125 }}
              whileInView={{ marginTop: `${top}px` }}
              viewport={{ once: true }}
              onClick={() => (modalOpen ? close() : open(m2Vert))}
            />
          </AnimatePresence>
        </div>
      </section>
    </main>
  )
};
