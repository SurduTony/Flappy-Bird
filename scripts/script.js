import {TextureLoader} from "./textureLoader.js";
import {Bird} from "./bird.js";
import {Pipe} from "./pipe.js";

var score, highScore;
var scoreLabel, highScoreLabel;

var bird;

var pipes = [];

// sounds
var wingSound = new Audio("./sounds/wing.ogg");
var pointSound = new Audio("./sounds/point.ogg");
var hitSound = new Audio("./sounds/hit.ogg");
var deathSound = new Audio("./sounds/die.ogg");

start();

function start() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    TextureLoader.loadTextures();

    scoreLabel = document.getElementById("score");
    highScoreLabel = document.getElementById("highScore");

    canvas.width = 1000;
    canvas.height = 600;

    score = 0;
    highScore = 0;

    bird = new Bird(200, canvas.height/2);

    // keyboard input
    addEventListener("keypress", keyInput, false);

    // spawn pipes
    setInterval(function(){pipes.push(new Pipe(canvas.width))}, 1100);

    setInterval(gameLoop, 5);
}

function restart() {
    bird.x = 200;
    bird.y = canvas.height/2;
    pipes = [];

    score = 0;
}

function keyInput(event) {
    switch (event.key) {
        case ' ':
            bird.flap();
            wingSound.play();
        break;
    }
}

function gameLoop() {
    update();
    draw();
}

function update() {
    bird.update();

    for (let i = 0; i < pipes.length; i++) {
        pipes[i].update();
    }

    // delete pipes outside the screen
    for (let i = pipes.length-1; i >= 0; i--) {
        if (pipes[i].x < -200) {
            delete(pipes[i]);
            pipes.splice(i, 1);
        }
    }

    // collision with pipes
    for (let i = 0; i < pipes.length; i++) {
        if (bird.x + bird.size > pipes[i].x && bird.x - bird.size < pipes[i].x + pipes[i].size && 
            (bird.y - bird.size < pipes[i].y || bird.y + bird.size > pipes[i].y + pipes[i].gap + 5)) {
                hitSound.play();
                deathSound.play();

                // calculate highscore
                if (score > highScore) {
                    highScore = score;
                    highScoreLabel.innerHTML = highScore;
                }

                restart();
        }
    }

    // increase score
    for (let i = 0; i < pipes.length; i++) {
        if (pipes[i].isPassed == false && bird.x > pipes[i].x + pipes[i].size) {
            pipes[i].isPassed = true;
            score++;
            pointSound.play();
            break;
        }
    }
}

function draw() {
    // draw background
    ctx.drawImage(TextureLoader.backgroundImage, 0, 0, canvas.width/3, canvas.height);
    ctx.drawImage(TextureLoader.backgroundImage, canvas.width/3-1, 0, canvas.width/3, canvas.height);
    ctx.drawImage(TextureLoader.backgroundImage, 2*canvas.width/3-2, 0, canvas.width/3+2, canvas.height);

    for (let i = 0; i < pipes.length; i++) {
        pipes[i].draw();
    }

    bird.draw();

    scoreLabel.innerHTML = score;
}