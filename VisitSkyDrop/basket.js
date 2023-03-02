class Basket{
    constructor (x, w){
        this.x = x;
        this.w = w;
        this.h = 50;
        this.y = height - this.h;
    }

    show(){
        rectMode(CENTER);
        //fill(0,0,0,0);
        stroke(0,0,0,0);
        rect (this.x , this.y, this.w, this.h);
        
    }

    catches (logo){
        if(logo.y + logo.r >= this.y && logo.x >= this.x - this.w/2 && logo.x <= this.x + this.w/2){
            return true;
        }
        return false;
    }
}