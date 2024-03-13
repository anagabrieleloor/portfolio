import { Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export default function BinderBuddies() {
  const [slideIndex, setSlideIndex] = useState(1);

  function plusSlides(n) {
    setSlideIndex(slideIndex + n);
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { setSlideIndex(1); }
    if (n < 1) { setSlideIndex(slides.length); }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  return (
    <div>
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              {/* Slideshow container */}
              <div className="slideshow-container">
                {/* Full-width images with number and caption text */}
                <div className="mySlides fade">
                  <div className="numbertext">1 / 3</div>
                  <img src="https://i.ibb.co/hV56nfW/Screenshot-2024-03-12-114933.png" style={{ width: '100%' }} alt="User Dashboard" />
                  <div className="text">User Dashboard</div>
                </div>
                <div className="mySlides fade">
                  <div className="numbertext">2 / 3</div>
                  <img src="https://i.ibb.co/W0sTJ4j/buddyprof.png" style={{ width: '100%' }} alt="Buddy Profile" />
                  <div className="text">Buddy Profile</div>
                </div>
                <div className="mySlides fade">
                  <div className="numbertext">3 / 3</div>
                  <img src="https://i.ibb.co/fGMsKP2/events.png" style={{ width: '100%' }} alt="Study Events" />
                  <div className="text">Study Events</div>
                </div>
                {/* Next and previous buttons */}
                <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
              </div>
              <br />
              {/* The dots/circles */}
              <div style={{ textAlign: 'center' }}>
                <span className="dot" onClick={() => currentSlide(1)}></span>
                <span className="dot" onClick={() => currentSlide(2)}></span>
                <span className="dot" onClick={() => currentSlide(3)}></span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Binder Buddies</h3>
                <ul>
                  <li><strong>Tech Stack</strong>: PostgreSQL, Express.js, React, Node.js</li>
                  <li><strong>Github Repo</strong>: <a href="https://github.com/Capstone-Project-Study-Partner-App/Study-App">Github Repo</a></li>
                  <li><strong>Demo Video</strong>: <a href="https://www.youtube.com/watch?v=YGEWnMaVCJQ">App Walk Through</a></li>
                  <li><strong>Deployed Site</strong>: <a href="https://binderbuddies-03bu.onrender.com/">Binder Buddies</a></li>
                </ul>
              </div>
              <div className="portfolio-description">
                <h2>Where Knowledge Meets Community</h2>
                <p>
                  Binder Buddies is the essential app for people seeking to enhance their learning journey. Stay motivated in your studies with a study partner. Filter potential partners by age, gender, study subject, expertise level, location, and availability. Reach out by message to coordinate times and explore interests. Create events to meet up in person or online. Find a study partner in your neighborhood or meet new partners from around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}