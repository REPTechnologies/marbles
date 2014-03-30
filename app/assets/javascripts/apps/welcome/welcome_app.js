/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module("WelcomeApp", function (WelcomeApp, Marbles, Backbone, Marionette, $, _) {
    WelcomeApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        '': 'showWelcome'
      }
    });

    var API = {
      showWelcome: function () {
        WelcomeApp.Show.Controller.showWelcome();
      }
    };

    Marbles.vent.on('welcome:show', function () {
      M.fn.nav('');
      API.showWelcome();
    });

    WelcomeApp.addInitializer(function () {
      new WelcomeApp.Router({
        controller: API
      });
    });
  });

}());
