// Objekt
// An sich eine Sammlung von Schlüssel: Wert Paaren
// Der Wert einer Eigenschaft kann jede beliebige Form annehmen (Int, Array, Objekt...)
// Funktionen, die einem Objekt zugeordnet sind, nennt man Methoden

// Erstellen eigener Objekte:

// literal

const myObject = {
    vorname: "Max",
    nachname: "Mustermann",
    alter: 29,
    anwesend: true,
    "job titel": "Trainer"};
// Eigenschaften == props: value
// Entspricht einem JSON: JavaScript Object Notation

// Möglichkeiten Objekt-Eigenschaften abzurufen:

// dot Notation:
myObject.vorname; // => "Max"
//myObject.job titel // Geht nicht, da ein Leerzeichen im Propnamen enthalten ist 

// Bracket-Notation

myObject["nachname"]; // => "Mustermann"
myObject["job titel"]; // Hier geht es => "Trainer"

// Von leerzeichen in props wird abgeraten

// Andere Möglichkeiten ein Objekt zu erstellen:

// new Object:

const myObject2 = new Object(); // Hier wird der Constructor von Object aufgerufen
myObject2.vorname = "Maria";
myObject2.nachname = "Musterfrau";
myObject2.alter = 29;
myObject2.anwesend = true;

// Object ist die "Ursprungs"-Klasse in Javascript

// Shorthand

let xyz = "Tobias";
let abc = "Hartl";
let def = 24;
let hij = false;

const myObject3 = {xyz, def, abc, hij};
// Hier wird der Name der Variable als Property-Name benutzt und der Wert als Prop-Value

// myObject3.nachname; // => Hartl

// Constructor-Funktion erstellen:
// Der Constructor ist sozusagen die Blaupause für ein Objekt, das wir mehrfach verwenden wollen

function Person(vornamePara, nachnamePara, alterPara, anwesendPara) {
    this.vorname = vornamePara; // this steht sinnbildlich für das neue Objekt, das erstellt wird
    this.nachname = nachnamePara;
    this.alter = alterPara;
    this.anwesend = anwesendPara;
    this.altern = altern;
}

const person1 = new Person("Nicolas", "Seidel", 44, true) // jedes this wird mit person1 ersetzt und somit verfügt
// das fertige Objekt person1 über die oben definierten Eigenschaften
const person2 = new Person("Klaus", "Berger", 56, false);


// dynamic Prop
// Ein prop, das einer Instanz hinzugefügt wurde und nicht normal in der Klasse 
// enthalten ist
person2.angestellt = true; // dynamisch, da es nur in person2 vorhanden ist

// Referenz auf ein anderes Objekt:

person2.freund = person1; // Prop freund verweißt auf ein anderes Objekt ( als Referenz)
// d.h. wenn sich person1 ändert wird sich das auch in dem prop freund
// wiederspiegeln

// Methoden hinzufügen
// Funktion muss definiert werden und dann muss sie dem Constructor als Callback
// für ein Prop
// übergeben werden
function altern() {
    this.alter += 1;
}

// Erstelle eine Constructor Funktion für ein Objekt Auto
// Eigenschaften:
// Marke
// Modell
// MotorStatus 
// Methode um Motorstatus zu ändern

// instaceof Keyword
// Syntax:
// object instanceof Constructor
// Pürft ob das objekt von dem Constructor abstammt
// Auch vererbung wird als true gewertet
person1 instanceof Person; // => true

// in Keyword
// Syntax:
// "PropName" in object
// Prüft ob das angegeben Property in dem Objekt vorhanden ist

"vorname" in person1; // => true
"freund" in person2; // => true, da wir es hinzugefügt haben
"freund" in person1; // => false, da es nicht hinzugefügt wurde

// for in Schleife
// Iteriert über die einzelnen props

for (prop in person2) {
    console.log(`Propname: ${prop} | Wert: ${person2[prop]}`);
}

// die for of Schleife funktioniert bei Objekten nicht

// Löschen von Props:
// delete Keyword
// löscht Prop
// Syntax:
// delete object.prop

delete person2.freund;

// Es können nur Props gelöscht werden
// ganze Objekte hingegen nicht
// Objekte selbst werden, wenn sie nicht mehr benutzt werden
// von JavaScripts Garbagecollection "eingesammelt" und gelöscht
// props hingegen nur manuell

