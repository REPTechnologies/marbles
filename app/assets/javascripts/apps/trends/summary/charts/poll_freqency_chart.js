(function () {
  'use strict';

  Marbles.module('TrendsApp.Summary.Chart', function (Chart, Marbles, Backbone, Marionette, $, _) {
    function PollFrequencyChart(config) {
      this.ndxPoll = config.ndxPoll;
      this.pollMonthDim = this.ndxPoll.dimension(_.property('month'));
      this.pollCountByMonth = this.pollMonthDim.group().reduce.apply(null, this.getReducers());

      this.initialize(config);
    }

    PollFrequencyChart.prototype.initialize = function (config) {
      this.chart = dc.barChart(config.container).options(this.getChartOptions(config));
      this.chart.xAxis().tickFormat(d3.time.format('%b'));
    };

    PollFrequencyChart.prototype.getReducers = function () {
      return [
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
      ];
    };

    PollFrequencyChart.prototype.getXScale = function (config) {
      return d3.time.scale().domain([
        new Date(2014, 0, 1),
        new Date(2014, 11, 31)
      ]);
    };

    PollFrequencyChart.prototype.getChartOptions = function (config) {
      return _.extend({
        dimension: this.pollMonthDim,
        group: this.pollCountByMonth,
        valueAccessor: _.compose(_.property('count'), _.property('value')),
        x: this.getXScale(config),
        xUnits: d3.time.months,
        elasticY: true,
      }, config.chartOptions);
    };

    PollFrequencyChart.prototype.destroy = function () {
      this.pollCountByMonth.dispose();
      this.pollMonthDim.dispose();
    };

    Chart.PollFrequencyChart = PollFrequencyChart;
  });

}());
