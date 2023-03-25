const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
// Create Add task function
const addTask = () =>{
    if(inputBox.value == ''){
        alert('You must write something!')
    }
    else{
        let li = document.createElement('li');
        li.textContent = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerText = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = " "
    //call SaveData function whenever a new task has been added.
    saveData();
}
// Add click event to ListContainer so than tasks can be marked as Completed and deleted
listContainer.addEventListener("click", (e) => {
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        //Save Data when a task is marked as Completed
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        //saveData when a Task has been Deleted
        saveData();
    }
}, false);

//function to allow tasks to save on local Storage when Browser is refreshed or closed

const saveData = ()=>{
    localStorage.setItem("data", listContainer.innerHTML);
}

// function to display Data when the app is visited again
const showTask = () =>{
    listContainer.innerHTML = localStorage.getItem("data")
}