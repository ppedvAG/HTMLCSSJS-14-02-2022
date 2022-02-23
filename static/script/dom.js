// Document Object Model

// Stellt unsere gesamte Seite als ein Diagramm aus mehreren Knotenpunkten dar
// Jeder Knotenpunkt wird "node" genannt
// Der Ursprungsknoten nennt man "root" => document

// Terminologie:
// root
// nodes
//  parent-node: die node die der direkte Vorgänger der gerade ausgewählten node ist
//  child-node: der/die direkte/n Nachfahre/n der derzeit aussgewählten Node
//  sibling-node: nodes die auf der selben Stufe stehen wie die derzeit ausgewählte
//  descendant-node: child-nodes und deren child-nodes und deren ....
//  ancestor-node: parent-node, deren parent-node usw.....

// Node-Types:
// Jedes HTML-Element ist eine Node, aber nicht jede Node ist ein HTML-Element
// Element-Nodes sidn immer HTML-Elemente
// Der Node-Type entscheidet darüber wie viele Children (wenn überhaupt) eine Node haben darf
// Jeder Node-Type besteht aus einer Konstante und deren Wert
// ELEMENT_NODE: 1 <p> <h1> <body>...
// TEXT_NODE: 3 Der Text innerhalb eines Tags
// COMMENT_NODE: 8 <!-- blablabla -->
// DOCUMENT_NODE: 9  document-object
// DOCUMENT_TYPE_NODE: 10 <!DOCTYP>

// nodeName.nodeType => Liefert einen Zahlenwert der einem der obigen Werte entspricht
// Die Nodes sind JavaScript Objekte 
// Es verfügt über methoden und über props

// Traversing the DOM
// Durschreiten der DOM
// Grob einteilbar in zwei Bereiche:
// in den CSS-ähnlichen Syntax:
// node.querySelector(suchbegriff) => liefert uns das erste Element, das dem Suchbegriff
// entspricht
// node.querySelectorAll(suchbegriff) => liefert uns eine nodeList (wie ein Array)
// von allen entsprechenden Elementen

// CSS-Selektoren:
// Element, Klasse, Id
// Element: Tag-Namen 
// document.querySelector("h1") => liefert mir das erste h1 Element auf der Seite

// Klasse: .klassenName
// document.querySelector(".list") => liefert das Element zurück, das die Klasse list hat

// Id: #id
// document.querySelector("#important") => liefert ELement mit der Id-Important zurück

let list = document.querySelector(".list");
let info = document.querySelector("#important");

// Alternativ: 
// node.getElementById(id) => Gibt erstes Element mit der ID zurück
// Element per Id finden
info = document.getElementById("important"); // Genau gleich wie Zeile 52

// node.getElementsByClassName(klasse) => Gibt alle Elemente mit der Klasse zurück
list = document.getElementsByClassName("list");
// Damit es das selbe Ergebnis hat, wie Zeile 51 müssen wir noch die Klammernschreibweise
// nutzen
list = list[0] // => entspricht Zeile 51

// node.getElementsByTagName(tag) => Gibt alle Elemente des Tags zurück

let listItems = document.getElementsByTagName("li");
// Entspricht document.querySelecotrAll("li");


// Node Props
// node kennt nur:
// die root node
// seinen parent
// seine children
// seine etwaigen nachbarn

// node.childNodes => Gibt alle children aus, also nicht nur Elemente
// node.childElementCount => Gibt anzahl an Child-Elementen zurück
// node.children => gibt Liste an Child-Elementen aus
// node.first/lastChild => gibt erstes/letztes Child aus
// node.first/lastElementChild => gibt erstes/letztes Child-Element aus

// node.nodeName => Gibt Namen der Nod ezurück (bei HTML => Tag-Name)
// mode.nodeType => Gibt den Node-Type als Zahl an

// node.next/previousElementSibling => Liefert nächsten/vorherigen Nachbarn zurück

// node.parentElement => Gibt die Parent Element-Node zurück

let ul = document.querySelector("ul"); // Wählt das erste ul ELement der Seite aus => Zeile 17

let ulSibling = ul.nextElementSibling; // Whält die div in Zeile 25 aus

let ulParent = ul.parentElement; // Wählt die div in Zeile 16 aus

let ulChild = ul.children; // Liste der 6 li-Elemente in der ul

let ulPrevSibling = ul.previousElementSibling; // null, da kein Element vor der ul steht

let ulFirstChild = ul.firstElementChild; // Wählt das li ELement in Zeile 18 aus

let ulLastChild = ul.lastElementChild; // Wählt das li Element in Zeile 23 aus

// Textinhalte

// Wir haben verschiedene Möglichkeiten den Text 
// eines HTML-Elements zu erreichen

// node.innerHTML
// Dieses Prop gibt alles zurück was zwischen öffnendem und schließenden Tag steht
// Funktioniert nur bei Elementen, die öffnende und schließende Tags haben
// Alles was in inner HTML steht wird als HTML ausgewertet

