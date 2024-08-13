function deleteTasks(){
    document.addEventListener('click', (e) => {
        if(e.target.className === 'delete-task'){
        const allTaskContainer = document.querySelector('.all-tasks');
        allTaskContainer.removeChild(e.target.parentElement.parentElement);
        }
    });
}
  
export { deleteTasks };