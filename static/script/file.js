let upload = document.querySelector("#upload");

// Erstellen eines FileReaders
upload.addEventListener("change", function () {
    let meinReader = new FileReader();
    console.log(this.files);

    let file = this.files.item(0);

    // Wird ausgelöst sobald der Upload startet
    meinReader.addEventListener("loadstart", load_start);

    // Wird ausgelöst sobald der Einleseprozess erfolgreich abgeschlossen ist
    meinReader.addEventListener("load", on_load);

    // Wird ausgelöst wenn der EInleseprozess fertig ist, egal ob durch Fehler
    // oder Erfolg
    meinReader.addEventListener("loaded", load_end);

    // Wird ausgelöst wenn der Prozess abgebrochen wird
    meinReader.addEventListener("abort", on_abort);

    // Wird ausgelöst falls ein Fehler auftaucht
    meinReader.addEventListener("error", on_error);

    // Wird ausgelöst wenn ein byte eingelsen wird, aber maximal alle 50 ms
    meinReader.addEventListener("progress", on_progress);

    meinReader.readAsText(file);
    // readAsArrayBuffer(file)
    // readAsBinaryString(file)
});

function load_start() {
    console.log("Einlesen wurde gestartet");
}

function on_load() {
    console.log("Einlesen erfolgreich abgeschlossen.");
    document.querySelector("#output").innerText = this.result;
}

function load_end() {
    console.log("Einlesn beendet.");
}

function on_abort() {
    console.log("Einlesen abgebrochen.");
}

function on_error (ev) {
    console.log("Fehler ist aufgetreten.");
    console.error(ev.error);
}

function on_progress (ev) {
    console.info("Liest ein...");
    document.querySelector("#bytes").innerText = ev.total;
    console.info(ev.total);
}