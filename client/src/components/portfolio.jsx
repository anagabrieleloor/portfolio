import {Routes, Route, Link} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import thumbnail from '../assets/carino/thumbnail.png';
import bbsize from '../assets/binderbuddies/bbsize.png';
import bukubuku from '../assets/strangersthings/bukubuku.jpg';

export default function Portfolio() {

  return (
    <div>
      <section id="portfolio" className="portfolio section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>Fullstack applications and web design.</p>
          </div>

          <div className="row aos-init aos-animate" data-aos="fade-up">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                {/* <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li> */}
              </ul>
            </div>
          </div>

          <div className="row portfolio-container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={ bbsize } className="img-fluid" alt="Binder Buddies" style={{height: '300px'}} />
                <div className="portfolio-links">
                <Link to="/binderbuddies">
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link"><FontAwesomeIcon icon={faSquarePlus} /></i>
                  </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src={ thumbnail } className="img-fluid" alt="Cariño" />
                <div className="portfolio-links">
                <Link to="/carino">
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link"><FontAwesomeIcon icon={faSquarePlus} /></i>
                  </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={ bukubuku } className="img-fluid" alt="Stranger's Things" style={{height: '300px'}}/>
                <div className="portfolio-links">
                <Link to="/strangersthings">
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link"><FontAwesomeIcon icon={faSquarePlus} /></i>
                  </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}