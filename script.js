const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function render() {
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>${task}</span>
      <button onclick="deleteTask(${index})">❌</button>
    `;

    list.appendChild(li);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  if (!input.value.trim()) return;
  tasks.push(input.value);
  input.value = "";
  render();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  render();
}

render();