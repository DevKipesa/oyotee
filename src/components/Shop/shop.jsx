import React, { useState } from 'react';
import productsData from './products'; // Assuming you have a products file
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons
import Navbar from '../Navbar/nav'; // Assuming Navbar is in this directory
import Sidebar from '../Sidebar/side';
import './shop.css'; // Importing the shop CSS

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('Relevance');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [priceDropdownOpen, setPriceDropdownOpen] = useState(false);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleSortChange = (e) => setSortOption(e.target.value);
  const handleProductClick = (product) => setSelectedProduct(product);
  const togglePriceDropdown = () => setPriceDropdownOpen(!priceDropdownOpen);

  // Filter and sort products based on search term and sort option
  const filteredProducts = productsData
    .filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
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
      {/* Navbar component */}
      <Navbar />
      <Sidebar />

      {/* Main shop content (right below the navbar) */}
      <div className="shopy">
        <div className="content-wrapper">
          {/* Search bar */}
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <FaSearch className="search-icon" />
          </div>

          {/* Sort by section */}
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

          {/* Product list */}
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
                <p>Price: ${product.price}</p>
                <button>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>

        {/* Product details on the right side when a product is clicked */}
        {selectedProduct && (
          <div className="product-details show">
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
