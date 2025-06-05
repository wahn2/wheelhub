import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductSearch = ({ products, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (!products || !Array.isArray(products)) {
      onSearch([]);
      return;
    }

    if (term.length === 0) {
      onSearch(products); // Show all products when search is empty
      return;
    }

    const results = products.filter(product => 
      product && (
        (product.product_name && product.product_name.toLowerCase().includes(term.toLowerCase())) ||
        (product.product_description && product.product_description.toLowerCase().includes(term.toLowerCase()))
      )
    );
    onSearch(results);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products by name or description..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      
      <style jsx>{`
        .search-bar {
          margin: 20px 0;
          width: 100%;
        }
        .search-input {
          width: 100%;
          padding: 12px 15px;
          font-size: 16px;
          border: 1px solid #ddd;
          border-radius: 4px;
          box-sizing: border-box;
        }
        .search-input:focus {
          outline: none;
          border-color: #4CAF50;
          box-shadow: 0 0 5px rgba(76, 175, 80, 0.3);
        }
      `}</style>
    </div>
  );
};

ProductSearch.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      product_name: PropTypes.string,
      product_description: PropTypes.string,
      product_cost: PropTypes.number
    })
  ),
  onSearch: PropTypes.func.isRequired
};

ProductSearch.defaultProps = {
  products: []
};

export default ProductSearch;