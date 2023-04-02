
export class TextureLoader {
    static bird_downflap_texture;
    static bird_midflap_texture;
    static bird_upflap_texture;
    static pipeTexture;
    static pipeTextureRotated;
    static backgroundImage;

    static loadTextures() {
        this.#loadBirdTexture();
        this.#loadPipeTexture();
        this.#loadBackground();
    }

    static #loadBirdTexture() {
        this.bird_upflap_texture = new Image();
        this.bird_upflap_texture.src = "./sprites/yellowbird-upflap.png";

        this.bird_midflap_texture = new Image();
        this.bird_midflap_texture.src = "./sprites/yellowbird-midflap.png";

        this.bird_downflap_texture = new Image();
        this.bird_downflap_texture.src = "./sprites/yellowbird-downflap.png";
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