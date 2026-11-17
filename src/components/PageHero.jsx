import React from 'react';
import Breadcrumb from './Breadcrumb';

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  breadcrumbItems,
  backgroundImage,
  children,
}) {
  const defaultBg =
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80';

  const items = breadcrumb || breadcrumbItems || [];

  return (
    <section
      className="page-hero-section luxury-page-hero"
      style={{ backgroundImage: `url(${backgroundImage || defaultBg})` }}
    >
      <div className="page-hero-overlay" />

      <div className="luxury-container page-hero-container page-hero-inner">
        <div className="page-hero-header-block">
          {items.length > 0 && (
            <div className="page-hero-breadcrumb-wrap">
              <Breadcrumb items={items} />
            </div>
          )}

          {eyebrow && (
            <span className="page-hero-eyebrow">
              <span className="eyebrow-line" />
              {eyebrow}
              <span className="eyebrow-line" />
            </span>
          )}

          <h1 className="page-hero-title">{title}</h1>

          {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}

          {children && <div className="page-hero-children">{children}</div>}
        </div>
      </div>
    </section>
  );
}
