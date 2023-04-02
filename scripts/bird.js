import {TextureLoader} from "./textureLoader.js";
import {Animator} from "./animator.js";

export class Bird {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.yVelocity = 0;

        this.size = 20;

        this.animator = new Animator(
            [TextureLoader.bird_upflap_texture, TextureLoader.bird_midflap_texture, TextureLoader.bird_downflap_texture, TextureLoader.bird_midflap_texture]
        );
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

        /*
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
        */

        ctx.drawImage(this.animator.currFrame(), this.x-this.size-10, this.y-this.size, this.size*3, this.size*2);
    }

    flap() {
        this.yVelocity = -4.5;
    }
}