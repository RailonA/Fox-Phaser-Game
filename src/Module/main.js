import Phaser from 'phaser';
import config from '../config/config';
import BootScene from '../Scenes/BootScene';
import GuideScene from '../Scenes/GuideScene';
import OptionsScene from '../Scenes/OptionsScene';
import CreditsScene from '../Scenes/CreditsScene';
import PreloaderScene from '../Scenes/PreloaderScene';
import TitleScene from '../Scenes/TitleScene';
import Model from '../model';

/* eslint no-undef: "error" */
/* eslint import/no-unresolved: "error" */

/* eslint no-unused-vars: 2 */

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();

    this.globals = { model, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Guide', GuideScene);
    this.scene.start('Boot');
  }
};

// let game;
window.game = new Game();