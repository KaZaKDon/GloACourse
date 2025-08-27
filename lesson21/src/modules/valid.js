const valid = () => {
    // Функция, которая разрешает ввод только цифр
        function allowOnlyNumbers(event) {
            const key = event.key;
            if (!/^\d$/.test(key) && key !== 'Backspace' && key !== 'Delete') {
                event.preventDefault();
            }
        }

        // Применяем обработчик событий к полям ввода
        document.querySelector('.calc-square').addEventListener('keydown', allowOnlyNumbers);
        document.querySelector('.calc-count').addEventListener('keydown', allowOnlyNumbers);
        document.querySelector('.calc-day').addEventListener('keydown', allowOnlyNumbers);

        // Проверка отображения текста выбранного значения в SELECT
        document.querySelector('.calc-type').addEventListener('change', function() {
            const selectedOption = this.options[this.selectedIndex].text;
            console.log("Выбранный тип объекта:", selectedOption);
            alert("Выбранный тип объекта: " + selectedOption);
        });   
        
    function validateName(event) {
        const key = event.key;
        if (!/^[а-яА-ЯёЁ\s\-]*$/.test(key) && key !== 'Backspace' && key !== 'Delete' && key !== 'Tab') {
            event.preventDefault();
        }
}

// Функция для валидации поля "E-mail"
function validateEmail(event) {
    const key = event.key;
    if (!/^[a-zA-Z0-9@._!~*'\-]*$/.test(key) && key !== 'Backspace' && key !== 'Delete' && key !== 'Tab') {
        event.preventDefault();
    }
}

// Функция для валидации поля "Номер телефона"
function validatePhone(event) {
    const key = event.key;
    if (!/^[0-9\s\(\)\-]*$/.test(key) && key !== 'Backspace' && key !== 'Delete' && key !== 'Tab') {
        event.preventDefault();
    }
}

function validateMessage(event) {
    const key = event.key;
    if (!/^[а-яА-ЯёЁ\s\-]*$/.test(key) && key !== 'Backspace' && key !== 'Delete' && key !== 'Tab') {
        event.preventDefault();
    }
}

// Применяем обработчики событий к полям ввода после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    // Форма 1
    document.getElementById('form1-name').addEventListener('keydown', validateName);
    document.getElementById('form1-email').addEventListener('keydown', validateEmail);
    document.getElementById('form1-phone').addEventListener('keydown', validatePhone);

    // Форма 2
    document.getElementById('form2-name').addEventListener('keydown', validateName);
    document.getElementById('form2-email').addEventListener('keydown', validateEmail);
    document.getElementById('form2-phone').addEventListener('keydown', validatePhone);
    document.getElementById('form2-message').addEventListener('keydown', validateMessage);

    // Форма 3
    document.getElementById('form3-name').addEventListener('keydown', validateName);
    document.getElementById('form3-email').addEventListener('keydown', validateEmail);
    document.getElementById('form3-phone').addEventListener('keydown', validatePhone);
});
}
export default valid;