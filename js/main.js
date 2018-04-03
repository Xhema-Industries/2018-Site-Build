$(function() {

    // Animate on Scroll
    AOS.init({
      disable: 'mobile';
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

});
