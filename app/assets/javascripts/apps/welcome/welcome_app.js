(function () {
  'use strict';

  Marbles.module('WelcomeApp', function (WelcomeApp, Marbles, Backbone, Marionette, $, _) {
    WelcomeApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        '': 'showWelcome'
      }
    });

    Marbles.vent.on('welcome:show', function () {
      M.fn.nav('');
    });

    var demux = {
      showWelcome: function () {
        return new WelcomeApp.Show.Controller();
      }
    };

    Marbles.addInitializer(function () {
      WelcomeApp.router = new WelcomeApp.Router({controller: demux});
    });
  });

}());
