import React, { useState } from 'react';
import { Heart, Send, Menu, X } from 'lucide-react';
import logoImg from '../assets/logo-1.png';
import '../css/navbar.css';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'properties', label: 'Properties' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleTabClick = (label) => {
    setActiveTab(label);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-inner">
        {/* Left Side: Logo (House image from logo-1.png followed by text) */}
        <div className="navbar-brand" onClick={() => handleTabClick('Home')}>
          <div className="brand-logo-img-wrapper">
            <img
              src={logoImg}
              alt="Prime Real State Logo"
              className="brand-logo-img"
            />
          </div>

          <div className="brand-text-wrapper">
            <span className="brand-title">Prime Real State</span>
            <div className="brand-subtitle-container">
              <span className="brand-subtitle-line"></span>
              <span className="brand-subtitle">Real Estate</span>
              <span className="brand-subtitle-line"></span>
            </div>
          </div>
        </div>

        {/* Center: Navigation Tabs */}
        <nav aria-label="Main Navigation">
          <ul className="navbar-nav">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  type="button"
                  className={`nav-link-btn ${activeTab === item.label ? 'active' : ''}`}
                  onClick={() => handleTabClick(item.label)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side: Actions & Enquiry */}
        <div className="navbar-actions">
          {/* Wishlist / Favorite Icon */}
          <button
            type="button"
            className="nav-action-icon-btn"
            title="Saved Properties"
            aria-label="Saved Properties"
          >
            <Heart size={19} strokeWidth={2} />
          </button>

          {/* Enquiry Us Button */}
          <button
            type="button"
            className="btn-enquiry"
            onClick={() => handleTabClick('Contact')}
          >
            <Send size={15} strokeWidth={2.2} className="btn-icon" />
            <span>Enquiry Us</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            className="mobile-toggle-btn"
            aria-label="Toggle Navigation Menu"
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
                <button
                  type="button"
                  className={`mobile-nav-link ${activeTab === item.label ? 'active' : ''}`}
                  onClick={() => handleTabClick(item.label)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mobile-nav-actions">
            <button
              type="button"
              className="btn-enquiry"
              onClick={() => handleTabClick('Contact')}
            >
              <Send size={15} strokeWidth={2.2} className="btn-icon" />
              <span>Enquiry Us</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
