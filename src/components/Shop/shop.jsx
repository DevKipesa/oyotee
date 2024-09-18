import React, { useState } from 'react';
import productsData from './products'; 
import { FaSearch } from 'react-icons/fa';
import Navbar from '../Navbar/nav'; 
import Sidebar from '../Sidebar/side';
import './shop.css'; 

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('Relevance');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [priceDropdownOpen, setPriceDropdownOpen] = useState(false);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleSortChange = (e) => setSortOption(e.target.value);
  const handleProductClick = (product) => setSelectedProduct(product);
  const togglePriceDropdown = () => setPriceDropdownOpen(!priceDropdownOpen);

  
  const handleCloseProductDetails = () => setSelectedProduct(null);

  const filteredProducts = productsData
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortOption) {
        case 'Relevance':
          return 0; // Default sorting
        case 'Popular':
          return b.rating - a.rating;
        case 'Most New':
          return new Date(b.date) - new Date(a.date);
        case 'Price':
          return a.price - b.price;
        default:
          return 0;
      }
    });

  return (
    <div className="shop-container">
      <Navbar />
      <Sidebar />
      <div className="shopy">
        <div className="content-wrapper">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <FaSearch className="search-icon" />
          </div>
          {searchTerm && (
            <div className="search-results-message">
              Search results for "{searchTerm}"
            </div>
          )}

          <div className="sort-wrapper">
            <span>Sort</span>
            <div className="sort-buttons">
              {['Relevance', 'Popular', 'Most New'].map((option) => (
                <button
                  key={option}
                  className={`sort-button ${sortOption === option ? 'active' : ''}`}
                  onClick={() => setSortOption(option)}
                >
                  {option}
                </button>
              ))}
              <div className="price-sort-wrapper">
                <button
                  className={`sort-button ${sortOption === 'Price' ? 'active' : ''}`}
                  onClick={togglePriceDropdown}
                >
                  Price
                </button>
                {priceDropdownOpen && (
                  <select
                    className="price-dropdown"
                    value={sortOption}
                    onChange={handleSortChange}
                  >
                    <option value="Price">Amount</option>
                  </select>
                )}
              </div>
            </div>
          </div>
          <div className="product-list">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="product-card"
                onClick={() => handleProductClick(product)}
              >
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <p>Rating: {product.rating}</p>
                <p className="price">Price: ${product.price}</p>
                <button className="add">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
        {selectedProduct && (
          <div className="product-details show">
            <button className="close-button" onClick={handleCloseProductDetails}>
              X
            </button>
            <h2>{selectedProduct.title}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.title} />
            <p>Rating: {selectedProduct.rating}</p>
            <p>Price: ${selectedProduct.price}</p>
            <p>{selectedProduct.description}</p>
            <button>Add to Cart</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
