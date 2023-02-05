import { useState, useEffect } from 'react';

// function BrowserDimensions() {
//   const [dimensions, setDimensions] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight
//   });
//   const handleResize = () => {
//     setDimensions({
//       width: window.innerWidth,
//       height: window.innerHeight
//     })
//   };
//   useEffect(() => {
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
  
//   return dimensions;
// };

export default function useResizableWindow() {
  // // Check if window is defined (so if in the browser or in node.js).
  // const isBrowser = typeof window !== "undefined";
  // const [isLoaded, setIsLoaded] = useState(false)
  // // If no browser, return empty object so that gatsby-cloud build does not fail.
  // let dimensions = {
  //   width: 1920,
  //   height: 1080
  // };
  // if (isBrowser) {
  //   // If there is a browser, then return window dimensions
  //   setIsLoaded(true)
  //   dimensions = BrowserDimensions();
  // };
  // if (!isLoaded) {
  //   window.resizeTo(dimensions.width, dimensions.height);
  // };

  // return dimensions

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
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return dimensions;
};
