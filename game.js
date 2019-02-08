var Game = {
    
    init: function () {
        var bgCanvas = document.getElementById("bg-canvas");
        var fgCanvas = document.getElementById("fg-canvas");
        
        var canvas = {
            bgCanvas: bgCanvas,
            fgCanvas: fgCanvas,
            bgCtx: bgCanvas.getContext("2d"),
            fgCtx: fgCanvas.getContext("2d")
            
        };
    
        var backgroundMusic = new Audio("audio/stage1.js");
        backgroundMusic.loop = true;
        
        var spriteSheet = new Image();
        spriteSheet.src = "Mega.jpg";
        
        spriteSheet.addEventListener("load", function () {
            var spriteSheet = this;
            
            var data = {
                animationFrame: 0,
                spriteSheet: spriteSheet,
                canvas: canvas
            };
            
            backgroundMusic.play();
            
            Game.run(data);
            
        });
        
    },
    
    
    run: function (data) {
        var loop = function () {
            Game.input (data); //First, gets input.
            Game.update(data); //Then, updates the game.
            Game.render(data); //Finally, draws it to the screen.
            
            data.animationFrame++;
            //Adds animation frame every tick.
            
            window.requestAnimationFrame(loop);
        };
        
        loop();
        
    }
    
    
};