$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

// createPlatform




  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(237, 237, 237)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
   createPlatform(200, 650, 170, 50, "yellow");
   createPlatform(190, 450, 170, 50, "yellow");
   createPlatform(420, 550, 170, 50, "yellow");
   createPlatform(630, 465, 170, 50, "yellow");
   createPlatform(850, 358, 170, 50, "yellow");
   createPlatform(760, 600, 170, 50, "yellow");
   createPlatform(550, 700, 170, 50, "yellow");
   createPlatform(970, 465, 170, 50, "yellow");
   createPlatform(1200, 400, 170, 50, "yellow");
   createPlatform(1150, 600, 170, 50, "yellow");
   createPlatform(940, 700, 170, 50, "yellow");

    // TODO 3 - Create Collectables
   createCollectable("steve", 1350, 50);
   createCollectable("diamond", 200, 170, 0.5, 0.7);




    
    // Cannons
   
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
