"use strict";
let points = 0;
let lives = 3;
let chicken = document.querySelector("#chicken_container");
let broccoli = document.querySelector("#broccoli_container");
let shake = document.querySelector("#shake_container");
let pizza = document.querySelector("#pizza_container");
let burger = document.querySelector("#burger_container");
let candy = document.querySelector("#candy_container");
window.addEventListener("load", ready);

function ready() {
  console.log("JavaScript kører");
  document.querySelector("#btn_start").addEventListener("click", startGame);
  document.querySelector("#btn_restart").addEventListener("click", startGame);
  document.querySelector("#btn_go_to_start").addEventListener("click", showStartScreen);
}

function showStartScreen() {
  document.querySelector("#start").classList.remove("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}

function showGameScreen() {
  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}

function resetLives() {
  lives = 3;
  document.querySelector("#heart1").classList.remove("broken_heart");
  document.querySelector("#heart2").classList.remove("broken_heart");
  document.querySelector("#heart3").classList.remove("broken_heart");
  document.querySelector("#heart1").classList.add("active_heart");
  document.querySelector("#heart2").classList.add("active_heart");
  document.querySelector("#heart3").classList.add("active_heart");
}

function resetPoints() {
  points = 0;
  displayPoints();
}

function startGame() {
  points = 0;
  lives = 3;
  document.querySelector("#timer_container").addEventListener("animationend", gameOver);
  document.querySelector("#start").classList.add("hidden");
  startAllAnimations();
  registrerClick();
  animationRepeat();
  showGameScreen();
  resetLives();
  resetPoints();
  document.querySelector("#backgroundSound").play();
  document.querySelector("#backgroundSound").currentTime = 0;
  document.querySelector("#backgroundSound").volume = 0.1;
}

function animationRepeat() {
  chicken.addEventListener("animationiteration", chickenRestart);
  broccoli.addEventListener("animationiteration", broccoliRestart);
  shake.addEventListener("animationiteration", shakeRestart);
  burger.addEventListener("animationiteration", burgerRestart);
  pizza.addEventListener("animationiteration", pizzaRestart);
  candy.addEventListener("animationiteration", candyRestart);
}

function registrerClick() {
  chicken.addEventListener("mousedown", clickChicken);
  broccoli.addEventListener("mousedown", clickBroccoli);
  shake.addEventListener("mousedown", clickShake);
  pizza.addEventListener("mousedown", clickPizza);
  burger.addEventListener("mousedown", clickBurger);
  candy.addEventListener("mousedown", clickCandy);
}

function startAllAnimations() {
  chicken.classList.add("chicken_falling");
  broccoli.classList.add("broccoli_falling");
  shake.classList.add("shake_falling");
  pizza.classList.add("pizza_falling");
  burger.classList.add("burger_falling");
  candy.classList.add("candy_falling");

  chicken.classList.add("position1");
  broccoli.classList.add("position3");
  shake.classList.add("position2");
  pizza.classList.add("position3");
  burger.classList.add("position4");
  candy.classList.add("position5");
  document.querySelector("#timer_container").classList.add("timer_animation");
}

function clickChicken() {
  chicken.removeEventListener("mousedown", clickChicken);
  chicken.classList.add("paused");
  document.querySelector("#chicken_sprite").classList.add("zoom_out");
  chicken.addEventListener("animationend", chickenGone);

  document.querySelector("#godMadSound").play();
  document.querySelector("#godMadSound").currentTime = 0;

  increasePoint();
}

function chickenGone() {
  chicken.removeEventListener("animationend", chickenGone);

  document.querySelector("#chicken_sprite").classList.remove("zoom_out");
  chicken.classList.remove("paused");

  chicken.classList.remove("chicken_falling");
  chicken.offsetWidth;
  chicken.classList.add("chicken_falling");

  chicken.addEventListener("mousedown", clickChicken);
}

function clickBroccoli() {
  broccoli.removeEventListener("mousedown", clickBroccoli);
  broccoli.classList.add("paused");
  document.querySelector("#broccoli_sprite").classList.add("zoom_out");
  broccoli.addEventListener("animationend", broccoliGone);

  document.querySelector("#godMadSound").play();
  document.querySelector("#godMadSound").currentTime = 0;

  increasePoint();
}

function broccoliGone() {
  broccoli.removeEventListener("animationend", broccoliGone);

  document.querySelector("#broccoli_sprite").classList.remove("zoom_out");
  broccoli.classList.remove("paused");

  broccoli.classList.remove("broccoli_falling");
  broccoli.offsetWidth;
  broccoli.classList.add("broccoli_falling");

  broccoli.addEventListener("mousedown", clickBroccoli);
}

function clickShake() {
  shake.removeEventListener("mousedown", clickShake);
  shake.classList.add("paused");
  document.querySelector("#shake_sprite").classList.add("zoom_out");
  shake.addEventListener("animationend", shakeGone);

  document.querySelector("#godMadSound").play();
  document.querySelector("#godMadSound").currentTime = 0;

  increasePoint();
}

function shakeGone() {
  shake.removeEventListener("animationend", shakeGone);

  document.querySelector("#shake_sprite").classList.remove("zoom_out");
  shake.classList.remove("paused");

  shake.classList.remove("shake_falling");
  shake.offsetWidth;
  shake.classList.add("shake_falling");

  shake.addEventListener("mousedown", clickShake);
}

function clickBurger() {
  burger.removeEventListener("mousedown", clickBurger);
  burger.classList.add("paused");
  document.querySelector("#burger_sprite").classList.add("zoom_out");
  burger.addEventListener("animationend", burgerGone);

  document.querySelector("#dårligMadSound").play();
  document.querySelector("#dårligMadSound").currentTime = 0;

  decreaseLives();
  decreasePoint();
}

function burgerGone() {
  burger.removeEventListener("animationend", burgerGone);

  document.querySelector("#burger_sprite").classList.remove("zoom_out");
  burger.classList.remove("paused");

  burger.classList.remove("burger_falling");
  burger.offsetWidth;
  burger.classList.add("burger_falling");

  burger.addEventListener("mousedown", clickBurger);
}

function clickPizza() {
  pizza.removeEventListener("mousedown", clickPizza);
  pizza.classList.add("paused");
  document.querySelector("#pizza_sprite").classList.add("zoom_out");
  pizza.addEventListener("animationend", pizzaGone);

  document.querySelector("#dårligMadSound").play();
  document.querySelector("#dårligMadSound").currentTime = 0;

  decreaseLives();
  decreasePoint();
}

function pizzaGone() {
  pizza.removeEventListener("animationend", pizzaGone);

  document.querySelector("#pizza_sprite").classList.remove("zoom_out");
  pizza.classList.remove("paused");

  pizza.classList.remove("pizza_falling");
  pizza.offsetWidth;
  pizza.classList.add("pizza_falling");

  pizza.addEventListener("mousedown", clickPizza);
}

function clickCandy() {
  candy.removeEventListener("mousedown", clickCandy);
  candy.classList.add("paused");
  document.querySelector("#candy_sprite").classList.add("zoom_out");
  candy.addEventListener("animationend", candyGone);

  document.querySelector("#dårligMadSound").play();
  document.querySelector("#dårligMadSound").currentTime = 0;

  decreaseLives();
  decreasePoint();
}

function candyGone() {
  candy.removeEventListener("animationend", candyGone);

  document.querySelector("#candy_sprite").classList.remove("zoom_out");
  candy.classList.remove("paused");
  candy.classList.remove("candy_falling");
  candy.offsetWidth;
  candy.classList.add("candy_falling");

  candy.addEventListener("mousedown", clickCandy);
}

function chickenRestart() {
  console.log("Chicken Restart");

  // genstart falling animation
  chicken.classList.remove("chicken_falling");
  chicken.offsetWidth;
  chicken.classList.add("chicken_falling");

  // fjern alle positioner
  chicken.classList.remove("position1", "position2", "position3", "position4", "position5");

  // sæt position til en ny klasse
  const p = Math.ceil(Math.random() * 5);
  chicken.classList.add(`position${p}`);
}
function broccoliRestart() {
  console.log("Broccoli Restart");

  // genstart falling animation
  broccoli.classList.remove("broccoli_falling");
  broccoli.offsetWidth;
  broccoli.classList.add("broccoli_falling");

  // fjern alle positioner
  broccoli.classList.remove("position1", "position2", "position3", "position4", "position5");

  // sæt position til en ny klasse
  const p = Math.ceil(Math.random() * 5);
  broccoli.classList.add(`position${p}`);
}
function shakeRestart() {
  console.log("Shake Restart");

  // genstart falling animation
  shake.classList.remove("shake_falling");
  shake.offsetWidth;
  shake.classList.add("shake_falling");

  // fjern alle positioner
  shake.classList.remove("position1", "position2", "position3", "position4", "position5");

  // sæt position til en ny klasse
  const p = Math.ceil(Math.random() * 5);
  shake.classList.add(`position${p}`);
}
function burgerRestart() {
  console.log("Burger Restart");

  // genstart falling animation
  burger.classList.remove("burger_falling");
  burger.offsetWidth;
  burger.classList.add("burger_falling");

  // fjern alle positioner
  burger.classList.remove("position1", "position2", "position3", "position4", "position5");

  // sæt position til en ny klasse
  const p = Math.ceil(Math.random() * 5);
  burger.classList.add(`position${p}`);
}
function pizzaRestart() {
  console.log("Pizza Restart");

  // genstart falling animation
  pizza.classList.remove("pizza_falling");
  pizza.offsetWidth;
  pizza.classList.add("pizza_falling");

  // fjern alle positioner
  pizza.classList.remove("position1", "position2", "position3", "position4", "position5");

  // sæt position til en ny klasse
  const p = Math.ceil(Math.random() * 5);
  pizza.classList.add(`position${p}`);
}
function candyRestart() {
  console.log("Candy Restart");

  // genstart falling animation
  candy.classList.remove("candy_falling");
  candy.offsetWidth;
  candy.classList.add("candy_falling");

  // fjern alle positioner
  candy.classList.remove("position1", "position2", "position3", "position4", "position5");

  // sæt position til en ny klasse
  const p = Math.ceil(Math.random() * 5);
  candy.classList.add(`position${p}`);
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
  document.querySelector("#timer_container").classList.remove("timer_animation");

  document.querySelector("#game_over").classList.remove("hidden");
  document.querySelector("#gameOverSound").play();
  endGame();
}

function levelComplete() {
  document.querySelector("#timer_container").classList.remove("timer_animation");
  document.querySelector("#level_complete").classList.remove("hidden");
  document.querySelector("#levelCompleteSound").play();
  endGame();
}

function endGame() {
  console.log("endGame kører");
  chicken.classList.remove("chicken_falling");
  broccoli.classList.remove("broccoli_falling");
  shake.classList.remove("shake_falling");
  pizza.classList.remove("pizza_falling");
  burger.classList.remove("burger_falling");
  candy.classList.remove("candy_falling");

  chicken.removeEventListener("mousedown", clickChicken);
  broccoli.removeEventListener("mousedown", clickBroccoli);
  shake.removeEventListener("mousedown", clickShake);
  pizza.removeEventListener("mousedown", clickPizza);
  candy.removeEventListener("mousedown", clickCandy);
  burger.removeEventListener("mousedown", clickBurger);

  document.querySelector("#backgroundSound").pause();
}
