import React, { useState } from "react";
import './side.css';

const Sidebar = () => {
  const [showOthers, setShowOthers] = useState(false);
  const [price, setPrice] = useState({ min: '', max: '' });

  const toggleDropdown = () => setShowOthers(!showOthers);

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPrice({ ...price, [name]: value });
  };

  return (
    <div className="sidebar">
        <h2 className="filter-title">Filter</h2>
      <div className="filter-section">
        <h3>Categories</h3>
        <div className="category-item">
          <input type="checkbox" />
          <label>Gardening</label>
        </div>
        <div className="category-item">
          <input type="checkbox" />
          <label>Plants</label>
        </div>
        <div className="category-item">
          <input type="checkbox" />
          <label>Seeds</label>
        </div>
        <div className="category-item">
          <input type="checkbox" />
          <label>Bulbs</label>
        </div>
        <div className="category-item">
          <input type="checkbox" />
          <label>Planters</label>
        </div>
        <div className="dropdown">
          <div className="category-item" onClick={toggleDropdown}>
            <input type="checkbox" />
            <label>Others</label>
            <span className="dropdown-icon">{showOthers ? "▲" : "▼"}</span>
          </div>
          {showOthers && (
            <div className="dropdown-content">
              <div className="category-item">
                <input type="checkbox" />
                <label>Fertilizers</label>
              </div>
              <div className="category-item">
                <input type="checkbox" />
                <label>Tools</label>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="filter-section">
        <h3>Price Range</h3>
        <div className="price-range">
          <input
            type="number"
            placeholder="Min"
            name="min"
            value={price.min}
            onChange={handlePriceChange}
          />
          <input
            type="number"
            placeholder="Max"
            name="max"
            value={price.max}
            onChange={handlePriceChange}
          />
          <button className="set-price-btn">Set Price</button>
        </div>
      </div>
      <div className="filter-section">
        <h3>Rating</h3>
        <div className="rating-item">
          <input type="checkbox" />
          <span>⭐⭐⭐⭐⭐ above</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
