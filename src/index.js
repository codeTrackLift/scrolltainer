import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header';
import ScrollTainer from './components/ScrollTainer/ScrollTainer';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import './global.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <ScrollTainer />
    <Body />
    <Footer />
  </React.StrictMode>
);
