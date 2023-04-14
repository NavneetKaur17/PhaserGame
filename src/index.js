
import Phaser from "phaser";

import PlayScene from './PlayScene.js';
import MenuScene from './MenuScene.js';
import PreloadScene from './PreloadScene.js';
import ScoreScene from './ScoreScene.js';
import PauseScene from './PauseScene.js';


const WIDTH = 800;
const HEIGHT = 600;
const BIRD_POSITION = {x: WIDTH * 0.1, y: HEIGHT / 2 };

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
  startPosition: BIRD_POSITION
}

const Scenes = [PreloadScene, MenuScene, ScoreScene, PlayScene, PauseScene];
const createScene = Scene => new Scene(SHARED_CONFIG)
const initScenes = () => Scenes.map(createScene)

const config = {
  type: Phaser.AUTO,
  ...SHARED_CONFIG,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    }
  },

  scene: initScenes() 
}

new Phaser.Game(config);
