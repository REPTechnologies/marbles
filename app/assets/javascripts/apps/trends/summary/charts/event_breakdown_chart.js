(function () {
  'use strict';

  Marbles.module('TrendsApp.Summary.Chart', function (Chart, Marbles, Backbone, Marionette, $, _) {
    function EventBreakdownChart(config) {
      this.ndxEvent = config.ndxEvent;
      this.eventFocusDim = this.ndxEvent.dimension(_.compose(_.property('name'), _.property('primary_focus')));
      this.eventCountByFocus = this.eventFocusDim.group().reduceCount();

      this.initialize(config);
    }

    EventBreakdownChart.prototype.initialize = function (config) {
      this.chart = dc.pieChart(config.container).options(this.getChartOptions(config));
    };

    EventBreakdownChart.prototype.getColorScale = function () {
      return d3.scale.ordinal().domain(_.pluck(gon.foci, 'name')).range(_.pluck(gon.foci, 'color'));
    };

    EventBreakdownChart.prototype.getChartOptions = function (config) {
      return _.extend({
        height: 300,
        radius: 90,
        cy: 90,
        dimension: this.eventFocusDim,
        group: this.eventCountByFocus,
        renderLabel: false,
        legend: dc.legend().y(200).x(40),
        colors: this.getColorScale()
      }, config.chartOptions);
    };

    EventBreakdownChart.prototype.destroy = function () {
      this.eventCountByFocus.dispose();
      this.eventFocusDim.dispose();
    };

    Chart.EventBreakdownChart = EventBreakdownChart;
  });

}());
