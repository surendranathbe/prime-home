import React from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  Tag,
  Key,
  TrendingUp,
  Settings,
  Scale,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

export default function ServiceCard({ service, onLearnMore }) {
  const renderIcon = (type) => {
    switch (type) {
      case 'buy':
        return <Home size={28} strokeWidth={1.9} />;
      case 'sell':
        return <Tag size={28} strokeWidth={1.9} />;
      case 'rent':
        return <Key size={28} strokeWidth={1.9} />;
      case 'investment':
        return <TrendingUp size={28} strokeWidth={1.9} />;
      case 'management':
        return <Settings size={28} strokeWidth={1.9} />;
      case 'legal':
        return <Scale size={28} strokeWidth={1.9} />;
      default:
        return <Home size={28} strokeWidth={1.9} />;
    }
  };

  return (
    <div className="luxury-service-card">
      <div className="service-card-top">
        <div className="service-icon-box">{renderIcon(service.iconType)}</div>
        {service.tag && <span className="service-highlight-tag">{service.tag}</span>}
      </div>

      <h3 className="service-card-heading">{service.title}</h3>
      <p className="service-card-paragraph">
        {service.fullDescription || service.description}
      </p>

      {service.benefits && service.benefits.length > 0 && (
        <ul className="service-benefits-list">
          {service.benefits.map((benefit, i) => (
            <li key={i} className="service-benefit-item">
              <CheckCircle size={14} className="benefit-check-icon" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="service-card-actions">
        <Link
          to={`/contact?service=${encodeURIComponent(service.title)}`}
          className="btn-service-enquire"
        >
          <span>Enquire Now</span>
          <ArrowRight size={14} className="action-arrow" />
        </Link>

        {onLearnMore && (
          <button
            type="button"
            className="btn-service-learn"
            onClick={() => onLearnMore(service)}
          >
            Learn More
          </button>
        )}
      </div>
    </div>
  );
}

