import { useState, useEffect } from 'react';
import { window } from 'browser-monads';

//// DEVNOTE: https://gist.github.com/joshcawthorne/0a518b164658510f4eed74d0c4e8d003
//// DEVNOTE: https://github.com/Jense5/browser-monads

export default function useResizableWindow() {
  const [dimensions, setDimensions] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return dimensions;
};
