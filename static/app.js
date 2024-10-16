const apiBaseUrl = 'http://localhost:5000/tasks';

const tasksList = document.getElementById('tasks');
const taskInput = document.getElementById('task');
const addTaskBtn = document.getElementById('add-task-btn');

// Fetch all tasks and display them
function fetchTasks() {
    fetch(apiBaseUrl)
        .then(response => response.json())
        .then(data => renderTasks(data.tasks))
        .catch(console.error);
}

// Render tasks in the task list
function renderTasks(tasks) {
    tasksList.innerHTML = ''; // Clear the list
    tasks.forEach(task => {
        tasksList.innerHTML += `
            <li>
                <span>${task.title}</span>
                <input type="checkbox" onclick="deleteTask(${task.id})">
            </li>
        `;
    });
}

// Add a new task
function addTask() {
    const taskTitle = taskInput.value.trim();
    if (!taskTitle) {
        return alert('Please enter a task');
    }

    fetch(apiBaseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: taskTitle })
    })
    .then(fetchTasks) // Refresh tasks after adding
    .catch(console.error);

    taskInput.value = ''; // Clear input field
}

// Delete a task when the checkbox is clicked
function deleteTask(id) {
    fetch(`${apiBaseUrl}/${id}`, { method: 'DELETE' })
    .then(fetchTasks) // Refresh tasks after deleting
    .catch(console.error);
}

// Event listener for adding task
addTaskBtn.addEventListener('click', addTask);
window.onload = fetchTasks;
