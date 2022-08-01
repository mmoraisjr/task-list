const inputTask = document.querySelector(".input-task");
const btnAdd = document.querySelector(".add-task");
const tasklistTable = document.querySelector(".tasklist__table");

const taskTd = document.createElement("td");

const task = document.createElement("p");
task.textContent = inputTask.value;

const deleteTask = document.createElement("button");

taskTd.appendChild(task);
taskTd.appendChild(deleteTask);
tasklistTable.appendChild(taskTd);
