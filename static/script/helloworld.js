// Einzeiliges Kommentar
/*
Ich bin ein
mehrzeiliger Kommentar
*/

// Variable mit let deklarieren
let name = "Marius Sommer";

// Konstante mit const
const PI = 3.14;

// BÖse variante:
var test = "Test";
// Kann zu fehlern führen, Erklärung folgt

// Dürfen keinem der reserverd Keywords entsprechen
// Sie müssen eindeutig sein
// let let = "test"; => Fehler, da es ein Keyword ist
// let test = "test2" => Fehler, da es bereits deklariert wurde
// Dürfen nicht mit Zahlen beginnen

// Mehrere Variablen in einer Zeile, Funktioniert, wird aber von abgeraten

let x = 1, y = 2, z = 3; 

// Variablen, die mit let oder var definiert sind können ohne Wert erstellt werden
let xx;
var yy;
// Der Standardwert ist dann undefined

// const, darf nicht ohne Zuweisung initialisiert werden
// const E;

// Typen in Javascript:
// string => Textwerte
// number => floats und integer
// booles => true oder false
// null => Absichtlich leerer Wert
// undefined => Nicht zugewiesener Wert

let testString = "Test";
let testNumber = 12.7;
let testBool = true;
let testNull = null;
let testUndefined;

// Hoisting:

// Hoisting erlaubt es uns Variablen und Funktionen vor der tatsächlichen Deklaration zu benutzen
// Funktioniert nur mit var
zahl = 5;
console.log(zahl);
var zahl;


// Scope
// Gültigkeitsbereich:
// Global
// Function
// Block

function beispiel() {
    // Shadowing innerhalb von Funktionen funktioniert
    let testString = "Anderer Test"
    console.log(testString);
    let functionScope = "Ich bin der Funktionsbereich"; // Kann in der ganzen Funktion abgerufen werden
    {
        {
        let blockScope = "Ich bin der BlockScope"
        console.log(functionScope);
        console.log(blockScope);
        }
    }
    console.log(functionScope);
    console.log(blockScope);
}

// Mit var wird die Deklaration eine Ebene hochgestuft, d.h. von Block zu Funktion oder Global
// Mit let wird sich an den Gültigkeitsbereich gehalten
// Einer der Hauptgründe für das Verwenden von let
// console.log(functionScope);

// Arithmetische Operatoren:

// +  Addition
// - Subtraktion
// * Multiplikation
// / Division
// % Modulus
// Bitwise Operator:
// & AND
// | OR
// ~ NOT
// ^ XOR
// << left shift
// >> right shift

// && logische und
// || logische oder 
// ! logische not

let testNum1 = NaN;
let testNum2 = 12.1;
let testNum3 = 12.000;

let testString1 = `${testNum1}`;
let testString2 = `${testNum2}`;
let testString3 = `${testNum3}`;

console.log(testNum1.toLocaleString('en-US', {minimumFractionDigits: 3, maximumFractionDigits: 3}));
// number.toLocaleString('sprache',{optionen} )
// Optionen:
// minimumFractionDigits: Zahlenwert
// maximumFractionDigits: Zahlenwert
// minimumSignificantDigits: Zahlenwert
// maximumSignificantDigits: Zahlenwert


