function sideBarUI(){
    const mainContent = document.querySelector('.main-content');
    const sidebar = document.createElement('div');
    const today = document.createElement('span');
    const week = document.createElement('span');
    const project = document.createElement('span');
    const projectAddIcon = document.createElement('span');
    const projectSubsection = document.createElement('div');
    const taskPage = document.createElement('div');

    today.classList.add('today');
    today.textContent = "Today"; 
    week.textContent = "Week";
    week.classList.add('week');
    project.textContent = "Project";

    projectAddIcon.classList.add('plus');
    project.classList.add('project');
    project.appendChild(projectAddIcon);
    projectSubsection.classList.add('project-subsection');

    sidebar.appendChild(today);
    sidebar.appendChild(week);
    sidebar.appendChild(project);
    sidebar.appendChild(projectSubsection);

    taskPage.classList.add('task-page');

    sidebar.classList.add('side-bar');
    mainContent.appendChild(sidebar);
    mainContent.appendChild(taskPage);
}

export { sideBarUI };