let bodyOfUl = ul.innerHTML; // Gibt uns alles zwischen Zeile 18 und 23 zurück
// also auch die Tags, Kommentare und Zeilenumbrüche

// Erweitern des Bodys:

bodyOfUl += "\n<li>Beispiel7</li>" // Der Text wir um ein neues li erweitert
// Kommt so aber noch nicht auf der Seite an, da das ursprüngliche Prop
// noch nicht verändert wurde

// ändern des innerHTML Props:
ul.innerHTML = bodyOfUl // Jetzt sind auf unserer Seite 7 statt 6 li's

// Kann aber auch direkt verändert werden:
ul.innerHTML += "\n<li>Beispiel8</li>" // Nun sinds 8 li's
// da wir das Prop direkt verändert haben

// Damit können wir dynamisch unsere Seite verändern, z.B. mittels Daten
// aus dem Backend oder Userinput

// Nur Text:
// node.innerText
// Gibt uns den Text der Node bzw deren Children wieder
// Wirklich nur den Text, d.h. was wir hier eingeben wird nicht
// als HTML gerendert

ulFirstChild = ul.firstElementChild // Müssen die Varaible neu zuweisen
// da die DOM sich durch Zeile 128 verändert hat
ulFirstChild.innerText = "Ich stehe oben" // Beispiel1 wird durch den Text
// "Ich stehe oben" ersetzt
// Alternative:
// node.textContent liefert grundsätzlich selbes Ergebnis

// Das style Prop:
// Fässt alle Css Regeln eines Objektes zusammen, 
// die direkt im style-Attribut definiert sind
// Gibt uns eine JSON zurück, die die einzelnen Stylings als 
// Schlüssel:Wert paare enthält
// In JavaScript werden die Css-Eigenschaften in camelCase dargestellt
// CSS: background-color => JS: backgroundColor
// Da das style-Prop ein Objekt ist können wir jedes Prop
// über die .dot Notation ansprechen und ändern
let h1 = document.querySelector("h1"); // Speichert h1 in eine Variable
console.log(h1.style) // Gibt uns das style-Prop von h1 in der Konsole aus
h1.style.backgroundColor = "green" // Ändert die Hintergrundfarbe von h1 auf grün

// mehrere Elemente ändern:
let liList = document.querySelectorAll("li"); // Gibt uns alle li-Elemente

// for-of Schleife:

for (let element of liList) {
    element.style.color = "magenta"; // ändert die Textfarbe jedes li-Elements
    // auf magenta
}

// Klassen hinzufügen/löschen
// Jede node verfügt über ein Attribut namens classList
// node.classList => Gibt uns ein Array der Klassen des Elements zurück

liList[0].classList; // => [""] da keine Klassen definiert sind

// Hinzufügen einer Klasse: 
h1.classList.add("ul-childs"); // Fügt dem h1-Tag die Klasse ul-childs hinzu
// Entfernen einer Klasse:
h1.classList.remove("ul-childs"); // Entfernt die Klasse wieder

// Entfernen eines Styles
h1.style.backgroundColor = "";
h1.style.color = "";

// Übung2:
// Entfernt als erstes die Farbe, die wir den einzelnen li-Elementen gegeben
// haben und fügt danach jedem Element die Klasse "ul-childs" hinzu.

for (let element of liList) {
    element.style.color = ""; // Entfernt das oben angewandte Styling
    element.classList.add("ul-childs"); // Fügt jedem li-Element
    // die Klasse "ul-childs" hinzu
}

// Attribute eines HTML-Elements anzeigen/ändern
let pic = document.getElementById("pic");

// Jede Eelment-Node verfügt über das prop attributes
// Dieses besteht aus den einzelenen Attribut-Objekten und jedes davon
// hat sein eigenes value
pic.attributes; // Gibt eine Node-Map mit den einzelnen Attributs-Objekten zurück

// Gezielt ein Attribut anzeigen:
pic.attributes.alt; // => alt = "Ein Platzhalterbild"

// Nur den Wert eines Attributes anzeigen:
pic.attributes.alt.value; // => "Ein Platzhalterbild"

// Wert eines Attributes neu zuweisen:
pic.attributes.alt.value = "Ein Platzhalterbild von via.placeholder.com";
// Ändert den Wert des Attributs auf den zugewiesenen Text

// Können mit node.setAttribute(Attribut, wert) 
// neue Attribute hinzufügen
h1.setAttribute("id", "hauptueberschrift"); // Fügt eine Id
// mit Wert hauptueberschrift hinzu

// Entfernen:
h1.removeAttribute("class"); // entfernt das class-Attribut

// Übung 3:
// Speicher den Wert des href-Props in eine Variable
// Füge dem img-Tag ein neues Attribut "src" mit dem Wert aus der obigen Variable
// hinzu und entferne danach das href-Attribut

