(function () {
  'use strict';

  Marbles.module('TrendsApp.FociLine', function (FociLine, Marbles, Backbone, Marionette, $, _) {
    FociLine.View = Marionette.LayoutView.extend({
      template: 'trends/foci_line/view',
      className: 'row',
      regions: {
        recentRegion: '#recent-region'
      },
      ui: {
        fociLineContainer: '#foci-line-chart'
      },
      initialize: function initializeFn(options) {
        this.ndx = options.ndx;
        this.timeDim = this.ndx.dimension(_.property('dd'));
        this.fociAveragesByTime = this.timeDim.group().reduce.apply({}, this.reducers);
      },
      onShow: function onShowFn() {
        this.fociChart = this.initChart();
        M.fn.resizeChart(this.fociChart, this.ui.fociLineContainer.parent());
        this.addLineCharts();
        setTimeout(_.bind(function () {
          this.fociChart.focus(Marbles.request('get:time:frame'));
        }, this), 5);
      },
      onDestroy: function onDestroyFn() {
        this.timeDim.dispose();
        this.fociAveragesByTime.dispose();
      },
      changeTimeFrame: function changeTimeFrameFn(timeFrame) {
        this.fociChart.focus(timeFrame);
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
        return dc.compositeChart('#foci-line-chart').options({
          height: 247,
          dimension: this.timeDim,
          x: d3.time.scale().domain([moment().subtract(400, 'days').toDate(), new Date()]),
          xUnits: d3.time.days,
          brushOn: false,
          elasticY: true,
          yAxisPadding: 5,
          title: this._titleFormat,
          yAxisLabel: 'Score',
          xAxisLabel: 'Time'
        });
      },
      addLineCharts: function addLineChartsFn() {
        var lineCharts = _.map(gon.foci, function (focus) {
          return dc.lineChart(this.fociChart).options({
            valueAccessor: this._focusAvg(focus),
            ordinalColors: [focus.color]
          }).group(this.fociAveragesByTime, focus.name);
        }, this);

        this.fociChart.compose(lineCharts);
      },
      _focusAvg: function focusAvgFn(focus) {
        return function (d) {
          return d.value.foci[focus.name].avg;
        };
      },
      _titleFormat: function titleFormatFn(d) {
        return this.layer + '\nAverage Score: ' + d.value.foci[this.layer].avg;
      }
    });
  });

}());
