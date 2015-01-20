(function () {
  'use strict';

  Marbles.module('HelpApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {
    Show.Layout = Marionette.LayoutView.extend({
      template: 'help/show/show'
    });
  });

}());
