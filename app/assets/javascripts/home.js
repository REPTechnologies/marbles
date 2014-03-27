// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function () {
  // Register all dust templates
  $.each(JST, function (name, template) {
    template();
  });

  // Start the application
  Marbles.start();
});
