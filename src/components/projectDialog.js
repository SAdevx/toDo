function projectDialog(){
    const dialog = document.createElement('dialog');
    const form = document.createElement('form');
    const projectNameInput = document.createElement('input');
    const addBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');

    projectNameInput.placeholder = 'Name';
    projectNameInput.classList.add('project-input');

    addBtn.classList.add('add-project-dialog');
    cancelBtn.classList.add('cancel-project-dialog');

    addBtn.textContent = 'Add';
    cancelBtn.textContent = 'Cancel';

    form.appendChild(projectNameInput);
    form.appendChild(addBtn);
    form.appendChild(cancelBtn);

    dialog.classList.add('project-dialog');
    dialog.appendChild(form);

    return dialog;
}

export { projectDialog };