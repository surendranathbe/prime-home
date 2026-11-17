import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ProjectCard({ project }) {
  const getStatusBadgeClass = (status) => {
    switch (status?.toLowerCase()) {
      case 'ongoing':
        return 'status-ongoing';
      case 'upcoming':
        return 'status-upcoming';
      case 'completed':
        return 'status-completed';
      default:
        return 'status-default';
    }
  };

  return (
    <article className="luxury-project-card">
      <div className="project-card-media">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="project-card-img"
        />
        <div className="project-card-gradient" />

        {/* Top Badges */}
        <div className="project-card-badges">
          <span className={`project-status-badge ${getStatusBadgeClass(project.status)}`}>
            <span className="status-dot" />
            {project.status}
          </span>
          <span className="project-category-badge">{project.category}</span>
        </div>

        {/* Starting Price Tag */}
        <div className="project-price-tag">
          <span className="price-label">Starting From</span>
          <span className="price-value">{project.startingPrice}</span>
        </div>
      </div>

      <div className="project-card-body">
        <div className="project-meta-row">
          <div className="project-location">
            <MapPin size={14} className="project-icon-gold" />
            <span>{project.location}</span>
          </div>
          {project.reraNumber && (
            <div className="project-rera" title={`RERA: ${project.reraNumber}`}>
              <ShieldCheck size={13} className="project-icon-gold" />
              <span>RERA Approved</span>
            </div>
          )}
        </div>

        <h3 className="project-name">
          <Link to={`/projects/${project.id}`} className="project-name-link">
            {project.name}
          </Link>
        </h3>

        <p className="project-excerpt">
          {project.description?.slice(0, 115)}...
        </p>

        {/* Progress or Timeline indicator */}
        {project.status === 'Ongoing' && project.constructionProgress && (
          <div className="project-progress-wrap">
            <div className="progress-labels">
              <span>Construction Status</span>
              <span>{project.constructionProgress}%</span>
            </div>
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${project.constructionProgress}%` }}
              />
            </div>
          </div>
        )}

        <div className="project-card-footer">
          <div className="project-completion">
            <Calendar size={14} className="completion-icon" />
            <span>
              {project.status === 'Completed'
                ? 'Ready to Move'
                : `Possession: ${project.expectedCompletion}`}
            </span>
          </div>

          <Link to={`/projects/${project.id}`} className="btn-project-details">
            <span>View Project</span>
            <ArrowRight size={14} className="arrow-icon" />
          </Link>
        </div>
      </div>
    </article>
  );
}

