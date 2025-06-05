import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './VehicleDetails.css'; // You'll need to create this CSS file

const VehicleDetails = () => {
  const { id } = useParams();
  
  // In a real app, you would fetch this data from an API based on the ID
  const vehicle = {
    id: 1,
    title: "2023 Luxury SUV",
    image: "download (10).jpeg",
    mileage: "15,000 mi",
    transmission: "Automatic",
    drivetrain: "AWD",
    price: "$42,999",
    description: "This premium luxury SUV combines sophisticated styling with cutting-edge technology. With its powerful engine and refined interior, it offers an exceptional driving experience.",
    features: [
      "Leather seats",
      "Heated front seats",
      "Apple CarPlay/Android Auto",
      "Premium sound system",
      "Panoramic sunroof",
      "360-degree camera",
      "Adaptive cruise control",
      "Blind spot monitoring"
    ],
    specs: {
      engine: "3.0L V6 Turbo",
      horsepower: "355 HP",
      torque: "365 lb-ft",
      fuelEconomy: "20 city / 27 highway",
      seating: "5",
      color: "Midnight Black"
    }
  };

  return (
    <div className="vehicle-details-container">
      <div className="breadcrumb">
        <Link to="/">Home</Link> &gt; <Link to="/vehicles">Vehicles</Link> &gt; {vehicle.title}
      </div>
      
      <h1>{vehicle.title}</h1>
      
      <div className="vehicle-details-content">
        <div className="vehicle-gallery">
          <div className="main-image">
            <img src={vehicle.image} alt={vehicle.title} />
            <span className="badge">Best Seller</span>
          </div>
          <div className="thumbnail-grid">
            {/* In a real app, these would be different images of the vehicle */}
            <img src={vehicle.image} alt="Thumbnail 1" />
            <img src={vehicle.image} alt="Thumbnail 2" />
            <img src={vehicle.image} alt="Thumbnail 3" />
            <img src={vehicle.image} alt="Thumbnail 4" />
          </div>
        </div>
        
        <div className="vehicle-info">
          <div className="price-section">
            <h2>{vehicle.price}</h2>
            <div className="quick-specs">
              <span>{vehicle.mileage}</span>
              <span>{vehicle.transmission}</span>
              <span>{vehicle.drivetrain}</span>
            </div>
            <button className="btn btn-primary">Contact Dealer</button>
            <button className="btn btn-outline">Schedule Test Drive</button>
          </div>
          
          <div className="details-section">
            <h3>Vehicle Overview</h3>
            <p>{vehicle.description}</p>
            
            <h3>Key Features</h3>
            <ul className="features-list">
              {vehicle.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            
            <h3>Technical Specifications</h3>
            <div className="specs-grid">
              {Object.entries(vehicle.specs).map(([key, value]) => (
                <div className="spec-item" key={key}>
                  <span className="spec-label">{key}:</span>
                  <span className="spec-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="similar-vehicles">
        <h2>Similar Vehicles</h2>
        <div className="vehicles-grid">
          {/* This would be populated with similar vehicles from your API */}
          <div className="vehicle-card">
            <div className="vehicle-image">
              <img src={vehicle.image} alt="Similar Vehicle" />
            </div>
            <div className="vehicle-details">
              <h3>2023 Luxury SUV (Similar)</h3>
              <div className="specs">
                <span>18,000 mi</span>
                <span>Automatic</span>
                <span>AWD</span>
              </div>
              <p className="price">$41,500</p>
              <Link to="/vehicle/2" className="btn btn-outline">View Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;