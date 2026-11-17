import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  MapPin,
  Heart,
  Share2,
  CheckCircle,
  Building,
  Calendar,
  Compass,
  Layers,
  ArrowLeft,
  Phone,
  MessageSquare,
  ShieldCheck,
  Check,
  User,
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import PropertyGallery from '../components/PropertyGallery';
import PropertyCard from '../components/PropertyCard';
import ContactForm from '../components/ContactForm';
import EmptyState from '../components/EmptyState';
import { allPropertiesData } from '../data/propertiesData';
import { useWishlist } from '../hooks/useWishlist';
import '../css/common.css';
import '../css/propertyDetails.css';

export default function PropertyDetails() {
  const { id } = useParams();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const [copied, setCopied] = useState(false);

  // Find property by ID
  const numericId = parseInt(id, 10);
  const property = allPropertiesData.find((p) => p.id === numericId);

  if (!property) {
    return (
      <div className="luxury-page-wrapper property-details-container">
        <div className="luxury-container" style={{ padding: '120px 20px 80px' }}>
          <EmptyState
            title="Property Not Found"
            description="The requested luxury residence or estate may have been sold or is no longer listed in our active portfolio."
            actionLabel="Browse Available Properties"
            onAction={() => window.location.href = '/properties'}
          />
        </div>
      </div>
    );
  }

  const wishlisted = isWishlisted(property.id);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Find 3 similar properties
  const similarProperties = allPropertiesData
    .filter((p) => p.id !== property.id && p.category === property.category)
    .slice(0, 3);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Properties', path: '/properties' },
    { label: property.title, path: `/properties/${property.id}` },
  ];

  return (
    <div className="luxury-page-wrapper property-details-container">
      {/* ======================================================================
          Header Section
          ====================================================================== */}
      <section className="property-details-header-section">
        <div className="luxury-container">
          <Breadcrumb items={breadcrumbItems} />

          <div className="details-header-row">
            {/* Title & Badges */}
            <div className="details-title-col">
              <div className="details-badges-row">
                <span className="property-badge-tag">
                  {property.displayCategory || property.category}
                </span>
                <span className="property-badge-status">{property.status}</span>
                {property.tag && (
                  <span className="property-badge-tag">{property.tag}</span>
                )}
              </div>

              <h1 className="details-property-title">{property.title}</h1>

              <div className="details-property-location">
                <MapPin size={17} color="#c5a059" />
                <span>{property.location}</span>
              </div>
            </div>

            {/* Price & Actions */}
            <div className="details-price-col">
              <div className="details-price-value">{property.price}</div>
              <div className="details-header-actions">
                <button
                  type="button"
                  className={`btn-header-action ${wishlisted ? 'wishlisted' : ''}`}
                  onClick={() => toggleWishlist(property.id)}
                >
                  <Heart
                    size={16}
                    fill={wishlisted ? '#dfb76c' : 'none'}
                    color={wishlisted ? '#dfb76c' : 'currentColor'}
                  />
                  <span>{wishlisted ? 'Saved' : 'Save Property'}</span>
                </button>

                <button
                  type="button"
                  className="btn-header-action"
                  onClick={handleShare}
                >
                  {copied ? <Check size={16} /> : <Share2 size={16} />}
                  <span>{copied ? 'Link Copied!' : 'Share'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          Main Body Section: Two Columns (Main 8 cols, Sticky Sidebar 4 cols)
          ====================================================================== */}
      <section className="property-details-body-section">
        <div className="luxury-container">
          <div className="details-layout-grid">
            {/* Main Content Column */}
            <div className="details-main-content">
              {/* 1. Image Gallery */}
              <div className="details-section-card" style={{ padding: '16px' }}>
                <PropertyGallery
                  images={property.gallery || [property.image]}
                  title={property.title}
                />
              </div>

              {/* 2. Property Overview Grid */}
              <div className="details-section-card">
                <h2 className="details-card-heading">Property Overview</h2>
                <div className="overview-specs-grid">
                  <div className="overview-spec-box">
                    <span className="spec-box-label">Bedrooms</span>
                    <span className="spec-box-value">
                      {property.beds ?? property.bedrooms ?? 'Custom'} Beds
                    </span>
                  </div>
                  <div className="overview-spec-box">
                    <span className="spec-box-label">Bathrooms</span>
                    <span className="spec-box-value">
                      {property.baths ?? property.bathrooms ?? 'Custom'} Baths
                    </span>
                  </div>
                  <div className="overview-spec-box">
                    <span className="spec-box-label">Built-Up Area</span>
                    <span className="spec-box-value">{property.area}</span>
                  </div>
                  <div className="overview-spec-box">
                    <span className="spec-box-label">Property Type</span>
                    <span className="spec-box-value">{property.category}</span>
                  </div>
                  <div className="overview-spec-box">
                    <span className="spec-box-label">Status</span>
                    <span className="spec-box-value">{property.status}</span>
                  </div>
                  <div className="overview-spec-box">
                    <span className="spec-box-label">Furnishing</span>
                    <span className="spec-box-value">
                      {property.overview?.furnishing || 'Fully Furnished'}
                    </span>
                  </div>
                  <div className="overview-spec-box">
                    <span className="spec-box-label">Facing</span>
                    <span className="spec-box-value">
                      {property.overview?.facing || 'East Facing'}
                    </span>
                  </div>
                  <div className="overview-spec-box">
                    <span className="spec-box-label">Possession</span>
                    <span className="spec-box-value">
                      {property.overview?.possession || 'Immediate'}
                    </span>
                  </div>
                </div>
              </div>

              {/* 3. Description & Highlights */}
              <div className="details-section-card">
                <h2 className="details-card-heading">About This Residence</h2>
                <p className="details-description-text">
                  {property.description}
                </p>
                <p className="details-description-text">
                  Crafted for buyers who accept no compromises, this architectural landmark embodies premier craftsmanship, expansive floor-to-ceiling glass facades, private landscaped terraces, and world-class smart automation. Every square foot is engineered for privacy, tranquility, and lasting capital security.
                </p>
              </div>

              {/* 4. Amenities */}
              <div className="details-section-card">
                <h2 className="details-card-heading">Premium Amenities</h2>
                <div className="amenities-badges-grid">
                  {(
                    property.amenities || [
                      'Private Swimming Pool',
                      'Landscaped Gardens',
                      'Clubhouse & Spa',
                      '24/7 Security & CCTV',
                      'Covered Car Parking',
                      'Fitness Gymnasium',
                      'Smart Home Automation',
                      '100% Power Backup',
                    ]
                  ).map((amenity, idx) => (
                    <div key={idx} className="amenity-badge-item">
                      <ShieldCheck size={18} className="amenity-icon-gold" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Location & Landmarks Preview */}
              <div className="details-section-card">
                <h2 className="details-card-heading">Location & Neighborhood</h2>
                <p className="details-description-text">
                  Situated in {property.location}, offering seamless connectivity to top financial districts, elite international schools, five-star hospitality corridors, and express highways.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', marginTop: '16px' }}>
                  <div className="overview-spec-box">
                    <span className="spec-box-label">International Airport</span>
                    <span className="spec-box-value">25 - 30 Mins</span>
                  </div>
                  <div className="overview-spec-box">
                    <span className="spec-box-label">Financial District / CBD</span>
                    <span className="spec-box-value">10 - 15 Mins</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar (Contact & Schedule Visit Form) */}
            <aside className="details-sidebar-sticky">
              {/* Senior Relationship Manager Card */}
              <div className="sidebar-advisor-card">
                <div className="advisor-avatar-user-wrap">
                  <User size={26} color="#dfb76c" />
                </div>
                <div className="advisor-info">
                  <span className="advisor-name">Ananya Sharma</span>
                  <span className="advisor-role">Senior Private Client Advisor</span>
                  <span className="advisor-phone">+91 1234567891</span>
                </div>
              </div>

              {/* Interactive Schedule Visit / Enquiry Form */}
              <ContactForm
                initialEnquiryType="Schedule a Site Visit"
                initialPropertyTitle={property.title}
              />
            </aside>
          </div>

          {/* ======================================================================
              Similar Properties Section
              ====================================================================== */}
          {similarProperties.length > 0 && (
            <div className="details-similar-section">
              <div className="section-header-centered" style={{ marginBottom: '36px' }}>
                <span className="section-gold-eyebrow">CURATED RECOMMENDATIONS</span>
                <h2 className="section-title-cinzel">Similar Luxury Estates</h2>
              </div>
              <div className="similar-properties-grid">
                {similarProperties.map((p) => (
                  <PropertyCard key={p.id} property={p} viewMode="grid" />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

