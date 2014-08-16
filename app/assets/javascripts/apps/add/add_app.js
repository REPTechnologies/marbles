(function () {
  'use strict';

  Marbles.module('AddApp', function (AddApp, Marbles, Backbone, Marionette, $, _) {
    AddApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        add: 'showNew'
      }
    });

    Marbles.vent.on('add:new', function () {
      M.fn.nav('add');
    });

    Marbles.addInitializer(function () {
      AddApp.router = new AddApp.Router({
        controller: AddApp.New.Controller
      });
    });
  });

}());
