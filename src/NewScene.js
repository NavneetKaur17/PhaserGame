import Phaser from 'phaser';


class NewScene extends Phaser.Scene {

  constructor(config) {
    super('NewScene');
    this.config = config;
  }

  create() {
    this.add.image(0, 0, 'NavScene').setOrigin(0);
    this.scene.start('PlayScene');
  }
}

export default NewScene;