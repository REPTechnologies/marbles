(function () {
  'use strict';
  
  Marbles.module('FindApp', function (FindApp, Marbles, Backbone, Marionette, $, _) {
    FindApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        find: 'showList'
      }
    });

    Marbles.vent.on('find:list', function () {
      M.fn.nav('find');
    });

    Marbles.addInitializer(function () {
      FindApp.router = new FindApp.Router({
        controller: FindApp.List.Controller
      });
    });
  });

}());
