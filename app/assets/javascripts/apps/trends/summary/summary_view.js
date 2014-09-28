(function () {
  'use strict';

  Marbles.module('TrendsApp.Summary', function (Summary, Marbles, Backbone, Marionette, $, _) {
    Summary.View = Marionette.ItemView.extend({
      template: 'trends/summary/view',
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
      },
      onDestroy: function onDestroyFn() {
        this.pollFreqChart.destroy();
        this.eventFreqChart.destroy();
      }
    });
  });

}());
