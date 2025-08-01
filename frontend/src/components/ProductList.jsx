import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const result = await axios.get("http://localhost:8081/products/findall");
      setProducts(result.data);
    } catch (error) {
      console.error("Error loading products", error);
    }
  };

  const handleDescriptionClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container1">
      <div className="home-link">
        <Link to="/" className="home-button">← Back to Home</Link>
      </div>

      <h2>Product List</h2>

      <div className="card-grid">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-field"><strong>Product Key:</strong> {product.productKey}</div>
              <div className="product-field"><strong>Retailer:</strong> {product.retailer}</div>
              <div className="product-field"><strong>Brand:</strong> {product.brand}</div>
              <div className="product-field"><strong>Model:</strong> {product.model}</div>
              <div className="product-field"><strong>Name:</strong> {product.productName || '-'}</div>
              <div className="product-field"><strong>Description:</strong>
              <div
                className="product-field description clickable"
                onClick={() => handleDescriptionClick(product)}
                title="Click to view full description"
              >
                 {product.productDescription || '-'}
              </div></div>
              <div className="product-field"><strong>Price:</strong> ₹ {parseFloat(product.price).toFixed(2)}</div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <h3>Product Description</h3>
            <p>{selectedProduct.productDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
};
