import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Metrics from './components/Metrics.jsx'
import AboutUs from './components/AboutUs.jsx'
import Benefits from './components/Benefits.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'


function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Metrics />
      <AboutUs />
      <Benefits /> 
      <Testimonials />     
      <Contact />  
      <Footer />
    </>
    
  );
}

export default App
