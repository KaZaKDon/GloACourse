const dbUrl = 'db.json'; 
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

getData(dbUrl)
    .then(data => {
        console.log('Полученные данные:', data);
        return sendData(apiUrl, data);
    })
    .then(response => {
        console.log('Ответ от сервера:', response);
    })
    .catch(error => {
        console.error('Общая ошибка:', error);
    });

async function getData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        throw error; 
    }
}


async function sendData(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Ошибка при отправке данных:', error);
        throw error; 
    }
}
