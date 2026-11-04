import { useState, useEffect } from 'react';

/**
 * Data configuration for continuous typing effect on the banner
 */
export const bannerTypingConfig = {
  prefix: 'Find Your',
  phrases: [
    'Dream Property',
    'Luxury Villa',
    'Modern Home',
    'Pent house',
    'Prime Estate',
  ],
  typingSpeed: 100,      // ms per character typed
  deletingSpeed: 50,     // ms per character deleted
  pauseDuration: 1800,   // ms pause when full word is displayed
  blankDelay: 350,       // ms pause before typing next word
};

/**
 * Custom React hook for continuous letter typing & backspacing effect
 *
 * @param {string[]} phrases Array of text strings to cycle through
 * @param {number} typingSpeed Speed of typing in ms
 * @param {number} deletingSpeed Speed of deleting in ms
 * @param {number} pauseDuration Pause time after full phrase is typed
 * @returns {string} The current typed text
 */
export function useTypingEffect(
  phrases = bannerTypingConfig.phrases,
  typingSpeed = bannerTypingConfig.typingSpeed,
  deletingSpeed = bannerTypingConfig.deletingSpeed,
  pauseDuration = bannerTypingConfig.pauseDuration
) {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentPhrase = phrases[index % phrases.length];

    if (!isDeleting) {
      // Typing forward letter by letter
      if (displayedText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        // Full phrase typed, pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting backward letter by letter
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        // Finished deleting, move to next phrase
        timer = setTimeout(() => {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % phrases.length);
        }, bannerTypingConfig.blankDelay);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, index, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return displayedText;
}
