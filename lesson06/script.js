"use strict";

function gameStart() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log("Загаданное число:" + randomNumber);

  function askUser() {
    const userInput = prompt("Угадай число от 1 до 100");

    if (userInput === null) {
      alert("Игра окончена");
      return;
    }

    const number = Number(userInput);

    if (isNaN(number)) {
      alert("Введите число!");
      askUser();
      return;
    }
    //сравнение числа
    if (number === randomNumber) {
      alert(" Поздравляю, Вы угадали!!!");
      return;
    } else if (number > randomNumber) {
      alert("Загаданное число меньше");
    } else if (number < randomNumber) {
      alert("Загаданное число больше");
    }
    askUser();
  }
  askUser();
}

gameStart();
