export class Position {
    constructor({stdX, stdY, relX, relY, x_, y_, relW, relH, w, h, r, color}) {
        this.stdX = stdX; // l c r
        this.stdY = stdY; // u c d
        this.relX = relX; // 0 ~ 1
        this.relY = relY; // 0 ~ 1
        this.x_ = x_;
        this.y_ = y_;
        this.x;
        this.y;

        this.relW = relW; // 0 ~ 1
        this.relH = relH; // 0 ~ 1
        this.w = w;
        this.h = h;

        this.r = r;
        this.color = color;
    }
    
    resize(w, h) {
        this.stageWidth = w;
        this.stageHeight = h;

        this.relToAbs();
    }

    relToAbs() {

        if(this.relW != 0) this.w = this.stageWidth * this.relW;
        if(this.relH != 0) this.h = this.stageHeight * this.relH;

        if(this.relX != 0) {
            switch(this.stdX) {
                case 'l':
                    this.x = this.stageWidth * this.relX;
                    break;
                case 'c':
                    this.x = this.stageWidth * this.relX - this.w / 2;
                    break;
                case 'r':
                    this.x = this.stageWidth * (1 - this.relX) - this.w;
                    break;
            }
        } else {
            switch(this.stdX) {
                case 'l':
                    break;
                case 'c':
                    this.x -= this.w / 2;
                    break;
                case 'r':
                    this.x = this.stageWidth - this.w - this.x_;
                    break;
            }
        }

        if(this.relY != 0) {
            switch(this.stdY) {
                case 'u':
                    this.y = this.stageHeight * this.relY;
                    break;
                case 'c':
                    this.y = this.stageHeight * this.relY - this.h / 2;
                    break;
                case 'd':
                    this.y = this.stageHeight * (1 - this.relY) - this.h;
                    break;
            }
        } else {
            switch(this.stdY) {
                case 'u':
                    break;
                case 'c':
                    this.y -= this.h / 2;
                    break;
                case 'd':
                    this.y = this.stageHeight - this.h - this.y_;
                    break;
            }
        }
    }
}