document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const taskName = document.getElementById('taskName').value;
        const dueDate = document.getElementById('dueDate').value;
        const priority = document.getElementById('priority').value;

        if (taskName) {
            addTask(taskName, dueDate, priority);
            taskForm.reset();
        }
    });

    function addTask(name, dueDate, priority) {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        const taskInfo = document.createElement('span');
        taskInfo.innerHTML = `<strong>${name}</strong> - Due: ${dueDate} - Priority: ${priority}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.addEventListener('click', function () {
            taskDiv.remove();
        });

        taskDiv.appendChild(taskInfo);
        taskDiv.appendChild(deleteBtn);

        taskList.appendChild(taskDiv);
    }
});
