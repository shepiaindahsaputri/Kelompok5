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
          {/* Path Harus sama */}
            <Route path="/" element={<Home />} /> 
            <Route path="/Product" element={<Product />} /> 
            <Route path="/Contact" element={<Contact />} /> 
            <Route path="/About" element={<About />} />
            <Route path="/CO" element={<CO />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
