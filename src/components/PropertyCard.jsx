import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Maximize, MapPin, Heart, ArrowUpRight } from 'lucide-react';
import { useWishlist } from '../hooks/useWishlist';

export default function PropertyCard({ property, viewMode = 'grid' }) {
  const { isWishlisted, toggleWishlist } = useWishlist();
  const wishlisted = isWishlisted(property.id);

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(property.id);
  };

  return (
    <article
      className={`luxury-property-card ${viewMode === 'list' ? 'property-card-list-mode' : ''}`}
    >
      {/* Media Wrap */}
      <div className="property-card-media">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          className="property-card-img"
        />
        <div className="property-card-gradient" />

        {/* Top Badges */}
        <div className="property-card-top-row">
          <div className="property-tag-group">
            {property.tag && (
              <span className="property-badge-tag">{property.tag}</span>
            )}
            {property.status && (
              <span className="property-badge-status">{property.status}</span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            type="button"
            className={`property-wishlist-btn ${wishlisted ? 'active' : ''}`}
            onClick={handleWishlistClick}
            aria-label={wishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
            title={wishlisted ? 'Remove from Wishlist' : 'Save Property'}
          >
            <Heart
              size={18}
              strokeWidth={2.2}
              fill={wishlisted ? '#dfb76c' : 'none'}
              color={wishlisted ? '#dfb76c' : '#ffffff'}
            />
          </button>
        </div>

        {/* Floating Price Tag */}
        <div className="property-card-price-badge">
          <span className="property-price-text">{property.price}</span>
        </div>
      </div>

      {/* Content Body */}
      <div className="property-card-content">
        <div className="property-header-group">
          <span className="property-card-category">
            {property.displayCategory || property.category}
          </span>
          <h3 className="property-card-title">
            <Link to={`/properties/${property.id}`} className="property-title-link">
              {property.title}
            </Link>
          </h3>
          <div className="property-card-location">
            <MapPin size={14} className="location-pin-icon" />
            <span>{property.location}</span>
          </div>
        </div>

        {/* Specifications Row */}
        <div className="property-card-specs">
          {property.beds > 0 && (
            <div className="property-spec-item" title={`${property.beds} Bedrooms`}>
              <Bed size={15} className="spec-icon" />
              <span>{property.beds} Beds</span>
            </div>
          )}
          {property.baths > 0 && (
            <div className="property-spec-item" title={`${property.baths} Bathrooms`}>
              <Bath size={15} className="spec-icon" />
              <span>{property.baths} Baths</span>
            </div>
          )}
          <div className="property-spec-item" title={`Area: ${property.area}`}>
            <Maximize size={14} className="spec-icon" />
            <span>{property.area}</span>
          </div>
        </div>

        {/* Card Footer / Action */}
        <div className="property-card-footer">
          <Link
            to={`/properties/${property.id}`}
            className="property-view-details-btn"
          >
            <span>View Details</span>
            <ArrowUpRight size={15} className="view-details-arrow" />
          </Link>
        </div>
      </div>
    </article>
  );
}

