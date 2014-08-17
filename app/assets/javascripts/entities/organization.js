(function () {
  'use strict';

  Marbles.module('Entities', function (Entities, Marbles, Backbone, Marionette, $, _) {

    Entities.Organization = Marbles.RelationalModel.extend({
      paramRoot: 'organization',
      urlRoot: Routes.v1_organizations_path()
    });

    Marbles.respond.setHandler('get:organization', function (id) {
      var organization = Entities.Organization.findOrCreate({id: id});
      organization.fetch();
      return organization;
    });

  });

}());
