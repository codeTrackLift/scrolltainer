import React, { useState } from 'react'
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import ScrollTainer from './ScrollTainer/ScrollTainer';
import Slider from './Slider/Slider';

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
};
