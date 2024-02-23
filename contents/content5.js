import { Position } from "../position.js";

const CENTER = 'c';
const LEFT = 'l';
const RIGHT = 'r';
const UP = 'u';
const DOWN = 'd';



export class Content5 {
    constructor (){
        this.positions = [];
        this.positions[0] = new Position({
            stdX : CENTER,
            stdY : DOWN, 
            relX  : 0.5,
            relY : 0,
            x_ : 0,
            y_ : 50,
            relW : 0,
            relH : 0.3,
            w : 100,
            h : 0,
            color : `#550000`,
        });
    }
    
    resize(w, h) {
        this.stageWidth = w;
        this.stageHeight = h;
        
        for(let i=0; i<this.positions.length; i++) {
            this.positions[i].resize(w, h);
        }
    }
    
    animate(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.positions[0].color;
        ctx.fillRect(this.positions[0].x, this.positions[0].y, this.positions[0].w, this.positions[0].h);
        ctx.restore();
    }
}