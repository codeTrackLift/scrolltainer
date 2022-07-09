import React from 'react'
import { motion } from 'framer-motion'
import './Slider.css';

const inputStyle = {
  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
  WebkitAppearance: 'none',
  appearance: 'none',
  background: 'transparent',
  cursor: 'pointer',
  width: '15rem',
}

const labelStyle = {
  fontFamily: 'Arial',
}

export default function Slider({height, setHeight}) {
  return (
    <motion.div
    animate={{ x: 0 }}
    initial={{ x: -1000 }}
      transition={{ 
        delay: 0.75,
        duration: 0.5 
      }}
    >
      <label htmlFor='height' style={labelStyle}>ScrollTainer Height: </label>
      <input
        id='opacity'
        min='50'
        max='350'
        step='10'
        type='range'
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        style={inputStyle}
      >
      </input>
    </motion.div>
  )
}
