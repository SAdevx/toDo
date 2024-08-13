import { sidebarUI } from "./sidebarUI";
import { projectDialog } from "./projectDialog";
import { taskDialog } from "./taskDialog";

function TODOUI(){
    const body = document.querySelector('body');
    const todoHeader = document.createElement('div');
    const todoName = document.createElement('span');
    const checkAllIcon = document.createElement('span');

    todoName.textContent = "TODO";

    todoHeader.classList.add('todo-header');
    checkAllIcon.classList.add('checkall-icon');
    todoName.classList.add('todo-name');

    todoHeader.appendChild(todoName);
    todoHeader.appendChild(checkAllIcon);

    body.appendChild(todoHeader);
    body.appendChild(projectDialog());
    body.appendChild(taskDialog());
}

export { TODOUI }