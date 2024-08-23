import { ProjectMethodInit } from "./projectMethodInit";
import { CreateTask } from "./createTask";

function addTask(){
    const taskDialog = document.querySelector('.task-dialog');
    document.addEventListener('click', (e) => {
        if(e.target.className === 'task-plus'){
            taskDialog.show();
        }
    });

    document.addEventListener('click', (e) => {
       
        if(e.target.className === 'task-cancel'){
            e.preventDefault();
            const taskName = document.querySelector('.task-nameinput');
            const taskDescripton = document.querySelector('.task-description');

            taskName.textContent = '';
            taskDescripton.textContent = '';
            taskDialog.close();
        }
    });

    document.addEventListener('click', (e) => {
        if(e.target.className === 'task-add'){
            e.preventDefault();
            
            const taskName = document.querySelector('.task-nameinput');
            const taskDate = document.querySelector('#date');
            const taskPriority = document.querySelector('select');
            const taskDescripton = document.querySelector('.task-description');
            const taskPage = document.querySelector('.task-page');
            const taskSubsection = document.querySelector('.task-subsection');

            if(taskName.value && taskDate.value){
                const taskContainer = document.createElement('div');
                const taskNameContainer = document.createElement('span');
                const taskDateContainer = document.createElement('span');
                const taskCloseIcon = document.createElement('span');
                const taskDetails = document.createElement('button');
                const taskInfoContainer = document.createElement('div');
                const todoArr = JSON.parse(localStorage.getItem("todo"));
                const projectTitle = taskPage.firstChild.textContent.replace('#','').trim();

                const currProject = ProjectMethodInit();
                const currentTask = CreateTask();
                let projectIndex = 0;

                for(let i = 0; i < todoArr.length; i++){
                    if(todoArr[i].projectTitle === projectTitle){
                        currProject.setProjectTitle(todoArr[i].projectTitle);
                        currProject.setProjectTasks(todoArr[i].projectTasks);
                        projectIndex = i;
                        break;
                    }
                }

                currentTask.setTitle(taskName.value.trim());
                currentTask.setDueDate(taskDate.value.trim());
                currentTask.setDescription(taskDescripton.value.trim());
                currentTask.setPriority(taskPriority.options[taskPriority.selectedIndex].text);

                currProject.addTasks(currentTask.getTaskInfo());
                todoArr[projectIndex] = currProject.getProjectInfo();
                localStorage.setItem("todo", JSON.stringify(todoArr));

                taskContainer.classList.add('task-container');
                taskNameContainer.textContent = taskName.value.trim();
                taskDateContainer.textContent = taskDate.value.trim();
                //taskDescriptonContainer.textContent = taskDescripton.textContent.trim();
                taskCloseIcon.classList.add('delete-task')
                taskDetails.textContent = 'Details';

                taskInfoContainer.classList.add('task-info');
                taskInfoContainer.appendChild(taskDateContainer);
                taskInfoContainer.appendChild(taskDetails);
                taskInfoContainer.appendChild(taskCloseIcon);
                //taskInfoContainer.appendChild(taskDescriptonContainer);

                if(taskPriority.options[taskPriority.selectedIndex].text === 'low'){
                    taskContainer.classList.add('low');
                } else if(taskPriority.options[taskPriority.selectedIndex].text === 'medium'){
                    taskContainer.classList.add('medium');
                } else {
                    taskContainer.classList.add('high');
                }

                taskContainer.appendChild(taskNameContainer);
                taskContainer.appendChild(taskInfoContainer);
                taskSubsection.appendChild(taskContainer);

                taskName.value = '';
                taskDescripton.value = ''
                taskDialog.close();
            }
        }
    });
}

export { addTask };