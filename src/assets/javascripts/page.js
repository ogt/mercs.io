(function() {
  var firebase = new Firebase('https://mercsio.firebaseio.com/'),
      messages = firebase.child('message'),
      form = $('#contact-form');

  form.on('submit', function(e) {
    var information = {
      email: form.find('.email').val(),
      phone: form.find('.phone').val(),
      company: form.find('.company').val(),
      name: form.find('.name').val(),
      linkedin: form.find('.linkedin').val(),
      message: form.find('.message').val()
    };

    form.find('.alert').remove();

    try {
      messages.push(information);
      form.find('.modal-body').prepend('<div class="alert alert-success" role="alert">Thank you! Your message was sent successfuly.</div>');
      form.find('input, textarea').val('');
    } catch (ex) {
      form.find('.modal-body').prepen('<div class="alert alert-danger" role="alert">There was an error</div>');
    }


    e.preventDefault();
  });

  jQuery(function($) {
    $(window).on('scroll', function() {
      $('body').toggleClass('scrolled', $(this).scrollTop() > 0);
    });
  });
}).call(this);
