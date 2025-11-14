document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Load tasks from localStorage if available
    const loadTasks = () => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            const tasks = JSON.parse(storedTasks);
            tasks.forEach(taskData => {
                addTaskToDOM(taskData.text, taskData.completed);
            });
        }
    };

    // Save tasks to localStorage
    const saveTasks = () => {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(li => {
            tasks.push({
                text: li.querySelector('.task-text').textContent,
                completed: li.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    // Function to create and append a task to the DOM
    const addTaskToDOM = (taskText, isCompleted = false) => {
        const li = document.createElement('li');
        if (isCompleted) {
            li.classList.add('completed');
        }

        const taskSpan = document.createElement('span');
        taskSpan.className = 'task-text';
        taskSpan.textContent = taskText;

        const taskActionsDiv = document.createElement('div');
        taskActionsDiv.className = 'task-actions';

        const completeBtn = document.createElement('button');
        completeBtn.textContent = isCompleted ? 'Undo' : 'Complete';
        completeBtn.className = 'complete-btn';
        completeBtn.onclick = () => {
            li.classList.toggle('completed');
            const newStatus = li.classList.contains('completed');
            completeBtn.textContent = newStatus ? 'Undo' : 'Complete';
            // Removed inline styles for color, relying on CSS classes for better maintainability
            saveTasks(); // Save state after changing completion
        };

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn'; // Added class for specific styling
        deleteBtn.onclick = () => {
            taskList.removeChild(li);
            saveTasks(); // Save state after deletion
        };

        taskActionsDiv.appendChild(completeBtn);
        taskActionsDiv.appendChild(deleteBtn);

        li.appendChild(taskSpan);
        li.appendChild(taskActionsDiv);

        taskList.appendChild(li);
    };

    // Function to add a new task (handles input and calls DOM creation)
    const addTask = () => {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            // Consider using a more user-friendly notification than alert in a production app
            alert('Please enter a task!');
            return;
        }

        addTaskToDOM(taskText);
        taskInput.value = ''; // Clear the input field
        taskInput.focus(); // Set focus back to the input field
        saveTasks(); // Save the new task
    };

    // Event listener for the Add Task button
    addTaskBtn.addEventListener('click', addTask);

    // Event listener for pressing Enter in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Initial load of tasks from localStorage when the page loads
    loadTasks();
});
