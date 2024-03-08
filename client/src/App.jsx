import React, { useState, useEffect } from 'react';
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './components/home';
import Contact from './components/contact';
import Portfolio from './components/portfolio';

function App() {


  return (
    <>
      <div>
        <Navbar />

      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      
      
    
  </div>
    </>
  )
}

export default App
