// Select DOM elements
const addBtn = document.getElementById("add-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Add event listener for adding a task
addBtn.addEventListener("click", addTask);

// Allow pressing Enter to add task
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  // Prevent empty input
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create new list item
  const li = document.createElement("li");

  // Task text span
  const span = document.createElement("span");
  span.textContent = taskText;

  // Add complete toggle on click
  span.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  // Append text and button to list item
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // Append item to the list
  taskList.appendChild(li);

  // Clear input field
  taskInput.value = "";
}
