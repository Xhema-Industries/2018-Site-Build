$(function() {

    // Animate on Scroll
    AOS.init({
      disable: 'mobile'
    });

    // Lazy Load
    $('.lazy').lazy({
      effect: 'fadeIn',
      effectTime: 1000,
      threshold: 0
    });

    // Bootstrap Carousel - add 'active' Class to first slide
    $('.carousel-home').carousel({
      interval: 5000
    });
    $('.carousel-port').carousel({
      interval: false
    });
    $('.carousel-press').carousel({
      interval: false
    });

    $(".carousel-home .carousel-item:nth-child(1)").addClass("active");
    $(".carousel-press .carousel-item:nth-child(1)").addClass("active");

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

     // Portfolio Section Functions
     // Create Vars from Divs
     var cityport = $("#city-port");
     var countryport = $("#country-port");
     var portfolio = $("#portfolio");
     // Open City Portfolio Section
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
     // Open Country Portfolio Section
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
     // Close City Portfolio Section and scroll up
     $('#city-port .landing-page-button').on('click', function() {
        $(cityport).slideUp();
        var target = portfolio;
         if( target.length ) {
             event.preventDefault();
             $('html, body').stop().animate({
                 scrollTop: target.offset().top - 100
             }, 1000);
         }
     });
     // Close Country Portfolio Section and scroll up
     $('#country-port .landing-page-button').on('click', function() {
        $(countryport).slideUp();
        var target = portfolio;
         if( target.length ) {
             event.preventDefault();
             $('html, body').stop().animate({
                 scrollTop: target.offset().top - 100
             }, 1000);
         }
     });

     $('.my-gallery .close').on('click', function() {
        var target = portfolio;
         if( target.length ) {
             event.preventDefault();
             $('html, body').stop().animate({
                 scrollTop: target.offset().top - 100
             }, 1000);
         }
     });

     // In The Press Functions
     // Show Hide Press Magazines
     var pressThumb = $('.press-thumbs ul li a');
     var pressDivID = $(pressThumb).attr('data');

     var showDiv1 = $('#ArchitectDigestGeorgianThumb').attr('data');
     var showDiv2 = $('#NYSpacesThumb').attr('data');
     var showDiv3 = $('#RobReportjimXhemaThumb').attr('data');
     var showDiv4 = $('#ArchitectDigestCentralParkThumb').attr('data');
     var showDiv5 = $('#RobReportGramercyParkThumb').attr('data');
     var showDiv6 = $('#WMagazineApartmentThumb').attr('data');
     var showDiv7 = $('#WMagazine2009Thumb').attr('data');

     // Thumbnail OnClick Function
     $('#ArchitectDigestGeorgianThumb').on('click', function() {
       // Create Show Var from Data Attribute
        $(showDiv1).show();
        $(showDiv2).hide();
        $(showDiv3).hide();
        $(showDiv4).hide();
        $(showDiv5).hide();
        $(showDiv6).hide();
        $(showDiv7).hide();
     });
     $('#NYSpacesThumb').on('click', function() {
       // Create Show Var from Data Attribute
        $(showDiv2).show();
        $(showDiv1).hide();
        $(showDiv3).hide();
        $(showDiv4).hide();
        $(showDiv5).hide();
        $(showDiv6).hide();
        $(showDiv7).hide();
     });
     $('#RobReportjimXhemaThumb').on('click', function() {
       // Create Show Var from Data Attribute
        $(showDiv3).show();
        $(showDiv1).hide();
        $(showDiv2).hide();
        $(showDiv4).hide();
        $(showDiv5).hide();
        $(showDiv6).hide();
        $(showDiv7).hide();
     });
     $('#ArchitectDigestCentralParkThumb').on('click', function() {
       // Create Show Var from Data Attribute
        $(showDiv4).show();
        $(showDiv1).hide();
        $(showDiv2).hide();
        $(showDiv3).hide();
        $(showDiv5).hide();
        $(showDiv6).hide();
        $(showDiv7).hide();
     });
     $('#RobReportGramercyParkThumb').on('click', function() {
       // Create Show Var from Data Attribute
        $(showDiv5).show();
        $(showDiv1).hide();
        $(showDiv2).hide();
        $(showDiv3).hide();
        $(showDiv4).hide();
        $(showDiv6).hide();
        $(showDiv7).hide();
     });
     $('#WMagazineApartmentThumb').on('click', function() {
       // Create Show Var from Data Attribute
        $(showDiv6).show();
        $(showDiv1).hide();
        $(showDiv2).hide();
        $(showDiv3).hide();
        $(showDiv4).hide();
        $(showDiv5).hide();
        $(showDiv7).hide();
     });
     $('#WMagazine2009Thumb').on('click', function() {
       // Create Show Var from Data Attribute
        $(showDiv7).show();
        $(showDiv1).hide();
        $(showDiv2).hide();
        $(showDiv3).hide();
        $(showDiv4).hide();
        $(showDiv5).hide();
        $(showDiv6).hide();
     });

});
