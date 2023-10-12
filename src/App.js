import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export const App = () => {
  return (
      <>
        <Navigation />
        <Hero />
        <About />
        <Contact />
        <Footer />
      </>
  );
}