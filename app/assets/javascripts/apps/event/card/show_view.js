/*jslint indent: 2, nomen: true*/
/*global Marbles, tinycolor */
(function () {
  "use strict";

  Marbles.module("EventApp.Card", function (Card, Marbles, Backbone, Marionette, $, _) {

    Card.View = Marionette.ItemView.extend({
      template: 'event/card/show',
      className: 'event',
      templateHelpers: {
        time: function () {
          return new Date(this.event.held_at).toLocaleTimeString();
        },
        join_style: function () {
          var baseColor = tinycolor.darken(this.event.primary_focus.color, 5).toHexString();
          var shadeColor = tinycolor.darken(baseColor, 5).toHexString();
          return 'background-color: ' + baseColor + '; border-color: ' + shadeColor + ';';
        }
      }
    });

  });

}());