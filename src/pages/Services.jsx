import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Award,
  Users,
  Compass,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';
import FAQAccordion from '../components/FAQAccordion';
import {
  servicesData,
  servicesHowItWorksData,
  servicesFaqsData,
} from '../data/servicesData';
import '../css/common.css';
import '../css/services.css';

export default function Services() {
  const advisoryPillars = [
    {
      icon: ShieldCheck,
      title: 'Zero Hidden Costs',
      desc: 'Complete fee transparency with all brokerage and consultancy fees documented upfront.',
    },
    {
      icon: Award,
      title: 'Institutional Diligence',
      desc: '40-point legal, regulatory, and structural audit on every residential and commercial listing.',
    },
    {
      icon: Users,
      title: 'Private Wealth Concierge',
      desc: 'Dedicated private client managers offering bespoke discreet advisory for HNW families.',
    },
    {
      icon: Compass,
      title: 'Lifecycle Property Support',
      desc: 'From search and acquisition through tenant leasing, routine upkeep, and profitable exit.',
    },
  ];

  const breadcrumb = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
  ];

  return (
    <div className="luxury-page-wrapper services-page-container">
      {/* ======================================================================
          Section 1: Hero Banner
          ====================================================================== */}
      <PageHero
        title="Comprehensive Real Estate Solutions"
        subtitle="End-to-end advisory for luxury acquisitions, property sales, high-yield investments, tenancy management, and legal diligence."
        eyebrow="BESPOKE SERVICES"
        breadcrumb={breadcrumb}
        backgroundImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80"
      />

      {/* ======================================================================
          Section 2: 6 Comprehensive Services Cards
          ====================================================================== */}
      <section className="services-catalog-section">
        <div className="luxury-container">
          <div className="section-header-centered">
            <span className="section-gold-eyebrow">WHAT WE DELIVER</span>
            <h2 className="section-title-cinzel">Tailored Solutions for Every Need</h2>
            <p className="section-desc-montserrat">
              Whether you are an aspiring homeowner, seasoned investor, or overseas NRI, our specialized service desks ensure your assets thrive.
            </p>
          </div>

          <div className="services-catalog-grid">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================
          Section 3: 6-Step Working Process ("How We Deliver Excellence")
          ====================================================================== */}
      <section className="services-process-section">
        <div className="luxury-container">
          <div className="section-header-centered">
            <span className="section-gold-eyebrow">THE PRIME METHODOLOGY</span>
            <h2 className="section-title-cinzel">How We Deliver Excellence</h2>
            <p className="section-desc-montserrat">
              A structured six-stage roadmap designed to eliminate friction, protect capital, and ensure a seamless acquisition journey.
            </p>
          </div>

          <div className="services-process-grid">
            {servicesHowItWorksData.map((step) => (
              <div key={step.step} className="process-step-card">
                <span className="step-card-number">{step.step}</span>
                <h3 className="step-card-title">{step.title}</h3>
                <p className="step-card-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================
          Section 4: Why Choose Our Advisory
          ====================================================================== */}
      <section className="services-advisory-section">
        <div className="luxury-container">
          <div className="section-header-centered">
            <span className="section-gold-eyebrow">UNMATCHED FIDUCIARY RIGOR</span>
            <h2 className="section-title-cinzel">Why Choose Our Advisory?</h2>
            <p className="section-desc-montserrat">
              We stand distinct in our commitment to objective advisory, absolute confidentiality, and institutional-grade diligence.
            </p>
          </div>

          <div className="services-advisory-grid">
            {advisoryPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="advisory-feature-card">
                  <div className="advisory-icon-wrap">
                    <Icon size={30} strokeWidth={1.8} />
                  </div>
                  <h3 className="advisory-card-title">{pillar.title}</h3>
                  <p className="advisory-card-desc">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================================
          Section 5: Interactive FAQ Accordion
          ====================================================================== */}
      <section className="services-faq-section">
        <div className="luxury-container">
          <div className="section-header-centered">
            <span className="section-gold-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="section-title-cinzel">Clarifying Your Real Estate Questions</h2>
            <p className="section-desc-montserrat">
              Everything you need to know about our listing criteria, legal verification process, and transaction timelines.
            </p>
          </div>

          <div className="services-faq-container">
            <FAQAccordion faqs={servicesFaqsData} />
          </div>
        </div>
      </section>

      {/* ======================================================================
          Section 6: Call To Action
          ====================================================================== */}
      <section className="about-cta-section">
        <div className="luxury-container">
          <div className="about-cta-inner">
            <span className="section-gold-eyebrow">READY TO PROCEED?</span>
            <h2 className="about-cta-title">Connect with a Senior Real Estate Specialist</h2>
            <p className="about-cta-desc">
              Have a unique property requirement, need an asset valuation, or looking for off-market investment deals? Our advisory desk is at your service.
            </p>
            <div className="about-cta-actions">
              <Link to="/contact" className="btn-gold">
                Schedule a Consultation <ArrowRight size={16} />
              </Link>
              <Link to="/properties" className="btn-outline-gold">
                Browse Active Listings
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

