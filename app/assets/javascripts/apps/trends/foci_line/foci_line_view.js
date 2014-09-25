(function () {
  'use strict';

  Marbles.module('TrendsApp.FociLine', function (FociLine, Marbles, Backbone, Marionette, $, _) {
    FociLine.View = Marionette.ItemView.extend({
      template: 'trends/foci_line/view',
      className: 'row',
      initialize: function initializeFn(options) {
        this.ndx = options.ndx;
        this.monthDim = this.ndx.dimension(function (d) {return d.month;});
        this.fociAveragesByMonth = this.monthDim.group().reduce(function addFn(p, v) {
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
        });
      },
      onShow: function onShowFn() {
        this.fociChart = dc.compositeChart('#foci-line-chart')
          .width(750)
          .dimension(this.monthDim)
          .x(d3.time.scale().domain([new Date(2014, 0, 1), new Date(2014, 11, 31)]))
          .xUnits(d3.time.months)
          .brushOn(false)
          .elasticY(true)
          .title(function (d) {
            return this.layer + '\nAverage Score in ' + M.format.monthName(d.key) + ': ' + d.value.foci[this.layer].avg;
          });

        var lineCharts = [];
        var focusAvgFn = function getFocusAvgFn(focus) {
          return function (d) {
            return d.value.foci[focus.name].avg;
          };
        };
        _.each(gon.foci, function (focus) {
          lineCharts.push(dc.lineChart(this.fociChart)
            .group(this.fociAveragesByMonth, focus.name)
            .valueAccessor(focusAvgFn(focus))
            .ordinalColors([focus.color])
          );
        }, this);

        this.fociChart.compose(lineCharts);
      },
      onDestroy: function onDestroyFn() {
        this.monthDim.dispose();
      }
    });
  });

}());
