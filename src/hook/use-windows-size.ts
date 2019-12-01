import { useState, useLayoutEffect } from 'react';

const useWindowsSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useLayoutEffect(() => {
    const resize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  });

  return {
    rectangle: [size[0], size[1]],
    standard: size,
  };
};

export default useWindowsSize;
