/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module('FooterApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {
    Show.View = Marionette.ItemView.extend({
      template: 'footer/show/show',
      tagName: 'footer'
    });
  });

}());