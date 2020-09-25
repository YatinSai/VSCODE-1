var car, wall;
var speed, weight;
var x = 0;
var die = 0;

function setup() {
    createCanvas(1600, 400);
    speed = random(55, 90)
    weight = random(400, 1500)

    car = createSprite(50, 200, 50, 50)
    if (frameCount % 100 === 0) {
        car.velocityX = speed
    }
    wall = createSprite(1500, 200, 60, 200)
    if (car.collide(wall)) {
        car.velocity = 0
        wall.shapeColor = "red"
    }
    if (car.isTouching(wall)) {
        die = 0.5 * weight * speed * speed
    }
    text(die, 200, 200);
}

function draw() {
    background("black")

    drawSprites();
}