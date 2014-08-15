(function () {
  'use strict';

  Marbles.module('OrganizationApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {
    Show.Layout = Marionette.LayoutView.extend({
      template: 'organization/show/show',
      className: 'organization',
      regions: {
      }
    });
  });

}());
