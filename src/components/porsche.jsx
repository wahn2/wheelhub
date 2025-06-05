import React from 'react';
import { Link } from 'react-router-dom';

const MoreDetailsP = () => {
  return (
    <div className="vehicle-details">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img 
              src="images.jpeg" 
              alt="2023 Electric Hatchback" 
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <h2>2023 Electric Hatchback</h2>
            
            <div className="key-specs mb-4">
              <div className="spec-item">
                <span className="spec-label">Mileage:</span>
                <span className="spec-value">4,200 mi</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Transmission:</span>
                <span className="spec-value">Automatic</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Drivetrain:</span>
                <span className="spec-value">FWD (Front-Wheel Drive)</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Battery Range:</span>
                <span className="spec-value">250 miles (estimated)</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Charging Time:</span>
                <span className="spec-value">8 hours (Level 2), 30 min (DC Fast Charge 80%)</span>
              </div>
            </div>
            
            <div className="price-section mb-4">
              <h3 className="price">$38,499</h3>
              <p className="finance-options">Financing available at 3.9% APR*</p>
            </div>
            
            <div className="features mb-4">
              <h4>Key Features</h4>
              <ul>
                <li>Regenerative braking system</li>
                <li>15" Touchscreen infotainment system</li>
                <li>Apple CarPlay & Android Auto</li>
                <li>Advanced driver assistance systems</li>
                <li>LED headlights and daytime running lights</li>
                <li>Fast charging capability</li>
              </ul>
            </div>
            
            <div className="actions">
              <Link to="/test-drive" className="btn btn-primary me-2">Schedule Test Drive</Link>
              <Link to="/contact" className="btn btn-outline-secondary">Contact Dealer</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreDetailsP;