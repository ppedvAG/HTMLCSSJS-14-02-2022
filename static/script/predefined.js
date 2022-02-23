// Vordefinierte Objekte in JavaScript

// string
// Ist eine gesonderte Version eines Arrays
// Aneinanderreihung von einzelnen Buchstaben
// .length => Eigenschaft eines Strings, sagt aus aus wie vielen Stellen ein String besteht

let testString = "Ich bin ein Teststring";
console.log(testString.length);
let firstChar = testString[0];
console.log(firstChar);

// Die einzelnen Zeichen im String können über die Klammernschreibweise:
// string[zahl]
// angesprochen werden
// Der Index beginnt bei 0
// und endet bei .length - 1

for (let i = 0; i < testString.length; i++) {
    console.log(testString[i]);
}
// Methoden des String-Objekts
// .charAt(zahl)
// Gibt den Buchstaben an der übergebenen Indexposition an
testString.charAt(0); // => "I"
// Identisch zur Klammernschreibweise

// .charCodeAt(Zahl)
// Gibt Unicode für den Buchstaben am übergebenen Index an
testString.charCodeAt(0); // Gibt den Unicode-Wert für "I" an => 73

// .concat(string1, string2, ....)
// Reiht die übergebenen String aneinander an
// Gibt einen neuen String zurück
// Funktioniert mit beliebig vielen Strings

let test2 = testString.concat(" Ich stehe hinten", " Ich auch");

// .indexOf("suchbegriff", optionalStart)
// .lastIndexOf("suchbegriff", optionalStart)
// Gibt den Index zurück an dem der gesuchte Begirff zum ersten/letzten mal auftaucht
// Case-Sensitive
// Falls der Begriff nicht auftaucht wird -1 zurückgegeben

testString.indexOf("i")
testString.lastIndexOf("i")

// .slice(optionalStart, optionalEnde)
// Gibt einen neuen String zurück, der an Startindex beginnt und bis zum Endindex geht(nicht inklusiv)

testString.slice() // GIbt kompletten String zurück
testString.slice(4,12) // Gibt zeichen von testString[4] => testString[11];
testString.slice(6) // Neue String beginnt bei testString[6] und geht bis zum Ende

// .split(optionZeichen)
// Gibt ein Array zurück, das aus mehreren Strings besteht, die am jeweiligen Zeichen 
// getrennt wurden
// Ohne Parameter wird ein Array mit einem String zurückgegeben
testString.split(" ");
// Bei mehreren Leerzeichen hintereinander, würden leere Strings im Array vorkommen
// Die Zeichen, bei denen getrennt wird sind nicht im Array enthalten
// Es kann an beliebigen Zeichen oder Zeichenketten getrennt werden

// .substring(startposition, Ende)
// Gibt einen neuen String zurück der an Index startposition beginnt 
// und bis zum Index Ende geht

testString.substring(4); // von testString[4] bis Ende
testString.substring(4, 12) // von testString[4] bis testString[11]

// .toLowerCase()
// .toUpperCase()
// Gibt einen neuen String in Klein-/Großbuchstaben zurück
testString.toUpperCase() // Alles großgeschrieben

// .toLocaleUpperCase("sprache")
// .toLocaleLowerCase("sprache")
// Gibt einen neuen String in klein bzw Großbuchstaben zurück in der spezifizierten Sprache

// Erstelle eien Funktion, die zwei Strings akzeptiert
// Die Funktion soll als erstes sagen welche der beiden Strings länger ist
// Und anschließend den kürzen String an den längeren hinten anhängen
// Falls beide gleich lang sind soll das bekannt gegeben werden
// Und anschließend soll der zweite Parameter an den ersten angehängt werden

// Arrays
// Enthält 0 bis unendlich Werte
// Können multidimensional sein
// Typen müssen nicht übereinstimmen


// Zwei verschiedene Möglichkeiten ein Array zu definieren
// literal
let testArr = [1, 2, 3, 4, [5, 6, 7,], 8, 9, 10];
// Constructor
let testArr2 = new Array(1,2,4,5,6,7, "Test"); 

// .length gibt die Anzahl der Elemente im Array wieder
testArr.length;
// Einzelne Stellen können über Klammernschreibweise angesprochen werden
// Bei mehrdimensionalen Arrays können wir zwei(oder mehr) eckige Klammern hintereinander
// benutzen um die einzelnen Elemente zu erreichen
testArr[0] // => 1
testArr[4] // => [5, 6, 7]
testArr[4][2] // => 7

let multiArray = [  [
                    [1, 2],
                    [3,4]
                    ],
                    [
                    [5,6],
                    [7,8]
                    ]
                ]
multiArray[0][1][0] // => 3
multiArray.indexOf(1); // => -1
testArr2.testProp = "test";
// for-Schleife 
// for of-Schleife
for (element of testArr2) {
    console.log(element);
}
// Die for of Schleife iteriert über jedes Element im Array, aber nicht über deren Eigenschaften
// und führt den entsprechenden Code aus

