/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";
  
  Marbles.module("FindApp", function (FindApp, Marbles, Backbone, Marionette, $, _) {
    FindApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        find: 'showList'
      }
    });

    Marbles.vent.on('find:list', function () {
      M.fn.nav('find');
      FindApp.List.Controller.showList();
    });

    Marbles.addInitializer(function () {
      new FindApp.Router({
        controller: FindApp.List.Controller
      });
    });
  });

}());
