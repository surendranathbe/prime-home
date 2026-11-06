import React, { useState, useEffect, useRef } from 'react';
import {
  MapPin,
  Home as HomeIcon,
  IndianRupee,
  Search,
  ChevronDown,
  ShieldCheck,
  Handshake,
  TrendingUp,
  Scale,
  Bed,
  Bath,
  Maximize,
  ArrowUpRight,
  ArrowRight,
  Heart as HeartIcon,
  Sparkles,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useTypingEffect, bannerTypingConfig } from '../data/typingEffect';
import { featuredPropertiesData } from '../data/propertiesData';
import { propertyCategoriesData } from '../data/categoriesData';
import { servicesData } from '../data/servicesData';
import '../css/home.css';

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState('Select Location');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedBudget, setSelectedBudget] = useState('Select Budget');

  const [openDropdown, setOpenDropdown] = useState(null); // 'location' | 'type' | 'budget' | null
  const [favorites, setFavorites] = useState({});

  const filterRef = useRef(null);
  const swiperRef = useRef(null);

  // Dynamic continuous typing effect from src/data/typingEffect.js
  const typedPhrase = useTypingEffect();

  const locations = [
    'Select Location',
    'Mumbai, Maharashtra',
    'Delhi NCR',
    'Bangalore, Karnataka',
    'Hyderabad, Telangana',
    'Goa',
    'Pune, Maharashtra',
  ];

  const propertyTypes = [
    'All Types',
    'Luxury Villa',
    'Modern Apartment',
    'Penthouse',
    'Residential Plot',
    'Commercial Space',
  ];

  const budgets = [
    'Select Budget',
    '₹50 Lac - ₹1 Cr',
    '₹1 Cr - ₹3 Cr',
    '₹3 Cr - ₹5 Cr',
    '₹5 Cr - ₹10 Cr',
    '₹10 Cr+',
  ];

  // Close dropdown on clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSearch = () => {
    console.log('Search Filters:', {
      location: selectedLocation,
      type: selectedType,
      budget: selectedBudget,
    });
  };

  const renderCategoryIcon = (iconType) => {
    switch (iconType) {
      case 'villa':
        return (
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            stroke="#b88628"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />
          </svg>
        );
      case 'apartment':
        return (
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            stroke="#b88628"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="4" y="2" width="7" height="20" rx="1" />
            <rect x="13" y="7" width="7" height="15" rx="1" />
            <path d="M7 6h1M7 10h1M7 14h1M7 18h1M16 11h1M16 15h1M16 19h1" />
          </svg>
        );
      case 'plot':
        return (
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            stroke="#b88628"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        );
      case 'commercial':
        return (
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            stroke="#b88628"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="17" rx="2" />
            <path d="M9 4V2h6v2M3 10h18M8 14h2M14 14h2M8 18h2M14 18h2" />
          </svg>
        );
      default:
        return <HomeIcon size={22} color="#b88628" />;
    }
  };

  const renderServiceIcon = (iconType) => {
    switch (iconType) {
      case 'buy':
        return (
          <svg
            viewBox="0 0 24 24"
            width="30"
            height="30"
            fill="none"
            stroke="#b88628"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
          </svg>
        );
      case 'sell':
        return (
          <svg
            viewBox="0 0 24 24"
            width="30"
            height="30"
            fill="none"
            stroke="#b88628"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 4v16M3 5h7l-1.5 3L10 11H3" />
            <path d="M13 13.5l4-3 4 3V20a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6.5z" />
            <path d="M16 21v-4h2v4" />
          </svg>
        );
      case 'rent':
        return (
          <svg
            viewBox="0 0 24 24"
            width="30"
            height="30"
            fill="none"
            stroke="#b88628"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="7.5" cy="15.5" r="4.5" />
            <path d="m11 12 8-8a1.5 1.5 0 0 1 2.1 0l.9.9a1.5 1.5 0 0 1 0 2.1L19 10" />
            <path d="m15.5 7.5 2 2" />
            <path d="m13.5 9.5 2 2" />
          </svg>
        );
      case 'investment':
        return (
          <svg
            viewBox="0 0 24 24"
            width="30"
            height="30"
            fill="none"
            stroke="#b88628"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 20V14M10 20V10M15 20V6" />
            <path d="m4 12 6-6 4 3 6-6" />
            <path d="M16 3h4v4" />
          </svg>
        );
      case 'management':
        return (
          <svg
            viewBox="0 0 24 24"
            width="30"
            height="30"
            fill="none"
            stroke="#b88628"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        );
      default:
        return <HomeIcon size={30} color="#b88628" />;
    }
  };

  return (
    <>
      {/* ======================================================================
          Section 1: Hero Banner (Dark Theme with banner-1.png)
          ====================================================================== */}
      <section className="hero-banner-section">
        <div className="hero-banner-overlay" />

        <div className="hero-container">
          <div className="hero-text-block">
            {/* Eyebrow */}
            <div className="hero-eyebrow">
              <span>FIND</span>
              <span className="eyebrow-dot">•</span>
              <span>BUY</span>
              <span className="eyebrow-dot">•</span>
              <span>INVEST</span>
            </div>

            {/* Heading with continuous typing effect */}
            <h1 className="hero-heading">
              <span className="hero-heading-line">{bannerTypingConfig.prefix}</span>
              <span className="hero-heading-line typed-line">
                <span className="typed-text">{typedPhrase}</span>
                <span className="typing-cursor" aria-hidden="true">|</span>
              </span>
            </h1>

            {/* Description */}
            <p className="hero-description">
              Discover premium homes, villas, and plots in the best locations with
              trusted real estate experts.
            </p>

            {/* Search Filter Bar */}
            <div className="hero-filter-bar" ref={filterRef}>
              <div className="filter-fields-group">
                {/* Location Selector */}
                <div
                  className="filter-item"
                  onClick={() => toggleDropdown('location')}
                >
                  <div className="filter-item-icon">
                    <MapPin className="filter-svg" size={24} strokeWidth={2.2} />
                  </div>
                  <div className="filter-item-content">
                    <span className="filter-item-label">Location</span>
                    <div className="filter-item-value-row">
                      <span className="filter-item-value">
                        {selectedLocation}
                      </span>
                      <ChevronDown
                        size={15}
                        className={`filter-item-chevron ${openDropdown === 'location' ? 'open' : ''}`}
                      />
                    </div>
                  </div>

                  {openDropdown === 'location' && (
                    <div className="filter-dropdown-menu">
                      {locations.map((loc) => (
                        <button
                          key={loc}
                          type="button"
                          className={`filter-dropdown-option ${selectedLocation === loc ? 'active' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedLocation(loc);
                            setOpenDropdown(null);
                          }}
                        >
                          {loc}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="filter-divider" />

                {/* Property Type Selector */}
                <div
                  className="filter-item"
                  onClick={() => toggleDropdown('type')}
                >
                  <div className="filter-item-icon">
                    <HomeIcon className="filter-svg" size={24} strokeWidth={2.2} />
                  </div>
                  <div className="filter-item-content">
                    <span className="filter-item-label">Property Type</span>
                    <div className="filter-item-value-row">
                      <span className="filter-item-value">{selectedType}</span>
                      <ChevronDown
                        size={15}
                        className={`filter-item-chevron ${openDropdown === 'type' ? 'open' : ''}`}
                      />
                    </div>
                  </div>

                  {openDropdown === 'type' && (
                    <div className="filter-dropdown-menu">
                      {propertyTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          className={`filter-dropdown-option ${selectedType === type ? 'active' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedType(type);
                            setOpenDropdown(null);
                          }}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="filter-divider" />

                {/* Budget Selector */}
                <div
                  className="filter-item"
                  onClick={() => toggleDropdown('budget')}
                >
                  <div className="filter-item-icon">
                    <IndianRupee className="filter-svg" size={24} strokeWidth={2.2} />
                  </div>
                  <div className="filter-item-content">
                    <span className="filter-item-label">Budget</span>
                    <div className="filter-item-value-row">
                      <span className="filter-item-value">{selectedBudget}</span>
                      <ChevronDown
                        size={15}
                        className={`filter-item-chevron ${openDropdown === 'budget' ? 'open' : ''}`}
                      />
                    </div>
                  </div>

                  {openDropdown === 'budget' && (
                    <div className="filter-dropdown-menu">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          className={`filter-dropdown-option ${selectedBudget === b ? 'active' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedBudget(b);
                            setOpenDropdown(null);
                          }}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Search Button */}
              <button
                type="button"
                className="filter-search-btn"
                onClick={handleSearch}
              >
                <Search className="search-svg" size={19} strokeWidth={2.5} />
                <span>Search</span>
              </button>
            </div>

            {/* Highlights / Features Row */}
            <div className="hero-features-row">
              <div className="feature-badge">
                <div className="feature-icon-wrapper">
                  <ShieldCheck className="feature-svg" size={32} strokeWidth={2} />
                </div>
                <div className="feature-text">
                  <span className="feature-title-line">Verified</span>
                  <span className="feature-title-line">Properties</span>
                </div>
              </div>

              <div className="feature-badge">
                <div className="feature-icon-wrapper">
                  <Handshake className="feature-svg" size={32} strokeWidth={2} />
                </div>
                <div className="feature-text">
                  <span className="feature-title-line">Trusted</span>
                  <span className="feature-title-line">Advisors</span>
                </div>
              </div>

              <div className="feature-badge">
                <div className="feature-icon-wrapper">
                  <TrendingUp className="feature-svg" size={32} strokeWidth={2} />
                </div>
                <div className="feature-text">
                  <span className="feature-title-line">Best Investment</span>
                  <span className="feature-title-line">Opportunities</span>
                </div>
              </div>

              <div className="feature-badge">
                <div className="feature-icon-wrapper">
                  <Scale className="feature-svg" size={32} strokeWidth={2} />
                </div>
                <div className="feature-text">
                  <span className="feature-title-line">Legal</span>
                  <span className="feature-title-line">Assistance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          Section 2: Explore by Category (Find Properties That Fit Your Needs)
          ====================================================================== */}
      <section className="categories-section">
        {/* Top Decorative Gold-Trimmed Arc matching reference image */}
        <div className="category-top-curve">
          <svg
            viewBox="0 0 1440 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="category-curve-svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C450,28 990,28 1440,0 L1440,0 L0,0 Z"
              fill="#061613"
            />
            <path
              d="M0,0 C450,28 990,28 1440,0"
              stroke="#dfb76c"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="categories-container">
          {/* Eyebrow and Headline */}
          <div className="categories-header">
            <div className="categories-eyebrow">
              <span className="categories-eyebrow-line"></span>
              <span>EXPLORE BY CATEGORY</span>
              <span className="categories-eyebrow-line"></span>
            </div>
            <h2 className="categories-title">
              Find Properties That Fit Your Needs
            </h2>
          </div>

          {/* 4 Cards Grid */}
          <div className="categories-grid">
            {propertyCategoriesData.map((category) => (
              <div key={category.id} className="category-card">
                <img
                  src={category.image}
                  alt={category.title}
                  className="category-card-bg"
                  loading="lazy"
                />

                {/* 3D Illuminated Plot Marker for Plots */}
                {category.hasMarker && (
                  <div className="plots-marker-badge">
                    <div className="plots-boundary-box">
                      <div className="plots-pin-marker">
                        <MapPin size={16} fill="#ffffff" color="#0b241e" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Dark Emerald Bar */}
                <div className="category-card-bar">
                  <div className="category-card-left">
                    <div className="category-card-icon-circle">
                      {renderCategoryIcon(category.iconType)}
                    </div>
                    <span className="category-card-name">{category.title}</span>
                  </div>

                  <div className="category-card-arrow">
                    <ArrowRight size={20} strokeWidth={2.4} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================
          Section 3: White Background with Sliding Properties Carousel
          ====================================================================== */}
      <section className="white-section">
        <div className="white-section-container">
          {/* Section Header Centered with View All Button where arrows were */}
          <div className="white-section-header-wrapper">
            <div className="white-section-header-center">
              <div className="white-section-tag">
                <Sparkles size={16} className="tag-sparkle" />
                <span>EXCLUSIVE SELECTION</span>
              </div>
              <h2 className="white-section-title">
                Featured Luxury Properties
              </h2>
              <p className="white-section-subtitle">
                Explore handpicked architectural marvels, modern penthouses, and
                seafront villas verified by our real estate specialists.
              </p>
            </div>

            {/* Button placed where the arrows used to be */}
            <div className="white-section-header-action">
              <button type="button" className="btn-explore-all">
                <span>View All Properties</span>
                <ArrowUpRight size={17} strokeWidth={2.2} />
              </button>
            </div>
          </div>

          {/* Properties Sliding Carousel */}
          <div className="slider-wrapper">
            <Swiper
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation, Autoplay, Pagination]}
              spaceBetween={18}
              slidesPerView={1}
              loop={true}
              speed={700}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              breakpoints={{
                480: {
                  slidesPerView: 1.3,
                  spaceBetween: 14,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 14,
                },
                960: {
                  slidesPerView: 3,
                  spaceBetween: 16,
                },
                1120: {
                  slidesPerView: 4,
                  spaceBetween: 18,
                },
              }}
              className="properties-swiper"
            >
              {featuredPropertiesData.map((item) => (
                <SwiperSlide key={item.id} className="property-swiper-slide">
                  <div className="property-card">
                    {/* Image Container with Badges */}
                    <div className="property-img-wrapper">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="property-img"
                        loading="lazy"
                      />
                      <div className="property-tag-badge">{item.tag}</div>
                      <button
                        type="button"
                        className={`property-fav-btn ${favorites[item.id] ? 'favorited' : ''}`}
                        onClick={() => toggleFavorite(item.id)}
                        aria-label="Save Property"
                      >
                        <HeartIcon
                          size={18}
                          fill={favorites[item.id] ? '#e11d48' : 'none'}
                          stroke={favorites[item.id] ? '#e11d48' : '#ffffff'}
                        />
                      </button>
                      <div className="property-price-chip">{item.price}</div>
                    </div>

                    {/* Card Content */}
                    <div className="property-card-body">
                      <span className="property-card-category">{item.category}</span>
                      <h3 className="property-card-title">{item.title}</h3>

                      <div className="property-card-location">
                        <MapPin size={16} className="loc-pin" />
                        <span>{item.location}</span>
                      </div>

                      <div className="property-card-divider" />

                      {/* Amenities / Specs */}
                      <div className="property-specs-row">
                        <div className="spec-item">
                          <Bed size={16} className="spec-icon" />
                          <span>{item.beds} Beds</span>
                        </div>
                        <div className="spec-item">
                          <Bath size={16} className="spec-icon" />
                          <span>{item.baths} Baths</span>
                        </div>
                        <div className="spec-item">
                          <Maximize size={15} className="spec-icon" />
                          <span>{item.area}</span>
                        </div>
                      </div>

                      {/* Card Action */}
                      <button type="button" className="property-view-btn">
                        <span>View Details</span>
                        <ArrowUpRight size={17} className="btn-arrow" />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ======================================================================
          Section 4: Comprehensive Real Estate Solutions (Our Services)
          ====================================================================== */}
      <section className="services-section">
        <div className="services-container">
          {/* Left Intro Column */}
          <div className="services-intro-col">
            <span className="services-eyebrow">OUR SERVICES</span>
            <h2 className="services-title">
              Comprehensive Real Estate Solutions
            </h2>
            <p className="services-description">
              End-to-end services for all your property needs with expert guidance and complete support.
            </p>
            <button type="button" className="btn-explore-services">
              <span>Explore Services</span>
              <ArrowRight size={16} strokeWidth={2.4} className="services-btn-arrow" />
            </button>
          </div>

          {/* Right Column: 5 Service Cards */}
          <div className="services-cards-grid">
            {servicesData.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon-wrapper">
                  {renderServiceIcon(service.iconType)}
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
