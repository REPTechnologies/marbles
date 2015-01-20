(function () {
  'use strict';

  Marbles.module('ContactApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {
    Show.Layout = Marionette.LayoutView.extend({
      template: 'contact/show/show'
    });
  });

}());
