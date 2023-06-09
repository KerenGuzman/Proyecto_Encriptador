var boton = document.querySelector("#boton1");
var boton2 = document.querySelector("#boton2");
var textArea = document.querySelector("#text1");
var textArea2 = document.querySelector("#text2");
var cambiosRealizados = [];

boton.addEventListener("click", encriptar);

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