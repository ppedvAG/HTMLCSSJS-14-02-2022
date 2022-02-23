// Funktionen
// Haben eigenen Gültigkeitsbereich
// Sind mehrfach verwendbar
// Sie können einer Variable zugewiesen werden
// Funktionen können verschachtelt werden
// Sie können Parameter erhalten und Werte zurückgeben

// Syntax:
// function FunktionsName(Parameter) {
    // Code
// }

// let userName = prompt("Wie heißt du? ");

function greetPerson(name) {
    console.log("Hallo " + name);
    console.log(greetPerson.name)
}
// Falls die Funktion nichts zurückgibt, wird standardmäßig undefined ausgegeben

// Funktion wird aufgerufen und Ergebnis als Parameter übergeben
// greetPerson(prompt("Wie heißt du?"));
greetPerson("Max Mustermann");

// Wert wird mittels return zurückgegeben
// default-Parameter
function greeterString(name="du") {
    return "Hallo " + name;
}

// Erwartet einen Funktionsnamen als Parameter, also ohne runde Klammern, und ruft diese dann im Körper auf
// Nennt man auch wrapper, da es eine Funktion umschließt
function executeFunc(funcName) {
    console.log("Ich führe eine andere Funktion aus: ")
    funcName();
    console.log("Die andere Funktion wurde ausgeführt.")
}
// Referenz auf Funktionsnamen = Callback
const caller = greetPerson;
caller("Max Mustermann") // Führt die Funktion greetPerson aus


function doTwice(func) {
    console.log("Ich führe die " + func.name + "-Funktion zweimal aus")
    func();
    func();
}
// console.error() hitnerlegt text rot und wird in der Konsole als Fehlermeldung angezeigt
// console.info()
function divide(numOne=1, numTwo=1) {
    if (checkNumber(numOne, numTwo)) {
        if (numTwo === 0) {
            console.error("Es kann nicht durch 0 geteilt werden.");
        }
        else {
            return numOne / numTwo;
        }
    }
    else {
        console.error("Es können nur Zahlen übergeben werden.")
        console.error("Ausführung abgebrochen.")
    }
}
// typeof(varaible) gibt den Typen der übergebenen Variable als String zurück
// isNaN(variable) gibt true oder false zurück, falls die Variable NaN ist
// isFinite(variable) gibt true oder false zurück, falls die Varaible endlich ist

// Erstelle eine checkNumber Funktion, die prüft ob es sich um endliche Zahlen handelt

function checkNumber(numOne,numTwo) {
    let finite = true;
    if (typeof(numOne) != "number" || typeof(numTwo) != "number") {
        finite = false;
    }
    else if (!isFinite(numOne) ||!isFinite(numTwo)) {
        finite = false;
    }
    return finite;
}

function checkNumber_alternative(cNum) {
    return (typeof(cNum) == "number" && isFinite(cNum));
}

// Immediatly invoked function
console.log(function(a, b) {return a * b}(5, 6));
// Funktion, die sofort nach der deklaration aufgerufen wird und nur einmal benutzbar ist

// Anonyme Funktion
// Eine Funktion, die keinen eigenen Namen hat, aber einer varaiblen zugewiesen ist
const multiplicator = function (a, b) {return a * b};
console.log(multiplicator(7, 5));

// Rekursive Funktionen
// Eine Funktion, die sich im Körper selbstaufruft
function Fakultaet(a) {
    if (a == 0 ||a == 1) {
        return 1;
    }
    else {
        return a * Fakultaet(a - 1);
    }
}
// Lambda-Funktion
// Syntax let variabelName = parameter (in Klammern, falls mehrere) => Körper
// Brauchen kein function keyword, keine geschweiften Klammern und kein return
let quadrieren = a => a*a;
let res = quadrieren(4); // => 16 ausgeben;
console.log(res);

let summieren = (a, b) => a+b;
summieren(12, 8); // => 20

// mehrzeilige Lambdas:
// Sobald wir mehrere Zeilen brauchen, verliert die Lambda-Schreibweise einige ihrere
// Vorteile, sie benötigt wieder Klammern und das return Keyword
let mehrzeilig = (a,b) => {
    a *= 2;
    b *= 2;
    return a + b;
}

// Unbekannte Anzahl an Parametern:
// Man kann auf das arguments Objekt zugreifen
// Verhält sich ähnlich wie ein Array, d.h. es hat die Eigenschaft length
// und die einzelenen Elemente können über den Index angesprochen werden
function sumNumbers(test, test2) {
    if (test && test2) {
    let result = 0;
    for (let i = 2; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
    }
    else {
        console.error("Geht nicht")
    }
}

// Erstelle einen Kleine Taschenrechner Funktion,
// DIe Funktion wird mit einem Parameter aufgerufen
// Dieser Parameter legt festm, ob addiert, subtrahiert oder multipliziert werden soll
// Soblad addieren, subtrahieren oder multiplizieren aufgerufen wird
// Soll der benutzer nach 2 Zahlen gefragt werden
// Anschließend soll das entsprechende Ergebnis in der Konsole ausgegeben werden

// calculator("a") // "s" "m"


// FizzBuzz
// Wir erstellenm eien Funktion, die zwei Parameter übergeben bekommt
// EInen Start und einen Endpunkt(soll inklusiv sein)
// Wenn die Zahl ohne Rest durch 3 teilbar ist, soll in der Konsole Fizz ausgegeben werden 
// Wenn die Zahl ohne Rest durch 5 teilbar ist, soll in der Konsole Buzz ausgegeben werden
// Wenn die Zahl sowohl durch 5 als auch durch 3 teilbar ist soll in der Konsole FizzBuzz stehen
// Falles es weder durch 3 noch durch 5 teilbar ist soll die Zahl selbst ausgegeben werden

function FizzBuzz(start, end) {
    let str;
    for (let i = start;i <= end; i++) {
        str = "";
        if (i == 0){
            console.log(i);
            continue;
        }
        if (i % 3 == 0) 
            str += "Fizz";
        if (i % 5 == 0)
            str += "Buzz";
        if (str == "")
            str = `${i}`;
        console.log(str)
    }
}