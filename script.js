"use strict";
let points = 0;
let lives = 3;
window.addEventListener("load", ready);

function ready() {
  console.log("JavaScript kører");
  document.querySelector("#btn_start").addEventListener("click", startGame);
}

function startGame() {
  points = 0;
  lives = 3;
  document.querySelector("#start").classList.add("hidden");
  startAllAnimations();
  document
    .querySelector("#chicken_container")
    .addEventListener("mousedown", clickChicken);
  document
    .querySelector("#broccoli_container")
    .addEventListener("mousedown", clickBroccoli);
  document
    .querySelector("#shake_container")
    .addEventListener("mousedown", clickShake);
  document
    .querySelector("#pizza_container")
    .addEventListener("mousedown", clickPizza);
  document
    .querySelector("#burger_container")
    .addEventListener("mousedown", clickBurger);
  document
    .querySelector("#candy_container")
    .addEventListener("mousedown", clickCandy);

  document
    .querySelector("#chicken_container")
    .addEventListener("animationiteration", foodRestart);
  document
    .querySelector("#broccoli_container")
    .addEventListener("animationiteration", foodRestart);
  document
    .querySelector("#shake_container")
    .addEventListener("animationiteration", foodRestart);
  document
    .querySelector("#burger_container")
    .addEventListener("animationiteration", foodRestart);
  document
    .querySelector("#pizza_container")
    .addEventListener("animationiteration", foodRestart);
  document
    .querySelector("#candy_container")
    .addEventListener("animationiteration", foodRestart);
}

function startAllAnimations() {
  document.querySelector("#chicken_container").classList.add("chicken_falling");
  document
    .querySelector("#broccoli_container")
    .classList.add("broccoli_falling");
  document.querySelector("#shake_container").classList.add("shake_falling");
  document.querySelector("#pizza_container").classList.add("pizza_falling");
  document.querySelector("#burger_container").classList.add("burger_falling");
  document.querySelector("#candy_container").classList.add("candy_falling");
}

function clickChicken() {
  document
    .querySelector("#chicken_container")
    .removeEventListener("mousedown", clickChicken);
  document.querySelector("#chicken_container").classList.add("paused");
  document.querySelector("#chicken_sprite").classList.add("zoom_out");
  document
    .querySelector("#chicken_container")
    .addEventListener("animationend", chickenGone);
  increasePoint();
  document.querySelector("#godMadSound").play();
  document.querySelector("#godMadSound").currentTime = 0;
}

function chickenGone() {
  document
    .querySelector("#chicken_container")
    .removeEventListener("animationend", chickenGone);

  document.querySelector("#chicken_sprite").classList.remove("zoom_out");
  document.querySelector("#chicken_container").classList.remove("paused");

  document
    .querySelector("#chicken_container")
    .classList.remove("chicken_falling");
  document.querySelector("#chicken_container").offsetWidth;
  document.querySelector("#chicken_container").classList.add("chicken_falling");

  document
    .querySelector("#chicken_container")
    .addEventListener("mousedown", clickChicken);
}

function clickBroccoli() {
  document
    .querySelector("#broccoli_container")
    .removeEventListener("mousedown", clickBroccoli);
  document.querySelector("#broccoli_container").classList.add("paused");
  document.querySelector("#broccoli_sprite").classList.add("zoom_out");
  document
    .querySelector("#broccoli_container")
    .addEventListener("animationend", broccoliGone);
  increasePoint();
  document.querySelector("#godMadSound").play();
  document.querySelector("#godMadSound").currentTime = 0;
}

function broccoliGone() {
  document
    .querySelector("#broccoli_container")
    .removeEventListener("animationend", broccoliGone);

  document.querySelector("#broccoli_sprite").classList.remove("zoom_out");
  document.querySelector("#broccoli_container").classList.remove("paused");

  document
    .querySelector("#broccoli_container")
    .classList.remove("broccoli_falling");
  document.querySelector("#broccoli_container").offsetWidth;
  document
    .querySelector("#broccoli_container")
    .classList.add("broccoli_falling");

  document
    .querySelector("#broccoli_container")
    .addEventListener("mousedown", clickBroccoli);
}

