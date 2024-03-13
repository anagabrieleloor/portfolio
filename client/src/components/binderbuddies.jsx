import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import profpic from '../assets/profpic.jpg';
import kuromi_eat from '../assets/kuromi_eat.jpg';
import kuromihappy from '../assets/kuromihappy.jpg';

export default function BinderBuddies() {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper('.portfolio-details-slider', {
      speed: 400,
      loop: false, // Disable loop
      spaceBetween: 20, // Adjust space between images
      slidesPerView: 1, // Show only one slide at a time
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
    });

    swiperRef.current.on('slideChange', () => {
      const activeIndex = swiperRef.current.activeIndex;
      const paginationBullets = document.querySelectorAll('.swiper-pagination-bullet');

      paginationBullets.forEach((bullet, index) => {
        if (index === activeIndex) {
          bullet.classList.add('swiper-pagination-bullet-active');
        } else {
          bullet.classList.remove('swiper-pagination-bullet-active');
        }
      });
    });

    return () => {
      swiperRef.current.destroy();
    };
  }, []);
  return (
    <div>
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              <div class="portfolio-details-slider swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                <div class="swiper-wrapper align-items-center" id="swiper-wrapper-62b9d38db747da16" aria-live="off" style={{ transform: 'translate3d(-3104px, 0px, 0px)', transitionDuration: '0ms' }}>
                  <div class="swiper-slide" data-swiper-slide-index="0" role="group" aria-label="1 / 3" style={{ width: '776px' }}>
                    <img src={profpic} alt="" />
                  </div>
                  <div class="swiper-slide" data-swiper-slide-index="1" role="group" aria-label="2 / 3" style={{ width: '776px' }}>
                    <img src={kuromi_eat} alt="" />
                  </div>
                  <div class="swiper-slide" data-swiper-slide-index="2" role="group" aria-label="3 / 3" style={{ width: '776px' }}>
                    <img src={kuromihappy} alt="" />
                  </div>
                </div>
                <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                  <span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1" aria-current="true"></span>
                  <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span>
                  <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span>
                </div>
                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
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