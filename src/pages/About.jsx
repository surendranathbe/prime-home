import React from 'react';
import { Link } from 'react-router-dom';
import {
  Target,
  Compass,
  Shield,
  ShieldCheck,
  Scale,
  FileText,
  TrendingUp,
  Headphones,
  CheckCircle,
  Clock,
  Users,
  Building,
  Award,
  ArrowRight,
  Mail,
  Star,
  User,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import {
  aboutHeroData,
  aboutIntroData,
  missionVisionValuesData,
  whyChooseData,
  companyStatsData,
  leadershipTeamData,
} from '../data/aboutData';
import { testimonialsData } from '../data/propertiesData';
import '../css/common.css';
import '../css/about.css';

export default function About() {
  const renderPillarIcon = (iconName) => {
    switch (iconName) {
      case 'Target':
        return <Target size={28} strokeWidth={1.8} />;
      case 'Compass':
        return <Compass size={28} strokeWidth={1.8} />;
      case 'Shield':
        return <Shield size={28} strokeWidth={1.8} />;
      default:
        return <Target size={28} strokeWidth={1.8} />;
    }
  };

  const renderWhyIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck size={24} strokeWidth={1.9} />;
      case 'Compass':
        return <Compass size={24} strokeWidth={1.9} />;
      case 'Scale':
        return <Scale size={24} strokeWidth={1.9} />;
      case 'FileText':
        return <FileText size={24} strokeWidth={1.9} />;
      case 'TrendingUp':
        return <TrendingUp size={24} strokeWidth={1.9} />;
      case 'Headphones':
        return <Headphones size={24} strokeWidth={1.9} />;
      default:
        return <ShieldCheck size={24} strokeWidth={1.9} />;
    }
  };

  const renderStatIcon = (iconName) => {
    switch (iconName) {
      case 'Clock':
        return <Clock size={26} strokeWidth={1.8} />;
      case 'Users':
        return <Users size={26} strokeWidth={1.8} />;
      case 'Building':
        return <Building size={26} strokeWidth={1.8} />;
      case 'Award':
        return <Award size={26} strokeWidth={1.8} />;
      default:
        return <Award size={26} strokeWidth={1.8} />;
    }
  };

  return (
    <div className="luxury-page-wrapper about-page-container">
      {/* ======================================================================
          Section 1: Hero Banner (Compact & Refined)
          ====================================================================== */}
      <PageHero
        title={aboutHeroData.title}
        subtitle={aboutHeroData.subtitle}
        eyebrow={aboutHeroData.eyebrow}
        breadcrumb={aboutHeroData.breadcrumb}
        backgroundImage={aboutHeroData.bannerImage}
      />

      {/* ======================================================================
          Sleek In-Page Classic Navigation Bar
          ====================================================================== */}
      <nav className="about-subnav-bar">
        <div className="luxury-container">
          <div className="about-subnav-items">
            <a href="#heritage" className="about-subnav-link">Our Heritage</a>
            <a href="#principles" className="about-subnav-link">Mission & Values</a>
            <a href="#advantage" className="about-subnav-link">The Prime Advantage</a>
            <a href="#stats" className="about-subnav-link">Milestones</a>
            <a href="#leadership" className="about-subnav-link">Leadership</a>
            <a href="#testimonials" className="about-subnav-link">Testimonials</a>
          </div>
        </div>
      </nav>

      {/* ======================================================================
          Section 2: Company Introduction (EQUAL ALIGNMENT & FIT TO SCREEN)
          ====================================================================== */}
      <section id="heritage" className="about-intro-section">
        <div className="luxury-container about-intro-container">
          <div className="about-intro-grid">
            {/* Left Column: Media Frame (Matches Right Height 100%) */}
            <div className="about-intro-media">
              <div className="about-intro-img-frame">
                <img
                  src={aboutIntroData.image}
                  alt="Prime Estates Architecture"
                  loading="lazy"
                  className="about-intro-img"
                />
                <div className="about-intro-accent-box">
                  <span className="accent-number">10+</span>
                  <span className="accent-label">Years of Mastery</span>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative Content (Equal Height & Balanced) */}
            <div className="about-intro-content">
              <span className="section-gold-eyebrow">
                {aboutIntroData.eyebrow}
              </span>
              <h2 className="section-title-cinzel about-intro-title">
                {aboutIntroData.title}
              </h2>

              <div className="about-quote-box">
                "Excellence is not an accident. In luxury real estate, it is the deliberate union of architectural vision, legal rigor, and client discretion."
              </div>

              <p className="about-body-text">
                Founded on integrity, discretion, and architectural distinction, Prime Estates curates India's premier luxury estates, seafront villas, penthouses, and strategic commercial assets. Every transaction is backed by institutional-grade due diligence, guaranteeing secure, appreciating, and timeless value.
              </p>

              <ul className="about-features-checklist">
                <li className="about-checklist-item">
                  <CheckCircle size={15} className="about-check-icon" />
                  <span>100% RERA Verified Portfolio</span>
                </li>
                <li className="about-checklist-item">
                  <CheckCircle size={15} className="about-check-icon" />
                  <span>Private Client Concierge</span>
                </li>
                <li className="about-checklist-item">
                  <CheckCircle size={15} className="about-check-icon" />
                  <span>Exclusive Off-Market Assets</span>
                </li>
                <li className="about-checklist-item">
                  <CheckCircle size={15} className="about-check-icon" />
                  <span>Zero Hidden Brokerage</span>
                </li>
              </ul>

              <div className="about-intro-actions">
                <Link to="/properties" className="btn-gold">
                  Explore Properties <ArrowRight size={15} />
                </Link>
                <Link to="/contact" className="btn-outline-dark">
                  Connect With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          Section 3: Mission, Vision, and Core Values (Classic View)
          ====================================================================== */}
      <section id="principles" className="about-pillars-section">
        <div className="luxury-container">
          <div className="section-header-centered">
            <span className="section-gold-eyebrow">OUR GUIDING PRINCIPLES</span>
            <h2 className="section-title-cinzel">Mission, Vision & Values</h2>
            <p className="section-desc-montserrat">
              Anchored in timeless ethics and propelled by forward-thinking innovation, our foundation defines every milestone we build.
            </p>
          </div>

          <div className="about-pillars-grid">
            {missionVisionValuesData.map((pillar) => (
              <div key={pillar.id} className="about-pillar-card">
                <div className="pillar-icon-box">
                  {renderPillarIcon(pillar.icon)}
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================
          Section 4: Why Choose Prime Estates? (Classic View)
          ====================================================================== */}
      <section id="advantage" className="about-why-section">
        <div className="luxury-container">
          <div className="section-header-centered">
            <span className="section-gold-eyebrow">THE PRIME ADVANTAGE</span>
            <h2 className="section-title-cinzel">Why Choose Prime Estates?</h2>
            <p className="section-desc-montserrat">
              Experience a sophisticated standard of property advisory shaped by uncompromised due diligence and personalized concierge service.
            </p>
          </div>

          <div className="about-why-grid">
            {whyChooseData.map((item) => (
              <div key={item.id} className="about-why-card">
                <div className="why-icon-box">
                  {renderWhyIcon(item.icon)}
                </div>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================
          Section 5: Company Statistics (Classic Ribbon)
          ====================================================================== */}
      <section id="stats" className="about-stats-section">
        <div className="luxury-container">
          <div className="about-stats-grid">
            {companyStatsData.map((stat, idx) => (
              <div key={idx} className="about-stat-item">
                <div className="stat-icon-wrap">
                  {renderStatIcon(stat.icon)}
                </div>
                <div className="stat-value">
                  {stat.value}{stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================
          Section 6: Leadership Team (Classic Executive Grid)
          ====================================================================== */}
      <section id="leadership" className="about-team-section">
        <div className="luxury-container">
          <div className="section-header-centered">
            <span className="section-gold-eyebrow">OUR LEADERSHIP</span>
            <h2 className="section-title-cinzel">Meet the Minds Behind Prime Estates</h2>
            <p className="section-desc-montserrat">
              A seasoned collective of property strategists, investment advisors, and legal authorities dedicated to protecting and growing your wealth.
            </p>
          </div>

          <div className="about-team-grid">
            {leadershipTeamData.map((member) => (
              <div key={member.id} className="about-team-card">
                <div className="team-card-avatar-wrap">
                  <div className="team-card-avatar-circle">
                    <User size={46} strokeWidth={1.5} className="team-user-icon" />
                  </div>
                </div>
                <div className="team-card-body">
                  <h3 className="team-member-name">{member.name}</h3>
                  <span className="team-member-role">{member.designation}</span>
                  <p className="team-member-bio">{member.bio}</p>
                  <div className="team-social-links">
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="team-social-btn"
                      aria-label="LinkedIn"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
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
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="team-social-btn"
                      aria-label="Twitter"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="team-social-btn"
                      aria-label="Email"
                    >
                      <Mail size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================
          Section 7: Client Testimonials (Classic View)
          ====================================================================== */}
      <section id="testimonials" className="about-testimonials-section">
        <div className="luxury-container">
          <div className="section-header-centered">
            <span className="section-gold-eyebrow">TESTIMONIALS</span>
            <h2 className="section-title-cinzel">Words from Discerning Clients</h2>
            <p className="section-desc-montserrat">
              Discover how our fiduciary diligence and bespoke advisory have turned property aspirations into triumphant realities.
            </p>
          </div>

          <div className="about-testimonials-grid">
            {testimonialsData.map((t) => (
              <div key={t.id} className="about-testimonial-card">
                <div className="testimonial-stars">
                  {'★'.repeat(t.rating || 5)}
                </div>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-client">
                  <div className="testimonial-avatar-user-wrap">
                    <User size={20} color="#dfb76c" />
                  </div>
                  <div>
                    <h4 className="client-name">{t.name}</h4>
                    <span className="client-location">{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ======================================================================
          Section 8: Call to Action (Classic Luxury Banner)
          ====================================================================== */}
      <section className="about-cta-section">
        <div className="luxury-container">
          <div className="about-cta-inner">
            <span className="section-gold-eyebrow">START YOUR JOURNEY</span>
            <h2 className="about-cta-title">Let's Find Your Perfect Property</h2>
            <p className="about-cta-desc">
              Whether you are acquiring a flagship residence, an expansive plot, or restructuring a commercial portfolio, our senior consultants are ready to assist.
            </p>
            <div className="about-cta-actions">
              <Link to="/properties" className="btn-gold">
                Explore Properties <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline-gold">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
