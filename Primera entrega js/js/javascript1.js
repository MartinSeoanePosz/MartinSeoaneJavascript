document.addEventListener("DOMContentLoaded", () => {
    let totalCompra = 0;
    let lista_items = "";
    let item = "";
    let accion = "";
    const listaItems = []
    // do {
    //     item = solicitarCodigo();
    //     if (item != -1) {
    //         let descripcion = getDescripcionArticulo(item);
    //         if (descripcion == "") {
    //             alert("articulo no encontrado");
    //         } else {
    //             let importe = getImporte(item);
    //             lista_items += descripcion;
    //             total_compra += importe;
    //         }
    //     }
    // } while (item != "terminar" && item != -1);

    // if (total_compra > 0) {
    //     document.write("Lista de items comprados : <br>" + lista_items + "<br>");
    //     document.write("Total: $" + total_compra);
    // } else {
        //     document.write("Compra vacia!");
        // }
        const monitor = {
            codigo: 1,
            descripcion: "Monitor Samsung Q65",
            precio: 150000,
        }
        const teclado = {
            codigo: 2,
            descripcion: "Teclado Razer",
            precio: 20000,
        }
        const headset = {
            codigo: 3,
            descripcion: "Headset NogaNet",
            precio: 15000,
        }
        const mouse = {
            codigo: 4,
            descripcion: "Mouse RedDragon",
            precio: 12000,
        }
        const placaDeVideo = {
            codigo: 5,
            descripcion: "asdasd palca ll",
            precio: 450000,
        }
        
        productos = [monitor, teclado, headset, mouse, placaDeVideo]

    do {
        accion = solicitarCodigo()
            if (accion != -1)    {             
                let item = accion - 1
                if (item || item == 0) {
                    if (productos[item]){
                        listaItems.push(productos[item])
                        alert("articulo agregado")  
                    }
                    else {
                        alert("articulo no encontrado");
                    }
                }
                if (accion.toLowerCase() == "terminar"){ break }
            }
        }while ( item != -1 );


        document.write("<html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><link rel='stylesheet' href='/Primera entrega js/css/styles.css'><title>Arma tu pc!</title></head>")
        document.write("<h2 class='titulo1'> LISTA DE ITEMS COMPRADOS <h2>"+ "<br>"+ "<br>")

        document.write("<h4 class='nombre1'>")
        for (let i = 0; i < listaItems.length; i++) {
            let item = listaItems[i]

            document.write(item.descripcion+ "<br>" )
            document.write(" Valor: $" + item.precio + "<br>")
            totalCompra = totalCompra + item.precio
          }

          document.write("</h4>")

        document.write("<p class='items'> TOTAL $ " + totalCompra + "</p>")

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
    if (isNaN(parseInt(input)) && input.toLowerCase() != "terminar" ) {
        alert("Ingrese un numero valido");
        return false;
    }
    return true;
}




// function getDescripcionArticulo(item) {
//     let descripcion = "";
//     switch (item) {
//         case "1":
//             descripcion = "Monitor - $150000" + "<br>";
//             break;
//         case "2":
//             descripcion = "Teclado - $20000" + "<br>";
//             break;
//         case "3":
//             descripcion = "Headset - $15000" + "<br>";
//             break;
//         case "4":
//             descripcion = "Mouse - $12000" + "<br>";
//             break;
//         case "5":
//             descripcion = "Placa de video $450000" + "<br>";
//             break;
//     }
//     return descripcion;
// }
// function getImporte(item) {

//     let importe = -1;
//     switch (item) {
//         case "1":
//             importe = 150000;
//             break;
//         case "2":
//             importe = 20000;
//             break;
//         case "3":
//             importe = 15000;
//             break;
//         case "4":
//             importe = 12000;
//             break;
//         case "5":
//             importe = 450000;
//             break;
//     }
//     return importe;
// }

