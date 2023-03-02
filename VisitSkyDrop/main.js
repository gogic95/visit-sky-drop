let logos = [];
let basket;
let brojac = 1;
let score = 0;

function setup(){
  createCanvas(1500,600);
  
  logo = new Logo(100, 100);
  basket = new Basket(width/2, 100);


  basketImg = loadImage('assets/basket.png');
}

function draw() {
  background(220);
  brojac++;
  if (brojac % 50 == 0){
    logos.push( new Logo(random(55, width-55), random(-100, -20), Math.floor(random(1,7))));
  }

  for (let logo of logos){
    logo.show();
    logo.update();
    
  }

  for (let i = logos.length - 1; i >= 0; i-- ){

    if(basket.catches(logos[i])){
      score += logos[i].points;
      //console.log(score);
      logos.splice(i,1);
    }
    else if(logos[i].y > height + logos[i].r){
      logos.splice(i,1);
    }
  }

  basket.x = mouseX;
  basket.show();


 
   imageMode(CENTER);
   image(basketImg, mouseX, height - 80, 120, 140);

  
}

document.addEventListener('loaded', function() {
  setup();
});