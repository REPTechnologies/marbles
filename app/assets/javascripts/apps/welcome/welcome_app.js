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

    WelcomeApp.addInitializer(function () {
      WelcomeApp.router = new WelcomeApp.Router({
        controller: WelcomeApp.Show.Controller
      });
    });
  });

}());
