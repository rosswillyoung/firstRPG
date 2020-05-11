let emitter, cursors, player;

let config = {
  width: 800,
  height: 800,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  scene: [SceneLoad, SceneMain],
};

let game = new Phaser.Game(config);
