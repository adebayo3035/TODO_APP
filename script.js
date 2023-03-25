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
}

listContainer.addEventListener("click", (e) => {
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    }
}, false);