import React from 'react';
import { Link } from 'react-router-dom';
import './sedan.css'
const VehicleDetailCard = () => {
  return (
    <div className="vehicle-detail-card">
      <div className="vehicle-gallery">
        <div className="main-image">
          <span className="badge badge-new">New Arrival</span>
          <img src="images (2).jpeg" alt="2022 Sport Sedan" />
        </div>
        <div className="thumbnail-gallery">
          <img src="assets2.jpeg" alt="Interior view" />
          <img src="sideview.jpeg" alt="Side view" />
          <img src="images (2)-3.jpeg" alt="Dashboard" />
          <img src="rear.jpeg" alt="Rear view" />
        </div>
      </div>

      <div className="vehicle-details-container">
        <div className="vehicle-header">
          <h1>2022 Sport Sedan</h1>
          <div className="price-section">
            <p className="price">$35,750</p>
            <p className="msrp">MSRP: $38,200</p>
            <p className="savings">You save: $2,450</p>
          </div>
        </div>

        <div className="vehicle-specs">
          <div className="specs-column">
            <h3>Key Specifications</h3>
            <ul>
              <li><strong>Mileage:</strong> 8,500 mi</li>
              <li><strong>Transmission:</strong> Automatic (8-speed)</li>
              <li><strong>Drivetrain:</strong> Rear Wheel Drive (RWD)</li>
              <li><strong>Engine:</strong> 2.0L Turbocharged I4</li>
              <li><strong>Horsepower:</strong> 255 hp</li>
              <li><strong>MPG:</strong> 23 city / 32 highway</li>
              <li><strong>Exterior Color:</strong> Midnight Black Metallic</li>
              <li><strong>Interior Color:</strong> Black Leather</li>
            </ul>
          </div>

          <div className="features-column">
            <h3>Features & Options</h3>
            <div className="features-grid">
              <div className="feature-group">
                <h4>Safety</h4>
                <ul>
                  <li>Adaptive Cruise Control</li>
                  <li>Lane Keeping Assist</li>
                  <li>Blind Spot Monitoring</li>
                  <li>Rear Cross Traffic Alert</li>
                </ul>
              </div>
              <div className="feature-group">
                <h4>Technology</h4>
                <ul>
                  <li>10.25" Touchscreen Display</li>
                  <li>Apple CarPlay/Android Auto</li>
                  <li>Wireless Charging</li>
                  <li>Premium Sound System</li>
                </ul>
              </div>
              <div className="feature-group">
                <h4>Comfort</h4>
                <ul>
                  <li>Heated Front Seats</li>
                  <li>Dual Zone Climate Control</li>
                  <li>Power Adjustable Seats</li>
                  <li>Panoramic Sunroof</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="vehicle-history">
          <h3>Vehicle History</h3>
          <ul>
            <li>Single owner vehicle</li>
            <li>No accidents reported</li>
            <li>Regular maintenance records available</li>
            <li>Still under factory warranty until 2025 or 50,000 miles</li>
          </ul>
        </div>

        <div className="action-buttons">
          <Link to="/schedule-test-drive" className="btn btn-primary">Schedule Test Drive</Link>
          <Link to="/apply-financing" className="btn btn-secondary">Apply for Financing</Link>
          <Link to="/contact" className="btn btn-outline">Contact Sales</Link>
        </div>

        <div className="disclaimer">
          <p>Price excludes tax, title, license and $499 doc fee. Vehicle subject to prior sale. All advertised prices expire at midnight on the day of publication. See dealer for details.</p>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailCard;