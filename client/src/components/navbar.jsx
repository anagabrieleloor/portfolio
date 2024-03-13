import {Routes, Route, Link} from "react-router-dom";
import profpic from '../assets/profpic.jpg'; 

export default function Navbar() {
  return (
    <div id="navbar">
<header id="header">
    <div class="d-flex flex-column">

    <div class="profile">
        <img src={profpic} alt="" class="img-fluid rounded-circle" />
        <h1 class="text-light"><a href="index.html">Anagabriele Loor</a></h1>
        <div class="social-links mt-3 text-center">
          <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
          <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
          <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>

      <nav id="navbar" class="nav-menu navbar">
        <ul>
          <li><Link to="/"><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></Link></li>
          <li><Link to="/about"><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></Link></li>
          <li><Link to="/portfolio"><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></Link></li>
          <li><Link to="/contact"><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></Link></li>
        </ul>
      </nav>
    </div>
  </header>


    </div>
  );
}
