import { useState, useEffect } from 'react';

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize with current window dimensions

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

// Example component using the custom hook
export default function WindowDimensionsLogger() {
  const { width, height } = useWindowDimensions();

  return (
    <div>
      <h1>Window Dimensions</h1>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}
