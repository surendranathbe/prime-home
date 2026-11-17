import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Heart, Home as HomeIcon, Menu, X } from 'lucide-react';
import logoImg from '../assets/logo-1.png';
import { useWishlist } from '../hooks/useWishlist';
import '../css/navbar.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { wishlistCount } = useWishlist();
  const navigate = useNavigate();

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'properties', label: 'Properties', path: '/properties' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'services', label: 'Services', path: '/services' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleWishlistClick = () => {
    navigate('/properties?wishlist=true');
    setIsMobileMenuOpen(false);
  };

  const handleListPropertyClick = () => {
    navigate('/contact#list-property');
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-inner">
        {/* Left Side: Logo */}
        <Link to="/" className="navbar-brand" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="brand-logo-img-wrapper">
            <img
              src={logoImg}
              alt="Prime Estates Logo"
              className="brand-logo-img"
            />
          </div>

          <div className="brand-text-wrapper">
            <span className="brand-title">Prime Estates</span>
            <div className="brand-subtitle-container">
              <span className="brand-subtitle-line" />
              <span className="brand-subtitle">Real Estate</span>
              <span className="brand-subtitle-line" />
            </div>
          </div>
        </Link>

        {/* Center: Navigation Tabs */}
        <nav aria-label="Main Navigation">
          <ul className="navbar-nav">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `nav-link-btn ${isActive ? 'active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side: Actions & List Your Property */}
        <div className="navbar-actions">
          {/* Wishlist / Favorite Icon with Badge */}
          <button
            type="button"
            className="nav-action-icon-btn"
            title="Saved Properties"
            aria-label="Saved Properties"
            onClick={handleWishlistClick}
          >
            <Heart size={19} strokeWidth={2} />
            {wishlistCount > 0 && (
              <span className="navbar-wishlist-badge" aria-label={`${wishlistCount} saved properties`}>
                {wishlistCount}
              </span>
            )}
          </button>

          {/* List Your Property Button */}
          <button
            type="button"
            className="btn-enquiry"
            onClick={handleListPropertyClick}
          >
            <HomeIcon size={15} strokeWidth={2.2} className="btn-icon" />
            <span>List Your Property</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            className="mobile-toggle-btn"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `mobile-nav-link ${isActive ? 'active' : ''}`
                  }
                  onClick={handleMobileNavClick}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mobile-nav-actions">
            <button
              type="button"
              className="btn-enquiry"
              onClick={handleListPropertyClick}
            >
              <HomeIcon size={15} strokeWidth={2.2} className="btn-icon" />
              <span>List Your Property</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
