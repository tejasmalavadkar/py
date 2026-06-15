import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-container">
        {/* Brand Logo & Name */}
        <Link to="/" className="navbar-brand" onClick={() => window.scrollTo(0, 0)}>
          <img src="/src/assets/logo.svg" alt="Bloom Haven Logo" className="navbar-logo" />
          <span className="navbar-title">Bloom Haven</span>
        </Link>

        {/* Desktop Menu Links */}
        <ul className="navbar-links">
          <li><Link to="/" className="navbar-link" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
          <li><a href="/#categories" className="navbar-link">Categories</a></li>
          <li><a href="/#bestsellers" className="navbar-link">Shop</a></li>
          <li><Link to="/about" className="navbar-link">About Us</Link></li>
          <li><a href="/#testimonials" className="navbar-link">Reviews</a></li>
          <li><a href="/#instagram" className="navbar-link">Gallery</a></li>
        </ul>

        {/* Action Buttons */}
        <div className="navbar-actions">
          {/* Search Button */}
          <button className="navbar-btn" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          {/* Cart Button */}
          <button className="navbar-btn" aria-label="Shopping Cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span className="cart-count">2</span>
          </button>

          {/* Mobile Menu Toggle Toggle */}
          <button className="navbar-btn menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <ul className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>Home</Link></li>
        <li><a href="/#categories" onClick={() => setIsOpen(false)}>Categories</a></li>
        <li><a href="/#bestsellers" onClick={() => setIsOpen(false)}>Shop</a></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
        <li><a href="/#testimonials" onClick={() => setIsOpen(false)}>Reviews</a></li>
        <li><a href="/#instagram" onClick={() => setIsOpen(false)}>Gallery</a></li>
      </ul>
    </nav>
  );
}
