// Async

// setTimeout(callback, zeitInMs)
// setTimeout führt die ihr übergebene Funktion frühestens nach der Zeit
// in Milisekunden aus, die wir als zweiten Parameter übergeben haben

let demo = document.querySelector("#beispiel");

function sayHello() {
    demo.innerText = "Hello World";
}

setTimeout(sayHello, 5000);

// setInterval(callback, zeitInMs)
// ruft die Funktion periodisch in der definierten Zeit aus

function clock() {
    let date = new Date();
    let p = document.querySelector("#clock");
    p.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

}

setInterval(clock, 1000);

// Promise
// Sind wortwrtlich ein Versprechen, dass hier vlt mal Daten stehen werden

let myPromise = new Promise(
    function (resolve, reject) {
        let x = 1;
        if (x == 0){
            resolve("Promise lief erfolgreich durch");
        }
        else {
            reject("Promise schlug fehl");
        }
    }
)

function displayText(text) {
    document.querySelector("#promiseOutput").innerText = text;
}

// promise.then(funktionBeiFulfilled, (funktioBeiRejected))
// then ist eine Mehtode des Objektes Promise
// Es bedeutet, dass erst gewartet wird, bis das Promise erfolgreich oder 
// unerfoglreich durchlief und danach etwas mit den übergebenen Daten
// gemacht werden soll

myPromise.then(
    success => displayText(success),
    error => displayText(error)
);

// Promise States:
// Am Anfang ist es pending => d.h. weder erfolgreich noch fehler

let pending = new Promise(
    function (resolve, reject) {
        setTimeout(function() {
            reject("Pending.")
        }, 600000)
    }
);

// Das obige Promise befindet sich 6 Sekunden lang im Zustand "pending",
// da wir 600000 Ms mit der AUsführung von resolve oder reject warten
// Je nachdem welchen Parameter wir aufrufen gilt das Promise nach den 
// 6 Sekunden als "fulfilled" oder "rejected"

// fulfilled: das Promise lief erfolgreich durch
// Da wir den ersten Parameter aufrufen wird das Promise als erfolgreich 
// gewertet => state: fulfilled
let fulfilled = new Promise(
    function (resolve, reject) {
        setTimeout(function() {
            resolve("Erfolgreich.")
        }, 600)
    }
);

// rejected: Das Promise schlug fehl
// Wenn wir den zweiten Parameter aufrufen, gilt das Promise als fehlerhaft
// State: => rejected

let rejected = new Promise(
    function (resolve, reject) {
        setTimeout(function() {
            reject("Fehlschlag.")
        }, 600)
    }
);

// Anschaulicheres Beispiel:

// fetch("index.html") erstellt einen HTTP-GET Request, der nach der index.html
// fragt und gibt immer ein Promise zurück
// mit dem Then schauen wir in das Result des Promises
// und fragen dort nach dem statuscode 200(OK) 404(Not found)
// falls der status code 200 war
// rufen wir die text() methode auf, die den body der response 
// in einen javascript string umwandelt
// im Falle von 404 wird ein PopUp mit der Fehlermeldung wiedergegeben
// Falls es erfolgreich in einen string umgewandelt wurde
// hängen wir diesen an unsere div mit id fetch an
let requestFile = fetch("index.html").then(
    response => { 
        if (response.status == 200) {
            return response.text();
        }
        else if (response.status == 404) {
            alert(response.statusText);
        }
    }
).then(
    html => document.querySelector("#fetch").innerHTML = html
)


// Wir arbeiten innerhalb der Klammern immer mit dem PromiseResult
// Die Funktionen in then werden ebenfalls auf den PromiseResult angewendet

// fetch ist die fetch-API, die es uns ermöglicht Daten abzufragen bzw. zu senden
