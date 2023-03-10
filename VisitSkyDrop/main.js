let logos = [];
let basket;
let brojac = 1;
let score = 0;
let goodSound;
let badSound;
let counterSpan = document.getElementById('score_counter');
let alertSpan = document.getElementById('alertBox');
let balkoSpan = document.getElementById('balko');
let timerSpan = document.getElementById('timer_counter');
let startGameButton = document.getElementById('startGame');
let container = document.getElementById('myContainer');
let finalScore = document.getElementById('finalScore');
let restarGameButton = document.getElementById('restartGame');
const scoreSpan = document.getElementById('finalScoreSpan');
let speed1 = 5;
let timerDuration = 20; // In Seconds
let startGame = false;
let jockeImg = 'assets/jocke.jpg';
let thibaultImg = 'assets/thibault.jpg';
let adamImg = 'assets/adam.jpg';
let filipImg = 'assets/filip.jpg';
let jamesImg = 'assets/james.png';

function preload(){
  img = loadImage('assets/pozadina.jpg');
  
  soundFormats('wav','mp3');
  goodSound = loadSound('assets/dobarZvuk.wav');
  badSound = loadSound('assets/losZvuk.mp3');
  basketImg = loadImage('assets/basket.png');

}

function setup(){
  startGameButton.addEventListener('click', () => {
    startGame = true;
    startGameButton.style.display = 'none';
    container.style.display = 'block';
    runTimer();
  });

  const canvas = createCanvas(1600,800);
  canvas.parent('myContainer');
  logo = new Logo(100, 100);
  basket = new Basket(width/2, 100);
}

const resetGame = () => {
  logos = [];
  brojac = 1;
  score = 0;

  updateScore(score);
  runTimer();
  loop();
}

function draw() {
  if (startGame) {
    imageMode(CENTER);
    image(img, width/2, height / 2);
    brojac++;
    if (brojac % 50 == 0){
      const randomNumber = Math.floor(random(1,8));
  
      if (randomNumber == 7){
        balkoAlert();
      }
      logos.push( new Logo(random(55, width-55), random(-100, -20), randomNumber));
    }
    
    speed1 = 5 + Math.round((score + 1)/ 300);
  
    for (let logo of logos){
      logo.show();
      logo.update(speed1);
    }
  
    for (let i = logos.length - 1; i >= 0; i-- ){
  
      if(basket.catches(logos[i])){
        score += logos[i].points;
        alert(logos[i].points, logos[i].x, logos[i].y);
        if (score < 0) {
          score = 0;
        }
        updateScore(score);
        if(logos[i].points > 0){
          goodSound.play();
        }else{
          badSound.play();
        }
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
}

const prizes = ['Dinner with GameDev pr0s! Team FA', '2 hours meeting with J4m3s or Th1b4ult', '5 min huddle with J0ck3'];

function gameEnd() {
  noLoop();

  const profileImg = document.getElementById('profile');
  const prizeText = document.getElementById('prizeText');
  const imgParent = document.getElementById('profileIconWrapper');
  
  if(imgParent.childNodes.length > 2){
    imgParent.removeChild(imgParent.childNodes[2]);
  }

  if(score < 1000){
    profileImg.src = adamImg;
    let secondImg = document.createElement('img');
    secondImg.src = filipImg;
    secondImg.classList.add('profile');
    imgParent.appendChild(secondImg);
    prizeText.innerText = prizes[0];  

  }
  else if(score >=1000 && score < 2000) {
    profileImg.src = thibaultImg;
    let secondImg = document.createElement('img');
    secondImg.src = jamesImg;
    secondImg.classList.add('profile');
    imgParent.appendChild(secondImg);
    prizeText.innerText = prizes[1];
  } 
  else {
    profileImg.src = jockeImg;
    prizeText.innerText = prizes[2];
  }

  scoreSpan.innerText = score;
  finalScore.style.display = 'flex';
}

function runTimer() {
  let duration = timerDuration;
  let timerInterval = setInterval(() => {
    duration--;
    timerSpan.innerText = duration;
    if (duration == 0) {
      clearInterval(timerInterval);
      gameEnd();
    }
  }, 1000);
}


function updateScore(score) {
  counterSpan.innerText = score;
}

function alert(score, x, y) {
  alertSpan.style.top = `${y - 100}px`;
  alertSpan.style.left = `${x - 100}px`;

  if (score < 0) {
    alertSpan.style.textShadow = '2px 2px 25px red';
    alertSpan.innerText = `${score}`;
  } else {
    alertSpan.style.textShadow = '2px 2px 25px green';
    alertSpan.innerText = `+${score}`;
  }

  alertSpan.classList.add('showAlert');
  setTimeout(() => {
    alertSpan.classList.remove('showAlert');
  }, 1000)
}

function balkoAlert() {
  balkoSpan.style.top = `${height / 2 - 200}px`;
  balkoSpan.style.left = `${width / 2 - 300}px`;
  balkoSpan.classList.add('showBalko');
  setTimeout(() => {
    balkoSpan.classList.remove('showBalko');
  }, 1000)
}

document.addEventListener('loaded', function() {
  setup();
});

restarGameButton.addEventListener('click', () => {
  finalScore.style.display = 'none';
  resetGame();
});