'use strict'

function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

    this.createElement = function(text) {
        let element;

        // Проверяем, начинается ли селектор с точки или решетки
        if (this.selector.startsWith('.')) {
            element = document.createElement('div');
            element.className = this.selector.slice(1); // Убираем точку
        } else if (this.selector.startsWith('#')) {
            element = document.createElement('p');
            element.id = this.selector.slice(1); // Убираем решетку
        } else {
            alert('Неверный селектор');
            return;
        }

        // Устанавливаем стили
        element.style.cssText = `
            height: ${this.height};
            width: ${this.width};
            background: ${this.bg};
            font-size: ${this.fontSize};
        `;

        // Добавляем текст в элемент
        element.textContent = text;

        // Добавляем элемент на страницу
        document.body.appendChild(element);
    };
}

const myElement = new DomElement('.block', '100px', '100px', 'lightblue', '20px');
const myElement1 = new DomElement('#block', '100px', '100px', 'blue', '30px');

// Вызываем метод, чтобы создать элемент на странице
myElement.createElement('Это мой новый блок!');
myElement1.createElement('ID');