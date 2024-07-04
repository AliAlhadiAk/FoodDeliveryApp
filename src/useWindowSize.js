import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Function to update window size state
    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Event listener to handle window resize
    window.addEventListener('resize', updateSize);

    // Clean up event listener on unmount
    return () => window.removeEventListener('resize', updateSize);
  }, []); // Empty dependency array ensures effect runs only on mount and unmount

  return windowSize;
};

export default useWindowSize;
