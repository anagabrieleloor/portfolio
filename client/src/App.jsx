import React, { useState, useEffect } from 'react';
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './components/home';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import BinderBuddies from './components/binderbuddies';
import About from './components/about';
import Carino from './components/carino';
import StrangersThings from './components/strangersthings';

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
          <Route path="/binderbuddies" element={<BinderBuddies />} />
          <Route path="/about" element={<About />} />
          <Route path="/carino" element={<Carino />} />
          <Route path="/strangersthings" element={<StrangersThings />} />
        </Route>
      </Routes>
      
      
    
  </div>
    </>
  )
}

export default App
