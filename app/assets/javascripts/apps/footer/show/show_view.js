/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module('FooterApp.Show', function (Show, Marbles, Backbone, Marionette, $, _) {
    Show.View = Marbles.ItemView.extend({
      template: 'footer/show/show',
      id: 'footer'
    });
  });

}());