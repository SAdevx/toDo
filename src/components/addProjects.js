import { CreateProject } from "./createProject";

function addProjects(){
    const projectAddBtn = document.querySelector('.plus');
    const cancelBtn = document.querySelector('.cancel-add-project');
    const addBtn = document.querySelector('.add-project-button');
    const projectDialog = document.querySelector('.project-dialog');
   

    projectAddBtn.addEventListener('click', (e) => {
        e.preventDefault();
        projectDialog.show();
        console.log("1");
    });

    cancelBtn.addEventListener('click', (e) => {
        e.preventDefault();
        projectDialog.close();
    });

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectNameInput = document.querySelector('#project-name');

        if(projectNameInput.value){
            const currProject = CreateProject();
            const projContainer = document.createElement('span');
            const projectSubsection = document.querySelector('.project-subsection');
            let storageItems = [];
            let prevStorageItems = JSON.parse(localStorage.getItem("todo"));

            currProject.setProjectTitle(projectNameInput.value.trim());
            projContainer.textContent = `#  ${currProject.getProjectTitle()}`;
            projContainer.classList.add('project-container');

            if(prevStorageItems) storageItems = [...prevStorageItems];

            storageItems.push(currProject.getProjectInfo());
            localStorage.setItem("todo", JSON.stringify(storageItems));

            projectSubsection.appendChild(projContainer);
            projectNameInput.value = '';
            projectDialog.close();
        }
       e.stopImmediatePropagation();
    });
}


export { addProjects };