(function () {
  'use strict';

  Marbles.module('TrendsApp.Summary', function (Summary, Marbles, Backbone, Marionette, $, _) {
    Summary.Controller = Marbles.Controller.extend({
      initialize: function initializeFn(options) {
        this.layout = this.getView(options.ndxPoll, options.ndxEvent);
        this.show(this.layout);
      },
      getView: function getViewFn(ndxPoll, ndxEvent) {
        return new Summary.View({
          ndxPoll: ndxPoll,
          ndxEvent: ndxEvent
        });
      }
    });
  });

}());
