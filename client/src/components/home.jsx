import {Routes, Route, Link} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Typed from 'typed.js';



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
  // useEffect(() => {
  //   const typedElement = document.querySelector('.typed');
  
  //   if (typedElement) {
  //     let typed_strings = typedElement.getAttribute('data-typed-items');
  //     typed_strings = typed_strings.split(',');
  
  //     new Typed('.typed', {
  //       strings: typed_strings,
  //       loop: true,
  //       typeSpeed: 80,
  //       backSpeed: 20,
  //       backDelay: 2000
  //     });
  //   }
  // }, []);

  return (
    <div>

{/* <section id="hero" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

    <div className="hero-container aos-init aos-animate" data-aos="fade-in">
      <h1>Anagabriele Loor</h1>
      <p><span className="typed">{typedText}</span>
      <span className="typed-cursor" aria-hidden="true">|</span></p>
    </div>
  </section> */}

<section id="hero" class="d-flex flex-column justify-content-center align-items-center">
    <div className="hero-container aos-init aos-animate" data-aos="fade-in">
      <h1>Anagabriele Loor</h1>
      <p><span className="typed">{typedText}</span>
      <span className="typed-cursor" aria-hidden="true">|</span></p>
    </div>
  </section>

{/* <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
    <div class="hero-container aos-init aos-animate" data-aos="fade-in">
      <h1>Anagabriele Loor</h1>
      <p><span class="typed" data-typed-items="Software Engineer"></span><span class="typed-cursor typed-cursor--blink" aria-hidden="true">|</span></p>
    </div>
  </section> */}
    </div>
  );
}
