$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(150,650,75,10) 
 createPlatform(350,600,75,10)
 createPlatform(500,500,75,10)
createPlatform(700,400,75,10)
createPlatform(900,300,75,10)
createPlatform(1100,200,50,15)
createPlatform(1300,150,75,10)




    // TODO 3 - Create Collectables
createCollectable("diamond",1300,100,0.5,0.7);
createCollectable("max",750,350,0.5,0.4);
createCollectable("database",375,550,0.5,0.6)


    
    // TODO 4 - Create Cannons
createCannon("bottom",425,700)
createCannon("bottom",800,750 )
createCannon("right",680,550)
createCannon("bottom",1200,800)
}


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
)};
