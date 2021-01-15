$(document).ready(function(){
    console.log("jquey is working");
    let flag =false;
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        flag=true
    }
    if (flag==true){
        console.log('Esto es un dispositivo móvil');
        $("#menu").removeClass("align-items-start");
        $("#menu").addClass("align-items-center");
        $("#redes_sociales").removeClass("align-items-end");
        $("#redes_sociales").addClass("align-items-center");
    }else{
        console.log('Esto es una pc');
        $("#menu").removeClass("align-items-center");
        $("#menu").addClass("align-items-start");
        $("#redes_sociales").removeClass("align-items-center");
        $("#redes_sociales").addClass("align-items-end");
        
    }
       
});
