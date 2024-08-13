function projectDialog(){
    const projectDialog          = document.createElement('dialog');
    const form                   = document.createElement('form');
    const input                  = document.createElement('input');
    const addButton              = document.createElement('button');
    const cancelButton           = document.createElement('button');
    const cancelAddContainer     = document.createElement('div');
 
 
    //project name input info
    input.setAttribute("id", "project-name");
    input.placeholder = "Name"
    input.required    = true;
    input.autocomplete = "off";
 
 
    //project add button info
    addButton.textContent    = 'Add';
    addButton.classList.add('add-project-button');
    cancelButton.textContent = 'Cancel';
    cancelButton.classList.add('cancel-project-button');
 
 
    cancelAddContainer.appendChild(cancelButton);
    cancelAddContainer.appendChild(addButton);
    cancelAddContainer.classList.add('cancel-add-project');
 
 
    form.appendChild(input);
    form.appendChild(cancelAddContainer)
 
 
    projectDialog.classList.add('project-dialog');
    projectDialog.appendChild(form);
 
 
    return projectDialog;
} 
 
export { projectDialog };
 
 
 