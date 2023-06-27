document.addEventListener("DOMContentLoaded", () => {
    let total_compra = 0;
    let lista_items = "";
    let item = "";
    do {
        item = solicitarCodigo();

        if (item != -1) {

            let descripcion = getDescripcionArticulo(item);

            if (descripcion == "" ) {

                alert("articulo no encontrado");

            }else {    

                let importe = getImporte(item);

                lista_items += descripcion;
                total_compra += importe;

            }
        }
    } while (item != "terminar" && item != -1);
    if (total_compra > 0) {
        document.write("Lista de items comprados : <br>" + lista_items + "<br>");
        document.write("Total: $" + total_compra);
    } else {
        document.write("Compra vacia!");
    }
});

function solicitarCodigo() {
    let item = prompt("Ingrese el codigo del item. (Terminar) para finalizar la compra");

    if (validarInput(item)) {

        return item;

    }

    return -1;
}
function validarInput(input) {
    if (input == "") {

        alert("Codigo vacio!");
        return false;
    }

    if (!input || input.toLowerCase() == "terminar") {

        return false;
    }
    if (isNaN(parseInt(input))) {


        alert("Ingrese un numero valido");
        return false;

    }

    return true;
}
function getDescripcionArticulo(item) {
    let descripcion = "";

    switch (item) {
        case "1":

            descripcion = "Monitor - $150000" + "<br>";
            break;

        case "2":

            descripcion = "Teclado - $20000" + "<br>";
            break;

        case "3":
            descripcion = "Headset - $15000" + "<br>";
            break;

        case "4":
            descripcion = "Mouse - $12000" + "<br>";
            break;

        case "5":
            descripcion = "Placa de video $450000" + "<br>";
            break;
    }
    return descripcion;
}
function getImporte(item) {

    let importe = -1;
    switch (item) {

        case "1":

            importe = 150000;
            break;

        case "2":

            importe = 20000;
            break;

        case "3":

            importe = 15000;
            break;

        case "4":

            importe = 12000;
            break;
        
        case "5":

            importe = 450000;
            break;
    }
    return importe;
}