let logo;
let basket;

function setup(){
  createCanvas(1500,600);
  logo = new Logo(100, 100);
  basket = new Basket(width/2, 100);


  basketImg = loadImage('assets/basket.png');
}

function draw() {
  background(220);
  logo.show();
  logo.update();

  basket.x = mouseX;
  basket.show();

  imageMode(CENTER);
  image(basketImg, mouseX, height - 80, 120, 140);

  
}

document.addEventListener('loaded', function() {
  setup();
});