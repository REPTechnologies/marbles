(function () {
  'use strict';

  Marbles.module('EventApp.List', function (List, Marbles, Backbone, Marionette, $, _) {

    List.View = Marionette.CompositeView.extend({
      template: 'find/event/list',
      childView: Marbles.EventApp.Card.View,
      childViewContainer: '.event-list'
    });

  });

}());
