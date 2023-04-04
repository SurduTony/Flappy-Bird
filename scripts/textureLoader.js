
export class TextureLoader {
    static bird_downflap_texture;
    static bird_midflap_texture;
    static bird_upflap_texture;
    static pipeTexture;
    static pipeTextureRotated;
    static backgroundImage;
    static gameOverImage;
    static mainMenuImage;

    static loadTextures() {
        this.#loadBirdTextures();
        this.#loadPipeTextures();
        this.#loadBackground();
        this.#loadMenuTextures();
    }

    static #loadBirdTextures() {
        this.bird_upflap_texture = new Image();
        this.bird_upflap_texture.src = "./sprites/yellowbird-upflap.png";

        this.bird_midflap_texture = new Image();
        this.bird_midflap_texture.src = "./sprites/yellowbird-midflap.png";

        this.bird_downflap_texture = new Image();
        this.bird_downflap_texture.src = "./sprites/yellowbird-downflap.png";
    }

    static #loadPipeTextures() {
        this.pipeTexture = new Image();
        this.pipeTexture.src = "./sprites/pipe-green.png";

        this.pipeTextureRotated = new Image();
        this.pipeTextureRotated.src = "./sprites/pipe-green-rotated.png";
    }

    static #loadBackground() {
        this.backgroundImage = new Image();
        this.backgroundImage.src = "./sprites/background-day.png";
    }

    static #loadMenuTextures() {
        this.mainMenuImage = new Image();
        this.mainMenuImage.src = "./sprites/main-menu.jpg";

        this.gameOverImage = new Image();
        this.gameOverImage.src = "./sprites/gameover.png";
    }
}