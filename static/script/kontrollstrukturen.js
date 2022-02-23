// Kontrollstrukturen
// werden mittels boolean geprüft

// if - Block
// Syntax
// if (Bedingung, die geprüft wird) {
//  Code-Block   
// }
x = 20;
y = 22;
if (x < 35) { // Wird nur ausgeführt, falls x kleiner ist als y
    console.log(`${x} ist kleiner als 35`);
    if (x % 2 == 0) {
        console.log("x ist gerade.");
    }
    else {
        console.log("x ist ungerade");
    }
}
else if (x < 30) { // Wird nur geprüft, falls das if falsch war
    console.log(`${x} ist kleiner als 30`);
}
else { // Braucht keine Bedingung, da es einfach ausgeführt wird, falls der if BLock false ist
    console.log(`${x} ist gleich ${y}`);
}

// Logischen Operatoren:
// && und 
// || oder
// ! not

// Vergleichsoperatoren:
// == selber Wert
// != ungleicher Wert
// < kleiner
// > größer
// <= kleiner gleich
// >= größer gleich

// === selber Wert und selber Typ 
// !== ungleicher Wert Typ

// ternary Operator
// inline if

let biggerNum = 0;

(x < y) ? biggerNum = y : biggerNum = x;
// (Bedingung) ? {codeblock wahr} : {codeblock falsch};
console.log((x === null) ? "Null" : x);

// if, else if und else - Übung:
// definiere zwei number-Variablen
// Schreibe einen if-Block, der prüft ob die Zahlen gleichgroß sind, bzw. welche der 
// Zahlen kleiner ist
// und prüfe ob die größere der beiden Zahlen gerade oder ungerade ist

// Etwas interaktiver gestalten:
// let userInput = prompt("Gib mir eine Zahl:")
// prompt ist eine Funktion die ein Eingabefenster öffnet und den User um Eingabe bittet
// Ihre Parameter ist ein String, der in dem Eingabefenster angezeigt wird

// Falls wir UserInput in eine Zahl konvertieren wollen
// userInput = parseFloat(userInput); // Konvertiert das übergebene Objekt in eine Gleitkommazahl
// userInput = parseInt(userInput); // Konvertiert das übergebene Zahl in einen Integer
// parseFloat und parseInt funktionieren auch mit exponential Zahlen, z.B. 3e3 => 3000
// Falls nichtzahlen am Anfang übergeben werden wird NaN zurückgegeben
// Vorzeichen werden akzeptiert
// Nichtzahlen nach führenden Zahlen werden ignoriert

let newNum = 50;

(newNum < 25) ? console.log("kleiner als 25")
                : (newNum < 50) ? console.log("kleiner als 50")
                : (newNum < 100) ? console.log("kleiner als 100")
                : console.log("Größer als 100")

// ternary kann verkettet werden
// (Bedingung) ? (falls wahr) 
//              : (bedingung 2 ) ? (falls wahr)
//              .
//              .
//              : (falls alle vorher falsch)

// Switch-Case

switch(newNum) {
    case 50:
        console.log("Zahl ist 50");
        break;
    case 100:
        console.log("Zahl ist 100");
        break;
    default:
        console.log("Keiner der erwarteten Fälle ist eingetreten: " + newNum);
        break;
}

// Switch(variable die verglichen wird) {
//      case Wert:
//          Code-Block
//          break;
//      default:
//          wird ausgeführt, falls kein vorheriger eintrat
// }

// Schleifen / Loops
// Es gibt in JS drei verschiedenen Arten von Schleifen:
// Kopfgesteuerten:
// for Schleife
// while Schleife
// Fußgesteuerte:
// do..while Schleife

// for - Schleife

// for (let i = 10; i > 0; i -= 2) {
//     console.log(i);
// }
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// Syntax:
// for (ZählerVariable; Bedingung; Inkrement/Dekrement) {
    // Code-Block
// }

// Beendet die Schleife, sobald die zweite Bedingung erreicht wurde
for (let counterA = 0, counterB = 100; counterA < 10, counterB > 80; counterA++, counterB--) {
    console.log("A: " + counterA + " B: " + counterB);
}
for (let i = 5; i < 10; i++) {
    let result = 0;
    for (let j = 0; j < i; j++) {
        result += j;
        if (j === 5) {
            break;
        }
    }
    console.log(result);
}
// mit break wird die derzeitige Schleife abgebrochen
// mit continue wird die derzeitige Iteration übersprungen


// Schreibe eine for-Schleife, die das kleine Einmaleins von 1-10 vorrechnet
// "1 x 1 = 1"
// "1 x 2 = 2"
// "10 x 10 = 100"

// console.log(`${variable1} x ${variable2} = ${variable1 * variable2}`)"B: " + counterB


// while-Schleife
// Syntax:
// while (Bedingung) {
// Code-Block
// Zähler hochzählen    
//}

let count = 0;
while (count <= 10) {
    console.log(count);
    count++;
}
count = 10;

while (count < 10) {
    let str = "";
    for (let j = 0;  j<=count; j++) {
        str += "# ";
    }
    console.log(str);
    count++;
}

// Wir müssen bei der while Schleife den Zähler hoch/runterzählen, ansonsten laufen wir in eine Endlosschelife

do {
    let str = "";
    for (let j = 0;  j<=count; j++) {
        str += "# ";
    }
    console.log(str);
    count++;
    console.log(count);
}
while (count < 10)
// Ist eine fußgesteuerte Schleife, d.h. sie wird immer mindestens 1 mal ausgeführt, selbst wenn die Bedingung
// von Beginn an falsch war

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    if (i === 8) {
        break;
    }
    console.log(i);
}

loop1:
for(let i = 10; i < 15; i++) {
    loop2:
    for (let j = 0; j < i; j++) {
        if (j > (i/2)) {
            console.log(j);
            break loop1;
        }
    }
}


// Wir können über Schleifen so genannte labels setzen:
// Syntax:
// labelName:
// schleife(){...}
// mit continue können wir dann von einer Schleife in eine andere gelabelte schleife springen
// mit break können wir eine gelabelte Schleife direkt abbrechen