function clickShake() {
  document
    .querySelector("#shake_container")
    .removeEventListener("mousedown", clickShake);
  document.querySelector("#shake_container").classList.add("paused");
  document.querySelector("#shake_sprite").classList.add("zoom_out");
  document
    .querySelector("#shake_container")
    .addEventListener("animationend", shakeGone);
  increasePoint();
  document.querySelector("#godMadSound").play();
  document.querySelector("#godMadSound").currentTime = 0;
}

function shakeGone() {
  document
    .querySelector("#shake_container")
    .removeEventListener("animationend", shakeGone);

  document.querySelector("#shake_sprite").classList.remove("zoom_out");
  document.querySelector("#shake_container").classList.remove("paused");

  document.querySelector("#shake_container").classList.remove("shake_falling");
  document.querySelector("#shake_container").offsetWidth;
  document.querySelector("#shake_container").classList.add("shake_falling");

  document
    .querySelector("#shake_container")
    .addEventListener("mousedown", clickShake);
}

function clickBurger() {
  document
    .querySelector("#burger_container")
    .removeEventListener("mousedown", clickBurger);
  document.querySelector("#burger_container").classList.add("paused");
  document.querySelector("#burger_sprite").classList.add("zoom_out");
  document
    .querySelector("#burger_container")
    .addEventListener("animationend", burgerGone);
  decreaseLives();
  decreasePoint();
  document.querySelector("#dårligMadSound").play();
  document.querySelector("#dårligMadSound").currentTime = 0;
}

function burgerGone() {
  document
    .querySelector("#burger_container")
    .removeEventListener("animationend", burgerGone);

  document.querySelector("#burger_sprite").classList.remove("zoom_out");
  document.querySelector("#burger_container").classList.remove("paused");

  document
    .querySelector("#burger_container")
    .classList.remove("burger_falling");
  document.querySelector("#burger_container").offsetWidth;
  document.querySelector("#burger_container").classList.add("burger_falling");

  document
    .querySelector("#burger_container")
    .addEventListener("mousedown", clickBurger);
}

function clickPizza() {
  document
    .querySelector("#pizza_container")
    .removeEventListener("mousedown", clickPizza);
  document.querySelector("#pizza_container").classList.add("paused");
  document.querySelector("#pizza_sprite").classList.add("zoom_out");
  document
    .querySelector("#pizza_container")
    .addEventListener("animationend", pizzaGone);
  decreaseLives();
  decreasePoint();
  document.querySelector("#dårligMadSound").play();
  document.querySelector("#dårligMadSound").currentTime = 0;
}

function pizzaGone() {
  document
    .querySelector("#pizza_container")
    .removeEventListener("animationend", pizzaGone);

  document.querySelector("#pizza_sprite").classList.remove("zoom_out");
  document.querySelector("#pizza_container").classList.remove("paused");

  document.querySelector("#pizza_container").classList.remove("pizza_falling");
  document.querySelector("#pizza_container").offsetWidth;
  document.querySelector("#pizza_container").classList.add("pizza_falling");

  document
    .querySelector("#pizza_container")
    .addEventListener("mousedown", clickPizza);
}

function clickCandy() {
  document
    .querySelector("#candy_container")
    .removeEventListener("mousedown", clickCandy);
  document.querySelector("#candy_container").classList.add("paused");
  document.querySelector("#candy_sprite").classList.add("zoom_out");
  document
    .querySelector("#candy_container")
    .addEventListener("animationend", candyGone);
  decreaseLives();
  decreasePoint();
  document.querySelector("#dårligMadSound").play();
  document.querySelector("#dårligMadSound").currentTime = 0;
}

