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

function getRollbackMessage(fullPrice) {
  switch (true) {
    case fullPrice > 30000:
      fullPrice = fullPrice - (fullPrice / 10) * 100;
      console.log("Даем скидку 10%.");
      break;
    case 15000 < fullPrice && fullPrice < 30000:
      fullPrice = fullPrice - (fullPrice / 5) * 100;
      console.log("Даем скидку 5%.");
      break;
    case 15000 >= fullPrice && fullPrice == 0:
      console.log("Скидка не предусмотрена.");
      break;
    default:
      console.log("Что то пошло не так");
  }
}

getAllServicePrices(servicePrice1, servicePrice2);
getFullPrice(screenPrice, allServicePrices);
getTitle(title);
getServicePercentPrices(fullPrice, rollback);
getRollbackMessage(fullPrice);

console.log(`стоимости верстки и стоимости дополнительных услуг ${fullPrice}`);
console.log(screens);
console.log(title);
console.log(` итоговая стоимость минус сумма отката ${servicePercentPrice}`);
