$(document).ready(function () {
    // Posicionar arrow 
    // variables

    var slideImg = document.getElementById('slide'),
        flecha = document.getElementById('flecha'),
        inicio = document.getElementById('inicio'),
        alturaInicio = inicio.offsetTop,
        newTop = alturaInicio - flecha.offsetHeight * 1.4
    // funcion
    var posicionarFlecha = function () {
        setTimeout(function () {
            alturaInicio = inicio.offsetTop;
            newTop = alturaInicio - flecha.offsetHeight * 1.4;
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
    var abrirMenu = function () {
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
    var comprobarVisibilidad = function () {
        setTimeout(function () {
            var slideArticle = document.getElementById('slideArticle'),
                styleSlideArticle = window.getComputedStyle(slideArticle),
                opacitySlideArticle = styleSlideArticle.getPropertyValue('opacity');
            if (opacitySlideArticle != "0") {
                document.getElementsByClassName("slideArticle2")[0].style.opacity = "0.7"
                document.getElementsByClassName("slideArticle3")[0].style.opacity = "0.7"
            }
        }, 900);
    }

    // // Añadir eventos y funciones
    window.addEventListener('scroll', comprobarVisibilidad);
    comprobarVisibilidad();
    //#region Animaciones de los iconos de botones de filosofia 
    let flag = false;
    let btn_click_mision = false;
    let btn_click_vision = false;
    let btn_click_objetivos = false;
    let btn_click_valores = false;
    if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        flag = true
    }
    if (flag == true) {
        console.log('Esto es un dispositivo móvil');
        $("#menu").removeClass("align-items-start");
        $("#menu").addClass("align-items-center");
        $("#redes_sociales").removeClass("align-items-start");
        $("#redes_sociales").addClass("align-items-center");
        $("#contactos").removeClass("align-items-start");
        $("#contactos").addClass("align-items-center");
    }
    $("#logo").click(function () {
        window.location = "./index.html";
    });
    $('#btn_mision').on('click', function () {
        if (btn_click_mision == false) {
            btn_click_mision = true;
            $("#i_mision").removeAttr("hidden");
            gsap.from("#i_mision", { duration: 2, opacity: 0 });
        }

    });
    $('#btn_vision').on('click', function () {
        if (btn_click_vision == false) {
            btn_click_vision = true;
            $("#i_vision").removeAttr("hidden");
            gsap.from("#i_vision", { duration: 2, opacity: 0 });
        }

    });
    $('#btn_objetivos').on('click', function () {
        if (btn_click_objetivos == false) {
            btn_click_objetivos = true;
            $("#i_objetivos").removeAttr("hidden");
            gsap.from("#i_objetivos", { duration: 2, opacity: 0 });
        }

    });

    $('#btn_valores').on('click', function () {
        if (btn_click_valores == false) {
            btn_click_valores = true;
            $("#i_valores").removeAttr("hidden");
            gsap.from("#i_valores", { duration: 2, opacity: 0 });
        }

    });
    //#endregion
    //#region Aniacmiones de scrolling

    $("a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 600, function () {
                window.location.hash = hash;
            });
        }
    });
    $('#frm_mail').submit(function (e) {
        const postData = {
            nombre: $('#nombre').val(),
            apellido: $('#apellido').val(),
            correo: $('#correo').val(),
            telefono: $('#telefono').val(),
            serv1: $('#servicio1').val(),
            serv2: $('#servicio2').val(),
            serv3: $('#servicio3').val(),
            mensaje:$('#comentario').val()
        };
        let url='./php/sendmail.php';
        $.post(url ,postData, function (response) {
            console.log(response);
            if(response=='Correo enviado'){
                document.getElementById("nombre_cliente").innerHTML=$('#nombre').val();    
            $('#modal_info').modal("hide");
            $('#modal_success').modal("show");
            $('#frm_mail').trigger('reset');
            }else{
                alert("Error no se envio el correo intente en unos segundos");
            }
                  
        });
        e.preventDefault();
    });
});
