import { useState, useEffect, useCallback } from 'react';

const WISHLIST_STORAGE_KEY = 'prime_estates_wishlist';

/**
 * Custom React Hook for Managing Saved/Wishlisted Properties
 * Persists property IDs in browser localStorage and syncs across components
 */
export function useWishlist() {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const stored = localStorage.getItem(WISHLIST_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.warn('Failed to read wishlist from localStorage:', e);
      return [];
    }
  });

  // Sync to localStorage whenever wishlist changes
  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
    } catch (e) {
      console.warn('Failed to write wishlist to localStorage:', e);
    }
  }, [wishlist]);

  // Listen to window storage events (cross-tab/component sync)
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === WISHLIST_STORAGE_KEY) {
        try {
          setWishlist(e.newValue ? JSON.parse(e.newValue) : []);
        } catch (err) {
          console.warn('Failed to parse updated wishlist:', err);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const toggleWishlist = useCallback((propertyId) => {
    setWishlist((prev) => {
      const numericId = Number(propertyId);
      const exists = prev.includes(numericId);
      if (exists) {
        return prev.filter((id) => id !== numericId);
      } else {
        return [...prev, numericId];
      }
    });
  }, []);

  const isWishlisted = useCallback(
    (propertyId) => {
      return wishlist.includes(Number(propertyId));
    },
    [wishlist]
  );

  const clearWishlist = useCallback(() => {
    setWishlist([]);
  }, []);

  return {
    wishlist,
    wishlistCount: wishlist.length,
    toggleWishlist,
    isWishlisted,
    clearWishlist,
  };
}

export default useWishlist;

