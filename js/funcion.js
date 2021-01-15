$(document).ready(function(){
    console.log("jquey is working");
    let flag =false;
    if ( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        flag=true
    }
    if (flag==true){
        console.log('Esto es un dispositivo móvil');
        $("#menu").removeClass("align-items-start");
        $("#menu").addClass("align-items-center");
        $("#redes_sociales").removeClass("align-items-start");
        $("#redes_sociales").addClass("align-items-center");
        $("#contactos").removeClass("align-items-start");
        $("#contactos").addClass("align-items-center");
    }
    $("#logo").click(function(){
        window.location="./index.html";
	});
       
});
