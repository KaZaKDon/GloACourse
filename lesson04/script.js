"use strict";

let title = prompt("Как называется Ваш проект?");
let screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let rollback = 10;
let fullPrice = 0;
let servicePercentPrice = 0;
const adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой еще дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let allServicePrices = 0;

const getAllServicePrices = function (servicePrice1, servicePrice2) {
  return (allServicePrices = servicePrice1 + servicePrice2);
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

getAllServicePrices(servicePrice1, servicePrice2);
getFullPrice(screenPrice, allServicePrices);
getRollbackPrice(fullPrice);
getTitle(title);
getServicePercentPrices(fullPrice, rollback);
showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(`стоимости верстки и стоимости дополнительных услуг ${fullPrice}`);
console.log(screens);
console.log(title);
console.log(` итоговая стоимость минус сумма отката ${servicePercentPrice}`);
