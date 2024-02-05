
import { useState, useEffect } from 'react';

const useScroll = (threshold = 0) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setShouldAnimate(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return shouldAnimate;
};

export default useScroll;

// for ease in animation 
