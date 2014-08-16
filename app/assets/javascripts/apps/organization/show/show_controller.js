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
        organization = organization || Marbles.request('get:organization', id);
        Marbles.execute('when:fetched', organization, function () {
          Marbles.mainRegion.show(M.fn.getLayout(Show, onShow, organization));
        });
      }
    };
  });

}());
