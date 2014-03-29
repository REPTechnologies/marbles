/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";
  
  Marbles.module("FindApp", function (FindApp, Marbles, Backbone, Marionette, $, _) {
    FindApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        '': 'showFind'
      }
    });

    var API = {
      showFind: function () {
        FindApp.List.Controller.showList();
      }
    };

    Marbles.addInitializer(function () {
      new FindApp.Router({
        controller: API
      });
    });
  });

}());
