$(document).ready(function () {
    console.log("jquey is working");
    let flag = false;
    let btn_click = false;
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
        if (btn_click == false) {
            btn_click = true;
            desplazamineto_logo();
        }
        $("#i_mision").removeAttr("hidden");
        gsap.from("#i_mision", { duration: 2, opacity: 0 })
        
    });
    $('#btn_vision').on('click', function () {
        if (btn_click == false) {
            btn_click = true;
            desplazamineto_logo();
        }
        $("#i_vision").removeAttr("hidden");
        gsap.from("#i_vision", { duration: 4, opacity: 0 })
        
    });
    $('#btn_objetivos').on('click', function () {
        if (btn_click == false) {
            btn_click = true;
            desplazamineto_logo();
        }
        $("#i_objetivos").removeAttr("hidden");
        gsap.from("#i_objetivos", { duration: 2, opacity: 0 })
        });
    //     $(id_btn).on('click',function () {
    //         console.log("Ckick me ");
    //         $(id_icono).removeAttr("hidden");
    //         gsap.from(id_icono, { duration: 2, opacity: 0 })
    //     });
    //     $(id_btn).on('click',function () {
    //         console.log("Ckick me ");
    //         $(id_icono).removeAttr("hidden");
    //         gsap.from(id_icono, { duration: 2, opacity: 0 })
    //     });
    //     Animaciones_iconos("#btn_vision", "#i_vision");
    //     Animaciones_iconos("#btn_objetivos","#i_objetivos");
        
        
});
function desplazamineto_logo() {
    gsap.to('#logo_inicio', {
        duration: 1.5,
        delay: 0.5,
        x: 550,
        rotation: 360
    });
}
