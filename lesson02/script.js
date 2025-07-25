let title = "Курс по React ";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 256;
let rollback = 48;
let fullPrice = 50000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(
  `Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани`
);
console.log(
  `Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`
);
console.log(screens.toLowerCase().split(", "));
console.log(
  `Процент отката посреднику за работу ${fullPrice * (rollback / 100)}`
);
