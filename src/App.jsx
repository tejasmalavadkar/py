import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import BestSellers from './components/BestSellers';
import WhyChooseUs from './components/WhyChooseUs';
import SpecialOffer from './components/SpecialOffer';
import Testimonials from './components/Testimonials';
import Instagram from './components/Instagram';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

// Home Page Layout
function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <BestSellers />
      <WhyChooseUs />
      <SpecialOffer />
      <Testimonials />
      <Instagram />
      <Newsletter />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
