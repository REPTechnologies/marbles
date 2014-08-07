(function () {
  'use strict';

  Marbles.module('EventApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {
    Show.Layout = Marionette.LayoutView.extend({
      template: 'event/show/show',
      className: 'event',
      templateHelpers: Marbles.EventApp.TemplateHelpers,
      regions: {
      }
    });
  });

}());
