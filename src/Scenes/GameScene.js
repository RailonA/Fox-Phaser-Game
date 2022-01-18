/* eslint-disable no-underscore-dangle */
import Phaser from 'phaser';
import { GAME_HEIGHT, GAME_WIDTH } from '../config/const-variable';

import Player from '../Entities/Player';
import Background from '../Entities/Background';

let platforms;

const GameScene = class extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
  // map tiles
  this.load.image('tiles', 'assets/Background/spritesheet.png');
        
  // map in json format
  this.load.tilemapTiledJSON('map', 'assets/map.json');
  
  }

  create() {
            // create the map
            var map = this.make.tilemap({ key: 'map' });
        
            // first parameter is the name of the tilemap in tiled
            var tiles = map.addTilesetImage('spritesheet', 'tiles');
            
            // creating the layers
            var grass = map.createStaticLayer('Grass', tiles, 0, 0);
            var obstacles = map.createStaticLayer('Obstacles', tiles, 0, 0);
            
            // make all tiles in obstacles collidable
            obstacles.setCollisionByExclusion([-1]);
            
    // platforms = this.physics.add.staticGroup();

    // this.cameras.main.setBounds(0, 0, GAME_WIDTH * 100, GAME_HEIGHT).setName('main');
    // platforms = this.physics.add.staticGroup();

    // const mainWidth = this.cameras.main._bounds.width;
    // for (let width = 0; width < mainWidth; width += 2048) {
    //   platforms.create(width, GAME_HEIGHT, 'ground').refreshBody();
    // }

    // this.physics.add.collider(this.player, platforms);
    // platforms = this.physics.add.staticGroup();

    // this.anims.create({
    //   key: 'explosion',
    //   frames: this.anims.generateFrameNumbers('sprExplosion', { start: 0, end: 6 }),
    //   frameRate: 10,
    // });

    // this.lifes = this.add.image(20, 20, 'sprLifes').setScale(1.6);

    // this.playerScore = this.add.text(40, 60, 'Score: 0', {
    //   fontFamily: 'monospace',
    //   fontSize: 30,
    //   color: '#fff',
    //   fontStyle: 'bold',
    // });

    this.player.setScale(1.0);

    // this.sfx = {
    //   explosions: [
    //     this.sound.add('sndExplode0'),
    //     this.sound.add('sndExplode1'),
    //   ],
    //   laser: this.sound.add('sndLaser'),
    // };

    // this.keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    // this.keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    // this.keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    // this.keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    // this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    // this.keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

    // this.enemies = this.add.group();
    // this.enemyLasers = this.add.group();
    // this.playerLasers = this.add.group();

    // this.load.spritesheet('sprEnemy2', 'assets/content/enemyUFO.png', {
    //   frameWidth: 16,
    //   frameHeight: 16,
    // });



    // this.physics.add.overlap(this.player, this.enemyLasers, (player, laser) => {
    //   if (!player.getData('isDead')
    //       && !laser.getData('isDead')) {
    //     player.explode(false);
    //     player.onDestroy();
    //   }
    // });
  }

  updateScore() {
    let { score } = this.sys.game.globals.model;
    score += 10;
    this.sys.game.globals.model.score = score;
  }

  update() {

  }

  getEnemiesByType(type) {

  }
};

export default GameScene;