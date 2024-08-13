import { sidebarUI } from "./sidebarUI";

function mainContent(){
    const body = document.querySelector('body');
    const mainPageContent = document.createElement('div');
    const sideBar = document.createElement('div');
    const todoContent = document.createElement('div');

    mainPageContent.classList.add('main-content');
    sideBar.classList.add('side-bar');
    todoContent.classList.add('todo-content');

    mainPageContent.appendChild(sideBar);
    mainPageContent.appendChild(todoContent);

    body.appendChild(mainPageContent);
    sidebarUI();
}

export { mainContent };