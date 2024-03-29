(function () {
  'use strict';

  Marbles.module('OrganizationApp', function (OrganizationApp, Marbles, Backbone, Marionette, $, _) {
    OrganizationApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        'organization/:id': 'showOrganization'
      }
    });

    Marbles.vent.on('organization:show', function () {
      var args = new Args([{id: Args.INT | Args.Required}], arguments);
      M.fn.nav('organization/' + args.id);
    });

    var demux = {
      showOrganization: function showOrganizationFn(id) {
        return new OrganizationApp.Show.Controller({id: id});
      }
    };

    Marbles.addInitializer(function () {
      OrganizationApp.router = new OrganizationApp.Router({controller: demux});
    });
  });

}());
