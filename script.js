let fruites = [];

function mostrarFruites() {
    const llistaFruites = document.getElementById("llistaFruites");
    llistaFruites.innerHTML = "";
    if (fruites.length === 0) {
        llistaFruites.innerHTML = "<li>No hi ha fruites.</li>";
    } else {
        fruites.forEach((fruita, index) => {
            llistaFruites.innerHTML += `<li>${index + 1}. ${fruita}</li>`; //IMPRIMEIX NUMERO INDEX I LA FRUITA
        });
    }
}

function agregarFruita() {
    const novaFruita = document.getElementById("novaFruita").value;
    if (novaFruita) {
        fruites.push(novaFruita); //AFEGEIX LA FRUITA NOVA AL ARRAY FRUITES[]
        document.getElementById("novaFruita").value = "";
        mostrarFruites(); // CRIDA LA FUNCIO MOSTRARFRUITES AUTOMATICAMENT
    } else {
        alert("Introdueix una fruita.");
    }
}

function actualitzarFruita() {



}

function eliminarFruita() {



}