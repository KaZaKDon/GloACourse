class Plant {
    constructor(name, description, species, age) {
        this.name = name; // название
        this.description = description; // описание
        this.species = species; // вид
        this.age = age; // возраст
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    // Другие геттеры и сеттеры...
}

class Fern extends Plant {
    constructor(name, description, species, age, height, habitat) {
        super(name, description, species, age);
        this.height = height; // высота
        this.habitat = habitat; // место обитания
    }

    // Дополнительные методы...
}

class Spruce extends Plant {
    constructor(name, description, species, age, crownSize, usage) {
        super(name, description, species, age);
        this.crownSize = crownSize; // размер кроны
        this.usage = usage; // область применения
    }

    // Дополнительные методы...
}

const plantArray = JSON.parse(localStorage.getItem('plants')) || [];

document.getElementById('plantForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const species = document.getElementById('species').value;
    const age = document.getElementById('age').value;
    const plantType = document.getElementById('plantType').value;

    let plant;
    if (plantType === 'fern') {
        plant = new Fern(name, description, species, age, 'Высокий', 'Лес');
    } else if (plantType === 'spruce') {
        plant = new Spruce(name, description, species, age, 'Большой', 'Строительство');
    }

    plantArray.push(plant);
    localStorage.setItem('plants', JSON.stringify(plantArray));
    renderTable();
    this.reset();
});

function renderTable() {
    const tbody = document.getElementById('plantTable').querySelector('tbody');
    tbody.innerHTML = '';
    plantArray.forEach((plant, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${plant.name}</td>
            <td>${plant.description}</td>
            <td>${plant.species}</td>
            <td>${plant.age}</td>
            <td>${plant instanceof Fern ? `Высота: ${plant.height}, Место: ${plant.habitat}` : `Размер кроны: ${plant.crownSize}, Применение: ${plant.usage}`}</td>
            <td><button onclick="deletePlant(${index})">Удалить</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function deletePlant(index) {
    plantArray.splice(index, 1);
    localStorage.setItem('plants', JSON.stringify(plantArray));
    renderTable();
}

// Отображение данных при загрузке страницы
renderTable();