import { useState, useEffect } from 'react';

function BrowserDimensions() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return dimensions;
};

export default function useResizableWindow() {
  // Check if window is defined (so if in the browser or in node.js).
  const isBrowser = typeof window !== "undefined";
  // If no browser, return empty object so that gatsby-cloud build does not fail.
  let dimensions = {
    width: 1366,
    height: 768
  };
  if (isBrowser) {
    // If there is a browser, then return window dimensions
    dimensions = BrowserDimensions();
    window.resizeTo(dimensions);
  };

  return dimensions

};
