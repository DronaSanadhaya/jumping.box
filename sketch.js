var canvas;
var music;

function preload() {
    music = loadSound("music.mp3");
}


function setup() {
    canvas = createCanvas(800, 600);

    //create 4 different surfaces
    surface1 = createSprite(100, 550, 200, 20);
    surface2 = createSprite(300, 550, 200, 20);
    surface3 = createSprite(500, 550, 200, 20);
    surface4 = createSprite(700, 550, 200, 20);
    surface1.shapeColor = "red";
    surface2.shapeColor = "green";
    surface3.shapeColor = "pink";
    surface4.shapeColor = "blue";

    box = createSprite(random(20, 750), 100, 40, 40);
    box.shapeColor = "red";
    box.velocityX = 5
    box.velocityY = 9

}

function draw() {
    background(rgb(169, 169, 169));
    drawSprites();
    edges = createEdgeSprites()
    box.bounceOff(edges);
    //create edgeSprite
    if (box.isTouching(surface1) && box.bounceOff(surface1)) {
        box.shapeColor = "red";
    }
    if (box.isTouching(surface2) && box.bounceOff(surface2)) {
        box.shapeColor = "green";
    }
    if (box.isTouching(surface3) && box.bounceOff(surface3)) {
        box.shapeColor = "pink";
        box.velocity.x=0;
        box.velocity.y=0;
    }
    if (box.isTouching(surface4) && box.bounceOff(surface4)) {
        box.shapeColor = "blue";
    }

    //add condition to check if box touching surface and make it box
}
