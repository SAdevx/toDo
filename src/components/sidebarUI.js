function sidebarUI(){
    const sidebar = document.querySelector('.side-bar');
    const today = document.createElement('span');
    const week = document.createElement('span');
    const project = document.createElement('span');
    const plus = document.createElement('span');
    const projectSubsection = document.createElement('div');

    today.textContent = 'Today';
    week.textContent = 'Week';
    project.textContent = 'Project';

    today.classList.add('today');
    week.classList.add('week');
    project.classList.add('project');
    plus.classList.add('plus');
    projectSubsection.classList.add('project-subsection');

    project.appendChild(plus);

    sidebar.appendChild(today);
    sidebar.appendChild(week);
    sidebar.appendChild(project);
    sidebar.appendChild(projectSubsection);
}

export { sidebarUI };