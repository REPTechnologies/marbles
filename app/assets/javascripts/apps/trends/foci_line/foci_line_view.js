(function () {
  'use strict';

  Marbles.module('TrendsApp.FociLine', function (FociLine, Marbles, Backbone, Marionette, $, _) {
    FociLine.View = Marionette.ItemView.extend({
      template: 'trends/foci_line/view',
      className: 'row',
      initialize: function initializeFn(options) {
        this.ndx = options.ndx;
        this.monthDim = this.ndx.dimension(_.property('month'));
        this.fociAveragesByMonth = this.monthDim.group().reduce.apply({}, this.reducers);
      },
      onShow: function onShowFn() {
        this.fociChart = this.initChart();
        this.addLineCharts();
      },
      onDestroy: function onDestroyFn() {
        this.monthDim.dispose();
      },
      reducers: [
        function addFn(p, v) {
          var focus = v.focus;
          p.foci[focus] = p.foci[focus] || {count: 0, sum: 0, avg: 0};
          ++p.foci[focus].count;
          p.foci[focus].sum += v.score;
          p.foci[focus].avg = p.foci[focus].sum / p.foci[focus].count;
          return p;
        }, function removeFn(p, v) {
          var focus = v.focus;
          --p.foci[focus].count;
          p.foci[focus].sum -= v.score;
          p.foci[focus].avg = p.foci[focus].sum / p.foci[focus].count;
          return p;
        }, function initFn() {
          return {foci: {}};
        }
      ],
      initChart: function initChartFn() {
        var xScale = d3.time.scale().domain([
          new Date(2014, 0, 1),
          new Date(2014, 11, 31)
        ]);

        var titleFormat = function titleFormatFn(d) {
          return this.layer + '\nAverage Score in ' + M.format.monthName(d.key)
              + ': ' + d.value.foci[this.layer].avg;
        };

        return dc.compositeChart('#foci-line-chart').options({
          width: 750,
          dimension: this.monthDim,
          x: xScale,
          xUnits: d3.time.months,
          brushOn: false,
          elasticY: true,
          title: titleFormat
        });
      },
      addLineCharts: function addLineChartsFn() {
        var lineCharts = _.map(gon.foci, function (focus) {
          return dc.lineChart(this.fociChart).options({
            valueAccessor: this._focusAvg(focus),
            ordinalColors: [focus.color]
          }).group(this.fociAveragesByMonth, focus.name);
        }, this);

        this.fociChart.compose(lineCharts);
      },
      _focusAvg: function focusAvgFn(focus) {
        return function (d) {
          return d.value.foci[focus.name].avg;
        };
      }
    });
  });

}());
