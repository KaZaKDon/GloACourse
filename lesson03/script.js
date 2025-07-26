"use strict";

const title = prompt("Как называется Ваш проект?");
const screens = prompt(
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

fullPrice = screenPrice + servicePrice1 + servicePrice2;
servicePercentPrice = fullPrice - fullPrice * (rollback / 100);

console.log(fullPrice);

switch (true) {
  case fullPrice > 30000:
    console.log(
      `Даем скидку 10%. Итоговая сумма: ${
        servicePercentPrice - (servicePercentPrice * 10) / 100
      } рублей`
    );
    break;
  case 15000 < fullPrice && fullPrice < 30000:
    console.log(
      `Даем скидку 5%. Итоговая сумма: ${
        servicePercentPrice - (servicePercentPrice * 5) / 100
      }рублей`
    );
    break;
  case 15000 >= fullPrice && fullPrice == 0:
    console.log(
      `Скидка не предусмотрена. Итоговая сумма: ${servicePercentPrice}рублей`
    );
    break;
  default:
    console.log("Что то пошло не так");
}
