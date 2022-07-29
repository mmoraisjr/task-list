var btnAdiciona = document.querySelector("#adicionar");
btnAdiciona.addEventListener("click", function (event) {
    event.preventDefault();

    var valorForm = document.querySelector(".form-task");
    var task = valorForm.task.value;
    console.log(task);

    var valorFormTaskList = document.querySelector(".form-task-list");
    console.log(valorFormTaskList);
    var valorTaskList = valorFormTaskList.querySelector(".tasklist");
    console.log(valorTaskList);

    valorFormTaskList.textContent = task;
});