import React from 'react';
import './Aboutus.css'; // You'll need to create this CSS file
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const partners = [
    { name: 'Toyota Motors', logo: 'toyo.jpeg' },
    { name: 'BMW Group', logo: 'bmw.jpeg' },
    { name: 'Mercedes-Benz', logo: 'benz.png' },
    { name: 'Range Rover kenya', logo: 'logorange.jpeg' },
    { name: 'Kia automobil.', logo: 'kia.png' },
  ];

  return (
    <div className="about-us-container">
      <section className="hero-section">
        <h1>Driving Your Dreams Forward</h1>
        <p>Your trusted partner in quality vehicles and seamless importation services</p>
      </section>

      <section className="about-section">
        <div className="about-content">
          <h2>Our Story</h2>
          <p>
            Founded in 2021, WheelsHub.ke has grown from a small local dealership to a premier
            destination for quality vehicles and importation services. Our passion for automobiles
            and commitment to customer satisfaction has driven our success in the industry.
            NOTE: We have with other companies for wide range of cars
          </p>
          <p>
            We specialize in connecting customers with their dream vehicles, whether locally sourced
            or imported from around the globe. Our team of experts handles all aspects of the import
            process, making international car purchases simple and hassle-free.
          </p>
        </div>
        <div className="about-image">
          <img src="showrtoom.png" alt="Our showroom" />
        </div>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Car Sales</h3>
            <p>
              Extensive inventory of new and pre-owned vehicles with competitive pricing and
              financing options.
            </p>
            <Link to="/morecars" className="btn btn-secondary">Our Cars</Link>
          </div>
          <div className="service-card">
            <h3>Imported Cars</h3>
            <p>
              Full-service import solutions including sourcing, shipping, customs clearance, and
              registration.
            </p>
            <Link to="/premiumcars" className="btn btn-secondary">Check Out</Link>
          </div>
          <div className="service-card">
            <h3>Sell Your car With us</h3>
            <p>
              Simply click on the add product and choose if it is premium or normal. On the description, you write your phone number if you want to sell.
              <Link to="/ProductForm" className="btn btn-secondary">Sell With Us</Link>
            </p>
          </div>
          <div className="service-card">
            <h3>Financing Assistance</h3>
            <p>
              Partnerships with leading financial institutions to help secure the best financing
              options.
            </p>
            <Link to="/absa" className="btn btn-secondary">Check Details</Link>
          </div>
        </div>
      </section>

      <section className="partners-section">
        <h2>Our Trusted Partners</h2>
        <p className="partners-subtitle">
          We collaborate with industry leaders to bring you the best vehicles and services
        </p>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <img src={partner.logo} alt={partner.name} className="partner-logo" />
              <p>{partner.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          To revolutionize the car buying experience by offering transparent pricing, exceptional
          service, and access to the global automotive market. We strive to make vehicle ownership
          dreams achievable through our expertise, integrity, and customer-first approach.
        </p>
      </section>

      {/* Contact Details Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:wheelshubke254@gmail.com">wheelshubke254@gmail.com</a></p>
        <p>Phone: <a href="tel:+254790830378">0790 830 378</a></p>
        <p>Instagram: <a href="https://instagram.com/wheelshubke" target="_blank" rel="noopener noreferrer">@wheelshubke</a></p>
      </section>
    </div>
  );
};

export default AboutUs;
