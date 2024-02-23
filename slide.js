import { Content0 } from "./contents/content0.js";
import { Content1 } from "./contents/content1.js";
import { Content2 } from "./contents/content2.js";
import { Content3 } from "./contents/content3.js";
import { Content4 } from "./contents/content4.js";
import { Content5 } from "./contents/content5.js";

export class Slide {
    constructor(num) {
        this.num = num

        this.contents = [];
        this.contents[0] = new Content0();
        this.contents[1] = new Content1();
        this.contents[2] = new Content2();
        this.contents[3] = new Content3();
        this.contents[4] = new Content4();
        this.contents[5] = new Content5();
    }

    resize(w, h) {
        this.stageWidth = w;
        this.stageHeight = h;

        for(let i=0; i<this.contents.length; i++) {
            this.contents[i].resize(w, h);
        }

    }
    
    animate(ctx) {
        this.contents[this.num].animate(ctx);
    }

    changeNum(n) {
        this.num = n;
    }
}