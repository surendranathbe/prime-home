import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import PropertyFilters from '../components/PropertyFilters';
import PropertyCard from '../components/PropertyCard';
import EmptyState from '../components/EmptyState';
import { allPropertiesData } from '../data/propertiesData';
import { useWishlist } from '../hooks/useWishlist';
import '../css/common.css';
import '../css/properties.css';

export default function Properties() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { wishlist, wishlistCount } = useWishlist();

  // Initialize filter state from URL search params if present
  const initialCategory = searchParams.get('category') || 'All';
  const initialSearch = searchParams.get('search') || '';
  const initialStatus = searchParams.get('status') || 'All';
  const initialWishlistOnly = searchParams.get('wishlist') === 'true';

  const [filters, setFilters] = useState({
    search: initialSearch,
    category: initialCategory,
    minPrice: '',
    maxPrice: '',
    bedrooms: 'All',
    status: initialStatus,
    sortBy: 'latest',
  });

  const [viewMode, setViewMode] = useState('grid');
  const [showWishlistOnly, setShowWishlistOnly] = useState(initialWishlistOnly);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Sync state if URL query params change
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && cat !== filters.category) {
      setFilters((prev) => ({ ...prev, category: cat }));
    }
    const wl = searchParams.get('wishlist') === 'true';
    if (wl !== showWishlistOnly) {
      setShowWishlistOnly(wl);
    }
  }, [searchParams]);

  const handleFilterChange = (updates) => {
    setFilters((prev) => ({ ...prev, ...updates }));
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setFilters({
      search: '',
      category: 'All',
      minPrice: '',
      maxPrice: '',
      bedrooms: 'All',
      status: 'All',
      sortBy: 'latest',
    });
    setShowWishlistOnly(false);
    setCurrentPage(1);
    setSearchParams({});
  };

  // Filter and sort the properties using useMemo
  const filteredProperties = useMemo(() => {
    return allPropertiesData.filter((item) => {
      // 1. Wishlist Only Filter
      if (showWishlistOnly && !wishlist.includes(item.id)) {
        return false;
      }

      // 2. Search query (matches title, location, city)
      if (filters.search && filters.search.trim() !== '') {
        const query = filters.search.toLowerCase().trim();
        const matchesTitle = item.title?.toLowerCase().includes(query);
        const matchesLocation = item.location?.toLowerCase().includes(query);
        const matchesCity = item.city?.toLowerCase().includes(query);
        if (!matchesTitle && !matchesLocation && !matchesCity) {
          return false;
        }
      }

      // 3. Category Filter
      if (filters.category && filters.category !== 'All') {
        if (item.category?.toLowerCase() !== filters.category.toLowerCase()) {
          return false;
        }
      }

      // 4. Min Price Filter
      if (filters.minPrice && Number(filters.minPrice) > 0) {
        if ((item.numericPrice || 0) < Number(filters.minPrice)) {
          return false;
        }
      }

      // 5. Max Price Filter
      if (filters.maxPrice && Number(filters.maxPrice) > 0) {
        if ((item.numericPrice || 0) > Number(filters.maxPrice)) {
          return false;
        }
      }

      // 6. Bedroom Filter
      if (filters.bedrooms && filters.bedrooms !== 'All') {
        const beds = parseInt(item.beds ?? item.bedrooms, 10);
        if (filters.bedrooms === '5+') {
          if (isNaN(beds) || beds < 5) return false;
        } else {
          const req = parseInt(filters.bedrooms, 10);
          if (beds !== req) return false;
        }
      }

      // 7. Status Filter
      if (filters.status && filters.status !== 'All') {
        if (item.status?.toLowerCase() !== filters.status.toLowerCase()) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-low') {
        return (a.numericPrice || 0) - (b.numericPrice || 0);
      }
      if (filters.sortBy === 'price-high') {
        return (b.numericPrice || 0) - (a.numericPrice || 0);
      }
      // 'latest' default
      return b.id - a.id;
    });
  }, [allPropertiesData, filters, showWishlistOnly, wishlist]);

  // Paginated slice
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage) || 1;
  const paginatedProperties = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProperties.slice(start, start + itemsPerPage);
  }, [filteredProperties, currentPage, itemsPerPage]);

  const breadcrumb = [
    { label: 'Home', path: '/' },
    { label: 'Properties', path: '/properties' },
  ];

  return (
    <div className="luxury-page-wrapper properties-page-container">
      {/* ======================================================================
          Section 1: Hero Banner
          ====================================================================== */}
      <PageHero
        title="Discover Your Perfect Property"
        subtitle="Explore verified luxury villas, architectural penthouses, and strategic plots curated by our private client specialists."
        eyebrow="EXCLUSIVE DISCOVERY"
        breadcrumb={breadcrumb}
        backgroundImage="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=80"
      />

      {/* ======================================================================
          Section 2-5: Filters & Property Listings
          ====================================================================== */}
      <section className="properties-listing-section">
        <div className="luxury-container">
          {/* Advanced Search & Filter Interface */}
          <PropertyFilters
            filters={filters}
            onFilterChange={handleFilterChange}
            onReset={handleResetFilters}
            totalResults={filteredProperties.length}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            showWishlistOnly={showWishlistOnly}
            onToggleWishlistFilter={() => {
              setShowWishlistOnly((prev) => !prev);
              setCurrentPage(1);
            }}
            wishlistCount={wishlistCount}
          />

          {/* Active Filter Chips */}
          {(filters.search ||
            filters.category !== 'All' ||
            filters.status !== 'All' ||
            filters.bedrooms !== 'All' ||
            filters.minPrice ||
            filters.maxPrice ||
            showWishlistOnly) && (
            <div className="active-filters-row">
              <span style={{ fontSize: '12px', color: '#9ca3af' }}>Active Filters:</span>
              {showWishlistOnly && (
                <span className="active-filter-chip">
                  Saved Properties ({wishlistCount})
                  <button
                    type="button"
                    className="chip-remove-btn"
                    onClick={() => setShowWishlistOnly(false)}
                  >
                    ×
                  </button>
                </span>
              )}
              {filters.search && (
                <span className="active-filter-chip">
                  "{filters.search}"
                  <button
                    type="button"
                    className="chip-remove-btn"
                    onClick={() => handleFilterChange({ search: '' })}
                  >
                    ×
                  </button>
                </span>
              )}
              {filters.category !== 'All' && (
                <span className="active-filter-chip">
                  Category: {filters.category}
                  <button
                    type="button"
                    className="chip-remove-btn"
                    onClick={() => handleFilterChange({ category: 'All' })}
                  >
                    ×
                  </button>
                </span>
              )}
              {filters.bedrooms !== 'All' && (
                <span className="active-filter-chip">
                  {filters.bedrooms} Beds
                  <button
                    type="button"
                    className="chip-remove-btn"
                    onClick={() => handleFilterChange({ bedrooms: 'All' })}
                  >
                    ×
                  </button>
                </span>
              )}
              {filters.status !== 'All' && (
                <span className="active-filter-chip">
                  {filters.status}
                  <button
                    type="button"
                    className="chip-remove-btn"
                    onClick={() => handleFilterChange({ status: 'All' })}
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          )}

          {/* Listing Grid or Empty State */}
          {filteredProperties.length === 0 ? (
            <EmptyState
              title={
                showWishlistOnly
                  ? 'Your Wishlist is Empty'
                  : 'No Properties Found'
              }
              description={
                showWishlistOnly
                  ? 'Click the heart icon on any luxury property card to save it to your private wishlist for quick comparison.'
                  : 'We could not find any properties matching your selected criteria. Try adjusting your search filters or clear all filters.'
              }
              actionLabel="Reset All Filters"
              onAction={handleResetFilters}
            />
          ) : (
            <>
              <div
                className={
                  viewMode === 'grid'
                    ? 'properties-grid-layout'
                    : 'properties-list-layout'
                }
              >
                {paginatedProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    viewMode={viewMode}
                  />
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="properties-pagination-wrapper">
                  <div className="pagination-controls">
                    <button
                      type="button"
                      className="pagination-btn"
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    >
                      ← Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (num) => (
                        <button
                          key={num}
                          type="button"
                          className={`pagination-btn ${
                            currentPage === num ? 'active' : ''
                          }`}
                          onClick={() => setCurrentPage(num)}
                        >
                          {num}
                        </button>
                      ),
                    )}

                    <button
                      type="button"
                      className="pagination-btn"
                      disabled={currentPage === totalPages}
                      onClick={() =>
                        setCurrentPage((p) => Math.min(totalPages, p + 1))
                      }
                    >
                      Next →
                    </button>
                  </div>
                  <span className="pagination-summary-text">
                    Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
                    {Math.min(
                      currentPage * itemsPerPage,
                      filteredProperties.length,
                    )}{' '}
                    of {filteredProperties.length} luxury estates
                  </span>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}

