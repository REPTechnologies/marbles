(function () {
  'use strict';

  Marbles.module('OrganizationApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {

    function onShow(layout) {
      //addViewsToLayout(layout);
      //listenToTriggers(layout);
      //M.fn.bindModel(layout);
    }

    // TODO refactor into M.fn.getModelFn
    function getOrganization(id, organization) {
      var deferred = $.Deferred();
      if (!organization) {
        organization = new Marbles.Entities.Organization({id: id});
        organization.fetch({
          success: function (organization, response, options) {
            deferred.resolve(organization);
          }
        });
      } else {
        deferred.resolve(organization);
      }
      return deferred.promise();
    }

    Show.Controller = {
      showOrganization: function (id, organization) {
        getOrganization(id, organization).done(function (organization) {
          Marbles.mainRegion.show(M.fn.getLayout(Show, onShow, organization));
        });
      }
    };
  });

}());
