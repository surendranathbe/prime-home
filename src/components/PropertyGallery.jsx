import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

export default function PropertyGallery({ images = [], title = 'Property Image' }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const currentImage = images[activeIndex] || images[0];

  const handlePrev = (e) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="luxury-property-gallery">
      {/* Main Display Image */}
      <div className="gallery-main-frame">
        <img
          src={currentImage}
          alt={`${title} - view ${activeIndex + 1}`}
          className="gallery-main-img"
        />
        <div className="gallery-main-overlay" />

        {/* Gallery Counter */}
        <div className="gallery-counter-pill">
          <span>{activeIndex + 1}</span> / <span>{images.length}</span>
        </div>

        {/* Fullscreen Trigger */}
        <button
          type="button"
          className="gallery-fullscreen-btn"
          onClick={() => setIsLightboxOpen(true)}
          title="Open Fullscreen Gallery"
          aria-label="Open Fullscreen Gallery"
        >
          <Maximize2 size={16} />
          <span>View All Photos</span>
        </button>

        {/* Prev / Next Arrows */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              className="gallery-arrow-btn prev"
              onClick={handlePrev}
              aria-label="Previous Image"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              className="gallery-arrow-btn next"
              onClick={handleNext}
              aria-label="Next Image"
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="gallery-thumbs-row">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              className={`gallery-thumb-btn ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Thumbnail ${idx + 1}`}
            >
              <img src={img} alt={`Thumbnail ${idx + 1}`} className="thumb-img" />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="gallery-lightbox-modal"
          onClick={() => setIsLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="lightbox-close-btn"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Close Gallery Modal"
          >
            <X size={24} />
          </button>

          <div
            className="lightbox-content-wrap"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage}
              alt={`${title} enlarged view`}
              className="lightbox-enlarged-img"
            />
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  className="lightbox-nav-btn prev"
                  onClick={handlePrev}
                  aria-label="Previous"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  type="button"
                  className="lightbox-nav-btn next"
                  onClick={handleNext}
                  aria-label="Next"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}
            <div className="lightbox-caption">
              <h4>{title}</h4>
              <span>Photo {activeIndex + 1} of {images.length}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

