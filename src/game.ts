import "phaser";
import { LoadScene } from "./scenes/load-scene";
import { MainScene } from "./scenes/main-scene";
declare const BUILD_TARGET: string;

// main game configuration
const config: GameConfig = {
    type: Phaser.AUTO,
    parent: "game",
    scene: [LoadScene, MainScene],
    zoom: 2.5,
    height: 320,
    width: 400,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 0 }
        }
    }
};

export class Game extends Phaser.Game {
    constructor(config: GameConfig) {
        super(config);
    }
}

window.addEventListener("load", () => {
    const game = new Game(config);
});
