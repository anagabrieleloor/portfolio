import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import strangerbg from '../assets/strangersthings/strangerbg.png';
import strangerpost from '../assets/strangersthings/strangerpost.png';
import strangerpostnew from '../assets/strangersthings/strangerpostnew.png';

export default function StrangersThings() {
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
                  <img className="d-block w-100 carousel-image" src={strangerpost} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 carousel-image" src={strangerpostnew} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 carousel-image" src={strangerbg} alt="Third slide" />
                </Carousel.Item>
              </Carousel>
              {renderBullets()}
            </div>
            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Stranger's Things</h3>
                <ul>
                  <li><strong>Tech Stack</strong>: PostgreSQL, Express.js, React, Node.js</li>
                  <li><strong>Github Repo</strong>: <a href="https://github.com/anagabrieleloor/the-real-strangers-things.git">Github Repo</a></li>
                  <li><strong>Deployed Site</strong>: <a href="https://sparkling-bavarois-92aa94.netlify.app/">Stranger's Things</a></li>
                </ul>
              </div>
              <div className="portfolio-description">
                <h2>Where Strangers Find Strange Things</h2>
                <p>
                Buy and sell anything under the sun! It's like a virtual swap meet where you can score awesome finds or declutter your space by listing your stuff. From gadgets to fashion, there's something for everyone. Dive in and see what treasures you'll uncover!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
