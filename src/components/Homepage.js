// src/components/Homepage.js
import React from 'react';
import './Homepage.css';
import logo from '../images/logo.png';
import detailingImage from '../images/detailing.jpg';
import paintcorrectionImage from '../images/paintcorrection.jpg';
import ceramiccoatingImage from '../images/ceramiccoating.jpg';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="homepage">
      <header>
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="Detailify Logo" />
          </div>
          <nav>
            <ul>
              <li><Link to="#">Home</Link></li>  
              <li><a href="#services">Our Services</a></li>
              <li><a href="#">Packages</a></li>
              <li><a href="#about-us">About us</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </nav>
          <div className="reservation">
            <Link to="/Login" className="btn-reservation">Sign In</Link>
          </div>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h1>Your Car, Our Passion</h1>
          <p>Premium auto detailing services to bring back the shine to your vehicle.</p>
          <Link to="/Signup" className="cta-btn">Online Reservation</Link>
        </div>
      </section>

      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src={detailingImage} alt="Car Detailing"/>
            <div className="overlay">
              <h3>Car Detailing</h3>
              <p>A full-service car detailing. It's a deep cleaning by an attentive team of professionals who care about your satisfaction.</p>
              <Link to="/packages" className="btn-overlay">View Packages</Link>
            </div>
          </div>
          <div className="service-card">
            <img src={paintcorrectionImage} alt="Paint Correction"/>
            <div className="overlay">   
              <h3>Paint Correction</h3>
              <p>Thorough cleaning to make your interior as good as new.</p>      
              <Link to="/packages" className="btn-overlay">View Packages</Link>  
            </div>
          </div>
          <div className="service-card">
            <img src={ceramiccoatingImage} alt="Ceramic Coating"/>
            <div className="overlay">
              <h3>Ceramic Coating</h3>
              <p>Protect your vehicle’s paint with long-lasting ceramic coating.</p>
              <Link to="/packages" className="btn-overlay">View Packages</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="about-us" className="about-us-section">
        <h2>About TNapole Detailing</h2>
        <p>At Detailify, every car that comes through the door is special. It doesn’t matter what kind of car it is, how old it is, or how much it’s worth.  Regardless of these factors, we know that every car is valuable to its owner, and we strive to ensure that everyone who trusts their car to us gets the treatment they deserve.</p>
        <p>In our new, state-of-the-art shop, you’ll find Toronto’s most committed staff.  Our founders have made their names detailing cars in this city, and we understand both the community and the climate.  You won’t find a more knowledgeable group anywhere in the GTA.</p>
        <p>Challenges?  This city sure has them.  We’ve got blistering hot summers, which rain UV down on our rides.  We’ve got freezing cold winters, with salt and other chemicals assaulting our vehicles from beneath, and 24/7/365 traffic kicking up dust, stones and other debris attacking our paint from above.</p>
      </section>

      <footer>
        <p>© 2024 TNapoleDetailing. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
