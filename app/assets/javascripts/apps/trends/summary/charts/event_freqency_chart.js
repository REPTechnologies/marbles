(function () {
  'use strict';

  Marbles.module('TrendsApp.Summary.Chart', function (Chart, Marbles, Backbone, Marionette, $, _) {
    function EventFrequencyChart(config) {
      this.ndxEvent = config.ndxEvent;
      this.eventMonthDim = this.ndxEvent.dimension(_.property('month'));
      this.eventCountByMonth = this.eventMonthDim.group().reduceCount();

      this.initialize(config);
    }

    EventFrequencyChart.prototype.initialize = function (config) {
      this.chart = dc.barChart(config.container).options(this.getChartOptions(config));
      this.chart.xAxis().tickFormat(d3.time.format('%b'));
    };

    EventFrequencyChart.prototype.getXScale = function (config) {
      return d3.time.scale().domain([
        new Date(2014, 0, 1),
        new Date(2014, 11, 31)
      ]);
    };

    EventFrequencyChart.prototype.getChartOptions = function (config) {
      return _.extend({
        dimension: this.eventMonthDim,
        group: this.eventCountByMonth,
        x: this.getXScale(config),
        xUnits: d3.time.months,
        elasticY: true,
      }, config.chartOptions);
    };

    EventFrequencyChart.prototype.destroy = function () {
      this.eventCountByMonth.dispose();
      this.eventMonthDim.dispose();
    };

    Chart.EventFrequencyChart = EventFrequencyChart;
  });

}());
