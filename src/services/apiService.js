/**
 * API Service Layer for Prime Estates
 * Prepared for future integration with Spring Boot & MongoDB backend.
 * Currently serves data from local datasets with asynchronous simulation
 * and configurable API base URL.
 */

import { allPropertiesData } from '../data/propertiesData';
import { allProjectsData } from '../data/projectsData';

// Configurable API Base URL (defaults to relative or env variable)
export const API_BASE_URL =
  import.meta.env?.VITE_API_BASE_URL || 'http://localhost:8080/api/v1';

/**
 * Fetch all properties with optional filter & sorting criteria
 */
export async function fetchProperties(filters = {}) {
  // Simulate network latency (50ms) for realistic UX
  await new Promise((res) => setTimeout(res, 50));

  let results = [...allPropertiesData];

  // Location filter
  if (filters.location && filters.location !== 'All Locations') {
    results = results.filter((p) =>
      p.location.toLowerCase().includes(filters.location.toLowerCase())
    );
  }

  // Category filter
  if (filters.category && filters.category !== 'All') {
    results = results.filter(
      (p) => p.category.toLowerCase() === filters.category.toLowerCase()
    );
  }

  // Min price
  if (filters.minPrice) {
    results = results.filter((p) => p.numericPrice >= Number(filters.minPrice));
  }

  // Max price
  if (filters.maxPrice) {
    results = results.filter((p) => p.numericPrice <= Number(filters.maxPrice));
  }

  // Bedrooms
  if (filters.bedrooms && filters.bedrooms !== 'All') {
    const beds = Number(filters.bedrooms);
    results = results.filter((p) => (beds >= 5 ? p.beds >= 5 : p.beds === beds));
  }

  // Status filter
  if (filters.status && filters.status !== 'All') {
    results = results.filter(
      (p) => p.status.toLowerCase() === filters.status.toLowerCase()
    );
  }

  // Sorting
  if (filters.sortBy) {
    if (filters.sortBy === 'price-low') {
      results.sort((a, b) => a.numericPrice - b.numericPrice);
    } else if (filters.sortBy === 'price-high') {
      results.sort((a, b) => b.numericPrice - a.numericPrice);
    } else if (filters.sortBy === 'latest') {
      results.sort((a, b) => b.id - a.id);
    }
  }

  return results;
}

/**
 * Fetch a single property by ID
 */
export async function fetchPropertyById(id) {
  await new Promise((res) => setTimeout(res, 30));
  const numericId = Number(id);
  const property = allPropertiesData.find((p) => p.id === numericId);
  if (!property) {
    throw new Error(`Property with ID ${id} not found.`);
  }
  return property;
}

/**
 * Fetch all development projects
 */
export async function fetchProjects(category = 'All') {
  await new Promise((res) => setTimeout(res, 50));
  if (!category || category === 'All') {
    return allProjectsData;
  }
  return allProjectsData.filter(
    (p) => p.status.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Fetch a single project by ID
 */
export async function fetchProjectById(id) {
  await new Promise((res) => setTimeout(res, 30));
  const numericId = Number(id);
  const project = allProjectsData.find((p) => p.id === numericId);
  if (!project) {
    throw new Error(`Project with ID ${id} not found.`);
  }
  return project;
}

/**
 * Submit contact inquiry / site visit booking
 */
export async function submitContactEnquiry(enquiryData) {
  await new Promise((res) => setTimeout(res, 300));
  // In future: return fetch(`${API_BASE_URL}/enquiries`, { method: 'POST', body: JSON.stringify(enquiryData) })
  return {
    success: true,
    message: 'Thank you! Our property specialist will contact you shortly.',
    referenceId: 'PRIME-' + Math.floor(100000 + Math.random() * 900000),
    timestamp: new Date().toISOString(),
  };
}

/**
 * Submit "List Your Property" request
 */
export async function submitPropertyListing(listingData) {
  await new Promise((res) => setTimeout(res, 400));
  // In future: return fetch(`${API_BASE_URL}/properties/submit`, { method: 'POST', body: JSON.stringify(listingData) })
  return {
    success: true,
    message: 'Your property has been submitted for verification. We will contact you within 24 hours.',
    listingId: 'LIST-' + Math.floor(100000 + Math.random() * 900000),
    timestamp: new Date().toISOString(),
  };
}

