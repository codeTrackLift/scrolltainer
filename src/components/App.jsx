import React from 'react'
import { motion } from 'framer-motion'
import Header from './Header/Header';
import Slider from './Slider/Slider';
import ScrollTainer from './ScrollTainer/ScrollTainer';
import Body from './Body/Body';
import Footer from './Footer/Footer';

export default function App() {
  const [height, setHeight] = React.useState(200)
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
    <Header />
    <Slider height={height} setHeight={setHeight} />
    <ScrollTainer height={height} />
    <Body />
    <Footer />
    </motion.div>
  )
}
