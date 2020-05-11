class SceneMain extends Phaser.Scene {
  constructor() {
    super("SceneMain");
  }
  create() {
    let map = this.make.tilemap({ key: "map" });
    let tileset = map.addTilesetImage("tileset1", "backgroundTiles");
    let background = map.createStaticLayer("Tile Layer 1", tileset, 0, 0);
    player = this.physics.add.sprite(
      game.config.width / 2,
      game.config.height / 2,
      "player"
    );
    this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNumbers("player", { start: 0, end: 0 }),
      frameRate: 1,
      repeat: -1,
    });
    this.anims.create({
      key: "down",
      frames: this.anims.generateFrameNumbers("player", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("player", { start: 17, end: 20 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("player", { start: 51, end: 54 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "up",
      frames: this.anims.generateFrameNumbers("player", { start: 34, end: 37 }),
      frameRate: 10,
      repeat: -1,
    });

    cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (cursors.right.isDown) {
      player.setVelocityX(100);
      player.anims.play("right", true);
    } else if (cursors.down.isDown) {
      player.setVelocityY(100);
      player.anims.play("down", true);
    } else if (cursors.up.isDown) {
      player.setVelocityY(-100);
      player.anims.play("up", true);
    } else if (cursors.left.isDown) {
      player.setVelocityX(-100);
      player.anims.play("left", true);
    } else {
      player.setVelocityX(0);
      player.setVelocityY(0);
      player.anims.play("idle", true);
    }
  }
}
