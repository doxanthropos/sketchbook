var gamePlayState = new Phaser.Class({
  // Define scenes
  Extends: Phaser.Scene,
  initialize:
  function GamePlay(){
    Phaser.Scene.call(this, {key: 'GamePlay'});
  },
  preload: function(){
    // Preload images for this state
  },
  create: function(){
    // create objects
    console.log("GamePlay");
  },
  update: function(){
    // Update objects and variables
  }
});

// Add scene to list of scenes
myGame.scenes.push(gamePlayState);
