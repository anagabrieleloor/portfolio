import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import matches from '../assets/carino/matches.png';
import prof from '../assets/carino/prof.png';
import chat from '../assets/carino/chat.png';


export default function Carino() {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper('.portfolio-details-slider', {
      speed: 400,
      loop: false,
      spaceBetween: 20,
      slidesPerView: 1,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });

    // Handle click events on blue dots
    const paginationBullets = document.querySelectorAll('.swiper-pagination-bullet');
    paginationBullets.forEach((bullet, index) => {
      bullet.addEventListener('click', () => {
        swiperRef.current.slideTo(index);
        updateActiveBullet(index);
      });
    });

    // Handle click events on images
    const slideImages = document.querySelectorAll('.swiper-slide img');
    slideImages.forEach((img, index) => {
      img.addEventListener('click', () => {
        const nextIndex = (index + 1) % slideImages.length;
        swiperRef.current.slideTo(nextIndex);
        updateActiveBullet(nextIndex);
      });
    });

    return () => {
      swiperRef.current.destroy();
    };
  }, []);

  const updateActiveBullet = (index) => {
    const paginationBullets = document.querySelectorAll('.swiper-pagination-bullet');
    paginationBullets.forEach((b) => b.classList.remove('swiper-pagination-bullet-active'));
    paginationBullets[index].classList.add('swiper-pagination-bullet-active');
  };
  return (
    <div>
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              <div class="portfolio-details-slider swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                <div class="swiper-wrapper align-items-center" id="swiper-wrapper-62b9d38db747da16" aria-live="off" style={{ transform: 'translate3d(-3104px, 0px, 0px)', transitionDuration: '0ms' }}>
                  <div class="swiper-slide" data-swiper-slide-index="0" role="group" aria-label="1 / 3" style={{ width: '776px' }}>
                    <img src={prof} alt="" />
                  </div>
                  <div class="swiper-slide" data-swiper-slide-index="1" role="group" aria-label="2 / 3" style={{ width: '776px' }}>
                    <img src={matches} alt="" />
                  </div>
                  <div class="swiper-slide" data-swiper-slide-index="2" role="group" aria-label="3 / 3" style={{ width: '776px' }}>
                    <img src={chat} alt="" />
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