import { useState, useEffect } from 'react';
import WebFont from 'webfontloader';

const useFontLoader = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    WebFont.load({
      active: () => setReady(true),
      google: {
        families: ['Press Start 2P'],
      },
    });
  }, []);

  return [ready];
};

export default useFontLoader;
