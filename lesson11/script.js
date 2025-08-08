" use strict";

const inputAdd = document.getElementById("text");
const textSpan = document.getElementById("text-span");
const btn = document.getElementById("btn");
const square = document.getElementById("square");
const eBtn = document.getElementById("e_btn");
const range = document.getElementById("range");
const circle = document.getElementById("circle");
const rangeSpan = document.getElementById("range-span");

btn.addEventListener("click", () => {
  const inputText = inputAdd.value;
  textSpan.textContent = `Цвет: ${inputText}`;
  square.style.backgroundColor = inputText;
});

eBtn.addEventListener("click", () => {
  eBtn.style.display = "none";
});

range.addEventListener("input", () => {
  rangeSpan.textContent = range.value + "px";
  let rangeAdd = (150 * range.value) / 100;
  circle.style.width = `${rangeAdd}px`;
  circle.style.height = `${rangeAdd}px`;
});
