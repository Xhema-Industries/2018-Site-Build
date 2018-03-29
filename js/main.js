$(function() {
  var hash = location.hash;

    $('button.close').click(function(evt){
      evt.preventDefault();
      window.location.hash = '';
      $('#submited').modal('hide');
    });

    // Animate on Scroll
    AOS.init({
      // disable: 'mobile'
    });

    // Bootstrap carousel add active to first slide and Time Interval
    $('#NYSpaces').carousel({
      interval: false
    })
    $(".carousel-inner .carousel-item:nth-child(1)").addClass("active");

    $('.nav a').on('click', function(){
      $('.nav').find('active').removeClass('active');
      $(this).parent().addClass('active');
    });

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

     // Portfolio Click Functions

     // City onClick to Open Grid
      $( ".city" ).click(function() {
        $( "#city-grid" ).fadeIn( "slow" );
      });
        // each port item onClick functions
        $( ".gramercy" ).click(function() {
          $( ".gramercy-open" ).slideIn( "slow" );
        });
        $( ".96street" ).click(function() {
          $( ".96-street-open" ).slideIn( "slow" );
        });

     // Country onClick to Open Grid
      $( ".country" ).click(function() {
        $( "#country-grid" ).fadeIn( "slow" );
      });
        // each port item onClick functions
        $( ".georgian-estate" ).click(function() {
          $( ".georgian-estate-open" ).slideIn( "slow" );
        });
        $( ".hamptons" ).click(function() {
          $( ".hamptons-open" ).slideIn( "slow" );
        });

});

// Stop Video from Playing after modalClose
autoPlayYouTubeModal();

//FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
function autoPlayYouTubeModal() {
   var trigger = $("body").find('[data-toggle="modal"]');
   trigger.click(function () {
       var theModal = $(this).data("target"),
           videoSRC = $(this).attr("data-theVideo"),
           videoSRCauto = videoSRC + "?autoplay=1";
       $(theModal + ' iframe').attr('src', videoSRCauto);
       $(theModal + ' button.close').click(function () {
           $(theModal + ' iframe').attr('src', videoSRC);
       });
   });
};
