import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import matches from '../assets/carino/matches.png';
import prof from '../assets/carino/prof.png';
import chat from '../assets/carino/chat.png';

export default function Carino() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const renderBullets = () => {
    return (
      <ol className="carousel-bullets">
        <li className={activeIndex === 0 ? "active" : ""}></li>
        <li className={activeIndex === 1 ? "active" : ""}></li>
        <li className={activeIndex === 2 ? "active" : ""}></li>
      </ol>
    );
  };

  return (
    <div>
      <style>{`
        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          filter: invert(100%);
        }
        .carousel-indicators .active {
          filter: none;
        }
        .carousel-bullets {
          list-style-type: none;
          display: flex;
          justify-content: center;
          padding: 0;
        }
        .carousel-bullets li {
          background-color: #ccc;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin: 0 5px;
          cursor: pointer;
        }
        .carousel-bullets li.active {
          background-color: #555;
        }
        .carousel-image {
          height: 400px; 
          object-fit: contain;
        }
      `}</style>
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              <Carousel
                style={{ height: '400px' }}
                indicators={false}
                activeIndex={activeIndex}
                onSelect={handleSelect}
                interval={3000} // Set interval here (in milliseconds)
              >
                <Carousel.Item>
                  <img className="d-block w-100 carousel-image" src={prof} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 carousel-image" src={matches} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 carousel-image" src={chat} alt="Third slide" />
                </Carousel.Item>
              </Carousel>
              {renderBullets()}
            </div>
            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Cariño</h3>
                <ul>
                  <li><strong>Tech Stack</strong>: PostgreSQL, Express.js, React, Node.js</li>
                  <li><strong>Github Repo</strong>: <a href="https://github.com/anagabrieleloor/carino.git">Github Repo</a></li>
                  <li><strong>Deployed Site</strong>: <a href="https://carino-iuhv.onrender.com/">Cariño</a></li>
                </ul>
              </div>
              <div className="portfolio-description">
                <h2>Translation of cariño – Spanish-English dictionary</h2>
                <p>
                  honey [noun] (especially American) darling (used when speaking to someone one loves). sweetheart [noun] used as an endearment for any beloved person, eg a child. babe [noun] a way of addressing someone you love, such as a husband or wife.

                  Swipe, match, and message your honey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
