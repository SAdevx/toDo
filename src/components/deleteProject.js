function deleteProject(){
    document.addEventListener('click', (e) => {
        if(e.target.className === 'delete-project'){ 
            let localStorageArr = JSON.parse(localStorage.getItem("todo"));
            let projectName = e.target.parentNode.textContent.replace('#','').trim();
            let projectIndex = -1;

            for(let i = 0; i < localStorageArr.length; i++){
                if(localStorageArr[i].projectTitle === projectName){
                    projectIndex = i;
                    break;
                }
            }

            if(projectIndex >= 0) localStorageArr.splice(projectIndex, 1);

            localStorage.setItem("todo", JSON.stringify(localStorageArr));
            e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        }
    });
}
 
export { deleteProject };
 