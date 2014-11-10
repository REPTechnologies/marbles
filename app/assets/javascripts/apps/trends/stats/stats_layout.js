(function () {
  'use strict';

  Marbles.module('TrendsApp.Stats', function (Stats, Marbles, Backbone, Marionette, $, _) {
    Stats.Layout = Marionette.LayoutView.extend({
      template: 'trends/stats/show',
      regions: {
        
      },
      initialize: function initializeFn(options) {
        this.ndxPoll = options.ndxPoll;
        this.ndxEvent = options.ndxEvent;
      },
      onShow: function onShowFn() {
        this.consistencyChart = new Stats.Chart.PollConsistencyChart({
          container: '#poll-consistency-chart',
          ndxPoll: this.ndxPoll
        });
      },
      onDestroy: function onDestroyFn() {
        this.consistencyChart.destroy();
      }
    });
  });

}());
