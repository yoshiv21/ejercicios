// 1. VARIABLES
var numA = document.getElementById("numA");
var numB = document.getElementById("numB");
var boton = document.getElementById("boton-sumar");
var areaResultado = document.getElementById("resultado");

// 2. FUNCIONES
function suma(a, b){
    return (a + b);
}
// 3. EVENTOS
boton.addEventListener("click", function(){
    // 1. Necesito obtener los dos números a sumar
    var primerNumero = parseInt(numA.value);
    var segundoNumero = parseInt(numB.value);
    // 2. Necesito sumar esos dos números
    var res = suma(primerNumero, segundoNumero)
    // 3. Necesito expresarlos en la página web.
    areaResultado.innerHTML = res
})


// 1. VARIABLES
var numX = document.getElementById("numX");
var numY = document.getElementById("numY");
var boton = document.getElementById("boton-restar");
var areaResultadoResta = document.getElementById("resultadoResta");

// 2. FUNCIONES
function restar(x, y){
    return ( x - y)
};

// 3. EVENTOS
boton.addEventListener("click", function(){
    var primerNumero = parseInt(numX.value);
    var segundoNumero = parseInt(numY.value);

    var res = restar(primerNumero, segundoNumero)
    areaResultadoResta.innerHTML = res
});

