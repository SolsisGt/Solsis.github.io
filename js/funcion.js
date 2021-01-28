$(document).ready(function () {
    console.log("jquey is working");
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


    
});

