import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AddProduct.css';

export const AddProduct = () => {
  const [product, setProduct] = useState({
    productKey: "",
    retailer: "",
    brand: "",
    model: "",
    productName: "",
    productDescription: "",
    price: ""
  });

  const [success, setSuccess] = useState(false);

  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setProduct({
      productKey: "",
      retailer: "",
      brand: "",
      model: "",
      productName: "",
      productDescription: "",
      price: ""
    });
    setSuccess(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { productKey } = product;

    try {
      // Step 1: Check if productKey already exists
      const res = await axios.get(`http://localhost:8081/products/find/${productKey}`);

      if (res.data) {
        alert("❌ Product Key already exists. Please try a different one.");
        // 🔴 Do NOT reset the form — user data stays intact
        return;
      }
    } catch (error) {
      if (error.response?.status !== 404) {
        console.error("Error checking product key:", error);
        alert("Error checking Product Key: " + (error.response?.data?.message || error.message));
        return;
      }
      // Product not found — proceed
    }

    try {
      await axios.post("http://localhost:8081/products/save", product);
      setSuccess(true);
    } catch (error) {
      console.error("Failed to add product:", error);
      alert("Error saving product: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="add-product-wrapper">
      <div className="home-link">
        <Link to="/">← Back to Home</Link>
      </div>

      {!success ? (
        <div className="add-product-container">
          <h2>Add New Product</h2>
          <form onSubmit={onSubmit}>
            <label>Product Key*</label>
            <input
              type="number"
              name="productKey"
              value={product.productKey}
              onChange={onInputChange}
              placeholder="Enter unique product key"
              required
              autoComplete="off"
            />
            <label>Product Name*</label>
            <input
              type="text"
              name="productName"
              value={product.productName}
              onChange={onInputChange}
              placeholder="Product name"
              autoComplete="off"
              required
            />
            <label>Retailer</label>
            <input
              type="text"
              name="retailer"
              value={product.retailer}
              onChange={onInputChange}
              placeholder="Retailer name"
              autoComplete="off"
            />
            <label>Brand</label>
            <input
              type="text"
              name="brand"
              value={product.brand}
              onChange={onInputChange}
              placeholder="Brand name"
              autoComplete="off"
            />
            <label>Model</label>
            <input
              type="text"
              name="model"
              value={product.model}
              onChange={onInputChange}
              placeholder="Model number or name"
              autoComplete="off"
            />
            <label>Product Description</label>
            <textarea
              name="productDescription"
              value={product.productDescription}
              onChange={onInputChange}
              placeholder="Short product description"
              rows="3"
              autoComplete="off"
            />
            <label>Price (₹)</label>
            <input
              type="number"
              step="0.01"
              name="price"
              value={product.price}
              onChange={onInputChange}
              placeholder="Enter product price"
              autoComplete="off"
              required
            />
            <button type="submit">Add Product</button>
          </form>
        </div>
      ) : (
        <div className="success-message-container">
          <h2 className="success-text">🎉 Product added successfully!</h2>
          <div className="home-buttons">
            <Link to="/" className="custom-btn green">Go to Home</Link>
            <button onClick={resetForm} className="custom-btn blue">Add Another Product</button>
            <Link to="/products" className="custom-btn dark">View All Products</Link>
          </div>
        </div>
      )}
    </div>
  );
};
