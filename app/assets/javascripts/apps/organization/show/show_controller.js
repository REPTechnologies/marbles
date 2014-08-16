(function () {
  'use strict';

  Marbles.module('OrganizationApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {

    function onShow(layout) {
      //addViewsToLayout(layout);
      //listenToTriggers(layout);
      //M.fn.bindModel(layout);
    }

    Show.Controller = {
      showOrganization: function (id, organization) {
        M.fn.getModel(Marbles.Entities.Organization, id, organization).done(function (organization) {
          Marbles.mainRegion.show(M.fn.getLayout(Show, onShow, organization));
        });
      }
    };
  });

}());
