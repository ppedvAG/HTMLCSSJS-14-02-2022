// Fetch-API

// Wir wollen JSON-Daten von einem Webserver abfragen
// und diese in eine Tabelle einfügen

// let data = fetch("https://jsonplaceholder.typicode.com/todos")
//             .then(response => response.json())
//             .then(json => jsonToTable(json));

function jsonToTable(jsonArray) {
    let tableBody = document.querySelector("#contentBody");
    for (let todo of jsonArray) {
        let row = tableBody.insertRow();
        row.insertCell().innerText = todo.userId;
        row.insertCell().innerText = todo.id;
        row.insertCell().innerText = todo.title;
        row.insertCell().innerText = todo.completed;
    }
}

function userToTable(json) {
    let tableBody = document.querySelector("#userBody");
    let row = tableBody.insertRow();
    row.insertCell().innerText = json.id;
    row.insertCell().innerText = json.name;
    row.insertCell().innerText = json.email;
    row.insertCell().innerText = json.address.street;
    row.insertCell().innerText = json.address.suite;
    row.insertCell().innerText = json.address.city;
    row.insertCell().innerText = json.address.zipcode;
    row.insertCell().innerText = json.address.geo.lat;
    row.insertCell().innerText = json.address.geo.lng;
    // Bei verschachtelten jsons, können wir die dot Notation
    // benutzen um die verschienden Stufen durchzusteigen
}


let user = fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(response => response.json())
            .then(json => userToTable(json));

let input = document.querySelector("#upload");

function upload() {
    let formData = new FormData();
    formData.append("file", input.files[0]);
    fetch("/files", {
        method: "POST",
        body: formData
    });
}

input.addEventListener("change", upload);