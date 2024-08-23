function getWeeklyTodos(){
    document.addEventListener('click', (e) => {
        if(e.target.className === 'week'){
            const day = new Date().getDate();
            const month = new Date().getMonth() + 1;
            const year = new Date().getFullYear();

            const firstDayOfWeek = day - (new Date().getDay());
            const lastDayOfWeek = firstDayOfWeek + 6;

            const weekPageSubsection = document.createElement('div');
            const weekHeader = document.createElement('div');

            const weekContentPage = document.querySelector('.task-page');
            const localStorageArr = JSON.parse(localStorage.getItem("todo"));

            weekHeader.textContent = "Week";
            weekHeader.classList.add('week-page');
            weekPageSubsection.classList.add('week-subsection');
    
            while(weekContentPage.firstChild){
                weekContentPage.removeChild(weekContentPage.firstChild);
            }

            weekContentPage.appendChild(weekHeader);
            weekContentPage.appendChild(weekPageSubsection);

            if(localStorageArr){
                for(let i = 0; i < localStorageArr.length; i++){
                    const project = localStorageArr[i].projectTasks;
                    for(let j = 0; j < project.length; j++){
                        let currTaskDate = project[j].dueDate.split('-');
                        if(currTaskDate[0] == year && currTaskDate[1] == month &&
                            currTaskDate[2] >= firstDayOfWeek && currTaskDate[2] <= lastDayOfWeek){
                                const taskContainer = document.createElement('div');
                                const taskTitle = document.createElement('span');
                                const taskDueDate = document.createElement('span');
                                const taskDetails = document.createElement('button');
                                const taskInfoContainer = document.createElement('div');

                                taskTitle.textContent = project[j].title;
                                taskDueDate.textContent = project[j].dueDate;
                                taskDetails.textContent = 'Details';
                
                                taskContainer.classList.add('task-container');
                                taskInfoContainer.classList.add('task-info');
                                taskInfoContainer.appendChild(taskDueDate);
                                taskInfoContainer.appendChild(taskDetails);

                                taskContainer.appendChild(taskTitle)
                                taskContainer.appendChild(taskInfoContainer);
                                
                                if(project[j].priority === 'low'){
                                    taskContainer.classList.add('low');
                                } else if(project[j].priority === 'medium'){
                                    taskContainer.classList.add('medium');
                                } else {
                                    taskContainer.classList.add('high');
                                }
                                weekPageSubsection.appendChild(taskContainer);
                        }
                    }
                }
            }
        }
    });
};

export { getWeeklyTodos };