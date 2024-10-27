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
              <li><Link to="/">Home</Link></li>  
              <li><a href="#services">Our Services</a></li>
              <li><a href="#packages">Packages</a></li>
              <li><a href="#about-us">About us</a></li>
              <li><a href="#contact-us">Contact us</a></li>
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
          <Link to="/auth" className="cta-btn">Online Reservation</Link>
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

      <section id="packages" className="packages-services">
        <h2>Packages</h2>
        <p>Our packages are designed to meet your needs.  We offer three different packages:</p>
        <section className="packages-list">
        <div className="package-card">
          <h2>Basic Package</h2>
          <p>A comprehensive exterior wash and interior cleaning.</p>
          <p><strong>Price:</strong> $99</p>
          <button className="btn-details">View Details</button>
        </div>

        <div className="package-card">
          <h2>Standard Package</h2>
          <p>Includes all features of the Basic Package plus interior shampoo and waxing.</p>
          <p><strong>Price:</strong> $199</p>
          <button className="btn-details">View Details</button>
        </div>

        <div className="package-card">
          <h2>Premium Package</h2>
          <p>Full detailing service including paint correction and ceramic coating.</p>
          <p><strong>Price:</strong> $499</p>
          <button className="btn-details">View Details</button>
        </div>
      </section>
      </section>

      <section id="about-us" className="about-us-section">
        <h2>About TNapole Detailing</h2>
        <p>At Detailify, every car that comes through the door is special. It doesn’t matter what kind of car it is, how old it is, or how much it’s worth.  Regardless of these factors, we know that every car is valuable to its owner, and we strive to ensure that everyone who trusts their car to us gets the treatment they deserve.</p>
        <p>In our new, state-of-the-art shop, you’ll find Toronto’s most committed staff.  Our founders have made their names detailing cars in this city, and we understand both the community and the climate.  You won’t find a more knowledgeable group anywhere in the GTA.</p>
        <p>Challenges?  This city sure has them.  We’ve got blistering hot summers, which rain UV down on our rides.  We’ve got freezing cold winters, with salt and other chemicals assaulting our vehicles from beneath, and 24/7/365 traffic kicking up dust, stones and other debris attacking our paint from above.</p>
      </section>

      <section id="contact-us" className="contact-us-section">
        <h2>Contact TNapole Detailing</h2>
        <p>Any questions?  Send us a message now...</p>
        <div className="contact-layout">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Email:</strong> info@tnapoledetailing.com</p>
          <p><strong>Instagram:</strong> <a href="https://instagram.com/tnapoledetailing" target="_blank" rel="noopener noreferrer">@tnapoledetailing</a></p>
        </div>

        <form className="contact-form">
        <h3>Get in Touch</h3>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
        </div>
      </section>


      <footer>
        <p>© 2024 TNapoleDetailing. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
