/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module("OrganizationApp", function (OrganizationApp, Marbles, Backbone, Marionette, $, _) {
    OrganizationApp.Router = Marionette.AppRouter.extend({
      appRoutes: {}
    });

    var API = {};

    OrganizationApp.addInitializer(function () {
      router = new OrganizationApp.Router({
        controller: API
      });
    });
  });

}());
