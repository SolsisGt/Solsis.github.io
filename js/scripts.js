// Posicionar arrow 
// variables
const slideImg = document.getElementById('slide');
const flecha = document.getElementById('flecha');
const inicio = document.getElementById('inicio');
// funcion
var posicionarFlecha = function(){
    const alturaInicio = inicio.offsetTop;
    const newTop = alturaInicio - flecha.offsetHeight - 50;
    flecha.style.top = newTop + "px";
}
posicionarFlecha();
