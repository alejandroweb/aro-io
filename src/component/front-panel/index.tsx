import React from 'react';
import Logo from 'src/component/logo';
import Polaroid from 'src/component/polaroid';
import PowerButton from 'src/component/power-button';
import styles from './style.module.scss';
import { Props } from './type';
import AudioPlayer from 'src/component/audio-player';

const FrontPanel: React.SFC<Props> = ({ onClickPower, powerOn }) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Logo />
      </div>
      <div className={styles.center}>
        <AudioPlayer powerOn={powerOn} />
      </div>
      <div className={styles.rightSide}>
        <Polaroid />
        <div className={styles.buttons}>
          <PowerButton onClick={onClickPower} powerOn={powerOn} />
        </div>
      </div>
    </div>
  );
};

export default FrontPanel;
