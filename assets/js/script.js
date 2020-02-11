'use strict';
// slide and slides manipulation
var slides = document.querySelector(".slides");
var slide = document.querySelectorAll(".slides li");

// buttons and dots manipulation
var prevBtn = document.querySelector(".slider-left-button");
var nxtBtn = document.querySelector(".slider-right-button");
var elements = document.querySelectorAll(".dot");

// events
slides.addEventListener("transitionend", backtoOrigin);
nxtBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);

// pre-styling
let counter = 1;
var size = slide[0].clientWidth;

slides.style.transform = 'translateX(' + (-size * counter) + 'px)';

// function for next slide
function next() {
  if (counter >= slide.length - 1) {
    return;
  }
  else {
    slides.classList.remove("active-slide");
    counter++;
    slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
    var currentDot = document.querySelector(".active");
    var nxtDot = currentDot.nextElementSibling;
    if (!nxtDot) {
      nxtDot = elements[0];
    }
    
    updateDots(currentDot, nxtDot);
  }
}

// function for previous slide
function prev() {
  if (counter <= 0) {
    return;
  }
  else {
    slides.classList.remove("active-slide");
    counter--;
    slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
    var currentDot = document.querySelector(".active");
    var prevDot = currentDot.previousElementSibling;
    if (!prevDot) {
      prevDot = elements[2];
    }

    updateDots(currentDot, prevDot);
  }
}

// function for backtoOrigin
function backtoOrigin() {
  if (slide[counter].id === "lastClone") {
    slides.classList.add("active-slide")
    counter = slide.length - 2;
    slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }

  if (slide[counter].id === "firstClone") {
    slides.classList.add("active-slide")
    counter = slide.length - counter;
    slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
}

// code for on dots activity
for (var i = 0; i < elements.length; i++) {
  elements[i].onclick = function () {
    slides.classList.remove("active-slide");
    counter = this.innerHTML;
    slides.style.transform = 'translateX(' + (-size * counter) + 'px)';

    var currentDot = document.querySelector(".active");
    var targetDot = this;

    updateDots(currentDot, targetDot);
  }
}

// function for upadating dots
function updateDots(currentDot, targetDot) {
  currentDot.classList.remove("active");
  targetDot.classList.add("active");
}