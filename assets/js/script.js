document.querySelector( "#nav-toggle" )
.addEventListener( "click", function() {
  this.classList.toggle( "active" );
});

// re-write the above code in jQuery - I don't understand what querySelector does

// Opens and closes sidebar navigation on mobile devices
$(document).ready(function(){

  $("#nav-toggle").click(function(event) {
    event.preventDefault();
    $(".left-col").toggleClass("open");
  });

  (function($) {
      var $window = $(window),
          $leftCol = $('.left-col'),
          $navToggle = $('#nav-toggle');

      function resize() {
        if ( ($window.width() > 979) && ($leftCol.hasClass('open'))) {
            $leftCol.removeClass('open');
            $navToggle.removeClass('active'); // TODO: put these two lines into its own function as you repeat yourself below
        }
      }

      $window
        .resize(resize)
        .trigger('resize');
  })(jQuery);


function smoothScroll (duration) {
  $('a[href="#about-me"],a[href="#my-works"],a[href="#contact-me"]').on('click', function(event) { //
    var target = $( $(this).attr('href') ),
    $leftCol = $('.left-col'),
    $navToggle = $('#nav-toggle'); // look at the href attribute on the link the user clicked and store it in the target variable

    if( target.length ) { // if the target has a length i.e. it's not just a blank hash # then...
      event.preventDefault(); // ... prevent the default action on the event (which is the click). The default action is reloading of the page.
      $( 'html, body' ).animate({ // instead, animate the html and body
        scrollTop: target.offset().top // start scrolling and animate the html & body too it's offset from the top
      }, duration); // and do it over the duration set in the call
      $leftCol.removeClass('open');
      $navToggle.removeClass('active');
    }
  });
}

// Originally I used $('a[href^="#"]') that looks for all hrefs in the document that has a # at the start of the string.
// However, this conflicted with my CSS method using :target to open modals

smoothScroll(500);




}); // end of document.ready()
