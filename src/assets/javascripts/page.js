(function() {
  jQuery(function($) {
    $(window).on('scroll', function() {
      $('body').toggleClass('scrolled', $(this).scrollTop() > 0);
    });
  });
}).call(this);
