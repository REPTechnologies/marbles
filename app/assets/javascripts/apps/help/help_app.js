(function () {
  'use strict';

  Marbles.module('HelpApp', function (HelpApp, Marbles, Backbone, Marionette, $, _) {
    HelpApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        'help': 'showHelp'
      }
    });

    Marbles.vent.on('help:show', function () {
      M.fn.nav('help');
    });

    var demux = {
      showHelp: function () {
        return new HelpApp.Show.Controller();
      }
    };

    Marbles.addInitializer(function () {
      HelpApp.router = new HelpApp.Router({controller: demux});
    });
  });

}());
