const input = document.querySelector("input");
const button = document.querySelector("button");
const taskList = document.querySelector("#taskList");

button.addEventListener("click", addTask);

function addTask() {
    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = task;

    taskList.appendChild(li);

    input.value = "";
}