import { useState, useEffect } from 'react';

export default function useResizableWindow() {
  // Check if window is defined (so if in the browser or in node.js).
  const isBrowser = typeof window !== "undefined";

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  const handleResize = () => {
    if (isBrowser) {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    };
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return dimensions;
};
