import { buildTargets } from "../constants";
import Player from '../sprites/Player';

export class MainScene extends Phaser.Scene {
  
  
  private phaserSprite: Phaser.GameObjects.Sprite;
  
    player: Phaser.Physics.Arcade.Sprite;
    map:  Phaser.Tilemaps.Tilemap;
    tiles: Phaser.Tilemaps.Tileset;
    backgroundLayer: Phaser.Tilemaps.StaticTilemapLayer;
    blockedLayer: Phaser.Tilemaps.StaticTilemapLayer;
    cursors: Phaser.Input.Keyboard.CursorKeys;

    constructor() {
      super({
        key: "MainScene"
      });
    }
  
    preload(): void {
      this.load.tilemapTiledJSON('level1', 'assets/level1.json');
      this.load.spritesheet('tilesheet16x16', 'assets/tilesheet16x16.png', { frameHeight: 16, frameWidth: 16});
    }
  
    create(): void {
      this.map = this.make.tilemap({key: 'level1'});
      this.tiles = this.map.addTilesetImage('tilesheet16x16');
      this.backgroundLayer = this.map.createStaticLayer('ground', this.tiles, 0, 0);
      this.blockedLayer = this.map.createStaticLayer('blocked', this.tiles, 0, 0);
      this.blockedLayer.setCollisionByExclusion([-1]);
      this.cursors = this.input.keyboard.createCursorKeys();
      this.createPlayer();
      this.physics.add.collider(this.player, this.blockedLayer);
      this.cameras.main.startFollow(this.player);
    }

    createPlayer () {
      this.player = new Player(this, 50, 50);
    }
  
    update () {
      this.player.update(this.cursors);
    }
  
  }
  