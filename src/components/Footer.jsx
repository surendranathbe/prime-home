import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import logoImg from '../assets/logo-1.png';
import { footerData } from '../data/propertiesData';

export default function Footer() {
  const quickLinksNav = [
    { label: 'Home', path: '/' },
    { label: 'Properties', path: '/properties' },
    { label: 'Projects', path: '/projects' },
    { label: 'Services', path: '/services' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const servicesNav = [
    { label: 'Buy Property', path: '/services' },
    { label: 'Sell Property', path: '/services' },
    { label: 'Rent & Lease', path: '/services' },
    { label: 'Investment Consulting', path: '/services' },
    { label: 'Property Management', path: '/services' },
    { label: 'Legal Assistance', path: '/services' },
  ];

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Footer Main Columns Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand Info & Socials */}
          <div className="footer-col footer-col-brand">
            <Link to="/" className="footer-logo-row" title="Prime Estates">
              <div className="brand-logo-img-wrapper" style={{ height: '42px', flexShrink: 0 }}>
                <img
                  src={logoImg}
                  alt="Prime Estates Logo"
                  className="brand-logo-img"
                  style={{ height: '42px', width: 'auto', objectFit: 'contain', display: 'block' }}
                />
              </div>
              <div className="footer-logo-text">
                <span className="footer-brand-name">Prime Estates</span>
                <span className="footer-brand-tagline">— REAL ESTATE —</span>
              </div>
            </Link>

            <p className="footer-brand-desc">
              {footerData.brand.description}
            </p>

            <div className="footer-social-row">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="footer-social-btn"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="footer-social-btn"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="footer-social-btn"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon
                    points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="footer-social-btn"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              {quickLinksNav.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-links-list">
              {servicesNav.map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="footer-col footer-col-contact">
            <h4 className="footer-col-title">Contact Information</h4>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <MapPin size={16} className="footer-contact-icon" />
                <span>{footerData.contact.address}</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={16} className="footer-contact-icon" />
                <a href={`tel:${footerData.contact.phone}`} className="footer-contact-link">
                  {footerData.contact.phone}
                </a>
              </div>
              <div className="footer-contact-item">
                <Mail size={16} className="footer-contact-icon" />
                <a href={`mailto:${footerData.contact.email}`} className="footer-contact-link">
                  {footerData.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 5: Mini Styled Map Preview */}
          <div className="footer-col footer-col-map">
            <Link to="/contact" className="footer-map-card" title="View our office on Google Maps">
              <svg
                viewBox="0 0 200 120"
                className="footer-map-svg"
                preserveAspectRatio="none"
              >
                <rect width="200" height="120" fill="#f4efe6" />
                <path
                  d="M 10 10 Q 30 5 45 25 T 30 55 T 10 40 Z"
                  fill="#e2eddc"
                />
                <path
                  d="M 140 70 Q 170 65 190 85 T 160 115 T 130 95 Z"
                  fill="#e2eddc"
                />
                <path
                  d="M 120 10 Q 150 15 180 5 T 190 35 T 140 30 Z"
                  fill="#e2eddc"
                />
                <path
                  d="M 0 35 L 200 45"
                  stroke="#ffffff"
                  strokeWidth="6"
                />
                <path
                  d="M 0 35 L 200 45"
                  stroke="#e6decb"
                  strokeWidth="3"
                />
                <path
                  d="M 60 0 L 80 120"
                  stroke="#ffffff"
                  strokeWidth="7"
                />
                <path
                  d="M 60 0 L 80 120"
                  stroke="#f6c27e"
                  strokeWidth="3.5"
                />
                <path
                  d="M 0 85 Q 90 75 200 90"
                  stroke="#ffffff"
                  strokeWidth="6"
                />
                <path
                  d="M 0 85 Q 90 75 200 90"
                  stroke="#e6decb"
                  strokeWidth="3"
                />
                <path
                  d="M 145 0 L 130 120"
                  stroke="#ffffff"
                  strokeWidth="5"
                />
                <path
                  d="M 145 0 L 130 120"
                  stroke="#e6decb"
                  strokeWidth="2.5"
                />
                <path
                  d="M 40 40 Q 110 55 170 30"
                  stroke="#ffffff"
                  strokeWidth="4"
                />
                <path
                  d="M 40 40 Q 110 55 170 30"
                  stroke="#e6decb"
                  strokeWidth="2"
                />
              </svg>
              <div className="footer-map-pin">
                <MapPin size={22} fill="#ef4444" color="#dc2626" />
                <span className="footer-map-pulse" />
              </div>
            </Link>
          </div>
        </div>

        {/* Footer Copyright & Legal Bottom Bar */}
        <div className="footer-bottom-bar">
          <span className="footer-copyright">
            © 2026 Prime Estates. All Rights Reserved.
          </span>
          <div className="footer-legal-links">
            {footerData.legal.map((item, idx) => (
              <React.Fragment key={item.label}>
                <a href={item.href} className="footer-legal-link">
                  {item.label}
                </a>
                {idx < footerData.legal.length - 1 && (
                  <span className="legal-divider">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

