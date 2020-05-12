class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.key);
    config.scene.add.existing(this);
    config.scene.physics.world.enable(this);
    // let WDown = config.scene.input.keyboard.addKey("W");
    // WDown.on("down", (e) => {
    //   //   this.body.setVelocityX();
    //   this.body.setVelocityY(-100);
    //   //   this.anims.play("right", true);
    // });
    config.scene.anims.create({
      key: "idle",
      frames: config.scene.anims.generateFrameNumbers("player", {
        start: 0,
        end: 0,
      }),
      frameRate: 1,
      repeat: -1,
    });
    config.scene.anims.create({
      key: "down",
      frames: config.scene.anims.generateFrameNumbers("player", {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });
    config.scene.anims.create({
      key: "right",
      frames: config.scene.anims.generateFrameNumbers("player", {
        start: 17,
        end: 20,
      }),
      frameRate: 10,
      repeat: -1,
    });
    config.scene.anims.create({
      key: "left",
      frames: config.scene.anims.generateFrameNumbers("player", {
        start: 51,
        end: 54,
      }),
      frameRate: 10,
      repeat: -1,
    });
    config.scene.anims.create({
      key: "up",
      frames: config.scene.anims.generateFrameNumbers("player", {
        start: 34,
        end: 37,
      }),
      frameRate: 10,
      repeat: -1,
    });
    config.scene.input.keyboard.on("keydown-" + "W", (e) => {
      this.body.setVelocityY(-100);
      this.anims.play("up", true);
    });
    config.scene.input.keyboard.on("keyup-" + "W", (e) => {
      this.body.setVelocityY(0);
      this.anims.play("idle", true);
    });
    config.scene.input.keyboard.on("keydown-" + "S", (e) => {
      this.body.setVelocityY(100);
      this.anims.play("down", true);
    });
    config.scene.input.keyboard.on("keyup-" + "S", (e) => {
      this.body.setVelocityY(0);
      this.anims.play("idle", true);
    });
    config.scene.input.keyboard.on("keydown-" + "A", (e) => {
      this.body.setVelocityX(-100);
      this.anims.play("left", true);
    });
    config.scene.input.keyboard.on("keyup-" + "A", (e) => {
      this.body.setVelocityX(0);
      this.anims.play("idle", true);
    });
    config.scene.input.keyboard.on("keydown-" + "D", (e) => {
      this.body.setVelocityX(100);
      this.anims.play("right", true);
    });
    config.scene.input.keyboard.on("keyup-" + "D", (e) => {
      this.body.setVelocityX(0);
      this.anims.play("idle", true);
    });
  }
}
