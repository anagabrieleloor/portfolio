import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';

function App() {


  return (
    <>
      <div>
        <Navbar />
        <a href="https://wallpapers-clan.com/wp-content/uploads/2022/07/kuromi-pfp-3.jpg" target="_blank">
          <img src="https://wallpapers-clan.com/wp-content/uploads/2022/07/kuromi-pfp-3.jpg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://i.pinimg.com/736x/9e/83/5f/9e835fe6c6bd15f1b8e62988df7ba562.jpg" target="_blank">
          <img src="https://i.pinimg.com/736x/9e/83/5f/9e835fe6c6bd15f1b8e62988df7ba562.jpg" className="logo react" alt="React logo" />
        </a>
      </div>
      <Routes>
        <Route>
          <Route path="/" element={<home />} />
          <Route path="/portfolio" element={<portfolio />} />
          <Route path="/contact" element={<contact />} />
        </Route>
      </Routes>
      <h1>ani portfolio x3</h1>
    
    </>
  )
}

export default App
