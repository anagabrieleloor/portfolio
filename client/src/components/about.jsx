import {Routes, Route, Link} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import profpic from '../assets/profpic.jpg'; 

export default function About() {

  return (
<>
<section id="about" class="about">
      <div class="container">

        <div class="section-title">
          <h2>About</h2>
          <p>Fullstack software engineer and graduate of the Grace Hopper Program for fullstack web development. Based in New York City.  </p>
        </div>

        <div class="row">
          <div class="col-lg-4 aos-init aos-animate" data-aos="fade-right">
            <img src={profpic} class="img-fluid" alt="" />
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content aos-init aos-animate" data-aos="fade-left">
            <h3>Fullstack Software Engineer</h3>
            {/* <p class="fst-italic">
              blah blah blah sdfhdksjfhsdkhfksdjf about me sdfjlsdfjlsdfjsdlfjsdlfjsdlfkjsdlkfjlsdkjfsldkfjsldkjfsdfkl
            </p> */}
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Programming Languages:</strong> <span>JavaScript, SQL</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Frontend Development:</strong> <span>React, Redux, HTML, CSS</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Backend Development:</strong> <span>Node.js, Express</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Database:</strong> <span>PostgreSQL, Database design schemas, SQL querying</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Version Control:</strong> <span>Git</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Testing:</strong> <span>Jest</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Frameworks/Libaries:</strong> <span>Bootstrap, Material-UI, Tailwind CSS</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p>
            My journey has been a mix of teaching, childcare, and artistry, all rolled into one. Now, as a software engineer, I bring that blend of creativity, wonder, and a love for learning to my work every day. It's like crafting art – each project needs planning, problem-solving, and a touch of innovation. I tackle it all with the same excitement and curiosity that's fueled me throughout my career. Always ready to explore new ideas and contribute to the tech world in my own unique way!
            </p>
          </div>
        </div>

      </div>
    </section>
</>
  );
}
