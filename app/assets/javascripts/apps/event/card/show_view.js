(function () {
  'use strict';

  Marbles.module('EventApp.Card', function (Card, Marbles, Backbone, Marionette, $, _) {

    Card.View = Marionette.ItemView.extend({
      template: 'event/card/show',
      className: 'event',
      templateHelpers: Marbles.EventApp.TemplateHelpers
    });

  });

}());
