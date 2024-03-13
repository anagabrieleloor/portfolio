import { Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';




export default function Carousel() {
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
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    useEffect(() => {
        showSlides(slideIndex);
    }, [slideIndex]);

    return (
        <div>


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
    );
}


