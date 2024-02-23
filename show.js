import { Slide } from "./slide.js";

export class Show {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
        
        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

        this.page = 0;

        this.totalPage = 5;
        this.slide = new Slide(this.page);
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
    
        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);

        this.slide.resize(this.stageWidth, this.stageHeight);
    }    
    
    animate() {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageWidth);

        this.slide.animate(this.ctx);
    }

    nextPage() {
        this.page += this.page < this.totalPage ? 1 : 0;
        this.slide.changeNum(this.page);
    }

    prevPage() {
        this.page += this.page > 0 ? -1 : 0;
        this.slide.changeNum(this.page);
    }
}