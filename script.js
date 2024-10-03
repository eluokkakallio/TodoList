const addTaskButton = document.getElementById("addTask");
const todoList = document.getElementById("todoList");
const taskInput = document.getElementById("taskInput");


const listTask = () => {
    const taskText = taskInput.value;

    const li = document.createElement("li");
    li.textContent = taskText;

    todoList.appendChild(li);

    taskInput.value = "";
}

addTaskButton.addEventListener("click", listTask);
