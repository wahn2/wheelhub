import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className="row bg-warning text-dark p-5" style={{ borderTop: '3px solid #343a40' }}>
        <div className="col-md-4">
            <h3 className="mb-4" style={{ borderBottom: '2px solid #343a40', paddingBottom: '10px' }}>About Us</h3>
            <p className="text-justify">This is an entrusted company with a five years experience in the car industry.It has offered successiful services to the customers in good time and also in the perfect condition.</p>
            <p className="text-justify">WheelsHub.KE is your trusted partner in the automotive world, offering a seamless platform for buying and selling quality cars. We provide flexible trade-in options, allowing customers to easily upgrade their vehicles with minimal hassle.</p>
            
            {/* Added button link to more about page */}
            <Link to="/about" className="btn btn-dark mt-3">
              Learn More About Us
            </Link>
        </div>
        <div className="col-md-4">
            <h3 className="mb-4" style={{ borderBottom: '2px solid #343a40', paddingBottom: '10px' }}>Contact Us</h3>
            <form action="">
                <input type="email" name="email" placeholder="Enter Email" className="form-control mb-3"/>
                <textarea name="comment" id="" placeholder="Leave a comment" className="form-control mb-3" rows="5"></textarea>
                <button type="button" className="btn btn-danger btn-block">Send Message</button>
            </form>
        </div> 
        <div className="col-md-4">
            <h3 className="mb-4 text-dark" style={{ borderBottom: '2px solid #343a40', paddingBottom: '10px' }}>Stay Connected</h3>
            <p className="text-justify">At WheelsHub.KE, staying connected with our customers is a top priority, no matter where you are. You can easily reach us through our vibrant social media platforms — Instagram, Twitter, and TikTok.</p>
            
            {/* Added another button link to more about page */}
            <Link to="/about" className="btn btn-outline-dark mt-3">
              Our Full Story
            </Link>
            
            <div className="d-flex justify-content-around mt-4">
                <i className="fab fa-instagram fa-2x"></i>
                <i className="fab fa-twitter fa-2x"></i>
                <i className="fab fa-tiktok fa-2x"></i>
            </div>
        </div>
      </div>
      <footer className="bg-dark text-center text-light py-3" style={{ borderTop: '3px solid #ffc107' }}>
          <p className="m-0">Developed by Joshua Kisenge. &copy; All rights reserved &trade;</p>
      </footer>
    </div>
  )
}

export default Footer;