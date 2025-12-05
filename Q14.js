<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>L1 - Enhanced Todo List</title>

  <style>
    body {
      font-family: Arial;
      width: 400px;
      margin: auto;
      margin-top: 40px;
    }
    .completed {
      text-decoration: line-through;
      color: gray;
    }
    input, button {
      padding: 8px;
      margin: 5px 0;
      width: 100%;
    }
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 6px 0;
    }
    .task-text {
      cursor: pointer;
      flex: 1;
    }
    button.delete {
      background: red;
      color: white;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
    }
  </style>
</head>

<body>

  <h2>Enhanced Todo List</h2>

  <!-- Add task input -->
  <input type="text" id="taskInput" placeholder="Enter a task">

  <!-- Search bar -->
  <input type="text" id="searchInput" placeholder="Search tasks...">

  <button id="addBtn">Add Task</button>

  <ul id="taskList"></ul>

  <script>
    const taskInput = document.getElementById("taskInput");
    const searchInput = document.getElementById("searchInput");
    const taskList = document.getElementById("taskList");
    const addBtn = document.getElementById("addBtn");

    // Load tasks from localStorage or create an empty array
    let tasks = JSON.parse(localStorage.getItem("todos")) || [];

    // Function: Save tasks to localStorage
    function saveTasks() {
      localStorage.setItem("todos", JSON.stringify(tasks));
    }

    // Function: Render tasks on screen
    function renderTasks(list = tasks) {
      taskList.innerHTML = "";

      list.forEach(task => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = task.text;
        span.className = "task-text";
        if (task.completed) span.classList.add("completed");

        // Toggle completion on click
        span.onclick = function () {
          task.completed = !task.completed;
          saveTasks();
          renderTasks();
        };

        // Delete button
        const delBtn = document.createElement("button");
        delBtn.textContent = "X";
        delBtn.className = "delete";

        delBtn.onclick = function () {
          tasks = tasks.filter(t => t.id !== task.id);
          saveTasks();
          renderTasks();
        };

        li.appendChild(span);
        li.appendChild(delBtn);
        taskList.appendChild(li);
      });
    }

    // Add new task
    addBtn.onclick = function () {
      const text = taskInput.value.trim();
      if (text === "") {
        alert("Task cannot be empty!");
        return;
      }

      const newTask = {
        id: Date.now(),       // unique ID
        text: text,           // task text
        completed: false      // completion status
      };

      tasks.push(newTask);
      saveTasks();
      renderTasks();

      taskInput.value = "";
    };

    // Real-time search
    searchInput.oninput = function () {
      const query = searchInput.value.toLowerCase();
      const filtered = tasks.filter(t => t.text.toLowerCase().includes(query));
      renderTasks(filtered);
    };

    // Initial render
    renderTasks();
  </script>

</body>
</html>
