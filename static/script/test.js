let taskList = document.querySelector("#taskList");

function createTask() {
    let newTask = document.createElement("li");
    newTask.innerText = document.querySelector("#task").value;
    document.querySelector("#task").value = "";
    newTask.addEventListener("click", deleteTask);
    newTask.addEventListener("mouseover", hoverColor);
    newTask.addEventListener("mouseout", hoverColorOut);
    taskList.appendChild(newTask);
}

function deleteTask() {
    let el = event.target;
    if (el.style.textDecoration == "line-through")
    {
        taskList.removeChild(el);
    }
    else {
        el.style.textDecoration = "line-through";
    }
}

function hoverColor(e) {
    el = e.target;
    el.style.backgroundColor = "yellow";
}
function hoverColorOut(e) {
    el = e.target;
    el.style.backgroundColor = "";
}



document.querySelector("#create").addEventListener("click", createTask);
document.querySelector("#delete").addEventListener("click", () => taskList.innerHTML = "");

document.querySelector("#btns").addEventListener("click", () => alert(`You clicked Button: ${event.target.value}`));
