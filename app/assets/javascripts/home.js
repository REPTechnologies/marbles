/*jslint indent: 2, nomen: true*/
/*global $, Marbles, JST, Backbone, M, Args, gon, resizeFooter */
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

    // Define common utility functions
    M.fn = {
      getLayout: function () {
        var args = new Args([
          {SubModule: Args.OBJECT | Args.Required},
          {show: Args.FUNCTION | Args.Optional, _default: $.noop},
          {model: Args.OBJECT | Args.Optional}
        ], arguments),
          layout = new args.SubModule.Layout({
            model: args.model || undefined
          });
        
        layout.on('show', function () {
          args.show.call(this, this);
        });

        return layout;
      },
      bindModel: function (view, bindings, options) {
        view.binder = view.binder || new Backbone.ModelBinder();
        view.binder.bind(view.model, view.el, bindings, options);
      },
      nav: Backbone.history.navigate.bind(Backbone.history),
      errorResponse: function (response) {
        var command = 'error:';
        switch (response.status) {
          case 422:
            command += 'invalid';
            break;
          case 404:
            command += 'notfound';
            break;
          default:
            command += 'unexpected';
            break;
        }
        Marbles.execute(command, response.responseJSON.errors);
      }
    };

    // Start the application
    Marbles.start({
      currentUser: gon.current_user,
      foci: gon.foci,
      eventTypes: gon.event_types
    });

    resizeFooter();
  });

}());
