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

    const numActualitzar = parseInt(document.getElementById("indexActualitzar").value) - 1;
    const novaFruita = document.getElementById("fruitaActualitzada").value;
    if (numActualitzar >= 0 && numActualitzar < fruites.length && novaFruita) {
        fruites[numActualitzar] = novaFruita;
        mostrarFruites();
        document.getElementById("indexActualitzar").value = ""; //LLIMPIAR INPUT NUMERO
        document.getElementById("fruitaActualitzada").value = ""; //LLIMPIAR INPUT NOM
    } else {
        alert("Numero o nom no valids");
    }

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