let url = pic.attributes.href.value; // Speichert die url,
// die in href angegeben ist
pic.setAttribute("src", url); // weißt den wert von url dem neuen Attribut
// src zu
pic.removeAttribute("href"); // löscht das Attribut href
// Danach wird das Platzhalterbild korrekt auf der Seite dargestellt

// Erstellen von neuen node-Elementen

// node.createElement("HTML-Tag")
// document.createElement("p") => erstellt einen neuen leeren p-Tag
// Wird bis jetzt nur im Speicher gehalten

let newP = document.createElement("p"); // ERstellt ein p-Element 
// und speichert es in der Variable newP
newP.innerText = "Ich bin der neu erstellte <p>-Tag, der mit insertBefore() eingefügt wurde";
// Weißt dem p-Tag einen Textinhalt zu

// Anfügen des neuen Elementes
// aufrufendeNode.appendChild() // Wird als child der aufrufenden node angehängt
// node.insertBefore(neueNode, vorhandeneNode) => Fügt das neue element direkt
// vor dem alten ein


// Einsetzten des neuen Elements vor dem p-Tag mit id "important":
let parentNode = document.querySelector("div"); // div auf Zeile 17
parentNode = parentNode.querySelector("div"); // div auf Zeile 26
let importantP = document.querySelector("#important"); // Als Referenz für das
// einfügen des neuen Elements
parentNode.insertBefore(newP, importantP); // p-Tag wird eingefügt

// Anhängen an das Ende der parentNode:
newP = document.createElement("p");
newP.innerText = "Ich bin der zweite p-Tag, der mit appendChild() eingefügt wurde";
parentNode.appendChild(newP); // Fügt den p-Tag am Ende der Div aus Zeile 26
// ein

// Wir können auch Elemente entfernen oder ersetzen
// Dafür brauchen wir:
// Die Parentnode des zu löschenden oder ersetzenden Elements
// Den Ersatz im Falle des ersetztens
// Das Element selbst, das gelsöcht oder ersetzt werden soll

// Wir wollen das li-Element mit dem Textinhalt "Beispiel8" löschen
// Das Elternelement haben wir bereits in der Variable ul weggespeichert
// WIr wissen auch, dass es das letzte Child der ul ist
let elementToDelete = ul.lastElementChild; // Speichert das li mit dem Text "Beispiel8"

// Jetzt müssen wir noch die Methode zum entfernen aufrufen
ul.removeChild(elementToDelete); // li "Beispiel8" wurde somit aus der DOM entfernt

// Wir wollen das p Element aus Zeile 13 durch ein h2-Element ersetzen
// Wir wollen den selben Textinhalt haben

let newH2 = document.createElement("h2"); // Erstellt ein leeres h2 Element
let oldP = document.querySelector("p");
newH2.innerText = oldP.innerText; // Sucht sich das p ELement raus und fügt
// dessen Text als innerText von h2 ein

// Müssen jetzt noch die replace Funktion aufrufen
let body = document.querySelector("body"); // liefert das body Element zurück

body.replaceChild(newH2, oldP); // Ersetzt das p Element mit unserem
// neu erstellten h2 Element

// Übung 4:
// Wir wollen das li-Element mit dem Text "Beispiel7" durch eine neue ul ersetzten
// diese ul soll zwei li Childs haben mit beliebigem Text Inhalt

// Erstellen der drei neuen Elemente
let newUl = document.createElement("ul");
let newLi1 = document.createElement("li");
let newLi2 = document.createElement("li");

// Befüllen der neuen Elemente
newLi1.innerText = "UP 1";
newLi2.innerText = "UP 2";

// Anfügen der neuen Elemente

newUl.appendChild(newLi1);
newUl.appendChild(newLi2);


// Ersetzen des letzten li's

let liToReplace = ul.lastElementChild;
ul.replaceChild(newUl, liToReplace);

// Kopieren einer node

// nodeDieKopiertWerdenSoll.cloneNode(); => Liefert eine Kopie der aufrufenden Node, ohne ihre Childs
// 

let ulCopy = ul.cloneNode(); // liefert nur den ul-Tag und seine Attribute, nicht deren children
ulCopy.innerHTML = ul.innerHTML; // kopiert das HTML zwischen den <ul> Tags in die Kopie der ul
body.appendChild(ulCopy);  // Hängt leere ul an den Body an

let secondImportantP = importantP.cloneNode(); // Gibt uns p ohne Text zurück
secondImportantP.innerText = importantP.innerText; // Kopiert den Text in den neuen p Tag
body.appendChild(secondImportantP); // Fügt den neuen p Tag am Ende des Bodys an

// Wir können prüfen, ob eine node ein descendant von einer anderen ist
// node.contains(node2) wird geprüft ob node2 von node abstammt
// Gibt true oder false zurück

body.contains(ul.firstElementChild); // => true, da jedes Element Descendant von body ist
ul.contains(importantP); // False, da importantP nicht von ul abstammt
