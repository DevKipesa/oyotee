import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiHeart, FiUser, FiMenu, FiX } from 'react-icons/fi'; 
import './nav.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Oyotee</Link>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/plantcare">Plantcare</Link></li>
        <li><Link to="/workshops">Workshops</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
      </ul>

      <div className="nav-icons">
        <Link to="/cart"><FiShoppingCart /></Link>
        <Link to="/wishlist"><FiHeart /></Link>
        <Link to="/profile"><FiUser /></Link>
      </div>
    </nav>
  );
};

export default Navbar;
