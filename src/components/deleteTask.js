import { ProjectMethodInit } from "./projectMethodInit";

function deleteTasks(){
    document.addEventListener('click', (e) => {
        if(e.target.className === 'delete-task'){
            const currProject = ProjectMethodInit();
            const localStorageArr = JSON.parse(localStorage.getItem("todo"));
            const projectName =  document.querySelector('.project-header');
            const taskName =  e.target.parentNode.parentNode.firstChild.textContent.trim();
            let projectIndex = 0;
            let taskIndex = 0;

            console.log(localStorageArr);
            for(let i = 0; i < localStorageArr.length; i++){
                if(localStorageArr[i].projectTitle === projectName.textContent.replace('#','').trim()){
                    let tasks = localStorageArr[i].projectTasks;
                    for(let j = 0; j < tasks.length; j++){
                        if(tasks[j].title === taskName){
                            currProject.setProjectTitle(localStorageArr[i].projectTitle);
                            currProject.setProjectTasks(localStorageArr[i].projectTasks);
                            projectIndex = i;
                            taskIndex = j;
                        }
                    }
                }
            } 

            currProject.deleteProject(taskIndex, 1);
            localStorageArr[projectIndex] = currProject.getProjectInfo();
            localStorage.setItem("todo", JSON.stringify(localStorageArr));
            e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
            console.log(333);
        }
    });
}

export { deleteTasks };