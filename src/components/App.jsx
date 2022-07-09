import React, { useState } from 'react'
import Header from './Header/Header';
import Slider from './Slider/Slider';
import ScrollTainer from './ScrollTainer/ScrollTainer';
import Body from './Body/Body';
import Footer from './Footer/Footer';

export default function App() {
  const [height, setHeight] = useState(200);

  return (
    <>
    <Header />
    <Slider height={height} setHeight={setHeight} />
    <ScrollTainer height={height} />
    <Body />
    <Footer />
    </>
  )
}
