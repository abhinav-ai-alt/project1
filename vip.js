"use strict";

const nav = document.querySelector(".nav");
console.log(nav);
const openbtn = document.querySelector("#open");
console.log(openbtn);
const closebtn = document.querySelector("#close");
console.log(closebtn);
const body = document.querySelector("body");
console.log(body);
const howitworks = document.querySelector(".How-It-Works");
console.log(body);

// const openMenu = function () {
//   nav.classList.add(".active");
// };
// button.addEventListener("click", openMenu);

const openClose = function () {
  body.classList.toggle("active");
  // howitworks.classList.toggle("blur");
};

openbtn.addEventListener("click", openClose);
closebtn.addEventListener("click", openClose);
