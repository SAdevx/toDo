function ProjectMethodInit(){
    let   projectTitle = '';
    let   projectTasks = [];

    const getProjectTitle = () => projectTitle;
    const getProjectTasks = () => projectTasks;
    const getProjectInfo  = () => ({
        projectTitle, projectTasks
    });
 
    const setProjectTitle = (title) => projectTitle = title;
    const setProjectTasks = (task)  => projectTasks = [...task];
    const addTasks     = (tasks) => projectTasks.push(tasks);
    const deleteProject = (index, num) => projectTasks.splice(index, num)
   
    return { getProjectTitle, getProjectTasks, setProjectTitle, setProjectTasks,
        getProjectInfo, addTasks, deleteProject
    }
}

export { ProjectMethodInit }
 
 