class SceneMain extends Phaser.Scene {
  constructor() {
    super("SceneMain");
  }
  create() {
    let map = this.make.tilemap({ key: "map" });
    let tileset = map.addTilesetImage("tileset1", "backgroundTiles");
    let background = map.createStaticLayer("Tile Layer 1", tileset, 0, 0);
    player = new Player({
      scene: this,
      x: game.config.width / 2,
      y: game.config.height / 2,
      key: "player",
    });

    cursors = this.input.keyboard.createCursorKeys();
  }

  update() {}
}
