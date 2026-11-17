import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  MapPin,
  ShieldCheck,
  Calendar,
  Share2,
  Check,
  Building,
  CheckCircle2,
  ArrowRight,
  FileText,
  Clock,
  Sparkles,
  User,
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import PropertyGallery from '../components/PropertyGallery';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import EmptyState from '../components/EmptyState';
import { allProjectsData } from '../data/projectsData';
import '../css/common.css';
import '../css/projectDetails.css';

export default function ProjectDetails() {
  const { id } = useParams();
  const [copied, setCopied] = useState(false);

  const numericId = parseInt(id, 10);
  const project = allProjectsData.find((p) => p.id === numericId);

  if (!project) {
    return (
      <div className="luxury-page-wrapper project-details-container">
        <div className="luxury-container" style={{ padding: '120px 20px 80px' }}>
          <EmptyState
            title="Project Not Found"
            description="The requested development may not exist or has completed sales. Discover our active portfolio of luxury developments."
            actionLabel="View All Projects"
            onAction={() => window.location.href = '/projects'}
          />
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const relatedProjects = allProjectsData
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: project.name, path: `/projects/${project.id}` },
  ];

  return (
    <div className="luxury-page-wrapper project-details-container">
      {/* ======================================================================
          Header Section
          ====================================================================== */}
      <section className="project-details-header-section">
        <div className="luxury-container">
          <Breadcrumb items={breadcrumbItems} />

          <div className="project-header-row">
            <div className="project-title-col">
              <div className="project-badges-row">
                <span className="project-category-badge">{project.category}</span>
                <span className={`project-status-badge status-${project.status.toLowerCase()}`}>
                  <span className="status-dot" />
                  {project.status}
                </span>
                {project.reraNumber && (
                  <span className="property-badge-tag" title="RERA Certified">
                    RERA: {project.reraNumber}
                  </span>
                )}
              </div>

              <h1 className="project-details-title">{project.name}</h1>

              <div className="project-details-location">
                <MapPin size={17} color="#c5a059" />
                <span>{project.location}</span>
              </div>
            </div>

            <div className="project-price-col">
              <span className="price-label">Starting Price</span>
              <div className="project-price-number">{project.startingPrice}</div>
              <button
                type="button"
                className="btn-header-action"
                onClick={handleShare}
              >
                {copied ? <Check size={16} /> : <Share2 size={16} />}
                <span>{copied ? 'Link Copied!' : 'Share Project'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          Two-Column Body Section
          ====================================================================== */}
      <section className="project-details-body-section">
        <div className="luxury-container">
          <div className="project-layout-grid">
            {/* Main Column */}
            <div className="project-main-content">
              {/* 1. Project Gallery */}
              <div className="project-section-card" style={{ padding: '16px' }}>
                <PropertyGallery
                  images={project.gallery || [project.image]}
                  title={project.name}
                />
              </div>

              {/* 2. Project Overview Grid */}
              <div className="project-section-card">
                <h2 className="project-card-heading">Development Overview</h2>
                <div className="overview-specs-grid">
                  <div className="overview-spec-box">
                    <span className="spec-box-label">Site Area</span>
                    <span className="spec-box-value">
                      {project.overview?.totalArea || '10+ Acres'}
                    </span>
                  </div>
                  <div className="overview-spec-box">
                    <span className="spec-box-label">Towers & Elev</span>
                    <span className="spec-box-value">
                      {project.overview?.towers || '3 Towers'}
                    </span>
                  </div>
                  <div className="overview-spec-box">
                    <span className="spec-box-label">Total Residences</span>
                    <span className="spec-box-value">
                      {project.overview?.totalUnits || 'Boutique Collection'}
                    </span>
                  </div>
                  <div className="overview-spec-box">
                    <span className="spec-box-label">Open Space</span>
                    <span className="spec-box-value">
                      {project.overview?.openSpace || '80% Greenery'}
                    </span>
                  </div>
                  <div className="overview-spec-box">
                    <span className="spec-box-label">RERA Number</span>
                    <span className="spec-box-value" style={{ fontSize: '13px' }}>
                      {project.reraNumber || 'Applied'}
                    </span>
                  </div>
                  <div className="overview-spec-box">
                    <span className="spec-box-label">Possession Date</span>
                    <span className="spec-box-value">
                      {project.expectedCompletion || 'Ready'}
                    </span>
                  </div>
                  <div className="overview-spec-box">
                    <span className="spec-box-label">Project Status</span>
                    <span className="spec-box-value">{project.status}</span>
                  </div>
                  <div className="overview-spec-box">
                    <span className="spec-box-label">Completion %</span>
                    <span className="spec-box-value">
                      {project.constructionProgress || 100}%
                    </span>
                  </div>
                </div>
              </div>

              {/* 3. Construction Progress & Status Timeline */}
              {project.timeline && project.timeline.length > 0 && (
                <div className="project-section-card">
                  <h2 className="project-card-heading">
                    Construction Status & Milestones
                  </h2>
                  <div className="project-progress-wrap" style={{ marginBottom: '28px' }}>
                    <div className="project-progress-label-row">
                      <span>Overall Milestone Completion</span>
                      <span className="progress-pct">
                        {project.constructionProgress}%
                      </span>
                    </div>
                    <div className="project-progress-bar" style={{ height: '8px' }}>
                      <div
                        className="project-progress-fill"
                        style={{ width: `${project.constructionProgress}%` }}
                      />
                    </div>
                  </div>

                  <div className="project-timeline-stepper">
                    {project.timeline.map((step, idx) => (
                      <div
                        key={idx}
                        className={`timeline-step-item ${
                          step.status === 'Completed'
                            ? 'completed'
                            : step.status === 'In Progress'
                            ? 'active'
                            : ''
                        }`}
                      >
                        <div className="step-circle">
                          {step.status === 'Completed' ? '✓' : idx + 1}
                        </div>
                        <span className="step-label">{step.phase}</span>
                        <span
                          style={{
                            fontSize: '11px',
                            color: '#dfb76c',
                            fontFamily: 'Montserrat',
                          }}
                        >
                          {step.date}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. Configurations & Pricing Table */}
              {project.configurations && project.configurations.length > 0 && (
                <div className="project-section-card">
                  <h2 className="project-card-heading">
                    Configurations & Investment Tiers
                  </h2>
                  <div className="configurations-table-wrap">
                    <table className="configurations-table">
                      <thead>
                        <tr>
                          <th>Unit Typology</th>
                          <th>Super / Carpet Area</th>
                          <th>Indicative Price</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {project.configurations.map((cfg, idx) => (
                          <tr key={idx}>
                            <td>
                              <strong>{cfg.type}</strong>
                            </td>
                            <td>{cfg.area}</td>
                            <td className="config-price-highlight">
                              {cfg.price}
                            </td>
                            <td>
                              <a
                                href="#site-visit"
                                className="property-btn-details"
                                style={{ fontSize: '11.5px', padding: '4px 10px' }}
                              >
                                Enquire Layout
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* 5. Master Plan & Architecture Narrative */}
              <div className="project-section-card">
                <h2 className="project-card-heading">Architectural Vision</h2>
                <p className="details-description-text">{project.description}</p>
                <p className="details-description-text">
                  Conceived to optimize natural light, acoustic insulation, and wind cross-ventilation, each tower is sculpted with aerodynamic contours. The private residential lobbies boast 24-ft soaring ceilings adorned with Italian Statuario marble and bespoke commissioned artworks.
                </p>
              </div>

              {/* 6. Project Amenities */}
              <div className="project-section-card">
                <h2 className="project-card-heading">World-Class Amenities</h2>
                <div className="amenities-badges-grid">
                  {(
                    project.amenities || [
                      'Sky Infinity Pool',
                      'Private Screening Room',
                      '50,000 sq.ft Club',
                      'Spa & Hydrotherapy',
                      'Concierge Desk',
                      'Squash Courts',
                      'EV Fast Charging',
                    ]
                  ).map((amenity, idx) => (
                    <div key={idx} className="amenity-badge-item">
                      <Sparkles size={16} className="amenity-icon-gold" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 7. Location Advantages */}
              {project.locationAdvantages && project.locationAdvantages.length > 0 && (
                <div className="project-section-card">
                  <h2 className="project-card-heading">Strategic Proximities</h2>
                  <ul className="location-landmarks-list">
                    {project.locationAdvantages.map((adv, idx) => (
                      <li key={idx} className="landmark-item">
                        <span className="landmark-name">{adv}</span>
                        <span className="landmark-dist">Prime Access</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sticky Sidebar: Tour / Brochure Form */}
            <aside className="details-sidebar-sticky" id="site-visit">
              <div className="sidebar-advisor-card">
                <div className="advisor-avatar-user-wrap">
                  <User size={26} color="#dfb76c" />
                </div>
                <div className="advisor-info">
                  <span className="advisor-name">Surendra Nath</span>
                  <span className="advisor-role">Project Investment Lead</span>
                  <span className="advisor-phone">+91 1234567891</span>
                </div>
              </div>

              <ContactForm
                initialEnquiryType="Schedule a Site Visit"
                initialPropertyTitle={project.name}
              />
            </aside>
          </div>

          {/* Related Developments */}
          {relatedProjects.length > 0 && (
            <div className="details-similar-section">
              <div className="section-header-centered" style={{ marginBottom: '36px' }}>
                <span className="section-gold-eyebrow">EXPLORE MORE</span>
                <h2 className="section-title-cinzel">Other Prime Developments</h2>
              </div>
              <div className="projects-grid-layout">
                {relatedProjects.map((proj) => (
                  <ProjectCard key={proj.id} project={proj} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

