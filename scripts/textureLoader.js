
export class TextureLoader {
    static birdTexture;
    static pipeTexture;
    static pipeTextureRotated;
    static backgroundImage;

    static loadTextures() {
        this.#loadBirdTexture();
        this.#loadPipeTexture();
        this.#loadBackground();
    }

    static #loadBirdTexture() {
        this.birdTexture = new Image();
        this.birdTexture.src = "./sprites/yellowbird-midflap.png";
    }

    static #loadPipeTexture() {
        this.pipeTexture = new Image();
        this.pipeTexture.src = "./sprites/pipe-green.png";

        this.pipeTextureRotated = new Image();
        this.pipeTextureRotated.src = "./sprites/pipe-green-rotated.png";
    }

    static #loadBackground() {
        this.backgroundImage = new Image();
        this.backgroundImage.src = "./sprites/background-day.png";
    }
}