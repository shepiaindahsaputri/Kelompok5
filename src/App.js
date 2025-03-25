
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Componen/Navbar';
import { Home } from './Componen/Home';
import { Product } from './Componen/Product';
import { Contact } from './Componen/Contact';
import { About } from './Componen/About';
import { CO } from './Componen/CO';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/product" element={<Product />} /> 
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/checkout" element={<CO />} /> {/* fix path */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;