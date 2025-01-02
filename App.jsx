import React from 'react'
import './App.css'
import Header from './Components/Header'
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import ScrollToTop from './Components/ScrollToTop';
import Services from './Components/Service';
import Testimonials from './Components/Testimonials';


function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Contact/>
      <Footer/>
      <Hero/>
      <Navbar/>
      <Portfolio/>
      <ScrollToTop/>
      <Services/>
      <Testimonials/>

    </div>
  );
}

export default App;
