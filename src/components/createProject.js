function CreateProject(){
    let   projectTitle = '';
    let   projectTasks = [];

    const getProjectTitle = () => projectTitle;
    const getProjectTasks = () => projectTasks;
    const getProjectInfo  = () => ({
        projectTitle, projectTasks
    });
 
    const setProjectTitle = (title) => projectTitle = title;
    const setProjectTasks = (task)  => projectTasks.push(task);
   
    return { getProjectTitle, getProjectTasks, setProjectTitle, setProjectTasks,
        getProjectInfo
    }
}

export { CreateProject }
 
 
 