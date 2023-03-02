const airbnb = 'assets/airbnb.png';
const bookvisit = 'assets/bookvisit.jpeg';
const booking = 'assets/booking.png';
const citybreak = 'assets/citybreak.png';
const iticket = 'assets/iticket.jpg';
const visit = 'assets/visit.png';
const balko = 'assets/balko.jpg';


class Logo {
    constructor(x, y, logoNumber){
        this.x = x;
        this.y = y;
        this.r = 16
        switch(logoNumber){
            case 1: {this.picture = loadImage(airbnb), this.points = -100, this.picHeight = 100, this.picWidth = 100}break;
            case 2: {this.picture = loadImage(bookvisit), this.points = 100, this.picHeight = 100, this.picWidth = 100}break;
            case 3: {this.picture = loadImage(booking), this.points = -200, this.picHeight = 100, this.picWidth = 100}break;
            case 4: {this.picture = loadImage(citybreak), this.points = 100, this.picHeight = 70, this.picWidth = 100}break;
            case 5: {this.picture = loadImage(iticket), this.points = 100, this.picHeight = 50, this.picWidth = 100}break;
            case 6: {this.picture = loadImage(visit), this.points = 300, this.picHeight = 100, this.picWidth = 100}break;
            case 7: {this.picture = loadImage(balko), this.points = Math.round(random(-1000,1000)), this.picHeight = 125, this.picWidth = 125}break;
            default: return;
        }
    }

    show(){
        circle(this.x, this.y, this.r*2);
        imageMode(CENTER);
        fill(0,0,0,0);
        image(this.picture, this.x, this.y, this.picWidth, this.picHeight);
        noFill();

    }

    update(speed1){
        this.y = this.y + speed1;
        this.x = this.x;
    }
}