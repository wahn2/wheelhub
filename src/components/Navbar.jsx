import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand">
          <span className="fw-bold text-success fs-4">
            <i className="fas fa-car me-2"></i>
            WheelsHub<span className="text-dark">.KE</span>
          </span>
        </Link>

        {/* Mobile Toggle Button */}
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent"
          aria-controls="navbarContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="navbar-nav ms-auto align-items-center">
            <Link 
              to="/Caravailable" 
              className="nav-link mx-2 position-relative"
              activeclassname="active"
            >
              <i className="fas fa-car me-1"></i> Cars Available
              <span className="nav-underline"></span>
            </Link>
            
            {/* Add Product Dropdown */}
            <div className="nav-item dropdown">
              <Link 
                to="#" 
                className="nav-link mx-2 position-relative dropdown-toggle" 
                id="addProductDropdown"
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                <i className="fas fa-plus-circle me-1"></i> Add Product
                <span className="nav-underline"></span>
              </Link>
              <ul className="dropdown-menu" aria-labelledby="addProductDropdown">
                <li>
                  <Link to="/ProductForm" className="dropdown-item">
                    <i className="fas fa-plus me-2"></i>Add Product
                  </Link>
                </li>
                <li>
                  <Link to="/BulkUpload" className="dropdown-item">
                    <i className="fas fa-upload me-2"></i> Add Premium
                  </Link>
                </li>
                
              </ul>
            </div>

            <div className="d-flex ms-lg-3 mt-2 mt-lg-0">
              <Link 
                to="/signin" 
                className="btn btn-outline-success rounded-pill px-3 me-2"
              >
                <i className="fas fa-sign-in-alt me-1"></i> Sign In
              </Link>
              <Link 
                to="/signup" 
                className="btn btn-success rounded-pill px-3"
              >
                <i className="fas fa-user-plus me-1"></i> Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;