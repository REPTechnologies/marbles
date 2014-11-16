(function () {
  'use strict';

  Marbles.module('TrendsApp.Stats.Metrics', function (Metrics, Marbles, Backbone, Marionette, $, _) {
    Metrics.Controller = Marbles.Controller.extend({
      initialize: function initializeFn(options) {
        this.view = this.getView(options.ndxPoll);

        Marbles.vent.on('time:frame:change', _.bind(function(timeFrame) {
          this.view.changeTimeFrame(timeFrame);
        }, this));

        this.show(this.view);
      },
      getView: function getViewFn(ndxPoll) {
        return new Metrics.View({
          ndxPoll: ndxPoll
        });
      }
    });
  });

}());
