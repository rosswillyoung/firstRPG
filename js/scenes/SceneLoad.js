class SceneLoad extends Phaser.Scene {
  constructor() {
    super("SceneLoad");
  }
  preload() {
    this.load.image("backgroundTiles", "assets/tilesets/Overworld.png");
    this.load.tilemapTiledJSON("map", "assets/tilemaps/level1.json");
    this.load.spritesheet("player", "assets/tilesets/character.png", {
      frameWidth: 16,
      frameHeight: 32,
    });
  }
  create() {
    this.scene.start("SceneMain");
  }
}
