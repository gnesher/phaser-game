import { buildTargets } from "../constants";

export class LoadScene extends Phaser.Scene {
  
  
  private phaserSprite: Phaser.GameObjects.Sprite;
  
    map:  Phaser.Tilemaps.Tilemap;
    tiles: Phaser.Tilemaps.Tileset;
    backgroundLayer: Phaser.Tilemaps.StaticTilemapLayer;
    blockedLayer: Phaser.Tilemaps.StaticTilemapLayer;

    constructor() {
      super({
        key: "Loader"
      });
    }
  
    preload(): void {
      this.load.tilemapTiledJSON('level1', 'assets/level1.json');
      this.load.spritesheet('tilesheet16x16', 'assets/tilesheet16x16.png', { frameHeight: 16, frameWidth: 16});
      this.load.multiatlas('player', 'assets/player.json', 'assets');
    }
  
    create(): void {
        this.scene.start('MainScene');
    }
  }
  