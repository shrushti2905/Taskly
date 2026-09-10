const input = document.querySelector("input");
const button = document.querySelector("button");
const taskList = document.querySelector("ul");

button.addEventListener("click", function () {
    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = task;

    taskList.appendChild(li);

    input.value = "";
});