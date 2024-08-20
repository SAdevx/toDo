function getTodayTasks(){
    document.addEventListener('click', (e) => {
        if(e.target.className === 'today'){
            const day = new Date().getDate();
            const month = new Date().getMonth() + 1;
            const year = new Date().getFullYear();
    
            const todayPageSubsection = document.createElement('div');
            const todayContentPage = document.querySelector('.task-page');
            const todayHeader = document.createElement('div');
            const localStorageArr = JSON.parse(localStorage.getItem("todo"));

            todayHeader.textContent = "Today";
            todayHeader.classList.add('today-page');
            todayPageSubsection.classList.add('today-subsection');
    
            while(todayContentPage.firstChild){
                todayContentPage.removeChild(todayContentPage.firstChild);
            }

            todayContentPage.appendChild(todayHeader);
            todayContentPage.appendChild(todayPageSubsection);

            if(localStorageArr){
                for(let i = 0; i < localStorageArr.length; i++){
                    const project = localStorageArr[i].projectTasks;
                    for(let j = 0; j < project.length; j++){
                        let currTaskDate = project[j].dueDate.split('-');
                        if(currTaskDate[0] == year && currTaskDate[1] == '0'+month &&
                            currTaskDate[2] == day){
                                const taskContainer = document.createElement('div');
                                const taskTitle = document.createElement('span');
                                const taskDueDate = document.createElement('span');
                                const taskCloseIcon = document.createElement('span');
                                const taskDetails = document.createElement('button');
                                const taskInfoContainer = document.createElement('div');

                                taskTitle.textContent = project[j].title;
                                taskDueDate.textContent = project[j].dueDate;

                                taskCloseIcon.classList.add('delete-task')
                                taskDetails.textContent = 'Details';
                
                                taskContainer.classList.add('task-container');
                                taskInfoContainer.classList.add('task-info');
                                taskInfoContainer.appendChild(taskDueDate);
                                taskInfoContainer.appendChild(taskDetails);
                                taskInfoContainer.appendChild(taskCloseIcon);

                                taskContainer.appendChild(taskTitle)
                                taskContainer.appendChild(taskInfoContainer);
                                
                                if(project[j].priority === 'low'){
                                    taskContainer.classList.add('low');
                                } else if(project[j].priority === 'medium'){
                                    taskContainer.classList.add('medium');
                                } else {
                                    taskContainer.classList.add('high');
                                }
                                todayPageSubsection.appendChild(taskContainer);
                            }
                    }
                }
            }
        }
    });
}

export { getTodayTasks };