const todoControl = document.querySelector(".todo-control");
const headerInput = document.querySelector(".header-input");
const todoList = document.querySelector(".todo-list");
const todoCompleted = document.querySelector(".todo-completed");


const todoData = JSON.parse(localStorage.getItem('todoData')) || [];

const saveToDo = function () {
  const newToDo = {
    text: headerInput.value,
    completed: false,
  };
  if (headerInput.value == "" || headerInput.value == "Какие планы?") {
    alert('ВВедите задачу!')
    return
  }
  todoData.push(newToDo);
  localStorage.setItem('text', JSON.stringify(todoData));
  headerInput.value = "";
}
const render = function () {
  todoList.innerHTML = "";
  todoCompleted.innerHTML = "";
  todoData.forEach(function (item) {
    const li = document.createElement("li");

    li.classList.add("todo-item");
    li.innerHTML = `
      <span class="text-todo">${item.text}</span>
      <div class="todo-buttons">
        <button class="todo-remove"></button>
        <button class="todo-complete"></button>
      </div>`;

    if (item.completed) {
      todoCompleted.append(li);
    } else todoList.append(li);

    li.querySelector(".todo-complete").addEventListener("click", function () {
      item.completed = !item.completed;
      render();
    });
    li.querySelector(".todo-remove").addEventListener("click", function () {
      deleteTodo(item)
      render()
    });
  });
};

const checkToDo = function () {
  if (headerInput =="" || headerInput =="Какие планы?") {
    alert("Введите свои планы!")
  }
}



todoControl.addEventListener("submit", function (event) {
  event.preventDefault();
  checkToDo()
  saveToDo()
  render();
});

const deleteTodo = function(index) {
  todoData.splice(todoData.indexOf(index), 1)
  
}


