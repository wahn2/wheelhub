import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    product_name: '',
    product_description: '',
    product_cost: '',
    product_photo: null
  });
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      product_photo: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('product_name', formData.product_name);
      formDataToSend.append('product_description', formData.product_description);
      formDataToSend.append('product_cost', formData.product_cost);
      formDataToSend.append('product_photo', formData.product_photo);

      const response = await axios.post( 'https://joshua254.pythonanywhere.com/api/add_product', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setMessage('Product added successfully!');
      // Reset form after successful submission
      setFormData({
        product_name: '',
        product_description: '',
        product_cost: '',
        product_photo: null
      });
    } catch (error) {
      console.error('Error adding product:', error);
      setMessage('Failed to add product. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="product-form-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="product_name">Product Name:</label>
          <input
            type="text"
            id="product_name"
            name="product_name"
            value={formData.product_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="product_description">Description:</label>
          <textarea
            id="product_description"
            name="product_description"
            value={formData.product_description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="product_cost">Price:</label>
          <input
            type="number"
            id="product_cost"
            name="product_cost"
            value={formData.product_cost}
            onChange={handleChange}
            step="0.01"
            min="0"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="product_photo">Product Image:</label>
          <input
            type="file"
            id="product_photo"
            name="product_photo"
            onChange={handleFileChange}
            accept="image/*"
            required
          />
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Adding Product...' : 'Add Product'}
        </button>

        {message && <div className="message">{message}</div>}
      </form>

      <style jsx>{`
        .product-form-container {
          max-width: 500px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        h2 {
          text-align: center;
          margin-bottom: 20px;
        }
        .form-group {
          margin-bottom: 15px;
        }
        label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }
        input[type="text"],
        input[type="number"],
        textarea,
        input[type="file"] {
          width: 100%;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          box-sizing: border-box;
        }
        textarea {
          height: 100px;
          resize: vertical;
        }
        button {
          background-color: #4CAF50;
          color: white;
          padding: 10px 15px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }
        button:disabled {
          background-color: #cccccc;
          cursor: not-allowed;
        }
        button:hover:not(:disabled) {
          background-color: #45a049;
        }
        .message {
          margin-top: 15px;
          padding: 10px;
          border-radius: 4px;
        }
        .message.success {
          background-color: #dff0d8;
          color: #3c763d;
        }
        .message.error {
          background-color: #f2dede;
          color: #a94442;
        }
      `}</style>
    </div>
  );
};

export default ProductForm;