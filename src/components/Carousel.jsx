import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Carousel = () => {
  // Updated carousel items with navigation paths
  const carouselItems = [
    {
      id: 1,
      image: "pana1.jpeg",
      title: "Premium Vehicle Collection",
      description: "Discover our luxury vehicles at competitive prices",
      buttonText: "View Collection",
      path: "/vehicles"  // New path property
    },
    {
      id: 2,
      image: "pana2.jpeg",
      title: "Trusted Import Services",
      description: "We handle all import procedures for international vehicles",
      buttonText: "Import Services",
      path: "/import-services"  // New path property
    },
    {
      id: 3,
      image: "pana3.jpeg",
      title: "Flexible Financing Options",
      description: "Get approved quickly with our partner lenders",
      buttonText: "Financing",
      path: "/financing"  // New path property
    },
    {
      id: 4,
      image: "pana4.jpeg",
      title: "Expert Maintenance",
      description: "Quality servicing for all vehicles purchased from us",
      buttonText: "Services",
      path: "/services"  // New path property
    }
  ];

  return (
    <section className="carousel-section mb-5">
      <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        {/* Indicators */}
        <div className="carousel-indicators">
          {carouselItems.map((item, index) => (
            <button 
              key={item.id}
              type="button" 
              data-bs-target="#heroCarousel" 
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <div key={item.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img 
                src={item.image} 
                alt={item.title} 
                className="d-block w-100 carousel-image"
              />
              <div className="carousel-caption d-none d-md-block">
                <h2 className="display-4 fw-bold">{item.title}</h2>
                <p className="lead">{item.description}</p>
                <Link to={item.path} className="btn btn-secondary">
                  {item.buttonText}
                </Link>
              </div>
              <div className="carousel-overlay"></div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button 
          className="carousel-control-prev" 
          type="button" 
          data-bs-target="#heroCarousel" 
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button 
          className="carousel-control-next" 
          type="button" 
          data-bs-target="#heroCarousel" 
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Carousel;