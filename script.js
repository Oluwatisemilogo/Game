"use strict";

let magicNumber = Math.trunc(Math.random() * 50) + 1;
let tries = 10;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;

  //When there is no number
  if (!guess) {
    document.querySelector(".feedback").textContent = "Input a number!";
  }

  //When the player wins
  else if (guess == magicNumber) {
    document.querySelector(".feedback").textContent =
      "You guessed the magic number!";
    document.querySelector(".number").textContent = magicNumber;

    //css manipulation
    document.querySelector("body").style.backgroundColor = "rgb(214, 188, 238)";

    document.querySelector(".check").style.display = "none";
    document.querySelector(".guess").style.display = "none";

    if (tries > highscore) {
      highscore = tries;
      document.querySelector(".high").textContent = highscore;
    }
  }

  //When the player loses
  else if (guess !== magicNumber) {
    if (tries > 1) {
      document.querySelector(".feedback").textContent =
        guess > magicNumber ? "Too high!" : "Too low!";
      tries--;
      document.querySelector(".tries").textContent = tries;
    } else {
      document.querySelector(".feedback").textContent = "You lost the game";
      document.querySelector(".tries").textContent = 0;
    }
  }
});

document.querySelector(".reset").addEventListener("click", function () {
  tries = 10;
  magicNumber = Math.trunc(Math.random() * 50) + 1;
  document.querySelector(".tries").textContent = tries;
  document.querySelector(".number").textContent = "??";
  document.querySelector(".feedback").textContent = "Start guessing...";
  document.querySelector(".guess").value = " ";
  document.querySelector("body").style.backgroundColor = "rgb(217, 234, 249)";
  document.querySelector(".check").style.display = "";
  document.querySelector(".guess").style.display = "";
});

//USE ENTER IN PLACE OF CHECK

// document.addEventListener('keydown', function (e) {
//   console.log(e.key);

//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closemodal();
//   }
// });
