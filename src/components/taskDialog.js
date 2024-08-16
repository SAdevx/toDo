function taskDialog(){
    const dialog = document.createElement('dialog');
    const form = document.createElement('form');
    const taskNameInput = document.createElement('input');
    const priorityInput = document.createElement('select');
    const lowPriority= document.createElement('option');
    const mediumPriority = document.createElement('option');
    const highPriority = document.createElement('option');
    const dateInput = document.createElement('input');
    const dateInputLabel = document.createElement('span');
    const addBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');
    const datePriorityContainer = document.createElement('div');
    const dateContainer = document.createElement('div');
    const priority = document.createElement('span');
    const priorityContainer = document.createElement('div');
    const taskDescription = document.createElement('textarea');
    const addCancelButtonContainer = document.createElement('div');

    taskNameInput.placeholder = 'Name';
    taskNameInput.classList.add('task-nameinput');

    //date info
    dateInput.type = "date";
    dateInput.id = "date";
    dateInputLabel.textContent = "Due Date:";
    dateInputLabel.for = "date";
    dateContainer.appendChild(dateInputLabel);
    dateContainer.appendChild(dateInput);

    //priority info
    lowPriority.value = 'low';
    lowPriority.textContent = 'low';
    mediumPriority.value = 'medium';
    mediumPriority.textContent = 'medium';
    highPriority.value = 'high';
    highPriority.textContent = 'high';
    priorityInput.appendChild(lowPriority);
    priorityInput.appendChild(mediumPriority);
    priorityInput.appendChild(highPriority);
    priority.textContent = 'Priority:';
    priorityContainer.appendChild(priority);
    priorityContainer.appendChild(priorityInput);

    datePriorityContainer.appendChild(dateContainer);
    datePriorityContainer.appendChild(priorityContainer);
    datePriorityContainer.classList.add('date-priority')

    //task description info
    taskDescription.classList.add('task-description');

    addBtn.textContent = "Add";
    cancelBtn.textContent = "Cancel";
    addBtn.classList.add('task-add');
    cancelBtn.classList.add('task-cancel');
    addCancelButtonContainer.appendChild(addBtn);
    addCancelButtonContainer.appendChild(cancelBtn);

    form.appendChild(taskNameInput);
    form.appendChild(datePriorityContainer);
    form.appendChild(taskDescription);
    form.appendChild(addCancelButtonContainer);

    dialog.appendChild(form);
    dialog.classList.add('task-dialog');

    return dialog;
}

export { taskDialog };