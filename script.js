// Wait for the DOM to fully load before running the JavaScript code
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
      removeButton.classList.add('remove-btn-style'); // Add classList.add

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



// Wait for the DOM to fully load before running the JavaScript code
document.addEventListener('DOMContentLoaded', function () {
  // Select the "Add Task" button, task input field, and task list
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Define the loadTasks function to load tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach((taskText) => addTask(taskText, false));
  }

  // Define the addTask function to add new tasks to the list
  function addTask(taskText, save = true) {
    // Retrieve and trim the task text from the input field
    const text = taskText.trim();

    // Check if the task text is not empty
    if (text !== '') {
      // Create a new list item element
      const listItem = document.createElement('li');
      listItem.textContent = text;

      // Create a new remove button element
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.className = 'remove-btn';
      removeButton.classList.add('remove-btn-style');

      // Assign an onclick event to the remove button
      removeButton.onclick = function () {
        // Remove the list item from the task list
        taskList.removeChild(listItem);

        // Update tasks array and save to Local Storage
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter((task) => task !== text);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      };

      // Append the remove button to the list item
      listItem.appendChild(removeButton);

      // Append the list item to the task list
      taskList.appendChild(listItem);

      // Save task to Local Storage if required
      if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(text);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
      }
    } else {
      // Prompt the user to enter a task if the input field is empty
      alert('Please enter a task!');
    }
  }

  // Load tasks from Local Storage when the page loads
  loadTasks();

  // Attach event listeners to the "Add Task" button and task input field
  addButton.addEventListener('click', function () {
    addTask(taskInput.value);
    taskInput.value = '';
  });
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask(taskInput.value);
      taskInput.value = '';
    }
  });
});
