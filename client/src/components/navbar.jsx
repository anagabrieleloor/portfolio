import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import profpic from '../assets/profpic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faSkype, faLinkedin, faGithub  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHouse, faAddressCard, faCircleUser, faFolderOpen, faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  useEffect(() => {
    /**
     * Utility Functions
     */

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }

    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }

    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      let elementPos = select(el).offsetTop
      window.scrollTo({
        top: elementPos,
        behavior: 'smooth'
      })
    }

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
      let position = window.scrollY + 200
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)

    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }

    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function (e) {
      select('body').classList.toggle('mobile-nav-active');
      // Toggle the icon classes on the toggle button itself
      this.classList.toggle('active');
    });

    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function (e) {
      if (select(this.hash)) {
        e.preventDefault()

        let body = select('body')
        if (body.classList.contains('mobile-nav-active')) {
          body.classList.remove('mobile-nav-active')
          let navbarToggle = select('.mobile-nav-toggle')
          navbarToggle.querySelector('svg').classList.toggle('fa-bars');
          navbarToggle.querySelector('svg').classList.toggle('fa-times');
        }
        scrollto(this.hash)
      }
    }, true)

    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash)
        }
      }
    });

    // Clean up event listeners when component unmounts
    return () => {
      // Clean up event listeners here
    };
  }, []); // Empty dependency array means this effect will only run once when component mounts

  return (
    <div id="navbar">
      <header id="header">
        <i className="bi bi-list mobile-nav-toggle d-xl-none">
          <FontAwesomeIcon icon={faBars} />
        </i>
        
        <div className="d-flex flex-column">
          <div className="profile">
            <img src={profpic} alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light">
              <a href="index.html">Anagabriele Loor</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <a href="https://github.com/anagabrieleloor" className="github" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/anagabrieleloor/" className="linkedin" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <Link to="/">
                  <a href="#hero" className="nav-link scrollto active">
                    <i className="bx bx-home"></i>
                    <FontAwesomeIcon icon={faHouse} />
                    <span>Home</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <a href="#about" className="nav-link scrollto">
                    <i className="bx bx-user"></i>
                    <FontAwesomeIcon icon={faCircleUser} />
                    <span>About</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/portfolio">
                  <a href="#portfolio" className="nav-link scrollto">
                    <i className="bx bx-book-content"></i>
                    <FontAwesomeIcon icon={faFolderOpen} />
                    <span>Portfolio</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <a href="#contact" className="nav-link scrollto">
                    <i className="bx bx-envelope"></i>
                    <FontAwesomeIcon icon={faAddressCard} />
                    <span>Contact</span>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
