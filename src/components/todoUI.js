import { projectDialog } from "./projectDialog";
import { taskDialog } from "./taskDialog";

function TODOUI(){
    const body = document.querySelector('body');
    const header = document.createElement('header');
    const checkIcon = document.createElement('span'); 
    const mainContent = document.createElement('div');

    header.textContent = "TODO";
    mainContent.classList.add('main-content');


    header.appendChild(checkIcon)
    body.appendChild(header);
    body.appendChild(mainContent);
    body.appendChild(projectDialog());
    body.appendChild(taskDialog());

}

export { TODOUI }