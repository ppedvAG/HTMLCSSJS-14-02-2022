let first = document.querySelector("#erste");
let zweite = document.querySelector("#zweite");
let container = document.querySelector("#container");

function clicked(e) {
    alert(`Button ${e.target.value} wurde geklickt`);
}

first.addEventListener("click", clicked);

first.addEventListener("click",
        (e) => alert("Capturing: Event ist bei ersten-Div"), true);
        // Mit dem Parameter true, lösen wir auch Events in der 
        // Capturing Phase aus
zweite.addEventListener("click",
        (e) => alert("Capturing: Event ist bei zweiten-Div"), true);
container.addEventListener("click",
        (e) => alert("Capturing: Event ist bei container-Div"), true);
first.addEventListener("click",
        (e) => alert("Bubbling: Event ist bei ersten-Div"));
zweite.addEventListener("click",
        (e) => alert("Bubbling: Event ist bei zweiten-Div"));
container.addEventListener("click",
        (e) => alert("Bubbling: Event ist bei container-Div"));
document.querySelector("input").addEventListener("click",
        (e) => alert("Target: " + e.target.value));

// Events werden in JavaScript von oben(window) nach unten (eigentlichem Ziel)
// weitergereicht
// Die Phase von oben nach Unten ist die Capturing-Phase
// Standardmäßig wird in der Capturing Phase kein Event ausgelöst
// Sobald das Event beim eigentlichen Ziel angekommen ist sprechen wir von der
// Target-Phase, das Target kann immer mit event.target abgefragt werden s.o.
// Nach der Target-Phase kommt die Bubbling-Phase
// Dort wird das Event von unten nach oben weitergereicht

// Wir können die Weiterleitung der Events auch stoppen

document.body.addEventListener("click",
        (e) => e.stopPropagation(), true);
        // Ganze Seite ist nicht mehr klickbar,
        // da der Body in der Capturing-Phase, also von oben nach unten,
        // das Event nicht weiterreicht


// stopPropagatiou() nur mit wichtigem Grund benutzen
// Bubbling ist in den meisten Fällen positiv, da wir uns event-Listener sparen