// for in-Schleife
// Iteriert über jedes Property inklusive der Indizes

for (let i in testArr2) {
    console.log(i);
    console.log(testArr2[i]);
}

// Erstelle eine Funktion, die ein Array übergeben bekommt, das nur Zahlen enthält
// Die Funktion soll die Summe aller Elemente zurückgeben

// .indexOf(Element, Starposition)
// .lastIndexOf(Element, Starposition)
// Gibt an an welcher Indexposition das Element zum ersten oder letzten Mal auftaucht
testArr2.indexOf(1) // => 0
// Bei Multidimensionalen Arrays müssen wir in den einzelnen Arrays suchen
multiArray[0][0].indexOf(1) // => 0
multiArray[0].indexOf(1) // => -1 ,da nicht gefunden

// .join(Seprator)
// Methode gibt einen String zurück, der aus den einzelnen Elementen des Arrays besteht
// die jeweils von dem angegebene Separator voneinander getrennt sind

testArr2.join("+++") //Gibt das Array als String getrennt von "+++" zurück

// .map(Funktion)
// DIe Funktion wird auf jedes einzelnen Element im Array angewendet
// Und wird als neues Array zurückgegeben

let numArr = [-1,0,1,2,3,4,5,6]

let newNumArr = numArr.map(x => x * x);

// .filter(Funktion)
// Funktion wird auf jedes einzelne Element im Array angwendet
// Falls das Ergebnis der Funktion true wäre, wird das Element zum neuen Array hinzugefügt

let evenNums = numArr.filter(x => x % 2 === 0);

// .pop() 
// Entfernt das letzte Element aus dem Array und gibt es zurück
// ! Verändert das bestehende Array
// evenNums.pop() // => 6

// .shift()
// Entfernt das erste Element aus dem Array und gibt es zurück
// ! Verändert das bestehende Array
// evenNums.shift() // => 0

// .unshift(Element1, Element2, ...)
// Hängt das oder die neuen Elemente vorne an das Array und gibt die neue Länge zurück
// ! Verändert das bestehende Array
console.log(evenNums.unshift(-2, -1)) // => 6

// .push(Element1, Element2) 
// Hängt das oder die neuen Elemente hinten an das Array und gibt die neue Länge zurück
// ! Verändert das bestehende Array
console.log(evenNums.push(8, 10)) // => 8

// .concat(Array1, Array2...)
// Gibt ein neues Array zurück, das aus dem aufgerufen und den übergebenen Arrays besteht
let combindeNums = evenNums.concat(numArr, newNumArr);

// .toString()
// GIbt einen String aus der das Array kommagetrennt darstellt
evenNums.toString();

// .slice(Start, End)
// Gibt ein neues Array zurück, das am Startindex beginnt und bis Endindex - 1 läuft
// Ohne End wird das restliche Array zurückgegeben
// ohne Start und Ende wird das Array 1:1 kopiert
evenNums.slice() // == evenNums
evenNums.slice(4,7) // evenNums[4] -> evenNums[6]

// .splice(start, zulöschendeElemente, Element1, Element2...)
// ! Verändert das bestehende Array
// Es löscht beginnend mit Start die Anzahl zulöschendeElemente (falls 0 wird nichts gelöscht)
// fügt die neuen Elemente an Index start an 
// Rückgabe der Methode sind die gelöschten Elemente
// d.h. falls kein Element gelöscht wird, wird ein leeres Array zurückgegeben
evenNums.splice(4, 0, 3,5,7) // => [], da nichts gelöscht wird
// Löscht null Elemente, und fügt 3, 5, 7 bei Index 4 ein


// .sort(Funktion)
// Sortiert das Array je nachdem wie es in der Funktion definiert ist
// Normal sortiert er es alphabetisch 

let bigArr = [100, 1100, 1150, 900];

bigArr.sort( (a,b) => a - b); // Sortiert aufsteigend
bigArr.sort( (a,b) => b - a); // Sortiert absteigend

// Erstelle eine Funktion, die ein Array als Parameter erhält
// Die Funktion soll, die größte Zahl aus dem Array ausgeben

// Erstelle eine Funktion, die zwei Arrays als Parameter erhält
// Und ein neues Array zurückgibt, das die beiden Arrays ohne Dupliakte kombiniert
// [2,3,4] [3,4,5,6] 

function combineArr(arr1, arr2) {
    let arr3 = arr1.concat(arr2);
    arr3 = arr3.filter((element, index) => arr3.indexOf(element) == index);
    return arr3;
}

// Erstelle eine Funktion, die in der Konsole ausgibt, wie viele Groß und Kleinbuchstaben 
// in einem übergebenen String enthalten sind
// Klein: 12, Groß: 15

