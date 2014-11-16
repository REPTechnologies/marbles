(function () {
  'use strict';

  Marbles.module('TrendsApp.Stats.Metrics', function (Metrics, Marbles, Backbone, Marionette, $, _) {
    Metrics.Controller = Marbles.Controller.extend({
      initialize: function initializeFn(options) {
        this.layout = this.getView(options.ndxEvent);
        this.show(this.layout);
      },
      getView: function getViewFn(ndxEvent) {
        return new Metrics.View({
          ndxEvent: ndxEvent
        });
      }
    });
  });

}());
