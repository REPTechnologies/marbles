(function () {
  'use strict';

  Marbles.module('Entities', function (Entities, Marbles, Backbone, Marionette, $, _) {

    Entities.Organization = Backbone.RelationalModel.extend({
      paramRoot: 'organization',
      urlRoot: Routes.v1_organizations_path()
    });

    Entities.OrganizationsCollection = Backbone.Collection.extend({
      model: Entities.Organization,
      url: Routes.v1_organizations_path()
    });

  });

}());