// class - Syntax

class Fahrzeug {
    // statische Props
    static y = "Ich bin static";
    // Können auch ohne Instanz abgefragt werden, bspw. Math.E;

    x = 600; // public Field
    // Gilt für alle Instanzen der Klasse Fahrzeug
    // consturctor Keyword
    #anzRaeder; // private Field
    #geschwindigkeit;
    // Muss direkt im Klassenkörper definiert werden
    // Wir können nur noch mittels Klassenmethoden darauf zugreifen
    constructor (anzRaeder, maxGeschwindigkeit, baujahr) {
        this.anzRaeder = anzRaeder;
        this.maxGeschwindigkeit = maxGeschwindigkeit;
        this.baujahr = baujahr;
        this.#geschwindigkeit = 0
    }

    beschleunige(newSpeed) {
        if (this.maxGeschwindigkeit < newSpeed) {
            this.#geschwindigkeit = this.maxGeschwindigkeit;
            console.error("Maximale Geschwindikeit wurde überschritten.");
        }
        else {
            this.#geschwindigkeit = newSpeed;
        }
    }
    // Das Class-Keyword erlaubt es uns getter und setter zu benutzen.
    // setter erlauben uns Logik beim neusetzten von Attributen anzuwenden
    // getter geben uns den Wert zurück
    // Jedesmal wenn das property abegfragt wird (z.B. fahrezug1.anzRaeder)
    // wird der getter aufgerufen
    // Wenn das Property neu gesetzt wird (z.B. fahrezug1.anzRaeder = 4)
    // wird der setter aufgerufen

    // getter
    // get Keyword wird benutzt
    get anzRaeder() {
        console.log("Getter wird aufgerufen.")
        return this.#anzRaeder;
    }

    // setter
    set anzRaeder(newRaeder) {
        console.log("Setter wird aufgerufen.");
        this.#anzRaeder = newRaeder;
    }
    // Wenn wir getter und setter benutzen, müssen wir die Propertynamen anpassen
    // Ersetzt durch private property
    // this.#propName

    // Wandle die beschleunige Funktion in einen getter 
    // und einen setter für geschwindkeit um

}

const fahrzeug1 = new Fahrzeug(4, 200, 2000);
// fahrzeug1.anzRaeder;
fahrzeug1.beschleunige(150);
fahrzeug1.beschleunige(250);
// fahrzeug1.anzRaeder = 20;
// fahrzeug1.anzRaeder = 12;
// console.log(fahrzeug1.#anzRaeder);

// Vererbung mit JavaScript
// Syntax:
// class neueKlasse extends Vorbild

class Motorrad extends Fahrzeug {
    #marke;
    #modell;
    // werden bei der for...in Schleife ignoriert
    constructor(maxGeschwindigkeit, baujahr, marke, modell) {
        // super - Funktion
        // ruft den Constructor von Fahrzeug auf
        super(2, maxGeschwindigkeit, baujahr);
        this.#marke = marke;
        this.#modell = modell;
    }
    get marke() {
        return this.#marke;
    }
    // Wenn wir keinen Setter einbauen, kann das Prop nicht verändert werden

}

let motorrad = new Motorrad(20,2020,"test","test")
// Der Prototyp eines Objekts bezieht sich auf das Objekt von dem unmittelbar geerbt
// wird, der Konstruktor auf die FUnktion die aufgerufen wurde um es zu erstellen

// Bsp. motorrad: prototype = Fahrezug, Constructor = Motorrad
// instanceof ist sowohl bei Object, Fahrezug als auch Motorrad true

// Erstelle zwei verschieden Klassen
// 1. Lebewesen:
// Props: alter,extremitäten und art verfügen
// Methoden: altern, beschreibung ( Listet alle Props mit ihrem Wert auf)

// 2. Menschen der von Lebewesen erbt
// Props: Vor- und Nachnamen und Geschlecht
// Methoden: Die beschreibe mich methode sollte auch die neuen Props auflisten


class Lebewesen {
    alter;
    extremitaeten;
    art;
    constructor(extremitaeten, art) {
        this.alter = 0;
        this.extremitaeten = extremitaeten;
        this.art = art;
    }
    altern () {
        this.alter += 1;
    }
    beschreibe () {
        for (prop in this) {
            console.log(`prop ${prop}: ${this[prop]}`);
        }
    }
}
