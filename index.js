
$(document).ready(function(){
   
   setTimeout(function() {
       $('#splash').hide(700);
       $('#main').show(700);
       $('body').removeClass('black');
       $('body').removeClass('no-scroll');
       $('#menu').removeClass("ocultar");
       $('#menu').addClass("visible");
    }, 3000);

 })