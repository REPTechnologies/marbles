/*jslint indent: 2, nomen: true*/
/*global Marbles, M */
(function () {
  "use strict";

  Marbles.module("FindApp.List.Event", function (Event, Marbles, Backbone, Marionette, $, _) {

    Event.List = Marionette.CompositeView.extend({
      template: 'find/event/list',
      childView: Marbles.EventApp.Card.View,
      childViewContainer: '.event-list'
    });

  });

}());