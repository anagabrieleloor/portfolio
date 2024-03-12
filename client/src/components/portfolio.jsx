import {Routes, Route, Link} from "react-router-dom";
import React, { useState, useEffect } from 'react';


export default function Portfolio() {

  return (
    <div>
<section id="portfolio" class="portfolio section-bg">
      <div class="container" >

        <div class="section-title">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row aos-init aos-animate" data-aos="fade-up">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" style={{position: 'relative', height: '923.202px'}}>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app" style={{position: 'absolute', left: '0px', top: '0px'}}>
            <div class="portfolio-wrap">
              
              <img src="https://i.ibb.co/bJwT9L2/bb-home.png" class="img-fluid" alt="Binder Buddies" style={{height: '350px'}}/>
              
              <div class="portfolio-links">
              <Link to="/binderbuddies">
                <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </Link>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web" style={{position: 'absolute', left: '394.328px', top: '0px'}}>
            <div class="portfolio-wrap">
              <img src="https://i.ibb.co/4tBYHDt/carino-home.png" class="img-fluid" alt="Carino" style={{height: '350px'}}/>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app" style={{position: 'absolute', left: '788.656px', top: '0px'}}>
            <div class="portfolio-wrap">
              <img src="https://i.ibb.co/ftPXfvM/Screenshot-2024-03-08-134239.png" class="img-fluid" alt="Stranger's Things" style={{height: '350px'}}/>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 2"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>


        </div>

      </div>
    </section>
    </div>
  );
}
