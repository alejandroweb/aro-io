import React, { useEffect } from 'react';
import styles from './style.module.scss';
import { Props } from './type';

const GamePanel: React.SFC<Props> = ({ gameOver, onReset, powerOn, score }) => {
  useEffect(() => {
    if (!powerOn) {
      onReset();
    }
  }, [powerOn]);

  return (
    <div className={styles.container}>
      <div id="game-canvas" style={{ maxHeight: 360 }} />
      {gameOver ? (
        <div className={styles.gameOver}>
          <span className={styles.gameOverTitle}>Game Over</span>
          <span className={styles.gameOverScore}>{`Score: ${score}`}</span>
          <span className={styles.gameOverContinue} onClick={onReset}>
            Continue >>
          </span>
        </div>
      ) : null}
      {!powerOn ? <div className={styles.powerOff} /> : null}
    </div>
  );
};

export default React.memo(GamePanel);
