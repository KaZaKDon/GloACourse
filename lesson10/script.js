" use strict";

const book = document.querySelectorAll(".book");
const img = document.querySelector("body");
let advertisement = document.querySelector(".adv");
const second = book[0].querySelectorAll("ul > li");
const fifth = book[5].querySelectorAll("ul > li");
const sixth = book[2].querySelectorAll("ul > li");

book[1].after(book[0]);
book[3].before(book[4]);
book[5].after(book[2]);

img.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

book[4].querySelector("h2 > a").textContent =
  "Книга 3. this и Прототипы Объектов";

second[3].after(second[6]);
second[4].before(second[8]);
second[10].textContent = `Приложение C: Благодарности!`;
fifth[2].before(fifth[9]);
fifth[5].after(fifth[2]);
fifth[8].before(fifth[5]);

sixth[8].insertAdjacentHTML("beforeend", `<li>Глава 8: За пределами ES6</li>`);

advertisement.remove();
