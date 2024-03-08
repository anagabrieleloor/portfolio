import {Routes, Route, Link} from "react-router-dom";
import React, { useState, useEffect } from 'react';


export default function Home() {
  const [typedText, setTypedText] = useState('');
  const targetText = 'Software Engineer'; 

  useEffect(() => {
    let currentIndex = 0;
    let intervalId;

    const typeText = () => {
      setTypedText(targetText.substring(0, currentIndex));
      currentIndex += 1;

      if (currentIndex > targetText.length) {
        clearInterval(intervalId);
        setTimeout(() => {
          currentIndex = 0;
          intervalId = setInterval(typeText, 100);
        }, 1000); // Adjust delay before resetting
      }
    };

    intervalId = setInterval(typeText, 100);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>

<section id="hero" class="d-flex flex-column justify-content-center align-items-center">
    <div class="hero-container aos-init aos-animate" data-aos="fade-in">
      <h1>Anagabriele Loor</h1>
      <p><span className="typed">{typedText}</span>
      <span class="typed-cursor" aria-hidden="true">|</span></p>
    </div>
  </section>
    </div>
  );
}
