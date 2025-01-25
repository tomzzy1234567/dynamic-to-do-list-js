document.addEventListener('DOMContentLoaded', function () {
  // Select the "Add Task" button, task input field, and task list
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Define the addTask function to add new tasks to the list
  function addTask() {
    // Retrieve and trim the task text from the input field
    const taskText = taskInput.value.trim();

    // Check if the task text is not empty
    if (taskText !== '') {
      // Create a new list item element
      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      // Create a new remove button element
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.className = 'remove-btn';

      // Assign an onclick event to the remove button
      removeButton.onclick = function () {
        // Remove the list item from the task list
        taskList.removeChild(listItem);
      };

      // Append the remove button to the list item
      listItem.appendChild(removeButton);

      // Append the list item to the task list
      taskList.appendChild(listItem);

      // Clear the task input field
      taskInput.value = '';
    } else {
      // Prompt the user to enter a task if the input field is empty
      alert('Please enter a task!');
    }
  }

  // Attach event listeners to the "Add Task" button and task input field
  addButton.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
