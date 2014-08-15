(function () {
  'use strict';

  Marbles.module('OrganizationApp', function (OrganizationApp, Marbles, Backbone, Marionette, $, _) {
    OrganizationApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        'organization/:id': 'showOrganization'
      }
    });

    Marbles.addInitializer(function () {
      OrganizationApp.router = new OrganizationApp.Router({
        controller: OrganizationApp.Show.Controller
      });
    });
  });

}());
