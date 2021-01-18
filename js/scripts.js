// Posicionar arrow 
// variables
var slideImg = document.getElementById('slide'),
flecha = document.getElementById('flecha'),
inicio = document.getElementById('inicio'),
alturaInicio = inicio.offsetTop,
newTop = alturaInicio - flecha.offsetHeight*1.4
// funcion
var posicionarFlecha = function(){
    setTimeout(function(){
        alturaInicio = inicio.offsetTop;
        newTop = alturaInicio - flecha.offsetHeight*1.4;
        flecha.style.top = newTop + "px";
    }, 400);
}
posicionarFlecha(); 


//Abrir el menú de la hamburguesa
//Variables
const hamburguer = document.getElementById('hamburguerIcon');
const menuHamburguer = document.getElementById('menuHamburguer');
var hamburguerYesNo = true;
//funcion
var abrirMenu = function(){
    var menuHeight = menuHamburguer.offsetHeight;
    if (hamburguerYesNo) {
        hamburguerYesNo = false;
        gsap.to("#menuHamburguer", {
            duration: 0.01,
            height: 325
        });
    } else {
        cerrarNav();
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
    hamburguerYesNo = true;
    gsap.to("#menuHamburguer", {
        duration: 0.01,
        height: 0
    });
}



// // Al hacer scroll eliminar el menu responsivo
// Agregar evento
window.addEventListener('scroll', cerrarNav);



// // // // Li del menu responsivo lleva al lugar que insica

// // // Crear variables
// var servicios = document.getElementById('servicios'),
// contactanos = document.getElementById('contactanos'),
// proyectos = document.getElementById('proyectos'),
// integrantes = document.getElementById('integrantes');

// // // Crear funciones
// var irLista = function() {
//     var nombre = this.innerHTML;
//     var gato = "#";
//     location.href = "#";
//     location.href = gato + nombre.toLowerCase();
// }
// // // Añadir eventos y funciones
// for (let i = 0; i < menuHamburguer.childElementCount; i++) {
//     menuHamburguer.children[i].addEventListener('click', irLista);
// }



// // // Ubicar la flecha en su lugar cada vez que se cambie de tamaño a la pantalla

// // Añadir eventos y funciones
window.addEventListener("resize", posicionarFlecha);



// // // Creacion del slide del article

// // Crear funciones
var comprobarVisibilidad = function() {
    setTimeout(function(){
        var slideArticle = document.getElementById('slideArticle'),
        styleSlideArticle = window.getComputedStyle(slideArticle),
        opacitySlideArticle = styleSlideArticle.getPropertyValue('opacity');
        if (opacitySlideArticle != "0") {
            gsap.to(".slideArticle2", {
                duration: 1,
                opacity: 0.7
            });
            gsap.to(".slideArticle3", {
                duration: 1,
                opacity: 0.7
            });
            gsap.timeline()
                .from(".slideArticle2",{delay: 5, x: 50, zindex: 2})
        }
        else{
            gsap.to(".slideArticle2", {
                duration: 0.5,
                opacity: 0
            });
            gsap.to(".slideArticle3", {
                duration: 0.5,
                opacity: 0
            });
        }
        
    }, 900);
}

// // Añadir eventos y funciones
window.addEventListener('scroll', comprobarVisibilidad);
comprobarVisibilidad();



