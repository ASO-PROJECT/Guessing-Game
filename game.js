// Declare min and max values
const min = 1,
  max = 10;
// Generate a random number between 1 and 10
let n = Math.floor(Math.random() * (max - min + 1) + min);
console.log(n);

const generateRandom = (min, max) => {
  n = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(n);
  return n;
};
// generateRandom(min, max);
// Declare score and high score values
let score = 10,
  highScore = 0;
// Declare number of attempts, entred number and running state
let tries = 0,
  input,
  running = true;

// Create display msg function
const displayMessage = (message) => {
  // Display the msg
  document.getElementById("message").innerHTML = message;
};

// Declare check button
const btn = document.getElementById("check");

// Reset the game
const reset = () => {
  input = document.getElementById("guess");
  input.value = null;
  // Update the score
  document.getElementById("score").innerHTML = 10;
  generateRandom(min, max);
  displayMessage("Start guessing...");
};

// Check the running state
// while (running) {

// Check the the guessed number
btn.addEventListener("click", () => {
  // Enter the guessed number
  // input = prompt("Guess number between " + min + " and " + max);
  // console.log(typeof input, input);
  // input = Number(input);
  input = document.getElementById("guess").value;
  console.log(typeof input, input);

  // Check if the input is a number
  // if (isNaN(input)) {
  //   // alert("Enter a valid number");
  // }
  if (!input) {
    displayMessage("⚠ Enter a valid number");
  }
  // Check if the input is between min and max
  else if (input < min || input > max) {
    // alert("Enter a number between " + min + " and " + max);
    displayMessage("⚠ Enter a number between 1 and 10");
  } else {
    // Increment the number of attempts
    tries++;

    // Check if the guess is higher than random number
    if (input > n) {
      // alert("Too high! Try again");
      displayMessage("Too high 📈! Try again");
      // Update the score
      score -= 2;
      // Update the score
      document.getElementById("score").innerHTML = score;
    }
    // Check if the guess is lower than random number
    else if (input < n) {
      // alert("Too low! Try again");
      displayMessage("Too low 📉! Try again");
      // Update the score
      score -= 2;
      // Update the score
      document.getElementById("score").innerHTML = score;
    }
    // Check if the guess is equal to random number
    else {
      // alert(
      //   "Congrats! You got it! " + n + " It took you " + tries + " attempts"
      // );
      displayMessage(
        "Congrats! You got it! " + n + " It took you " + tries + " attempts"
      );

      // Update the high score
      if (score > highScore) {
        highScore = score;
        // Update the high score
        document.getElementById("highscore").innerHTML = highScore;
      }

      // Reset the game
      // running = false;
    }
  }
});
// }
