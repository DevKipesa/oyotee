import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiHeart, FiUser } from 'react-icons/fi'; // Icons from react-icons
import './nav.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Oyotee</Link>
      </div>

      <ul className="nav-links">
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
