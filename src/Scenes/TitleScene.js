import Phaser from 'phaser';
import config from '../config/config';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    // Setting background to full width and height
    const image = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'bg-1');
    const scaleX = this.cameras.main.width / image.width;
    const scaleY = this.cameras.main.height / image.height;
    const scale = Math.max(scaleX, scaleY);
    image.setScale(scale).setScrollFactor(1);

    this.model = this.sys.game.globals.model;

    this.model = this.sys.game.globals.model;

  }

  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(config.width / 2, config.height / 2 - offset * 100,
        config.width, config.height),
    );
  }

  centerButtonText = (gameText, gameButton) => {
    Phaser.Display.Align.In.Center(
      gameText,
      gameButton,
    );
  }
}