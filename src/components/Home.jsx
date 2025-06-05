import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import Footer from './Footer';
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section with Carousel */}
      <section className="hero-section">
        <Carousel />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Discover Your Perfect Ride</h1>
            <p className="hero-subtitle">Premium vehicles at unbeatable prices with exceptional service</p>
            <div className="cta-buttons">
              <Link to="/Products" className="btn btn-primary">Check Out More</Link>
              <br />
              <Link to="/about" className="btn btn-secondary">Learn About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">We make car buying simple, transparent, and enjoyable</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚗</div>
              <h3>Wide Selection</h3>
              <p>Hundreds of certified vehicles to match every budget and preference.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Transparent History</h3>
              <p>Full vehicle history reports on every car in our inventory.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Extended Warranty</h3>
              <p>Comprehensive protection plans available for peace of mind.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Competitive Financing</h3>
              <p>Low rates and flexible terms to fit your budget.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="featured-vehicles">
        <div className="container">
          <h2 className="section-title">Premium Selected vehicles</h2>
          <p className="section-subtitle">Curated selection of our most popular models</p>
          
          <div className="vehicles-grid">
            <div className="vehicle-card">
              <div className="vehicle-image" >
                <span className="badge">Best Seller</span>
                <img src="download (10).jpeg" alt="" />
              </div>
              <div className="vehicle-details">
                <h3>2023 Luxury SUV</h3>
                <div className="specs">
                  <span>15,000 mi</span>
                  <span>Automatic</span>
                  <span>AWD</span>
                </div>
                <p className="price">$42,999</p>
                <Link to="/vehicle1" className="btn btn-outline">View Details</Link>
              </div>
            </div>
            
            <div className="vehicle-card">
              <div className="vehicle-image" >
                <span className="badge">New Arrival</span>
                <img src="images (2).jpeg" alt="" />
              </div>
              <div className="vehicle-details">
                <h3>2022 Sport Sedan</h3>
                <div className="specs">
                  <span>8,500 mi</span>
                  <span>Automatic</span>
                  <span>RWD</span>
                </div>
                <p className="price">$35,750</p>
                <Link to="/vehicle2" className="btn btn-outline">View Details</Link>
              </div>
            </div>
            
            <div className="vehicle-card">
              <div className="vehicle-image">
                <span className="badge">Eco Friendly</span>
                <img src="images.jpeg" alt="" />
              </div>
              <div className="vehicle-details">
                <h3>2023 Electric Hatchback</h3>
                <div className="specs">
                  <span>4,200 mi</span>
                  <span>Automatic</span>
                  <span>FWD</span>
                </div>
                <p className="price">$38,499</p>
                <Link to="/vehicle3" className="btn btn-outline">View Details</Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <Link to="/inventory" className="btn btn-primary">View Premium Cars</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Customer Experiences</h2>
          <p className="section-subtitle">Don't just take our word for it</p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="rating">★★★★★</div>
              <p>"The entire process was seamless. Found my dream car at a great price and the financing was approved instantly!"</p>
              <div className="customer-info">
                <div className="customer-avatar">JD</div>
                <div>
                  <div className="customer-name">John D.</div>
                  <div className="customer-location">Austin, TX</div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="rating">★★★★★</div>
              <p>"I was nervous about buying online, but the video walkthrough and detailed inspection report gave me complete confidence."</p>
              <div className="customer-info">
                <div className="customer-avatar">SM</div>
                <div>
                  <div className="customer-name">Sarah M.</div>
                  <div className="customer-location">Chicago, IL</div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="rating">★★★★☆</div>
              <p>"Great selection and no pressure sales. The delivery was right on time and the car was exactly as described."</p>
              <div className="customer-info">
                <div className="customer-avatar">RT</div>
                <div>
                  <div className="customer-name">Robert T.</div>
                  <div className="customer-location">Miami, FL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Find Your Perfect Vehicle?</h2>
          <p>Start browsing our inventory or get pre-approved for financing in minutes</p>
          <div className="cta-buttons">
          <Link to="/Products" className="btn btn-primary">Browse Inventory</Link>
          <Link to="/financing" className="btn btn-dark">Get Pre-Approved</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;