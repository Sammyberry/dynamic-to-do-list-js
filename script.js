// Run code after the DOM has fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Step 1: Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Step 2: Define function to add tasks
  function addTask() {
    // Get and trim the task input value
    const taskText = taskInput.value.trim();

    // If input is empty, alert the user
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create <li> for the new task
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Create Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // Add event listener to remove the task on click
    removeBtn.onclick = () => {
      taskList.removeChild(listItem);
    };

    // Append remove button to list item, then add to list
    listItem.appendChild(removeBtn);
    taskList.appendChild(listItem);

    // Clear input field
    taskInput.value = "";
  }

  // Step 3: Add event listener for Add button click
  addButton.addEventListener("click", addTask);

  // Step 4: Add event listener for Enter key press
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
