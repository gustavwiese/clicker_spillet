"use strict";
let points = 0;
let lives = 3;
window.addEventListener("load", start);

function start() {
  console.log("JavaScript kører");
  document.querySelector("#chicken_container").classList.add("chicken_falling");
  document
    .querySelector("#broccoli_container")
    .classList.add("broccoli_falling");
  document.querySelector("#shake_container").classList.add("shake_falling");
  document.querySelector("#pizza_container").classList.add("pizza_falling");
  document.querySelector("#burger_container").classList.add("burger_falling");
  document.querySelector("#candy_container").classList.add("candy_falling");

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

function increasePoint() {
  console.log("increase point virker");
  points++;
  displayPoints();
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
}

function displayDecreaseLives() {
  document.querySelector("#heart" + lives).classList.remove("active_heart");
  document.querySelector("#heart" + lives).classList.add("broken_heart");
}
