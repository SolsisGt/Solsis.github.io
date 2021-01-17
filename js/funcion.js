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
smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
    selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
    speed: 2000, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    callback: function(anchor, toggle) {} // Function to run after scrolling
});
