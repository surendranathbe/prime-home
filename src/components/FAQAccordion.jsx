import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ items = [], allowMultiple = false }) {
  const [openIndices, setOpenIndices] = useState([0]); // First item open by default

  const toggleItem = (index) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="luxury-faq-accordion">
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        const itemId = `faq-item-${item.id || index}`;

        return (
          <div
            key={item.id || index}
            className={`faq-accordion-item ${isOpen ? 'active' : ''}`}
          >
            <button
              type="button"
              className="faq-accordion-header"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              aria-controls={itemId}
            >
              <span className="faq-question-text">{item.question}</span>
              <span className={`faq-chevron-icon ${isOpen ? 'rotated' : ''}`}>
                <ChevronDown size={18} />
              </span>
            </button>

            <div
              id={itemId}
              role="region"
              className={`faq-accordion-body ${isOpen ? 'expanded' : ''}`}
              style={{ maxHeight: isOpen ? '500px' : '0px' }}
            >
              <div className="faq-answer-inner">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

