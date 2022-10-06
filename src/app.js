/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  window.genCard = function() {
    const suit = ["♥", "♠", "♣", "♦"];
    const numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];

    function randomCard() {
      let randomSuit = suit[Math.floor(Math.random() * suit.length)];
      let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

      document.querySelector(".icono").innerHTML = randomSuit;
      document.querySelector(".cardContentContainer").innerHTML = randomNumber;
      document.querySelector(".icono2").innerHTML = randomSuit;

      if (randomSuit == "♥" || randomSuit == "♦") {
        document.querySelector("#cardcontainer").style.color = "red";
      } else if (randomSuit == "♠" || randomSuit == "♣") {
        document.querySelector("#cardcontainer").style.color = "black";
      }
    }

    randomCard();
  };

  window.genCard();
};
