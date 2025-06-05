import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductSearch from './serach'; // Ensure path is correct
import { Link } from 'react-router-dom';

const ProductsAvailable = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://mumo2007.pythonanywhere.com/api/productavailable');
      setAllProducts(response.data);
      setDisplayedProducts(response.data);
    } catch (err) {
      setError('Failed to fetch products');
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

  if (loading) return <div className="status-message">Loading products...</div>;
  if (error) return <div className="status-message error">{error}</div>;

  return (
    <div className="products-container">
      <ProductSearch products={allProducts} onSearch={handleSearch} />
      <h2 className="section-title">Premium Cars</h2>
      <div className="products-grid">
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product) => (
            <div key={product.id} className="product-card">
              {product.product_photo && (
                <img 
                  src={`https://mumo2007.pythonanywhere.com/static/images/${product.product_photo}`} 
                  alt={product.product_name}
                  className="product-image"
                />
              )}
              <div className="product-content">
                <h3>{product.product_name}</h3>
                <p className="description">{product.product_description}</p>
                <p className="price">KES {parseFloat(product.product_cost).toLocaleString()}</p>
                <Link 
                  to="/deposit" 
                  state={{ product }}
                  className="btn"
                >
                  Make Deposit
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">No products found matching your search.</div>
        )}
      </div>

      <style jsx>{`
        .products-container {
          max-width: 1200px;
          margin: auto;
          padding: 30px 20px;
        }
        .section-title {
          font-size: 2rem;
          text-align: center;
          margin-bottom: 40px;
          color: #2c3e50;
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
          gap: 25px;
        }
        .product-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease;
        }
        .product-card:hover {
          transform: translateY(-5px);
        }
        .product-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .product-content {
          padding: 15px 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .product-content h3 {
          font-size: 1.25rem;
          color: #333;
        }
        .description {
          font-size: 0.95rem;
          color: #555;
          line-height: 1.4;
        }
        .price {
          font-size: 1.1rem;
          color: #1abc9c;
          font-weight: 600;
        }
        .btn {
          margin-top: auto;
          padding: 10px 16px;
          background: #1abc9c;
          color: #fff;
          text-align: center;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.3s ease;
        }
        .btn:hover {
          background: #16a085;
        }
        .status-message {
          text-align: center;
          font-size: 1.2rem;
          padding: 40px 0;
        }
        .status-message.error {
          color: #e74c3c;
        }
        .no-results {
          grid-column: 1 / -1;
          text-align: center;
          padding: 40px 0;
          font-size: 1rem;
          color: #999;
        }
      `}</style>
    </div>
  );
};

export default ProductsAvailable;
