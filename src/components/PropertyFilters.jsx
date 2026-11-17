import React from 'react';
import {
  Search,
  RotateCcw,
  LayoutGrid,
  List,
  SlidersHorizontal,
  ChevronDown,
  X,
} from 'lucide-react';

export default function PropertyFilters({
  filters,
  onFilterChange,
  onReset,
  totalResults = 0,
  viewMode = 'grid',
  onViewModeChange,
  showWishlistOnly = false,
  onToggleWishlistFilter,
  wishlistCount = 0,
}) {
  const categories = ['All', 'Villas', 'Apartments', 'Plots', 'Commercial'];
  const bedroomOptions = ['All', '3', '4', '5+'];
  const statusOptions = ['All', 'Ready to Move', 'Under Construction', 'New Launch'];
  const sortOptions = [
    { label: 'Featured / Latest', value: 'latest' },
    { label: 'Price: Low to High', value: 'price-low' },
    { label: 'Price: High to Low', value: 'price-high' },
  ];

  const priceRanges = [
    { label: 'Any Price', min: '', max: '' },
    { label: 'Under ₹3 Cr', min: '', max: '30000000' },
    { label: '₹3 Cr - ₹6 Cr', min: '30000000', max: '60000000' },
    { label: '₹6 Cr - ₹10 Cr', min: '60000000', max: '100000000' },
    { label: '₹10 Cr+', min: '100000000', max: '' },
  ];

  const handlePriceSelect = (e) => {
    const val = e.target.value;
    const found = priceRanges.find((r) => r.label === val);
    if (found) {
      onFilterChange({
        minPrice: found.min,
        maxPrice: found.max,
      });
    }
  };

  const getSelectedPriceLabel = () => {
    const match = priceRanges.find(
      (r) => r.min === (filters.minPrice || '') && r.max === (filters.maxPrice || '')
    );
    return match ? match.label : 'Custom Price';
  };

  const hasActiveFilters = Boolean(
    filters.search ||
      (filters.category && filters.category !== 'All') ||
      (filters.bedrooms && filters.bedrooms !== 'All') ||
      (filters.status && filters.status !== 'All') ||
      filters.minPrice ||
      filters.maxPrice ||
      showWishlistOnly
  );

  return (
    <div className="property-filters-container">
      {/* Search & Top Action Bar */}
      <div className="filters-primary-bar">
        {/* Keyword Search */}
        <div className="filter-search-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search by city, area, or property name..."
            value={filters.search || ''}
            onChange={(e) => onFilterChange({ search: e.target.value })}
            className="filter-search-input"
          />
          {filters.search && (
            <button
              type="button"
              className="search-clear-btn"
              onClick={() => onFilterChange({ search: '' })}
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="category-pill-group">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`category-pill ${filters.category === cat ? 'active' : ''}`}
              onClick={() => onFilterChange({ category: cat })}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* View Mode & Wishlist quick filter */}
        <div className="filter-view-controls">
          <button
            type="button"
            className={`wishlist-filter-btn ${showWishlistOnly ? 'active' : ''}`}
            onClick={onToggleWishlistFilter}
            title="Show Wishlisted Properties"
          >
            <span>Saved ({wishlistCount})</span>
          </button>

          <div className="view-mode-buttons">
            <button
              type="button"
              className={`view-mode-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => onViewModeChange('grid')}
              title="Grid View"
              aria-label="Grid View"
            >
              <LayoutGrid size={17} />
            </button>
            <button
              type="button"
              className={`view-mode-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => onViewModeChange('list')}
              title="List View"
              aria-label="List View"
            >
              <List size={17} />
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Criteria Bar */}
      <div className="filters-secondary-bar">
        <div className="secondary-filters-row">
          {/* Price Range */}
          <div className="filter-select-wrap">
            <span className="select-label">Budget</span>
            <div className="select-box-styled">
              <select
                value={getSelectedPriceLabel()}
                onChange={handlePriceSelect}
                className="filter-dropdown-select"
              >
                {priceRanges.map((r) => (
                  <option key={r.label} value={r.label}>
                    {r.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="select-arrow" />
            </div>
          </div>

          {/* Bedrooms */}
          <div className="filter-select-wrap">
            <span className="select-label">Bedrooms</span>
            <div className="select-box-styled">
              <select
                value={filters.bedrooms || 'All'}
                onChange={(e) => onFilterChange({ bedrooms: e.target.value })}
                className="filter-dropdown-select"
              >
                {bedroomOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt === 'All' ? 'All Bedrooms' : `${opt} BHK`}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="select-arrow" />
            </div>
          </div>

          {/* Status */}
          <div className="filter-select-wrap">
            <span className="select-label">Possession</span>
            <div className="select-box-styled">
              <select
                value={filters.status || 'All'}
                onChange={(e) => onFilterChange({ status: e.target.value })}
                className="filter-dropdown-select"
              >
                {statusOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt === 'All' ? 'All Status' : opt}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="select-arrow" />
            </div>
          </div>

          {/* Sort By */}
          <div className="filter-select-wrap">
            <span className="select-label">Sort By</span>
            <div className="select-box-styled">
              <select
                value={filters.sortBy || 'latest'}
                onChange={(e) => onFilterChange({ sortBy: e.target.value })}
                className="filter-dropdown-select"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="select-arrow" />
            </div>
          </div>

          {/* Reset Filters */}
          {hasActiveFilters && (
            <button
              type="button"
              className="btn-reset-filters"
              onClick={onReset}
              title="Reset all search filters"
            >
              <RotateCcw size={14} />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Results Counter */}
        <div className="filter-results-counter">
          <span>
            Showing <strong>{totalResults}</strong> {totalResults === 1 ? 'Property' : 'Properties'}
          </span>
        </div>
      </div>
    </div>
  );
}

