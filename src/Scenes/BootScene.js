import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('bg-1', './assets/Background/blueBackground.png');
  }

  create() {
    this.scene.start('Preloader');
  }
}
