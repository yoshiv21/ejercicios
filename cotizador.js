// 1. VARIABLES

var volvo = document.getElementById("volvo")
var saab = document.getElementById("saab")
var opel = document.getElementById("opel")
var audi = document.getElementById("volvo")
var boton = document.getElementById("cotizar")

var botonCotizar = document.getElementById("boton-resultado")

// 2. FUNCIONES

function cotizar(a,c,c){
    return (a * b / c )
};


// 3. EVENTOS

boton.addEventListener("click", function(){

    var cv = volvo.value;
    var cs = saab.value;
    var co = opel.value;
    var ca = audi.value;
    var botonResultado = cotizar(cv, cs, co, ca);

    frase.innerHTML = botonResultado

});