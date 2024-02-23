import { Show } from "./show.js";

class App {
    constructor() {
        this.show = new Show();
    
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        document.addEventListener('pointerdown', this.onDown.bind(this), false);
        document.addEventListener('keydown', this.keyDown.bind(this), false);

        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.show.resize();
    }

    animate() {
        this.show.animate();

        requestAnimationFrame(this.animate.bind(this));
    }

    onDown(e) {
        this.show.nextPage();
    }

    keyDown(e) {
        switch(e.keyCode) {
            case 37:
                this.show.prevPage();
                break;
            case 39:
                this.show.nextPage();
                break;
        }
    }
    
}

window.onload = () => {
    new App();
}