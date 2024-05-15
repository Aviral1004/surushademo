import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio.jsx';
import VirtualReality from './pages/VirtualReality.jsx';
import CustomerExperience from './pages/CustomerExperience.jsx';
import DataAnalytics from './pages/DataAnalytics.jsx';
import DigitalExperience from './pages/DigitalExperience.jsx';
import ItBusiness from './pages/ItBusiness.jsx';
import GetaQuote from './pages/GetaQuote.jsx';

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />

          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/getaquote' element={<GetaQuote />} />

          <Route path="/portfolio/app-for-virtual-reality" element={<VirtualReality />} />
          <Route path="/portfolio/customer-experience" element={<CustomerExperience />} />
          <Route path="/portfolio/data-analytics" element={<DataAnalytics />} />
          <Route path="/portfolio/digital-experience" element={<DigitalExperience />} />
          <Route path="/portfolio/bringing-it-and-business-together" element={<ItBusiness />} />

        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
