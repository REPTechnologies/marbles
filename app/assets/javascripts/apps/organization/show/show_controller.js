(function () {
  'use strict';

  Marbles.module('OrganizationApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {

    function onShow(layout) {
      //addViewsToLayout(layout);
      //listenToTriggers(layout);
      //M.fn.bindModel(layout);
    }

    Show.Controller = Marbles.Controller.extend({
      showOrganization: function (id, organization) {
        organization = organization || Marbles.request('get:organization', id);
        Marbles.execute('when:fetched', organization, _.bind(this.show, this, M.fn.getLayout(Show, onShow, organization), {loading: true}));
      }
    });

  });

}());
