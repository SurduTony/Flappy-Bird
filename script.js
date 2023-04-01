var canvas, ctx;

var score;
var scoreLabel;

var bird;
var gravity;

var pipes = [];

function start() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    scoreLabel = document.getElementById("score");

    canvas.width = 1000;
    canvas.height = 600;

    score = 0;

    bird = new Bird(200, canvas.height/2);

    gravity = 0.2;

    // input
    addEventListener("keypress", keyInput, false);

    // spawn pipes
    setInterval(function(){pipes.push(new Pipe(canvas.width))}, 1500);

    setInterval(gameLoop, 10);
}

function restart() {
    bird = new Bird(200, canvas.height/2);
    pipes = [];

    score = 0;
}

function keyInput(event) {
    switch (event.key) {
        case ' ':
            bird.flap();
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
            (bird.y - bird.size < pipes[i].y || bird.y + bird.size > pipes[i].y + pipes[i].gap)) {
            restart();
        }
    }

    // increase score
    for (let i = 0; i < pipes.length; i++) {
        if (pipes[i].isPassed == false && bird.x > pipes[i].x + pipes[i].size) {
            pipes[i].isPassed = true;
            score++;
            break;
        }
    }
}

function draw() {
    // draw background
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < pipes.length; i++) {
        pipes[i].draw();
    }

    bird.draw();

    scoreLabel.innerHTML = score;
}

class Bird {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.yVelocity = 0;

        this.size = 20;
    }

    update() {
        // apply gravity
        this.yVelocity += gravity;

        // apply velocity
        this.y += this.yVelocity;

        // ground collision
        if (this.y > canvas.height - this.size) {
            this.y = canvas.height - this.size;
            this.yVelocity = 0;
        }
    }

    draw() {
        ctx.fillStyle = "white";

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    flap() {
        this.yVelocity = -6;
    }
}

class Pipe {
    constructor(x) {
        this.gap = 200; // gap between the top and bottom pipe

        this.x = x;
        this.y = Math.floor(Math.random() * (canvas.height-this.gap-100) + 50); // where the top pipe stops

        this.size = 150;
        this.speed = 3;

        this.isPassed = false;
    }

    update() {
        this.x -= this.speed;
    }

    draw() {
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, 0, this.size, this.y);

        ctx.fillRect(this.x, this.y + this.gap, this.size, canvas.height);
    }
}