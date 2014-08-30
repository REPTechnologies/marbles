(function () {
  'use strict';

  Marbles.module('OrganizationApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {

    Show.Controller = Marbles.Controller.extend({
      initialize: function (options) {
        var id = options.id;
        var organization = options.organization || Marbles.request('get:organization', id);

        this.layout = this.getLayoutView(organization);
        this.show(this.layout, {loading: true});
      },
      getLayoutView: function getLayoutViewFn(organization) {
        return new Show.Layout({model: organization});
      }
    });

  });

}());
