/*jslint indent: 2, nomen: true*/
/*global $, Marbles, JST */
(function () {
  "use strict";

  $(function () {
    // Register all dust templates
    $.each(JST, function (name, template) {
      template();
    });

    // Define common utility functions
    M.fn = {
      getLayout: function (SubModule) {
        return new SubModule.Layout();
      }
    };

    // Start the application
    Marbles.start();
  });

}());
