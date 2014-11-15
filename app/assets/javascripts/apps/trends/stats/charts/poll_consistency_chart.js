(function () {
  'use strict';

  Marbles.module('TrendsApp.Stats.Chart', function (Chart, Marbles, Backbone, Marionette, $, _) {
    function PollConsistencyChart(config) {
      this.ndxPoll = config.ndxPoll;
      this.focusDim = this.ndxPoll.dimension(_.property('focus'));
      this.consistencyByFocus = this.focusDim.group()
        .reduce.apply(null, this.getReducers());

      this.initialize(config);
    }

    PollConsistencyChart.prototype.getReducers = function () {
      return [
        function addFn(p, v) {
          ++p.count;
          var delta = v.score - p.avgScore;
          p.avgScore += delta / p.count;
          p.m2 += delta * (v.score - p.avgScore);
          p.variance = p.m2 / (p.count - 1);
          p.consistency = 100.0 / p.variance;
          return p;
        }, function removeFn(p, v) {
          --p.count;
          var delta = v.score - p.avgScore;
          p.avgScore -= delta / p.count;
          p.m2 -= delta * (v.score - p.avgScore);
          p.variance = p.m2 / (p.count - 1);
          p.consistency = 100.0 / p.variance;
          return p;
        }, function initFn() {
          return {count: 0, avgScore: 0.0, consistency: 0.0, m2: 0.0};
        }
      ];
    };

    PollConsistencyChart.prototype.getColorScale = function () {
      return d3.scale.ordinal()
        .domain(_.pluck(gon.foci, 'name'))
        .range(_.pluck(gon.foci, 'color'));
    };

    PollConsistencyChart.prototype.initialize = function (config) {
      this.chart = dc.bubbleChart(config.container)
        .options(this.getChartOptions(config));
    };

    PollConsistencyChart.prototype.getChartOptions = function (config) {
      return _.extend({
        width: 780,
        height: 300,
        dimension: this.focusDim,
        group: this.consistencyByFocus,
        colors: this.getColorScale(),
        keyAccessor: function (d) {
          return d.value.consistency;
        },
        valueAccessor: function (d) {
          return d.value.avgScore;
        },
        radiusValueAccessor: function (d) {
          return d.value.avgScore;
        },
        colorAccessor: function (d) {
          return d.key;
        },
        elasticX: true,
        x: d3.scale.linear(),
        y: d3.scale.linear().domain([0, 100]),
        r: d3.scale.linear().domain([0, 100]),
        renderHorizontalGridLines: true, 
        renderVerticalGridLines: true,
        xAxisLabel: 'Consistency',
        yAxisLabel: 'Average Score',
        xAxisPadding: '5%',
        maxBubbleRelativeSize: 0.08,
        renderLabel: false,
        renderTitle: true,
        title: function (d) {
          return [
            d.key,
            'Average Score: ' + M.format.number(d.value.avgScore),
            'Consistency: ' + M.format.number(d.value.consistency)
          ].join('\n');
        }
      }, config.chartOptions);
    };

    PollConsistencyChart.prototype.destroy = function () {
      this.focusDim.dispose();
      this.consistencyByFocus.dispose();
    };

    Chart.PollConsistencyChart = PollConsistencyChart;
  });

}());
