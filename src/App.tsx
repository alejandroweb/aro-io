import React, { useState } from 'react';
import FrontPanel from 'src/component/front-panel';
import useFontLoader from 'src/hook/font-loader';
import styles from './App.module.scss';
import BottomPanel from 'src/component/bottom-panel';
import Footer from 'src/component/footer';
import useWindowSize from 'src/hook/use-windows-size';

const MAX_FRAME_SIZE = 680;
const MIN_FRAME_SIZE = 560;
const MOBILE_BREACKPOINT = 480;

const App: React.FC = () => {
  const [ready] = useFontLoader();
  const [powerOn, setPowerOn] = useState(true);
  const {
    rectangle: [width, height],
  } = useWindowSize();

  const calculateSizes = () => {
    if (width < MOBILE_BREACKPOINT) {
      return ['100%', '100%'];
    } else {
      const newHeight = height * 0.78 > MAX_FRAME_SIZE ? MAX_FRAME_SIZE : height * 0.78;
      const minNewHeight = newHeight < MIN_FRAME_SIZE ? MIN_FRAME_SIZE : newHeight;
      const w = (5 * minNewHeight) / 3;

      return [`${w}px`, `${minNewHeight}px`];
    }
  };

  const [w, h] = calculateSizes();

  return (
    <div className={styles.app}>
      <div className={styles.frame} style={{ width: w, height: h }}>
        <FrontPanel onClickPower={setPowerOn} powerOn={powerOn} />
        <BottomPanel powerOn={powerOn} />
        <div className={styles.trim}>
          <span className={styles.trimBar} />
          <span className={styles.trimText}>EST. 1984</span>
          <span className={styles.trimBar} />
        </div>
      </div>
      <div className={styles.trapezoidContainer} style={{ width: w }}>
        <div className={styles.trapezoid} />
        <div className={styles.trapezoid} />
      </div>
      <Footer width={w} />
    </div>
  );
};

export default App;
