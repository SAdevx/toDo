function taskMethodInit(task){
    let   taskTitle          = task.title;
    let   taskPriority       = task.priority;
    let   taskDescription    = task.description;
    let   taskDueDate        = task.dueDate;
    let   taskChecklist      = task.checklist;
 
    const getTaskTitle       = () => taskTitle;
    const getTaskPriority    = () => taskPriority;
    const getTaskDescription = () => taskDescription;
    const getTaskChecklist   = () => taskDueDate;
    const getTaskDueDate     = () => taskChecklist;
 
    const getTaskInfo        = () => ({
    taskTitle, taskPriority, taskDescription, taskDueDate, taskChecklist
    });
 
    const setTaskTitle       = (title)       => title       = title;
    const setTaskPriority    = (priority)    => priority    = priority;
    const setTaskDescription = (description) => description = description;
    const setTaskChecklist   = (checklist)   => checkList   = checklist;
    const setTaskDueDate     = (deadline)    => dueDate     = deadline;
 
    return { getTaskTitle, getTaskPriority, getTaskDescription, getTaskChecklist,
    getTaskDueDate, getTaskInfo, setTaskTitle, setTaskPriority, setTaskDescription,
    setTaskChecklist, setTaskDueDate }
}
 
 
export { taskMethodInit };