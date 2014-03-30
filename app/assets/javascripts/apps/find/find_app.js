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

    var API = {
      showList: function () {
        M.fn.nav('find');
        FindApp.List.Controller.showList();
      }
    };
    
    Marbles.vent.on('find:list', function () {
      M.fn.nav('find');
      API.showList();
    });

    Marbles.addInitializer(function () {
      new FindApp.Router({
        controller: API
      });
    });
  });

}());
