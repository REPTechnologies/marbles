(function () {
  'use strict';

  Marbles.module('TrendsApp.Stats.Metrics', function (Metrics, Marbles, Backbone, Marionette, $, _) {

    Metrics.View = Marionette.ItemView.extend({
      template: 'trends/stats/metrics/view',
      initialize: function initializeFn(options) {
        this.ndxPoll = options.ndxPoll;
        this.metrics = this.ndxPoll.groupAll().reduce.apply(null, this.getReducers());
        this.changeTimeFrame(Marbles.request('get:time:frame'));
      },
      onShow: function onShowFn() {
        this.displayValues();
        this.$el.find('.label[data-toggle]').tooltip({
          placement: 'right'
        });
      },
      changeTimeFrame: function changeTimeFrameFn(timeFrame) {
        this.totalDays = timeFrame[1].diff(timeFrame[0], 'days');
      },
      onDestroy: function onDestroyFn() {
        this.metrics.dispose();
      },
      displayValues: function displayValuesFn() {
        this.pollCountDisplay = dc.numberDisplay('#poll-count-display').options({
          group: this.metrics,
          valueAccessor: function (d) {
            return d.count / gon.foci.length;
          },
          formatNumber: M.format.round
        });
        this.reportPercentDisplay = dc.numberDisplay('#report-percent-display').options({
          group: this.metrics,
          valueAccessor: _.bind(function (d) {
            return d.numDays / this.totalDays;
          }, this),
          formatNumber: d3.format('.2p')
        });
      },
      getReducers: function getReducersFn() {
        var dates = {};
        return [
          function addFn(p, v) {
            ++p.count;
            var date = M.format.date(v.dd);
            if (!dates[date]) {
              dates[date] = true;
              ++p.numDays;
            }
            return p;
          },
          function removeFn(p, v) {
            --p.count;
            var date = M.format.date(v.dd);
            if (dates[date]) {
              dates[date] = false;
              --p.numDays;
            }
            return p;
          },
          function initFn() {
            return {count: 0, numDays: 0};
          }
        ];
      }
    });

  });

}());
