"use strict";

const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  rollback: 10,
  fullPrice: 0,
  servicePercentPrice: 0,
  adaptive: true,
  service1: "",
  service2: "",
  allServicePrices: 0,
  asking: function () {
    appData.title = prompt("Как называется Ваш проект?");
    appData.screens = prompt(
      "Какие типы экранов нужно разработать?",
      "Простые, Сложные, Интерактивные"
    );

    do {
      appData.screenPrice = +prompt("Сколько будет стоить данная работа?");
    } while (!appData.isNumber(appData.screenPrice));
    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  getAllServicePrices: function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
      } else if (i === 1) {
        appData.service2 = prompt("Какой еще дополнительный тип услуги нужен?");
      }
      while (!appData.isNumber(sum)) {
        sum = +prompt("Сколько это будет стоить?");
      }
      sum += +prompt("Сколько это будет стоить?");
    }
    return sum;
  },
  getFullPrice: function (screenPrice, allServicePrices) {
    return (appData.fullPrice = screenPrice + allServicePrices);
  },
  getTitle: function (titleNew) {
    titleNew = titleNew.trim().toLowerCase();
    return (appData.title = titleNew[0].toUpperCase() + titleNew.slice(1));
  },
  getServicePercentPrices: function (fullPrice, rollback) {
    return (appData.servicePercentPrice = Math.ceil(
      fullPrice - fullPrice * (rollback / 100)
    ));
  },
  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return "Даем скидку 10%.";
    } else if (15000 <= price && price < 30000) {
      return "Даем скидку 5%.";
    } else if (15000 >= price && price >= 0) {
      return "Скидка не предусмотрена.";
    } else {
      return "Что то пошло не так";
    }
  },
  getRollbackPrice: function (price) {
    if (price >= 30000) {
      return (appData.fullPrice = price - (price * 10) / 100);
    } else if (15000 <= price && price < 30000) {
      return (appData.fullPrice = price - (price * 5) / 100);
    } else if (15000 >= price && price >= 0) {
      return appData.fullPrice;
    } else {
      return "Что то пошло не так";
    }
  },
  logger: function () {
    console.log(
      `стоимости верстки и стоимости дополнительных услуг, минус скидка ${appData.fullPrice}`
    );
    console.log(appData.title);
    console.log(
      ` итоговая стоимость минус сумма отката ${appData.servicePercentPrice}`
    );
    for (let key in appData) {
      console.log(appData[key]);
    }
  },
  start: function () {
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice(
      appData.screenPrice,
      appData.allServicePrices
    );
    appData.fullPrice = appData.getRollbackPrice(appData.fullPrice);
    appData.title = appData.getTitle(appData.title);
    appData.servicePercentPrice = appData.getServicePercentPrices(
      appData.fullPrice,
      appData.rollback
    );
    appData.logger();
  },
};

appData.start();
