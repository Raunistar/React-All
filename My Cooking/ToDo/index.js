// Todo App using JS
/*
Step 1: Create an array to store tasks
Step 2: Get container from HTML to display tasks
Step 3: Create input element for new tasks
Step 4: Create buttons: Add Task, Delete Last, Update Task
Step 5: Append input and buttons to the body
Step 6: Add event listeners for buttons and Enter key
Step 7: Define functions: addTasks, deleteTasks, displayTask
Step 8: Store creation and update info
*/

// Step 1: Array to store tasks
let tasks = [];

// Step 2: Container from HTML
const taskContainer = document.getElementById("container");

// Step 3: Input element
const input = document.createElement("input");
input.id = "input__container";
input.type = "text";
input.placeholder = "Add a task here...";

// Step 4: Buttons
const addTodoBtn = document.createElement("button");
addTodoBtn.textContent = "Add Task";

const deleteTodoBtn = document.createElement("button");
deleteTodoBtn.textContent = "Delete Last";

const updateTodoBtn = document.createElement("button");
updateTodoBtn.textContent = "Update Task";

document.body.innerText = "Hello i am a todo.";
console.log(document.body.childNodes);

// Step 5: Append input and buttons to the body
document.body.appendChild(addTodoBtn);
document.body.append(input,deleteTodoBtn, updateTodoBtn);


// Step 6: Event listeners
addTodoBtn.addEventListener("click", addTasks);
deleteTodoBtn.addEventListener("click", deleteTasks);

// Enter key also adds task
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addTasks();
});

// Step 7: Functions

// Function to add task
function addTasks() {
  const inputData = input.value.trim();
  if (!inputData) return;

  tasks.push({
    text: inputData,
    createdAt: new Date().toLocaleString(),
    status:"Pending"
  });

  displayTask();
  input.value = "";
}

// Function to delete last task
function deleteTasks() {
  tasks.pop();
  displayTask();
}

// Function to display all tasks in container
function displayTask() {
  taskContainer.innerHTML = ""; // clear previous tasks

tasks.forEach((task, index) => {
  const div = document.createElement("div");
  div.className = "task-item";
  div.innerHTML = `
    <span class="task-number">${index + 1}.</span>
    <span class="task-text">${task.text}</span>
    <span class="task-meta">
      📅 Created: ${task.createdAt}
      ⌛ Status: ${task.status || "Pending"}
    </span>
  `;
  taskContainer.appendChild(div);
});

}

// Step 8: Info of update
