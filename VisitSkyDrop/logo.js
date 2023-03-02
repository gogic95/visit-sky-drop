const airbnb = 'assets/airbnb.png';
const bookvisit = 'assets/bookvisit.jpeg';
const booking = 'assets/booking.png';
const citybreak = 'assets/citybreak.png';
const iticket = 'assets/iticket.jpg';
const visit = 'assets/visit.png';


class Logo {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    show(){
        circle(this.x, this.y, 32)
    }

    update(){
        this.y = this.y + 1;
        this.x = this.x;
    }
}