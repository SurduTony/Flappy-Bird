import { TextureLoader } from "./textureLoader.js";

export var MenuState = {
    gameover: 0
}

export class MenuManager {
    constructor() {
        this.currState;
    }

    draw() {
        this.#drawDeathMenu();
    }

    #drawDeathMenu() {
        let width = TextureLoader.gameOverImage.width * 2;
        let height = TextureLoader.gameOverImage.height * 2;

        ctx.drawImage(TextureLoader.gameOverImage, canvas.width/3, canvas.height/3, width, height);
    }
}