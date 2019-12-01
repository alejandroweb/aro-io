import Phaser from 'phaser';
import BreakoutScene from './scene';

const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;

const config = {
  type: Phaser.AUTO,
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  scene: [BreakoutScene],
  physics: {
    default: 'arcade',
  },
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH,
    mode: Phaser.Scale.FIT,
  },
};

const breakoutGame = (el: string) => {
  return new Phaser.Game({ ...config, parent: el });
};

export default breakoutGame;
