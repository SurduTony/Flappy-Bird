import { TextureLoader } from "./textureLoader.js";

export var MenuState = {
    mainMenu: 0,
    gameover: 1
}

export class MenuManager {
    constructor() {
        this.currState;
    }

    draw() {
        switch (this.currState) {
            case MenuState.mainMenu:
                this.#drawMainMenu();
            break;

            case MenuState.gameover:
                this.#drawDeathMenu();
            break;
        }
    }

    #drawMainMenu() {
        ctx.drawImage(TextureLoader.mainMenuImage, 0, 0, canvas.width, canvas.height);
    }

    #drawDeathMenu() {
        let width = TextureLoader.gameOverImage.width * 2;
        let height = TextureLoader.gameOverImage.height * 2;

        ctx.drawImage(TextureLoader.gameOverImage, canvas.width/3, canvas.height/3, width, height);
    }
}