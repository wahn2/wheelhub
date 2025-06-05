import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductSearch from './serach';
import { Link } from 'react-router-dom';

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://joshua254.pythonanywhere.com/api/productavailable');
      setAllProducts(response.data);
      setDisplayedProducts(response.data);
    } catch (err) {
      setError('Failed to fetch products. Please try again later.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearch = (filteredProducts) => {
    setDisplayedProducts(filteredProducts);
  };

  if (loading) return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Please Wait....</p>
    </div>
  );
  
  if (error) return (
    <div className="error-container">
      <div className="error-icon">⚠️</div>
      <p>{error}</p>
      <button onClick={fetchProducts} className="retry-btn">Retry</button>
    </div>
  );

  return (
    <div className="products-container">
      <div className="hero-section">
        <h1>Discover Your Dream Car</h1>
        <p>Explore our premium collection of vehicles</p>
        <ProductSearch products={allProducts} onSearch={handleSearch} />
      </div>
      
      <div className="products-content">
        <h2 className="section-title">Our Premium Collection</h2>
        <div className="products-grid">
          {displayedProducts.length > 0 ? (
            displayedProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="card-badge">Available</div>
                <div className="image-wrapper">
                  <img 
                    src={`https://joshua254.pythonanywhere.com/static/images/${product.product_photo}`} 
                    alt={product.product_name}
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = 'https://via.placeholder.com/300x200?text=Car+Image';
                    }}
                  />
                </div>
                <div className="product-content">
                  <h3>{product.product_name}</h3>
                  <div className="specs">
                    <span><i className="icon">⛽</i> Petrol</span>
                    <span><i className="icon">🔄</i> Automatic</span>
                    <span><i className="icon">👥</i> 5 Seats</span>
                  </div>
                  <p className="description">{product.product_description}</p>
                  <div className="price-section">
                    <p className="price">KES {parseFloat(product.product_cost).toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
                    <p className="installment">or KES {(parseFloat(product.product_cost)/12).toLocaleString(undefined, { minimumFractionDigits: 2 })}/mo for 12 mos</p>
                  </div>
                </div>
                <div className="product-buttons">
                  <Link 
                    to="/paynow" 
                    state={{ product: product }}
                    className="btn buy-btn"
                  >
                    <i className="icon">💰</i> Buy Now
                  </Link>
                  <Link 
                    to={`/moredetails/${product.id}`}
                    className="btn details-btn"
                  >
                    <i className="icon">🔍</i> Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <img src="https://cdn-icons-png.flaticon.com/512/4076/4076478.png" alt="No results" width="120" />
              <h3>No matching vehicles found</h3>
              <p>Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .products-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px 60px;
          font-family: 'Poppins', sans-serif;
          color: #333;
        }
        
        .hero-section {
          background: linear-gradient(135deg, #0a8754 0%, #0a75c2 100%);
          color: white;
          padding: 60px 30px;
          border-radius: 16px;
          margin-bottom: 40px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(10, 135, 84, 0.2);
        }
        
        .hero-section h1 {
          font-size: 2.8rem;
          margin-bottom: 15px;
          font-weight: 700;
        }
        
        .hero-section p {
          font-size: 1.2rem;
          margin-bottom: 30px;
          opacity: 0.9;
        }
        
        .section-title {
          text-align: center;
          font-size: 2.2rem;
          color: #222;
          margin-bottom: 50px;
          position: relative;
        }
        
        .section-title:after {
          content: '';
          display: block;
          width: 80px;
          height: 4px;
          background: #0a8754;
          margin: 15px auto 0;
          border-radius: 2px;
        }
        
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        
        .product-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
        }
        
        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }
        
        .card-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #0a8754;
          color: white;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          z-index: 1;
        }
        
        .image-wrapper {
          height: 220px;
          overflow: hidden;
        }
        
        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .product-card:hover .image-wrapper img {
          transform: scale(1.05);
        }
        
        .product-content {
          padding: 20px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        
        h3 {
          margin: 0 0 12px;
          font-size: 1.4rem;
          color: #222;
          font-weight: 600;
        }
        
        .specs {
          display: flex;
          gap: 12px;
          margin-bottom: 15px;
          font-size: 0.85rem;
          color: #666;
        }
        
        .specs .icon {
          margin-right: 5px;
        }
        
        .description {
          font-size: 0.95rem;
          color: #555;
          margin-bottom: 15px;
          line-height: 1.5;
          flex-grow: 1;
        }
        
        .price-section {
          margin-top: 10px;
        }
        
        .price {
          font-size: 1.4rem;
          font-weight: 700;
          color: #0a8754;
          margin-bottom: 5px;
        }
        
        .installment {
          font-size: 0.85rem;
          color: #888;
        }
        
        .product-buttons {
          display: flex;
          justify-content: space-between;
          padding: 0 20px 20px;
          gap: 15px;
        }
        
        .btn {
          padding: 12px 18px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex: 1;
        }
        
        .buy-btn {
          background-color: #0a8754;
          color: white;
          border: 2px solid #0a8754;
        }
        
        .buy-btn:hover {
          background-color: #087049;
          border-color: #087049;
          transform: translateY(-2px);
        }
        
        .details-btn {
          background-color: white;
          border: 2px solid #0a75c2;
          color: #0a75c2;
        }
        
        .details-btn:hover {
          background-color: #f0f8ff;
          color: #0a75c2;
          transform: translateY(-2px);
        }
        
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 60vh;
          text-align: center;
        }
        
        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 5px solid #f3f3f3;
          border-top: 5px solid #0a8754;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 20px;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .error-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 60vh;
          text-align: center;
          padding: 20px;
        }
        
        .error-icon {
          font-size: 3rem;
          margin-bottom: 20px;
        }
        
        .retry-btn {
          padding: 12px 24px;
          background: #0a75c2;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          margin-top: 20px;
          transition: all 0.3s ease;
        }
        
        .retry-btn:hover {
          background: #095e9e;
          transform: translateY(-2px);
        }
        
        .no-results {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          text-align: center;
        }
        
        .no-results h3 {
          font-size: 1.5rem;
          margin: 20px 0 10px;
          color: #444;
        }
        
        .no-results p {
          color: #777;
          max-width: 400px;
        }
        
        @media (max-width: 768px) {
          .hero-section {
            padding: 40px 20px;
          }
          
          .hero-section h1 {
            font-size: 2.2rem;
          }
          
          .section-title {
            font-size: 1.8rem;
          }
          
          .products-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Products;