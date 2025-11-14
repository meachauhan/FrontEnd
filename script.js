document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        const li = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.className = 'task-text';
        taskSpan.textContent = taskText;

        const taskActionsDiv = document.createElement('div');
        taskActionsDiv.className = 'task-actions';

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.className = 'complete-btn';
        completeBtn.onclick = () => {
            li.classList.toggle('completed');
            completeBtn.textContent = li.classList.contains('completed') ? 'Undo' : 'Complete';
            completeBtn.style.backgroundColor = li.classList.contains('completed') ? '#ffc107' : '#28a745';
            completeBtn.style.borderColor = li.classList.contains('completed') ? '#e0a800' : '#1e7e34';
        };

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => {
            taskList.removeChild(li);
        };

        taskActionsDiv.appendChild(completeBtn);
        taskActionsDiv.appendChild(deleteBtn);

        li.appendChild(taskSpan);
        li.appendChild(taskActionsDiv);

        taskList.appendChild(li);

        taskInput.value = ''; // Clear the input field
        taskInput.focus(); // Set focus back to the input field
    }

    // Event listener for the Add Task button
    addTaskBtn.addEventListener('click', addTask);

    // Event listener for pressing Enter in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
