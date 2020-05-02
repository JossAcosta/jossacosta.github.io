
$(document).ready(function(){
    setTimeout(function() {
       $('#splash').hide(700);
       $('#fondo-portada').show(700);
       $('body').removeClass('no-scroll');
       $('#menu').removeClass("ocultar");
       $('#menu').addClass("visible");
    }, 3000);
 })