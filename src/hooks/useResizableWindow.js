import { useState, useEffect } from 'react';
//// DEVNOTE:
/* There is a useEffect in src/pages/index.js which forces a single resize 
on load to make sure that this works wit SSR and builds on gatsby-cloud. */

export default function useResizableWindow() {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });
  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })
  };
  useEffect(() => {
    // setDimensions({
    //   width: window.innerWidth,
    //   height: window.innerHeight
    // })
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return dimensions;
};
