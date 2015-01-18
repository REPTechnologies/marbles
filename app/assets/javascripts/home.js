(function () {
  'use strict';

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
      eventTypes: gon.event_types,
      poll: gon.poll
    });

    resizeFooter();
  });

}());
