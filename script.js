let fruites = [];

function mostrarFruites() {

    const llistaFruites = document.getElementById("llistaFruites");

    llistaFruites.innerHTML = ""; //LLIMPIAR INPUT
    if (fruites.length === 0) {
        llistaFruites.innerHTML = "<li>No hi ha fruites.</li>"; // ( NOMES SURT DESPRES DE ACTUALITZAR )
    } else {
        fruites.forEach((fruita, index) => {
            llistaFruites.innerHTML += `<li>${index + 1}. ${fruita}</li>`; //IMPRIMEIX NUMERO INDEX I LA FRUITA
        });
    }
}

function AfegirFruita() {

    const novaFruita = document.getElementById("novaFruita").value;

    if (novaFruita) {
        fruites.push(novaFruita); //AFEGEIX LA FRUITA NOVA AL ARRAY FRUITES[]
        document.getElementById("novaFruita").value = ""; //LLIMPIAR INPUT
        mostrarFruites(); // CRIDA LA FUNCIO MOSTRARFRUITES AUTOMATICAMENT
    } else {
        alert("Introdueix una fruita.");
    }
}

function actualitzarFruita() {

    

}

function eliminarFruita() {

    const numEliminar = parseInt(document.getElementById("indexEliminar").value) - 1;

    if (numEliminar >= 0 && numEliminar < fruites.length) {
        fruites.splice(numEliminar, 1);
        mostrarFruites();
        document.getElementById("indexEliminar").value = ""; // LLIMPIAR INPUT 
    } else {
        alert("El index introduit no existeix");
    }

}