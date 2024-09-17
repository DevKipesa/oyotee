import React from 'react';
import { FiShoppingCart, FiHeart, FiUser } from 'react-icons/fi'; // Icons from react-icons

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo on the top left */}
      <div className="logo">
        <a href="/">Oyotee</a>
      </div>

      {/* Centered links */}
      <ul className="nav-links">
        <li><a href="/">Shop</a></li>
        <li><a href="/">Plantcare</a></li>
        <li><a href="/">Workshops</a></li>
        <li><a href="/">Blogs</a></li>
      </ul>

      {/* Icons on the top right */}
      <div className="nav-icons">
        <a href="/cart"><FiShoppingCart /></a>
        <a href="/wishlist"><FiHeart /></a>
        <a href="/profile"><FiUser /></a>
      </div>
    </nav>
  );
};

export default Navbar;
