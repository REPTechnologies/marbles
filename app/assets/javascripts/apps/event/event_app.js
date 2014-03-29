/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module("EventApp", function (EventApp, Marbles, Backbone, Marionette, $, _) {
    EventApp.Router = Marionette.AppRouter.extend({
      appRoutes: {}
    });

    var API = {};

    Marbles.addInitializer(function () {
      new EventApp.Router({
        controller: API
      });
    });
  });

}());
