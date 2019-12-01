import { useEffect, useState } from 'react';
import breakoutGame from 'src/service/breakout-game';

const BRIK_VALUE = 5;

let currentScore = 0;
let currentLives = 3;
let game: Phaser.Game | null = null;

const useGameBreakout = (elId: string) => {
  const [gameOver, setGameOver] = useState(false);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);

  useEffect(() => {
    game = breakoutGame(elId);

    game.events.on('hitbrick', () => {
      currentScore += BRIK_VALUE;

      setScore(currentScore);
    });

    game.events.on('balllost', () => {
      currentLives -= 1;

      setLives(currentLives);

      if (currentLives === 0) {
        setGameOver(true);

        // @ts-ignore
        game.scene.keys.default.gameOver = true;
      }
    });
  }, []);

  const onReset = () => {
    if (game) {
      // @ts-ignore
      game.scene.keys.default.resetLevel();

      currentScore = 0;
      currentLives = 3;

      setLives(currentLives);
      setScore(currentScore);

      setGameOver(false);
    }
  };

  return { gameOver, lives, onReset, score };
};

export default useGameBreakout;
