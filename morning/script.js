function getGreeting() {
            const now = new Date();
            const hours = now.getHours();
            let greeting = "Добрый день";

            if (hours < 6) {
                greeting = "Доброй ночи";
            } else if (hours < 12) {
                greeting = "Доброе утро";
            } else if (hours < 18) {
                greeting = "Добрый день";
            } else {
                greeting = "Добрый вечер";
            }

            return greeting;
        }

        function formatTime(date) {
            let hours = date.getHours();
            const minutes = String(date.getMinutes()).padStart(2, '0');
            const seconds = String(date.getSeconds()).padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';

            hours = hours % 12;
            hours = hours ? String(hours).padStart(2, '0') : '12'; // часы в 12-часовом формате

            return `${hours}:${minutes}:${seconds} ${ampm}`;
        }

        function getDaysUntilNewYear() {
            const now = new Date();
            const nextYear = now.getFullYear() + 1;
            const newYearDate = new Date(nextYear, 0, 1); // 1 января следующего года
            const timeDiff = newYearDate - now;

            return Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // преобразование в дни
        }

        // Обновление информации на странице
        document.getElementById('greeting').innerText = getGreeting();
        document.getElementById('currentDay').innerText = new Intl.DateTimeFormat('ru-RU', { weekday: 'long' }).format(new Date());
        document.getElementById('currentTime').innerText = formatTime(new Date());
        document.getElementById('daysUntilNewYear').innerText = getDaysUntilNewYear();