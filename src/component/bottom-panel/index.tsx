import React from 'react';
import styles from './style.module.scss';
import Polaroid from 'src/component/polaroid';
import { Props } from './type';
import GamePanel from 'src/component/game-panel';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import useGameBreakout from 'src/hook/use-game-breakout';

const ICON_SIZE = 24;

const BottomPanel: React.SFC<Props> = ({ powerOn }) => {
  const { gameOver, lives, onReset, score } = useGameBreakout('game-canvas');

  return (
    <div className={styles.container}>
      <div className={`${styles.speakers} ${styles.speakersLeft}`}>
        <div className={`${styles.speaker} ${styles.speakerSmall}`} />
        <div className={`${styles.speaker} ${styles.speakerMedium}`} />
        <div className={`${styles.speaker} ${styles.speakerBass}`} />
      </div>
      <div className={styles.center}>
        <GamePanel gameOver={gameOver} onReset={onReset} powerOn={powerOn} score={score} />
        <Polaroid />
        <div className={styles.centerRightPanel}>
          <div className={styles.centerRightPanelLives}>
            <div className={styles.lives}>
              <FavoriteRoundedIcon
                htmlColor={powerOn && lives > 2 ? '#e93c3b' : '#181a21'}
                style={{ height: ICON_SIZE, marginTop: 4, width: ICON_SIZE }}
              />
              <FavoriteRoundedIcon
                htmlColor={powerOn && lives > 1 ? '#e93c3b' : '#181a21'}
                style={{ height: ICON_SIZE, marginTop: 8, width: ICON_SIZE }}
              />
              <FavoriteRoundedIcon
                htmlColor={powerOn && lives > 0 ? '#e93c3b' : '#181a21'}
                style={{ height: ICON_SIZE, marginTop: 8, width: ICON_SIZE }}
              />
            </div>
            <span className={`${styles.title} ${styles.titleTop}`}>Lives</span>
          </div>
          <div className={styles.centerRightPanelFooter}>
            <span className={styles.number}>{powerOn ? score : 0}</span>
            <span className={`${styles.title} ${styles.titleBottom}`}>Score</span>
          </div>
        </div>
      </div>
      <div className={styles.speakers}>
        <div className={`${styles.speaker} ${styles.speakerSmall}`} />
        <div className={`${styles.speaker} ${styles.speakerMedium}`} />
        <div className={`${styles.speaker} ${styles.speakerBass}`} />
      </div>
    </div>
  );
};

export default BottomPanel;
