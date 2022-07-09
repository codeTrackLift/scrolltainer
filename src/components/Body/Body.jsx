import React from 'react'
import { motion } from 'framer-motion'
import lamboVert from '../../images/lamboGoldVert.jpg'

export default function Body() {
  return (
    <main>
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: '-100vw' }}
        transition={{ 
          delay: 0.75,
          duration: 0.5 
        }}
      >
        <h3>Animations courtesy of framer-motion</h3>
      </motion.div>
      <section>
        <motion.img
          src={lamboVert}
          height={200}
          alt='ScrollTainer Demo'
          style={{marginRight:'1rem'}}
          animate={{ x: 0 }}
          initial={{ x: '-100vw' }}
          transition={{ 
            delay: 0.675,
            duration: 0.5 
          }}
        />
        <div>
          <motion.p
            animate={{ x: 0 }}
            initial={{ x: '100vw' }}
            transition={{ 
              delay: 0.75,
              duration: 0.5 
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nostrum fugit laudantium, ipsum minima recusandae quisquam nihil nisi maiores ullam porro magni quam facilis cumque cum architecto voluptatum quas placeat molestias explicabo saepe tenetur! Ipsum laborum architecto, voluptate quis porro quod. Doloribus atque consequatur neque maxime magnam nobis, suscipit debitis.
          </motion.p>
          <motion.p
            animate={{ x: 0 }}
            initial={{ x: '100vw' }}
            transition={{ 
              delay: 0.875,
              duration: 0.5 
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio magni id quisquam alias? Eos doloribus quis dolorum! Nemo, corporis? Quo praesentium soluta corrupti. Ab, nesciunt. Esse rem architecto eum ab.
          </motion.p>
        </div>
      </section>
    </main>
  )
}
