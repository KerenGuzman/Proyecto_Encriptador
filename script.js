var boton = document.querySelector("#boton1");
var boton2 = document.querySelector("#boton2");
var textArea = document.querySelector("#text1");
var textArea2 = document.querySelector("#text2");
var cambiosRealizados = [];

boton.addEventListener("click", encriptar);

/*
OTRA FORMA

function encriptar() {
    var texto = textArea.value;
    var textoT = "";
    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoT += " area ";
        } else if (texto[i] == "e") {
            textoT += " enter ";
        } else if (texto[i] == "i") {
            textoT += " intro ";
        } else if (texto[i] == "o") {
            textoT += " olto ";
        } else if (texto[i] == "u") {
            textoT += " unta ";
        } else {
            textoT += texto[i];
        }

    }
    cambiosRealizados.push(textoT.slice()); // Agregar una copia del cambio al array

    textArea2.value = cambiosRealizados.join(', '); // Mostrar todos los cambios en el área de texto
    console.log(cambiosRealizados);
}

boton2.addEventListener("click", desencriptar);

function desencriptar() {
    var textoDesencriptado = textArea2.value;

    for (var i = 0; i < cambiosRealizados.length; i++) {
        var cambio = cambiosRealizados[i];
        var regex = /area|enter|ilo|olto|unta/g;

        textoDesencriptado = textoDesencriptado.replace(regex, function(matched) {
            switch (matched) {
                case "area":
                    return "a";
                case "enter":
                    return "e";
                case "ilo":
                    return "i";
                case "olto":
                    return "o";
                case "unta":
                    return "u";
                default:
                    return matched;
            }
        });
    }

    textArea.value = textoDesencriptado;
}*/


function encriptar() {
    var vocales = {
        "a": "1",
        "e": "2",
        "i": "3",
        "o": "4",
        "u": "5"
    };
    /*textArea2.value = textArea.value;*/

    var encriptador = textArea.value;
    for (var a = 0; a < encriptador.length; a++) {
        var elemento = encriptador[a];
        //Evaluar si es minuscula
        if (encriptador === encriptador.toLowerCase()) {
            //determina si es vocal, hasOwnroperty compara el valor de elemento con vocales y busca su propiedad respectiva
            if (vocales.hasOwnProperty(elemento)) {
                //reemplazo de la vocal original por la propiedad del elemento
                encriptador = encriptador.replace(encriptador[a], vocales[elemento]);
            }
        } else {
            encriptador = "Solo minusculas";
        }
    }
    textArea2.value = encriptador;

}

boton2.addEventListener("click", desencriptar);

function desencriptar() {
    var vocales = {
        "1": "a",
        "2": "e",
        "3": "i",
        "4": "o",
        "5": "u"
    };
    var desencriptar = textArea2.value;
    for (var a = 0; a < desencriptar.length; a++) {
        var elementoDes = desencriptar[a];
        //Evaluar si es minuscula
        if (desencriptar === desencriptar.toLowerCase()) {
            //determina si es numero
            if (vocales.hasOwnProperty(elementoDes)) {
                //reemplazo del numero por la propiedad del elemento, es decir la vocal original
                desencriptar = desencriptar.replace(desencriptar[a], vocales[elementoDes]);
            }
        } else {
            desencriptar = "Solo minusculas";
        }
    }
    textArea.value = desencriptar;
}