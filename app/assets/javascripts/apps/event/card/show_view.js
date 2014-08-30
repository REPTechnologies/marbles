(function () {
  'use strict';

  Marbles.module('EventApp.Card', function (Card, Marbles, Backbone, Marionette, $, _) {

    Card.View = Marbles.ItemView.extend({
      template: 'event/card/show',
      className: 'event',
      templateHelpers: function () {return Marbles.EventApp.TemplateHelpers;},
      events: {
        'click .title': function () {
          Marbles.vent.trigger('event:show', this.model);
        }
      }
    });

  });

}());
