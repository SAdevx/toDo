function ProjectMethodInit(){
    let   projectTitle = '';
    let   projectTasks = [];

    const getProjectTitle = () => projectTitle;
    const getProjectTasks = () => projectTasks;
    const getProjectInfo  = () => ({
        projectTitle, projectTasks
    });
 
    const setProjectTitle = (title) => projectTitle = title;
    const setProjectTasks = (task)  => projectTasks.push(task);
    const addTasks     = (tasks) => projectTasks = tasks;
   
    return { getProjectTitle, getProjectTasks, setProjectTitle, setProjectTasks,
        getProjectInfo, addTasks
    }
}

export { ProjectMethodInit }
 
 