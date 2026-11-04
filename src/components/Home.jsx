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
  Heart as HeartIcon,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useTypingEffect, bannerTypingConfig } from '../data/typingEffect';
import { featuredPropertiesData } from '../data/propertiesData';
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
          Section 2: White Background with Sliding Properties Carousel
          ====================================================================== */}
      <section className="white-section">
        <div className="white-section-container">
          {/* Section Header with Left/Right Arrows */}
          <div className="white-section-header-row">
            <div className="white-section-header-left">
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

            {/* Sliding Arrow Navigation Buttons */}
            <div className="slider-nav-controls">
              <button
                type="button"
                className="slider-arrow-btn prev"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous Slide"
              >
                <ChevronLeft size={22} strokeWidth={2.2} />
              </button>
              <button
                type="button"
                className="slider-arrow-btn next"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next Slide"
              >
                <ChevronRight size={22} strokeWidth={2.2} />
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
              spaceBetween={28}
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
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 28,
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

          {/* Bottom Call To Action */}
          <div className="white-section-footer">
            <button type="button" className="btn-explore-all">
              <span>View All Properties</span>
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
