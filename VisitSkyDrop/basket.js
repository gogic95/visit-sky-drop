class Basket{
    constructor (x, w){
        this.x = x;
        this.w = w;
        this.h = 50;
        this.y = height - this.h;
    }

    show(){
        rectMode(CENTER);
        fill('red');
        rect (this.x , this.y, this.w, this.h);
        noFill();
    }
}