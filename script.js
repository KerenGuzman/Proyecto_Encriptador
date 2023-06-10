var boton = document.querySelector("#boton1");
var boton2 = document.querySelector("#boton2");
var textArea = document.querySelector("#text1");
var textArea2 = document.querySelector("#text2");
var cambiosRealizados = [];

boton.addEventListener("click", encriptar);

function encriptar() {
    var texto = textArea.value;
    var textoT = "";
    if (texto === texto.toLowerCase()) {
        for (var i = 0; i < texto.length; i++) {
            var elemento = texto[i];
            if (elemento == "a") {
                textoT += "ai";
                console.log(textoT);
            } else if (elemento == "e") {
                textoT += "enter";
            } else if (elemento == "i") {
                textoT += "imes";
            } else if (elemento == "o") {
                textoT += "ober";
            } else if (elemento == "u") {
                textoT += "ufat";
            } else {
                textoT += texto[i];
            }
        }
    } else {
        textoT = "solo minusculas";
    }
    textArea2.value = textoT; // Mostrar todos los cambios en el área de texto

}

boton2.addEventListener("click", desencriptar);

function desencriptar() {
    var textoe = textArea2.value;
    var textoT = "";
    var i = 0;

    if (textoe === textoe.toLowerCase()) {
        while (i < textoe.length) {
            var elemento = textoe[i];
            if (elemento === "a" && textoe.substr(i, 2) === "ai") {
                textoT += "a";
                i += 2;
            } else if (elemento === "e" && textoe.substr(i, 5) === "enter") {
                textoT += "e";
                i += 5;
            } else if (elemento === "i" && textoe.substr(i, 4) === "imes") {
                textoT += "i";
                i += 4;
            } else if (elemento === "o" && textoe.substr(i, 4) === "ober") {
                textoT += "o";
                i += 4;
            } else if (elemento === "u" && textoe.substr(i, 4) === "ufat") {
                textoT += "u";
                i += 4;
            } else {
                textoT += textoe[i];
                i++;
            }
        }
    } else {
        textoT = "solo minusculas";
    }
    console.log(textoT);
    textArea.value = textoT;
    // Aquí puedes hacer lo que necesites con el texto desencriptado (resultado)
}

/*


function encriptar() {
    var vocales = {
        "a": "1",
        "e": "2",
        "i": "3",
        "o": "4",
        "u": "5"
    };
    /*textArea2.value = textArea.value;

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
}*/