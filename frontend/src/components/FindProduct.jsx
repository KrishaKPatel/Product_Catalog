import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './FindProduct.css';

const FindProduct = () => {
  const [productKey, setProductKey] = useState('');
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setProduct(null);
    setError('');

    if (!productKey) {
      setError("Please enter a product key.");
      return;
    }

    try {
  const response = await axios.get(`http://localhost:8081/products/find/${productKey}`);
  setProduct(response.data);
// eslint-disable-next-line no-unused-vars
} catch (err) {
  setError("Product not found or an error occurred.");
}

  };

  return (
    <div className="find-container">
      <div className="home-link">
        <Link to="/" className="home-button">← Back to Home</Link>
      </div>

      <h2>Find The Product</h2>

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="number"
          value={productKey}
          onChange={(e) => setProductKey(e.target.value)}
          placeholder="Enter product key"
          className="search-input"
          required
        />
        <button type="submit">Search</button>
      </form>

      {error && <div className="error-box">{error}</div>}

      {product && (
        <div className="product-card">
          <h4 className="product-header">Product Details</h4>
          <div className="product-body">
            <p><strong>Product Key:</strong> {product.productKey}</p>
            <p><strong>Retailer:</strong> {product.retailer}</p>
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Model:</strong> {product.model}</p>
            <p><strong>Product Name:</strong> {product.productName}</p>
            <p><strong>Product Description:</strong> {product.productDescription}</p>
            <p><strong>Price:</strong> ₹ {parseFloat(product.price).toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindProduct;
