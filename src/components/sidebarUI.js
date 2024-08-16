function sideBarUI(){
    const mainContent = document.querySelector('.main-content');
    console.log(mainContent)
    const sidebar = document.createElement('div');
    const today = document.createElement('span');
    const week = document.createElement('span');
    const project = document.createElement('span');
    const projectAddIcon = document.createElement('span');
    const projectSubsection = document.createElement('span');

    today.textContent = "Today"; 
    week.textContent = "Week";
    project.textContent = "Project";

    projectAddIcon.classList.add('plus');
    project.classList.add('project');
    project.appendChild(projectAddIcon);

    sidebar.appendChild(today);
    sidebar.appendChild(week);
    sidebar.appendChild(project);
    sidebar.appendChild(projectSubsection);

    sidebar.classList.add('side-bar');

    mainContent.appendChild(sidebar);
}

export { sideBarUI };