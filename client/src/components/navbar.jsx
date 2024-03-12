import {Routes, Route, Link} from "react-router-dom";
import profpic from '../assets/profpic.jpg'; 

export default function Navbar() {
  return (
    <div id="navbar">
<header id="header">
    <div class="d-flex flex-column">

      <div class="profile">
      <img src={profpic} alt="Profile Picture" className="img-fluid rounded-circle" />
        <h1 class="text-light"><a href="index.html">Anagabriele Loor</a></h1>
        <div class="social-links mt-3 text-center">
          <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
          <a href="#" class="email"><img src="https://img.icons8.com/3d-plastilina/30/mailbox-closed-flag-down--v1.png" alt="Email" /><i class="bx bxl-email"></i></a>
          {/* <img src="https://img.icons8.com/3d-plastilina/69/linkedin--v1.png" class="linkedin" /><i class="bx bxl-linkedin"></i> */}
          <a href="#" class="linkedin"><img src="https://img.icons8.com/3d-plastilina/69/linkedin--v1.png" alt="LinkedIn"  /><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>

      <nav id="navbar" class="navbar-menu navbar">
        <ul>
        <li><Link to="/"><a href="#hero" class="nav-link scrollto active"><img src ="https://img.icons8.com/3d-plastilina/69/home--v1.png" alt="Home" /><i class="bx bx-home"></i> <span>Home</span></a></Link></li>
          <li><a href="#about" class="nav-link scrollto"><img src="https://img.icons8.com/3d-plastilina/69/search--v1.png" alt="About" /><i class="bx bx-user"></i> <span>About</span></a></li>
          <li><Link to="/portfolio"><a href="#portfolio" class="nav-link scrollto"><img src = "https://img.icons8.com/3d-plastilina/69/briefcase--v1.png" alt="Portfolio" /><i class="bx bx-book-content"></i> <span>Portfolio</span></a></Link></li>
          <li><Link to="/contact"><a href="#contact" class="nav-link scrollto"><img src="https://img.icons8.com/3d-plastilina/69/services--v2.png" alt="Contact" /><i class="bx bx-envelope"></i> <span>Contact</span></a></Link></li>
        </ul>
      </nav>
    </div>
  </header>


    </div>
  );
}
