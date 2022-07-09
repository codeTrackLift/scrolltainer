import React from 'react'
import { motion } from 'framer-motion'
import './Header.css'
import m2Vert from '../../images/m2BlueVert.jpg'

export default function Header() {
  return (
    <header>
      <motion.div
        id='top'
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ 
          delay: 0.125,
          duration: 0.5 
        }}
      >
        <h2>ScrollTainer</h2>
      </motion.div>
      <motion.div
         animate={{ opacity: 1 }}
         initial={{ opacity: 0 }}
         transition={{ 
           delay: 0.25,
           duration: 0.5 
         }}
      >
        <h1 style={{paddingTop: '5rem'}}>Renders Images in a Horizontal Scrolling Container</h1>
      </motion.div>
      <section>
        <div>
          <motion.p
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ 
              delay: 0.375,
              duration: 0.5 
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nostrum fugit laudantium, ipsum minima recusandae quisquam nihil nisi maiores ullam porro magni quam facilis cumque cum architecto voluptatum quas placeat molestias explicabo saepe tenetur! Ipsum laborum architecto, voluptate quis porro quod. Doloribus atque consequatur neque maxime magnam nobis, suscipit debitis.
          </motion.p>
          <motion.a 
            href='https://github.com/codeTrackLift/scrolltainer/tree/main/src/components/ScrollTainer' 
            target="_blank" 
            rel='noreferrer'
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ 
              delay: 0.5,
              duration: 0.5 
            }}
          >View Code</motion.a>
          <motion.p
             animate={{ opacity: 1 }}
             initial={{ opacity: 0 }}
             transition={{ 
               delay: 0.625,
               duration: 0.5 
             }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio magni id quisquam alias? Eos doloribus quis dolorum! Nemo, corporis? Quo praesentium soluta corrupti. Ab, nesciunt. Esse rem architecto eum ab.
          </motion.p>
        </div>
        <motion.img 
          src={m2Vert}
          height={200}
          alt='ScrollTainer Demo'
          style={{marginLeft:'1rem'}}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ 
            delay: 0.375,
            duration: 0.5 
          }}
        ></motion.img>
      </section>
    </header>
  )
}
