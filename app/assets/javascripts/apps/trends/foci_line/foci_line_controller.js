(function () {
  'use strict';

  Marbles.module('TrendsApp.FociLine', function (FociLine, Marbles, Backbone, Marionette, $, _) {
    FociLine.Controller = Marbles.Controller.extend({
      initialize: function initializeFn(options) {
        this.layout = this.getView(options.ndx);

        Marbles.vent.on('time:frame:change', _.bind(function(timeFrame) {
          this.layout.changeTimeFrame(timeFrame);
        }, this));

        this.show(this.layout);
      },
      getView: function getViewFn(ndx) {
        return new FociLine.View({
          ndx: ndx
        });
      }
    });
  });

}());
