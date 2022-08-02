const inputTask = document.querySelector(".input-task");
const btnAdd = document.querySelector(".add-task");
const tasklistContainer = document.querySelector(".tasklist__container");

btnAdd.addEventListener("click", () => addTask());
inputTask.addEventListener("change", () => inputChange());

const validaInput = () => inputTask.value.trim().length > 0;

const addTask = () => {
  const inputValido = validaInput();

  if (!inputValido) {
    return inputTask.classList.add("erro");
  }

  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item")

  const task = document.createElement("p");
  task.innerHTML = inputTask.value;

  const deleteTaskBtn = document.createElement("i");
  deleteTaskBtn.classList.add("delete-task")

  taskItem.appendChild(task);
  taskItem.appendChild(deleteTaskBtn);
  tasklistContainer.appendChild(taskItem);

  inputTask.value = "";
};

const inputChange = () => {
  const inputValido = validaInput();

  if (inputValido) {
    return inputTask.classList.remove("erro");
  }
};
