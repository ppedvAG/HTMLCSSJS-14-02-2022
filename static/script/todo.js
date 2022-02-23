let newTask = document.querySelector("#newTask");
let submitButton = document.querySelector("#create");
let taskList = document.querySelector("#taskList");
let errorInfo = document.querySelector("#error");
let taskForm = document.querySelector("#taskForm");

errorInfo.style.visibility = "hidden";

function deleteTask(e) {
    let element = e.target; // Das geklickte Element wird der variable 
    // element zugewiesen
    if (element.style.textDecoration == "line-through")
    {
        taskList.removeChild(element); // das Element wird aus der DOM entfernt
    }
    else {
        element.style.textDecoration = "line-through";
    }
}

// Funktion um Task zu erstellen
function createNewTask() {
    let taskName = newTask.value; // hier wird der Text aus Input der Variable TaskName zugewiesen
    console.log(taskName); // Ausgabe fürs testen
    if (taskName) {
        errorInfo.style.visibility = "hidden";
        let taskEl = document.createElement("li"); // Erstellen ein neues li Element
        taskEl.innerText = taskName; // hier wird Text dem neuen Element übergeben
        taskEl.addEventListener("click", deleteTask); // Hier weisen wir 
        // jedem listitem die neue Funktion zu
        taskList.appendChild(taskEl); // hier hängen wir das Element an die neue Liste an
        newTask.value = ""; // Textbox wird wieder leer
    }
    else {
        errorInfo.style.visibility = "";
        errorInfo.style.color = "red";
        errorInfo.style.fontSize = 12;
    }
}

submitButton.addEventListener("click", createNewTask);
// Weist dem Button "#create" die Funktion createNewTask zu,
// die jedesmal ausgeführt wird, wenn der Button angeklickt wird

// Um das Neuladen der Seite mit Enter zu verhindern
taskForm.addEventListener("submit", (e) => {
    createNewTask();
    e.preventDefault(); // preventDefault() verhidnert die Standardaktion
});
//taskForm.addEventListener("submit", createNewTask);
// Jetzt können wir enter drücken und die Funktion createNewTask wird ausgelöst

// Eigene Events werden vor den default Events ausgeführt
// Mit addEventListener können wir mehrere gleiche Listener auf ein Element
// legen

// Erweitere die deleteTask Funktion so, dass
// ein Element beim ersten klicken durchgestirchen wird
// und erst beim zweiten Klick gelöscht wird
// .style.textDecoration = "line-through";

// Wir wollen einen zweiten Button hinzufügen, der wenn man ihn klickt
// Alle Aufgaben löscht

document.querySelector("#delete").addEventListener("click",
    () => taskList.innerHTML = "");

// Arten der EventListener
// In JavaScript selbst alle ohne das "on"
// onChange - Beim Ändern von Angaben input,select und textarea
// Nur wenn sich value ändert und das Inputfeld verlassen wurde

newTask.addEventListener("change", () => alert("Text wurde geändert"));

// onBlur - Beim Verlassen eines Feldes

newTask.addEventListener("blur", 
        () => console.log("Input wurde verlassen"));

// onClick - Beim Klicken eines Elementes => Maustaste wurde gedrückt & losgelassen

newTask.addEventListener("click", 
        (e) => alert(`${e.target} wurde geklickt.`));

// onDblClick - Beim Doppelklicken

submitButton.addEventListener("dblclick",
            () => alert("Ich wurde doppelt geklickt"));

// onFocus - Beim Aktivieren eines Elementes
// newTask.addEventListener("focus", () => alert("Input wurde betreten"));

// onKeyDown - Beim Betätigen einer Taste

newTask.addEventListener("keydown",
        () => console.log("Eine taste wurde gedrückt"));
newTask.addEventListener("keydown",
        (e) => console.log(`${String.fromCharCode(e.keyCode)}`));

// onKeyUp - Beim loslassen einer Taste
newTask.addEventListener("keyup",
        () => console.log("Eine taste wurde losgelassen"));

// onLoad - Beim laden der Website
window.addEventListener("load", 
        () => console.log("Willkommen auf der Seite."));

// onMouseDown - Beim Betätigen der Maustaste
submitButton.addEventListener("mousedown",
            (e) => console.log(`Es wurde Maustaste ${e.button} gedrückt`));
            // linke: 0
            // mittlere: 1
            // rechte: 2

// onMouseUp - Beim Loslassen der Maustaste
submitButton.addEventListener("mouseup",
            (e) => console.log(`Es wurde Maustaste ${e.button} losgelassen`));

// onMouseOver - Wenn der Mauszeiger über dem Element ist
submitButton.addEventListener("mouseover",
            (e) => e.target.style.backgroundColor = "yellow");

// onMouseOut - Wenn der Mauszeiger das Element verlässt
submitButton.addEventListener("mouseout",
            (e) => e.target.style.backgroundColor = "purple");

// onSelect - Beim markieren von Text
// Nur bei input und textarea
newTask.addEventListener("select",
        (e) => e.target.style.backgroundColor = "red");

// EventListener können entfernt werden, falls keine anonyme Funktion benutzt wurde
submitButton.removeEventListener("click", createNewTask);
// Kann gelöscht werden, da wir eine benannte Funktion (createNewTask) 
// benutzt haben
