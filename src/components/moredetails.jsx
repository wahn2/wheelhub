import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const MoreDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(`https://joshua254.pythonanywhere.com/api/productavailable/${id}`);
        setCar(response.data);
      } catch (err) {
        setError('Failed to fetch car details. Please try again later.');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [id]);

  if (loading) return <div className="loading">Loading car details...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!car) return <div className="no-car">No car found with ID: {id}</div>;

  return (
    <div className="car-details-container">
      <div className="car-details-card">
        <h2>{car.product_name}</h2>
        
        {car.product_photo && (
          <img 
            src={`https://joshua254.pythonanywhere.com/static/images/${car.product_photo}`} 
            alt={car.product_name}
            className="car-image"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
            }}
          />
        )}
        
        <div className="car-info">
          <p className="car-description">{car.product_description}</p>
          <p className="car-price">Price: KES {parseFloat(car.product_cost).toFixed(2)}</p>
          
          <div className="car-actions">
            <Link 
              to="/paynow" 
              state={{ product: car }}
              className="btn btn-buy"
            >
              Buy Now
            </Link>
            <Link to="/caravailable" className="btn btn-back">
              Back to Cars
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .car-details-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        
        .car-details-card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        
        h2 {
          padding: 20px;
          margin: 0;
          background: #f8f9fa;
          text-align: center;
        }
        
        .car-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          display: block;
        }
        
        .car-info {
          padding: 20px;
        }
        
        .car-description {
          font-size: 1.1em;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        
        .car-price {
          font-size: 1.5em;
          font-weight: bold;
          color: #4CAF50;
          margin: 20px 0;
        }
        
        .car-actions {
          display: flex;
          gap: 15px;
          margin-top: 30px;
        }
        
        .btn {
          padding: 10px 20px;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 500;
          text-align: center;
          flex: 1;
        }
        
        .btn-buy {
          background-color: #4CAF50;
          color: white;
          border: none;
        }
        
        .btn-buy:hover {
          background-color: #45a049;
        }
        
        .btn-back {
          background-color: #f8f9fa;
          color: #333;
          border: 1px solid #ddd;
        }
        
        .btn-back:hover {
          background-color: #e2e6ea;
        }
        
        .loading, .error, .no-car {
          text-align: center;
          padding: 40px;
          font-size: 1.2em;
        }
        
        .error {
          color: #ff0000;
        }
        
        .no-car {
          color: #666;
        }
      `}</style>
    </div>
  );
};

export default MoreDetails;