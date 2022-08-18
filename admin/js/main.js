$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
   nav:true,
   autoplay:true,
   autoplayTimeout:3000,
   dots:false,
   items:3,
   loop:true,
   margin:50,
   navText:["<span class='fa fa-arrow-left'></span >","<span class='fa fa-arrow-right'></span>"],
   responsive:{
    0:{
      nav:false,
      items:1
    },
     600:{
      margin:10,
      items:2
    },
     1000:{
      items:3
    }
   }

});


  AOS.init();
});