import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb({ items = [] }) {
  if (!items || items.length === 0) return null;

  // Filter out any initial 'Home' if already passed in items to prevent "Home > Home"
  const cleanItems = items.filter(
    (item, index) => !(index === 0 && item.label?.toLowerCase() === 'home')
  );

  return (
    <nav aria-label="Breadcrumb" className="luxury-breadcrumb luxury-breadcrumb-nav">
      <ol className="breadcrumb-list luxury-breadcrumb-list">
        <li className="breadcrumb-item">
          <Link to="/" className="breadcrumb-link home-link" title="Prime Estates Home">
            <Home size={13} className="breadcrumb-home-icon" />
            <span>Home</span>
          </Link>
        </li>

        {cleanItems.map((item, index) => {
          const isLast = index === cleanItems.length - 1;
          return (
            <li key={item.label || index} className="breadcrumb-item">
              <ChevronRight size={12} className="breadcrumb-separator" aria-hidden="true" />
              {isLast || !item.path ? (
                <span className="breadcrumb-current" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.path} className="breadcrumb-link">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
