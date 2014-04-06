/*jslint indent: 2, nomen: true*/
/*global $, Marbles, JST, Backbone, M, Args */
(function () {
  "use strict";

  $(function () {
    // Register all dust templates
    $.each(JST, function (name, template) {
      template();
    });

    // Define common utility functions
    M.fn = {
      getLayout: function () {
        var args = Args([
          {SubModule: Args.OBJECT | Args.Required},
          {show: Args.FUNCTION | Args.Optional, _default: $.noop}
        ], arguments);

        var layout = new args.SubModule.Layout();
        layout.on('show', args.show);

        return layout;
      },
      nav: Backbone.history.navigate.bind(Backbone.history)
    };

    // Start the application
    Marbles.start({
      currentUser: gon.current_user
    });
  });

}());
