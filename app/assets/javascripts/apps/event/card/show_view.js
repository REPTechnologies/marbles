/*jslint indent: 2, nomen: true*/
/*global Marbles */
(function () {
  "use strict";

  Marbles.module("EventApp.Card", function (Card, Marbles, Backbone, Marionette, $, _) {

    Card.View = Marionette.ItemView.extend({
      template: 'event/card/show',
      className: 'event',
      templateHelpers: {
        time: function () {
          return new Date(this.event.held_at).toLocaleTimeString();
        }
      }
    });

  });

}());