function loadProjectTask(){
    document.addEventListener('click', (e) => {
        if(e.target.className === 'project-title'){
            const taskPage = document.querySelector('.task-page');
            const projectContainer = document.createElement('div');
            const plusBtn = document.createElement('span');
            const taskSubsection = document.createElement('div');

            plusBtn.classList.add('task-plus');
            projectContainer.textContent = e.target.textContent;
            projectContainer.appendChild(plusBtn);
            projectContainer.classList.add('project-header');
            taskSubsection.classList.add('task-subsection');

            while(taskPage.firstChild){
                taskPage.removeChild(taskPage.firstChild);
            }

            taskPage.appendChild(projectContainer);
            taskPage.appendChild(taskSubsection);
            //load project tasks below if it exist in local storage
            //const projectName = e.target.value.replace('#','').trim();
        }

    });
}

export { loadProjectTask };