export class Animator {
    constructor(images) {
        this.images = images;
        this.index = 0;

        setInterval(this.nextFrame.bind(this), 100);
    }

    currFrame() {
        return this.images[this.index];
    }

    nextFrame() {
        this.index++;
        if (this.index >= this.images.length)
            this.index = 0;
    }
}