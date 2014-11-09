(function () {
  'use strict';

  Marbles.module('TrendsApp.FociLine', function (FociLine, Marbles, Backbone, Marionette, $, _) {
    FociLine.Controller = Marbles.Controller.extend({
      initialize: function initializeFn(options) {
        this.ndxPoll = options.ndx;
        this.layout = this.getView(this.ndxPoll);

        Marbles.vent.on('time:frame:change', _.bind(function(timeFrame) {
          this.layout.changeTimeFrame(timeFrame);
        }, this));
        
        this.listenTo(this.layout, 'show', this.showRecent);

        this.show(this.layout);
      },
      getView: function getViewFn(ndx) {
        return new FociLine.View({
          ndx: ndx
        });
      },
      showRecent: function() {
        Marbles.execute('show:trends:recent', this.layout.recentRegion, this.ndxPoll);
      }
    });
  });

}());
