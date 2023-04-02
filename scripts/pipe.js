import {TextureLoader} from "./textureLoader.js";

export class Pipe {
    constructor(x) {
        this.gap = 200; // gap between the top and bottom pipe

        this.x = x;
        this.y = Math.floor(Math.random() * (canvas.height-this.gap-100) + 50); // where the top pipe stops

        this.size = 150;
        this.speed = 2;

        this.isPassed = false;
    }

    update() {
        this.x -= this.speed;
    }

    draw() {
        ctx.fillStyle = "green";
        
        //ctx.fillRect(this.x, 0, this.size, this.y);
        //ctx.fillRect(this.x, this.y + this.gap, this.size, canvas.height);
        
        ctx.drawImage(TextureLoader.pipeTextureRotated, this.x, 0, this.size, this.y);

        ctx.drawImage(TextureLoader.pipeTexture, this.x, this.y + this.gap, this.size, canvas.height);
    }
}