import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import dash from '../assets/binderbuddies/dash.png';
import profile from '../assets/binderbuddies/profile.png';
import chat from '../assets/binderbuddies/chat.png';

export default function BinderBuddies() {
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
                pause={false} // Disable pausing on hover
                wrap={true} // Allow continuous loop
              >
                <Carousel.Item>
                  <img className="d-block w-100 carousel-image" src={dash} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 carousel-image" src={profile} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 carousel-image" src={chat} alt="Third slide" />
                </Carousel.Item>
              </Carousel>
              {renderBullets()}
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
