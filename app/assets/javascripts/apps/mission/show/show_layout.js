(function () {
  'use strict';

  Marbles.module('MissionApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {
    Show.Layout = Marionette.LayoutView.extend({
      template: 'mission/show/show'
    });
  });

}());
