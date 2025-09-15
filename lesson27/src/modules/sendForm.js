const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер свяжется с Вами.';

    // Функция валидации
    const validate = (list) => {
        let success = true;

        list.forEach(input => {
            const name = input.name;
            const value = input.value.trim();

            // Валидация для user_phone: только цифры, +, (), -
            if (name === 'user_phone') {
                const phoneRegex = /^[\d\s\(\)\-\+]+$/;
                if (!phoneRegex.test(value)) {
                    input.classList.add('error');
                    success = false;
                } else {
                    input.classList.remove('error');
                    input.classList.add('success');
                }
            }
            // Валидация для user_name: только кириллица и пробелы
            else if (name === 'user_name') {
                const nameRegex = /^[а-яА-ЯёЁ\s]+$/;
                if (!nameRegex.test(value)) {
                    input.classList.add('error');
                    success = false;
                } else {
                    input.classList.remove('error');
                    input.classList.add('success');
                }
            }
            // Валидация для user_message: кириллица, пробелы, цифры, знаки препинания
            else if (name === 'user_message') {
                const messageRegex = /^[а-яА-ЯёЁ\s\d\.,!?;:()]+$/;
                if (!messageRegex.test(value)) {
                    input.classList.add('error');
                    success = false;
                } else {
                    input.classList.remove('error');
                    input.classList.add('success');
                }
            }
            // Для других полей: просто проверка на заполненность
            else if (input.hasAttribute('required') && !value) {
                input.classList.add('error');
                success = false;
            } else {
                input.classList.remove('error');
                input.classList.add('success');
            }
        });

        return success;
    };

    // Функция отправки данных
    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {  // Исправленный URL
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll('input, textarea');
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = loadText;
        form.append(statusBlock);

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);
            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        });

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText;
                    formElements.forEach(input => {
                        input.value = '';
                        input.classList.remove('success', 'error');
                    });
                })
                .catch(error => {
                    statusBlock.textContent = errorText;
                    console.error('Ошибка отправки:', error);
                });
        } else {
            alert('Данные не валидны. Проверьте поля и попробуйте снова.');
            statusBlock.textContent = '';
        }
    };

    try {
        if (!form) {
            throw new Error('Верните форму на место');
        }

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            submitForm();
        });
    } catch (error) {
        console.log(error.message);
    }
};

export default sendForm;