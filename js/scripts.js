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


//Abrir el menú de la hamburguesa
//Variables
const hamburguer = document.getElementById('hamburguerIcon');
const menuHamburguer = document.getElementById('menuHamburguer');
var hamburguerYesNo = true;
//funcion
var abrirMenu = function(){
    if (hamburguerYesNo) {
        menuHamburguer.style.display = "block";
        hamburguerYesNo = false;
    } else {
        menuHamburguer.style.display = "none";
        hamburguerYesNo = true;
    }
}
//Evento
hamburguer.addEventListener('click', abrirMenu);


// // Al apachar en el body excepto el menu cerrar el menu

// Crear Variables
var body = document.getElementById('body');

// Agregar funciones
body.addEventListener("click", function () {
    cerrarNav();
}, false);

hamburguer.addEventListener("click", function (ev) {
    ev.stopPropagation();
}, false);

// Crear funciones
var cerrarNav = function () {
    menuHamburguer.style.display = "none";
    hamburguerYesNo = true;
}



// // Al hacer scroll eliminar el menu responsivo
// Agregar evento
window.addEventListener('scroll', cerrarNav)