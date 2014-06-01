/*jslint indent: 2, nomen: true*/
/*global $, Marbles, JST, gon, resizeFooter */
(function () {
  "use strict";

  $(document).ajaxSend(function (e, xhr, options) {
    var token = $('meta[name="csrf-token"]').attr('content');
    xhr.setRequestHeader('X-CSRF-Token', token);
  });

  $(function () {
    // Register all dust templates
    $.each(JST, function (name, template) {
      template();
    });

    // Start the application
    Marbles.start({
      currentUser: gon.current_user,
      foci: gon.foci,
      scopes: gon.scopes,
      eventTypes: gon.event_types
    });

    resizeFooter();
  });

}());
