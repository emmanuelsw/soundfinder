// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery3
//= require turbolinks
//= require semantic-ui
//= require plyr
//= require_tree .

$(document).on("turbolinks:load", function() {

  /* Login popup */
  $('.login.button')
    .popup({
      popup : $('.login.popup'),
      on    : 'click',
      inline     : true,
      position   : 'bottom right',
    })
  ;

  /* Register popup */
  $('.register.button')
    .popup({
      popup : $('.register.popup'),
      on    : 'click',
      inline     : true,
      position   : 'bottom right',
    })
  ;

  /* Audio element */
  var players = plyr.setup({
    controls: ['play', 'progress', 'current-time']
  });

});

toastr.options = {
  "closeButton": true,
  "debug": false,
  "positionClass": "toast-top-right",
  "newestOnTop": false,
  "progressBar": false,
  "preventDuplicates": true,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "slideDown",
  "hideMethod": "slideUp"
};
