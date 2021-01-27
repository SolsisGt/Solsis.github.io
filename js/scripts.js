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
            height: 262
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
        if (opacitySlideArticle != "0" ) {
            document.getElementsByClassName("slideArticle2")[0].style.opacity = "0.7"
            document.getElementsByClassName("slideArticle3")[0].style.opacity = "0.7"            
        }
    }, 900);
}

// // Añadir eventos y funciones
window.addEventListener('scroll', comprobarVisibilidad);
comprobarVisibilidad();


function percentToPixel(inicio, _perc){
    return (inicio.parent().outerWidth()/100)* parseFloat(_perc);
  }
