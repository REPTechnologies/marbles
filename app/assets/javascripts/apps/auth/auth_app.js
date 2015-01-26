(function () {
  'use strict';

  Marbles.module('AuthApp', function (AuthApp, Marbles, Backbone, Marionette, $, _) {
    this.startWithParent = false;

    Marbles.commands.setHandler('start:auth', function (layout) {
      return new AuthApp.Show.Controller({
        region: layout.authRegion
      });
    });

    Marbles.commands.setHandler('new:session', function () {
      window.location = Routes.new_user_session_path();
    });

    Marbles.commands.setHandler('show:login:modal', function () {
      Marbles.headerRegion.currentView.authRegion.$el.find('.log-in').click();
    });
  });

}());
