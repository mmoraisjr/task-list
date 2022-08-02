//busca elementos do campo input-task no arquivo HTML, ou seja, texto digitado no campo input
const inputTask = document.querySelector(".input-task");
//busca elementos do campo add-task no arquivo HTML, ou seja, ação de click no botão adicionar
const addTaskBtn = document.querySelector(".add-task");
//busca elementos do campo task__container no arquivo HTML, ou seja, todos as tasks já adicionadas
const tasklistContainer = document.querySelector(".tasklist__container");

//aguarda um evento de click, para executar a função de adicionar task
addTaskBtn.addEventListener("click", () => addTask());
//aguarda um evento de mudança de estado do campo, para executar a função de mudança da classe do campo
inputTask.addEventListener("change", () => inputChange());

//executa validação de campo input, para verificar que o valor do input possui algum caracter válido
const validaInput = () => inputTask.value.trim().length > 0;

//função de adicionar task, juntamente com botão de completar task e deletar task
const addTask = () => {
  //executa a função de validação de campo para caracteres válidos
  const inputValido = validaInput();
  //retorna a função e insere classe ao campo, caso a condição seja falsa
  if (!inputValido) {
    return inputTask.classList.add("erro");
  }

  //cria um elemento HTML div
  const taskItem = document.createElement("div");
  //insere uma classe ao elemento div criado
  taskItem.classList.add("task-item");

  //cria um elemento HTML p
  const task = document.createElement("p");
  //recebe o valor inputado no campo inputTask e insere no elemento p criado
  task.innerText = inputTask.value;

  //cria um elemento HTML div
  const buttons = document.createElement("div");
  //insere uma classe ao elemento div criado
  buttons.classList.add("buttons");

  //cria um elemento HTMl button
  const completeTaskBtn = document.createElement("i");
  //insere uma classe ao elemento button criado
  completeTaskBtn.classList.add("complete-task");
  completeTaskBtn.classList.add("fa-check");
  completeTaskBtn.classList.add("fa-solid");
  //aguarda um evento de click, para executar a função de completar task
  completeTaskBtn.addEventListener("click", () => completeTask(task));

  //cria um elemento HTMl button
  const deleteTaskBtn = document.createElement("i");
  //insere uma classe ao elemento button criado 
  deleteTaskBtn.classList.add("delete-task");
  deleteTaskBtn.classList.add("fa-trash-can");
  deleteTaskBtn.classList.add("fa-solid");
  //aguarda um evento de click, para executar a função de deletar task
  deleteTaskBtn.addEventListener("click", () => deleteTask(taskItem, task));

  //insere como elemento filho dentro do elemento pau informado, ou seja, task, completeTaskBtn e deleteTaskBtn sendo filhos de taskItem
  taskItem.appendChild(task);
  buttons.appendChild(completeTaskBtn);
  buttons.appendChild(deleteTaskBtn);
  taskItem.appendChild(buttons);
  //insere como elemento filho dentro do elemento pai informado, ou seja, taskItem sendo filhos de tasklistContainer
  tasklistContainer.appendChild(taskItem);

  //"limpa" o conteúdo inserido no campo input
  inputTask.value = "";

  const tasks = tasklistContainer.childNodes;
};

//função de mudar o campo input task, removendo a class do campo que servia como alerta de campo inválido
const inputChange = () => {
  const inputValido = validaInput();

  if (inputValido) {
    return inputTask.classList.remove("erro");
  }
};

const completeTask = (task) => {
  const tasks = tasklistContainer.childNodes;

  for (const t of tasks) {
    if (t.firstChild.isSameNode(task)) {
      t.firstChild.classList.toggle("task-completed");
    }
  }
};

const deleteTask = (taskItem, task) => {
  const tasks = tasklistContainer.childNodes;

  for (const t of tasks) {
    if (t.firstChild.isSameNode(task)) {
      taskItem.remove();
    }
  }
};
