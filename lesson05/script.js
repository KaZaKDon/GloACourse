"use strict";

let title;
let screens;
let screenPrice;
let rollback = 10;
let fullPrice = 0;
let servicePercentPrice = 0;
let adaptive;
let service1;
let service2;
let allServicePrices = 0;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt("Как называется Ваш проект?");
  screens = prompt(
    "Какие типы экранов нужно разработать?",
    "Простые, Сложные, Интерактивные"
  );
  screenPrice = prompt("Сколько будет стоить данная работа?");

  while (!isNumber(screenPrice)) {
    screenPrice = prompt("Сколько будет стоить данная работа?");
  }
  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?");
    } else if (i === 1) {
      service2 = prompt("Какой еще дополнительный тип услуги нужен?");
    }
    while (!isNumber(sum)) {
      sum = prompt("Сколько это будет стоить?");
    }
    sum += +prompt("Сколько это будет стоить?");
  }
  return sum;
};

function getFullPrice(screenPrice, allServicePrices) {
  return (fullPrice = screenPrice + allServicePrices);
}

function getTitle(titleNew) {
  titleNew = titleNew.trim().toLowerCase();
  title = titleNew[0].toUpperCase() + titleNew.slice(1);
}

function getServicePercentPrices(fullPrice, rollback) {
  servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback / 100));
}

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку 10%.";
  } else if (15000 <= price && price < 30000) {
    return "Даем скидку 5%.";
  } else if (15000 >= price && price >= 0) {
    return "Скидка не предусмотрена.";
  } else {
    return "Что то пошло не так";
  }
};

const getRollbackPrice = function (price) {
  if (price >= 30000) {
    return (fullPrice = price - (price * 10) / 100);
  } else if (15000 <= price && price < 30000) {
    return (fullPrice = price - (price * 5) / 100);
  } else if (15000 >= price && price >= 0) {
    return fullPrice;
  } else {
    return "Что то пошло не так";
  }
};

function showTypeOf(variable) {
  console.log(variable, typeof variable);
}

asking();
allServicePrices = getAllServicePrices();
getFullPrice(+screenPrice, allServicePrices);
getRollbackPrice(fullPrice);
getTitle(title);
getServicePercentPrices(fullPrice, rollback);
showTypeOf(title);
showTypeOf(+screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(
  `стоимости верстки и стоимости дополнительных услуг ${fullPrice}`,
  typeof fullPrice
);
console.log(screens);
console.log(title);
console.log(` итоговая стоимость минус сумма отката ${servicePercentPrice}`);