function countCase(str) {
    let lower = 0;
    let upper = 0;
    for (let i in str) {
        if (str[i].toUpperCase() != str[i].toLowerCase()) { // Prüft auf Sonderzeichen/Zahlen
            str[i].toLowerCase() == str[i] ? lower++ : upper++;
        }
        }
    console.log(`Klein: ${lower} | Groß: ${upper}`);
}

// Spread-Operator
// Folgende Funktion kann nur mit drei Parametern ausgeführt werden
// Array mit 3 Elementen bringt unsinniges Ergebnis
function summieren(x, y, z) {
    return x + y + z;
}

summieren([1,2,3]) // => 1,2,3undefinedunedfined

// Der Spread-Operator zerelgt ein Array(nur die oberste Ebene) in seine einzelnen Elemente
summieren(...[1,2,3]) // => 6, da die drei Zahlen als einzelene Parameter übergeben werden

// Kann auch benutzt werden um mehrere Arrays in ein neues zusammenzufassen

let testArr3 = [...testArr, ...testArr2] // Zusammenfügung der beiden Arrays, wie bei Concat

// Kann auch als Alternative zu push benutzt werden

testArr3 = [...testArr3, 54]; // 54 wird am Ende des testArrays gehängt

// rest-Operator
// Fässt beliebig viele Parameter in ein Array zusammen
// Können es dann wie ein normales Array verwenden
// Unterschied zum Arguments Objekt:
// Rest-Operator ergibt ein richtiges Array, arguments ist nur Array ähnlich
// Erlaubt es uns also .map(), .sort(), .filter() zu benutzen
function sumMultiples(...arr) {
    let res = 0;
    for (el of arr) {
        res += el;
    }
    return res;
}
// Es kann nur ein rest-Operator pro Funktion verwendet werden
// Der rest-Operator muss als letzer Parameter übergeben werden

// .forEach((Element, Index) => Funktion)
// Als erster Parameter wird immer das aktuelle Element übergeben
// Als zweites der Index des jeweiligen Elementes

testArr3.forEach((el,i) => console.log("Element: " + el + " Index: " + i))

// Die Funktion iteriert über jedes Element in dem Array und wendet die angegebene Funktion darauf an
let total = 0;
bigArr.forEach(el => total += el);
console.log(total);

// Math
let e = Math.E; // Eulerische Zahl

// Häufige Methoden:
// .round(zahl) 
// Rundet auf die nächste Ganzzahl
Math.round(1.5) // => 2
Math.round(1.4) // => 1

// .pow(x,y) 
// Rechnet x^y
Math.pow(4,2) // => 16

// .sqrt(zahl)
// Rechnet die Quadratwurzel aus
Math.sqrt(25) // => 5

// .abs(zahl)
// Gibt den Betrag zurück
Math.abs(-5) // => 5

// .ceil(zahl)
// Rundet immer auf die nächst größere oder gleichgroße Ganzzahl auf
Math.ceil(5.1) // => 6
Math.ceil(5) // => 5

// .floor(zahl)
// Rundet auf die nächst kleinere oder gleiche Zahl ab

Math.floor(4.9)// => 4
Math.floor(4) // => 4

// .min(zahl1, zahl2, zahl3)
// Gibt die kleinste der übergebenen Zahlen zurück

Math.min(100, 200, 500, 3) // => 3

// .max(zahl1, zahl2, zahl3)
// Gibt die größte übergebenen Zahlen zurück

Math.max(100, 200, 500, 3) // => 500

// .random()
// Gibt uns eine zufällige Zahl zwischen 0 und 1 (exklusiv) zurück

//  Erstelle eine Funktion, die zwei Parameter erhält 
// Einmal das Minimum und einmal das Maximum(inklusiv)
// Die Funktion soll eine zufällige Zahl zwischen diesen Grenzen zurückgeben
// Wir gehen nur von Integern aus und von positivne Zahlen

function getRanNum(numOne, numTwo) {
    let min = Math.min(numOne, numTwo);
    let max = Math.max(numOne, numTwo);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Date-Objekt
// Rechnet in milisekunden seit dem 01.01.1970 00:00:00

let today = new Date();  // new erstellt eine neue Instanz einer Klasse
// Date() wird standardmäßig mit dem derzeitigen Datum initialisiert

// new Date(datumString); Format yyyy-MM-dd oder MM-dd-yyyy

// new Date(jahr, monat, [tag], [stunden], [minuten], [sekunden], [milisekunden]);
// Alles nach monat ist Optional
// Wenn wir ohne Monat ein Datum initialisieren wird die Zahl als Milisekunden aufgefasst
// und dann auf den 01.01.1970 gerechnet
// Monat beginnt mit 0

// Methoden des Date-Objekts:

// Ohne setter:
// 
// .getDay()


