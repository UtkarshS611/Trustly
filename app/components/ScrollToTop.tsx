'use client';

import { ChevronUp } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Track scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 rounded-full h-10 w-10 aspect-square bg-[#3BD6FF] text-black grid place-items-center"
          aria-label="Scroll to top"
        >
          <ChevronUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
