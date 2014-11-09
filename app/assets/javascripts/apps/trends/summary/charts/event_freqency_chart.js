(function () {
  'use strict';

  Marbles.module('TrendsApp.Summary.Chart', function (Chart, Marbles, Backbone, Marionette, $, _) {
    function EventFrequencyChart(config) {
      this.ndxEvent = config.ndxEvent;
      this.eventDayDim = this.ndxEvent.dimension(_.property('day'));
      this.eventCountByDay = this.eventDayDim.group().reduceCount();

      this.initialize(config);
    }

    EventFrequencyChart.prototype.initialize = function (config) {
      this.chart = dc.barChart(config.container)
        .options(this.getChartOptions(config));
      this.chart.xAxis().tickFormat(function (v) {
        return v.split('.')[1];
      });
    };

    EventFrequencyChart.prototype.getChartOptions = function (config) {
      return _.extend({
        dimension: this.eventDayDim,
        group: this.eventCountByDay,
        x: d3.scale.ordinal(),
        xUnits: dc.units.ordinal,
        elasticY: true
      }, config.chartOptions);
    };

    EventFrequencyChart.prototype.destroy = function () {
      this.eventCountByDay.dispose();
      this.eventDayDim.dispose();
    };

    Chart.EventFrequencyChart = EventFrequencyChart;
  });

}());
