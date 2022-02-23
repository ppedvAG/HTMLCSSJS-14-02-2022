function getFormValue() {
    let form = document.querySelector("#form1");
    let vorname = document.querySelector("#vorname");
    let nachname = document.querySelector("#nachname");
    let select = document.querySelector("#dropdown");
    let currElement = select.options[select.selectedIndex].value; 
    // Das Attribut selectedIndex des select-Elements gibt uns den Index der gerade ausgewählten
    // option zurück
    // Das options-Attribut stellt alle möglichen Optionen dar und in der Kombination mit dem
    // selectedIndex können wir somit immer auf das aktuell ausgewählte Element referenzieren
    if (form.checkValidity()){
        vorname.style.backgroundColor = "";
        nachname.style.backgroundColor = "";
        let greeter = document.createElement("p");
        greeter.innerText = `Hallo ${vorname.value} ${nachname.value} Dein Lieblingssuperheld: ${currElement} `;
        document.querySelector("body").appendChild(greeter);
    }
    else {
        vorname.style.backgroundColor = "red";
        nachname.style.backgroundColor = "red";
    }
}

function disableNachname() {
    let vorname = document.querySelector("#vorname");
    let nachname = document.querySelector("#nachname");
    if (vorname.value === "") {
        nachname.disabled = true;
        nachname.value = "";
    }
    else {
        nachname.disabled = false;
    }
}

function disableSubmit() {
    let submitBtn = document.querySelector("#submitBtn");
    let form = document.querySelector("#form1");
    if (form.checkValidity()) {
        submitBtn.disabled = false;
    }
    else {
        submitBtn.disabled = true;
    }
}