(function () {
  'use strict';

  Marbles.module('TrendsApp.Summary', function (Summary, Marbles, Backbone, Marionette, $, _) {
    Summary.Layout = Marionette.LayoutView.extend({
      template: 'trends/summary/show',
      regions: {
        trendingUpRegion: '#trending-up-region',
        trendingDownRegion: '#trending-down-region',
        recommendedFociRegion: '#recommended-foci-region',
        metricsRegion: '#metrics-region',
        recentRegion: '#recent-region'
      },
      initialize: function initializeFn(options) {
        this.ndxPoll = options.ndxPoll;
        this.ndxEvent = options.ndxEvent;
      },
      onShow: function onShowFn() {
        this.pollFreqChart = new Summary.Chart.PollFrequencyChart({
          container: '#poll-frequency-chart',
          ndxPoll: this.ndxPoll
        });
        this.eventFreqChart = new Summary.Chart.EventFrequencyChart({
          container: '#event-frequency-chart',
          ndxEvent: this.ndxEvent
        });
        this.eventBreakdownChart = new Summary.Chart.EventBreakdownChart({
          container: '#event-breakdown-chart',
          ndxEvent: this.ndxEvent
        });
      },
      onDestroy: function onDestroyFn() {
        this.pollFreqChart.destroy();
        this.eventFreqChart.destroy();
        this.eventBreakdownChart.destroy();
      }
    });
  });

}());
