(function () {
  'use strict';

  Marbles.module('TrendsApp.Summary.Chart', function (Chart, Marbles, Backbone, Marionette, $, _) {
    function PollFrequencyChart(config) {
      this.ndxPoll = config.ndxPoll;
      this.pollDayDim = this.ndxPoll.dimension(_.property('day'));
      this.pollCountByDay = this.pollDayDim.group().reduceCount();

      this.initialize(config);
    }

    PollFrequencyChart.prototype.initialize = function (config) {
      this.chart = dc.barChart(config.container)
        .options(this.getChartOptions(config));
      this.chart.xAxis().tickFormat(function (v) {
        return v.split('.')[1];
      });
      M.fn.resizeChart(this.chart, $(config.container).parent());
    };

    PollFrequencyChart.prototype.getChartOptions = function (config) {
      return _.extend({
        dimension: this.pollDayDim,
        group: this.pollCountByDay,
        valueAccessor: function (d) {
          return d.value / gon.foci.length;
        },
        x: d3.scale.ordinal(),
        xUnits: dc.units.ordinal,
        elasticY: true,
      }, config.chartOptions);
    };

    PollFrequencyChart.prototype.destroy = function () {
      this.pollCountByDay.dispose();
      this.pollDayDim.dispose();
    };

    Chart.PollFrequencyChart = PollFrequencyChart;
  });

}());
