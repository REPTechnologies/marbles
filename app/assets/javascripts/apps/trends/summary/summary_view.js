(function () {
  'use strict';

  Marbles.module('TrendsApp.Summary', function (Summary, Marbles, Backbone, Marionette, $, _) {
    Summary.View = Marionette.ItemView.extend({
      template: 'trends/summary/view',
      initialize: function initializeFn(options) {
        this.ndxPoll = options.ndxPoll;
        this.ndxEvent = options.ndxEvent;
        this.pollMonthDim = this.ndxPoll.dimension(_.property('month'));
        this.pollCountByMonth = this.pollMonthDim.group().reduce.apply(null, this.pollCountReducers);
      },
      onShow: function onShowFn() {
        this.pollFreqChart = this.initPollFreqChart();
      },
      onDestroy: function onDestroyFn() {
        this.pollMonthDim.dispose();
      },
      pollCountReducers: [
        function addFn(p, v) {
          var pollId = v.poll.id;
          if (!_.contains(p.ids, pollId)) {
            p.ids.push(pollId);
            ++p.count;
          }
          return p;
        }, function removeFn(p, v) {
          var pollId = v.poll.id;
          if (_.contains(p.ids, pollId)) {
            p.ids = _.without(p.ids, pollId);
            --p.count;
          }
          return p;
        }, function initFn() {
          return {ids: [], count: 0};
        }
      ],
      initPollFreqChart: function initPollFreqChartFn() {
        var xScale = d3.time.scale().domain([
          new Date(2014, 0, 1),
          new Date(2014, 11, 31)
        ]);

        return dc.barChart('#poll-frequecy-chart').options({
          width: 360,
          height: 200,
          dimension: this.pollMonthDim,
          group: this.pollCountByMonth,
          valueAccessor: _.compose(_.property('count'), _.property('value')),
          x: xScale,
          xUnits: d3.time.months,
          brushOn: false,
          elasticY: true,
        }).xAxis().tickFormat(d3.time.format('%b'));
      }
    });
  });

}());
