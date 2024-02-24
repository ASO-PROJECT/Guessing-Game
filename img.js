var answer;
const thinker = [
  "img/ng.jpg",
  "img/bengio.jpg",
  "img/lecun.jpg",
  "img/hassabis.jpg",
  "img/hinton.jpg",
  "img/li.jpg",
];
// console.log(thinker[0])
const img = document.getElementById("image");
let score = 0,
  highScore = 0;
var index;

const randomImage = () => {
  if (score > highScore) {
    highScore = score;
    // Update the high score
    document.getElementById("highscore").innerHTML = highScore;
  }
  index = Math.floor(Math.random() * thinker.length);
  img.src = thinker[index];
};

const ng = () => {
  if (index == 0) {
    score++;
  } else {
    score = 0;
  }

  document.getElementById("score").innerHTML = score;
  return randomImage();
};

const bengio = () => {
  if (index == 1) {
    score++;
  } else {
    score = 0;
  }
  document.getElementById("score").innerHTML = score;
  return randomImage();
};

const lecun = () => {
  if (index == 2) {
    score++;
  } else {
    score = 0;
  }
  document.getElementById("score").innerHTML = score;
  return randomImage();
};

const hassabis = () => {
  if (index == 3) {
    score++;
  } else {
    score = 0;
  }
  document.getElementById("score").innerHTML = score;
  return randomImage();
};

const hinton = () => {
  if (index == 4) {
    score++;
  } else {
    score = 0;
  }
  document.getElementById("score").innerHTML = score;
  return randomImage();
};

const li = () => {
  if (index == 5) {
    score++;
  } else {
    score = 0;
  }
  document.getElementById("score").innerHTML = score;
  return randomImage();
};