function candyGone() {
  document
    .querySelector("#candy_container")
    .removeEventListener("animationend", candyGone);

  document.querySelector("#candy_sprite").classList.remove("zoom_out");
  document.querySelector("#candy_container").classList.remove("paused");

  document.querySelector("#candy_container").classList.remove("candy_falling");
  document.querySelector("#candy_container").offsetWidth;
  document.querySelector("#candy_container").classList.add("candy_falling");

  document
    .querySelector("#candy_container")
    .addEventListener("mousedown", clickCandy);
}

function foodRestart() {
  console.log("Food Restart");
  let chicken = document.querySelector("#chicken_container");
  let broccoli = document.querySelector("#broccoli_container");
  let shake = document.querySelector("#shake_container");
  let burger = document.querySelector("#burger_container");
  let pizza = document.querySelector("#pizza_container");
  let candy = document.querySelector("#candy_container");

  // genstart falling animation
  chicken.classList.remove("chicken_falling");
  chicken.offsetWidth;
  chicken.classList.add("chicken_falling");
  broccoli.classList.remove("broccoli_falling");
  broccoli.offsetWidth;
  broccoli.classList.add("broccoli_falling");
  shake.classList.remove("shake_falling");
  shake.offsetWidth;
  shake.classList.add("shake_falling");
  burger.classList.remove("burger_falling");
  burger.offsetWidth;
  burger.classList.add("burger_falling");
  pizza.classList.remove("pizza_falling");
  pizza.offsetWidth;
  pizza.classList.add("pizza_falling");
  candy.classList.remove("candy_falling");
  candy.offsetWidth;
  candy.classList.add("candy_falling");

  // fjern alle positioner
  .classList.remove(
    "position1",
    "position2",
    "position3",
    "position4",
    "position5"
  );

  // sæt position til en ny klasse
  const p = Math.ceil(Math.random() * 5);
  coin.classList.add(`position${p}`);
}

function increasePoint() {
  console.log("increase point virker");
  points++;
  displayPoints();
  if (points >= 10) {
    levelComplete();
  }
}

function decreasePoint() {
  points--;
  displayPoints();
}

function displayPoints() {
  document.querySelector("#points").textContent = points;
}

function decreaseLives() {
  console.log("decreaseLives");
  displayDecreaseLives();
  lives--;
  if (lives <= 0) {
    gameOver();
  }
}

function displayDecreaseLives() {
  document.querySelector("#heart" + lives).classList.remove("active_heart");
  document.querySelector("#heart" + lives).classList.add("broken_heart");
}

function gameOver() {
  document.querySelector("#game_over").classList.remove("hidden");
  endGame();
  document.querySelector("#gameOverSound").play();
}

function levelComplete() {
  document.querySelector("#level_complete").classList.remove("hidden");
  endGame();
  document.querySelector("#levelCompleteSound").play();
}

function endGame() {
  console.log("endGame kører");
  document
    .querySelector("#chicken_container")
    .classList.remove("chicken_falling");
  document
    .querySelector("#broccoli_container")
    .classList.remove("broccoli_falling");
  document.querySelector("#shake_container").classList.remove("shake_falling");
  document.querySelector("#pizza_container").classList.remove("pizza_falling");
  document
    .querySelector("#burger_container")
    .classList.remove("burger_falling");
  document.querySelector("#candy_container").classList.remove("candy_falling");

  document
    .querySelector("#chicken_container")
    .removeEventListener("mousedown", clickChicken);
  document
    .querySelector("#broccoli_container")
    .removeEventListener("mousedown", clickBroccoli);
  document
    .querySelector("#shake_container")
    .removeEventListener("mousedown", clickShake);
  document
    .querySelector("#pizza_container")
    .removeEventListener("mousedown", clickPizza);
  document
    .querySelector("#candy_container")
    .removeEventListener("mousedown", clickCandy);
  document
    .querySelector("#burger_container")
    .removeEventListener("mousedown", clickBurger);
}
