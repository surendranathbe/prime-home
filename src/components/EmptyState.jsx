import React from 'react';
import { SearchX, RotateCcw } from 'lucide-react';

export default function EmptyState({
  title = 'No Matching Properties Found',
  description = 'Try broadening your search criteria or resetting your active filters to discover more luxury listings.',
  onReset,
  resetLabel = 'Reset All Filters',
}) {
  return (
    <div className="luxury-empty-state">
      <div className="empty-state-icon-box">
        <SearchX size={42} strokeWidth={1.5} />
      </div>
      <h3 className="empty-state-title">{title}</h3>
      <p className="empty-state-desc">{description}</p>
      {onReset && (
        <button type="button" className="btn-empty-reset" onClick={onReset}>
          <RotateCcw size={15} />
          <span>{resetLabel}</span>
        </button>
      )}
    </div>
  );
}

