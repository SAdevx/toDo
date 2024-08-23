import { CreateProject } from "./createProject";

function addProject(){
    const addProjectBtn = document.querySelector('.plus');
    const projectDialog = document.querySelector('.project-dialog');
    const addProject = document.querySelector('.add-project-dialog');
    const projectSubsection = document.querySelector('.project-subsection');
    const projectInput = document.querySelector('.project-input');
    const cancelProject = document.querySelector('.cancel-project-dialog');

    cancelProject.addEventListener('click', (e) => {
        e.preventDefault();
        projectInput.value = '';
        projectDialog.close();
    });
    
    addProjectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        projectDialog.show();
    });

    addProject.addEventListener('click', (e) => {
        e.preventDefault();

        if(projectInput){
            const projectName = document.createElement('span');
            const deleteProjectIcon = document.createElement('span');
            const currentProject = CreateProject();
            let localtorageArr = [];

            projectName.textContent = `# ${projectInput.value.trim()}`;
            projectName.classList.add('project-title');
            deleteProjectIcon.classList.add('delete-project');
            projectName.appendChild(deleteProjectIcon);

            if(localStorage.getItem("todo")){
                localtorageArr = [...JSON.parse(localStorage.getItem("todo"))];
            }
            currentProject.setProjectTitle(projectInput.value.trim());

            localtorageArr.push(currentProject.getProjectInfo());
            localStorage.setItem("todo", JSON.stringify(localtorageArr));

            projectSubsection.appendChild(projectName);
            projectInput.value = '';
            projectDialog.close();
        }
    });
}   

export default addProject;