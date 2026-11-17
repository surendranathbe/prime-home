import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  Building,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ExternalLink,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import FAQAccordion from '../components/FAQAccordion';
import { submitPropertyListing } from '../services/apiService';
import '../css/common.css';
import '../css/contact.css';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') === 'list' ? 'list' : 'enquiry';
  const initialService = searchParams.get('service') || '';

  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (searchParams.get('tab') === 'list') {
      setActiveTab('list');
    }
  }, [searchParams]);

  // List Your Property Form State
  const [listForm, setListForm] = useState({
    ownerName: '',
    phone: '',
    email: '',
    propertyCategory: 'Villas',
    city: 'Hyderabad',
    locality: '',
    expectedPrice: '',
    carpetArea: '',
    bedrooms: '4',
    description: '',
  });

  const [listErrors, setListErrors] = useState({});
  const [isSubmittingListing, setIsSubmittingListing] = useState(false);
  const [listSuccess, setListSuccess] = useState(null);

  const validateListForm = () => {
    const errs = {};
    if (!listForm.ownerName.trim()) errs.ownerName = 'Please enter owner name';
    if (!listForm.phone.trim()) {
      errs.phone = 'Please enter mobile number';
    } else if (listForm.phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!listForm.email.trim()) {
      errs.email = 'Please enter email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(listForm.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!listForm.locality.trim()) errs.locality = 'Please enter property locality / area';
    if (!listForm.expectedPrice.trim()) errs.expectedPrice = 'Please enter expected price';
    if (!listForm.carpetArea.trim()) errs.carpetArea = 'Please enter carpet / plot area';
    return errs;
  };

  const handleListSubmit = async (e) => {
    e.preventDefault();
    const errs = validateListForm();
    if (Object.keys(errs).length > 0) {
      setListErrors(errs);
      return;
    }
    setListErrors({});
    setIsSubmittingListing(true);

    try {
      const res = await submitPropertyListing(listForm);
      if (res.success) {
        setListSuccess(res);
        setListForm({
          ownerName: '',
          phone: '',
          email: '',
          propertyCategory: 'Villas',
          city: 'Hyderabad',
          locality: '',
          expectedPrice: '',
          carpetArea: '',
          bedrooms: '4',
          description: '',
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmittingListing(false);
    }
  };

  const contactFaqs = [
    {
      id: 1,
      question: 'How do I book an in-person site visit for a property?',
      answer:
        'You can submit the site visit request form above, contact our advisory desk directly at +91 1234567891, or message us on WhatsApp. Our private relationship manager will confirm a dedicated chauffeur-assisted or private visit within 2 business hours.',
    },
    {
      id: 2,
      question: 'What documents are required to list a property with Prime Estates?',
      answer:
        'To list with us, we require proof of ownership (Registered Sale Deed), recent Encumbrance Certificate (EC), approved building/layout sanctions, and property tax receipts. Our legal team reviews the documents before publication.',
    },
    {
      id: 3,
      question: 'Do you charge any advance fee for property listing or consultations?',
      answer:
        'No. Initial consultations, property valuation assessments, and listing submissions are complimentary. Standard brokerage or advisory commission is payable only upon successful deal closing and registration.',
    },
  ];

  const breadcrumb = [
    { label: 'Home', path: '/' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <div className="luxury-page-wrapper contact-page-container">
      {/* ======================================================================
          Section 1: Hero Banner
          ====================================================================== */}
      <PageHero
        title="Connect With Our Specialists"
        subtitle="Schedule a private property tour, request an institutional market appraisal, or list your premier real estate asset with us."
        eyebrow="GLOBAL ADVISORY DESK"
        breadcrumb={breadcrumb}
        backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80"
      />

      {/* ======================================================================
          Section 2: Quick Contact Information Cards
          ====================================================================== */}
      <section className="contact-info-section">
        <div className="luxury-container">
          <div className="contact-cards-grid">
            {/* 1. Office Location */}
            <div className="contact-info-card">
              <div className="contact-card-icon-box">
                <MapPin size={26} strokeWidth={1.8} />
              </div>
              <h3 className="contact-card-title">Corporate Office</h3>
              <p className="contact-card-text">
                Plot No. 120, Financial District Road, Hitech City, Hyderabad - 500081, Telangana, India
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="contact-card-link"
              >
                View On Google Maps →
              </a>
            </div>

            {/* 2. Direct Phone */}
            <div className="contact-info-card">
              <div className="contact-card-icon-box">
                <Phone size={26} strokeWidth={1.8} />
              </div>
              <h3 className="contact-card-title">Direct Calling</h3>
              <p className="contact-card-text">
                Speak directly with our senior property advisory desk for instant guidance.
              </p>
              <a href="tel:+911234567891" className="contact-card-link">
                +91 1234567891
              </a>
            </div>

            {/* 3. Direct WhatsApp Chat */}
            <div className="contact-info-card contact-whatsapp-card">
              <div className="contact-card-icon-box whatsapp-icon-box">
                <MessageSquare size={26} strokeWidth={1.8} />
              </div>
              <h3 className="contact-card-title">Instant WhatsApp</h3>
              <p className="contact-card-text">
                Chat with our private concierge for instant brochures, price sheets & site visit bookings.
              </p>
              <a
                href="https://wa.me/911234567891?text=Hello%20Prime%20Estates,%20I%20am%20interested%20in%20luxury%20properties."
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp-chat"
              >
                Chat On WhatsApp
              </a>
            </div>

            {/* 4. Email & Hours */}
            <div className="contact-info-card">
              <div className="contact-card-icon-box">
                <Mail size={26} strokeWidth={1.8} />
              </div>
              <h3 className="contact-card-title">Email Inquiries</h3>
              <p className="contact-card-text">
                test@primerealstate.com<br />
                Mon - Sat: 9:00 AM - 7:30 PM IST
              </p>
              <a href="mailto:test@primerealstate.com" className="contact-card-link">
                Send Direct Email →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          Section 3: Dual Forms with Tab Switcher & Interactive Map (Side-by-Side)
          ====================================================================== */}
      <section className="contact-forms-section">
        <div className="luxury-container">
          <div className="section-header-centered">
            <span className="section-gold-eyebrow">SUBMIT YOUR INQUIRY OR VISIT</span>
            <h2 className="section-title-cinzel">How May We Assist You?</h2>
            <p className="section-desc-montserrat">
              Select your inquiry objective below or plan an in-person visit to our private client advisory lounge in Hyderabad.
            </p>
          </div>

          {/* Form Tabs */}
          <div className="contact-form-tabs">
            <button
              type="button"
              className={`contact-tab-btn ${activeTab === 'enquiry' ? 'active' : ''}`}
              onClick={() => setActiveTab('enquiry')}
            >
              General Enquiry & Site Visit
            </button>
            <button
              type="button"
              className={`contact-tab-btn ${activeTab === 'list' ? 'active' : ''}`}
              onClick={() => setActiveTab('list')}
            >
              List Your Property
            </button>
          </div>

          {/* Side-by-Side System: Left = Form, Right = Interactive Map & Lounge */}
          <div className="contact-side-by-side-grid">
            {/* Left Column: Form */}
            <div className="contact-form-column">
              {activeTab === 'enquiry' ? (
                <ContactForm
                  initialEnquiryType={
                    initialService
                      ? `Enquiry for ${initialService}`
                      : 'Schedule a Site Visit'
                  }
                />
              ) : (
                /* Dedicated "List Your Property" Form */
                <div className="luxury-contact-form-card">
                  <h3 className="contact-form-title">List Your Luxury Property</h3>
                  <p className="contact-form-subtitle">
                    Present your property to pre-qualified high-net-worth buyers with full discretion and premium exposure.
                  </p>

                  {listSuccess && (
                    <div className="contact-form-success">
                      <CheckCircle2 size={24} color="#10b981" />
                      <div>
                        <h4 className="contact-form-success-title">
                          Listing Request Received!
                        </h4>
                        <p className="contact-form-success-text">
                          Reference ID: <strong>{listSuccess.referenceId}</strong>. Our senior listings director will contact you within 24 hours to schedule verification.
                        </p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleListSubmit} noValidate>
                    <div className="contact-form-grid">
                      {/* Owner Name */}
                      <div className="contact-field-group">
                        <label className="contact-form-label">Owner / Representative Name *</label>
                        <input
                          type="text"
                          className={`contact-form-input ${listErrors.ownerName ? 'error' : ''}`}
                          placeholder="e.g. Surendra Nath"
                          value={listForm.ownerName}
                          onChange={(e) =>
                            setListForm({ ...listForm, ownerName: e.target.value })
                          }
                        />
                        {listErrors.ownerName && (
                          <span className="contact-field-error">
                            <AlertCircle size={12} /> {listErrors.ownerName}
                          </span>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="contact-field-group">
                        <label className="contact-form-label">Mobile Number *</label>
                        <input
                          type="tel"
                          className={`contact-form-input ${listErrors.phone ? 'error' : ''}`}
                          placeholder="+91 1234567891"
                          value={listForm.phone}
                          onChange={(e) =>
                            setListForm({ ...listForm, phone: e.target.value })
                          }
                        />
                        {listErrors.phone && (
                          <span className="contact-field-error">
                            <AlertCircle size={12} /> {listErrors.phone}
                          </span>
                        )}
                      </div>

                      {/* Email */}
                      <div className="contact-field-group">
                        <label className="contact-form-label">Email Address *</label>
                        <input
                          type="email"
                          className={`contact-form-input ${listErrors.email ? 'error' : ''}`}
                          placeholder="owner@domain.com"
                          value={listForm.email}
                          onChange={(e) =>
                            setListForm({ ...listForm, email: e.target.value })
                          }
                        />
                        {listErrors.email && (
                          <span className="contact-field-error">
                            <AlertCircle size={12} /> {listErrors.email}
                          </span>
                        )}
                      </div>

                      {/* Category */}
                      <div className="contact-field-group">
                        <label className="contact-form-label">Property Category *</label>
                        <select
                          className="contact-form-select"
                          value={listForm.propertyCategory}
                          onChange={(e) =>
                            setListForm({ ...listForm, propertyCategory: e.target.value })
                          }
                        >
                          <option value="Villas">Luxury Villa / Mansion</option>
                          <option value="Apartments">High-Rise Apartment / Penthouse</option>
                          <option value="Plots">Gated Plot / Farm Land</option>
                          <option value="Commercial">Commercial Office / Retail</option>
                        </select>
                      </div>

                      {/* Locality */}
                      <div className="contact-field-group">
                        <label className="contact-form-label">City & Locality *</label>
                        <input
                          type="text"
                          className={`contact-form-input ${listErrors.locality ? 'error' : ''}`}
                          placeholder="e.g. Jubilee Hills, Hyderabad"
                          value={listForm.locality}
                          onChange={(e) =>
                            setListForm({ ...listForm, locality: e.target.value })
                          }
                        />
                        {listErrors.locality && (
                          <span className="contact-field-error">
                            <AlertCircle size={12} /> {listErrors.locality}
                          </span>
                        )}
                      </div>

                      {/* Expected Price */}
                      <div className="contact-field-group">
                        <label className="contact-form-label">Expected Price *</label>
                        <input
                          type="text"
                          className={`contact-form-input ${listErrors.expectedPrice ? 'error' : ''}`}
                          placeholder="e.g. ₹7.50 Cr"
                          value={listForm.expectedPrice}
                          onChange={(e) =>
                            setListForm({ ...listForm, expectedPrice: e.target.value })
                          }
                        />
                        {listErrors.expectedPrice && (
                          <span className="contact-field-error">
                            <AlertCircle size={12} /> {listErrors.expectedPrice}
                          </span>
                        )}
                      </div>

                      {/* Carpet Area */}
                      <div className="contact-field-group">
                        <label className="contact-form-label">Carpet / Super Area *</label>
                        <input
                          type="text"
                          className={`contact-form-input ${listErrors.carpetArea ? 'error' : ''}`}
                          placeholder="e.g. 5,200 sq.ft"
                          value={listForm.carpetArea}
                          onChange={(e) =>
                            setListForm({ ...listForm, carpetArea: e.target.value })
                          }
                        />
                        {listErrors.carpetArea && (
                          <span className="contact-field-error">
                            <AlertCircle size={12} /> {listErrors.carpetArea}
                          </span>
                        )}
                      </div>

                      {/* Bedrooms */}
                      <div className="contact-field-group">
                        <label className="contact-form-label">Bedrooms / Units</label>
                        <select
                          className="contact-form-select"
                          value={listForm.bedrooms}
                          onChange={(e) =>
                            setListForm({ ...listForm, bedrooms: e.target.value })
                          }
                        >
                          <option value="3">3 BHK</option>
                          <option value="4">4 BHK</option>
                          <option value="5">5 BHK</option>
                          <option value="6+">6+ BHK / Estate</option>
                          <option value="N/A">Not Applicable (Plot/Commercial)</option>
                        </select>
                      </div>

                      {/* Property Description */}
                      <div className="contact-field-group full-width">
                        <label className="contact-form-label">Property Description & Highlights</label>
                        <textarea
                          rows={4}
                          className="contact-form-textarea"
                          placeholder="Mention key features, facing, furnishings, age of property, or specific buyer criteria..."
                          value={listForm.description}
                          onChange={(e) =>
                            setListForm({ ...listForm, description: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn-gold contact-form-btn-submit"
                      disabled={isSubmittingListing}
                    >
                      {isSubmittingListing ? (
                        <>
                          <Loader2 size={16} className="luxury-spinner" style={{ width: '16px', height: '16px' }} />
                          Submitting Property Details...
                        </>
                      ) : (
                        <>
                          Submit Property for Review <Send size={15} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Right Column: Luxury Interactive Map & Headquarters Lounge */}
            <div className="contact-map-column">
              <div className="luxury-contact-map-card">
                <div className="map-card-header">
                  <span className="map-card-eyebrow">
                    <Building size={14} className="map-header-icon" />
                    <span>HEADQUARTERS & ADVISORY LOUNGE</span>
                  </span>
                  <h3 className="map-card-title">Experience Our Private Lounge</h3>
                  <p className="map-card-desc">
                    Located in the heart of Hyderabad Financial District, our lounge is curated for confidential portfolio discussions and discrete acquisitions.
                  </p>
                </div>

                <div className="map-embed-wrapper">
                  <iframe
                    title="Prime Estates Office Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3312065842857!2d78.37583767516624!3d17.44384668345244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e877e5e347%3A0xc34b3e34b35e2eb2!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    className="map-iframe-embed"
                    loading="lazy"
                    allowFullScreen=""
                  />
                </div>

                <div className="map-card-info-strip">
                  <div className="map-info-item">
                    <div className="map-info-icon-box">
                      <MapPin size={17} />
                    </div>
                    <div className="map-info-content">
                      <span className="map-info-label">Address</span>
                      <span className="map-info-val">Plot No. 120, Financial District Road, Hitech City, Hyderabad - 500081</span>
                    </div>
                  </div>

                  <div className="map-info-item">
                    <div className="map-info-icon-box">
                      <Clock size={17} />
                    </div>
                    <div className="map-info-content">
                      <span className="map-info-label">Visiting Hours</span>
                      <span className="map-info-val">Mon - Sat: 9:00 AM - 7:30 PM IST (Valet Parking Available)</span>
                    </div>
                  </div>

                  <div className="map-info-item">
                    <div className="map-info-icon-box">
                      <Phone size={17} />
                    </div>
                    <div className="map-info-content">
                      <span className="map-info-label">Advisory Desk</span>
                      <a href="tel:+911234567891" className="map-info-link">+91 1234567891</a>
                    </div>
                  </div>

                  <div className="map-info-item">
                    <div className="map-info-icon-box">
                      <Mail size={17} />
                    </div>
                    <div className="map-info-content">
                      <span className="map-info-label">Official Correspondence</span>
                      <a href="mailto:test@primerealstate.com" className="map-info-link">test@primerealstate.com</a>
                    </div>
                  </div>
                </div>

                <div className="map-card-actions">
                  <a
                    href="https://maps.google.com/?q=HITEC+City,+Hyderabad,+Telangana"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-map-directions"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink size={15} />
                  </a>
                  <a
                    href="https://wa.me/911234567891?text=Hello%20Prime%20Estates,%20I%20would%20like%20to%20visit%20your%20lounge."
                    target="_blank"
                    rel="noreferrer"
                    className="btn-map-whatsapp"
                  >
                    <MessageSquare size={15} />
                    <span>WhatsApp Concierge</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          Section 5: Contact & Site Visit FAQs
          ====================================================================== */}
      <section className="services-faq-section">
        <div className="luxury-container">
          <div className="section-header-centered">
            <span className="section-gold-eyebrow">COMMON QUERIES</span>
            <h2 className="section-title-cinzel">Visiting & Advisory FAQs</h2>
          </div>
          <div className="services-faq-container">
            <FAQAccordion faqs={contactFaqs} />
          </div>
        </div>
      </section>
    </div>
  );
}

