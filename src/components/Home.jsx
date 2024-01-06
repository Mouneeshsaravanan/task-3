import React from 'react';
import Navbar from './Navbar';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Navbar /> 
      <div className="hero-section">
        <h1>Welcome to Our E-commerce Wonderland</h1>
        <p>Discover a World of High-Quality Products at Unbeatable Prices</p>
        <button className="shop-now-btn">Shop Now</button>
      </div>
      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <div className="product-card">
            <img src="src/assets/headphone2.png" alt="headphone" />
            <p>Headphone</p>
            <p>$5000</p>
          </div>
          <div className="product-card">
            <img src="src/assets/air.jpg" alt="Product 2" />
            <p>Airpods</p>
            <p>$1000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;