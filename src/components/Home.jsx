import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  Star,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  Calendar,
  Check,
  Award,
  User,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useTypingEffect, bannerTypingConfig } from '../data/typingEffect';
import {
  featuredPropertiesData,
  projectsBannerData,
  statsData,
  testimonialsData,
  insightsIntroData,
  insightsData,
} from '../data/propertiesData';
import { propertyCategoriesData } from '../data/categoriesData';
import { servicesData } from '../data/servicesData';
import '../css/home.css';

export default function Home() {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState('Select Location');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedBudget, setSelectedBudget] = useState('Select Budget');

  const [openDropdown, setOpenDropdown] = useState(null); // 'location' | 'type' | 'budget' | null
  const [favorites, setFavorites] = useState({});
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('');

  const filterRef = useRef(null);
  const swiperRef = useRef(null);
  const insightsSwiperRef = useRef(null);

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
    const params = new URLSearchParams();
    if (selectedLocation && selectedLocation !== 'Select Location') {
      params.set('location', selectedLocation);
    }
    if (selectedType && selectedType !== 'All Types') {
      params.set('category', selectedType);
    }
    navigate(`/properties?${params.toString()}`);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevInsight = () => {
    if (insightsSwiperRef.current) {
      insightsSwiperRef.current.slidePrev();
    }
  };

  const handleNextInsight = () => {
    if (insightsSwiperRef.current) {
      insightsSwiperRef.current.slideNext();
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setNewsletterStatus('success');
      setNewsletterEmail('');
      setTimeout(() => setNewsletterStatus(''), 4500);
    }
  };

  const renderStatIcon = (iconType) => {
    switch (iconType) {
      case 'experience':
        return (
          <svg
            viewBox="0 0 24 24"
            width="32"
            height="32"
            fill="none"
            stroke="#b88628"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case 'clients':
        return (
          <svg
            viewBox="0 0 24 24"
            width="32"
            height="32"
            fill="none"
            stroke="#b88628"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.6-4.6a2 2 0 0 0 0-2.8l-1.4-1.4a2 2 0 0 0-2.8 0L13 12" />
            <path d="m13 7.5-2-2a2 2 0 0 0-2.8 0L3.6 10a2 2 0 0 0 0 2.8l1.4 1.4a2 2 0 0 0 2.8 0L11 11" />
            <path d="m13 12 2-2" />
            <path d="m8.5 7.5 1.5 1.5" />
          </svg>
        );
      case 'properties':
        return (
          <svg
            viewBox="0 0 24 24"
            width="32"
            height="32"
            fill="none"
            stroke="#b88628"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 20V10M12 20V4M6 20v-6" />
            <path d="m4 12 8-8 8 4" />
            <path d="M17 4h3v3" />
          </svg>
        );
      case 'trust':
        return (
          <svg
            viewBox="0 0 24 24"
            width="32"
            height="32"
            fill="none"
            stroke="#b88628"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="8" r="6" />
            <path d="m15.4 12.5 1.6 8.5-5-3-5 3 1.6-8.5" />
            <path d="m9 8 2 2 4-4" />
          </svg>
        );
      default:
        return <Award size={32} color="#b88628" />;
    }
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
              <div
                key={category.id}
                className="category-card"
                onClick={() => navigate(`/properties?category=${category.title}`)}
                style={{ cursor: 'pointer' }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') navigate(`/properties?category=${category.title}`);
                }}
              >
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
              <Link to="/properties" className="btn-explore-all">
                <span>View All Properties</span>
                <ArrowUpRight size={17} strokeWidth={2.2} />
              </Link>
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
                      <Link to={`/properties/${item.id}`} className="property-view-btn">
                        <span>View Details</span>
                        <ArrowUpRight size={17} className="btn-arrow" />
                      </Link>
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
            <Link to="/services" className="btn-explore-services">
              <span>Explore Services</span>
              <ArrowRight size={16} strokeWidth={2.4} className="services-btn-arrow" />
            </Link>
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

      {/* ======================================================================
          Section 5: Ongoing & Upcoming Projects (Our Projects Banner)
          ====================================================================== */}
      <section className="projects-banner-section" id="projects">
        <div className="projects-banner-container">
          <div
            className="projects-banner-card"
            style={{
              backgroundImage: `url(${projectsBannerData.backgroundImage})`,
            }}
          >
            <div className="projects-banner-overlay" />
            <div className="projects-banner-content">
              <span className="projects-banner-eyebrow">
                {projectsBannerData.eyebrow}
              </span>
              <h2 className="projects-banner-title">
                {projectsBannerData.title}
              </h2>
              <p className="projects-banner-subtitle">
                {projectsBannerData.subtitle}
              </p>
              <Link
                to="/projects"
                className="btn-view-projects"
              >
                <span>{projectsBannerData.buttonText}</span>
                <ArrowRight
                  size={16}
                  strokeWidth={2.4}
                  className="banner-arrow-icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          Section 6: Stats / Metrics Bar
          ====================================================================== */}
      <section className="stats-bar-section">
        <div className="stats-bar-container">
          {statsData.map((stat, index) => (
            <React.Fragment key={stat.id}>
              <div className="stat-item">
                <div className="stat-icon-wrapper">
                  {renderStatIcon(stat.iconType)}
                </div>
                <div className="stat-text-col">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </div>
              {index < statsData.length - 1 && <div className="stat-divider" />}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* ======================================================================
          Section 7: Client Testimonials ("What Our Clients Say")
          ====================================================================== */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          {/* Left Header */}
          <div className="testimonials-intro-col">
            <span className="testimonials-eyebrow">CLIENT TESTIMONIALS</span>
            <h2 className="testimonials-title">What Our Clients Say</h2>
          </div>

          {/* Right Testimonial Card */}
          <div className="testimonials-card-wrapper">
            <div className="testimonial-card">
              <div className="testimonial-quote-mark">“</div>
              <p className="testimonial-quote-text">
                "{testimonialsData[currentTestimonial].quote}"
              </p>
              <div className="testimonial-footer-row">
                <div className="testimonial-client-meta">
                  <div className="testimonial-avatar-user-wrap">
                    <User size={22} color="#dfb76c" />
                  </div>
                  <div className="testimonial-client-info">
                    <h4 className="testimonial-client-name">
                      {testimonialsData[currentTestimonial].name}
                    </h4>
                    <span className="testimonial-client-loc">
                      {testimonialsData[currentTestimonial].location}
                    </span>
                    <div className="testimonial-rating-stars">
                      {[...Array(testimonialsData[currentTestimonial].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            fill="#eab308"
                            color="#eab308"
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Prev / Next Arrows */}
                <div className="testimonial-nav-arrows">
                  <button
                    type="button"
                    className="btn-testimonial-nav"
                    onClick={handlePrevTestimonial}
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft size={17} strokeWidth={2.4} />
                  </button>
                  <button
                    type="button"
                    className="btn-testimonial-nav"
                    onClick={handleNextTestimonial}
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight size={17} strokeWidth={2.4} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          Section 8: Real Estate Insights (Split Screen with Sliding Effect)
          ====================================================================== */}
      <section className="insights-section">
        <div className="insights-container">
          {/* Left Side: Content at left side and half of the screen */}
          <div className="insights-intro-col">
            <span className="insights-eyebrow">
              {insightsIntroData.eyebrow}
            </span>
            <h2 className="insights-title">{insightsIntroData.title}</h2>
            <p className="insights-description">
              {insightsIntroData.description}
            </p>

            <div className="insights-actions-row">
              <a
                href={insightsIntroData.buttonLink}
                className="btn-explore-insights"
              >
                <span>{insightsIntroData.buttonText}</span>
                <ArrowRight size={15} strokeWidth={2.4} />
              </a>

              {/* Slider Arrow Controls */}
              <div className="insights-slider-arrows">
                <button
                  type="button"
                  className="btn-insights-nav"
                  onClick={handlePrevInsight}
                  aria-label="Previous Article"
                >
                  <ChevronLeft size={18} strokeWidth={2.4} />
                </button>
                <button
                  type="button"
                  className="btn-insights-nav"
                  onClick={handleNextInsight}
                  aria-label="Next Article"
                >
                  <ChevronRight size={18} strokeWidth={2.4} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Sliding Effect with Swiper Carousel */}
          <div className="insights-slider-col">
            <Swiper
              onBeforeInit={(swiper) => {
                insightsSwiperRef.current = swiper;
              }}
              modules={[Navigation, Autoplay, Pagination]}
              spaceBetween={18}
              slidesPerView={1}
              loop={true}
              speed={650}
              autoplay={{
                delay: 3800,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              breakpoints={{
                480: {
                  slidesPerView: 1.25,
                  spaceBetween: 14,
                },
                640: {
                  slidesPerView: 1.6,
                  spaceBetween: 16,
                },
                992: {
                  slidesPerView: 1.85,
                  spaceBetween: 18,
                },
                1280: {
                  slidesPerView: 2.2,
                  spaceBetween: 18,
                },
              }}
              className="insights-swiper"
            >
              {insightsData.map((item) => (
                <SwiperSlide key={item.id} className="insight-swiper-slide">
                  <div className="insight-card">
                    <div className="insight-img-wrapper">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="insight-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="insight-body">
                      <h3 className="insight-title">{item.title}</h3>
                      <div className="insight-footer">
                        <div className="insight-date">
                          <Calendar size={13.5} className="insight-date-icon" />
                          <span>{item.date}</span>
                        </div>
                        <a href={item.link} className="insight-read-more">
                          <span>Read More</span>
                          <ArrowRight size={14} strokeWidth={2.4} />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ======================================================================
          Section 9: Newsletter Banner ("Stay Updated with the Latest Properties")
          ====================================================================== */}
      <section className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-card">
            {/* Left Model House Image */}
            <div className="newsletter-media-col">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
                alt="Luxury Home Model"
                className="newsletter-house-img"
              />
            </div>

            {/* Center Text Block */}
            <div className="newsletter-text-col">
              <h2 className="newsletter-title">
                Stay Updated with the Latest Properties
              </h2>
              <p className="newsletter-subtitle">
                Subscribe to our newsletter and never miss a new listing or
                investment opportunity.
              </p>
            </div>

            {/* Right Email Form */}
            <div className="newsletter-form-col">
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <div className="newsletter-input-box">
                  <Mail size={17} className="newsletter-mail-icon" />
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="newsletter-input"
                  />
                  <button type="submit" className="newsletter-submit-btn">
                    <span>Subscribe</span>
                    <ArrowRight size={15} strokeWidth={2.4} />
                  </button>
                </div>
              </form>
              {newsletterStatus === 'success' && (
                <div className="newsletter-success-badge">
                  <Check size={14} /> Thank you for subscribing!
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
