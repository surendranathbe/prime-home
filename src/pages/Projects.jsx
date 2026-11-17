import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Building,
  TrendingUp,
  ShieldCheck,
  Clock,
  ArrowRight,
  FileDown,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import ProjectCard from '../components/ProjectCard';
import EmptyState from '../components/EmptyState';
import { allProjectsData } from '../data/projectsData';
import '../css/common.css';
import '../css/projects.css';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');

  const filterTabs = [
    { label: 'All Developments', value: 'All' },
    { label: 'Ongoing Projects', value: 'Ongoing' },
    { label: 'Upcoming Launches', value: 'Upcoming' },
    { label: 'Completed Deliveries', value: 'Completed' },
  ];

  const filteredProjects = useMemo(() => {
    if (activeTab === 'All') return allProjectsData;
    return allProjectsData.filter(
      (p) => p.status?.toLowerCase() === activeTab.toLowerCase()
    );
  }, [activeTab]);

  const investmentBenefits = [
    {
      icon: MapPin,
      title: 'Prime Growth Corridors',
      desc: 'All projects are positioned in high-velocity infrastructure corridors guaranteeing steady capital appreciation.',
    },
    {
      icon: Building,
      title: 'Architectural Brilliance',
      desc: 'Partnering with globally acclaimed architectural studios to deliver iconic skyline landmarks that stand the test of time.',
    },
    {
      icon: TrendingUp,
      title: 'Exceptional ROI Potential',
      desc: 'Historically outperforming benchmark indices with average annualized property value gains exceeding 14-18%.',
    },
    {
      icon: ShieldCheck,
      title: '100% RERA & Timely Handover',
      desc: 'Strict adherence to statutory regulatory norms and escrow discipline ensuring punctual delivery with zero delays.',
    },
  ];

  const breadcrumb = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
  ];

  return (
    <div className="luxury-page-wrapper projects-page-container">
      {/* ======================================================================
          Section 1: Hero Banner
          ====================================================================== */}
      <PageHero
        title="Premier Developments & Landmarks"
        subtitle="Discover visionary residential townships, iconic sky-villas, and boutique gated enclaves crafted for multi-generational living."
        eyebrow="LANDMARK CREATIONS"
        breadcrumb={breadcrumb}
        backgroundImage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=80"
      />

      {/* ======================================================================
          Section 2: Filter Tabs & Projects Grid
          ====================================================================== */}
      <section className="projects-listing-section">
        <div className="luxury-container">
          {/* Status Tabs */}
          <div className="projects-filter-bar">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                type="button"
                className={`projects-tab-btn ${
                  activeTab === tab.value ? 'active' : ''
                }`}
                onClick={() => setActiveTab(tab.value)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Projects Grid or Fallback */}
          {filteredProjects.length === 0 ? (
            <EmptyState
              title="No Projects in This Category"
              description="We currently do not have any listings matching this status. Explore our other luxury ongoing and upcoming developments."
              actionLabel="View All Developments"
              onAction={() => setActiveTab('All')}
            />
          ) : (
            <div className="projects-grid-layout">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ======================================================================
          Section 3: Why Invest in Prime Estates Developments
          ====================================================================== */}
      <section className="projects-benefits-section">
        <div className="luxury-container">
          <div className="section-header-centered">
            <span className="section-gold-eyebrow">INVESTOR ASSURANCE</span>
            <h2 className="section-title-cinzel">Why Invest in Prime Estates Developments?</h2>
            <p className="section-desc-montserrat">
              Every master planned enclave is engineered with precision, institutional backing, and legal integrity.
            </p>
          </div>

          <div className="projects-benefits-grid">
            {investmentBenefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div key={idx} className="project-benefit-card">
                  <div className="benefit-card-icon">
                    <Icon size={28} strokeWidth={1.8} />
                  </div>
                  <h3 className="benefit-card-title">{b.title}</h3>
                  <p className="benefit-card-desc">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================================
          Section 4: Brochure & Advisory CTA Banner
          ====================================================================== */}
      <section className="about-cta-section">
        <div className="luxury-container">
          <div className="about-cta-inner">
            <span className="section-gold-eyebrow">PRIVATE ACCESS</span>
            <h2 className="about-cta-title">Request Project Investment Portfolios</h2>
            <p className="about-cta-desc">
              Receive complete architectural master plans, unit layouts, RERA disclosures, and projected payment schedules directly in your inbox.
            </p>
            <div className="about-cta-actions">
              <Link to="/contact?type=Brochure" className="btn-gold">
                Download Comprehensive Brochure <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline-gold">
                Schedule a Private Site Tour
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

