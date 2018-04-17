$(function() {

    // Animate on Scroll
    AOS.init({
      disable: 'mobile'
    });

    // Bootstrap Carousel - add 'active' Class to first slide
    $('#NYSpaces').carousel({
      interval: false
    })
    $(".carousel-inner .carousel-item:nth-child(1)").addClass("active");

    // Add 'active' Class to Nav items when clicked
    $('.nav a').on('click', function(){
      $('.nav').find('active').removeClass('active');
      $(this).parent().addClass('active');
    });

    // Scroll to Top function
    $(window).scroll(function() {
     if ($(document).scrollTop() > 100) {
       $('.nav-item button').show(50);
       $('.navbar').addClass('responsive-padding-scroll');
       $('nav').removeClass('shift');
     } else {
       $('.navbar').addClass('responsive-padding');
       $('.nav-item button').hide(50);
       $('#ritter-tab').on('hide.bs.collapse', function() {
         $('nav').removeClass('shift');
       });
     }
    });

     $('a.nav-link').on('click', function(e) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();
        $('html,body').animate({
          scrollTop: (target.offset().top) - 100
        }, 'slow');
        return false;
      }
     });

     // Portfolio Functions
     var cityport = $("#city-port");
     var countryport = $("#country-port");
     var portfolio = $("#portfolio");

     $('.city-pop').on('click', function() {
        $(cityport).slideToggle();
        $(countryport).slideUp();
        // animate to portfolio div
        var target = cityport;
         if( target.length ) {
             event.preventDefault();
             $('html, body').stop().animate({
                 scrollTop: target.offset().top - 100
             }, 1000);
         }

     });
     $('.country-pop').on('click', function() {
        $(countryport).slideToggle();
        $(cityport).slideUp();
        // animate to portfolio div
        var target = countryport;
         if( target.length ) {
             event.preventDefault();
             $('html, body').stop().animate({
                 scrollTop: target.offset().top - 100
             }, 1000);
         }
     });

     // Close Portfolio Sections
     $('#city-port .close').on('click', function() {
        $(cityport).slideUp();

        var target = portfolio;
         if( target.length ) {
             event.preventDefault();
             $('html, body').stop().animate({
                 scrollTop: target.offset().top - 100
             }, 1000);
         }
     });
     $('#country-port .close').on('click', function() {
        $(countryport).slideUp();

        var target = portfolio;
         if( target.length ) {
             event.preventDefault();
             $('html, body').stop().animate({
                 scrollTop: target.offset().top - 100
             }, 1000);
         }
     });

     // Open Gallery
     $('a.rig-cell').on('click', function() {
        var mydiv = $(this).attr('data');
          $(mydiv).slideToggle();
     });

});
